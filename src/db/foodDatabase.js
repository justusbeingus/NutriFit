// Curated Food Dataset inspired by Indian Food Composition Tables (IFCT) and USDA FoodData Central.
// All values represent nutrients per 100g of the edible portion.
// Approximations are based on standard cooking preparations.

export const foodDatabase = [
  {
    "id": "wheat_roti",
    "name": "Wheat Roti (Phulka)",
    "category": "Indian Staples",
    "nutrition_per_100g": {
      "calories": 297,
      "protein": 9.5,
      "carbs": 61.2,
      "fats": 1.5,
      "iron": 3.5,
      "calcium": 34,
      "fiber": 9.7,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Medium Roti",
        "grams": 30
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "white_rice_cooked",
    "name": "White Rice (Cooked)",
    "category": "Indian Staples",
    "nutrition_per_100g": {
      "calories": 130,
      "protein": 2.7,
      "carbs": 28.2,
      "fats": 0.3,
      "iron": 0.2,
      "calcium": 10,
      "fiber": 0.4,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Small Bowl",
        "grams": 150
      },
      {
        "name": "1 Full Plate",
        "grams": 250
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "toor_dal_cooked",
    "name": "Toor Dal / Yellow Dal (Cooked)",
    "category": "Dals & Legumes",
    "nutrition_per_100g": {
      "calories": 116,
      "protein": 7.3,
      "carbs": 21,
      "fats": 0.4,
      "iron": 1.5,
      "calcium": 20,
      "fiber": 5,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Medium Bowl",
        "grams": 200
      },
      {
        "name": "1 Large Bowl",
        "grams": 300
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "paneer_raw",
    "name": "Paneer (Raw/Fresh)",
    "category": "Dairy & Protein",
    "nutrition_per_100g": {
      "calories": 265,
      "protein": 18,
      "carbs": 1.2,
      "fats": 20,
      "iron": 0.2,
      "calcium": 480,
      "fiber": 0,
      "vitamin_b12": 0.4,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "100g (Standard)",
        "grams": 100
      },
      {
        "name": "50g (Half portion)",
        "grams": 50
      }
    ]
  },
  {
    "id": "sabzi",
    "name": "Mixed Vegetable Sabzi (Dry Curry)",
    "category": "Indian",
    "nutrition_per_100g": {
      "calories": 85,
      "protein": 1.8,
      "carbs": 9,
      "fats": 4.8,
      "iron": 0.9,
      "calcium": 32,
      "fiber": 2.8,
      "vitamin_b12": 0,
      "vitamin_c": 15
    },
    "portions": [
      {
        "name": "1 Bowl",
        "grams": 150
      },
      {
        "name": "1 Tablespoon",
        "grams": 20
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "chicken_breast_cooked",
    "name": "Chicken Breast (Cooked/Grilled)",
    "category": "Meats",
    "nutrition_per_100g": {
      "calories": 165,
      "protein": 31,
      "carbs": 0,
      "fats": 3.6,
      "iron": 1,
      "calcium": 15,
      "fiber": 0,
      "vitamin_b12": 0.3,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Standard Piece",
        "grams": 150
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "egg_whole_boiled",
    "name": "Whole Egg (Boiled)",
    "category": "Dairy & Protein",
    "nutrition_per_100g": {
      "calories": 155,
      "protein": 12.6,
      "carbs": 1.1,
      "fats": 10.6,
      "iron": 1.2,
      "calcium": 50,
      "fiber": 0,
      "vitamin_b12": 1.1,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Large Egg",
        "grams": 50
      },
      {
        "name": "2 Large Eggs",
        "grams": 100
      }
    ]
  },
  {
    "id": "milk_full_cream",
    "name": "Milk (Full Cream / Whole)",
    "category": "Dairy & Protein",
    "nutrition_per_100g": {
      "calories": 61,
      "protein": 3.2,
      "carbs": 4.8,
      "fats": 3.3,
      "iron": 0,
      "calcium": 113,
      "fiber": 0,
      "vitamin_b12": 0.4,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Regular Glass",
        "grams": 250
      },
      {
        "name": "100ml",
        "grams": 100
      }
    ]
  },
  {
    "id": "curd_plain",
    "name": "Curd / Dahi (Whole Milk)",
    "category": "Dairy & Protein",
    "nutrition_per_100g": {
      "calories": 98,
      "protein": 3.5,
      "carbs": 3.4,
      "fats": 4.3,
      "iron": 0.1,
      "calcium": 121,
      "fiber": 0,
      "vitamin_b12": 0.4,
      "vitamin_c": 0.5
    },
    "portions": [
      {
        "name": "1 Small Bowl",
        "grams": 150
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "whole_wheat_bread",
    "name": "Whole Wheat Bread",
    "category": "Global Staples",
    "nutrition_per_100g": {
      "calories": 247,
      "protein": 13,
      "carbs": 41.3,
      "fats": 3.4,
      "iron": 2.5,
      "calcium": 107,
      "fiber": 7,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Slice",
        "grams": 30
      },
      {
        "name": "2 Slices",
        "grams": 60
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "banana_raw",
    "name": "Banana (Raw)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 89,
      "protein": 1.1,
      "carbs": 22.8,
      "fats": 0.3,
      "iron": 0.3,
      "calcium": 5,
      "fiber": 2.6,
      "vitamin_b12": 0,
      "vitamin_c": 8.7
    },
    "portions": [
      {
        "name": "1 Medium Banana",
        "grams": 118
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "apple_raw",
    "name": "Apple (Raw with skin)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 13.8,
      "fats": 0.2,
      "iron": 0.1,
      "calcium": 6,
      "fiber": 2.4,
      "vitamin_b12": 0,
      "vitamin_c": 4.6
    },
    "portions": [
      {
        "name": "1 Medium Apple",
        "grams": 182
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "rolled_oats_raw",
    "name": "High-Protein Oats (Raw)",
    "category": "Breakfast",
    "nutrition_per_100g": {
      "calories": 379,
      "protein": 13.2,
      "carbs": 67.7,
      "fats": 6.5,
      "iron": 4.7,
      "calcium": 54,
      "fiber": 10.1,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Medium Bowl (Raw Weight)",
        "grams": 40
      },
      {
        "name": "1 Large Bowl (Raw Weight)",
        "grams": 60
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "almonds_raw",
    "name": "Almonds (Raw)",
    "category": "Fats & Spreads",
    "nutrition_per_100g": {
      "calories": 579,
      "protein": 21.1,
      "carbs": 21.6,
      "fats": 49.9,
      "iron": 3.7,
      "calcium": 268,
      "fiber": 12.5,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Handful (approx 23 nuts)",
        "grams": 28
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "chana_masala_cooked",
    "name": "Chana Masala / Chickpeas (Cooked)",
    "category": "Dals & Legumes",
    "nutrition_per_100g": {
      "calories": 164,
      "protein": 8.9,
      "carbs": 27.4,
      "fats": 2.6,
      "iron": 2.9,
      "calcium": 49,
      "fiber": 7.6,
      "vitamin_b12": 0,
      "vitamin_c": 1.2
    },
    "portions": [
      {
        "name": "1 Medium Bowl",
        "grams": 200
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "idli_steamed",
    "name": "Idli (Steamed Rice/Urad Dal)",
    "category": "South Indian",
    "nutrition_per_100g": {
      "calories": 140,
      "protein": 4,
      "carbs": 30,
      "fats": 0.5,
      "iron": 1,
      "calcium": 10,
      "fiber": 1.5,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Medium Idli",
        "grams": 40
      },
      {
        "name": "3 Idlis (Standard Plate)",
        "grams": 120
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "sambar_veg",
    "name": "Sambar (with Vegetables)",
    "category": "South Indian",
    "nutrition_per_100g": {
      "calories": 65,
      "protein": 3,
      "carbs": 10,
      "fats": 1.5,
      "iron": 1.2,
      "calcium": 30,
      "fiber": 2.5,
      "vitamin_b12": 0,
      "vitamin_c": 4.5
    },
    "portions": [
      {
        "name": "1 Medium Bowl",
        "grams": 200
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "peanut_butter_unsweetened",
    "name": "Peanut Butter (Unsweetened)",
    "category": "Fats & Spreads",
    "nutrition_per_100g": {
      "calories": 588,
      "protein": 25,
      "carbs": 20,
      "fats": 50,
      "iron": 1.9,
      "calcium": 43,
      "fiber": 6,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Tablespoon",
        "grams": 16
      },
      {
        "name": "2 Tablespoons",
        "grams": 32
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "whey_isolate_standard",
    "name": "Whey Protein Isolate (Standard Powder)",
    "category": "Supplements",
    "nutrition_per_100g": {
      "calories": 360,
      "protein": 83,
      "carbs": 3.5,
      "fats": 1.5,
      "iron": 1,
      "calcium": 400,
      "fiber": 0,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Scoop (Standard)",
        "grams": 30
      },
      {
        "name": "1.5 Scoops",
        "grams": 45
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "potato",
    "name": "Potato (Boiled, Skinless)",
    "category": "Global",
    "nutrition_per_100g": {
      "calories": 87,
      "protein": 1.9,
      "carbs": 20.1,
      "fats": 0.1,
      "iron": 0.3,
      "calcium": 5,
      "fiber": 1.8,
      "vitamin_b12": 0,
      "vitamin_c": 13
    },
    "portions": [
      {
        "name": "1 Medium",
        "grams": 150
      },
      {
        "name": "1 Small",
        "grams": 100
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "spinach_raw",
    "name": "Spinach / Palak (Raw)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 23,
      "protein": 2.9,
      "carbs": 3.6,
      "fats": 0.4,
      "iron": 2.7,
      "calcium": 99,
      "fiber": 2.2,
      "vitamin_b12": 0,
      "vitamin_c": 28.1
    },
    "portions": [
      {
        "name": "1 Bunch/Large Bowl",
        "grams": 100
      },
      {
        "name": "1 Cup (Packed)",
        "grams": 30
      }
    ]
  },
  {
    "id": "salmon",
    "name": "Salmon Fillet (Grilled / Cooked)",
    "category": "Global",
    "nutrition_per_100g": {
      "calories": 206,
      "protein": 22,
      "carbs": 0,
      "fats": 13,
      "iron": 0.3,
      "calcium": 9,
      "fiber": 0,
      "vitamin_b12": 3.2,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Fillet",
        "grams": 120
      },
      {
        "name": "1 Portion",
        "grams": 100
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "tofu",
    "name": "Tofu (Firm Soy Cheese)",
    "category": "Global",
    "nutrition_per_100g": {
      "calories": 144,
      "protein": 17.3,
      "carbs": 2.8,
      "fats": 8.7,
      "iron": 2.7,
      "calcium": 350,
      "fiber": 2.3,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 block / portion",
        "grams": 100
      },
      {
        "name": "1 Slice",
        "grams": 30
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "tea",
    "name": "Indian Chai (with Milk & Sugar)",
    "category": "Dairy",
    "nutrition_per_100g": {
      "calories": 45,
      "protein": 0.8,
      "carbs": 7.2,
      "fats": 1.5,
      "iron": 0,
      "calcium": 30,
      "fiber": 0,
      "vitamin_b12": 0.1,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Cup",
        "grams": 150
      },
      {
        "name": "1 Large Mug",
        "grams": 250
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "butter",
    "name": "Table Butter (Salted)",
    "category": "Dairy",
    "nutrition_per_100g": {
      "calories": 717,
      "protein": 0.9,
      "carbs": 0.1,
      "fats": 81.1,
      "iron": 0,
      "calcium": 24,
      "fiber": 0,
      "vitamin_b12": 0.2,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Teaspoon",
        "grams": 5
      },
      {
        "name": "1 Tablespoon",
        "grams": 14
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "rajma_cooked",
    "name": "Rajma / Kidney Beans (Cooked)",
    "category": "Dals & Legumes",
    "nutrition_per_100g": {
      "calories": 127,
      "protein": 8.7,
      "carbs": 22.8,
      "fats": 0.5,
      "iron": 2.2,
      "calcium": 28,
      "fiber": 6.4,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Medium Bowl",
        "grams": 200
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "papaya",
    "name": "Papaya (Ripe, Fresh)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 43,
      "protein": 0.5,
      "carbs": 11,
      "fats": 0.3,
      "iron": 0.25,
      "calcium": 20,
      "fiber": 1.7,
      "vitamin_b12": 0,
      "vitamin_c": 60.9
    },
    "portions": [
      {
        "name": "1 Bowl",
        "grams": 150
      },
      {
        "name": "1 Slice",
        "grams": 80
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "biryani",
    "name": "Chicken Biryani",
    "category": "Indian",
    "nutrition_per_100g": {
      "calories": 160,
      "protein": 8.5,
      "carbs": 19,
      "fats": 5.5,
      "iron": 0.8,
      "calcium": 15,
      "fiber": 1.2,
      "vitamin_b12": 0.15,
      "vitamin_c": 1
    },
    "portions": [
      {
        "name": "1 Plate",
        "grams": 350
      },
      {
        "name": "1 Bowl",
        "grams": 200
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "masala_dosa",
    "name": "Masala Dosa (with Potato Filling)",
    "category": "Indian",
    "nutrition_per_100g": {
      "calories": 175,
      "protein": 3.5,
      "carbs": 29,
      "fats": 5,
      "iron": 1,
      "calcium": 15,
      "fiber": 1.8,
      "vitamin_b12": 0,
      "vitamin_c": 1
    },
    "portions": [
      {
        "name": "1 Medium Dosa",
        "grams": 120
      },
      {
        "name": "1 Large Dosa",
        "grams": 180
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "dosa_plain",
    "name": "Plain Dosa",
    "category": "South Indian",
    "nutrition_per_100g": {
      "calories": 168,
      "protein": 3.9,
      "carbs": 29,
      "fats": 3.7,
      "iron": 0.8,
      "calcium": 12,
      "fiber": 0.9,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Medium Dosa",
        "grams": 80
      },
      {
        "name": "1 Large Dosa",
        "grams": 120
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "poha_cooked",
    "name": "Poha (Flattened Rice cooked with peanuts)",
    "category": "Breakfast",
    "nutrition_per_100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 25,
      "fats": 4.5,
      "iron": 2,
      "calcium": 15,
      "fiber": 1.5,
      "vitamin_b12": 0,
      "vitamin_c": 2
    },
    "portions": [
      {
        "name": "1 Medium Bowl",
        "grams": 150
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "upma_cooked",
    "name": "Rava Upma",
    "category": "Breakfast",
    "nutrition_per_100g": {
      "calories": 135,
      "protein": 3,
      "carbs": 21,
      "fats": 4,
      "iron": 1.1,
      "calcium": 12,
      "fiber": 1.2,
      "vitamin_b12": 0,
      "vitamin_c": 1
    },
    "portions": [
      {
        "name": "1 Medium Bowl",
        "grams": 150
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "aloo_paratha",
    "name": "Aloo Paratha (Griddle Flatbread with Potato)",
    "category": "Indian",
    "nutrition_per_100g": {
      "calories": 290,
      "protein": 5.5,
      "carbs": 45,
      "fats": 10,
      "iron": 2.2,
      "calcium": 30,
      "fiber": 4.5,
      "vitamin_b12": 0,
      "vitamin_c": 4
    },
    "portions": [
      {
        "name": "1 Medium Paratha",
        "grams": 110
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "paneer_paratha",
    "name": "Paneer Paratha (Griddle Flatbread with Cottage Cheese)",
    "category": "Indian",
    "nutrition_per_100g": {
      "calories": 310,
      "protein": 11,
      "carbs": 38,
      "fats": 12,
      "iron": 2,
      "calcium": 180,
      "fiber": 4,
      "vitamin_b12": 0.3,
      "vitamin_c": 1
    },
    "portions": [
      {
        "name": "1 Medium Paratha",
        "grams": 110
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "omelette_standard",
    "name": "Omelette (2 Eggs + Oil/Butter)",
    "category": "Breakfast",
    "nutrition_per_100g": {
      "calories": 210,
      "protein": 11.5,
      "carbs": 1.5,
      "fats": 17.5,
      "iron": 1.3,
      "calcium": 55,
      "fiber": 0,
      "vitamin_b12": 1,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Standard Omelette (2 Eggs)",
        "grams": 120
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "egg_bhurji",
    "name": "Egg Bhurji (Indian Scrambled Eggs)",
    "category": "Indian",
    "nutrition_per_100g": {
      "calories": 190,
      "protein": 11.5,
      "carbs": 3.5,
      "fats": 14.5,
      "iron": 1.5,
      "calcium": 55,
      "fiber": 0.5,
      "vitamin_b12": 1,
      "vitamin_c": 2
    },
    "portions": [
      {
        "name": "1 Plate",
        "grams": 150
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "paneer_bhurji",
    "name": "Paneer Bhurji (Scrambled Cottage Cheese)",
    "category": "Indian",
    "nutrition_per_100g": {
      "calories": 220,
      "protein": 14,
      "carbs": 5,
      "fats": 16,
      "iron": 1.2,
      "calcium": 350,
      "fiber": 0.8,
      "vitamin_b12": 0.6,
      "vitamin_c": 3
    },
    "portions": [
      {
        "name": "1 Bowl",
        "grams": 150
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "chicken_curry",
    "name": "Chicken Curry (with Gravy)",
    "category": "Indian",
    "nutrition_per_100g": {
      "calories": 150,
      "protein": 16.5,
      "carbs": 3.5,
      "fats": 8,
      "iron": 1.1,
      "calcium": 20,
      "fiber": 0.8,
      "vitamin_b12": 0.3,
      "vitamin_c": 1.5
    },
    "portions": [
      {
        "name": "1 Bowl",
        "grams": 200
      },
      {
        "name": "1 Piece with Gravy",
        "grams": 75
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "brown_rice_cooked",
    "name": "Brown Rice (Cooked)",
    "category": "Indian Staples",
    "nutrition_per_100g": {
      "calories": 112,
      "protein": 2.6,
      "carbs": 23.5,
      "fats": 0.9,
      "iron": 0.5,
      "calcium": 10,
      "fiber": 1.8,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Small Bowl",
        "grams": 150
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "quinoa",
    "name": "Cooked Quinoa",
    "category": "Global",
    "nutrition_per_100g": {
      "calories": 120,
      "protein": 4.4,
      "carbs": 21.3,
      "fats": 1.9,
      "iron": 1.5,
      "calcium": 17,
      "fiber": 2.8,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Bowl / Cup",
        "grams": 150
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "moong_dal_chilla",
    "name": "Moong Dal Chilla (Lentil Crepe)",
    "category": "Indian",
    "nutrition_per_100g": {
      "calories": 180,
      "protein": 9.5,
      "carbs": 26,
      "fats": 4.5,
      "iron": 3.2,
      "calcium": 40,
      "fiber": 4.8,
      "vitamin_b12": 0,
      "vitamin_c": 1.5
    },
    "portions": [
      {
        "name": "1 Chilla (Medium)",
        "grams": 75
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "mixed_green_salad",
    "name": "Mixed Green Salad (Raw Cucumber, Tomato, Onion)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 25,
      "protein": 1.2,
      "carbs": 4,
      "fats": 0.3,
      "iron": 1,
      "calcium": 35,
      "fiber": 2,
      "vitamin_b12": 0,
      "vitamin_c": 12
    },
    "portions": [
      {
        "name": "1 Bowl",
        "grams": 150
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "sweet_potato_boiled",
    "name": "Sweet Potato (Boiled)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 86,
      "protein": 1.6,
      "carbs": 20.1,
      "fats": 0.1,
      "iron": 0.6,
      "calcium": 30,
      "fiber": 3,
      "vitamin_b12": 0,
      "vitamin_c": 17.1
    },
    "portions": [
      {
        "name": "1 Medium Potato",
        "grams": 150
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "broccoli",
    "name": "Broccoli (Steamed / Boiled)",
    "category": "Global",
    "nutrition_per_100g": {
      "calories": 35,
      "protein": 2.4,
      "carbs": 7.2,
      "fats": 0.4,
      "iron": 0.7,
      "calcium": 40,
      "fiber": 3.3,
      "vitamin_b12": 0,
      "vitamin_c": 65
    },
    "portions": [
      {
        "name": "1 Cup",
        "grams": 150
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "avocado",
    "name": "Avocado",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 160,
      "protein": 2,
      "carbs": 8.5,
      "fats": 14.7,
      "iron": 0.6,
      "calcium": 12,
      "fiber": 6.7,
      "vitamin_b12": 0,
      "vitamin_c": 10
    },
    "portions": [
      {
        "name": "1 Medium Fruit",
        "grams": 150
      },
      {
        "name": "Half Avocado",
        "grams": 75
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "black_coffee",
    "name": "Black Coffee (No Sugar)",
    "category": "Global",
    "nutrition_per_100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0,
      "fats": 0,
      "iron": 0,
      "calcium": 2,
      "fiber": 0,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Cup",
        "grams": 150
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "greek_yogurt_plain",
    "name": "Greek Yogurt (Plain, Low Fat)",
    "category": "Dairy & Protein",
    "nutrition_per_100g": {
      "calories": 73,
      "protein": 10,
      "carbs": 4,
      "fats": 1.9,
      "iron": 0.1,
      "calcium": 115,
      "fiber": 0,
      "vitamin_b12": 0.7,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Standard Cup",
        "grams": 150
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "fish_curry_rohu",
    "name": "Fish Curry (Rohu/Standard Indian)",
    "category": "Meats",
    "nutrition_per_100g": {
      "calories": 130,
      "protein": 14.5,
      "carbs": 4,
      "fats": 6.5,
      "iron": 1.2,
      "calcium": 35,
      "fiber": 0.5,
      "vitamin_b12": 2.5,
      "vitamin_c": 1.5
    },
    "portions": [
      {
        "name": "1 Standard Piece with Gravy",
        "grams": 150
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "samosa_standard",
    "name": "Samosa (Potato & Pea filled)",
    "category": "Fast Food",
    "nutrition_per_100g": {
      "calories": 262,
      "protein": 3.5,
      "carbs": 24,
      "fats": 17,
      "iron": 1.2,
      "calcium": 15,
      "fiber": 2.1,
      "vitamin_b12": 0,
      "vitamin_c": 5
    },
    "portions": [
      {
        "name": "1 Regular Samosa",
        "grams": 90
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "pizza_cheese_dominos",
    "name": "Cheese Pizza (Domino's Style Crust)",
    "category": "Fast Food",
    "nutrition_per_100g": {
      "calories": 266,
      "protein": 11.4,
      "carbs": 33.3,
      "fats": 9.8,
      "iron": 2.4,
      "calcium": 188,
      "fiber": 2.3,
      "vitamin_b12": 0.4,
      "vitamin_c": 1.5
    },
    "portions": [
      {
        "name": "1 Medium Slice",
        "grams": 85
      },
      {
        "name": "2 Medium Slices",
        "grams": 170
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "orange",
    "name": "Orange (Fresh)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 47,
      "protein": 0.9,
      "carbs": 12,
      "fats": 0.1,
      "iron": 0.1,
      "calcium": 40,
      "fiber": 2.4,
      "vitamin_b12": 0,
      "vitamin_c": 53.2
    },
    "portions": [
      {
        "name": "1 Medium Orange",
        "grams": 130
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "watermelon",
    "name": "Watermelon (Fresh)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 30,
      "protein": 0.6,
      "carbs": 7.6,
      "fats": 0.1,
      "iron": 0.2,
      "calcium": 7,
      "fiber": 0.4,
      "vitamin_b12": 0,
      "vitamin_c": 8.1
    },
    "portions": [
      {
        "name": "1 Bowl / Slice",
        "grams": 200
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "soya_chunks_boiled",
    "name": "Soya Chunks (Boiled)",
    "category": "Dairy & Protein",
    "nutrition_per_100g": {
      "calories": 110,
      "protein": 17,
      "carbs": 10,
      "fats": 0.3,
      "iron": 6.5,
      "calcium": 110,
      "fiber": 4,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Medium Bowl (Wet Weight)",
        "grams": 150
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "egg_white_boiled",
    "name": "Egg White (Boiled)",
    "category": "Dairy & Protein",
    "nutrition_per_100g": {
      "calories": 52,
      "protein": 10.9,
      "carbs": 0.7,
      "fats": 0.2,
      "iron": 0.1,
      "calcium": 7,
      "fiber": 0,
      "vitamin_b12": 0.1,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Egg White",
        "grams": 33
      },
      {
        "name": "3 Egg Whites",
        "grams": 100
      }
    ]
  },
  {
    "id": "aloo_gobi_sabzi",
    "name": "Aloo Gobi (Potato & Cauliflower Dry)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 85,
      "protein": 2.5,
      "carbs": 10,
      "fats": 4.5,
      "iron": 0.8,
      "calcium": 25,
      "fiber": 3,
      "vitamin_b12": 0,
      "vitamin_c": 25
    },
    "portions": [
      {
        "name": "1 Medium Bowl",
        "grams": 150
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "bhindi_masala",
    "name": "Bhindi Masala (Okra Dry)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 95,
      "protein": 2,
      "carbs": 8.5,
      "fats": 6,
      "iron": 0.9,
      "calcium": 45,
      "fiber": 3.5,
      "vitamin_b12": 0,
      "vitamin_c": 15
    },
    "portions": [
      {
        "name": "1 Medium Bowl",
        "grams": 150
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "palak_paneer",
    "name": "Palak Paneer",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 160,
      "protein": 8.5,
      "carbs": 5,
      "fats": 12,
      "iron": 2.2,
      "calcium": 250,
      "fiber": 2.5,
      "vitamin_b12": 0.1,
      "vitamin_c": 10
    },
    "portions": [
      {
        "name": "1 Medium Bowl",
        "grams": 200
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "masoor_dal_cooked",
    "name": "Masoor Dal / Red Lentils (Cooked)",
    "category": "Dals & Legumes",
    "nutrition_per_100g": {
      "calories": 116,
      "protein": 9,
      "carbs": 20.1,
      "fats": 0.4,
      "iron": 3.3,
      "calcium": 19,
      "fiber": 7.9,
      "vitamin_b12": 0,
      "vitamin_c": 1.5
    },
    "portions": [
      {
        "name": "1 Medium Bowl",
        "grams": 200
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "bajra_roti",
    "name": "Bajra Roti (Pearl Millet)",
    "category": "Indian Staples",
    "nutrition_per_100g": {
      "calories": 361,
      "protein": 11.6,
      "carbs": 67.5,
      "fats": 5,
      "iron": 8,
      "calcium": 42,
      "fiber": 1.2,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Medium Roti",
        "grams": 40
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "jowar_roti",
    "name": "Jowar Roti (Sorghum)",
    "category": "Indian Staples",
    "nutrition_per_100g": {
      "calories": 349,
      "protein": 10.4,
      "carbs": 72.6,
      "fats": 1.9,
      "iron": 4.1,
      "calcium": 25,
      "fiber": 6.7,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Medium Roti",
        "grams": 40
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "moong_dal_yellow_cooked",
    "name": "Moong Dal / Yellow Split (Cooked)",
    "category": "Dals & Legumes",
    "nutrition_per_100g": {
      "calories": 105,
      "protein": 7,
      "carbs": 19,
      "fats": 0.4,
      "iron": 1.4,
      "calcium": 14,
      "fiber": 5.5,
      "vitamin_b12": 0,
      "vitamin_c": 0.5
    },
    "portions": [
      {
        "name": "1 Medium Bowl",
        "grams": 200
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "mutton_curry",
    "name": "Mutton Curry (Standard Indian)",
    "category": "Meats",
    "nutrition_per_100g": {
      "calories": 185,
      "protein": 16,
      "carbs": 5,
      "fats": 11.5,
      "iron": 2.5,
      "calcium": 25,
      "fiber": 1,
      "vitamin_b12": 2,
      "vitamin_c": 2
    },
    "portions": [
      {
        "name": "1 Standard Serving (3-4 pieces + Gravy)",
        "grams": 200
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "coconut_chutney",
    "name": "Coconut Chutney",
    "category": "South Indian",
    "nutrition_per_100g": {
      "calories": 250,
      "protein": 3,
      "carbs": 7,
      "fats": 23,
      "iron": 1.5,
      "calcium": 20,
      "fiber": 4.5,
      "vitamin_b12": 0,
      "vitamin_c": 3
    },
    "portions": [
      {
        "name": "2 Tablespoons",
        "grams": 30
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "vada_medu",
    "name": "Medu Vada (Fried)",
    "category": "South Indian",
    "nutrition_per_100g": {
      "calories": 334,
      "protein": 9.5,
      "carbs": 38,
      "fats": 16,
      "iron": 2.5,
      "calcium": 40,
      "fiber": 4.5,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Standard Vada",
        "grams": 45
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "bhujia_haldiram",
    "name": "Aloo Bhujia / Sev (Haldiram Style)",
    "category": "Fast Food",
    "nutrition_per_100g": {
      "calories": 550,
      "protein": 10,
      "carbs": 42,
      "fats": 40,
      "iron": 3.5,
      "calcium": 30,
      "fiber": 3,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Small Bowl (Snack Size)",
        "grams": 30
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "walnuts_raw",
    "name": "Walnuts (Raw)",
    "category": "Fats & Spreads",
    "nutrition_per_100g": {
      "calories": 654,
      "protein": 15.2,
      "carbs": 13.7,
      "fats": 65.2,
      "iron": 2.9,
      "calcium": 98,
      "fiber": 6.7,
      "vitamin_b12": 0,
      "vitamin_c": 1.3
    },
    "portions": [
      {
        "name": "1 Handful (approx 14 halves)",
        "grams": 28
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "olive_oil",
    "name": "Olive Oil (Extra Virgin)",
    "category": "Fats & Spreads",
    "nutrition_per_100g": {
      "calories": 884,
      "protein": 0,
      "carbs": 0,
      "fats": 100,
      "iron": 0.6,
      "calcium": 1,
      "fiber": 0,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Tablespoon",
        "grams": 14
      },
      {
        "name": "1 Teaspoon",
        "grams": 5
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "protein_bar_commercial",
    "name": "Standard Protein Bar (Chocolate/Nut)",
    "category": "Supplements",
    "nutrition_per_100g": {
      "calories": 380,
      "protein": 33,
      "carbs": 38,
      "fats": 12,
      "iron": 4.5,
      "calcium": 250,
      "fiber": 8,
      "vitamin_b12": 1.5,
      "vitamin_c": 5
    },
    "portions": [
      {
        "name": "1 Standard Bar",
        "grams": 60
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "gulab_jamun",
    "name": "Gulab Jamun",
    "category": "Sweets",
    "nutrition_per_100g": {
      "calories": 300,
      "protein": 6.5,
      "carbs": 43,
      "fats": 12,
      "iron": 1,
      "calcium": 100,
      "fiber": 0.5,
      "vitamin_b12": 0.2,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Piece (Standard)",
        "grams": 40
      },
      {
        "name": "2 Pieces",
        "grams": 80
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "rasgulla",
    "name": "Rasgulla",
    "category": "Sweets",
    "nutrition_per_100g": {
      "calories": 186,
      "protein": 5,
      "carbs": 38,
      "fats": 1.5,
      "iron": 0.5,
      "calcium": 150,
      "fiber": 0,
      "vitamin_b12": 0.3,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Piece (Standard)",
        "grams": 50
      },
      {
        "name": "2 Pieces",
        "grams": 100
      }
    ]
  },
  {
    "id": "pasta_cooked",
    "name": "Pasta (Wheat/Semolina, Cooked)",
    "category": "Global Staples",
    "nutrition_per_100g": {
      "calories": 158,
      "protein": 5.8,
      "carbs": 30.9,
      "fats": 0.9,
      "iron": 1.3,
      "calcium": 7,
      "fiber": 1.8,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Medium Bowl",
        "grams": 150
      },
      {
        "name": "1 Full Plate",
        "grams": 250
      },
      {
        "name": "100g",
        "grams": 100
      }
    ]
  },
  {
    "id": "mango_raw",
    "name": "Mango (Ripe/Sweet)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 60,
      "protein": 0.8,
      "carbs": 15,
      "fats": 0.4,
      "iron": 0.2,
      "calcium": 11,
      "fiber": 1.6,
      "vitamin_b12": 0,
      "vitamin_c": 36.4
    },
    "portions": [
      {
        "name": "1 Medium Mango (Edible part)",
        "grams": 150
      },
      {
        "name": "100g",
        "grams": 100
      }
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
