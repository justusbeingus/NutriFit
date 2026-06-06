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
