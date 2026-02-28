const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const foods = require("./foods_data");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, max: 100,
  message: { success: false, error: "Too many requests. Try again after 15 minutes." },
}));

const ok  = (res, data, meta = {}) => res.json({ success: true, ...meta, data });
const err = (res, status, message) => res.status(status).json({ success: false, error: message });

// ── Docs ──
app.get("/", (req, res) => {
  res.json({
    name: "🍛 Indian Food Nutrition API",
    version: "2.0.0",
    total_foods: foods.length,
    categories: [...new Set(foods.map(f => f.category))],
    diet_types: ["vegetarian", "vegan", "non_vegetarian"],
    regions: [...new Set(foods.map(f => f.region))],
    endpoints: {
      "GET  /foods"                    : "All foods | ?category= &diet_type= &region= &meal_type= &page= &limit=",
      "GET  /foods/search?q=dal"       : "Search by name, Hindi name or description",
      "GET  /foods/categories"         : "All categories with count",
      "GET  /foods/tags"               : "All health tags with count",
      "GET  /foods/tags/:tag"          : "Foods by health tag e.g. /foods/tags/keto_friendly",
      "GET  /foods/meal/:type"         : "Foods by meal: breakfast | lunch | dinner | snack | dessert",
      "GET  /foods/region/:region"     : "Foods by region e.g. /foods/region/South India",
      "GET  /foods/regions"            : "All regions with food count",
      "GET  /foods/random"             : "Random food | ?diet_type= &category= &region=",
      "GET  /foods/compare?ids=1,2,3"  : "Compare 2-5 foods side by side per 100g",
      "GET  /foods/filter/nutrition"   : "Filter by ?max_calories= &min_protein= &max_fat= &min_fiber= &diet_type= &meal_type=",
      "GET  /foods/allergens"          : "List all allergens",
      "GET  /foods/allergens/free/:a"  : "Foods free from a specific allergen",
      "GET  /foods/:id"                : "Single food full detail",
      "POST /foods/calculate"          : "Nutrition for custom serving  body: { food_id, serving_g }",
      "POST /foods/meal-plan"          : "Total nutrition for full meal  body: { items:[{food_id, serving_g}] }",
    },
  });
});

// ── GET /foods ──
app.get("/foods", (req, res) => {
  let r = [...foods];
  const { category, diet_type, region, meal_type, page=1, limit=10 } = req.query;
  if (category)  r = r.filter(f => f.category.toLowerCase()  === category.toLowerCase());
  if (diet_type) r = r.filter(f => f.diet_type.toLowerCase() === diet_type.toLowerCase());
  if (region)    r = r.filter(f => f.region.toLowerCase().includes(region.toLowerCase()));
  if (meal_type) r = r.filter(f => f.meal_type.includes(meal_type.toLowerCase()));
  const p = parseInt(page), l = Math.min(parseInt(limit), 50);
  ok(res, r.slice((p-1)*l, p*l), { total:r.length, page:p, limit:l, total_pages:Math.ceil(r.length/l) });
});

// ── GET /foods/search ──
app.get("/foods/search", (req, res) => {
  const { q } = req.query;
  if (!q || q.trim().length < 2) return err(res, 400, "Search query must be at least 2 characters. Use ?q=your_query");
  const query = q.toLowerCase().trim();
  const results = foods.filter(f =>
    f.name.toLowerCase().includes(query) || f.hindi_name.includes(query) ||
    f.description.toLowerCase().includes(query) || f.category.toLowerCase().includes(query) ||
    f.region.toLowerCase().includes(query)
  );
  if (!results.length) return err(res, 404, `No foods found matching "${q}"`);
  ok(res, results, { total:results.length, query:q });
});

// ── GET /foods/categories ──
app.get("/foods/categories", (req, res) => {
  const cats = [...new Set(foods.map(f => f.category))];
  ok(res, cats.map(c => ({ category:c, count:foods.filter(f=>f.category===c).length })));
});

// ── GET /foods/tags ──
app.get("/foods/tags", (req, res) => {
  const map = {};
  foods.forEach(f => f.health_tags.forEach(t => { map[t] = (map[t]||0)+1; }));
  ok(res, Object.entries(map).map(([tag,count])=>({tag,count})).sort((a,b)=>b.count-a.count));
});

