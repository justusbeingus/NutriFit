// Curated Food Dataset inspired by Indian Food Composition Tables (IFCT) and USDA FoodData Central.
// All values represent nutrients per 100g of the edible portion.
// Approximations are based on standard cooking preparations.

export const foodDatabase = [
  {
    id: "roti",
    name: "Roti (Whole Wheat Chapati)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 260,
      protein: 9.0,
      carbs: 52.0,
      fats: 1.5,
      iron: 3.0,
      calcium: 35.0,
      fiber: 11.0,
      vitamin_b12: 0.0,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Medium (6\" dia)", grams: 30 },
      { name: "1 Large (8\" dia)", grams: 45 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "rice",
    name: "Cooked White Rice (Basmati)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 130,
      protein: 2.7,
      carbs: 28.0,
      fats: 0.3,
      iron: 0.2,
      calcium: 10.0,
      fiber: 0.4,
      vitamin_b12: 0.0,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Plate", grams: 250 },
      { name: "1 Bowl / Cup", grams: 150 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "dal",
    name: "Dal Tadka (Yellow Lentil Curry)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 90,
      protein: 5.2,
      carbs: 12.5,
      fats: 2.2,
      iron: 1.3,
      calcium: 15.0,
      fiber: 3.5,
      vitamin_b12: 0.0,
      vitamin_c: 0.8
    },
    portions: [
      { name: "1 Bowl", grams: 200 },
      { name: "1 Katori", grams: 120 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "paneer",
    name: "Paneer Tikka (Grilled Cottage Cheese)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 265,
      protein: 18.0,
      carbs: 2.5,
      fats: 20.0,
      iron: 0.2,
      calcium: 480.0,
      fiber: 0.0,
      vitamin_b12: 0.8,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Plate", grams: 150 },
      { name: "1 Cube / Piece", grams: 25 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "sabzi",
    name: "Mixed Vegetable Sabzi (Dry Curry)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 85,
      protein: 1.8,
      carbs: 9.0,
      fats: 4.8,
      iron: 0.9,
      calcium: 32.0,
      fiber: 2.8,
      vitamin_b12: 0.0,
      vitamin_c: 15.0
    },
    portions: [
      { name: "1 Bowl", grams: 150 },
      { name: "1 Tablespoon", grams: 20 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "chicken_breast",
    name: "Chicken Breast (Cooked, Grilled)",
    category: "Global",
    nutrition_per_100g: {
      calories: 165,
      protein: 31.0,
      carbs: 0.0,
      fats: 3.6,
      iron: 1.0,
      calcium: 15.0,
      fiber: 0.0,
      vitamin_b12: 0.3,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Standard Fillet", grams: 120 },
      { name: "1 Portion", grams: 100 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "egg",
    name: "Whole Egg (Boiled)",
    category: "Global",
    nutrition_per_100g: {
      calories: 155,
      protein: 12.6,
      carbs: 1.1,
      fats: 10.6,
      iron: 1.2,
      calcium: 50.0,
      fiber: 0.0,
      vitamin_b12: 1.1,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Large Egg", grams: 50 },
      { name: "2 Large Eggs", grams: 100 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "milk",
    name: "Cow's Milk (Full Cream)",
    category: "Dairy",
    nutrition_per_100g: {
      calories: 64,
      protein: 3.3,
      carbs: 4.7,
      fats: 3.6,
      iron: 0.05,
      calcium: 120.0,
      fiber: 0.0,
      vitamin_b12: 0.45,
      vitamin_c: 1.0
    },
    portions: [
      { name: "1 Glass", grams: 250 },
      { name: "1 Cup", grams: 150 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "curd",
    name: "Curd / Dahi (Plain)",
    category: "Dairy",
    nutrition_per_100g: {
      calories: 60,
      protein: 3.2,
      carbs: 4.1,
      fats: 3.5,
      iron: 0.1,
      calcium: 120.0,
      fiber: 0.0,
      vitamin_b12: 0.35,
      vitamin_c: 1.0
    },
    portions: [
      { name: "1 Bowl", grams: 200 },
      { name: "1 Cup", grams: 150 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "wheat_bread",
    name: "Whole Wheat Bread",
    category: "Global",
    nutrition_per_100g: {
      calories: 260,
      protein: 9.0,
      carbs: 48.0,
      fats: 3.0,
      iron: 2.5,
      calcium: 80.0,
      fiber: 6.0,
      vitamin_b12: 0.0,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Slice", grams: 25 },
      { name: "2 Slices", grams: 50 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "banana",
    name: "Banana (Raw, Fresh)",
    category: "Fruits",
    nutrition_per_100g: {
      calories: 89,
      protein: 1.1,
      carbs: 23.0,
      fats: 0.3,
      iron: 0.3,
      calcium: 5.0,
      fiber: 2.6,
      vitamin_b12: 0.0,
      vitamin_c: 8.7
    },
    portions: [
      { name: "1 Medium", grams: 120 },
      { name: "1 Small", grams: 80 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "apple",
    name: "Apple (With Skin)",
    category: "Fruits",
    nutrition_per_100g: {
      calories: 52,
      protein: 0.3,
      carbs: 14.0,
      fats: 0.2,
      iron: 0.12,
      calcium: 6.0,
      fiber: 2.4,
      vitamin_b12: 0.0,
      vitamin_c: 4.6
    },
    portions: [
      { name: "1 Medium", grams: 150 },
      { name: "1 Small", grams: 100 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "oats",
    name: "Rolled Oats (Dry)",
    category: "Global",
    nutrition_per_100g: {
      calories: 389,
      protein: 16.9,
      carbs: 66.0,
      fats: 6.9,
      iron: 4.7,
      calcium: 54.0,
      fiber: 10.6,
      vitamin_b12: 0.0,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Bowl (Cooked)", grams: 200 },
      { name: "1 Portion (Dry)", grams: 40 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "almonds",
    name: "Almonds (Raw)",
    category: "Global",
    nutrition_per_100g: {
      calories: 579,
      protein: 21.1,
      carbs: 21.6,
      fats: 49.9,
      iron: 3.7,
      calcium: 269.0,
      fiber: 12.5,
      vitamin_b12: 0.0,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Handful (~23 nuts)", grams: 30 },
      { name: "1 Almond", grams: 1.3 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "chana_masala",
    name: "Chana Masala (Chickpea Curry)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 120,
      protein: 6.2,
      carbs: 18.5,
      fats: 2.8,
      iron: 2.1,
      calcium: 45.0,
      fiber: 5.5,
      vitamin_b12: 0.0,
      vitamin_c: 2.5
    },
    portions: [
      { name: "1 Bowl", grams: 200 },
      { name: "1 Katori", grams: 120 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "idli",
    name: "Idli (Rice & Urad Dal Steamed Cake)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 130,
      protein: 3.1,
      carbs: 28.0,
      fats: 0.5,
      iron: 0.6,
      calcium: 10.0,
      fiber: 1.5,
      vitamin_b12: 0.0,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Medium Idli", grams: 40 },
      { name: "1 Plate (2 Idlis)", grams: 80 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "sambar",
    name: "Sambar (Lentil Soup with Mixed Veg)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 65,
      protein: 2.1,
      carbs: 9.2,
      fats: 2.5,
      iron: 0.8,
      calcium: 18.0,
      fiber: 2.2,
      vitamin_b12: 0.0,
      vitamin_c: 3.2
    },
    portions: [
      { name: "1 Bowl", grams: 200 },
      { name: "1 Katori", grams: 120 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "peanut_butter",
    name: "Peanut Butter (Unsweetened)",
    category: "Global",
    nutrition_per_100g: {
      calories: 588,
      protein: 25.0,
      carbs: 20.0,
      fats: 50.0,
      iron: 1.9,
      calcium: 43.0,
      fiber: 6.0,
      vitamin_b12: 0.0,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Tablespoon", grams: 16 },
      { name: "1 Teaspoon", grams: 6 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "whey_protein",
    name: "Whey Protein Powder",
    category: "Global",
    nutrition_per_100g: {
      calories: 363,
      protein: 75.0,
      carbs: 9.0,
      fats: 3.0,
      iron: 0.5,
      calcium: 350.0,
      fiber: 0.0,
      vitamin_b12: 1.2,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Scoop", grams: 33 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "potato",
    name: "Potato (Boiled, Skinless)",
    category: "Global",
    nutrition_per_100g: {
      calories: 87,
      protein: 1.9,
      carbs: 20.1,
      fats: 0.1,
      iron: 0.3,
      calcium: 5.0,
      fiber: 1.8,
      vitamin_b12: 0.0,
      vitamin_c: 13.0
    },
    portions: [
      { name: "1 Medium", grams: 150 },
      { name: "1 Small", grams: 100 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "spinach",
    name: "Spinach Palak Sabzi (Sautéed)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 45,
      protein: 2.5,
      carbs: 4.2,
      fats: 2.5,
      iron: 2.7,
      calcium: 99.0,
      fiber: 2.2,
      vitamin_b12: 0.0,
      vitamin_c: 28.0
    },
    portions: [
      { name: "1 Bowl", grams: 150 },
      { name: "1 Serving", grams: 100 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "salmon",
    name: "Salmon Fillet (Grilled / Cooked)",
    category: "Global",
    nutrition_per_100g: {
      calories: 206,
      protein: 22.0,
      carbs: 0.0,
      fats: 13.0,
      iron: 0.3,
      calcium: 9.0,
      fiber: 0.0,
      vitamin_b12: 3.2,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Fillet", grams: 120 },
      { name: "1 Portion", grams: 100 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "tofu",
    name: "Tofu (Firm Soy Cheese)",
    category: "Global",
    nutrition_per_100g: {
      calories: 144,
      protein: 17.3,
      carbs: 2.8,
      fats: 8.7,
      iron: 2.7,
      calcium: 350.0,
      fiber: 2.3,
      vitamin_b12: 0.0,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 block / portion", grams: 100 },
      { name: "1 Slice", grams: 30 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "tea",
    name: "Indian Chai (with Milk & Sugar)",
    category: "Dairy",
    nutrition_per_100g: {
      calories: 45,
      protein: 0.8,
      carbs: 7.2,
      fats: 1.5,
      iron: 0.0,
      calcium: 30.0,
      fiber: 0.0,
      vitamin_b12: 0.1,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Cup", grams: 150 },
      { name: "1 Large Mug", grams: 250 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "butter",
    name: "Table Butter (Salted)",
    category: "Dairy",
    nutrition_per_100g: {
      calories: 717,
      protein: 0.9,
      carbs: 0.1,
      fats: 81.1,
      iron: 0.0,
      calcium: 24.0,
      fiber: 0.0,
      vitamin_b12: 0.2,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Teaspoon", grams: 5 },
      { name: "1 Tablespoon", grams: 14 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "rajma",
    name: "Rajma Masala (Kidney Bean Curry)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 105,
      protein: 4.8,
      carbs: 15.0,
      fats: 2.6,
      iron: 1.5,
      calcium: 28.0,
      fiber: 4.2,
      vitamin_b12: 0.0,
      vitamin_c: 1.5
    },
    portions: [
      { name: "1 Bowl", grams: 200 },
      { name: "1 Katori", grams: 120 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "papaya",
    name: "Papaya (Ripe, Fresh)",
    category: "Fruits",
    nutrition_per_100g: {
      calories: 43,
      protein: 0.5,
      carbs: 11.0,
      fats: 0.3,
      iron: 0.25,
      calcium: 20.0,
      fiber: 1.7,
      vitamin_b12: 0.0,
      vitamin_c: 60.9
    },
    portions: [
      { name: "1 Bowl", grams: 150 },
      { name: "1 Slice", grams: 80 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "biryani",
    name: "Chicken Biryani",
    category: "Indian",
    nutrition_per_100g: {
      calories: 160,
      protein: 8.5,
      carbs: 19.0,
      fats: 5.5,
      iron: 0.8,
      calcium: 15.0,
      fiber: 1.2,
      vitamin_b12: 0.15,
      vitamin_c: 1.0
    },
    portions: [
      { name: "1 Plate", grams: 350 },
      { name: "1 Bowl", grams: 200 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "masala_dosa",
    name: "Masala Dosa (with Potato Filling)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 175,
      protein: 3.5,
      carbs: 29.0,
      fats: 5.0,
      iron: 1.0,
      calcium: 15.0,
      fiber: 1.8,
      vitamin_b12: 0.0,
      vitamin_c: 1.0
    },
    portions: [
      { name: "1 Medium Dosa", grams: 120 },
      { name: "1 Large Dosa", grams: 180 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "plain_dosa",
    name: "Plain Dosa",
    category: "Indian",
    nutrition_per_100g: {
      calories: 160,
      protein: 3.0,
      carbs: 32.0,
      fats: 2.0,
      iron: 0.8,
      calcium: 12.0,
      fiber: 1.2,
      vitamin_b12: 0.0,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Medium Dosa", grams: 80 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "poha",
    name: "Poha (Cooked Flattened Rice)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 180,
      protein: 2.8,
      carbs: 33.0,
      fats: 4.0,
      iron: 2.5,
      calcium: 20.0,
      fiber: 1.5,
      vitamin_b12: 0.0,
      vitamin_c: 2.0
    },
    portions: [
      { name: "1 Bowl", grams: 150 },
      { name: "1 Plate", grams: 250 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "upma",
    name: "Upma (Semolina Porridge)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 150,
      protein: 3.2,
      carbs: 25.0,
      fats: 4.5,
      iron: 1.2,
      calcium: 15.0,
      fiber: 1.6,
      vitamin_b12: 0.0,
      vitamin_c: 1.0
    },
    portions: [
      { name: "1 Bowl", grams: 150 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "aloo_paratha",
    name: "Aloo Paratha (Griddle Flatbread with Potato)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 290,
      protein: 5.5,
      carbs: 45.0,
      fats: 10.0,
      iron: 2.2,
      calcium: 30.0,
      fiber: 4.5,
      vitamin_b12: 0.0,
      vitamin_c: 4.0
    },
    portions: [
      { name: "1 Medium Paratha", grams: 110 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "paneer_paratha",
    name: "Paneer Paratha (Griddle Flatbread with Cottage Cheese)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 310,
      protein: 11.0,
      carbs: 38.0,
      fats: 12.0,
      iron: 2.0,
      calcium: 180.0,
      fiber: 4.0,
      vitamin_b12: 0.3,
      vitamin_c: 1.0
    },
    portions: [
      { name: "1 Medium Paratha", grams: 110 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "egg_omelette",
    name: "Egg Omelette (2 Eggs with cooking oil)",
    category: "Global",
    nutrition_per_100g: {
      calories: 210,
      protein: 13.0,
      carbs: 1.0,
      fats: 17.0,
      iron: 1.6,
      calcium: 60.0,
      fiber: 0.0,
      vitamin_b12: 1.2,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Omelette (2 Eggs)", grams: 110 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "egg_bhurji",
    name: "Egg Bhurji (Indian Scrambled Eggs)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 190,
      protein: 11.5,
      carbs: 3.5,
      fats: 14.5,
      iron: 1.5,
      calcium: 55.0,
      fiber: 0.5,
      vitamin_b12: 1.0,
      vitamin_c: 2.0
    },
    portions: [
      { name: "1 Plate", grams: 150 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "paneer_bhurji",
    name: "Paneer Bhurji (Scrambled Cottage Cheese)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 220,
      protein: 14.0,
      carbs: 5.0,
      fats: 16.0,
      iron: 1.2,
      calcium: 350.0,
      fiber: 0.8,
      vitamin_b12: 0.6,
      vitamin_c: 3.0
    },
    portions: [
      { name: "1 Bowl", grams: 150 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "chicken_curry",
    name: "Chicken Curry (with Gravy)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 150,
      protein: 16.5,
      carbs: 3.5,
      fats: 8.0,
      iron: 1.1,
      calcium: 20.0,
      fiber: 0.8,
      vitamin_b12: 0.3,
      vitamin_c: 1.5
    },
    portions: [
      { name: "1 Bowl", grams: 200 },
      { name: "1 Piece with Gravy", grams: 75 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "brown_rice",
    name: "Cooked Brown Rice",
    category: "Global",
    nutrition_per_100g: {
      calories: 111,
      protein: 2.6,
      carbs: 23.0,
      fats: 0.9,
      iron: 0.5,
      calcium: 10.0,
      fiber: 1.8,
      vitamin_b12: 0.0,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Bowl / Cup", grams: 150 },
      { name: "1 Plate", grams: 250 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "quinoa",
    name: "Cooked Quinoa",
    category: "Global",
    nutrition_per_100g: {
      calories: 120,
      protein: 4.4,
      carbs: 21.3,
      fats: 1.9,
      iron: 1.5,
      calcium: 17.0,
      fiber: 2.8,
      vitamin_b12: 0.0,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Bowl / Cup", grams: 150 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "moong_dal_chilla",
    name: "Moong Dal Chilla (Lentil Crepe)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 180,
      protein: 9.5,
      carbs: 26.0,
      fats: 4.5,
      iron: 3.2,
      calcium: 40.0,
      fiber: 4.8,
      vitamin_b12: 0.0,
      vitamin_c: 1.5
    },
    portions: [
      { name: "1 Chilla (Medium)", grams: 75 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "mixed_green_salad",
    name: "Mixed Green Salad (Raw Cucumber, Tomato, Onion)",
    category: "Fruits",
    nutrition_per_100g: {
      calories: 25,
      protein: 1.2,
      carbs: 4.0,
      fats: 0.3,
      iron: 1.0,
      calcium: 35.0,
      fiber: 2.0,
      vitamin_b12: 0.0,
      vitamin_c: 12.0
    },
    portions: [
      { name: "1 Bowl", grams: 150 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "sweet_potato",
    name: "Sweet Potato (Boiled / Baked)",
    category: "Global",
    nutrition_per_100g: {
      calories: 86,
      protein: 1.6,
      carbs: 20.0,
      fats: 0.1,
      iron: 0.6,
      calcium: 30.0,
      fiber: 3.0,
      vitamin_b12: 0.0,
      vitamin_c: 2.4
    },
    portions: [
      { name: "1 Medium", grams: 130 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "broccoli",
    name: "Broccoli (Steamed / Boiled)",
    category: "Global",
    nutrition_per_100g: {
      calories: 35,
      protein: 2.4,
      carbs: 7.2,
      fats: 0.4,
      iron: 0.7,
      calcium: 40.0,
      fiber: 3.3,
      vitamin_b12: 0.0,
      vitamin_c: 65.0
    },
    portions: [
      { name: "1 Cup", grams: 150 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "avocado",
    name: "Avocado",
    category: "Fruits",
    nutrition_per_100g: {
      calories: 160,
      protein: 2.0,
      carbs: 8.5,
      fats: 14.7,
      iron: 0.6,
      calcium: 12.0,
      fiber: 6.7,
      vitamin_b12: 0.0,
      vitamin_c: 10.0
    },
    portions: [
      { name: "1 Medium Fruit", grams: 150 },
      { name: "Half Avocado", grams: 75 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "black_coffee",
    name: "Black Coffee (No Sugar)",
    category: "Global",
    nutrition_per_100g: {
      calories: 2,
      protein: 0.1,
      carbs: 0.0,
      fats: 0.0,
      iron: 0.0,
      calcium: 2.0,
      fiber: 0.0,
      vitamin_b12: 0.0,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Cup", grams: 150 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "greek_yogurt",
    name: "Greek Yogurt (Plain, Low Fat)",
    category: "Dairy",
    nutrition_per_100g: {
      calories: 73,
      protein: 10.0,
      carbs: 3.6,
      fats: 2.0,
      iron: 0.1,
      calcium: 110.0,
      fiber: 0.0,
      vitamin_b12: 0.75,
      vitamin_c: 0.0
    },
    portions: [
      { name: "1 Bowl", grams: 150 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "fish_curry",
    name: "Fish Curry (Indian White Fish)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 110,
      protein: 14.0,
      carbs: 2.5,
      fats: 5.0,
      iron: 0.8,
      calcium: 25.0,
      fiber: 0.5,
      vitamin_b12: 1.5,
      vitamin_c: 1.0
    },
    portions: [
      { name: "1 Bowl", grams: 200 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "samosa",
    name: "Samosa (Potato Filled, Fried)",
    category: "Indian",
    nutrition_per_100g: {
      calories: 300,
      protein: 4.5,
      carbs: 32.0,
      fats: 17.0,
      iron: 1.5,
      calcium: 20.0,
      fiber: 2.0,
      vitamin_b12: 0.0,
      vitamin_c: 2.0
    },
    portions: [
      { name: "1 Medium Samosa", grams: 50 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "vegetable_pizza",
    name: "Vegetable Pizza (Thick/Medium Crust)",
    category: "Global",
    nutrition_per_100g: {
      calories: 240,
      protein: 10.0,
      carbs: 28.0,
      fats: 9.5,
      iron: 1.8,
      calcium: 180.0,
      fiber: 2.2,
      vitamin_b12: 0.4,
      vitamin_c: 4.0
    },
    portions: [
      { name: "1 Slice (Large)", grams: 100 },
      { name: "1 Personal Pizza", grams: 300 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "orange",
    name: "Orange (Fresh)",
    category: "Fruits",
    nutrition_per_100g: {
      calories: 47,
      protein: 0.9,
      carbs: 12.0,
      fats: 0.1,
      iron: 0.1,
      calcium: 40.0,
      fiber: 2.4,
      vitamin_b12: 0.0,
      vitamin_c: 53.2
    },
    portions: [
      { name: "1 Medium Orange", grams: 130 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "watermelon",
    name: "Watermelon (Fresh)",
    category: "Fruits",
    nutrition_per_100g: {
      calories: 30,
      protein: 0.6,
      carbs: 7.6,
      fats: 0.1,
      iron: 0.2,
      calcium: 7.0,
      fiber: 0.4,
      vitamin_b12: 0.0,
      vitamin_c: 8.1
    },
    portions: [
      { name: "1 Bowl / Slice", grams: 200 },
      { name: "100 grams", grams: 100 }
    ]
  },
  {
    id: "soya_chunks_curry",
    name: "Soya Chunks Curry",
    category: "Indian",
    nutrition_per_100g: {
      calories: 120,
      protein: 15.0,
      carbs: 8.0,
      fats: 3.5,
      iron: 4.5,
      calcium: 70.0,
      fiber: 4.0,
      vitamin_b12: 0.0,
      vitamin_c: 1.0
    },
    portions: [
      { name: "1 Bowl", grams: 180 },
      { name: "100 grams", grams: 100 }
    ]
  }
];

// Helper to get food by ID
export const getFoodById = (id) => foodDatabase.find(food => food.id === id);

// Helper to search foods by query
export const searchFoods = (query) => {
  if (!query) return [];
  const normalizedQuery = query.toLowerCase().trim();
  return foodDatabase.filter(food => 
    food.name.toLowerCase().includes(normalizedQuery) ||
    food.category.toLowerCase().includes(normalizedQuery)
  );
};
