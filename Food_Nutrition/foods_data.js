const foods = [
  // ═══════════════════════════════════════════
  // BREAKFAST (1-40)
  // ═══════════════════════════════════════════
  {
    id:1, name:"Idli", hindi_name:"इडली", category:"breakfast", meal_type:["breakfast"],
    diet_type:"vegan", region:"South India", serving_size_g:120,
    nutrition_per_serving:{calories:140,protein_g:5,carbohydrates_g:28,fat_g:1,fiber_g:2,sugar_g:1,sodium_mg:280,calcium_mg:35,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:117,protein_g:4.2,carbohydrates_g:23.3,fat_g:0.8,fiber_g:1.7,sugar_g:0.8,sodium_mg:233,calcium_mg:29,iron_mg:1.3,vitamin_c_mg:0},
    health_tags:["low_fat","low_calorie","gut_friendly","diabetic_friendly"], allergens:[], glycemic_index:35,
    description:"Steamed fermented rice and lentil cakes, light and nutritious"
  },
  {
    id:2, name:"Masala Dosa", hindi_name:"मसाला दोसा", category:"breakfast", meal_type:["breakfast","snack"],
    diet_type:"vegan", region:"South India", serving_size_g:200,
    nutrition_per_serving:{calories:280,protein_g:8,carbohydrates_g:48,fat_g:7,fiber_g:4,sugar_g:3,sodium_mg:450,calcium_mg:55,iron_mg:2.8,vitamin_c_mg:12},
    nutrition_per_100g:{calories:140,protein_g:4,carbohydrates_g:24,fat_g:3.5,fiber_g:2,sugar_g:1.5,sodium_mg:225,calcium_mg:27.5,iron_mg:1.4,vitamin_c_mg:6},
    health_tags:["gut_friendly","energy_rich"], allergens:[], glycemic_index:45,
    description:"Crispy fermented crepe filled with spiced potato filling"
  },
  {
    id:3, name:"Aloo Paratha", hindi_name:"आलू पराठा", category:"breakfast", meal_type:["breakfast","lunch"],
    diet_type:"vegetarian", region:"North India", serving_size_g:120,
    nutrition_per_serving:{calories:310,protein_g:7,carbohydrates_g:42,fat_g:13,fiber_g:4,sugar_g:2,sodium_mg:380,calcium_mg:60,iron_mg:2.8,vitamin_c_mg:8},
    nutrition_per_100g:{calories:258,protein_g:5.8,carbohydrates_g:35,fat_g:10.8,fiber_g:3.3,sugar_g:1.7,sodium_mg:317,calcium_mg:50,iron_mg:2.3,vitamin_c_mg:6.7},
    health_tags:["energy_rich","filling"], allergens:["gluten","dairy"], glycemic_index:58,
    description:"Whole wheat flatbread stuffed with spiced mashed potato"
  },
  {
    id:4, name:"Poha", hindi_name:"पोहा", category:"breakfast", meal_type:["breakfast","snack"],
    diet_type:"vegan", region:"West India", serving_size_g:150,
    nutrition_per_serving:{calories:250,protein_g:6,carbohydrates_g:48,fat_g:5,fiber_g:3,sugar_g:3,sodium_mg:320,calcium_mg:25,iron_mg:4.5,vitamin_c_mg:20},
    nutrition_per_100g:{calories:167,protein_g:4,carbohydrates_g:32,fat_g:3.3,fiber_g:2,sugar_g:2,sodium_mg:213,calcium_mg:16.7,iron_mg:3,vitamin_c_mg:13.3},
    health_tags:["low_fat","iron_rich","energy_rich","diabetic_friendly"], allergens:[], glycemic_index:40,
    description:"Flattened rice cooked with onions, mustard seeds, and turmeric"
  },
  {
    id:5, name:"Upma", hindi_name:"उपमा", category:"breakfast", meal_type:["breakfast"],
    diet_type:"vegan", region:"South India", serving_size_g:150,
    nutrition_per_serving:{calories:210,protein_g:6,carbohydrates_g:36,fat_g:6,fiber_g:3,sugar_g:2,sodium_mg:380,calcium_mg:20,iron_mg:2,vitamin_c_mg:5},
    nutrition_per_100g:{calories:140,protein_g:4,carbohydrates_g:24,fat_g:4,fiber_g:2,sugar_g:1.3,sodium_mg:253,calcium_mg:13.3,iron_mg:1.3,vitamin_c_mg:3.3},
    health_tags:["low_fat","filling","energy_rich"], allergens:["gluten"], glycemic_index:50,
    description:"Semolina cooked with vegetables, mustard seeds, and curry leaves"
  },
  {
    id:6, name:"Medu Vada", hindi_name:"मेदु वड़ा", category:"breakfast", meal_type:["breakfast","snack"],
    diet_type:"vegan", region:"South India", serving_size_g:100,
    nutrition_per_serving:{calories:240,protein_g:9,carbohydrates_g:28,fat_g:11,fiber_g:3,sugar_g:1,sodium_mg:320,calcium_mg:40,iron_mg:2.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:240,protein_g:9,carbohydrates_g:28,fat_g:11,fiber_g:3,sugar_g:1,sodium_mg:320,calcium_mg:40,iron_mg:2.5,vitamin_c_mg:0},
    health_tags:["high_protein","energy_rich"], allergens:[], glycemic_index:48,
    description:"Crispy deep-fried lentil donuts, popular South Indian breakfast"
  },
  {
    id:7, name:"Uttapam", hindi_name:"उत्तपम", category:"breakfast", meal_type:["breakfast"],
    diet_type:"vegan", region:"South India", serving_size_g:150,
    nutrition_per_serving:{calories:200,protein_g:7,carbohydrates_g:35,fat_g:5,fiber_g:3,sugar_g:4,sodium_mg:280,calcium_mg:45,iron_mg:2,vitamin_c_mg:15},
    nutrition_per_100g:{calories:133,protein_g:4.7,carbohydrates_g:23.3,fat_g:3.3,fiber_g:2,sugar_g:2.7,sodium_mg:187,calcium_mg:30,iron_mg:1.3,vitamin_c_mg:10},
    health_tags:["gut_friendly","low_fat"], allergens:[], glycemic_index:42,
    description:"Thick rice pancake topped with onions, tomatoes and vegetables"
  },
  {
    id:8, name:"Pongal", hindi_name:"पोंगल", category:"breakfast", meal_type:["breakfast","lunch"],
    diet_type:"vegetarian", region:"South India", serving_size_g:200,
    nutrition_per_serving:{calories:320,protein_g:10,carbohydrates_g:52,fat_g:9,fiber_g:4,sugar_g:2,sodium_mg:340,calcium_mg:35,iron_mg:2.8,vitamin_c_mg:0},
    nutrition_per_100g:{calories:160,protein_g:5,carbohydrates_g:26,fat_g:4.5,fiber_g:2,sugar_g:1,sodium_mg:170,calcium_mg:17.5,iron_mg:1.4,vitamin_c_mg:0},
    health_tags:["gut_friendly","energy_rich","filling"], allergens:["dairy"], glycemic_index:50,
    description:"Comforting rice and lentil porridge seasoned with pepper and ghee"
  },
  {
    id:9, name:"Rava Dosa", hindi_name:"रवा दोसा", category:"breakfast", meal_type:["breakfast","snack"],
    diet_type:"vegan", region:"South India", serving_size_g:150,
    nutrition_per_serving:{calories:220,protein_g:6,carbohydrates_g:38,fat_g:6,fiber_g:2,sugar_g:2,sodium_mg:360,calcium_mg:30,iron_mg:2,vitamin_c_mg:5},
    nutrition_per_100g:{calories:147,protein_g:4,carbohydrates_g:25.3,fat_g:4,fiber_g:1.3,sugar_g:1.3,sodium_mg:240,calcium_mg:20,iron_mg:1.3,vitamin_c_mg:3.3},
    health_tags:["low_fat","energy_rich"], allergens:["gluten"], glycemic_index:55,
    description:"Crispy semolina crepe with onions, green chilies and coriander"
  },
  {
    id:10, name:"Pesarattu", hindi_name:"पेसरट्टू", category:"breakfast", meal_type:["breakfast"],
    diet_type:"vegan", region:"South India", serving_size_g:150,
    nutrition_per_serving:{calories:210,protein_g:12,carbohydrates_g:32,fat_g:4,fiber_g:6,sugar_g:2,sodium_mg:300,calcium_mg:50,iron_mg:3.5,vitamin_c_mg:5},
    nutrition_per_100g:{calories:140,protein_g:8,carbohydrates_g:21.3,fat_g:2.7,fiber_g:4,sugar_g:1.3,sodium_mg:200,calcium_mg:33.3,iron_mg:2.3,vitamin_c_mg:3.3},
    health_tags:["high_protein","high_fiber","diabetic_friendly","low_fat"], allergens:[], glycemic_index:35,
    description:"Green moong dal crepe, protein-rich Andhra breakfast"
  },
  {
    id:11, name:"Appam", hindi_name:"अप्पम", category:"breakfast", meal_type:["breakfast"],
    diet_type:"vegan", region:"South India", serving_size_g:120,
    nutrition_per_serving:{calories:190,protein_g:4,carbohydrates_g:38,fat_g:3,fiber_g:2,sugar_g:2,sodium_mg:200,calcium_mg:20,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:158,protein_g:3.3,carbohydrates_g:31.7,fat_g:2.5,fiber_g:1.7,sugar_g:1.7,sodium_mg:167,calcium_mg:16.7,iron_mg:1.3,vitamin_c_mg:0},
    health_tags:["gut_friendly","low_fat"], allergens:[], glycemic_index:52,
    description:"Lacy fermented rice pancake with soft center, Kerala specialty"
  },
  {
    id:12, name:"Puttu", hindi_name:"पुट्टू", category:"breakfast", meal_type:["breakfast"],
    diet_type:"vegan", region:"South India", serving_size_g:150,
    nutrition_per_serving:{calories:230,protein_g:5,carbohydrates_g:46,fat_g:3,fiber_g:3,sugar_g:1,sodium_mg:180,calcium_mg:15,iron_mg:2,vitamin_c_mg:0},
    nutrition_per_100g:{calories:153,protein_g:3.3,carbohydrates_g:30.7,fat_g:2,fiber_g:2,sugar_g:0.7,sodium_mg:120,calcium_mg:10,iron_mg:1.3,vitamin_c_mg:0},
    health_tags:["low_fat","energy_rich"], allergens:[], glycemic_index:55,
    description:"Steamed rice flour cylinders, traditional Kerala breakfast"
  },
  {
    id:13, name:"Dhokla", hindi_name:"ढोकला", category:"breakfast", meal_type:["breakfast","snack"],
    diet_type:"vegan", region:"West India", serving_size_g:150,
    nutrition_per_serving:{calories:180,protein_g:8,carbohydrates_g:32,fat_g:3,fiber_g:3,sugar_g:4,sodium_mg:420,calcium_mg:45,iron_mg:2.5,vitamin_c_mg:3},
    nutrition_per_100g:{calories:120,protein_g:5.3,carbohydrates_g:21.3,fat_g:2,fiber_g:2,sugar_g:2.7,sodium_mg:280,calcium_mg:30,iron_mg:1.7,vitamin_c_mg:2},
    health_tags:["high_protein","low_fat","gut_friendly","diabetic_friendly"], allergens:[], glycemic_index:35,
    description:"Steamed fermented chickpea flour cake, light and tangy Gujarati snack"
  },
  {
    id:14, name:"Khandvi", hindi_name:"खांडवी", category:"breakfast", meal_type:["breakfast","snack"],
    diet_type:"vegetarian", region:"West India", serving_size_g:100,
    nutrition_per_serving:{calories:150,protein_g:7,carbohydrates_g:20,fat_g:5,fiber_g:2,sugar_g:3,sodium_mg:350,calcium_mg:80,iron_mg:1.5,vitamin_c_mg:2},
    nutrition_per_100g:{calories:150,protein_g:7,carbohydrates_g:20,fat_g:5,fiber_g:2,sugar_g:3,sodium_mg:350,calcium_mg:80,iron_mg:1.5,vitamin_c_mg:2},
    health_tags:["high_protein","low_calorie","gut_friendly"], allergens:["dairy"], glycemic_index:32,
    description:"Thin rolled chickpea flour and yogurt savory snack from Gujarat"
  },
  {
    id:15, name:"Thepla", hindi_name:"थेपला", category:"breakfast", meal_type:["breakfast","lunch"],
    diet_type:"vegetarian", region:"West India", serving_size_g:100,
    nutrition_per_serving:{calories:260,protein_g:8,carbohydrates_g:38,fat_g:9,fiber_g:5,sugar_g:2,sodium_mg:320,calcium_mg:70,iron_mg:3,vitamin_c_mg:5},
    nutrition_per_100g:{calories:260,protein_g:8,carbohydrates_g:38,fat_g:9,fiber_g:5,sugar_g:2,sodium_mg:320,calcium_mg:70,iron_mg:3,vitamin_c_mg:5},
    health_tags:["high_fiber","energy_rich"], allergens:["gluten","dairy"], glycemic_index:48,
    description:"Spiced whole wheat flatbread with fenugreek leaves, Gujarati specialty"
  },
  {
    id:16, name:"Misal Pav", hindi_name:"मिसळ पाव", category:"breakfast", meal_type:["breakfast","lunch"],
    diet_type:"vegan", region:"West India", serving_size_g:250,
    nutrition_per_serving:{calories:380,protein_g:14,carbohydrates_g:58,fat_g:11,fiber_g:10,sugar_g:5,sodium_mg:680,calcium_mg:85,iron_mg:5.5,vitamin_c_mg:18},
    nutrition_per_100g:{calories:152,protein_g:5.6,carbohydrates_g:23.2,fat_g:4.4,fiber_g:4,sugar_g:2,sodium_mg:272,calcium_mg:34,iron_mg:2.2,vitamin_c_mg:7.2},
    health_tags:["high_protein","high_fiber","iron_rich"], allergens:["gluten"], glycemic_index:45,
    description:"Spicy sprouted moth bean curry served with bread rolls"
  },
  {
    id:17, name:"Sabudana Khichdi", hindi_name:"साबूदाना खिचड़ी", category:"breakfast", meal_type:["breakfast","snack"],
    diet_type:"vegetarian", region:"West India", serving_size_g:180,
    nutrition_per_serving:{calories:350,protein_g:7,carbohydrates_g:58,fat_g:11,fiber_g:2,sugar_g:3,sodium_mg:290,calcium_mg:60,iron_mg:2,vitamin_c_mg:5},
    nutrition_per_100g:{calories:194,protein_g:3.9,carbohydrates_g:32.2,fat_g:6.1,fiber_g:1.1,sugar_g:1.7,sodium_mg:161,calcium_mg:33.3,iron_mg:1.1,vitamin_c_mg:2.8},
    health_tags:["energy_rich","gluten_free"], allergens:["dairy"], glycemic_index:65,
    description:"Tapioca pearls cooked with peanuts and potatoes, popular fasting food"
  },
  {
    id:18, name:"Akki Roti", hindi_name:"अक्की रोटी", category:"breakfast", meal_type:["breakfast"],
    diet_type:"vegan", region:"South India", serving_size_g:100,
    nutrition_per_serving:{calories:220,protein_g:4,carbohydrates_g:44,fat_g:4,fiber_g:2,sugar_g:1,sodium_mg:250,calcium_mg:20,iron_mg:1.5,vitamin_c_mg:3},
    nutrition_per_100g:{calories:220,protein_g:4,carbohydrates_g:44,fat_g:4,fiber_g:2,sugar_g:1,sodium_mg:250,calcium_mg:20,iron_mg:1.5,vitamin_c_mg:3},
    health_tags:["gluten_free","low_fat"], allergens:[], glycemic_index:55,
    description:"Karnataka rice flour flatbread with onions and coriander"
  },
  {
    id:19, name:"Sattu Paratha", hindi_name:"सत्तू पराठा", category:"breakfast", meal_type:["breakfast","lunch"],
    diet_type:"vegan", region:"East India", serving_size_g:120,
    nutrition_per_serving:{calories:280,protein_g:12,carbohydrates_g:40,fat_g:8,fiber_g:6,sugar_g:2,sodium_mg:310,calcium_mg:45,iron_mg:3.5,vitamin_c_mg:2},
    nutrition_per_100g:{calories:233,protein_g:10,carbohydrates_g:33.3,fat_g:6.7,fiber_g:5,sugar_g:1.7,sodium_mg:258,calcium_mg:37.5,iron_mg:2.9,vitamin_c_mg:1.7},
    health_tags:["high_protein","high_fiber","energy_rich"], allergens:["gluten"], glycemic_index:45,
    description:"Whole wheat bread stuffed with roasted gram flour filling, Bihar specialty"
  },
  {
    id:20, name:"Moong Dal Chilla", hindi_name:"मूंग दाल चीला", category:"breakfast", meal_type:["breakfast","snack"],
    diet_type:"vegan", region:"North India", serving_size_g:150,
    nutrition_per_serving:{calories:220,protein_g:14,carbohydrates_g:30,fat_g:5,fiber_g:5,sugar_g:2,sodium_mg:290,calcium_mg:50,iron_mg:3,vitamin_c_mg:5},
    nutrition_per_100g:{calories:147,protein_g:9.3,carbohydrates_g:20,fat_g:3.3,fiber_g:3.3,sugar_g:1.3,sodium_mg:193,calcium_mg:33.3,iron_mg:2,vitamin_c_mg:3.3},
    health_tags:["high_protein","low_fat","diabetic_friendly","gluten_free"], allergens:[], glycemic_index:38,
    description:"Green lentil savory pancake, protein-rich healthy breakfast"
  },
  {
    id:21, name:"Besan Chilla", hindi_name:"बेसन चीला", category:"breakfast", meal_type:["breakfast","snack"],
    diet_type:"vegan", region:"North India", serving_size_g:150,
    nutrition_per_serving:{calories:230,protein_g:11,carbohydrates_g:32,fat_g:7,fiber_g:4,sugar_g:3,sodium_mg:310,calcium_mg:40,iron_mg:2.8,vitamin_c_mg:8},
    nutrition_per_100g:{calories:153,protein_g:7.3,carbohydrates_g:21.3,fat_g:4.7,fiber_g:2.7,sugar_g:2,sodium_mg:207,calcium_mg:26.7,iron_mg:1.9,vitamin_c_mg:5.3},
    health_tags:["high_protein","low_fat","gluten_free"], allergens:[], glycemic_index:40,
    description:"Chickpea flour savory pancake with vegetables and spices"
  },
  {
    id:22, name:"Bread Upma", hindi_name:"ब्रेड उपमा", category:"breakfast", meal_type:["breakfast"],
    diet_type:"vegan", region:"South India", serving_size_g:150,
    nutrition_per_serving:{calories:250,protein_g:7,carbohydrates_g:40,fat_g:8,fiber_g:3,sugar_g:4,sodium_mg:480,calcium_mg:40,iron_mg:2,vitamin_c_mg:10},
    nutrition_per_100g:{calories:167,protein_g:4.7,carbohydrates_g:26.7,fat_g:5.3,fiber_g:2,sugar_g:2.7,sodium_mg:320,calcium_mg:26.7,iron_mg:1.3,vitamin_c_mg:6.7},
    health_tags:["energy_rich","quick_meal"], allergens:["gluten"], glycemic_index:60,
    description:"Spiced bread crumble with onions, mustard seeds and curry leaves"
  },
  {
    id:23, name:"Rava Idli", hindi_name:"रवा इडली", category:"breakfast", meal_type:["breakfast"],
    diet_type:"vegetarian", region:"South India", serving_size_g:120,
    nutrition_per_serving:{calories:180,protein_g:6,carbohydrates_g:30,fat_g:5,fiber_g:2,sugar_g:2,sodium_mg:310,calcium_mg:40,iron_mg:1.8,vitamin_c_mg:2},
    nutrition_per_100g:{calories:150,protein_g:5,carbohydrates_g:25,fat_g:4.2,fiber_g:1.7,sugar_g:1.7,sodium_mg:258,calcium_mg:33.3,iron_mg:1.5,vitamin_c_mg:1.7},
    health_tags:["low_fat","light","easy_to_digest"], allergens:["gluten","dairy"], glycemic_index:45,
    description:"Instant semolina idli with cashews and coriander"
  },
  {
    id:24, name:"Paneer Paratha", hindi_name:"पनीर पराठा", category:"breakfast", meal_type:["breakfast","lunch"],
    diet_type:"vegetarian", region:"North India", serving_size_g:130,
    nutrition_per_serving:{calories:340,protein_g:14,carbohydrates_g:40,fat_g:14,fiber_g:3,sugar_g:2,sodium_mg:420,calcium_mg:220,iron_mg:2.5,vitamin_c_mg:3},
    nutrition_per_100g:{calories:262,protein_g:10.8,carbohydrates_g:30.8,fat_g:10.8,fiber_g:2.3,sugar_g:1.5,sodium_mg:323,calcium_mg:169,iron_mg:1.9,vitamin_c_mg:2.3},
    health_tags:["high_protein","high_calcium","filling"], allergens:["gluten","dairy"], glycemic_index:52,
    description:"Wheat flatbread stuffed with spiced cottage cheese"
  },
  {
    id:25, name:"Gobhi Paratha", hindi_name:"गोभी पराठा", category:"breakfast", meal_type:["breakfast","lunch"],
    diet_type:"vegetarian", region:"North India", serving_size_g:120,
    nutrition_per_serving:{calories:290,protein_g:7,carbohydrates_g:40,fat_g:12,fiber_g:5,sugar_g:3,sodium_mg:360,calcium_mg:70,iron_mg:2.5,vitamin_c_mg:30},
    nutrition_per_100g:{calories:242,protein_g:5.8,carbohydrates_g:33.3,fat_g:10,fiber_g:4.2,sugar_g:2.5,sodium_mg:300,calcium_mg:58.3,iron_mg:2.1,vitamin_c_mg:25},
    health_tags:["high_fiber","vitamin_c_rich","energy_rich"], allergens:["gluten","dairy"], glycemic_index:50,
    description:"Wheat flatbread stuffed with spiced cauliflower"
  },
  {
    id:26, name:"Mooli Paratha", hindi_name:"मूली पराठा", category:"breakfast", meal_type:["breakfast","lunch"],
    diet_type:"vegetarian", region:"North India", serving_size_g:120,
    nutrition_per_serving:{calories:270,protein_g:7,carbohydrates_g:38,fat_g:11,fiber_g:4,sugar_g:2,sodium_mg:340,calcium_mg:65,iron_mg:2.3,vitamin_c_mg:18},
    nutrition_per_100g:{calories:225,protein_g:5.8,carbohydrates_g:31.7,fat_g:9.2,fiber_g:3.3,sugar_g:1.7,sodium_mg:283,calcium_mg:54.2,iron_mg:1.9,vitamin_c_mg:15},
    health_tags:["high_fiber","digestive","energy_rich"], allergens:["gluten","dairy"], glycemic_index:48,
    description:"Wheat flatbread stuffed with spiced grated radish"
  },
  {
    id:27, name:"Idiyappam", hindi_name:"इडियाप्पम", category:"breakfast", meal_type:["breakfast"],
    diet_type:"vegan", region:"South India", serving_size_g:150,
    nutrition_per_serving:{calories:200,protein_g:4,carbohydrates_g:42,fat_g:2,fiber_g:2,sugar_g:1,sodium_mg:150,calcium_mg:15,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:133,protein_g:2.7,carbohydrates_g:28,fat_g:1.3,fiber_g:1.3,sugar_g:0.7,sodium_mg:100,calcium_mg:10,iron_mg:1,vitamin_c_mg:0},
    health_tags:["gluten_free","low_fat","light"], allergens:[], glycemic_index:50,
    description:"String hoppers made from rice flour, served with coconut milk or curry"
  },
  {
    id:28, name:"Kozhukattai", hindi_name:"कोझुकट्टई", category:"breakfast", meal_type:["breakfast","snack"],
    diet_type:"vegan", region:"South India", serving_size_g:120,
    nutrition_per_serving:{calories:180,protein_g:3,carbohydrates_g:38,fat_g:2,fiber_g:2,sugar_g:1,sodium_mg:180,calcium_mg:10,iron_mg:1.2,vitamin_c_mg:0},
    nutrition_per_100g:{calories:150,protein_g:2.5,carbohydrates_g:31.7,fat_g:1.7,fiber_g:1.7,sugar_g:0.8,sodium_mg:150,calcium_mg:8.3,iron_mg:1,vitamin_c_mg:0},
    health_tags:["gluten_free","low_fat","light"], allergens:[], glycemic_index:52,
    description:"Steamed rice flour dumplings, Tamil Nadu specialty"
  },
  {
    id:29, name:"Chhena Poda", hindi_name:"छेना पोड़ा", category:"breakfast", meal_type:["breakfast","dessert"],
    diet_type:"vegetarian", region:"East India", serving_size_g:100,
    nutrition_per_serving:{calories:280,protein_g:10,carbohydrates_g:36,fat_g:11,fiber_g:1,sugar_g:28,sodium_mg:120,calcium_mg:180,iron_mg:0.8,vitamin_c_mg:0},
    nutrition_per_100g:{calories:280,protein_g:10,carbohydrates_g:36,fat_g:11,fiber_g:1,sugar_g:28,sodium_mg:120,calcium_mg:180,iron_mg:0.8,vitamin_c_mg:0},
    health_tags:["high_protein","high_calcium"], allergens:["dairy"], glycemic_index:65,
    description:"Baked caramelized cottage cheese dessert from Odisha"
  },
  {
    id:30, name:"Aloo Tikki", hindi_name:"आलू टिक्की", category:"breakfast", meal_type:["breakfast","snack"],
    diet_type:"vegan", region:"North India", serving_size_g:100,
    nutrition_per_serving:{calories:200,protein_g:4,carbohydrates_g:34,fat_g:6,fiber_g:3,sugar_g:2,sodium_mg:360,calcium_mg:25,iron_mg:1.8,vitamin_c_mg:12},
    nutrition_per_100g:{calories:200,protein_g:4,carbohydrates_g:34,fat_g:6,fiber_g:3,sugar_g:2,sodium_mg:360,calcium_mg:25,iron_mg:1.8,vitamin_c_mg:12},
    health_tags:["energy_rich","filling"], allergens:[], glycemic_index:62,
    description:"Crispy spiced potato patties, popular North Indian street food"
  },
  {
    id:31, name:"Sprouts Bhel", hindi_name:"स्प्राउट्स भेल", category:"breakfast", meal_type:["breakfast","snack"],
    diet_type:"vegan", region:"West India", serving_size_g:150,
    nutrition_per_serving:{calories:190,protein_g:12,carbohydrates_g:28,fat_g:3,fiber_g:8,sugar_g:4,sodium_mg:280,calcium_mg:55,iron_mg:4,vitamin_c_mg:20},
    nutrition_per_100g:{calories:127,protein_g:8,carbohydrates_g:18.7,fat_g:2,fiber_g:5.3,sugar_g:2.7,sodium_mg:187,calcium_mg:36.7,iron_mg:2.7,vitamin_c_mg:13.3},
    health_tags:["high_protein","high_fiber","low_calorie","diabetic_friendly"], allergens:[], glycemic_index:30,
    description:"Mixed sprouted legumes with onions, tomatoes and spices"
  },
  {
    id:32, name:"Makhana Kheer", hindi_name:"मखाना खीर", category:"breakfast", meal_type:["breakfast","dessert"],
    diet_type:"vegetarian", region:"North India", serving_size_g:200,
    nutrition_per_serving:{calories:280,protein_g:8,carbohydrates_g:42,fat_g:9,fiber_g:1,sugar_g:30,sodium_mg:85,calcium_mg:220,iron_mg:1.2,vitamin_c_mg:2},
    nutrition_per_100g:{calories:140,protein_g:4,carbohydrates_g:21,fat_g:4.5,fiber_g:0.5,sugar_g:15,sodium_mg:42.5,calcium_mg:110,iron_mg:0.6,vitamin_c_mg:1},
    health_tags:["high_calcium","probiotic","low_fat"], allergens:["dairy"], glycemic_index:55,
    description:"Lotus seed pudding cooked in sweetened milk"
  },
  {
    id:33, name:"Batata Vada", hindi_name:"बटाटा वड़ा", category:"breakfast", meal_type:["breakfast","snack"],
    diet_type:"vegan", region:"West India", serving_size_g:100,
    nutrition_per_serving:{calories:225,protein_g:5,carbohydrates_g:32,fat_g:9,fiber_g:3,sugar_g:2,sodium_mg:380,calcium_mg:30,iron_mg:2,vitamin_c_mg:8},
    nutrition_per_100g:{calories:225,protein_g:5,carbohydrates_g:32,fat_g:9,fiber_g:3,sugar_g:2,sodium_mg:380,calcium_mg:30,iron_mg:2,vitamin_c_mg:8},
    health_tags:["energy_rich","filling"], allergens:[], glycemic_index:60,
    description:"Deep-fried spiced potato ball in chickpea batter"
  },
  {
    id:34, name:"Egg Bhurji", hindi_name:"एग भुर्जी", category:"breakfast", meal_type:["breakfast"],
    diet_type:"non_vegetarian", region:"All India", serving_size_g:150,
    nutrition_per_serving:{calories:230,protein_g:15,carbohydrates_g:8,fat_g:16,fiber_g:1,sugar_g:3,sodium_mg:450,calcium_mg:60,iron_mg:2.5,vitamin_c_mg:15},
    nutrition_per_100g:{calories:153,protein_g:10,carbohydrates_g:5.3,fat_g:10.7,fiber_g:0.7,sugar_g:2,sodium_mg:300,calcium_mg:40,iron_mg:1.7,vitamin_c_mg:10},
    health_tags:["high_protein","keto_friendly","low_carb"], allergens:["egg"], glycemic_index:22,
    description:"Scrambled eggs cooked with onions, tomatoes and Indian spices"
  },
  {
    id:35, name:"Masala Oats", hindi_name:"मसाला ओट्स", category:"breakfast", meal_type:["breakfast"],
    diet_type:"vegan", region:"All India", serving_size_g:150,
    nutrition_per_serving:{calories:200,protein_g:8,carbohydrates_g:32,fat_g:5,fiber_g:5,sugar_g:3,sodium_mg:340,calcium_mg:35,iron_mg:3,vitamin_c_mg:10},
    nutrition_per_100g:{calories:133,protein_g:5.3,carbohydrates_g:21.3,fat_g:3.3,fiber_g:3.3,sugar_g:2,sodium_mg:227,calcium_mg:23.3,iron_mg:2,vitamin_c_mg:6.7},
    health_tags:["high_fiber","diabetic_friendly","heart_healthy","low_calorie"], allergens:["gluten"], glycemic_index:40,
    description:"Savory oats cooked with vegetables and Indian spices"
  },
  {
    id:36, name:"Dalia", hindi_name:"दलिया", category:"breakfast", meal_type:["breakfast"],
    diet_type:"vegan", region:"North India", serving_size_g:180,
    nutrition_per_serving:{calories:210,protein_g:7,carbohydrates_g:40,fat_g:3,fiber_g:6,sugar_g:3,sodium_mg:220,calcium_mg:30,iron_mg:2.5,vitamin_c_mg:5},
    nutrition_per_100g:{calories:117,protein_g:3.9,carbohydrates_g:22.2,fat_g:1.7,fiber_g:3.3,sugar_g:1.7,sodium_mg:122,calcium_mg:16.7,iron_mg:1.4,vitamin_c_mg:2.8},
    health_tags:["high_fiber","diabetic_friendly","heart_healthy","low_calorie"], allergens:["gluten"], glycemic_index:42,
    description:"Broken wheat porridge, nutritious and filling North Indian breakfast"
  },
  {
    id:37, name:"Suji Halwa", hindi_name:"सूजी हलवा", category:"breakfast", meal_type:["breakfast","dessert"],
    diet_type:"vegetarian", region:"North India", serving_size_g:150,
    nutrition_per_serving:{calories:320,protein_g:5,carbohydrates_g:48,fat_g:13,fiber_g:2,sugar_g:30,sodium_mg:95,calcium_mg:40,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:213,protein_g:3.3,carbohydrates_g:32,fat_g:8.7,fiber_g:1.3,sugar_g:20,sodium_mg:63.3,calcium_mg:26.7,iron_mg:1,vitamin_c_mg:0},
    health_tags:["energy_rich","quick_energy"], allergens:["gluten","dairy"], glycemic_index:65,
    description:"Semolina pudding cooked with ghee and dry fruits"
  },
  {
    id:38, name:"Til ke Ladoo", hindi_name:"तिल के लड्डू", category:"breakfast", meal_type:["breakfast","snack"],
    diet_type:"vegan", region:"All India", serving_size_g:50,
    nutrition_per_serving:{calories:220,protein_g:6,carbohydrates_g:26,fat_g:11,fiber_g:3,sugar_g:18,sodium_mg:15,calcium_mg:280,iron_mg:4.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:440,protein_g:12,carbohydrates_g:52,fat_g:22,fiber_g:6,sugar_g:36,sodium_mg:30,calcium_mg:560,iron_mg:9,vitamin_c_mg:0},
    health_tags:["high_calcium","iron_rich","bone_health","energy_rich"], allergens:[], glycemic_index:55,
    description:"Sesame seed and jaggery energy balls, winter staple"
  },
  {
    id:39, name:"Makhana Chivda", hindi_name:"मखाना चिवड़ा", category:"breakfast", meal_type:["breakfast","snack"],
    diet_type:"vegan", region:"North India", serving_size_g:50,
    nutrition_per_serving:{calories:180,protein_g:5,carbohydrates_g:26,fat_g:7,fiber_g:1,sugar_g:2,sodium_mg:200,calcium_mg:30,iron_mg:1.2,vitamin_c_mg:0},
    nutrition_per_100g:{calories:360,protein_g:10,carbohydrates_g:52,fat_g:14,fiber_g:2,sugar_g:4,sodium_mg:400,calcium_mg:60,iron_mg:2.4,vitamin_c_mg:0},
    health_tags:["low_fat","gluten_free","light","fasting_friendly"], allergens:[], glycemic_index:45,
    description:"Roasted fox nuts snack mix with dry fruits and spices"
  },
  {
    id:40, name:"Sindhi Koki", hindi_name:"सिंधी कोकी", category:"breakfast", meal_type:["breakfast"],
    diet_type:"vegetarian", region:"North India", serving_size_g:100,
    nutrition_per_serving:{calories:280,protein_g:7,carbohydrates_g:38,fat_g:12,fiber_g:4,sugar_g:2,sodium_mg:350,calcium_mg:55,iron_mg:2.5,vitamin_c_mg:5},
    nutrition_per_100g:{calories:280,protein_g:7,carbohydrates_g:38,fat_g:12,fiber_g:4,sugar_g:2,sodium_mg:350,calcium_mg:55,iron_mg:2.5,vitamin_c_mg:5},
    health_tags:["energy_rich","high_fiber"], allergens:["gluten","dairy"], glycemic_index:50,
    description:"Thick whole wheat flatbread with onions and pomegranate seeds, Sindhi breakfast"
  },

  // ═══════════════════════════════════════════
  // MAIN COURSE (41-110)
  // ═══════════════════════════════════════════
  {
    id:41, name:"Dal Makhani", hindi_name:"दाल मखनी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:320,protein_g:14,carbohydrates_g:38,fat_g:12,fiber_g:8,sugar_g:4,sodium_mg:520,calcium_mg:120,iron_mg:5.2,vitamin_c_mg:3},
    nutrition_per_100g:{calories:128,protein_g:5.6,carbohydrates_g:15.2,fat_g:4.8,fiber_g:3.2,sugar_g:1.6,sodium_mg:208,calcium_mg:48,iron_mg:2.1,vitamin_c_mg:1.2},
    health_tags:["high_protein","high_fiber","gut_friendly"], allergens:["dairy"], glycemic_index:32,
    description:"Slow-cooked black lentils in a rich buttery tomato gravy"
  },
  {
    id:42, name:"Paneer Butter Masala", hindi_name:"पनीर बटर मसाला", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:420,protein_g:18,carbohydrates_g:22,fat_g:30,fiber_g:3,sugar_g:8,sodium_mg:680,calcium_mg:380,iron_mg:2.1,vitamin_c_mg:15},
    nutrition_per_100g:{calories:168,protein_g:7.2,carbohydrates_g:8.8,fat_g:12,fiber_g:1.2,sugar_g:3.2,sodium_mg:272,calcium_mg:152,iron_mg:0.8,vitamin_c_mg:6},
    health_tags:["high_protein","high_calcium","keto_friendly"], allergens:["dairy"], glycemic_index:28,
    description:"Cottage cheese cubes in a rich creamy tomato and butter gravy"
  },
  {
    id:43, name:"Chicken Biryani", hindi_name:"चिकन बिरयानी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"Hyderabad", serving_size_g:350,
    nutrition_per_serving:{calories:550,protein_g:32,carbohydrates_g:65,fat_g:16,fiber_g:3,sugar_g:4,sodium_mg:820,calcium_mg:80,iron_mg:4.2,vitamin_c_mg:8},
    nutrition_per_100g:{calories:157,protein_g:9.1,carbohydrates_g:18.6,fat_g:4.6,fiber_g:0.9,sugar_g:1.1,sodium_mg:234,calcium_mg:22.9,iron_mg:1.2,vitamin_c_mg:2.3},
    health_tags:["high_protein","energy_rich"], allergens:["dairy"], glycemic_index:55,
    description:"Fragrant basmati rice slow-cooked with marinated chicken and whole spices"
  },
  {
    id:44, name:"Rajma", hindi_name:"राजमा", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:290,protein_g:16,carbohydrates_g:46,fat_g:4,fiber_g:12,sugar_g:3,sodium_mg:480,calcium_mg:90,iron_mg:6.5,vitamin_c_mg:5},
    nutrition_per_100g:{calories:116,protein_g:6.4,carbohydrates_g:18.4,fat_g:1.6,fiber_g:4.8,sugar_g:1.2,sodium_mg:192,calcium_mg:36,iron_mg:2.6,vitamin_c_mg:2},
    health_tags:["high_protein","high_fiber","vegan","diabetic_friendly","heart_healthy"], allergens:[], glycemic_index:29,
    description:"Red kidney beans slow-cooked in a spiced onion-tomato gravy"
  },
  {
    id:45, name:"Palak Paneer", hindi_name:"पालक पनीर", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:310,protein_g:16,carbohydrates_g:14,fat_g:22,fiber_g:5,sugar_g:4,sodium_mg:560,calcium_mg:420,iron_mg:6.8,vitamin_c_mg:28},
    nutrition_per_100g:{calories:124,protein_g:6.4,carbohydrates_g:5.6,fat_g:8.8,fiber_g:2,sugar_g:1.6,sodium_mg:224,calcium_mg:168,iron_mg:2.7,vitamin_c_mg:11.2},
    health_tags:["high_protein","high_calcium","high_iron","keto_friendly"], allergens:["dairy"], glycemic_index:20,
    description:"Fresh cottage cheese cooked in a smooth spiced spinach gravy"
  },
  {
    id:46, name:"Butter Chicken", hindi_name:"बटर चिकन", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"North India", serving_size_g:300,
    nutrition_per_serving:{calories:480,protein_g:38,carbohydrates_g:18,fat_g:28,fiber_g:2,sugar_g:10,sodium_mg:780,calcium_mg:95,iron_mg:3.2,vitamin_c_mg:18},
    nutrition_per_100g:{calories:160,protein_g:12.7,carbohydrates_g:6,fat_g:9.3,fiber_g:0.7,sugar_g:3.3,sodium_mg:260,calcium_mg:31.7,iron_mg:1.1,vitamin_c_mg:6},
    health_tags:["high_protein","keto_friendly"], allergens:["dairy"], glycemic_index:30,
    description:"Tender chicken pieces in a velvety tomato, cream, and butter sauce"
  },
  {
    id:47, name:"Khichdi", hindi_name:"खिचड़ी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"All India", serving_size_g:250,
    nutrition_per_serving:{calories:280,protein_g:12,carbohydrates_g:50,fat_g:5,fiber_g:5,sugar_g:2,sodium_mg:360,calcium_mg:55,iron_mg:3.5,vitamin_c_mg:2},
    nutrition_per_100g:{calories:112,protein_g:4.8,carbohydrates_g:20,fat_g:2,fiber_g:2,sugar_g:0.8,sodium_mg:144,calcium_mg:22,iron_mg:1.4,vitamin_c_mg:0.8},
    health_tags:["easy_to_digest","gut_friendly","diabetic_friendly","low_fat"], allergens:[], glycemic_index:38,
    description:"Comforting one-pot dish of rice and lentils cooked with mild spices"
  },
  {
    id:48, name:"Chole Bhature", hindi_name:"छोले भटूरे", category:"main_course", meal_type:["breakfast","lunch"],
    diet_type:"vegan", region:"North India", serving_size_g:300,
    nutrition_per_serving:{calories:580,protein_g:18,carbohydrates_g:78,fat_g:22,fiber_g:10,sugar_g:5,sodium_mg:750,calcium_mg:110,iron_mg:7,vitamin_c_mg:12},
    nutrition_per_100g:{calories:193,protein_g:6,carbohydrates_g:26,fat_g:7.3,fiber_g:3.3,sugar_g:1.7,sodium_mg:250,calcium_mg:36.7,iron_mg:2.3,vitamin_c_mg:4},
    health_tags:["high_protein","high_fiber","energy_rich"], allergens:["gluten"], glycemic_index:55,
    description:"Spicy chickpea curry served with deep-fried bread"
  },
  {
    id:49, name:"Tandoori Chicken", hindi_name:"तंदूरी चिकन", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:380,protein_g:45,carbohydrates_g:8,fat_g:18,fiber_g:1,sugar_g:4,sodium_mg:680,calcium_mg:70,iron_mg:2.8,vitamin_c_mg:5},
    nutrition_per_100g:{calories:152,protein_g:18,carbohydrates_g:3.2,fat_g:7.2,fiber_g:0.4,sugar_g:1.6,sodium_mg:272,calcium_mg:28,iron_mg:1.1,vitamin_c_mg:2},
    health_tags:["high_protein","low_carb","keto_friendly","grilled"], allergens:["dairy"], glycemic_index:20,
    description:"Marinated chicken roasted in a tandoor clay oven with yogurt and spices"
  },
  {
    id:50, name:"Matar Paneer", hindi_name:"मटर पनीर", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:340,protein_g:16,carbohydrates_g:24,fat_g:20,fiber_g:5,sugar_g:6,sodium_mg:540,calcium_mg:300,iron_mg:3.5,vitamin_c_mg:22},
    nutrition_per_100g:{calories:136,protein_g:6.4,carbohydrates_g:9.6,fat_g:8,fiber_g:2,sugar_g:2.4,sodium_mg:216,calcium_mg:120,iron_mg:1.4,vitamin_c_mg:8.8},
    health_tags:["high_protein","high_calcium","vitamin_c_rich"], allergens:["dairy"], glycemic_index:30,
    description:"Green peas and cottage cheese in a spiced tomato gravy"
  },
  {
    id:51, name:"Egg Curry", hindi_name:"अंडा करी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"All India", serving_size_g:250,
    nutrition_per_serving:{calories:310,protein_g:18,carbohydrates_g:14,fat_g:20,fiber_g:2,sugar_g:5,sodium_mg:560,calcium_mg:95,iron_mg:3.2,vitamin_c_mg:12},
    nutrition_per_100g:{calories:124,protein_g:7.2,carbohydrates_g:5.6,fat_g:8,fiber_g:0.8,sugar_g:2,sodium_mg:224,calcium_mg:38,iron_mg:1.3,vitamin_c_mg:4.8},
    health_tags:["high_protein","budget_friendly"], allergens:["egg"], glycemic_index:25,
    description:"Boiled eggs cooked in a spiced onion-tomato masala gravy"
  },
  {
    id:52, name:"Mutton Rogan Josh", hindi_name:"मटन रोगन जोश", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"Kashmir", serving_size_g:300,
    nutrition_per_serving:{calories:490,protein_g:38,carbohydrates_g:12,fat_g:32,fiber_g:2,sugar_g:5,sodium_mg:760,calcium_mg:65,iron_mg:5.5,vitamin_c_mg:8},
    nutrition_per_100g:{calories:163,protein_g:12.7,carbohydrates_g:4,fat_g:10.7,fiber_g:0.7,sugar_g:1.7,sodium_mg:253,calcium_mg:21.7,iron_mg:1.8,vitamin_c_mg:2.7},
    health_tags:["high_protein","iron_rich"], allergens:[], glycemic_index:22,
    description:"Aromatic slow-cooked lamb curry from Kashmiri cuisine"
  },
  {
    id:53, name:"Saag Gosht", hindi_name:"साग गोश्त", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"North India", serving_size_g:300,
    nutrition_per_serving:{calories:420,protein_g:35,carbohydrates_g:12,fat_g:26,fiber_g:5,sugar_g:4,sodium_mg:680,calcium_mg:180,iron_mg:7.5,vitamin_c_mg:25},
    nutrition_per_100g:{calories:140,protein_g:11.7,carbohydrates_g:4,fat_g:8.7,fiber_g:1.7,sugar_g:1.3,sodium_mg:227,calcium_mg:60,iron_mg:2.5,vitamin_c_mg:8.3},
    health_tags:["high_protein","high_iron","vitamin_c_rich"], allergens:[], glycemic_index:20,
    description:"Tender mutton pieces slow-cooked with mustard greens"
  },
  {
    id:54, name:"Fish Curry", hindi_name:"मछली करी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"All India", serving_size_g:280,
    nutrition_per_serving:{calories:320,protein_g:30,carbohydrates_g:12,fat_g:18,fiber_g:2,sugar_g:5,sodium_mg:640,calcium_mg:85,iron_mg:2.8,vitamin_c_mg:20},
    nutrition_per_100g:{calories:114,protein_g:10.7,carbohydrates_g:4.3,fat_g:6.4,fiber_g:0.7,sugar_g:1.8,sodium_mg:229,calcium_mg:30.4,iron_mg:1,vitamin_c_mg:7.1},
    health_tags:["high_protein","omega3_rich","heart_healthy"], allergens:["fish"], glycemic_index:22,
    description:"Fresh fish cooked in spiced tangy gravy with coconut or tomato base"
  },
  {
    id:55, name:"Prawn Masala", hindi_name:"झींगा मसाला", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"Coastal India", serving_size_g:250,
    nutrition_per_serving:{calories:280,protein_g:28,carbohydrates_g:14,fat_g:14,fiber_g:2,sugar_g:5,sodium_mg:720,calcium_mg:120,iron_mg:3.5,vitamin_c_mg:22},
    nutrition_per_100g:{calories:112,protein_g:11.2,carbohydrates_g:5.6,fat_g:5.6,fiber_g:0.8,sugar_g:2,sodium_mg:288,calcium_mg:48,iron_mg:1.4,vitamin_c_mg:8.8},
    health_tags:["high_protein","low_calorie","omega3_rich"], allergens:["shellfish"], glycemic_index:20,
    description:"Spicy prawns cooked in a rich masala gravy"
  },
  {
    id:56, name:"Aloo Gobi", hindi_name:"आलू गोभी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:200,protein_g:6,carbohydrates_g:32,fat_g:7,fiber_g:6,sugar_g:6,sodium_mg:420,calcium_mg:65,iron_mg:2.5,vitamin_c_mg:55},
    nutrition_per_100g:{calories:80,protein_g:2.4,carbohydrates_g:12.8,fat_g:2.8,fiber_g:2.4,sugar_g:2.4,sodium_mg:168,calcium_mg:26,iron_mg:1,vitamin_c_mg:22},
    health_tags:["low_calorie","vitamin_c_rich","high_fiber","vegan"], allergens:[], glycemic_index:40,
    description:"Dry-spiced potato and cauliflower stir-fry"
  },
  {
    id:57, name:"Baingan Bharta", hindi_name:"बैंगन भर्ता", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:200,
    nutrition_per_serving:{calories:150,protein_g:4,carbohydrates_g:20,fat_g:7,fiber_g:6,sugar_g:8,sodium_mg:380,calcium_mg:45,iron_mg:2.2,vitamin_c_mg:15},
    nutrition_per_100g:{calories:75,protein_g:2,carbohydrates_g:10,fat_g:3.5,fiber_g:3,sugar_g:4,sodium_mg:190,calcium_mg:22.5,iron_mg:1.1,vitamin_c_mg:7.5},
    health_tags:["low_calorie","high_fiber","vegan","antioxidant_rich"], allergens:[], glycemic_index:35,
    description:"Smoky roasted eggplant mashed with onions, tomatoes and spices"
  },
  {
    id:58, name:"Kadai Paneer", hindi_name:"कड़ाई पनीर", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:380,protein_g:18,carbohydrates_g:18,fat_g:26,fiber_g:4,sugar_g:6,sodium_mg:580,calcium_mg:350,iron_mg:2.5,vitamin_c_mg:35},
    nutrition_per_100g:{calories:152,protein_g:7.2,carbohydrates_g:7.2,fat_g:10.4,fiber_g:1.6,sugar_g:2.4,sodium_mg:232,calcium_mg:140,iron_mg:1,vitamin_c_mg:14},
    health_tags:["high_protein","high_calcium","vitamin_c_rich"], allergens:["dairy"], glycemic_index:28,
    description:"Cottage cheese and bell peppers cooked in a kadai with whole spices"
  },
  {
    id:59, name:"Shahi Paneer", hindi_name:"शाही पनीर", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:450,protein_g:18,carbohydrates_g:20,fat_g:34,fiber_g:2,sugar_g:10,sodium_mg:620,calcium_mg:400,iron_mg:2.2,vitamin_c_mg:10},
    nutrition_per_100g:{calories:180,protein_g:7.2,carbohydrates_g:8,fat_g:13.6,fiber_g:0.8,sugar_g:4,sodium_mg:248,calcium_mg:160,iron_mg:0.9,vitamin_c_mg:4},
    health_tags:["high_protein","high_calcium"], allergens:["dairy","nuts"], glycemic_index:30,
    description:"Royal cottage cheese curry in a rich cashew and cream sauce"
  },
  {
    id:60, name:"Lamb Biryani", hindi_name:"लैम्ब बिरयानी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"Hyderabad", serving_size_g:350,
    nutrition_per_serving:{calories:580,protein_g:30,carbohydrates_g:68,fat_g:20,fiber_g:3,sugar_g:4,sodium_mg:860,calcium_mg:75,iron_mg:5.5,vitamin_c_mg:6},
    nutrition_per_100g:{calories:166,protein_g:8.6,carbohydrates_g:19.4,fat_g:5.7,fiber_g:0.9,sugar_g:1.1,sodium_mg:246,calcium_mg:21.4,iron_mg:1.6,vitamin_c_mg:1.7},
    health_tags:["high_protein","energy_rich","iron_rich"], allergens:["dairy"], glycemic_index:55,
    description:"Fragrant basmati rice layered with slow-cooked spiced lamb"
  },
  {
    id:61, name:"Vegetable Biryani", hindi_name:"वेज बिरयानी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"All India", serving_size_g:350,
    nutrition_per_serving:{calories:440,protein_g:12,carbohydrates_g:75,fat_g:12,fiber_g:6,sugar_g:5,sodium_mg:680,calcium_mg:80,iron_mg:3.5,vitamin_c_mg:20},
    nutrition_per_100g:{calories:126,protein_g:3.4,carbohydrates_g:21.4,fat_g:3.4,fiber_g:1.7,sugar_g:1.4,sodium_mg:194,calcium_mg:22.9,iron_mg:1,vitamin_c_mg:5.7},
    health_tags:["high_fiber","energy_rich"], allergens:["dairy"], glycemic_index:50,
    description:"Fragrant basmati rice layered with spiced mixed vegetables"
  },
  {
    id:62, name:"Chicken Tikka Masala", hindi_name:"चिकन टिक्का मसाला", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"North India", serving_size_g:300,
    nutrition_per_serving:{calories:450,protein_g:36,carbohydrates_g:20,fat_g:24,fiber_g:3,sugar_g:10,sodium_mg:790,calcium_mg:90,iron_mg:3,vitamin_c_mg:22},
    nutrition_per_100g:{calories:150,protein_g:12,carbohydrates_g:6.7,fat_g:8,fiber_g:1,sugar_g:3.3,sodium_mg:263,calcium_mg:30,iron_mg:1,vitamin_c_mg:7.3},
    health_tags:["high_protein","keto_friendly"], allergens:["dairy"], glycemic_index:28,
    description:"Grilled chicken tikka in a creamy spiced tomato sauce"
  },
  {
    id:63, name:"Dal Tadka", hindi_name:"दाल तड़का", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:240,protein_g:14,carbohydrates_g:36,fat_g:5,fiber_g:8,sugar_g:3,sodium_mg:420,calcium_mg:65,iron_mg:4.5,vitamin_c_mg:5},
    nutrition_per_100g:{calories:96,protein_g:5.6,carbohydrates_g:14.4,fat_g:2,fiber_g:3.2,sugar_g:1.2,sodium_mg:168,calcium_mg:26,iron_mg:1.8,vitamin_c_mg:2},
    health_tags:["high_protein","high_fiber","vegan","diabetic_friendly"], allergens:[], glycemic_index:30,
    description:"Yellow lentils tempered with ghee, garlic, and whole spices"
  },
  {
    id:64, name:"Pav Bhaji", hindi_name:"पाव भाजी", category:"main_course", meal_type:["lunch","snack","dinner"],
    diet_type:"vegetarian", region:"West India", serving_size_g:300,
    nutrition_per_serving:{calories:420,protein_g:10,carbohydrates_g:62,fat_g:16,fiber_g:8,sugar_g:10,sodium_mg:820,calcium_mg:80,iron_mg:4,vitamin_c_mg:35},
    nutrition_per_100g:{calories:140,protein_g:3.3,carbohydrates_g:20.7,fat_g:5.3,fiber_g:2.7,sugar_g:3.3,sodium_mg:273,calcium_mg:26.7,iron_mg:1.3,vitamin_c_mg:11.7},
    health_tags:["vitamin_c_rich","high_fiber"], allergens:["gluten","dairy"], glycemic_index:52,
    description:"Mixed vegetable mash cooked in spiced butter, served with soft rolls"
  },
  {
    id:65, name:"Sarson Ka Saag", hindi_name:"सरसों का साग", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:260,protein_g:8,carbohydrates_g:20,fat_g:16,fiber_g:8,sugar_g:5,sodium_mg:480,calcium_mg:380,iron_mg:8.5,vitamin_c_mg:60},
    nutrition_per_100g:{calories:104,protein_g:3.2,carbohydrates_g:8,fat_g:6.4,fiber_g:3.2,sugar_g:2,sodium_mg:192,calcium_mg:152,iron_mg:3.4,vitamin_c_mg:24},
    health_tags:["iron_rich","high_calcium","vitamin_c_rich","antioxidant_rich"], allergens:["dairy"], glycemic_index:28,
    description:"Slow-cooked mustard greens curry, classic Punjabi winter dish"
  },
  {
    id:66, name:"Chicken Korma", hindi_name:"चिकन कोरमा", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"North India", serving_size_g:300,
    nutrition_per_serving:{calories:500,protein_g:34,carbohydrates_g:14,fat_g:36,fiber_g:2,sugar_g:6,sodium_mg:720,calcium_mg:110,iron_mg:3,vitamin_c_mg:8},
    nutrition_per_100g:{calories:167,protein_g:11.3,carbohydrates_g:4.7,fat_g:12,fiber_g:0.7,sugar_g:2,sodium_mg:240,calcium_mg:36.7,iron_mg:1,vitamin_c_mg:2.7},
    health_tags:["high_protein","keto_friendly"], allergens:["dairy","nuts"], glycemic_index:25,
    description:"Chicken in a mild creamy sauce with nuts and aromatic spices"
  },
  {
    id:67, name:"Dhansak", hindi_name:"धनसाक", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"West India", serving_size_g:350,
    nutrition_per_serving:{calories:480,protein_g:30,carbohydrates_g:52,fat_g:16,fiber_g:10,sugar_g:6,sodium_mg:740,calcium_mg:90,iron_mg:6,vitamin_c_mg:12},
    nutrition_per_100g:{calories:137,protein_g:8.6,carbohydrates_g:14.9,fat_g:4.6,fiber_g:2.9,sugar_g:1.7,sodium_mg:211,calcium_mg:25.7,iron_mg:1.7,vitamin_c_mg:3.4},
    health_tags:["high_protein","high_fiber","iron_rich"], allergens:[], glycemic_index:42,
    description:"Parsi lamb and lentil stew with vegetables and tangy spices"
  },
  {
    id:68, name:"Goan Fish Curry", hindi_name:"गोअन फिश करी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"West India", serving_size_g:280,
    nutrition_per_serving:{calories:300,protein_g:28,carbohydrates_g:14,fat_g:16,fiber_g:3,sugar_g:5,sodium_mg:580,calcium_mg:95,iron_mg:2.5,vitamin_c_mg:18},
    nutrition_per_100g:{calories:107,protein_g:10,carbohydrates_g:5,fat_g:5.7,fiber_g:1.1,sugar_g:1.8,sodium_mg:207,calcium_mg:33.9,iron_mg:0.9,vitamin_c_mg:6.4},
    health_tags:["high_protein","omega3_rich","heart_healthy"], allergens:["fish"], glycemic_index:22,
    description:"Tangy coconut-based fish curry with kokum, Goan specialty"
  },
  {
    id:69, name:"Aloo Matar", hindi_name:"आलू मटर", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:220,protein_g:7,carbohydrates_g:38,fat_g:5,fiber_g:6,sugar_g:6,sodium_mg:400,calcium_mg:40,iron_mg:2.8,vitamin_c_mg:25},
    nutrition_per_100g:{calories:88,protein_g:2.8,carbohydrates_g:15.2,fat_g:2,fiber_g:2.4,sugar_g:2.4,sodium_mg:160,calcium_mg:16,iron_mg:1.1,vitamin_c_mg:10},
    health_tags:["low_calorie","high_fiber","vegan","diabetic_friendly"], allergens:[], glycemic_index:38,
    description:"Potatoes and green peas in a lightly spiced tomato gravy"
  },
  {
    id:70, name:"Pindi Chole", hindi_name:"पिंडी छोले", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:320,protein_g:16,carbohydrates_g:48,fat_g:8,fiber_g:12,sugar_g:4,sodium_mg:540,calcium_mg:100,iron_mg:7.5,vitamin_c_mg:8},
    nutrition_per_100g:{calories:128,protein_g:6.4,carbohydrates_g:19.2,fat_g:3.2,fiber_g:4.8,sugar_g:1.6,sodium_mg:216,calcium_mg:40,iron_mg:3,vitamin_c_mg:3.2},
    health_tags:["high_protein","high_fiber","iron_rich","vegan"], allergens:[], glycemic_index:32,
    description:"Dry spiced chickpea curry with intense earthy flavors"
  },
  {
    id:71, name:"Laal Maas", hindi_name:"लाल मांस", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"Rajasthan", serving_size_g:300,
    nutrition_per_serving:{calories:520,protein_g:36,carbohydrates_g:10,fat_g:38,fiber_g:2,sugar_g:4,sodium_mg:820,calcium_mg:60,iron_mg:5.8,vitamin_c_mg:5},
    nutrition_per_100g:{calories:173,protein_g:12,carbohydrates_g:3.3,fat_g:12.7,fiber_g:0.7,sugar_g:1.3,sodium_mg:273,calcium_mg:20,iron_mg:1.9,vitamin_c_mg:1.7},
    health_tags:["high_protein","iron_rich","keto_friendly"], allergens:["dairy"], glycemic_index:18,
    description:"Fiery red mutton curry with Mathania chilies, Rajasthan specialty"
  },
  {
    id:72, name:"Avial", hindi_name:"अवियल", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"South India", serving_size_g:200,
    nutrition_per_serving:{calories:220,protein_g:5,carbohydrates_g:28,fat_g:11,fiber_g:6,sugar_g:6,sodium_mg:320,calcium_mg:65,iron_mg:2,vitamin_c_mg:25},
    nutrition_per_100g:{calories:110,protein_g:2.5,carbohydrates_g:14,fat_g:5.5,fiber_g:3,sugar_g:3,sodium_mg:160,calcium_mg:32.5,iron_mg:1,vitamin_c_mg:12.5},
    health_tags:["high_fiber","vitamin_c_rich","low_calorie"], allergens:["dairy"], glycemic_index:42,
    description:"Mixed vegetables cooked in coconut and yogurt sauce, Kerala specialty"
  },
  {
    id:73, name:"Kootu", hindi_name:"कूटू", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"South India", serving_size_g:200,
    nutrition_per_serving:{calories:240,protein_g:9,carbohydrates_g:32,fat_g:10,fiber_g:7,sugar_g:4,sodium_mg:280,calcium_mg:60,iron_mg:3,vitamin_c_mg:15},
    nutrition_per_100g:{calories:120,protein_g:4.5,carbohydrates_g:16,fat_g:5,fiber_g:3.5,sugar_g:2,sodium_mg:140,calcium_mg:30,iron_mg:1.5,vitamin_c_mg:7.5},
    health_tags:["high_fiber","high_protein","vegan"], allergens:[], glycemic_index:35,
    description:"Vegetables and lentils cooked with freshly ground coconut"
  },
  {
    id:74, name:"Chicken Chettinad", hindi_name:"चिकन चेट्टीनाड", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"South India", serving_size_g:300,
    nutrition_per_serving:{calories:420,protein_g:36,carbohydrates_g:14,fat_g:25,fiber_g:3,sugar_g:5,sodium_mg:760,calcium_mg:80,iron_mg:4,vitamin_c_mg:12},
    nutrition_per_100g:{calories:140,protein_g:12,carbohydrates_g:4.7,fat_g:8.3,fiber_g:1,sugar_g:1.7,sodium_mg:253,calcium_mg:26.7,iron_mg:1.3,vitamin_c_mg:4},
    health_tags:["high_protein","anti_inflammatory","spicy"], allergens:[], glycemic_index:22,
    description:"Fiery aromatic chicken curry from Chettinad with freshly ground spices"
  },
  {
    id:75, name:"Sambar", hindi_name:"सांबर", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"South India", serving_size_g:250,
    nutrition_per_serving:{calories:180,protein_g:9,carbohydrates_g:28,fat_g:4,fiber_g:7,sugar_g:5,sodium_mg:420,calcium_mg:60,iron_mg:3.5,vitamin_c_mg:30},
    nutrition_per_100g:{calories:72,protein_g:3.6,carbohydrates_g:11.2,fat_g:1.6,fiber_g:2.8,sugar_g:2,sodium_mg:168,calcium_mg:24,iron_mg:1.4,vitamin_c_mg:12},
    health_tags:["high_protein","high_fiber","low_calorie","vegan","immunity_booster"], allergens:[], glycemic_index:30,
    description:"Lentil-based vegetable stew with tamarind and spices"
  },
  {
    id:76, name:"Rasam", hindi_name:"रसम", category:"soups", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"South India", serving_size_g:200,
    nutrition_per_serving:{calories:60,protein_g:2,carbohydrates_g:10,fat_g:2,fiber_g:1,sugar_g:2,sodium_mg:380,calcium_mg:20,iron_mg:1.2,vitamin_c_mg:15},
    nutrition_per_100g:{calories:30,protein_g:1,carbohydrates_g:5,fat_g:1,fiber_g:0.5,sugar_g:1,sodium_mg:190,calcium_mg:10,iron_mg:0.6,vitamin_c_mg:7.5},
    health_tags:["low_calorie","immunity_booster","digestive","anti_inflammatory"], allergens:[], glycemic_index:25,
    description:"Thin spiced tamarind and tomato soup with black pepper and cumin"
  },
  {
    id:77, name:"Kerala Prawn Curry", hindi_name:"केरला झींगा करी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"South India", serving_size_g:280,
    nutrition_per_serving:{calories:310,protein_g:28,carbohydrates_g:12,fat_g:18,fiber_g:3,sugar_g:4,sodium_mg:680,calcium_mg:140,iron_mg:3.8,vitamin_c_mg:15},
    nutrition_per_100g:{calories:110.7,protein_g:10,carbohydrates_g:4.3,fat_g:6.4,fiber_g:1.1,sugar_g:1.4,sodium_mg:242.9,calcium_mg:50,iron_mg:1.4,vitamin_c_mg:5.4},
    health_tags:["high_protein","omega3_rich","low_calorie"], allergens:["shellfish"], glycemic_index:20,
    description:"Prawns cooked in spiced coconut milk gravy with curry leaves"
  },
  {
    id:78, name:"Chana Masala", hindi_name:"चना मसाला", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:310,protein_g:15,carbohydrates_g:46,fat_g:8,fiber_g:12,sugar_g:5,sodium_mg:520,calcium_mg:100,iron_mg:7,vitamin_c_mg:10},
    nutrition_per_100g:{calories:124,protein_g:6,carbohydrates_g:18.4,fat_g:3.2,fiber_g:4.8,sugar_g:2,sodium_mg:208,calcium_mg:40,iron_mg:2.8,vitamin_c_mg:4},
    health_tags:["high_protein","high_fiber","vegan","heart_healthy","diabetic_friendly"], allergens:[], glycemic_index:30,
    description:"Spiced chickpea curry with tangy dried mango and pomegranate"
  },
  {
    id:79, name:"Mushroom Masala", hindi_name:"मशरूम मसाला", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:200,protein_g:7,carbohydrates_g:18,fat_g:12,fiber_g:4,sugar_g:6,sodium_mg:480,calcium_mg:35,iron_mg:2.5,vitamin_c_mg:20},
    nutrition_per_100g:{calories:80,protein_g:2.8,carbohydrates_g:7.2,fat_g:4.8,fiber_g:1.6,sugar_g:2.4,sodium_mg:192,calcium_mg:14,iron_mg:1,vitamin_c_mg:8},
    health_tags:["low_calorie","vegan","immunity_booster","diabetic_friendly"], allergens:[], glycemic_index:30,
    description:"Button mushrooms cooked in spiced onion-tomato gravy"
  },
  {
    id:80, name:"Soya Chunks Curry", hindi_name:"सोया करी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:280,protein_g:20,carbohydrates_g:28,fat_g:8,fiber_g:6,sugar_g:5,sodium_mg:460,calcium_mg:80,iron_mg:4.5,vitamin_c_mg:12},
    nutrition_per_100g:{calories:112,protein_g:8,carbohydrates_g:11.2,fat_g:3.2,fiber_g:2.4,sugar_g:2,sodium_mg:184,calcium_mg:32,iron_mg:1.8,vitamin_c_mg:4.8},
    health_tags:["high_protein","high_fiber","vegan","heart_healthy"], allergens:["soy"], glycemic_index:35,
    description:"Textured soy protein cooked in spiced tomato-onion gravy"
  },
  {
    id:81, name:"Jackfruit Curry", hindi_name:"कटहल की सब्जी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"East India", serving_size_g:250,
    nutrition_per_serving:{calories:220,protein_g:4,carbohydrates_g:42,fat_g:5,fiber_g:8,sugar_g:10,sodium_mg:380,calcium_mg:40,iron_mg:1.8,vitamin_c_mg:25},
    nutrition_per_100g:{calories:88,protein_g:1.6,carbohydrates_g:16.8,fat_g:2,fiber_g:3.2,sugar_g:4,sodium_mg:152,calcium_mg:16,iron_mg:0.7,vitamin_c_mg:10},
    health_tags:["high_fiber","vegan","low_calorie","vitamin_c_rich"], allergens:[], glycemic_index:50,
    description:"Raw jackfruit cooked in spiced onion-tomato gravy, meat substitute"
  },
  {
    id:82, name:"Chicken Saagwala", hindi_name:"चिकन साग", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"North India", serving_size_g:300,
    nutrition_per_serving:{calories:380,protein_g:35,carbohydrates_g:14,fat_g:22,fiber_g:5,sugar_g:4,sodium_mg:680,calcium_mg:200,iron_mg:8,vitamin_c_mg:35},
    nutrition_per_100g:{calories:127,protein_g:11.7,carbohydrates_g:4.7,fat_g:7.3,fiber_g:1.7,sugar_g:1.3,sodium_mg:227,calcium_mg:66.7,iron_mg:2.7,vitamin_c_mg:11.7},
    health_tags:["high_protein","iron_rich","vitamin_c_rich"], allergens:["dairy"], glycemic_index:20,
    description:"Tender chicken pieces cooked in fresh spinach gravy"
  },
  {
    id:83, name:"Mixed Dal", hindi_name:"मिक्स दाल", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:270,protein_g:16,carbohydrates_g:40,fat_g:5,fiber_g:9,sugar_g:3,sodium_mg:400,calcium_mg:75,iron_mg:5,vitamin_c_mg:4},
    nutrition_per_100g:{calories:108,protein_g:6.4,carbohydrates_g:16,fat_g:2,fiber_g:3.6,sugar_g:1.2,sodium_mg:160,calcium_mg:30,iron_mg:2,vitamin_c_mg:1.6},
    health_tags:["high_protein","high_fiber","vegan","diabetic_friendly","heart_healthy"], allergens:[], glycemic_index:30,
    description:"Combination of five lentils slow-cooked with garlic and spices"
  },
  {
    id:84, name:"Toor Dal", hindi_name:"तुअर दाल", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"All India", serving_size_g:250,
    nutrition_per_serving:{calories:240,protein_g:14,carbohydrates_g:38,fat_g:4,fiber_g:7,sugar_g:3,sodium_mg:380,calcium_mg:50,iron_mg:3.8,vitamin_c_mg:3},
    nutrition_per_100g:{calories:96,protein_g:5.6,carbohydrates_g:15.2,fat_g:1.6,fiber_g:2.8,sugar_g:1.2,sodium_mg:152,calcium_mg:20,iron_mg:1.5,vitamin_c_mg:1.2},
    health_tags:["high_protein","high_fiber","vegan","diabetic_friendly"], allergens:[], glycemic_index:29,
    description:"Pigeon pea lentils cooked with turmeric and tempered with mustard seeds"
  },
  {
    id:85, name:"Kadhi Pakora", hindi_name:"कढ़ी पकोड़ा", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:300,
    nutrition_per_serving:{calories:350,protein_g:12,carbohydrates_g:36,fat_g:18,fiber_g:4,sugar_g:6,sodium_mg:580,calcium_mg:220,iron_mg:2.5,vitamin_c_mg:5},
    nutrition_per_100g:{calories:117,protein_g:4,carbohydrates_g:12,fat_g:6,fiber_g:1.3,sugar_g:2,sodium_mg:193,calcium_mg:73.3,iron_mg:0.8,vitamin_c_mg:1.7},
    health_tags:["high_calcium","probiotic","gut_friendly"], allergens:["dairy"], glycemic_index:42,
    description:"Fried chickpea flour dumplings in tangy yogurt and gram flour gravy"
  },
  {
    id:86, name:"Kofta Curry", hindi_name:"कोफ्ता करी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:280,
    nutrition_per_serving:{calories:400,protein_g:14,carbohydrates_g:28,fat_g:26,fiber_g:4,sugar_g:8,sodium_mg:620,calcium_mg:200,iron_mg:3,vitamin_c_mg:15},
    nutrition_per_100g:{calories:143,protein_g:5,carbohydrates_g:10,fat_g:9.3,fiber_g:1.4,sugar_g:2.9,sodium_mg:221,calcium_mg:71.4,iron_mg:1.1,vitamin_c_mg:5.4},
    health_tags:["high_calcium","filling","energy_rich"], allergens:["dairy"], glycemic_index:35,
    description:"Cottage cheese balls cooked in a rich onion and tomato gravy"
  },
  {
    id:87, name:"Navratan Korma", hindi_name:"नवरतन कोरमा", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:280,
    nutrition_per_serving:{calories:420,protein_g:12,carbohydrates_g:38,fat_g:26,fiber_g:5,sugar_g:12,sodium_mg:540,calcium_mg:150,iron_mg:2.8,vitamin_c_mg:20},
    nutrition_per_100g:{calories:150,protein_g:4.3,carbohydrates_g:13.6,fat_g:9.3,fiber_g:1.8,sugar_g:4.3,sodium_mg:192.9,calcium_mg:53.6,iron_mg:1,vitamin_c_mg:7.1},
    health_tags:["energy_rich","vitamin_c_rich"], allergens:["dairy","nuts"], glycemic_index:40,
    description:"Nine-jewel vegetable curry cooked in a rich cream and nut sauce"
  },
  {
    id:88, name:"Chicken Vindaloo", hindi_name:"चिकन विंदालू", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"West India", serving_size_g:300,
    nutrition_per_serving:{calories:420,protein_g:35,carbohydrates_g:18,fat_g:24,fiber_g:3,sugar_g:6,sodium_mg:840,calcium_mg:70,iron_mg:3.5,vitamin_c_mg:20},
    nutrition_per_100g:{calories:140,protein_g:11.7,carbohydrates_g:6,fat_g:8,fiber_g:1,sugar_g:2,sodium_mg:280,calcium_mg:23.3,iron_mg:1.2,vitamin_c_mg:6.7},
    health_tags:["high_protein","spicy","anti_inflammatory"], allergens:[], glycemic_index:22,
    description:"Fiery Portuguese-influenced Goan curry with vinegar and chiles"
  },
  {
    id:89, name:"Hyderabadi Haleem", hindi_name:"हलीम", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"South India", serving_size_g:300,
    nutrition_per_serving:{calories:480,protein_g:28,carbohydrates_g:44,fat_g:20,fiber_g:6,sugar_g:4,sodium_mg:680,calcium_mg:70,iron_mg:5.5,vitamin_c_mg:5},
    nutrition_per_100g:{calories:160,protein_g:9.3,carbohydrates_g:14.7,fat_g:6.7,fiber_g:2,sugar_g:1.3,sodium_mg:226.7,calcium_mg:23.3,iron_mg:1.8,vitamin_c_mg:1.7},
    health_tags:["high_protein","high_fiber","iron_rich"], allergens:["gluten"], glycemic_index:40,
    description:"Slow-cooked wheat and meat porridge, Hyderabadi specialty"
  },
  {
    id:90, name:"Jackfruit Biryani", hindi_name:"कटहल बिरयानी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"South India", serving_size_g:350,
    nutrition_per_serving:{calories:440,protein_g:10,carbohydrates_g:78,fat_g:10,fiber_g:8,sugar_g:8,sodium_mg:640,calcium_mg:60,iron_mg:3,vitamin_c_mg:22},
    nutrition_per_100g:{calories:125.7,protein_g:2.9,carbohydrates_g:22.3,fat_g:2.9,fiber_g:2.3,sugar_g:2.3,sodium_mg:182.9,calcium_mg:17.1,iron_mg:0.9,vitamin_c_mg:6.3},
    health_tags:["high_fiber","vegan","energy_rich"], allergens:[], glycemic_index:50,
    description:"Aromatic biryani made with young jackfruit as meat substitute"
  },
  {
    id:91, name:"Kaju Curry", hindi_name:"काजू करी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:480,protein_g:14,carbohydrates_g:28,fat_g:36,fiber_g:3,sugar_g:8,sodium_mg:520,calcium_mg:60,iron_mg:3.5,vitamin_c_mg:12},
    nutrition_per_100g:{calories:192,protein_g:5.6,carbohydrates_g:11.2,fat_g:14.4,fiber_g:1.2,sugar_g:3.2,sodium_mg:208,calcium_mg:24,iron_mg:1.4,vitamin_c_mg:4.8},
    health_tags:["high_protein","energy_rich","heart_healthy"], allergens:["dairy","nuts"], glycemic_index:32,
    description:"Cashew nuts cooked in a creamy spiced gravy"
  },
  {
    id:92, name:"Mutton Keema", hindi_name:"मटन कीमा", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:420,protein_g:32,carbohydrates_g:12,fat_g:28,fiber_g:3,sugar_g:5,sodium_mg:680,calcium_mg:55,iron_mg:5.5,vitamin_c_mg:15},
    nutrition_per_100g:{calories:168,protein_g:12.8,carbohydrates_g:4.8,fat_g:11.2,fiber_g:1.2,sugar_g:2,sodium_mg:272,calcium_mg:22,iron_mg:2.2,vitamin_c_mg:6},
    health_tags:["high_protein","iron_rich","keto_friendly"], allergens:[], glycemic_index:20,
    description:"Spiced minced mutton cooked with peas and aromatics"
  },
  {
    id:93, name:"Kathal Biryani", hindi_name:"कटहल बिरयानी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:350,
    nutrition_per_serving:{calories:460,protein_g:10,carbohydrates_g:82,fat_g:10,fiber_g:7,sugar_g:6,sodium_mg:650,calcium_mg:65,iron_mg:3.2,vitamin_c_mg:18},
    nutrition_per_100g:{calories:131.4,protein_g:2.9,carbohydrates_g:23.4,fat_g:2.9,fiber_g:2,sugar_g:1.7,sodium_mg:185.7,calcium_mg:18.6,iron_mg:0.9,vitamin_c_mg:5.1},
    health_tags:["high_fiber","vegan","energy_rich"], allergens:[], glycemic_index:50,
    description:"Fragrant rice cooked with young jackfruit in Dum style"
  },
  {
    id:94, name:"Prawn Biryani", hindi_name:"झींगा बिरयानी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"South India", serving_size_g:350,
    nutrition_per_serving:{calories:480,protein_g:28,carbohydrates_g:68,fat_g:12,fiber_g:3,sugar_g:4,sodium_mg:780,calcium_mg:120,iron_mg:4,vitamin_c_mg:10},
    nutrition_per_100g:{calories:137,protein_g:8,carbohydrates_g:19.4,fat_g:3.4,fiber_g:0.9,sugar_g:1.1,sodium_mg:222.9,calcium_mg:34.3,iron_mg:1.1,vitamin_c_mg:2.9},
    health_tags:["high_protein","omega3_rich","energy_rich"], allergens:["shellfish"], glycemic_index:52,
    description:"Fragrant basmati rice layered with spiced prawns"
  },
  {
    id:95, name:"Bhindi Masala", hindi_name:"भिंडी मसाला", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:200,
    nutrition_per_serving:{calories:160,protein_g:4,carbohydrates_g:20,fat_g:8,fiber_g:6,sugar_g:5,sodium_mg:360,calcium_mg:120,iron_mg:1.5,vitamin_c_mg:25},
    nutrition_per_100g:{calories:80,protein_g:2,carbohydrates_g:10,fat_g:4,fiber_g:3,sugar_g:2.5,sodium_mg:180,calcium_mg:60,iron_mg:0.75,vitamin_c_mg:12.5},
    health_tags:["low_calorie","high_fiber","vegan","diabetic_friendly","vitamin_c_rich"], allergens:[], glycemic_index:28,
    description:"Stir-fried okra with onions, tomatoes and spices"
  },
  {
    id:96, name:"Lamb Korma", hindi_name:"लैम्ब कोरमा", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"North India", serving_size_g:300,
    nutrition_per_serving:{calories:520,protein_g:32,carbohydrates_g:12,fat_g:38,fiber_g:2,sugar_g:5,sodium_mg:740,calcium_mg:85,iron_mg:4.8,vitamin_c_mg:5},
    nutrition_per_100g:{calories:173,protein_g:10.7,carbohydrates_g:4,fat_g:12.7,fiber_g:0.7,sugar_g:1.7,sodium_mg:247,calcium_mg:28.3,iron_mg:1.6,vitamin_c_mg:1.7},
    health_tags:["high_protein","iron_rich","energy_rich"], allergens:["dairy","nuts"], glycemic_index:22,
    description:"Tender lamb pieces slow-cooked in a mild yogurt and nut sauce"
  },
  {
    id:97, name:"Achari Chicken", hindi_name:"अचारी चिकन", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"North India", serving_size_g:300,
    nutrition_per_serving:{calories:420,protein_g:35,carbohydrates_g:14,fat_g:26,fiber_g:3,sugar_g:5,sodium_mg:820,calcium_mg:75,iron_mg:3.2,vitamin_c_mg:12},
    nutrition_per_100g:{calories:140,protein_g:11.7,carbohydrates_g:4.7,fat_g:8.7,fiber_g:1,sugar_g:1.7,sodium_mg:273,calcium_mg:25,iron_mg:1.1,vitamin_c_mg:4},
    health_tags:["high_protein","spicy","probiotic"], allergens:["dairy"], glycemic_index:22,
    description:"Chicken cooked with pickle spices giving it a tangy bold flavor"
  },
  {
    id:98, name:"Vegetable Jalfrezi", hindi_name:"वेज जलफ्रेजी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"All India", serving_size_g:250,
    nutrition_per_serving:{calories:180,protein_g:5,carbohydrates_g:24,fat_g:8,fiber_g:6,sugar_g:8,sodium_mg:480,calcium_mg:60,iron_mg:2,vitamin_c_mg:45},
    nutrition_per_100g:{calories:72,protein_g:2,carbohydrates_g:9.6,fat_g:3.2,fiber_g:2.4,sugar_g:3.2,sodium_mg:192,calcium_mg:24,iron_mg:0.8,vitamin_c_mg:18},
    health_tags:["low_calorie","vitamin_c_rich","high_fiber","vegan"], allergens:[], glycemic_index:35,
    description:"Stir-fried mixed vegetables with bell peppers in spiced gravy"
  },
  {
    id:99, name:"Sabudana Khichdi", hindi_name:"साबूदाना खिचड़ी", category:"main_course", meal_type:["lunch","snack"],
    diet_type:"vegetarian", region:"West India", serving_size_g:200,
    nutrition_per_serving:{calories:380,protein_g:8,carbohydrates_g:62,fat_g:12,fiber_g:2,sugar_g:3,sodium_mg:300,calcium_mg:65,iron_mg:2,vitamin_c_mg:5},
    nutrition_per_100g:{calories:190,protein_g:4,carbohydrates_g:31,fat_g:6,fiber_g:1,sugar_g:1.5,sodium_mg:150,calcium_mg:32.5,iron_mg:1,vitamin_c_mg:2.5},
    health_tags:["energy_rich","gluten_free","fasting_friendly"], allergens:["dairy"], glycemic_index:65,
    description:"Fasting-friendly tapioca pearl dish with peanuts and potatoes"
  },
  {
    id:100, name:"Bisi Bele Bath", hindi_name:"बिसी बेले बाथ", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"South India", serving_size_g:300,
    nutrition_per_serving:{calories:380,protein_g:14,carbohydrates_g:60,fat_g:10,fiber_g:7,sugar_g:5,sodium_mg:520,calcium_mg:60,iron_mg:3.5,vitamin_c_mg:15},
    nutrition_per_100g:{calories:127,protein_g:4.7,carbohydrates_g:20,fat_g:3.3,fiber_g:2.3,sugar_g:1.7,sodium_mg:173,calcium_mg:20,iron_mg:1.2,vitamin_c_mg:5},
    health_tags:["high_protein","high_fiber","energy_rich"], allergens:["dairy"], glycemic_index:45,
    description:"Karnataka spiced rice and lentil porridge with vegetables and ghee"
  },
  {
    id:101, name:"Chicken Pulao", hindi_name:"चिकन पुलाव", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"North India", serving_size_g:350,
    nutrition_per_serving:{calories:480,protein_g:28,carbohydrates_g:65,fat_g:12,fiber_g:3,sugar_g:3,sodium_mg:680,calcium_mg:55,iron_mg:3.5,vitamin_c_mg:8},
    nutrition_per_100g:{calories:137,protein_g:8,carbohydrates_g:18.6,fat_g:3.4,fiber_g:0.9,sugar_g:0.9,sodium_mg:194,calcium_mg:15.7,iron_mg:1,vitamin_c_mg:2.3},
    health_tags:["high_protein","energy_rich"], allergens:[], glycemic_index:50,
    description:"Fragrant one-pot rice cooked with chicken and whole spices"
  },
  {
    id:102, name:"Paneer Tikka Masala", hindi_name:"पनीर टिक्का मसाला", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:280,
    nutrition_per_serving:{calories:440,protein_g:20,carbohydrates_g:20,fat_g:32,fiber_g:3,sugar_g:8,sodium_mg:640,calcium_mg:380,iron_mg:2.5,vitamin_c_mg:18},
    nutrition_per_100g:{calories:157,protein_g:7.1,carbohydrates_g:7.1,fat_g:11.4,fiber_g:1.1,sugar_g:2.9,sodium_mg:228.6,calcium_mg:135.7,iron_mg:0.9,vitamin_c_mg:6.4},
    health_tags:["high_protein","high_calcium","keto_friendly"], allergens:["dairy"], glycemic_index:28,
    description:"Grilled cottage cheese in a spiced tikka masala sauce"
  },
  {
    id:103, name:"Moong Dal Soup", hindi_name:"मूंग दाल सूप", category:"soups", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"All India", serving_size_g:250,
    nutrition_per_serving:{calories:180,protein_g:12,carbohydrates_g:28,fat_g:3,fiber_g:6,sugar_g:3,sodium_mg:320,calcium_mg:45,iron_mg:3,vitamin_c_mg:5},
    nutrition_per_100g:{calories:72,protein_g:4.8,carbohydrates_g:11.2,fat_g:1.2,fiber_g:2.4,sugar_g:1.2,sodium_mg:128,calcium_mg:18,iron_mg:1.2,vitamin_c_mg:2},
    health_tags:["high_protein","easy_to_digest","diabetic_friendly","low_calorie"], allergens:[], glycemic_index:28,
    description:"Smooth yellow lentil soup with turmeric and ginger"
  },
  {
    id:104, name:"Thalipeeth", hindi_name:"थालीपीठ", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"West India", serving_size_g:150,
    nutrition_per_serving:{calories:280,protein_g:10,carbohydrates_g:44,fat_g:8,fiber_g:6,sugar_g:3,sodium_mg:360,calcium_mg:60,iron_mg:3,vitamin_c_mg:8},
    nutrition_per_100g:{calories:187,protein_g:6.7,carbohydrates_g:29.3,fat_g:5.3,fiber_g:4,sugar_g:2,sodium_mg:240,calcium_mg:40,iron_mg:2,vitamin_c_mg:5.3},
    health_tags:["high_fiber","high_protein","gluten_free"], allergens:[], glycemic_index:45,
    description:"Multi-grain savory flatbread from Maharashtra with six flours"
  },
  {
    id:105, name:"Panch Phoron Aloo", hindi_name:"पांच फोड़न आलू", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"East India", serving_size_g:200,
    nutrition_per_serving:{calories:220,protein_g:4,carbohydrates_g:38,fat_g:7,fiber_g:5,sugar_g:3,sodium_mg:340,calcium_mg:30,iron_mg:2,vitamin_c_mg:20},
    nutrition_per_100g:{calories:110,protein_g:2,carbohydrates_g:19,fat_g:3.5,fiber_g:2.5,sugar_g:1.5,sodium_mg:170,calcium_mg:15,iron_mg:1,vitamin_c_mg:10},
    health_tags:["vegan","energy_rich","digestive"], allergens:[], glycemic_index:55,
    description:"Bengali potatoes tempered with five-spice mix, simple and flavorful"
  },
  {
    id:106, name:"Chettinad Egg Curry", hindi_name:"चेट्टीनाड अंडा करी", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"South India", serving_size_g:250,
    nutrition_per_serving:{calories:320,protein_g:18,carbohydrates_g:16,fat_g:22,fiber_g:3,sugar_g:6,sodium_mg:580,calcium_mg:90,iron_mg:3.5,vitamin_c_mg:15},
    nutrition_per_100g:{calories:128,protein_g:7.2,carbohydrates_g:6.4,fat_g:8.8,fiber_g:1.2,sugar_g:2.4,sodium_mg:232,calcium_mg:36,iron_mg:1.4,vitamin_c_mg:6},
    health_tags:["high_protein","spicy","anti_inflammatory"], allergens:["egg"], glycemic_index:25,
    description:"Boiled eggs in a fiery Chettinad spice gravy"
  },
  {
    id:107, name:"Coconut Fish Fry", hindi_name:"नारियल फिश फ्राई", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"South India", serving_size_g:200,
    nutrition_per_serving:{calories:320,protein_g:28,carbohydrates_g:12,fat_g:18,fiber_g:3,sugar_g:2,sodium_mg:480,calcium_mg:80,iron_mg:2.5,vitamin_c_mg:8},
    nutrition_per_100g:{calories:160,protein_g:14,carbohydrates_g:6,fat_g:9,fiber_g:1.5,sugar_g:1,sodium_mg:240,calcium_mg:40,iron_mg:1.25,vitamin_c_mg:4},
    health_tags:["high_protein","omega3_rich","keto_friendly"], allergens:["fish"], glycemic_index:20,
    description:"Fish coated in coconut and spice crust, shallow fried to perfection"
  },
  {
    id:108, name:"Peas Pulao", hindi_name:"मटर पुलाव", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:300,
    nutrition_per_serving:{calories:360,protein_g:9,carbohydrates_g:68,fat_g:7,fiber_g:5,sugar_g:4,sodium_mg:400,calcium_mg:40,iron_mg:2.5,vitamin_c_mg:18},
    nutrition_per_100g:{calories:120,protein_g:3,carbohydrates_g:22.7,fat_g:2.3,fiber_g:1.7,sugar_g:1.3,sodium_mg:133,calcium_mg:13.3,iron_mg:0.8,vitamin_c_mg:6},
    health_tags:["energy_rich","high_fiber","low_fat"], allergens:[], glycemic_index:52,
    description:"Fragrant basmati rice cooked with green peas and whole spices"
  },
  {
    id:109, name:"Kosha Mangsho", hindi_name:"कोषा मांगशो", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"non_vegetarian", region:"East India", serving_size_g:300,
    nutrition_per_serving:{calories:500,protein_g:35,carbohydrates_g:14,fat_g:34,fiber_g:3,sugar_g:6,sodium_mg:740,calcium_mg:60,iron_mg:5.8,vitamin_c_mg:10},
    nutrition_per_100g:{calories:167,protein_g:11.7,carbohydrates_g:4.7,fat_g:11.3,fiber_g:1,sugar_g:2,sodium_mg:246.7,calcium_mg:20,iron_mg:1.9,vitamin_c_mg:3.3},
    health_tags:["high_protein","iron_rich"], allergens:[], glycemic_index:20,
    description:"Slow-cooked Bengali dry mutton curry with intense caramelized spices"
  },
  {
    id:110, name:"Iyer Kuzhambu", hindi_name:"इयर कुज़म्बू", category:"main_course", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"South India", serving_size_g:250,
    nutrition_per_serving:{calories:180,protein_g:5,carbohydrates_g:28,fat_g:6,fiber_g:6,sugar_g:5,sodium_mg:420,calcium_mg:55,iron_mg:2.8,vitamin_c_mg:20},
    nutrition_per_100g:{calories:72,protein_g:2,carbohydrates_g:11.2,fat_g:2.4,fiber_g:2.4,sugar_g:2,sodium_mg:168,calcium_mg:22,iron_mg:1.1,vitamin_c_mg:8},
    health_tags:["low_calorie","vegan","high_fiber","immunity_booster"], allergens:[], glycemic_index:30,
    description:"Tangy tamarind-based vegetable curry with freshly ground coconut"
  },

  // ═══════════════════════════════════════════
  // SNACKS (111-150)
  // ═══════════════════════════════════════════
  {
    id:111, name:"Samosa", hindi_name:"समोसा", category:"snacks", meal_type:["snack"],
    diet_type:"vegetarian", region:"North India", serving_size_g:100,
    nutrition_per_serving:{calories:262,protein_g:5,carbohydrates_g:34,fat_g:12,fiber_g:3,sugar_g:2,sodium_mg:420,calcium_mg:30,iron_mg:2,vitamin_c_mg:6},
    nutrition_per_100g:{calories:262,protein_g:5,carbohydrates_g:34,fat_g:12,fiber_g:3,sugar_g:2,sodium_mg:420,calcium_mg:30,iron_mg:2,vitamin_c_mg:6},
    health_tags:["energy_rich"], allergens:["gluten"], glycemic_index:62,
    description:"Deep fried pastry filled with spiced potato and peas"
  },
  {
    id:112, name:"Pani Puri / Golgappa", hindi_name:"पानी पूरी", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"All India", serving_size_g:100,
    nutrition_per_serving:{calories:180,protein_g:4,carbohydrates_g:32,fat_g:5,fiber_g:3,sugar_g:3,sodium_mg:350,calcium_mg:25,iron_mg:2,vitamin_c_mg:8},
    nutrition_per_100g:{calories:180,protein_g:4,carbohydrates_g:32,fat_g:5,fiber_g:3,sugar_g:3,sodium_mg:350,calcium_mg:25,iron_mg:2,vitamin_c_mg:8},
    health_tags:["low_calorie","digestive"], allergens:["gluten"], glycemic_index:55,
    description:"Hollow crispy puris filled with spiced tamarind water and chickpeas"
  },
  {
    id:113, name:"Vada Pav", hindi_name:"वड़ा पाव", category:"snacks", meal_type:["snack","breakfast"],
    diet_type:"vegan", region:"West India", serving_size_g:150,
    nutrition_per_serving:{calories:295,protein_g:7,carbohydrates_g:46,fat_g:10,fiber_g:4,sugar_g:3,sodium_mg:480,calcium_mg:45,iron_mg:2.5,vitamin_c_mg:10},
    nutrition_per_100g:{calories:197,protein_g:4.7,carbohydrates_g:30.7,fat_g:6.7,fiber_g:2.7,sugar_g:2,sodium_mg:320,calcium_mg:30,iron_mg:1.7,vitamin_c_mg:6.7},
    health_tags:["energy_rich","filling"], allergens:["gluten"], glycemic_index:60,
    description:"Spiced potato fritter in a soft bun with chutneys"
  },
  {
    id:114, name:"Bhel Puri", hindi_name:"भेल पूरी", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"West India", serving_size_g:150,
    nutrition_per_serving:{calories:210,protein_g:6,carbohydrates_g:38,fat_g:5,fiber_g:4,sugar_g:5,sodium_mg:480,calcium_mg:35,iron_mg:2.5,vitamin_c_mg:10},
    nutrition_per_100g:{calories:140,protein_g:4,carbohydrates_g:25.3,fat_g:3.3,fiber_g:2.7,sugar_g:3.3,sodium_mg:320,calcium_mg:23.3,iron_mg:1.7,vitamin_c_mg:6.7},
    health_tags:["low_calorie","light"], allergens:["gluten"], glycemic_index:55,
    description:"Puffed rice tossed with vegetables, chutneys, and sev"
  },
  {
    id:115, name:"Sev Puri", hindi_name:"सेव पूरी", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"West India", serving_size_g:120,
    nutrition_per_serving:{calories:220,protein_g:5,carbohydrates_g:36,fat_g:7,fiber_g:3,sugar_g:5,sodium_mg:500,calcium_mg:30,iron_mg:2,vitamin_c_mg:8},
    nutrition_per_100g:{calories:183,protein_g:4.2,carbohydrates_g:30,fat_g:5.8,fiber_g:2.5,sugar_g:4.2,sodium_mg:417,calcium_mg:25,iron_mg:1.7,vitamin_c_mg:6.7},
    health_tags:["light","energy_rich"], allergens:["gluten"], glycemic_index:58,
    description:"Crispy puris topped with potato, chutneys, and crispy sev"
  },
  {
    id:116, name:"Dahi Puri", hindi_name:"दही पूरी", category:"snacks", meal_type:["snack"],
    diet_type:"vegetarian", region:"West India", serving_size_g:150,
    nutrition_per_serving:{calories:200,protein_g:6,carbohydrates_g:32,fat_g:6,fiber_g:2,sugar_g:8,sodium_mg:380,calcium_mg:85,iron_mg:1.5,vitamin_c_mg:5},
    nutrition_per_100g:{calories:133,protein_g:4,carbohydrates_g:21.3,fat_g:4,fiber_g:1.3,sugar_g:5.3,sodium_mg:253,calcium_mg:56.7,iron_mg:1,vitamin_c_mg:3.3},
    health_tags:["probiotic","gut_friendly","light"], allergens:["dairy","gluten"], glycemic_index:50,
    description:"Puris filled with potato and topped with yogurt and chutneys"
  },
  {
    id:117, name:"Papdi Chaat", hindi_name:"पापड़ी चाट", category:"snacks", meal_type:["snack"],
    diet_type:"vegetarian", region:"North India", serving_size_g:150,
    nutrition_per_serving:{calories:240,protein_g:7,carbohydrates_g:36,fat_g:8,fiber_g:3,sugar_g:8,sodium_mg:520,calcium_mg:80,iron_mg:2,vitamin_c_mg:8},
    nutrition_per_100g:{calories:160,protein_g:4.7,carbohydrates_g:24,fat_g:5.3,fiber_g:2,sugar_g:5.3,sodium_mg:347,calcium_mg:53.3,iron_mg:1.3,vitamin_c_mg:5.3},
    health_tags:["probiotic","gut_friendly"], allergens:["dairy","gluten"], glycemic_index:55,
    description:"Crispy wafers with chickpeas, yogurt, and tangy chutneys"
  },
  {
    id:118, name:"Ragda Patties", hindi_name:"रगड़ा पेटीस", category:"snacks", meal_type:["snack","lunch"],
    diet_type:"vegan", region:"West India", serving_size_g:250,
    nutrition_per_serving:{calories:340,protein_g:12,carbohydrates_g:54,fat_g:9,fiber_g:9,sugar_g:5,sodium_mg:560,calcium_mg:60,iron_mg:4.5,vitamin_c_mg:18},
    nutrition_per_100g:{calories:136,protein_g:4.8,carbohydrates_g:21.6,fat_g:3.6,fiber_g:3.6,sugar_g:2,sodium_mg:224,calcium_mg:24,iron_mg:1.8,vitamin_c_mg:7.2},
    health_tags:["high_protein","high_fiber","energy_rich"], allergens:[], glycemic_index:48,
    description:"Spiced potato patties topped with white pea curry and chutneys"
  },
  {
    id:119, name:"Dahi Bhalla", hindi_name:"दही भल्ला", category:"snacks", meal_type:["snack"],
    diet_type:"vegetarian", region:"North India", serving_size_g:200,
    nutrition_per_serving:{calories:260,protein_g:10,carbohydrates_g:38,fat_g:8,fiber_g:3,sugar_g:10,sodium_mg:420,calcium_mg:160,iron_mg:2,vitamin_c_mg:3},
    nutrition_per_100g:{calories:130,protein_g:5,carbohydrates_g:19,fat_g:4,fiber_g:1.5,sugar_g:5,sodium_mg:210,calcium_mg:80,iron_mg:1,vitamin_c_mg:1.5},
    health_tags:["probiotic","high_calcium","gut_friendly"], allergens:["dairy"], glycemic_index:48,
    description:"Lentil dumplings soaked in spiced sweetened yogurt"
  },
  {
    id:120, name:"Kachori", hindi_name:"कचोरी", category:"snacks", meal_type:["snack","breakfast"],
    diet_type:"vegan", region:"North India", serving_size_g:100,
    nutrition_per_serving:{calories:280,protein_g:7,carbohydrates_g:36,fat_g:13,fiber_g:4,sugar_g:2,sodium_mg:380,calcium_mg:40,iron_mg:2.5,vitamin_c_mg:3},
    nutrition_per_100g:{calories:280,protein_g:7,carbohydrates_g:36,fat_g:13,fiber_g:4,sugar_g:2,sodium_mg:380,calcium_mg:40,iron_mg:2.5,vitamin_c_mg:3},
    health_tags:["energy_rich","high_fiber"], allergens:["gluten"], glycemic_index:58,
    description:"Deep-fried pastry filled with spiced lentil or onion filling"
  },
  {
    id:121, name:"Aloo Chaat", hindi_name:"आलू चाट", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"North India", serving_size_g:150,
    nutrition_per_serving:{calories:200,protein_g:4,carbohydrates_g:36,fat_g:6,fiber_g:4,sugar_g:4,sodium_mg:440,calcium_mg:30,iron_mg:2,vitamin_c_mg:22},
    nutrition_per_100g:{calories:133,protein_g:2.7,carbohydrates_g:24,fat_g:4,fiber_g:2.7,sugar_g:2.7,sodium_mg:293,calcium_mg:20,iron_mg:1.3,vitamin_c_mg:14.7},
    health_tags:["energy_rich","vitamin_c_rich"], allergens:[], glycemic_index:58,
    description:"Crispy fried potatoes tossed with tamarind chutney and spices"
  },
  {
    id:122, name:"Masala Corn", hindi_name:"मसाला कॉर्न", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"All India", serving_size_g:100,
    nutrition_per_serving:{calories:150,protein_g:4,carbohydrates_g:28,fat_g:4,fiber_g:4,sugar_g:5,sodium_mg:280,calcium_mg:15,iron_mg:1,vitamin_c_mg:8},
    nutrition_per_100g:{calories:150,protein_g:4,carbohydrates_g:28,fat_g:4,fiber_g:4,sugar_g:5,sodium_mg:280,calcium_mg:15,iron_mg:1,vitamin_c_mg:8},
    health_tags:["low_calorie","high_fiber","energy_rich"], allergens:[], glycemic_index:52,
    description:"Boiled corn kernels tossed with spices, butter and lime"
  },
  {
    id:123, name:"Roasted Makhana", hindi_name:"रोस्टेड मखाना", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"All India", serving_size_g:30,
    nutrition_per_serving:{calories:100,protein_g:3,carbohydrates_g:17,fat_g:2,fiber_g:0.5,sugar_g:1,sodium_mg:150,calcium_mg:25,iron_mg:0.8,vitamin_c_mg:0},
    nutrition_per_100g:{calories:333,protein_g:10,carbohydrates_g:57,fat_g:7,fiber_g:1.7,sugar_g:3.3,sodium_mg:500,calcium_mg:83.3,iron_mg:2.7,vitamin_c_mg:0},
    health_tags:["low_fat","gluten_free","fasting_friendly","low_calorie"], allergens:[], glycemic_index:40,
    description:"Crunchy air-popped lotus seeds with salt and spices"
  },
  {
    id:124, name:"Chakli", hindi_name:"चकली", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"West India", serving_size_g:50,
    nutrition_per_serving:{calories:210,protein_g:4,carbohydrates_g:28,fat_g:10,fiber_g:2,sugar_g:1,sodium_mg:300,calcium_mg:20,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:420,protein_g:8,carbohydrates_g:56,fat_g:20,fiber_g:4,sugar_g:2,sodium_mg:600,calcium_mg:40,iron_mg:3,vitamin_c_mg:0},
    health_tags:["gluten_free","energy_rich"], allergens:[], glycemic_index:60,
    description:"Crispy spiral-shaped snack made from rice flour and spices"
  },
  {
    id:125, name:"Murukku", hindi_name:"मुरुक्कु", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"South India", serving_size_g:50,
    nutrition_per_serving:{calories:220,protein_g:4,carbohydrates_g:28,fat_g:11,fiber_g:2,sugar_g:1,sodium_mg:280,calcium_mg:15,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:440,protein_g:8,carbohydrates_g:56,fat_g:22,fiber_g:4,sugar_g:2,sodium_mg:560,calcium_mg:30,iron_mg:3,vitamin_c_mg:0},
    health_tags:["gluten_free","energy_rich","crispy"], allergens:[], glycemic_index:60,
    description:"Crunchy twisted snack made from rice flour and urad dal"
  },
  {
    id:126, name:"Mathri", hindi_name:"मठरी", category:"snacks", meal_type:["snack"],
    diet_type:"vegetarian", region:"North India", serving_size_g:50,
    nutrition_per_serving:{calories:240,protein_g:5,carbohydrates_g:28,fat_g:13,fiber_g:1,sugar_g:1,sodium_mg:320,calcium_mg:20,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:480,protein_g:10,carbohydrates_g:56,fat_g:26,fiber_g:2,sugar_g:2,sodium_mg:640,calcium_mg:40,iron_mg:3,vitamin_c_mg:0},
    health_tags:["energy_rich","crispy"], allergens:["gluten","dairy"], glycemic_index:62,
    description:"Flaky deep-fried savory crackers from North India"
  },
  {
    id:127, name:"Papad / Papadum", hindi_name:"पापड़", category:"snacks", meal_type:["snack","lunch","dinner"],
    diet_type:"vegan", region:"All India", serving_size_g:20,
    nutrition_per_serving:{calories:80,protein_g:4,carbohydrates_g:12,fat_g:2,fiber_g:2,sugar_g:1,sodium_mg:280,calcium_mg:15,iron_mg:1,vitamin_c_mg:0},
    nutrition_per_100g:{calories:400,protein_g:20,carbohydrates_g:60,fat_g:10,fiber_g:10,sugar_g:5,sodium_mg:1400,calcium_mg:75,iron_mg:5,vitamin_c_mg:0},
    health_tags:["high_protein","low_calorie","gluten_free"], allergens:[], glycemic_index:50,
    description:"Thin crispy wafer made from lentil flour, roasted or fried"
  },
  {
    id:128, name:"Handvo", hindi_name:"हांडवो", category:"snacks", meal_type:["snack","breakfast"],
    diet_type:"vegetarian", region:"West India", serving_size_g:150,
    nutrition_per_serving:{calories:250,protein_g:10,carbohydrates_g:38,fat_g:8,fiber_g:5,sugar_g:4,sodium_mg:380,calcium_mg:80,iron_mg:2.5,vitamin_c_mg:8},
    nutrition_per_100g:{calories:167,protein_g:6.7,carbohydrates_g:25.3,fat_g:5.3,fiber_g:3.3,sugar_g:2.7,sodium_mg:253,calcium_mg:53.3,iron_mg:1.7,vitamin_c_mg:5.3},
    health_tags:["high_protein","high_fiber","gut_friendly"], allergens:["dairy"], glycemic_index:40,
    description:"Savory baked lentil and rice cake with vegetables, Gujarati specialty"
  },
  {
    id:129, name:"Moong Dal Pakoda", hindi_name:"मूंग दाल पकोड़ा", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"North India", serving_size_g:100,
    nutrition_per_serving:{calories:240,protein_g:12,carbohydrates_g:28,fat_g:10,fiber_g:4,sugar_g:2,sodium_mg:350,calcium_mg:40,iron_mg:3,vitamin_c_mg:3},
    nutrition_per_100g:{calories:240,protein_g:12,carbohydrates_g:28,fat_g:10,fiber_g:4,sugar_g:2,sodium_mg:350,calcium_mg:40,iron_mg:3,vitamin_c_mg:3},
    health_tags:["high_protein","energy_rich"], allergens:[], glycemic_index:48,
    description:"Crispy deep-fried moong dal fritters with spices"
  },
  {
    id:130, name:"Onion Pakora", hindi_name:"प्याज पकोड़ा", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"All India", serving_size_g:100,
    nutrition_per_serving:{calories:220,protein_g:6,carbohydrates_g:28,fat_g:10,fiber_g:3,sugar_g:3,sodium_mg:380,calcium_mg:35,iron_mg:2,vitamin_c_mg:8},
    nutrition_per_100g:{calories:220,protein_g:6,carbohydrates_g:28,fat_g:10,fiber_g:3,sugar_g:3,sodium_mg:380,calcium_mg:35,iron_mg:2,vitamin_c_mg:8},
    health_tags:["energy_rich","crispy"], allergens:["gluten"], glycemic_index:52,
    description:"Crispy chickpea flour battered onion fritters"
  },
  {
    id:131, name:"Corn Bhel", hindi_name:"कॉर्न भेल", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"West India", serving_size_g:150,
    nutrition_per_serving:{calories:180,protein_g:5,carbohydrates_g:32,fat_g:5,fiber_g:4,sugar_g:6,sodium_mg:320,calcium_mg:20,iron_mg:1.5,vitamin_c_mg:12},
    nutrition_per_100g:{calories:120,protein_g:3.3,carbohydrates_g:21.3,fat_g:3.3,fiber_g:2.7,sugar_g:4,sodium_mg:213,calcium_mg:13.3,iron_mg:1,vitamin_c_mg:8},
    health_tags:["low_calorie","high_fiber","vegan"], allergens:[], glycemic_index:50,
    description:"Boiled corn with vegetables, spices and tangy dressings"
  },
  {
    id:132, name:"Chicken Tikka", hindi_name:"चिकन टिक्का", category:"snacks", meal_type:["snack","dinner"],
    diet_type:"non_vegetarian", region:"North India", serving_size_g:150,
    nutrition_per_serving:{calories:240,protein_g:28,carbohydrates_g:6,fat_g:12,fiber_g:1,sugar_g:3,sodium_mg:520,calcium_mg:45,iron_mg:2,vitamin_c_mg:5},
    nutrition_per_100g:{calories:160,protein_g:18.7,carbohydrates_g:4,fat_g:8,fiber_g:0.7,sugar_g:2,sodium_mg:347,calcium_mg:30,iron_mg:1.3,vitamin_c_mg:3.3},
    health_tags:["high_protein","low_carb","keto_friendly","grilled"], allergens:["dairy"], glycemic_index:20,
    description:"Marinated chicken pieces grilled in tandoor, smoky and succulent"
  },
  {
    id:133, name:"Paneer Tikka", hindi_name:"पनीर टिक्का", category:"snacks", meal_type:["snack","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:150,
    nutrition_per_serving:{calories:280,protein_g:18,carbohydrates_g:8,fat_g:20,fiber_g:2,sugar_g:4,sodium_mg:480,calcium_mg:320,iron_mg:1.5,vitamin_c_mg:12},
    nutrition_per_100g:{calories:187,protein_g:12,carbohydrates_g:5.3,fat_g:13.3,fiber_g:1.3,sugar_g:2.7,sodium_mg:320,calcium_mg:213,iron_mg:1,vitamin_c_mg:8},
    health_tags:["high_protein","high_calcium","keto_friendly","grilled"], allergens:["dairy"], glycemic_index:22,
    description:"Marinated cottage cheese cubes grilled in tandoor with vegetables"
  },
  {
    id:134, name:"Seekh Kebab", hindi_name:"सीख कबाब", category:"snacks", meal_type:["snack","dinner"],
    diet_type:"non_vegetarian", region:"North India", serving_size_g:150,
    nutrition_per_serving:{calories:260,protein_g:22,carbohydrates_g:8,fat_g:16,fiber_g:2,sugar_g:2,sodium_mg:580,calcium_mg:40,iron_mg:3,vitamin_c_mg:8},
    nutrition_per_100g:{calories:173,protein_g:14.7,carbohydrates_g:5.3,fat_g:10.7,fiber_g:1.3,sugar_g:1.3,sodium_mg:387,calcium_mg:26.7,iron_mg:2,vitamin_c_mg:5.3},
    health_tags:["high_protein","keto_friendly","grilled"], allergens:[], glycemic_index:20,
    description:"Spiced minced meat molded on skewers and grilled in tandoor"
  },
  {
    id:135, name:"Dahi Kebab", hindi_name:"दही कबाब", category:"snacks", meal_type:["snack","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:150,
    nutrition_per_serving:{calories:250,protein_g:12,carbohydrates_g:22,fat_g:13,fiber_g:2,sugar_g:4,sodium_mg:420,calcium_mg:180,iron_mg:1.5,vitamin_c_mg:3},
    nutrition_per_100g:{calories:167,protein_g:8,carbohydrates_g:14.7,fat_g:8.7,fiber_g:1.3,sugar_g:2.7,sodium_mg:280,calcium_mg:120,iron_mg:1,vitamin_c_mg:2},
    health_tags:["high_protein","high_calcium","probiotic"], allergens:["dairy"], glycemic_index:35,
    description:"Soft yogurt and cottage cheese patties, shallow fried"
  },
  {
    id:136, name:"Hara Bhara Kebab", hindi_name:"हरा भरा कबाब", category:"snacks", meal_type:["snack","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:120,
    nutrition_per_serving:{calories:210,protein_g:8,carbohydrates_g:28,fat_g:8,fiber_g:6,sugar_g:3,sodium_mg:360,calcium_mg:80,iron_mg:4,vitamin_c_mg:30},
    nutrition_per_100g:{calories:175,protein_g:6.7,carbohydrates_g:23.3,fat_g:6.7,fiber_g:5,sugar_g:2.5,sodium_mg:300,calcium_mg:66.7,iron_mg:3.3,vitamin_c_mg:25},
    health_tags:["high_fiber","iron_rich","vitamin_c_rich","vegan"], allergens:[], glycemic_index:38,
    description:"Green peas and spinach patties with spices, baked or shallow fried"
  },
  {
    id:137, name:"Cutlet", hindi_name:"कटलेट", category:"snacks", meal_type:["snack","breakfast"],
    diet_type:"vegetarian", region:"All India", serving_size_g:120,
    nutrition_per_serving:{calories:220,protein_g:8,carbohydrates_g:30,fat_g:8,fiber_g:3,sugar_g:2,sodium_mg:380,calcium_mg:40,iron_mg:2,vitamin_c_mg:10},
    nutrition_per_100g:{calories:183,protein_g:6.7,carbohydrates_g:25,fat_g:6.7,fiber_g:2.5,sugar_g:1.7,sodium_mg:317,calcium_mg:33.3,iron_mg:1.7,vitamin_c_mg:8.3},
    health_tags:["energy_rich","filling"], allergens:["gluten","egg"], glycemic_index:55,
    description:"Vegetable or chicken patties breaded and pan fried"
  },
  {
    id:138, name:"Spring Roll", hindi_name:"स्प्रिंग रोल", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"All India", serving_size_g:100,
    nutrition_per_serving:{calories:210,protein_g:5,carbohydrates_g:28,fat_g:9,fiber_g:3,sugar_g:3,sodium_mg:400,calcium_mg:25,iron_mg:1.5,vitamin_c_mg:15},
    nutrition_per_100g:{calories:210,protein_g:5,carbohydrates_g:28,fat_g:9,fiber_g:3,sugar_g:3,sodium_mg:400,calcium_mg:25,iron_mg:1.5,vitamin_c_mg:15},
    health_tags:["energy_rich"], allergens:["gluten"], glycemic_index:55,
    description:"Crispy fried rolls filled with spiced vegetables"
  },
  {
    id:139, name:"Dhokla Sandwich", hindi_name:"ढोकला सैंडविच", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"West India", serving_size_g:150,
    nutrition_per_serving:{calories:190,protein_g:9,carbohydrates_g:32,fat_g:4,fiber_g:4,sugar_g:5,sodium_mg:440,calcium_mg:50,iron_mg:2.5,vitamin_c_mg:5},
    nutrition_per_100g:{calories:127,protein_g:6,carbohydrates_g:21.3,fat_g:2.7,fiber_g:2.7,sugar_g:3.3,sodium_mg:293,calcium_mg:33.3,iron_mg:1.7,vitamin_c_mg:3.3},
    health_tags:["high_protein","low_fat","gut_friendly"], allergens:[], glycemic_index:35,
    description:"Steamed chickpea cake sandwiched with green chutney"
  },
  {
    id:140, name:"Chivda", hindi_name:"चिवड़ा", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"West India", serving_size_g:50,
    nutrition_per_serving:{calories:200,protein_g:5,carbohydrates_g:30,fat_g:8,fiber_g:2,sugar_g:3,sodium_mg:350,calcium_mg:20,iron_mg:2,vitamin_c_mg:0},
    nutrition_per_100g:{calories:400,protein_g:10,carbohydrates_g:60,fat_g:16,fiber_g:4,sugar_g:6,sodium_mg:700,calcium_mg:40,iron_mg:4,vitamin_c_mg:0},
    health_tags:["energy_rich","crispy"], allergens:["gluten"], glycemic_index:58,
    description:"Spiced flattened rice mix with peanuts and raisins"
  },
  {
    id:141, name:"Baked Mathri", hindi_name:"बेक्ड मठरी", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"North India", serving_size_g:50,
    nutrition_per_serving:{calories:180,protein_g:5,carbohydrates_g:28,fat_g:6,fiber_g:2,sugar_g:1,sodium_mg:280,calcium_mg:15,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:360,protein_g:10,carbohydrates_g:56,fat_g:12,fiber_g:4,sugar_g:2,sodium_mg:560,calcium_mg:30,iron_mg:3,vitamin_c_mg:0},
    health_tags:["lower_fat","energy_rich"], allergens:["gluten"], glycemic_index:55,
    description:"Baked version of the traditional flaky savory cracker"
  },
  {
    id:142, name:"Roasted Chana", hindi_name:"भुना चना", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"All India", serving_size_g:50,
    nutrition_per_serving:{calories:180,protein_g:10,carbohydrates_g:28,fat_g:4,fiber_g:7,sugar_g:2,sodium_mg:180,calcium_mg:40,iron_mg:3,vitamin_c_mg:0},
    nutrition_per_100g:{calories:360,protein_g:20,carbohydrates_g:56,fat_g:8,fiber_g:14,sugar_g:4,sodium_mg:360,calcium_mg:80,iron_mg:6,vitamin_c_mg:0},
    health_tags:["high_protein","high_fiber","diabetic_friendly","heart_healthy"], allergens:[], glycemic_index:28,
    description:"Dry roasted whole chickpeas, protein-packed crunchy snack"
  },
  {
    id:143, name:"Badam Barfi", hindi_name:"बादाम बर्फी", category:"snacks", meal_type:["snack","dessert"],
    diet_type:"vegetarian", region:"All India", serving_size_g:50,
    nutrition_per_serving:{calories:220,protein_g:6,carbohydrates_g:22,fat_g:14,fiber_g:2,sugar_g:18,sodium_mg:20,calcium_mg:50,iron_mg:1,vitamin_c_mg:0},
    nutrition_per_100g:{calories:440,protein_g:12,carbohydrates_g:44,fat_g:28,fiber_g:4,sugar_g:36,sodium_mg:40,calcium_mg:100,iron_mg:2,vitamin_c_mg:0},
    health_tags:["energy_rich","high_protein","heart_healthy"], allergens:["dairy","nuts"], glycemic_index:60,
    description:"Dense almond fudge made with almond paste and sugar"
  },
  {
    id:144, name:"Kanda Poha", hindi_name:"कांदा पोहा", category:"snacks", meal_type:["breakfast","snack"],
    diet_type:"vegan", region:"West India", serving_size_g:150,
    nutrition_per_serving:{calories:240,protein_g:5,carbohydrates_g:44,fat_g:6,fiber_g:3,sugar_g:4,sodium_mg:340,calcium_mg:20,iron_mg:4,vitamin_c_mg:18},
    nutrition_per_100g:{calories:160,protein_g:3.3,carbohydrates_g:29.3,fat_g:4,fiber_g:2,sugar_g:2.7,sodium_mg:227,calcium_mg:13.3,iron_mg:2.7,vitamin_c_mg:12},
    health_tags:["iron_rich","low_fat","energy_rich"], allergens:[], glycemic_index:42,
    description:"Flattened rice with onions and fresh coconut, Maharashtrian style"
  },
  {
    id:145, name:"Sev Tamatar", hindi_name:"सेव टमाटर", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"West India", serving_size_g:150,
    nutrition_per_serving:{calories:190,protein_g:5,carbohydrates_g:26,fat_g:8,fiber_g:3,sugar_g:5,sodium_mg:400,calcium_mg:25,iron_mg:1.5,vitamin_c_mg:18},
    nutrition_per_100g:{calories:127,protein_g:3.3,carbohydrates_g:17.3,fat_g:5.3,fiber_g:2,sugar_g:3.3,sodium_mg:267,calcium_mg:16.7,iron_mg:1,vitamin_c_mg:12},
    health_tags:["light","vitamin_c_rich"], allergens:["gluten"], glycemic_index:50,
    description:"Thin crispy noodles in a spiced tomato gravy"
  },
  {
    id:146, name:"Tandoori Paneer", hindi_name:"तंदूरी पनीर", category:"snacks", meal_type:["snack","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:150,
    nutrition_per_serving:{calories:260,protein_g:18,carbohydrates_g:6,fat_g:18,fiber_g:1,sugar_g:3,sodium_mg:440,calcium_mg:300,iron_mg:1.5,vitamin_c_mg:8},
    nutrition_per_100g:{calories:173,protein_g:12,carbohydrates_g:4,fat_g:12,fiber_g:0.7,sugar_g:2,sodium_mg:293,calcium_mg:200,iron_mg:1,vitamin_c_mg:5.3},
    health_tags:["high_protein","high_calcium","keto_friendly","grilled"], allergens:["dairy"], glycemic_index:22,
    description:"Cottage cheese marinated in spiced yogurt and grilled"
  },
  {
    id:147, name:"Cheese Pakora", hindi_name:"चीज पकोड़ा", category:"snacks", meal_type:["snack"],
    diet_type:"vegetarian", region:"All India", serving_size_g:100,
    nutrition_per_serving:{calories:280,protein_g:12,carbohydrates_g:22,fat_g:16,fiber_g:2,sugar_g:2,sodium_mg:480,calcium_mg:280,iron_mg:1.5,vitamin_c_mg:3},
    nutrition_per_100g:{calories:280,protein_g:12,carbohydrates_g:22,fat_g:16,fiber_g:2,sugar_g:2,sodium_mg:480,calcium_mg:280,iron_mg:1.5,vitamin_c_mg:3},
    health_tags:["high_protein","high_calcium","energy_rich"], allergens:["dairy","gluten"], glycemic_index:52,
    description:"Cheese cubes dipped in spiced chickpea batter and deep fried"
  },
  {
    id:148, name:"Masala Papad", hindi_name:"मसाला पापड़", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"All India", serving_size_g:30,
    nutrition_per_serving:{calories:110,protein_g:5,carbohydrates_g:16,fat_g:4,fiber_g:3,sugar_g:2,sodium_mg:360,calcium_mg:20,iron_mg:1.5,vitamin_c_mg:8},
    nutrition_per_100g:{calories:367,protein_g:16.7,carbohydrates_g:53.3,fat_g:13.3,fiber_g:10,sugar_g:6.7,sodium_mg:1200,calcium_mg:66.7,iron_mg:5,vitamin_c_mg:26.7},
    health_tags:["high_protein","high_fiber","low_calorie"], allergens:[], glycemic_index:48,
    description:"Roasted lentil wafer topped with onions, tomatoes, and spices"
  },
  {
    id:149, name:"Bread Pakora", hindi_name:"ब्रेड पकोड़ा", category:"snacks", meal_type:["snack","breakfast"],
    diet_type:"vegetarian", region:"North India", serving_size_g:100,
    nutrition_per_serving:{calories:260,protein_g:7,carbohydrates_g:34,fat_g:11,fiber_g:2,sugar_g:2,sodium_mg:420,calcium_mg:50,iron_mg:1.5,vitamin_c_mg:5},
    nutrition_per_100g:{calories:260,protein_g:7,carbohydrates_g:34,fat_g:11,fiber_g:2,sugar_g:2,sodium_mg:420,calcium_mg:50,iron_mg:1.5,vitamin_c_mg:5},
    health_tags:["energy_rich","filling"], allergens:["gluten","dairy"], glycemic_index:60,
    description:"Bread slices dipped in spiced chickpea batter and deep fried"
  },
  {
    id:150, name:"Gur Chana", hindi_name:"गुड़ चना", category:"snacks", meal_type:["snack"],
    diet_type:"vegan", region:"All India", serving_size_g:50,
    nutrition_per_serving:{calories:190,protein_g:9,carbohydrates_g:32,fat_g:3,fiber_g:7,sugar_g:16,sodium_mg:50,calcium_mg:45,iron_mg:3.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:380,protein_g:18,carbohydrates_g:64,fat_g:6,fiber_g:14,sugar_g:32,sodium_mg:100,calcium_mg:90,iron_mg:7,vitamin_c_mg:0},
    health_tags:["high_protein","high_fiber","iron_rich","energy_rich"], allergens:[], glycemic_index:40,
    description:"Roasted chickpeas coated with jaggery, traditional energy snack"
  },

  // ═══════════════════════════════════════════
  // DESSERTS (151-175)
  // ═══════════════════════════════════════════
  {
    id:151, name:"Gulab Jamun", hindi_name:"गुलाब जामुन", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"All India", serving_size_g:100,
    nutrition_per_serving:{calories:310,protein_g:5,carbohydrates_g:52,fat_g:10,fiber_g:0.5,sugar_g:45,sodium_mg:110,calcium_mg:120,iron_mg:1,vitamin_c_mg:0},
    nutrition_per_100g:{calories:310,protein_g:5,carbohydrates_g:52,fat_g:10,fiber_g:0.5,sugar_g:45,sodium_mg:110,calcium_mg:120,iron_mg:1,vitamin_c_mg:0},
    health_tags:["high_sugar","indulgent"], allergens:["dairy","gluten"], glycemic_index:80,
    description:"Soft milk-solid dumplings soaked in rose-flavored sugar syrup"
  },
  {
    id:152, name:"Rasgulla", hindi_name:"रसगुल्ला", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"East India", serving_size_g:100,
    nutrition_per_serving:{calories:186,protein_g:6,carbohydrates_g:36,fat_g:2,fiber_g:0,sugar_g:32,sodium_mg:80,calcium_mg:180,iron_mg:0.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:186,protein_g:6,carbohydrates_g:36,fat_g:2,fiber_g:0,sugar_g:32,sodium_mg:80,calcium_mg:180,iron_mg:0.5,vitamin_c_mg:0},
    health_tags:["high_calcium","low_fat","light_dessert"], allergens:["dairy"], glycemic_index:70,
    description:"Soft spongy cottage cheese balls soaked in light sugar syrup"
  },
  {
    id:153, name:"Kheer / Rice Pudding", hindi_name:"खीर", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"All India", serving_size_g:200,
    nutrition_per_serving:{calories:280,protein_g:7,carbohydrates_g:44,fat_g:8,fiber_g:1,sugar_g:32,sodium_mg:85,calcium_mg:220,iron_mg:0.8,vitamin_c_mg:2},
    nutrition_per_100g:{calories:140,protein_g:3.5,carbohydrates_g:22,fat_g:4,fiber_g:0.5,sugar_g:16,sodium_mg:42.5,calcium_mg:110,iron_mg:0.4,vitamin_c_mg:1},
    health_tags:["high_calcium","probiotic","energy_rich"], allergens:["dairy"], glycemic_index:60,
    description:"Creamy rice pudding cooked in sweetened milk with cardamom and nuts"
  },
  {
    id:154, name:"Halwa", hindi_name:"हलवा", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"All India", serving_size_g:150,
    nutrition_per_serving:{calories:380,protein_g:5,carbohydrates_g:54,fat_g:17,fiber_g:2,sugar_g:38,sodium_mg:85,calcium_mg:50,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:253,protein_g:3.3,carbohydrates_g:36,fat_g:11.3,fiber_g:1.3,sugar_g:25.3,sodium_mg:56.7,calcium_mg:33.3,iron_mg:1,vitamin_c_mg:0},
    health_tags:["energy_rich","indulgent"], allergens:["dairy","gluten"], glycemic_index:65,
    description:"Rich semolina or wheat pudding cooked with ghee and dry fruits"
  },
  {
    id:155, name:"Jalebi", hindi_name:"जलेबी", category:"desserts", meal_type:["dessert","breakfast"],
    diet_type:"vegetarian", region:"All India", serving_size_g:100,
    nutrition_per_serving:{calories:360,protein_g:4,carbohydrates_g:60,fat_g:12,fiber_g:1,sugar_g:50,sodium_mg:90,calcium_mg:35,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:360,protein_g:4,carbohydrates_g:60,fat_g:12,fiber_g:1,sugar_g:50,sodium_mg:90,calcium_mg:35,iron_mg:1.5,vitamin_c_mg:0},
    health_tags:["high_sugar","indulgent","energy_rich"], allergens:["dairy","gluten"], glycemic_index:82,
    description:"Crispy fried spiral-shaped sweet soaked in saffron sugar syrup"
  },
  {
    id:156, name:"Barfi / Burfi", hindi_name:"बर्फी", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"All India", serving_size_g:50,
    nutrition_per_serving:{calories:220,protein_g:5,carbohydrates_g:30,fat_g:10,fiber_g:0.5,sugar_g:25,sodium_mg:35,calcium_mg:120,iron_mg:0.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:440,protein_g:10,carbohydrates_g:60,fat_g:20,fiber_g:1,sugar_g:50,sodium_mg:70,calcium_mg:240,iron_mg:1,vitamin_c_mg:0},
    health_tags:["high_calcium","indulgent","energy_rich"], allergens:["dairy"], glycemic_index:70,
    description:"Dense milk-based fudge in various flavors like chocolate or pistachio"
  },
  {
    id:157, name:"Ladoo", hindi_name:"लड्डू", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"All India", serving_size_g:50,
    nutrition_per_serving:{calories:200,protein_g:5,carbohydrates_g:26,fat_g:9,fiber_g:2,sugar_g:18,sodium_mg:30,calcium_mg:40,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:400,protein_g:10,carbohydrates_g:52,fat_g:18,fiber_g:4,sugar_g:36,sodium_mg:60,calcium_mg:80,iron_mg:3,vitamin_c_mg:0},
    health_tags:["energy_rich","high_protein"], allergens:["dairy","gluten"], glycemic_index:65,
    description:"Round sweet balls made from chickpea flour, ghee, and sugar"
  },
  {
    id:158, name:"Rasmalai", hindi_name:"रसमलाई", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"All India", serving_size_g:150,
    nutrition_per_serving:{calories:240,protein_g:8,carbohydrates_g:34,fat_g:8,fiber_g:0,sugar_g:30,sodium_mg:90,calcium_mg:260,iron_mg:0.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:160,protein_g:5.3,carbohydrates_g:22.7,fat_g:5.3,fiber_g:0,sugar_g:20,sodium_mg:60,calcium_mg:173.3,iron_mg:0.3,vitamin_c_mg:0},
    health_tags:["high_calcium","indulgent","light_dessert"], allergens:["dairy"], glycemic_index:65,
    description:"Cottage cheese patties soaked in saffron-flavored thickened milk"
  },
  {
    id:159, name:"Gajar Ka Halwa", hindi_name:"गाजर का हलवा", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"North India", serving_size_g:150,
    nutrition_per_serving:{calories:320,protein_g:7,carbohydrates_g:44,fat_g:14,fiber_g:3,sugar_g:34,sodium_mg:95,calcium_mg:200,iron_mg:1.2,vitamin_c_mg:8},
    nutrition_per_100g:{calories:213,protein_g:4.7,carbohydrates_g:29.3,fat_g:9.3,fiber_g:2,sugar_g:22.7,sodium_mg:63.3,calcium_mg:133.3,iron_mg:0.8,vitamin_c_mg:5.3},
    health_tags:["high_calcium","vitamin_a_rich","energy_rich"], allergens:["dairy"], glycemic_index:62,
    description:"Slow-cooked carrot pudding with milk, ghee, and dry fruits"
  },
  {
    id:160, name:"Kulfi", hindi_name:"कुल्फी", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"All India", serving_size_g:100,
    nutrition_per_serving:{calories:180,protein_g:5,carbohydrates_g:26,fat_g:7,fiber_g:0,sugar_g:22,sodium_mg:60,calcium_mg:160,iron_mg:0.3,vitamin_c_mg:0},
    nutrition_per_100g:{calories:180,protein_g:5,carbohydrates_g:26,fat_g:7,fiber_g:0,sugar_g:22,sodium_mg:60,calcium_mg:160,iron_mg:0.3,vitamin_c_mg:0},
    health_tags:["high_calcium","indulgent","light_dessert"], allergens:["dairy"], glycemic_index:60,
    description:"Traditional Indian frozen dessert made from reduced milk and spices"
  },
  {
    id:161, name:"Shrikhand", hindi_name:"श्रीखंड", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"West India", serving_size_g:150,
    nutrition_per_serving:{calories:260,protein_g:9,carbohydrates_g:38,fat_g:8,fiber_g:0,sugar_g:35,sodium_mg:80,calcium_mg:270,iron_mg:0.3,vitamin_c_mg:2},
    nutrition_per_100g:{calories:173,protein_g:6,carbohydrates_g:25.3,fat_g:5.3,fiber_g:0,sugar_g:23.3,sodium_mg:53.3,calcium_mg:180,iron_mg:0.2,vitamin_c_mg:1.3},
    health_tags:["high_calcium","probiotic","gut_friendly"], allergens:["dairy"], glycemic_index:55,
    description:"Strained yogurt sweetened with sugar and flavored with saffron"
  },
  {
    id:162, name:"Basundi", hindi_name:"बासुंदी", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"West India", serving_size_g:200,
    nutrition_per_serving:{calories:280,protein_g:8,carbohydrates_g:38,fat_g:10,fiber_g:0,sugar_g:34,sodium_mg:90,calcium_mg:280,iron_mg:0.4,vitamin_c_mg:0},
    nutrition_per_100g:{calories:140,protein_g:4,carbohydrates_g:19,fat_g:5,fiber_g:0,sugar_g:17,sodium_mg:45,calcium_mg:140,iron_mg:0.2,vitamin_c_mg:0},
    health_tags:["high_calcium","indulgent"], allergens:["dairy"], glycemic_index:60,
    description:"Thickened sweetened milk with saffron and cardamom"
  },
  {
    id:163, name:"Modak", hindi_name:"मोदक", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"West India", serving_size_g:80,
    nutrition_per_serving:{calories:200,protein_g:4,carbohydrates_g:34,fat_g:7,fiber_g:3,sugar_g:20,sodium_mg:60,calcium_mg:35,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:250,protein_g:5,carbohydrates_g:42.5,fat_g:8.75,fiber_g:3.75,sugar_g:25,sodium_mg:75,calcium_mg:43.75,iron_mg:1.875,vitamin_c_mg:0},
    health_tags:["energy_rich","indulgent"], allergens:["dairy","gluten"], glycemic_index:62,
    description:"Steamed rice flour dumplings filled with coconut and jaggery"
  },
  {
    id:164, name:"Malpua", hindi_name:"मालपुआ", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"All India", serving_size_g:100,
    nutrition_per_serving:{calories:320,protein_g:6,carbohydrates_g:50,fat_g:12,fiber_g:1,sugar_g:40,sodium_mg:80,calcium_mg:95,iron_mg:1,vitamin_c_mg:0},
    nutrition_per_100g:{calories:320,protein_g:6,carbohydrates_g:50,fat_g:12,fiber_g:1,sugar_g:40,sodium_mg:80,calcium_mg:95,iron_mg:1,vitamin_c_mg:0},
    health_tags:["energy_rich","indulgent","high_sugar"], allergens:["dairy","gluten"], glycemic_index:78,
    description:"Fried pancakes soaked in saffron sugar syrup"
  },
  {
    id:165, name:"Phirni", hindi_name:"फिरनी", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"North India", serving_size_g:200,
    nutrition_per_serving:{calories:240,protein_g:6,carbohydrates_g:38,fat_g:7,fiber_g:0.5,sugar_g:28,sodium_mg:80,calcium_mg:200,iron_mg:0.4,vitamin_c_mg:0},
    nutrition_per_100g:{calories:120,protein_g:3,carbohydrates_g:19,fat_g:3.5,fiber_g:0.25,sugar_g:14,sodium_mg:40,calcium_mg:100,iron_mg:0.2,vitamin_c_mg:0},
    health_tags:["high_calcium","light_dessert","indulgent"], allergens:["dairy"], glycemic_index:62,
    description:"Creamy ground rice pudding flavored with cardamom and rose water"
  },
  {
    id:166, name:"Kalakand", hindi_name:"कलाकंद", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"North India", serving_size_g:80,
    nutrition_per_serving:{calories:260,protein_g:8,carbohydrates_g:34,fat_g:11,fiber_g:0,sugar_g:30,sodium_mg:55,calcium_mg:240,iron_mg:0.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:325,protein_g:10,carbohydrates_g:42.5,fat_g:13.75,fiber_g:0,sugar_g:37.5,sodium_mg:68.75,calcium_mg:300,iron_mg:0.625,vitamin_c_mg:0},
    health_tags:["high_calcium","high_protein","indulgent"], allergens:["dairy"], glycemic_index:68,
    description:"Soft moist cottage cheese fudge with cardamom and pistachio"
  },
  {
    id:167, name:"Moong Dal Halwa", hindi_name:"मूंग दाल हलवा", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"North India", serving_size_g:100,
    nutrition_per_serving:{calories:350,protein_g:8,carbohydrates_g:42,fat_g:18,fiber_g:3,sugar_g:28,sodium_mg:80,calcium_mg:55,iron_mg:2.2,vitamin_c_mg:0},
    nutrition_per_100g:{calories:350,protein_g:8,carbohydrates_g:42,fat_g:18,fiber_g:3,sugar_g:28,sodium_mg:80,calcium_mg:55,iron_mg:2.2,vitamin_c_mg:0},
    health_tags:["high_protein","energy_rich"], allergens:["dairy"], glycemic_index:68,
    description:"Rich dessert made from ground moong lentils slow-cooked in ghee and sugar"
  },
  {
    id:168, name:"Imarti", hindi_name:"इमरती", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"North India", serving_size_g:80,
    nutrition_per_serving:{calories:280,protein_g:5,carbohydrates_g:48,fat_g:9,fiber_g:1,sugar_g:42,sodium_mg:70,calcium_mg:30,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:350,protein_g:6.25,carbohydrates_g:60,fat_g:11.25,fiber_g:1.25,sugar_g:52.5,sodium_mg:87.5,calcium_mg:37.5,iron_mg:1.875,vitamin_c_mg:0},
    health_tags:["energy_rich","indulgent"], allergens:["dairy"], glycemic_index:80,
    description:"Flower-shaped fried urad dal sweet soaked in saffron syrup"
  },
  {
    id:169, name:"Chenna Murki", hindi_name:"छेना मुर्की", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"East India", serving_size_g:80,
    nutrition_per_serving:{calories:220,protein_g:7,carbohydrates_g:32,fat_g:8,fiber_g:0,sugar_g:28,sodium_mg:60,calcium_mg:200,iron_mg:0.3,vitamin_c_mg:0},
    nutrition_per_100g:{calories:275,protein_g:8.75,carbohydrates_g:40,fat_g:10,fiber_g:0,sugar_g:35,sodium_mg:75,calcium_mg:250,iron_mg:0.375,vitamin_c_mg:0},
    health_tags:["high_calcium","light_dessert"], allergens:["dairy"], glycemic_index:65,
    description:"Small cottage cheese pieces cooked in sugar syrup, Odisha specialty"
  },
  {
    id:170, name:"Coconut Ladoo", hindi_name:"नारियल लड्डू", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"All India", serving_size_g:40,
    nutrition_per_serving:{calories:160,protein_g:2,carbohydrates_g:18,fat_g:9,fiber_g:2,sugar_g:15,sodium_mg:20,calcium_mg:15,iron_mg:0.8,vitamin_c_mg:0},
    nutrition_per_100g:{calories:400,protein_g:5,carbohydrates_g:45,fat_g:22.5,fiber_g:5,sugar_g:37.5,sodium_mg:50,calcium_mg:37.5,iron_mg:2,vitamin_c_mg:0},
    health_tags:["energy_rich","gluten_free","indulgent"], allergens:["dairy"], glycemic_index:60,
    description:"Sweet balls made from desiccated coconut and condensed milk"
  },
  {
    id:171, name:"Peda", hindi_name:"पेड़ा", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"All India", serving_size_g:40,
    nutrition_per_serving:{calories:160,protein_g:4,carbohydrates_g:22,fat_g:7,fiber_g:0,sugar_g:20,sodium_mg:30,calcium_mg:110,iron_mg:0.2,vitamin_c_mg:0},
    nutrition_per_100g:{calories:400,protein_g:10,carbohydrates_g:55,fat_g:17.5,fiber_g:0,sugar_g:50,sodium_mg:75,calcium_mg:275,iron_mg:0.5,vitamin_c_mg:0},
    health_tags:["high_calcium","indulgent"], allergens:["dairy"], glycemic_index:70,
    description:"Soft milk-based sweet flavored with cardamom and saffron"
  },
  {
    id:172, name:"Sandesh", hindi_name:"संदेश", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"East India", serving_size_g:60,
    nutrition_per_serving:{calories:160,protein_g:6,carbohydrates_g:22,fat_g:6,fiber_g:0,sugar_g:18,sodium_mg:40,calcium_mg:180,iron_mg:0.3,vitamin_c_mg:0},
    nutrition_per_100g:{calories:267,protein_g:10,carbohydrates_g:36.7,fat_g:10,fiber_g:0,sugar_g:30,sodium_mg:66.7,calcium_mg:300,iron_mg:0.5,vitamin_c_mg:0},
    health_tags:["high_calcium","high_protein","light_dessert"], allergens:["dairy"], glycemic_index:60,
    description:"Bengali cottage cheese sweet with various flavors and toppings"
  },
  {
    id:173, name:"Payasam", hindi_name:"पायसम", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"South India", serving_size_g:200,
    nutrition_per_serving:{calories:290,protein_g:7,carbohydrates_g:44,fat_g:9,fiber_g:1,sugar_g:36,sodium_mg:80,calcium_mg:220,iron_mg:0.8,vitamin_c_mg:0},
    nutrition_per_100g:{calories:145,protein_g:3.5,carbohydrates_g:22,fat_g:4.5,fiber_g:0.5,sugar_g:18,sodium_mg:40,calcium_mg:110,iron_mg:0.4,vitamin_c_mg:0},
    health_tags:["high_calcium","indulgent","energy_rich"], allergens:["dairy"], glycemic_index:62,
    description:"South Indian milk and vermicelli pudding with cardamom and cashews"
  },
  {
    id:174, name:"Mysore Pak", hindi_name:"मैसूर पाक", category:"desserts", meal_type:["dessert"],
    diet_type:"vegetarian", region:"South India", serving_size_g:50,
    nutrition_per_serving:{calories:240,protein_g:5,carbohydrates_g:24,fat_g:15,fiber_g:2,sugar_g:18,sodium_mg:30,calcium_mg:25,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:480,protein_g:10,carbohydrates_g:48,fat_g:30,fiber_g:4,sugar_g:36,sodium_mg:60,calcium_mg:50,iron_mg:3,vitamin_c_mg:0},
    health_tags:["energy_rich","high_protein","indulgent"], allergens:["dairy"], glycemic_index:65,
    description:"Rich Karnataka sweet made from chickpea flour and generous ghee"
  },
  {
    id:175, name:"Kesari Bath", hindi_name:"केसरी बाथ", category:"desserts", meal_type:["dessert","breakfast"],
    diet_type:"vegetarian", region:"South India", serving_size_g:150,
    nutrition_per_serving:{calories:300,protein_g:4,carbohydrates_g:46,fat_g:12,fiber_g:2,sugar_g:28,sodium_mg:70,calcium_mg:30,iron_mg:1.2,vitamin_c_mg:0},
    nutrition_per_100g:{calories:200,protein_g:2.7,carbohydrates_g:30.7,fat_g:8,fiber_g:1.3,sugar_g:18.7,sodium_mg:46.7,calcium_mg:20,iron_mg:0.8,vitamin_c_mg:0},
    health_tags:["energy_rich","indulgent"], allergens:["dairy","gluten"], glycemic_index:65,
    description:"Saffron semolina pudding with ghee and cashews, Karnataka specialty"
  },

  // ═══════════════════════════════════════════
  // BEVERAGES (176-190)
  // ═══════════════════════════════════════════
  {
    id:176, name:"Lassi", hindi_name:"लस्सी", category:"beverages", meal_type:["breakfast","lunch","snack"],
    diet_type:"vegetarian", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:180,protein_g:8,carbohydrates_g:28,fat_g:5,fiber_g:0,sugar_g:22,sodium_mg:120,calcium_mg:280,iron_mg:0.2,vitamin_c_mg:2},
    nutrition_per_100g:{calories:72,protein_g:3.2,carbohydrates_g:11.2,fat_g:2,fiber_g:0,sugar_g:8.8,sodium_mg:48,calcium_mg:112,iron_mg:0.1,vitamin_c_mg:0.8},
    health_tags:["probiotic","gut_friendly","high_calcium","bone_health"], allergens:["dairy"], glycemic_index:35,
    description:"Traditional yogurt-based drink, sweet or salted"
  },
  {
    id:177, name:"Chaas / Buttermilk", hindi_name:"छाछ", category:"beverages", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"All India", serving_size_g:250,
    nutrition_per_serving:{calories:65,protein_g:4,carbohydrates_g:8,fat_g:2,fiber_g:0,sugar_g:5,sodium_mg:140,calcium_mg:145,iron_mg:0.1,vitamin_c_mg:0},
    nutrition_per_100g:{calories:26,protein_g:1.6,carbohydrates_g:3.2,fat_g:0.8,fiber_g:0,sugar_g:2,sodium_mg:56,calcium_mg:58,iron_mg:0.04,vitamin_c_mg:0},
    health_tags:["low_calorie","probiotic","gut_friendly","high_calcium"], allergens:["dairy"], glycemic_index:25,
    description:"Spiced diluted yogurt drink with cumin and coriander"
  },
  {
    id:178, name:"Masala Chai", hindi_name:"मसाला चाय", category:"beverages", meal_type:["breakfast","snack"],
    diet_type:"vegetarian", region:"All India", serving_size_g:200,
    nutrition_per_serving:{calories:80,protein_g:2,carbohydrates_g:12,fat_g:2,fiber_g:0,sugar_g:8,sodium_mg:50,calcium_mg:80,iron_mg:0.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:40,protein_g:1,carbohydrates_g:6,fat_g:1,fiber_g:0,sugar_g:4,sodium_mg:25,calcium_mg:40,iron_mg:0.25,vitamin_c_mg:0},
    health_tags:["immunity_booster","anti_inflammatory","digestive"], allergens:["dairy"], glycemic_index:30,
    description:"Spiced milk tea with ginger, cardamom, and cinnamon"
  },
  {
    id:179, name:"Filter Coffee", hindi_name:"फ़िल्टर कॉफ़ी", category:"beverages", meal_type:["breakfast","snack"],
    diet_type:"vegetarian", region:"South India", serving_size_g:150,
    nutrition_per_serving:{calories:60,protein_g:2,carbohydrates_g:8,fat_g:2,fiber_g:0,sugar_g:6,sodium_mg:40,calcium_mg:70,iron_mg:0.2,vitamin_c_mg:0},
    nutrition_per_100g:{calories:40,protein_g:1.3,carbohydrates_g:5.3,fat_g:1.3,fiber_g:0,sugar_g:4,sodium_mg:26.7,calcium_mg:46.7,iron_mg:0.1,vitamin_c_mg:0},
    health_tags:["low_calorie","antioxidant_rich","energy_booster"], allergens:["dairy"], glycemic_index:25,
    description:"South Indian slow-drip coffee with frothy hot milk"
  },
  {
    id:180, name:"Aam Panna", hindi_name:"आम पन्ना", category:"beverages", meal_type:["snack"],
    diet_type:"vegan", region:"North India", serving_size_g:200,
    nutrition_per_serving:{calories:80,protein_g:0.5,carbohydrates_g:20,fat_g:0,fiber_g:1,sugar_g:16,sodium_mg:200,calcium_mg:10,iron_mg:0.5,vitamin_c_mg:25},
    nutrition_per_100g:{calories:40,protein_g:0.25,carbohydrates_g:10,fat_g:0,fiber_g:0.5,sugar_g:8,sodium_mg:100,calcium_mg:5,iron_mg:0.25,vitamin_c_mg:12.5},
    health_tags:["low_calorie","immunity_booster","cooling","vitamin_c_rich"], allergens:[], glycemic_index:45,
    description:"Raw mango drink with spices, a natural coolant for summer"
  },
  {
    id:181, name:"Rose Sharbat", hindi_name:"गुलाब शरबत", category:"beverages", meal_type:["snack"],
    diet_type:"vegan", region:"All India", serving_size_g:200,
    nutrition_per_serving:{calories:90,protein_g:0,carbohydrates_g:22,fat_g:0,fiber_g:0,sugar_g:20,sodium_mg:10,calcium_mg:5,iron_mg:0,vitamin_c_mg:0},
    nutrition_per_100g:{calories:45,protein_g:0,carbohydrates_g:11,fat_g:0,fiber_g:0,sugar_g:10,sodium_mg:5,calcium_mg:2.5,iron_mg:0,vitamin_c_mg:0},
    health_tags:["cooling","low_fat","refreshing"], allergens:[], glycemic_index:60,
    description:"Refreshing rose-flavored sweet syrup drink"
  },
  {
    id:182, name:"Jal Jeera", hindi_name:"जल जीरा", category:"beverages", meal_type:["snack"],
    diet_type:"vegan", region:"North India", serving_size_g:200,
    nutrition_per_serving:{calories:30,protein_g:1,carbohydrates_g:6,fat_g:0,fiber_g:1,sugar_g:4,sodium_mg:180,calcium_mg:15,iron_mg:0.8,vitamin_c_mg:10},
    nutrition_per_100g:{calories:15,protein_g:0.5,carbohydrates_g:3,fat_g:0,fiber_g:0.5,sugar_g:2,sodium_mg:90,calcium_mg:7.5,iron_mg:0.4,vitamin_c_mg:5},
    health_tags:["low_calorie","digestive","cooling","immunity_booster"], allergens:[], glycemic_index:20,
    description:"Tangy cumin-flavored spiced water, a digestive summer drink"
  },
  {
    id:183, name:"Nimbu Pani / Lemonade", hindi_name:"नींबू पानी", category:"beverages", meal_type:["snack"],
    diet_type:"vegan", region:"All India", serving_size_g:250,
    nutrition_per_serving:{calories:50,protein_g:0.5,carbohydrates_g:12,fat_g:0,fiber_g:0,sugar_g:10,sodium_mg:150,calcium_mg:10,iron_mg:0.2,vitamin_c_mg:20},
    nutrition_per_100g:{calories:20,protein_g:0.2,carbohydrates_g:4.8,fat_g:0,fiber_g:0,sugar_g:4,sodium_mg:60,calcium_mg:4,iron_mg:0.08,vitamin_c_mg:8},
    health_tags:["low_calorie","vitamin_c_rich","hydrating","immunity_booster"], allergens:[], glycemic_index:25,
    description:"Fresh lime juice with salt, sugar, and spices"
  },
  {
    id:184, name:"Kokum Sharbat", hindi_name:"कोकम शरबत", category:"beverages", meal_type:["snack"],
    diet_type:"vegan", region:"West India", serving_size_g:200,
    nutrition_per_serving:{calories:60,protein_g:0.5,carbohydrates_g:15,fat_g:0,fiber_g:0.5,sugar_g:12,sodium_mg:100,calcium_mg:15,iron_mg:0.5,vitamin_c_mg:5},
    nutrition_per_100g:{calories:30,protein_g:0.25,carbohydrates_g:7.5,fat_g:0,fiber_g:0.25,sugar_g:6,sodium_mg:50,calcium_mg:7.5,iron_mg:0.25,vitamin_c_mg:2.5},
    health_tags:["low_calorie","digestive","cooling","antioxidant_rich"], allergens:[], glycemic_index:30,
    description:"Tangy Kokum fruit drink with natural cooling properties"
  },
  {
    id:185, name:"Thandai", hindi_name:"ठंडाई", category:"beverages", meal_type:["breakfast","snack"],
    diet_type:"vegetarian", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:200,protein_g:6,carbohydrates_g:24,fat_g:10,fiber_g:1,sugar_g:20,sodium_mg:80,calcium_mg:200,iron_mg:1,vitamin_c_mg:0},
    nutrition_per_100g:{calories:80,protein_g:2.4,carbohydrates_g:9.6,fat_g:4,fiber_g:0.4,sugar_g:8,sodium_mg:32,calcium_mg:80,iron_mg:0.4,vitamin_c_mg:0},
    health_tags:["energy_rich","cooling","high_calcium"], allergens:["dairy","nuts"], glycemic_index:50,
    description:"Chilled spiced milk drink with nuts, seeds, and rose petals for Holi"
  },
  {
    id:186, name:"Badam Milk", hindi_name:"बादाम दूध", category:"beverages", meal_type:["breakfast","snack"],
    diet_type:"vegetarian", region:"All India", serving_size_g:250,
    nutrition_per_serving:{calories:180,protein_g:7,carbohydrates_g:18,fat_g:9,fiber_g:1,sugar_g:14,sodium_mg:90,calcium_mg:250,iron_mg:0.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:72,protein_g:2.8,carbohydrates_g:7.2,fat_g:3.6,fiber_g:0.4,sugar_g:5.6,sodium_mg:36,calcium_mg:100,iron_mg:0.2,vitamin_c_mg:0},
    health_tags:["high_calcium","energy_rich","brain_health","bone_health"], allergens:["dairy","nuts"], glycemic_index:40,
    description:"Warm almond milk with cardamom and saffron, nutritious bedtime drink"
  },
  {
    id:187, name:"Jaljeera Pani", hindi_name:"जल जीरा पानी", category:"beverages", meal_type:["snack"],
    diet_type:"vegan", region:"North India", serving_size_g:250,
    nutrition_per_serving:{calories:25,protein_g:0.5,carbohydrates_g:5,fat_g:0,fiber_g:0.5,sugar_g:3,sodium_mg:220,calcium_mg:12,iron_mg:0.6,vitamin_c_mg:8},
    nutrition_per_100g:{calories:10,protein_g:0.2,carbohydrates_g:2,fat_g:0,fiber_g:0.2,sugar_g:1.2,sodium_mg:88,calcium_mg:4.8,iron_mg:0.24,vitamin_c_mg:3.2},
    health_tags:["very_low_calorie","digestive","cooling","immunity_booster"], allergens:[], glycemic_index:15,
    description:"Tangy spiced water with black salt, tamarind, and fresh herbs"
  },
  {
    id:188, name:"Sugarcane Juice", hindi_name:"गन्ने का रस", category:"beverages", meal_type:["snack"],
    diet_type:"vegan", region:"All India", serving_size_g:250,
    nutrition_per_serving:{calories:120,protein_g:0.5,carbohydrates_g:30,fat_g:0,fiber_g:0,sugar_g:28,sodium_mg:15,calcium_mg:18,iron_mg:0.5,vitamin_c_mg:8},
    nutrition_per_100g:{calories:48,protein_g:0.2,carbohydrates_g:12,fat_g:0,fiber_g:0,sugar_g:11.2,sodium_mg:6,calcium_mg:7.2,iron_mg:0.2,vitamin_c_mg:3.2},
    health_tags:["energy_rich","cooling","natural_electrolytes"], allergens:[], glycemic_index:50,
    description:"Fresh-pressed sugarcane juice with ginger and lime"
  },
  {
    id:189, name:"Coconut Water", hindi_name:"नारियल पानी", category:"beverages", meal_type:["snack"],
    diet_type:"vegan", region:"South India", serving_size_g:250,
    nutrition_per_serving:{calories:45,protein_g:2,carbohydrates_g:9,fat_g:0.5,fiber_g:0,sugar_g:6,sodium_mg:40,calcium_mg:57,iron_mg:0.7,vitamin_c_mg:5},
    nutrition_per_100g:{calories:18,protein_g:0.8,carbohydrates_g:3.6,fat_g:0.2,fiber_g:0,sugar_g:2.4,sodium_mg:16,calcium_mg:22.8,iron_mg:0.28,vitamin_c_mg:2},
    health_tags:["very_low_calorie","natural_electrolytes","hydrating","heart_healthy"], allergens:[], glycemic_index:20,
    description:"Natural coconut water rich in electrolytes and minerals"
  },
  {
    id:190, name:"Ragi Malt", hindi_name:"रागी माल्ट", category:"beverages", meal_type:["breakfast","snack"],
    diet_type:"vegan", region:"South India", serving_size_g:250,
    nutrition_per_serving:{calories:150,protein_g:4,carbohydrates_g:28,fat_g:3,fiber_g:3,sugar_g:10,sodium_mg:80,calcium_mg:160,iron_mg:2.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:60,protein_g:1.6,carbohydrates_g:11.2,fat_g:1.2,fiber_g:1.2,sugar_g:4,sodium_mg:32,calcium_mg:64,iron_mg:1,vitamin_c_mg:0},
    health_tags:["high_calcium","iron_rich","high_fiber","diabetic_friendly"], allergens:[], glycemic_index:38,
    description:"Nutritious finger millet porridge drink, traditional South Indian health drink"
  },

  // ═══════════════════════════════════════════
  // BREADS & RICE (191-200)
  // ═══════════════════════════════════════════
  {
    id:191, name:"Chapati / Roti", hindi_name:"चपाती", category:"breads", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"All India", serving_size_g:40,
    nutrition_per_serving:{calories:100,protein_g:3.5,carbohydrates_g:20,fat_g:1,fiber_g:2.5,sugar_g:0.5,sodium_mg:120,calcium_mg:15,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:250,protein_g:8.8,carbohydrates_g:50,fat_g:2.5,fiber_g:6.3,sugar_g:1.3,sodium_mg:300,calcium_mg:37.5,iron_mg:3.8,vitamin_c_mg:0},
    health_tags:["high_fiber","low_fat","diabetic_friendly"], allergens:["gluten"], glycemic_index:52,
    description:"Whole wheat unleavened flatbread, staple of Indian meals"
  },
  {
    id:192, name:"Naan", hindi_name:"नान", category:"breads", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:90,
    nutrition_per_serving:{calories:260,protein_g:8,carbohydrates_g:45,fat_g:6,fiber_g:2,sugar_g:2,sodium_mg:480,calcium_mg:60,iron_mg:2,vitamin_c_mg:0},
    nutrition_per_100g:{calories:289,protein_g:8.9,carbohydrates_g:50,fat_g:6.7,fiber_g:2.2,sugar_g:2.2,sodium_mg:533,calcium_mg:66.7,iron_mg:2.2,vitamin_c_mg:0},
    health_tags:["energy_rich","filling"], allergens:["gluten","dairy"], glycemic_index:68,
    description:"Leavened tandoor-baked flatbread, fluffy and slightly charred"
  },
  {
    id:193, name:"Puri", hindi_name:"पूरी", category:"breads", meal_type:["breakfast","lunch"],
    diet_type:"vegan", region:"All India", serving_size_g:40,
    nutrition_per_serving:{calories:150,protein_g:3,carbohydrates_g:18,fat_g:7,fiber_g:1.5,sugar_g:0.5,sodium_mg:120,calcium_mg:15,iron_mg:1,vitamin_c_mg:0},
    nutrition_per_100g:{calories:375,protein_g:7.5,carbohydrates_g:45,fat_g:17.5,fiber_g:3.75,sugar_g:1.25,sodium_mg:300,calcium_mg:37.5,iron_mg:2.5,vitamin_c_mg:0},
    health_tags:["energy_rich"], allergens:["gluten"], glycemic_index:60,
    description:"Deep-fried whole wheat puffed bread"
  },
  {
    id:194, name:"Kulcha", hindi_name:"कुलचा", category:"breads", meal_type:["breakfast","lunch"],
    diet_type:"vegetarian", region:"North India", serving_size_g:90,
    nutrition_per_serving:{calories:240,protein_g:7,carbohydrates_g:42,fat_g:5,fiber_g:2,sugar_g:3,sodium_mg:420,calcium_mg:55,iron_mg:1.8,vitamin_c_mg:0},
    nutrition_per_100g:{calories:267,protein_g:7.8,carbohydrates_g:46.7,fat_g:5.6,fiber_g:2.2,sugar_g:3.3,sodium_mg:467,calcium_mg:61.1,iron_mg:2,vitamin_c_mg:0},
    health_tags:["energy_rich","filling"], allergens:["gluten","dairy"], glycemic_index:62,
    description:"Soft leavened flatbread, a Punjab specialty served with chole"
  },
  {
    id:195, name:"Bhatura", hindi_name:"भटूरा", category:"breads", meal_type:["breakfast","lunch"],
    diet_type:"vegetarian", region:"North India", serving_size_g:80,
    nutrition_per_serving:{calories:260,protein_g:6,carbohydrates_g:36,fat_g:11,fiber_g:2,sugar_g:2,sodium_mg:350,calcium_mg:40,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:325,protein_g:7.5,carbohydrates_g:45,fat_g:13.75,fiber_g:2.5,sugar_g:2.5,sodium_mg:437.5,calcium_mg:50,iron_mg:1.875,vitamin_c_mg:0},
    health_tags:["energy_rich","indulgent"], allergens:["gluten","dairy"], glycemic_index:68,
    description:"Deep-fried leavened bread, classic companion for chole"
  },
  {
    id:196, name:"Basmati Rice", hindi_name:"बासमती चावल", category:"breads", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"All India", serving_size_g:180,
    nutrition_per_serving:{calories:240,protein_g:5,carbohydrates_g:52,fat_g:0.5,fiber_g:1,sugar_g:0.5,sodium_mg:0,calcium_mg:15,iron_mg:0.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:133,protein_g:2.8,carbohydrates_g:28.9,fat_g:0.3,fiber_g:0.6,sugar_g:0.3,sodium_mg:0,calcium_mg:8.3,iron_mg:0.3,vitamin_c_mg:0},
    health_tags:["gluten_free","energy_rich","low_fat"], allergens:[], glycemic_index:50,
    description:"Long-grain aromatic rice, the foundation of Indian meals"
  },
  {
    id:197, name:"Brown Rice", hindi_name:"ब्राउन राइस", category:"breads", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"All India", serving_size_g:180,
    nutrition_per_serving:{calories:220,protein_g:5,carbohydrates_g:46,fat_g:2,fiber_g:3.5,sugar_g:0.5,sodium_mg:0,calcium_mg:20,iron_mg:1,vitamin_c_mg:0},
    nutrition_per_100g:{calories:122,protein_g:2.8,carbohydrates_g:25.6,fat_g:1.1,fiber_g:1.9,sugar_g:0.3,sodium_mg:0,calcium_mg:11.1,iron_mg:0.6,vitamin_c_mg:0},
    health_tags:["gluten_free","high_fiber","diabetic_friendly","heart_healthy"], allergens:[], glycemic_index:50,
    description:"Whole grain rice with bran intact, higher fiber than white rice"
  },
  {
    id:198, name:"Missi Roti", hindi_name:"मिस्सी रोटी", category:"breads", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:60,
    nutrition_per_serving:{calories:155,protein_g:7,carbohydrates_g:26,fat_g:3,fiber_g:4,sugar_g:1,sodium_mg:180,calcium_mg:30,iron_mg:2,vitamin_c_mg:2},
    nutrition_per_100g:{calories:258,protein_g:11.7,carbohydrates_g:43.3,fat_g:5,fiber_g:6.7,sugar_g:1.7,sodium_mg:300,calcium_mg:50,iron_mg:3.3,vitamin_c_mg:3.3},
    health_tags:["high_protein","high_fiber","diabetic_friendly"], allergens:["gluten"], glycemic_index:48,
    description:"Spiced chickpea and wheat flour flatbread, Rajasthani specialty"
  },
  {
    id:199, name:"Makki Ki Roti", hindi_name:"मक्की की रोटी", category:"breads", meal_type:["lunch","dinner"],
    diet_type:"vegan", region:"North India", serving_size_g:60,
    nutrition_per_serving:{calories:140,protein_g:3,carbohydrates_g:28,fat_g:2,fiber_g:3,sugar_g:1,sodium_mg:100,calcium_mg:10,iron_mg:1,vitamin_c_mg:0},
    nutrition_per_100g:{calories:233,protein_g:5,carbohydrates_g:46.7,fat_g:3.3,fiber_g:5,sugar_g:1.7,sodium_mg:167,calcium_mg:16.7,iron_mg:1.7,vitamin_c_mg:0},
    health_tags:["gluten_free","high_fiber","energy_rich"], allergens:[], glycemic_index:55,
    description:"Cornmeal flatbread, the classic companion to Sarson ka Saag"
  },
  {
    id:200, name:"Laccha Paratha", hindi_name:"लच्छा पराठा", category:"breads", meal_type:["lunch","dinner"],
    diet_type:"vegetarian", region:"North India", serving_size_g:80,
    nutrition_per_serving:{calories:240,protein_g:5,carbohydrates_g:32,fat_g:11,fiber_g:2,sugar_g:1,sodium_mg:240,calcium_mg:25,iron_mg:1.5,vitamin_c_mg:0},
    nutrition_per_100g:{calories:300,protein_g:6.25,carbohydrates_g:40,fat_g:13.75,fiber_g:2.5,sugar_g:1.25,sodium_mg:300,calcium_mg:31.25,iron_mg:1.875,vitamin_c_mg:0},
    health_tags:["energy_rich","filling","flaky"], allergens:["gluten","dairy"], glycemic_index:58,
    description:"Multi-layered flaky whole wheat flatbread cooked with butter"
  }
];

module.exports = foods;