// ── GET /foods/tags/:tag ──
app.get("/foods/tags/:tag", (req, res) => {
  const results = foods.filter(f => f.health_tags.includes(req.params.tag.toLowerCase()));
  if (!results.length) {
    const all = [...new Set(foods.flatMap(f=>f.health_tags))].sort();
    return err(res, 404, `No foods with tag "${req.params.tag}". Available tags: ${all.join(", ")}`);
  }
  ok(res, results, { tag:req.params.tag, total:results.length });
});

// ── GET /foods/regions ──
app.get("/foods/regions", (req, res) => {
  const regions = [...new Set(foods.map(f => f.region))];
  ok(res, regions.map(r => ({ region:r, count:foods.filter(f=>f.region===r).length })));
});

// ── GET /foods/region/:region ──
app.get("/foods/region/:region", (req, res) => {
  const results = foods.filter(f => f.region.toLowerCase().includes(req.params.region.toLowerCase()));
  if (!results.length) return err(res, 404, `No foods from region "${req.params.region}".`);
  ok(res, results, { region:req.params.region, total:results.length });
});

// ── GET /foods/meal/:meal_type ──
app.get("/foods/meal/:meal_type", (req, res) => {
  const valid = ["breakfast","lunch","dinner","snack","dessert"];
  if (!valid.includes(req.params.meal_type.toLowerCase()))
    return err(res, 400, `Invalid meal type. Valid: ${valid.join(", ")}`);
  const results = foods.filter(f => f.meal_type.includes(req.params.meal_type.toLowerCase()));
  ok(res, results, { meal_type:req.params.meal_type, total:results.length });
});

// ── GET /foods/random ──
app.get("/foods/random", (req, res) => {
  let pool = [...foods];
  const { diet_type, category, region } = req.query;
  if (diet_type) pool = pool.filter(f => f.diet_type.toLowerCase() === diet_type.toLowerCase());
  if (category)  pool = pool.filter(f => f.category.toLowerCase() === category.toLowerCase());
  if (region)    pool = pool.filter(f => f.region.toLowerCase().includes(region.toLowerCase()));
  if (!pool.length) return err(res, 404, "No foods found with the given filters.");
  ok(res, pool[Math.floor(Math.random() * pool.length)]);
});

// ── GET /foods/compare ──
app.get("/foods/compare", (req, res) => {
  const { ids } = req.query;
  if (!ids) return err(res, 400, "Provide food IDs. Example: ?ids=1,2,3");
  const idList = ids.split(",").map(id => parseInt(id.trim()));
  if (idList.length < 2) return err(res, 400, "Provide at least 2 food IDs.");
  if (idList.length > 5) return err(res, 400, "Maximum 5 foods can be compared.");
  const notFound = idList.filter(id => !foods.find(f => f.id === id));
  if (notFound.length) return err(res, 404, `Food IDs not found: ${notFound.join(", ")}`);
  const selected = idList.map(id => foods.find(f => f.id === id));
  const n = f => f.nutrition_per_100g;
  ok(res, {
    foods: selected.map(f => ({ id:f.id, name:f.name, diet_type:f.diet_type, category:f.category, region:f.region })),
    per_100g_comparison: {
      calories:        selected.map(f => ({ name:f.name, value:n(f).calories,        unit:"kcal" })),
      protein_g:       selected.map(f => ({ name:f.name, value:n(f).protein_g,       unit:"g"    })),
      carbohydrates_g: selected.map(f => ({ name:f.name, value:n(f).carbohydrates_g, unit:"g"    })),
      fat_g:           selected.map(f => ({ name:f.name, value:n(f).fat_g,           unit:"g"    })),
      fiber_g:         selected.map(f => ({ name:f.name, value:n(f).fiber_g,         unit:"g"    })),
      sodium_mg:       selected.map(f => ({ name:f.name, value:n(f).sodium_mg,       unit:"mg"   })),
      calcium_mg:      selected.map(f => ({ name:f.name, value:n(f).calcium_mg,      unit:"mg"   })),
      iron_mg:         selected.map(f => ({ name:f.name, value:n(f).iron_mg,         unit:"mg"   })),
    },
    winner: {
      lowest_calories:  selected.reduce((a,b) => n(a).calories  < n(b).calories  ? a:b).name,
      highest_protein:  selected.reduce((a,b) => n(a).protein_g > n(b).protein_g ? a:b).name,
      highest_fiber:    selected.reduce((a,b) => n(a).fiber_g   > n(b).fiber_g   ? a:b).name,
      lowest_fat:       selected.reduce((a,b) => n(a).fat_g     < n(b).fat_g     ? a:b).name,
      lowest_sodium:    selected.reduce((a,b) => n(a).sodium_mg < n(b).sodium_mg ? a:b).name,
    }
  }, { compared_count:selected.length });
});

// ── GET /foods/filter/nutrition ──
app.get("/foods/filter/nutrition", (req, res) => {
  const { max_calories, min_protein, max_fat, min_fiber, diet_type, meal_type, max_gi } = req.query;
  if (!max_calories && !min_protein && !max_fat && !min_fiber && !diet_type && !meal_type && !max_gi)
    return err(res, 400, "Provide at least one filter: max_calories, min_protein, max_fat, min_fiber, diet_type, meal_type, max_gi");
  let r = [...foods];
  if (max_calories) r = r.filter(f => f.nutrition_per_100g.calories        <= parseFloat(max_calories));
  if (min_protein)  r = r.filter(f => f.nutrition_per_100g.protein_g       >= parseFloat(min_protein));
  if (max_fat)      r = r.filter(f => f.nutrition_per_100g.fat_g           <= parseFloat(max_fat));
  if (min_fiber)    r = r.filter(f => f.nutrition_per_100g.fiber_g         >= parseFloat(min_fiber));
  if (diet_type)    r = r.filter(f => f.diet_type.toLowerCase()            === diet_type.toLowerCase());
  if (meal_type)    r = r.filter(f => f.meal_type.includes(meal_type.toLowerCase()));
  if (max_gi)       r = r.filter(f => f.glycemic_index                     <= parseInt(max_gi));
  if (!r.length) return err(res, 404, "No foods match the given nutrition filters.");
  ok(res, r, { total:r.length, filters_applied:{ max_calories,min_protein,max_fat,min_fiber,diet_type,meal_type,max_gi } });
});

// ── GET /foods/allergens ──
app.get("/foods/allergens", (req, res) => {
  const map = {};
  foods.forEach(f => f.allergens.forEach(a => { map[a] = (map[a]||0)+1; }));
  ok(res, Object.entries(map).map(([allergen,count])=>({allergen,count})).sort((a,b)=>b.count-a.count));
});

// ── GET /foods/allergens/free/:allergen ──
app.get("/foods/allergens/free/:allergen", (req, res) => {
  const allergen = req.params.allergen.toLowerCase();
  const results = foods.filter(f => !f.allergens.includes(allergen));
  ok(res, results, { free_from:allergen, total:results.length });
});

// ── POST /foods/calculate ──
app.post("/foods/calculate", (req, res) => {
  const { food_id, serving_g } = req.body;
  if (!food_id || !serving_g) return err(res, 400, 'Provide food_id and serving_g. Example: { "food_id": 1, "serving_g": 350 }');
  if (serving_g <= 0 || serving_g > 5000) return err(res, 400, "serving_g must be between 1 and 5000.");
  const food = foods.find(f => f.id === parseInt(food_id));
  if (!food) return err(res, 404, `Food ID ${food_id} not found.`);
  const m = serving_g / 100, p = food.nutrition_per_100g;
  ok(res, {
    food_name:food.name, hindi_name:food.hindi_name, serving_g,
    nutrition: {
      calories:        +(p.calories        * m).toFixed(1),
      protein_g:       +(p.protein_g       * m).toFixed(1),
      carbohydrates_g: +(p.carbohydrates_g * m).toFixed(1),
      fat_g:           +(p.fat_g           * m).toFixed(1),
      fiber_g:         +(p.fiber_g         * m).toFixed(1),
      sugar_g:         +(p.sugar_g         * m).toFixed(1),
      sodium_mg:       +(p.sodium_mg       * m).toFixed(1),
      calcium_mg:      +(p.calcium_mg      * m).toFixed(1),
      iron_mg:         +(p.iron_mg         * m).toFixed(1),
      vitamin_c_mg:    +(p.vitamin_c_mg    * m).toFixed(1),
    },
    health_tags:food.health_tags, allergens:food.allergens, glycemic_index:food.glycemic_index,
  });
});

// ── POST /foods/meal-plan ──
app.post("/foods/meal-plan", (req, res) => {
  const { items } = req.body;
  if (!items || !Array.isArray(items) || !items.length)
    return err(res, 400, 'Provide items array. Example: { "items": [{ "food_id": 1, "serving_g": 250 }] }');
  if (items.length > 10) return err(res, 400, "Maximum 10 items allowed.");
  const breakdown = [], allergenSet = new Set();
  const totals = { calories:0,protein_g:0,carbohydrates_g:0,fat_g:0,fiber_g:0,sugar_g:0,sodium_mg:0,calcium_mg:0,iron_mg:0,vitamin_c_mg:0 };
  for (const item of items) {
    const food = foods.find(f => f.id === parseInt(item.food_id));
    if (!food) return err(res, 404, `Food ID ${item.food_id} not found.`);
    const m = item.serving_g / 100, p = food.nutrition_per_100g;
    const iN = {
      calories:+(p.calories*m).toFixed(1), protein_g:+(p.protein_g*m).toFixed(1),
      carbohydrates_g:+(p.carbohydrates_g*m).toFixed(1), fat_g:+(p.fat_g*m).toFixed(1),
      fiber_g:+(p.fiber_g*m).toFixed(1), sugar_g:+(p.sugar_g*m).toFixed(1),
      sodium_mg:+(p.sodium_mg*m).toFixed(1), calcium_mg:+(p.calcium_mg*m).toFixed(1),
      iron_mg:+(p.iron_mg*m).toFixed(1), vitamin_c_mg:+(p.vitamin_c_mg*m).toFixed(1),
    };
    food.allergens.forEach(a => allergenSet.add(a));
    breakdown.push({ food_id:food.id, food_name:food.name, serving_g:item.serving_g, nutrition:iN });
    Object.keys(totals).forEach(k => { totals[k] = +(totals[k]+iN[k]).toFixed(1); });
  }
  ok(res, {
    breakdown, totals,
    daily_percent_of_2000kcal_diet: {
      calories:      +((totals.calories/2000)*100).toFixed(1),
      protein:       +((totals.protein_g/50)*100).toFixed(1),
      carbohydrates: +((totals.carbohydrates_g/300)*100).toFixed(1),
      fat:           +((totals.fat_g/65)*100).toFixed(1),
      fiber:         +((totals.fiber_g/25)*100).toFixed(1),
      sodium:        +((totals.sodium_mg/2300)*100).toFixed(1),
      calcium:       +((totals.calcium_mg/1000)*100).toFixed(1),
      iron:          +((totals.iron_mg/18)*100).toFixed(1),
      vitamin_c:     +((totals.vitamin_c_mg/90)*100).toFixed(1),
    },
    allergens_in_meal:[...allergenSet], items_count:items.length,
  });
});

// ── GET /foods/:id (LAST) ──
app.get("/foods/:id", (req, res) => {
  const food = foods.find(f => f.id === parseInt(req.params.id));
  if (!food) return err(res, 404, `Food ID ${req.params.id} not found. Visit /foods to see all.`);
  ok(res, food);
});

app.use((req, res) => {
  res.status(404).json({ success:false, error:`Route ${req.method} ${req.path} not found. Visit / for docs.` });
});

app.listen(PORT, () => {
  console.log(`\n🍛  Indian Food Nutrition API v2.0`);
  console.log(`📦  Total dishes: ${foods.length}`);
  console.log(`🚀  Running at  http://localhost:${PORT}`);
  console.log(`📖  Docs at     http://localhost:${PORT}/\n`);
});
