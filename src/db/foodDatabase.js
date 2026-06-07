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
  },
  {
    "id": "pomegranate",
    "name": "Pomegranate (Fresh Seeds)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 83,
      "protein": 1.7,
      "carbs": 18.7,
      "fats": 1.2,
      "iron": 0.3,
      "calcium": 10,
      "fiber": 4,
      "vitamin_b12": 0,
      "vitamin_c": 10.2
    },
    "portions": [
      {
        "name": "1 Medium Bowl (Seeds)",
        "grams": 150
      },
      {
        "name": "1 Medium Fruit",
        "grams": 280
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "grapes",
    "name": "Grapes (Green/Black)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 69,
      "protein": 0.7,
      "carbs": 18.1,
      "fats": 0.2,
      "iron": 0.3,
      "calcium": 10,
      "fiber": 0.9,
      "vitamin_b12": 0,
      "vitamin_c": 3.2
    },
    "portions": [
      {
        "name": "1 Bowl (~30 grapes)",
        "grams": 150
      },
      {
        "name": "1 Grape",
        "grams": 5
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "strawberries",
    "name": "Strawberries (Fresh)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 32,
      "protein": 0.7,
      "carbs": 7.7,
      "fats": 0.3,
      "iron": 0.4,
      "calcium": 16,
      "fiber": 2,
      "vitamin_b12": 0,
      "vitamin_c": 58.8
    },
    "portions": [
      {
        "name": "1 Bowl (~10 berries)",
        "grams": 150
      },
      {
        "name": "1 Large Strawberry",
        "grams": 18
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "guava",
    "name": "Guava (Amrood)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 68,
      "protein": 2.6,
      "carbs": 14.3,
      "fats": 1,
      "iron": 0.3,
      "calcium": 18,
      "fiber": 5.4,
      "vitamin_b12": 0,
      "vitamin_c": 228.3
    },
    "portions": [
      {
        "name": "1 Medium Guava",
        "grams": 120
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "pear",
    "name": "Pear (Nashpati)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 57,
      "protein": 0.4,
      "carbs": 15.2,
      "fats": 0.1,
      "iron": 0.2,
      "calcium": 9,
      "fiber": 3.1,
      "vitamin_b12": 0,
      "vitamin_c": 4.3
    },
    "portions": [
      {
        "name": "1 Medium Pear",
        "grams": 178
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "dates",
    "name": "Dates (Khajur)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 277,
      "protein": 1.8,
      "carbs": 75,
      "fats": 0.2,
      "iron": 0.9,
      "calcium": 64,
      "fiber": 6.7,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Date",
        "grams": 8
      },
      {
        "name": "1 Large Medjool Date",
        "grams": 24
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "cashews",
    "name": "Cashews (Raw)",
    "category": "Fats & Spreads",
    "nutrition_per_100g": {
      "calories": 553,
      "protein": 18.2,
      "carbs": 30.2,
      "fats": 43.8,
      "iron": 6.7,
      "calcium": 37,
      "fiber": 3.3,
      "vitamin_b12": 0,
      "vitamin_c": 0.5
    },
    "portions": [
      {
        "name": "1 Handful (~15 nuts)",
        "grams": 28
      },
      {
        "name": "1 Cashew",
        "grams": 1.5
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "pistachios",
    "name": "Pistachios (Raw, Shelled)",
    "category": "Fats & Spreads",
    "nutrition_per_100g": {
      "calories": 562,
      "protein": 20.2,
      "carbs": 27.2,
      "fats": 45.3,
      "iron": 3.9,
      "calcium": 105,
      "fiber": 10.6,
      "vitamin_b12": 0,
      "vitamin_c": 5.6
    },
    "portions": [
      {
        "name": "1 Handful (~30 kernels)",
        "grams": 28
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "chia_seeds",
    "name": "Chia Seeds",
    "category": "Dairy & Protein",
    "nutrition_per_100g": {
      "calories": 486,
      "protein": 16.5,
      "carbs": 42.1,
      "fats": 30.7,
      "iron": 7.7,
      "calcium": 631,
      "fiber": 34.4,
      "vitamin_b12": 0,
      "vitamin_c": 1.6
    },
    "portions": [
      {
        "name": "1 Tablespoon",
        "grams": 12
      },
      {
        "name": "1 Teaspoon",
        "grams": 4
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "flax_seeds",
    "name": "Flax Seeds (Alsi)",
    "category": "Dairy & Protein",
    "nutrition_per_100g": {
      "calories": 534,
      "protein": 18.3,
      "carbs": 28.9,
      "fats": 42.2,
      "iron": 5.7,
      "calcium": 255,
      "fiber": 27.3,
      "vitamin_b12": 0,
      "vitamin_c": 0.6
    },
    "portions": [
      {
        "name": "1 Tablespoon",
        "grams": 10
      },
      {
        "name": "1 Teaspoon",
        "grams": 3
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "sunflower_seeds",
    "name": "Sunflower Seeds",
    "category": "Dairy & Protein",
    "nutrition_per_100g": {
      "calories": 584,
      "protein": 20.8,
      "carbs": 20,
      "fats": 51.5,
      "iron": 5.3,
      "calcium": 78,
      "fiber": 8.6,
      "vitamin_b12": 0,
      "vitamin_c": 1.4
    },
    "portions": [
      {
        "name": "1 Tablespoon",
        "grams": 10
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "pumpkin_seeds",
    "name": "Pumpkin Seeds",
    "category": "Dairy & Protein",
    "nutrition_per_100g": {
      "calories": 559,
      "protein": 30.2,
      "carbs": 10.7,
      "fats": 49,
      "iron": 8.8,
      "calcium": 46,
      "fiber": 6,
      "vitamin_b12": 0,
      "vitamin_c": 1.9
    },
    "portions": [
      {
        "name": "1 Tablespoon",
        "grams": 10
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "paneer_butter_masala",
    "name": "Paneer Butter Masala",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 229,
      "protein": 9.8,
      "carbs": 6.2,
      "fats": 18.3,
      "iron": 0.8,
      "calcium": 290,
      "fiber": 0.8,
      "vitamin_b12": 0.35,
      "vitamin_c": 2.1
    },
    "portions": [
      {
        "name": "1 Bowl",
        "grams": 200
      },
      {
        "name": "1 Serving",
        "grams": 150
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "kadai_paneer",
    "name": "Kadai Paneer",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 185,
      "protein": 10.2,
      "carbs": 5.5,
      "fats": 13.6,
      "iron": 1.1,
      "calcium": 310,
      "fiber": 1.2,
      "vitamin_b12": 0.3,
      "vitamin_c": 9.5
    },
    "portions": [
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
    "id": "egg_curry",
    "name": "Egg Curry (with Gravy)",
    "category": "Indian",
    "nutrition_per_100g": {
      "calories": 125,
      "protein": 7.2,
      "carbs": 3.8,
      "fats": 9,
      "iron": 1.1,
      "calcium": 38,
      "fiber": 0.6,
      "vitamin_b12": 0.7,
      "vitamin_c": 1.8
    },
    "portions": [
      {
        "name": "1 Bowl (2 Eggs + Gravy)",
        "grams": 200
      },
      {
        "name": "1 Egg with Gravy",
        "grams": 100
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "butter_chicken",
    "name": "Butter Chicken (Murgh Makhani)",
    "category": "Meats",
    "nutrition_per_100g": {
      "calories": 210,
      "protein": 14.5,
      "carbs": 4.8,
      "fats": 15,
      "iron": 1.1,
      "calcium": 22,
      "fiber": 0.5,
      "vitamin_b12": 0.25,
      "vitamin_c": 1.2
    },
    "portions": [
      {
        "name": "1 Bowl",
        "grams": 200
      },
      {
        "name": "1 Serving",
        "grams": 150
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "tandoori_chicken",
    "name": "Tandoori Chicken (Bone-in)",
    "category": "Meats",
    "nutrition_per_100g": {
      "calories": 150,
      "protein": 22,
      "carbs": 1.8,
      "fats": 6,
      "iron": 1.2,
      "calcium": 25,
      "fiber": 0.2,
      "vitamin_b12": 0.4,
      "vitamin_c": 1.5
    },
    "portions": [
      {
        "name": "1 Chicken Leg Quarter",
        "grams": 180
      },
      {
        "name": "1 Chicken Breast Piece",
        "grams": 120
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "fish_tikka",
    "name": "Fish Tikka (Grilled)",
    "category": "Meats",
    "nutrition_per_100g": {
      "calories": 135,
      "protein": 19.5,
      "carbs": 1.5,
      "fats": 5.5,
      "iron": 1,
      "calcium": 30,
      "fiber": 0.1,
      "vitamin_b12": 2.2,
      "vitamin_c": 0.8
    },
    "portions": [
      {
        "name": "1 Plate (~6 pieces)",
        "grams": 180
      },
      {
        "name": "1 Piece",
        "grams": 30
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "mutton_biryani",
    "name": "Mutton Biryani",
    "category": "Indian",
    "nutrition_per_100g": {
      "calories": 180,
      "protein": 9.2,
      "carbs": 21,
      "fats": 6.8,
      "iron": 1.2,
      "calcium": 20,
      "fiber": 1.4,
      "vitamin_b12": 0.6,
      "vitamin_c": 1.5
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
    "id": "vegetable_pulao",
    "name": "Vegetable Pulao",
    "category": "Indian Staples",
    "nutrition_per_100g": {
      "calories": 145,
      "protein": 3.1,
      "carbs": 26.5,
      "fats": 3,
      "iron": 0.8,
      "calcium": 18,
      "fiber": 1.8,
      "vitamin_b12": 0,
      "vitamin_c": 3.5
    },
    "portions": [
      {
        "name": "1 Plate",
        "grams": 250
      },
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
    "id": "jeera_rice",
    "name": "Jeera Rice (Cumin Rice)",
    "category": "Indian Staples",
    "nutrition_per_100g": {
      "calories": 140,
      "protein": 2.8,
      "carbs": 28.5,
      "fats": 1.8,
      "iron": 0.4,
      "calcium": 12,
      "fiber": 0.6,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Plate",
        "grams": 250
      },
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
    "id": "rava_dosa",
    "name": "Rava Dosa",
    "category": "South Indian",
    "nutrition_per_100g": {
      "calories": 195,
      "protein": 4.8,
      "carbs": 34,
      "fats": 4.5,
      "iron": 1.4,
      "calcium": 16,
      "fiber": 1.5,
      "vitamin_b12": 0,
      "vitamin_c": 0.5
    },
    "portions": [
      {
        "name": "1 Medium Dosa",
        "grams": 90
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "uttapam",
    "name": "Uttapam (Onion & Tomato)",
    "category": "South Indian",
    "nutrition_per_100g": {
      "calories": 150,
      "protein": 3.6,
      "carbs": 26.8,
      "fats": 3.2,
      "iron": 0.9,
      "calcium": 15,
      "fiber": 1.8,
      "vitamin_b12": 0,
      "vitamin_c": 5.2
    },
    "portions": [
      {
        "name": "1 Medium Uttapam",
        "grams": 100
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "dhokla",
    "name": "Khaman Dhokla (Steamed)",
    "category": "Breakfast",
    "nutrition_per_100g": {
      "calories": 145,
      "protein": 5.5,
      "carbs": 23,
      "fats": 3.5,
      "iron": 1.8,
      "calcium": 40,
      "fiber": 2.2,
      "vitamin_b12": 0,
      "vitamin_c": 1
    },
    "portions": [
      {
        "name": "1 Piece",
        "grams": 40
      },
      {
        "name": "1 Plate (3 Pieces)",
        "grams": 120
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "khandvi",
    "name": "Khandvi",
    "category": "Breakfast",
    "nutrition_per_100g": {
      "calories": 120,
      "protein": 4.2,
      "carbs": 14.5,
      "fats": 5.2,
      "iron": 1.2,
      "calcium": 35,
      "fiber": 1.8,
      "vitamin_b12": 0,
      "vitamin_c": 0.5
    },
    "portions": [
      {
        "name": "1 Piece",
        "grams": 20
      },
      {
        "name": "1 Plate (5 Pieces)",
        "grams": 100
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "sabudana_khichdi",
    "name": "Sabudana Khichdi",
    "category": "Breakfast",
    "nutrition_per_100g": {
      "calories": 220,
      "protein": 2.8,
      "carbs": 39.5,
      "fats": 5.8,
      "iron": 1,
      "calcium": 22,
      "fiber": 1.2,
      "vitamin_b12": 0,
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
    "id": "methi_thepla",
    "name": "Methi Thepla",
    "category": "Indian Staples",
    "nutrition_per_100g": {
      "calories": 280,
      "protein": 8.5,
      "carbs": 49,
      "fats": 5.8,
      "iron": 4.2,
      "calcium": 80,
      "fiber": 5.5,
      "vitamin_b12": 0,
      "vitamin_c": 6.2
    },
    "portions": [
      {
        "name": "1 Thepla (Medium)",
        "grams": 35
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "missi_roti",
    "name": "Missi Roti (Gram Flour Flatbread)",
    "category": "Indian Staples",
    "nutrition_per_100g": {
      "calories": 295,
      "protein": 11.8,
      "carbs": 48,
      "fats": 6.2,
      "iron": 4.8,
      "calcium": 55,
      "fiber": 6.5,
      "vitamin_b12": 0,
      "vitamin_c": 0.8
    },
    "portions": [
      {
        "name": "1 Medium Roti",
        "grams": 45
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "ragi_roti",
    "name": "Ragi Roti (Finger Millet)",
    "category": "Indian Staples",
    "nutrition_per_100g": {
      "calories": 265,
      "protein": 6.8,
      "carbs": 58.2,
      "fats": 1.8,
      "iron": 3.9,
      "calcium": 340,
      "fiber": 9.8,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Medium Roti",
        "grams": 45
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "garlic_naan",
    "name": "Garlic Butter Naan",
    "category": "Indian Staples",
    "nutrition_per_100g": {
      "calories": 330,
      "protein": 8.5,
      "carbs": 52,
      "fats": 10,
      "iron": 2.2,
      "calcium": 45,
      "fiber": 2,
      "vitamin_b12": 0.1,
      "vitamin_c": 1
    },
    "portions": [
      {
        "name": "1 Naan",
        "grams": 90
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "rumali_roti",
    "name": "Rumali Roti",
    "category": "Indian Staples",
    "nutrition_per_100g": {
      "calories": 285,
      "protein": 8,
      "carbs": 59.5,
      "fats": 1.8,
      "iron": 2.5,
      "calcium": 28,
      "fiber": 2.2,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Medium Roti",
        "grams": 50
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "bhatura",
    "name": "Bhatura (Fried)",
    "category": "Indian Staples",
    "nutrition_per_100g": {
      "calories": 380,
      "protein": 7.8,
      "carbs": 50,
      "fats": 16.5,
      "iron": 1.8,
      "calcium": 35,
      "fiber": 1.8,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Bhatura",
        "grams": 70
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "poori",
    "name": "Poori (Fried)",
    "category": "Indian Staples",
    "nutrition_per_100g": {
      "calories": 350,
      "protein": 7.2,
      "carbs": 47,
      "fats": 15,
      "iron": 2.4,
      "calcium": 28,
      "fiber": 4.2,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Poori",
        "grams": 25
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "chole",
    "name": "Chole (Punjabi Chickpea Curry)",
    "category": "Dals & Legumes",
    "nutrition_per_100g": {
      "calories": 145,
      "protein": 5.8,
      "carbs": 19.5,
      "fats": 5.2,
      "iron": 2.1,
      "calcium": 40,
      "fiber": 5.2,
      "vitamin_b12": 0,
      "vitamin_c": 3.5
    },
    "portions": [
      {
        "name": "1 Bowl",
        "grams": 200
      },
      {
        "name": "1 Katori",
        "grams": 120
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "dal_makhani",
    "name": "Dal Makhani",
    "category": "Dals & Legumes",
    "nutrition_per_100g": {
      "calories": 160,
      "protein": 6.2,
      "carbs": 18,
      "fats": 7.2,
      "iron": 2.2,
      "calcium": 95,
      "fiber": 4.8,
      "vitamin_b12": 0.2,
      "vitamin_c": 1.5
    },
    "portions": [
      {
        "name": "1 Bowl",
        "grams": 200
      },
      {
        "name": "1 Katori",
        "grams": 120
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "baingan_bharta",
    "name": "Baingan Bharta (Mashed Roasted Eggplant)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 75,
      "protein": 1.5,
      "carbs": 7.8,
      "fats": 4.2,
      "iron": 0.8,
      "calcium": 22,
      "fiber": 2.5,
      "vitamin_b12": 0,
      "vitamin_c": 6.5
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
    "id": "lauki_sabzi",
    "name": "Lauki Sabzi (Bottle Gourd Curry)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 4.2,
      "fats": 3.8,
      "iron": 0.5,
      "calcium": 20,
      "fiber": 1.5,
      "vitamin_b12": 0,
      "vitamin_c": 10
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
    "id": "gobi_manchurian",
    "name": "Gobi Manchurian",
    "category": "Fast Food",
    "nutrition_per_100g": {
      "calories": 165,
      "protein": 3.2,
      "carbs": 22,
      "fats": 7.2,
      "iron": 1.2,
      "calcium": 28,
      "fiber": 2,
      "vitamin_b12": 0,
      "vitamin_c": 18
    },
    "portions": [
      {
        "name": "1 Plate",
        "grams": 200
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "veg_noodles",
    "name": "Veg Noodles (Chow Mein)",
    "category": "Fast Food",
    "nutrition_per_100g": {
      "calories": 180,
      "protein": 4,
      "carbs": 31,
      "fats": 4.5,
      "iron": 1.1,
      "calcium": 15,
      "fiber": 1.8,
      "vitamin_b12": 0,
      "vitamin_c": 4
    },
    "portions": [
      {
        "name": "1 Plate",
        "grams": 250
      },
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
    "id": "chicken_fried_rice",
    "name": "Chicken Fried Rice",
    "category": "Meats",
    "nutrition_per_100g": {
      "calories": 185,
      "protein": 9.8,
      "carbs": 26.5,
      "fats": 4.8,
      "iron": 1.2,
      "calcium": 18,
      "fiber": 1,
      "vitamin_b12": 0.25,
      "vitamin_c": 1.5
    },
    "portions": [
      {
        "name": "1 Plate",
        "grams": 300
      },
      {
        "name": "1 Bowl",
        "grams": 180
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "paneer_tikka_roll",
    "name": "Paneer Tikka Roll",
    "category": "Fast Food",
    "nutrition_per_100g": {
      "calories": 240,
      "protein": 10.5,
      "carbs": 26,
      "fats": 10.5,
      "iron": 1.5,
      "calcium": 210,
      "fiber": 2.2,
      "vitamin_b12": 0.3,
      "vitamin_c": 3.5
    },
    "portions": [
      {
        "name": "1 Roll",
        "grams": 180
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "egg_roll",
    "name": "Egg Roll",
    "category": "Fast Food",
    "nutrition_per_100g": {
      "calories": 215,
      "protein": 9,
      "carbs": 23.5,
      "fats": 9.5,
      "iron": 1.4,
      "calcium": 48,
      "fiber": 1.5,
      "vitamin_b12": 0.55,
      "vitamin_c": 1.8
    },
    "portions": [
      {
        "name": "1 Roll",
        "grams": 160
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "buttermilk",
    "name": "Buttermilk (Salted Chaas)",
    "category": "Dairy",
    "nutrition_per_100g": {
      "calories": 22,
      "protein": 1.6,
      "carbs": 2.2,
      "fats": 0.8,
      "iron": 0.05,
      "calcium": 70,
      "fiber": 0,
      "vitamin_b12": 0.2,
      "vitamin_c": 0.5
    },
    "portions": [
      {
        "name": "1 Glass",
        "grams": 250
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "sweet_lassi",
    "name": "Sweet Lassi",
    "category": "Dairy",
    "nutrition_per_100g": {
      "calories": 95,
      "protein": 2.5,
      "carbs": 14,
      "fats": 3.2,
      "iron": 0.08,
      "calcium": 95,
      "fiber": 0,
      "vitamin_b12": 0.3,
      "vitamin_c": 0.8
    },
    "portions": [
      {
        "name": "1 Glass",
        "grams": 250
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "coconut_water",
    "name": "Coconut Water (Nariyal Paani)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 19,
      "protein": 0.7,
      "carbs": 3.7,
      "fats": 0.2,
      "iron": 0.3,
      "calcium": 24,
      "fiber": 1.1,
      "vitamin_b12": 0,
      "vitamin_c": 2.4
    },
    "portions": [
      {
        "name": "1 Medium Coconut",
        "grams": 300
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "lemonade",
    "name": "Lemonade (Sweetened Nimbu Pani)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 40,
      "protein": 0.1,
      "carbs": 10.2,
      "fats": 0,
      "iron": 0.05,
      "calcium": 4,
      "fiber": 0.1,
      "vitamin_b12": 0,
      "vitamin_c": 8.5
    },
    "portions": [
      {
        "name": "1 Glass",
        "grams": 250
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "roasted_chana",
    "name": "Roasted Chana (Snack)",
    "category": "Breakfast",
    "nutrition_per_100g": {
      "calories": 364,
      "protein": 18.6,
      "carbs": 58,
      "fats": 5.5,
      "iron": 5.2,
      "calcium": 55,
      "fiber": 16.8,
      "vitamin_b12": 0,
      "vitamin_c": 0.5
    },
    "portions": [
      {
        "name": "1 Handful",
        "grams": 25
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "makhana",
    "name": "Roasted Makhana (Lotus Seeds)",
    "category": "Breakfast",
    "nutrition_per_100g": {
      "calories": 350,
      "protein": 9.7,
      "carbs": 76.9,
      "fats": 0.1,
      "iron": 1.4,
      "calcium": 60,
      "fiber": 14.5,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Bowl",
        "grams": 25
      },
      {
        "name": "1 Handful",
        "grams": 10
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "sooji_halwa",
    "name": "Sooji Halwa (Sheera)",
    "category": "Sweets",
    "nutrition_per_100g": {
      "calories": 285,
      "protein": 3.5,
      "carbs": 45,
      "fats": 10.5,
      "iron": 1.2,
      "calcium": 22,
      "fiber": 1,
      "vitamin_b12": 0,
      "vitamin_c": 0
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
    "id": "kheer",
    "name": "Kheer (Rice Pudding)",
    "category": "Sweets",
    "nutrition_per_100g": {
      "calories": 125,
      "protein": 3.2,
      "carbs": 19.5,
      "fats": 3.8,
      "iron": 0.2,
      "calcium": 110,
      "fiber": 0.2,
      "vitamin_b12": 0.35,
      "vitamin_c": 0.5
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
    "id": "kiwi",
    "name": "Kiwi (Fresh)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 61,
      "protein": 1.1,
      "carbs": 14.7,
      "fats": 0.5,
      "iron": 0.3,
      "calcium": 34,
      "fiber": 3,
      "vitamin_b12": 0,
      "vitamin_c": 92.7
    },
    "portions": [
      {
        "name": "1 Medium Kiwi",
        "grams": 75
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "pineapple",
    "name": "Pineapple (Fresh Chunks)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 50,
      "protein": 0.5,
      "carbs": 13.1,
      "fats": 0.1,
      "iron": 0.3,
      "calcium": 13,
      "fiber": 1.4,
      "vitamin_b12": 0,
      "vitamin_c": 47.8
    },
    "portions": [
      {
        "name": "1 Cup (Chunks)",
        "grams": 165
      },
      {
        "name": "1 Slice",
        "grams": 85
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "pomegranate_juice",
    "name": "Pomegranate Juice (Fresh, Raw)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 54,
      "protein": 0.2,
      "carbs": 13.1,
      "fats": 0.3,
      "iron": 0.1,
      "calcium": 11,
      "fiber": 0.1,
      "vitamin_b12": 0,
      "vitamin_c": 0.1
    },
    "portions": [
      {
        "name": "1 Glass",
        "grams": 250
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "orange_juice",
    "name": "Orange Juice (Fresh, Raw)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 45,
      "protein": 0.7,
      "carbs": 10.4,
      "fats": 0.2,
      "iron": 0.2,
      "calcium": 11,
      "fiber": 0.2,
      "vitamin_b12": 0,
      "vitamin_c": 50
    },
    "portions": [
      {
        "name": "1 Glass",
        "grams": 250
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "watermelon_juice",
    "name": "Watermelon Juice (Fresh, Raw)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 30,
      "protein": 0.4,
      "carbs": 7.5,
      "fats": 0.1,
      "iron": 0.2,
      "calcium": 7,
      "fiber": 0.2,
      "vitamin_b12": 0,
      "vitamin_c": 8.1
    },
    "portions": [
      {
        "name": "1 Glass",
        "grams": 250
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "lemon_juice",
    "name": "Lemon Juice (Freshly Squeezed)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 22,
      "protein": 0.4,
      "carbs": 6.9,
      "fats": 0.2,
      "iron": 0.1,
      "calcium": 6,
      "fiber": 0.3,
      "vitamin_b12": 0,
      "vitamin_c": 38.7
    },
    "portions": [
      {
        "name": "1 Tablespoon",
        "grams": 15
      },
      {
        "name": "Juice of 1 Lemon",
        "grams": 45
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "carrot_raw",
    "name": "Carrot (Raw)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 41,
      "protein": 0.9,
      "carbs": 9.6,
      "fats": 0.2,
      "iron": 0.3,
      "calcium": 33,
      "fiber": 2.8,
      "vitamin_b12": 0,
      "vitamin_c": 5.9
    },
    "portions": [
      {
        "name": "1 Medium Carrot",
        "grams": 60
      },
      {
        "name": "1 Cup (Chopped)",
        "grams": 120
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "cucumber_raw",
    "name": "Cucumber (Raw, Peeled)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 15,
      "protein": 0.7,
      "carbs": 3.6,
      "fats": 0.1,
      "iron": 0.3,
      "calcium": 16,
      "fiber": 0.5,
      "vitamin_b12": 0,
      "vitamin_c": 2.8
    },
    "portions": [
      {
        "name": "1 Medium Cucumber",
        "grams": 200
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "tomato_raw",
    "name": "Tomato (Raw)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 18,
      "protein": 0.9,
      "carbs": 3.9,
      "fats": 0.2,
      "iron": 0.3,
      "calcium": 10,
      "fiber": 1.2,
      "vitamin_b12": 0,
      "vitamin_c": 13.7
    },
    "portions": [
      {
        "name": "1 Medium Tomato",
        "grams": 120
      },
      {
        "name": "1 Small Tomato",
        "grams": 80
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "onion_raw",
    "name": "Onion (Raw)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 40,
      "protein": 1.1,
      "carbs": 9.3,
      "fats": 0.1,
      "iron": 0.2,
      "calcium": 23,
      "fiber": 1.7,
      "vitamin_b12": 0,
      "vitamin_c": 7.4
    },
    "portions": [
      {
        "name": "1 Medium Onion",
        "grams": 110
      },
      {
        "name": "1 Tablespoon (Chopped)",
        "grams": 10
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "garlic_raw",
    "name": "Garlic (Raw Cloves)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 149,
      "protein": 6.4,
      "carbs": 33.1,
      "fats": 0.5,
      "iron": 1.7,
      "calcium": 181,
      "fiber": 2.1,
      "vitamin_b12": 0,
      "vitamin_c": 31.2
    },
    "portions": [
      {
        "name": "1 Clove",
        "grams": 3
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "ginger_raw",
    "name": "Ginger (Raw Root)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 80,
      "protein": 1.8,
      "carbs": 17.8,
      "fats": 0.8,
      "iron": 0.6,
      "calcium": 16,
      "fiber": 2,
      "vitamin_b12": 0,
      "vitamin_c": 5
    },
    "portions": [
      {
        "name": "1 Slice (approx 1\")",
        "grams": 5
      },
      {
        "name": "1 Teaspoon (Grated)",
        "grams": 3
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "green_chilli",
    "name": "Green Chilli (Raw)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 40,
      "protein": 2,
      "carbs": 9,
      "fats": 0.2,
      "iron": 1,
      "calcium": 18,
      "fiber": 1.5,
      "vitamin_b12": 0,
      "vitamin_c": 242
    },
    "portions": [
      {
        "name": "1 Chilli",
        "grams": 5
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "coriander_leaves",
    "name": "Coriander Leaves (Cilantro)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 23,
      "protein": 2.1,
      "carbs": 3.7,
      "fats": 0.5,
      "iron": 1.8,
      "calcium": 67,
      "fiber": 2.8,
      "vitamin_b12": 0,
      "vitamin_c": 27
    },
    "portions": [
      {
        "name": "1 Handful",
        "grams": 15
      },
      {
        "name": "1 Tablespoon (Chopped)",
        "grams": 3
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "mint_leaves",
    "name": "Mint Leaves (Pudina)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 70,
      "protein": 3.8,
      "carbs": 14.8,
      "fats": 0.9,
      "iron": 5.1,
      "calcium": 243,
      "fiber": 8,
      "vitamin_b12": 0,
      "vitamin_c": 31.8
    },
    "portions": [
      {
        "name": "1 Handful",
        "grams": 15
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "mushroom_raw",
    "name": "Mushroom (Raw Button)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 22,
      "protein": 3.1,
      "carbs": 3.3,
      "fats": 0.3,
      "iron": 0.5,
      "calcium": 3,
      "fiber": 1,
      "vitamin_b12": 0.04,
      "vitamin_c": 2.1
    },
    "portions": [
      {
        "name": "1 Cup (Sliced)",
        "grams": 70
      },
      {
        "name": "1 Medium Mushroom",
        "grams": 18
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "cauliflower_raw",
    "name": "Cauliflower (Raw Gobi)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 25,
      "protein": 1.9,
      "carbs": 5,
      "fats": 0.3,
      "iron": 0.4,
      "calcium": 22,
      "fiber": 2,
      "vitamin_b12": 0,
      "vitamin_c": 48.2
    },
    "portions": [
      {
        "name": "1 Cup (Florets)",
        "grams": 100
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "cabbage_raw",
    "name": "Cabbage (Raw)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 25,
      "protein": 1.3,
      "carbs": 5.8,
      "fats": 0.1,
      "iron": 0.5,
      "calcium": 40,
      "fiber": 2.5,
      "vitamin_b12": 0,
      "vitamin_c": 36.6
    },
    "portions": [
      {
        "name": "1 Cup (Shredded)",
        "grams": 70
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "green_peas_boiled",
    "name": "Green Peas (Boiled)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 84,
      "protein": 5.4,
      "carbs": 15.6,
      "fats": 0.2,
      "iron": 1.5,
      "calcium": 27,
      "fiber": 5.5,
      "vitamin_b12": 0,
      "vitamin_c": 14.2
    },
    "portions": [
      {
        "name": "1 Cup",
        "grams": 160
      },
      {
        "name": "1 Small Bowl",
        "grams": 100
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "okra_plain_boiled",
    "name": "Okra / Bhindi (Boiled, Plain)",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 33,
      "protein": 1.9,
      "carbs": 7.5,
      "fats": 0.2,
      "iron": 0.6,
      "calcium": 82,
      "fiber": 3.2,
      "vitamin_b12": 0,
      "vitamin_c": 23
    },
    "portions": [
      {
        "name": "1 Cup (Sliced)",
        "grams": 100
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "paneer_tikka_grilled",
    "name": "Paneer Tikka (Grilled Dish)",
    "category": "Dairy & Protein",
    "nutrition_per_100g": {
      "calories": 260,
      "protein": 17.5,
      "carbs": 3.5,
      "fats": 19.5,
      "iron": 0.3,
      "calcium": 450,
      "fiber": 0.5,
      "vitamin_b12": 0.7,
      "vitamin_c": 1.5
    },
    "portions": [
      {
        "name": "1 Plate (~6 cubes + veg)",
        "grams": 180
      },
      {
        "name": "1 Cube",
        "grams": 25
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "chicken_tikka_grilled",
    "name": "Chicken Tikka (Grilled / Boneless)",
    "category": "Meats",
    "nutrition_per_100g": {
      "calories": 160,
      "protein": 24.5,
      "carbs": 1.5,
      "fats": 6.2,
      "iron": 1.1,
      "calcium": 20,
      "fiber": 0.2,
      "vitamin_b12": 0.35,
      "vitamin_c": 1
    },
    "portions": [
      {
        "name": "1 Plate (~6 pieces)",
        "grams": 150
      },
      {
        "name": "1 Piece",
        "grams": 25
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "chicken_seekh_kabab",
    "name": "Chicken Seekh Kabab",
    "category": "Meats",
    "nutrition_per_100g": {
      "calories": 180,
      "protein": 19,
      "carbs": 2.2,
      "fats": 10.5,
      "iron": 1.3,
      "calcium": 22,
      "fiber": 0.4,
      "vitamin_b12": 0.4,
      "vitamin_c": 0.5
    },
    "portions": [
      {
        "name": "1 Seekh Kabab (Standard)",
        "grams": 60
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "mutton_seekh_kabab",
    "name": "Mutton Seekh Kabab",
    "category": "Meats",
    "nutrition_per_100g": {
      "calories": 220,
      "protein": 18,
      "carbs": 2.5,
      "fats": 15,
      "iron": 2.1,
      "calcium": 24,
      "fiber": 0.4,
      "vitamin_b12": 1.8,
      "vitamin_c": 0.5
    },
    "portions": [
      {
        "name": "1 Seekh Kabab (Standard)",
        "grams": 60
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "fried_fish",
    "name": "Fried Fish (Batter Fried)",
    "category": "Meats",
    "nutrition_per_100g": {
      "calories": 230,
      "protein": 17,
      "carbs": 8,
      "fats": 14,
      "iron": 0.9,
      "calcium": 25,
      "fiber": 0.4,
      "vitamin_b12": 1.2,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Standard Fillet",
        "grams": 120
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "steamed_fish",
    "name": "Steamed Fish (White Fish)",
    "category": "Meats",
    "nutrition_per_100g": {
      "calories": 110,
      "protein": 22,
      "carbs": 0,
      "fats": 2.5,
      "iron": 0.5,
      "calcium": 15,
      "fiber": 0,
      "vitamin_b12": 1.8,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Standard Fillet",
        "grams": 120
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "egg_white_omelette",
    "name": "Egg White Omelette (3 Eggs)",
    "category": "Breakfast",
    "nutrition_per_100g": {
      "calories": 110,
      "protein": 15,
      "carbs": 1.5,
      "fats": 4.8,
      "iron": 0.2,
      "calcium": 12,
      "fiber": 0.2,
      "vitamin_b12": 0.2,
      "vitamin_c": 0.5
    },
    "portions": [
      {
        "name": "Omelette (3 Egg Whites)",
        "grams": 110
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "scrambled_eggs_plain",
    "name": "Scrambled Eggs (Plain, 2 Eggs)",
    "category": "Breakfast",
    "nutrition_per_100g": {
      "calories": 165,
      "protein": 12,
      "carbs": 1.2,
      "fats": 12.5,
      "iron": 1.5,
      "calcium": 52,
      "fiber": 0,
      "vitamin_b12": 1.1,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Serving (2 Eggs)",
        "grams": 100
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "poached_egg",
    "name": "Poached Egg",
    "category": "Breakfast",
    "nutrition_per_100g": {
      "calories": 143,
      "protein": 12.5,
      "carbs": 0.7,
      "fats": 9.5,
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
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "fried_egg_sunny",
    "name": "Fried Egg (Sunny Side Up)",
    "category": "Breakfast",
    "nutrition_per_100g": {
      "calories": 185,
      "protein": 12.2,
      "carbs": 0.8,
      "fats": 14.5,
      "iron": 1.2,
      "calcium": 48,
      "fiber": 0,
      "vitamin_b12": 1,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Large Fried Egg",
        "grams": 55
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "greek_salad",
    "name": "Greek Salad (with Feta)",
    "category": "Fruits",
    "nutrition_per_100g": {
      "calories": 90,
      "protein": 2.2,
      "carbs": 5.5,
      "fats": 6.8,
      "iron": 0.8,
      "calcium": 85,
      "fiber": 1.5,
      "vitamin_b12": 0.15,
      "vitamin_c": 12
    },
    "portions": [
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
    "id": "caesar_salad_chicken",
    "name": "Caesar Salad (with Grilled Chicken)",
    "category": "Meats",
    "nutrition_per_100g": {
      "calories": 145,
      "protein": 12.5,
      "carbs": 4.8,
      "fats": 8.5,
      "iron": 1.1,
      "calcium": 90,
      "fiber": 1.2,
      "vitamin_b12": 0.25,
      "vitamin_c": 6.2
    },
    "portions": [
      {
        "name": "1 Bowl",
        "grams": 250
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "coleslaw_salad",
    "name": "Coleslaw Salad",
    "category": "Vegetables & Sabzi",
    "nutrition_per_100g": {
      "calories": 140,
      "protein": 1.1,
      "carbs": 9.5,
      "fats": 11.2,
      "iron": 0.3,
      "calcium": 30,
      "fiber": 1.8,
      "vitamin_b12": 0,
      "vitamin_c": 22
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
    "id": "hummus",
    "name": "Hummus Dip",
    "category": "Fats & Spreads",
    "nutrition_per_100g": {
      "calories": 166,
      "protein": 7.9,
      "carbs": 14.3,
      "fats": 9.6,
      "iron": 2.4,
      "calcium": 38,
      "fiber": 6,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Tablespoon",
        "grams": 15
      },
      {
        "name": "1 Bowl / Serving",
        "grams": 100
      }
    ]
  },
  {
    "id": "falafel",
    "name": "Falafel (Fried Chickpea Balls)",
    "category": "Fast Food",
    "nutrition_per_100g": {
      "calories": 330,
      "protein": 13.3,
      "carbs": 31.8,
      "fats": 17.8,
      "iron": 3.4,
      "calcium": 54,
      "fiber": 4.9,
      "vitamin_b12": 0,
      "vitamin_c": 1.5
    },
    "portions": [
      {
        "name": "1 Patty/Ball",
        "grams": 25
      },
      {
        "name": "1 Serving (4 balls)",
        "grams": 100
      }
    ]
  },
  {
    "id": "pita_bread_wheat",
    "name": "Pita Bread (Whole Wheat)",
    "category": "Global Staples",
    "nutrition_per_100g": {
      "calories": 275,
      "protein": 9,
      "carbs": 55,
      "fats": 1.5,
      "iron": 2.4,
      "calcium": 80,
      "fiber": 6,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Pita Bread (6\" dia)",
        "grams": 57
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "tortilla_corn",
    "name": "Tortilla (Corn)",
    "category": "Global Staples",
    "nutrition_per_100g": {
      "calories": 218,
      "protein": 5.7,
      "carbs": 44.5,
      "fats": 2.8,
      "iron": 1.2,
      "calcium": 160,
      "fiber": 6.3,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Tortilla (6\" dia)",
        "grams": 28
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "tortilla_flour",
    "name": "Tortilla (Flour)",
    "category": "Global Staples",
    "nutrition_per_100g": {
      "calories": 300,
      "protein": 8,
      "carbs": 50,
      "fats": 7.5,
      "iron": 3.1,
      "calcium": 140,
      "fiber": 2.2,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Tortilla (8\" dia)",
        "grams": 45
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "white_bread_slice",
    "name": "White Bread (Slice)",
    "category": "Global Staples",
    "nutrition_per_100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 49,
      "fats": 3.2,
      "iron": 2.7,
      "calcium": 140,
      "fiber": 2.3,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Slice",
        "grams": 25
      },
      {
        "name": "2 Slices",
        "grams": 50
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "multigrain_bread_slice",
    "name": "Multigrain Bread (Slice)",
    "category": "Global Staples",
    "nutrition_per_100g": {
      "calories": 250,
      "protein": 11.5,
      "carbs": 43,
      "fats": 4,
      "iron": 2.6,
      "calcium": 100,
      "fiber": 6.5,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Slice",
        "grams": 28
      },
      {
        "name": "2 Slices",
        "grams": 56
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "garlic_bread",
    "name": "Garlic Bread (Slice)",
    "category": "Fast Food",
    "nutrition_per_100g": {
      "calories": 350,
      "protein": 8.8,
      "carbs": 45,
      "fats": 15,
      "iron": 2.2,
      "calcium": 90,
      "fiber": 2.1,
      "vitamin_b12": 0.1,
      "vitamin_c": 0.5
    },
    "portions": [
      {
        "name": "1 Slice",
        "grams": 40
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "croissant_plain",
    "name": "Croissant (Plain Butter)",
    "category": "Fast Food",
    "nutrition_per_100g": {
      "calories": 406,
      "protein": 8.2,
      "carbs": 45.8,
      "fats": 21,
      "iron": 2,
      "calcium": 37,
      "fiber": 2.6,
      "vitamin_b12": 0.15,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Medium Croissant",
        "grams": 57
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "pancake_plain",
    "name": "Pancake (Plain)",
    "category": "Breakfast",
    "nutrition_per_100g": {
      "calories": 227,
      "protein": 6.4,
      "carbs": 28.3,
      "fats": 9.7,
      "iron": 1.8,
      "calcium": 140,
      "fiber": 0.8,
      "vitamin_b12": 0.2,
      "vitamin_c": 0.2
    },
    "portions": [
      {
        "name": "1 Medium Pancake",
        "grams": 40
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "waffle_plain",
    "name": "Waffle (Plain)",
    "category": "Breakfast",
    "nutrition_per_100g": {
      "calories": 291,
      "protein": 7.9,
      "carbs": 32.9,
      "fats": 14,
      "iron": 2.4,
      "calcium": 80,
      "fiber": 1,
      "vitamin_b12": 0.25,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Waffle (Standard)",
        "grams": 75
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "maple_syrup",
    "name": "Maple Syrup",
    "category": "Sweets",
    "nutrition_per_100g": {
      "calories": 260,
      "protein": 0,
      "carbs": 67,
      "fats": 0.1,
      "iron": 0.1,
      "calcium": 102,
      "fiber": 0,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Tablespoon",
        "grams": 20
      },
      {
        "name": "1 Teaspoon",
        "grams": 7
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "honey",
    "name": "Honey (Pure)",
    "category": "Sweets",
    "nutrition_per_100g": {
      "calories": 304,
      "protein": 0.3,
      "carbs": 82.4,
      "fats": 0,
      "iron": 0.4,
      "calcium": 6,
      "fiber": 0.2,
      "vitamin_b12": 0,
      "vitamin_c": 0.5
    },
    "portions": [
      {
        "name": "1 Tablespoon",
        "grams": 21
      },
      {
        "name": "1 Teaspoon",
        "grams": 7
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "jaggery",
    "name": "Jaggery (Gur)",
    "category": "Sweets",
    "nutrition_per_100g": {
      "calories": 383,
      "protein": 0.4,
      "carbs": 95,
      "fats": 0.1,
      "iron": 2.6,
      "calcium": 80,
      "fiber": 0,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Piece (Small)",
        "grams": 10
      },
      {
        "name": "1 Tablespoon (Grated)",
        "grams": 15
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "sugar_white",
    "name": "Sugar (White Granulated)",
    "category": "Sweets",
    "nutrition_per_100g": {
      "calories": 387,
      "protein": 0,
      "carbs": 100,
      "fats": 0,
      "iron": 0.05,
      "calcium": 1,
      "fiber": 0,
      "vitamin_b12": 0,
      "vitamin_c": 0
    },
    "portions": [
      {
        "name": "1 Teaspoon",
        "grams": 4
      },
      {
        "name": "1 Tablespoon",
        "grams": 12
      },
      {
        "name": "100 grams",
        "grams": 100
      }
    ]
  },
  {
    "id": "ghee",
    "name": "Ghee (Clarified Butter)",
    "category": "Fats & Spreads",
    "nutrition_per_100g": {
      "calories": 884,
      "protein": 0,
      "carbs": 0,
      "fats": 99.5,
      "iron": 0,
      "calcium": 0,
      "fiber": 0,
      "vitamin_b12": 0,
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
    "id": "coconut_oil",
    "name": "Coconut Oil",
    "category": "Fats & Spreads",
    "nutrition_per_100g": {
      "calories": 862,
      "protein": 0,
      "carbs": 0,
      "fats": 100,
      "iron": 0.05,
      "calcium": 1,
      "fiber": 0,
      "vitamin_b12": 0,
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
  {"id":"apple_raw","name":"Apple (Raw)","category":"Fruits","nutrition_per_100g":{"calories":52,"protein":0.3,"carbs":13.8,"fats":0.2,"fiber":2.4,"iron":0.1,"calcium":6,"b12":0,"vitC":4.6},"portions":[{"portion_name":"1 Medium Apple","grams":182},{"portion_name":"100g","grams":100}]},
  {"id":"banana_raw","name":"Banana (Raw)","category":"Fruits","nutrition_per_100g":{"calories":89,"protein":1.1,"carbs":22.8,"fats":0.3,"fiber":2.6,"iron":0.3,"calcium":5,"b12":0,"vitC":8.7},"portions":[{"portion_name":"1 Medium Banana","grams":118},{"portion_name":"100g","grams":100}]},
  {"id":"orange_raw","name":"Orange (Raw)","category":"Fruits","nutrition_per_100g":{"calories":47,"protein":0.9,"carbs":11.8,"fats":0.1,"fiber":2.4,"iron":0.1,"calcium":40,"b12":0,"vitC":53.2},"portions":[{"portion_name":"1 Medium Orange","grams":131},{"portion_name":"100g","grams":100}]},
  {"id":"grapes_raw","name":"Grapes (Raw)","category":"Fruits","nutrition_per_100g":{"calories":69,"protein":0.7,"carbs":18.1,"fats":0.2,"fiber":0.9,"iron":0.4,"calcium":10,"b12":0,"vitC":3.2},"portions":[{"portion_name":"1 Cup","grams":151},{"portion_name":"100g","grams":100}]},
  {"id":"watermelon_raw","name":"Watermelon (Raw)","category":"Fruits","nutrition_per_100g":{"calories":30,"protein":0.6,"carbs":7.6,"fats":0.2,"fiber":0.4,"iron":0.2,"calcium":7,"b12":0,"vitC":8.1},"portions":[{"portion_name":"1 Cup Diced","grams":152},{"portion_name":"100g","grams":100}]},
  {"id":"mango_raw","name":"Mango (Raw)","category":"Fruits","nutrition_per_100g":{"calories":60,"protein":0.8,"carbs":15,"fats":0.4,"fiber":1.6,"iron":0.2,"calcium":11,"b12":0,"vitC":36.4},"portions":[{"portion_name":"1 Cup Sliced","grams":165},{"portion_name":"100g","grams":100}]},
  {"id":"broccoli_raw","name":"Broccoli (Raw)","category":"Vegetables","nutrition_per_100g":{"calories":34,"protein":2.8,"carbs":6.6,"fats":0.4,"fiber":2.6,"iron":0.7,"calcium":47,"b12":0,"vitC":89.2},"portions":[{"portion_name":"1 Cup Chopped","grams":91},{"portion_name":"100g","grams":100}]},
  {"id":"spinach_raw","name":"Spinach (Raw)","category":"Vegetables","nutrition_per_100g":{"calories":23,"protein":2.9,"carbs":3.6,"fats":0.4,"fiber":2.2,"iron":2.7,"calcium":99,"b12":0,"vitC":28.1},"portions":[{"portion_name":"1 Cup","grams":30},{"portion_name":"100g","grams":100}]},
  {"id":"carrot_raw","name":"Carrot (Raw)","category":"Vegetables","nutrition_per_100g":{"calories":41,"protein":0.9,"carbs":9.6,"fats":0.2,"fiber":2.8,"iron":0.3,"calcium":33,"b12":0,"vitC":5.9},"portions":[{"portion_name":"1 Medium Carrot","grams":61},{"portion_name":"100g","grams":100}]},
  {"id":"potato_raw","name":"Potato (Raw)","category":"Vegetables","nutrition_per_100g":{"calories":77,"protein":2,"carbs":17.5,"fats":0.1,"fiber":2.2,"iron":0.8,"calcium":12,"b12":0,"vitC":19.7},"portions":[{"portion_name":"1 Medium Potato","grams":213},{"portion_name":"100g","grams":100}]},
  {"id":"onion_raw","name":"Onion (Raw)","category":"Vegetables","nutrition_per_100g":{"calories":40,"protein":1.1,"carbs":9.3,"fats":0.1,"fiber":1.7,"iron":0.2,"calcium":23,"b12":0,"vitC":7.4},"portions":[{"portion_name":"1 Medium Onion","grams":110},{"portion_name":"100g","grams":100}]},
  {"id":"tomato_raw","name":"Tomato (Raw)","category":"Vegetables","nutrition_per_100g":{"calories":18,"protein":0.9,"carbs":3.9,"fats":0.2,"fiber":1.2,"iron":0.3,"calcium":10,"b12":0,"vitC":13.7},"portions":[{"portion_name":"1 Medium Tomato","grams":123},{"portion_name":"100g","grams":100}]},
  {"id":"milk_whole","name":"Milk (Whole, 3.25%)","category":"Dairy & Eggs","nutrition_per_100g":{"calories":61,"protein":3.2,"carbs":4.8,"fats":3.3,"fiber":0,"iron":0,"calcium":113,"b12":0.4,"vitC":0},"portions":[{"portion_name":"1 Cup","grams":244},{"portion_name":"100ml","grams":100}]},
  {"id":"milk_skim","name":"Milk (Skim)","category":"Dairy & Eggs","nutrition_per_100g":{"calories":34,"protein":3.4,"carbs":5,"fats":0.1,"fiber":0,"iron":0,"calcium":122,"b12":0.4,"vitC":0},"portions":[{"portion_name":"1 Cup","grams":245},{"portion_name":"100ml","grams":100}]},
  {"id":"yogurt_plain","name":"Yogurt (Plain, Whole Milk)","category":"Dairy & Eggs","nutrition_per_100g":{"calories":61,"protein":3.5,"carbs":4.7,"fats":3.3,"fiber":0,"iron":0.1,"calcium":121,"b12":0.4,"vitC":0.5},"portions":[{"portion_name":"1 Cup","grams":245},{"portion_name":"100g","grams":100}]},
  {"id":"cheese_cheddar","name":"Cheddar Cheese","category":"Dairy & Eggs","nutrition_per_100g":{"calories":402,"protein":25,"carbs":1.3,"fats":33.1,"fiber":0,"iron":0.7,"calcium":721,"b12":0.8,"vitC":0},"portions":[{"portion_name":"1 Slice","grams":28},{"portion_name":"100g","grams":100}]},
  {"id":"egg_boiled","name":"Egg (Hard Boiled)","category":"Dairy & Eggs","nutrition_per_100g":{"calories":155,"protein":12.6,"carbs":1.1,"fats":10.6,"fiber":0,"iron":1.2,"calcium":50,"b12":1.1,"vitC":0},"portions":[{"portion_name":"1 Large Egg","grams":50},{"portion_name":"100g","grams":100}]},
  {"id":"chicken_breast_raw","name":"Chicken Breast (Raw, Boneless)","category":"Proteins","nutrition_per_100g":{"calories":120,"protein":22.5,"carbs":0,"fats":2.6,"fiber":0,"iron":0.4,"calcium":11,"b12":0.2,"vitC":0},"portions":[{"portion_name":"1 Breast","grams":200},{"portion_name":"100g","grams":100}]},
  {"id":"salmon_raw","name":"Salmon (Raw)","category":"Proteins","nutrition_per_100g":{"calories":208,"protein":20.4,"carbs":0,"fats":13.4,"fiber":0,"iron":0.3,"calcium":9,"b12":3.2,"vitC":0},"portions":[{"portion_name":"1 Fillet","grams":170},{"portion_name":"100g","grams":100}]},
  {"id":"beef_steak_raw","name":"Beef Steak (Raw)","category":"Proteins","nutrition_per_100g":{"calories":271,"protein":19.4,"carbs":0,"fats":21.8,"fiber":0,"iron":2,"calcium":11,"b12":2.6,"vitC":0},"portions":[{"portion_name":"1 Steak","grams":250},{"portion_name":"100g","grams":100}]},
  {"id":"tofu_firm","name":"Tofu (Firm)","category":"Proteins","nutrition_per_100g":{"calories":144,"protein":15.8,"carbs":2.8,"fats":8.7,"fiber":2.3,"iron":2.7,"calcium":683,"b12":0,"vitC":0},"portions":[{"portion_name":"1/2 Cup","grams":126},{"portion_name":"100g","grams":100}]},
  {"id":"paneer_raw","name":"Paneer (Raw)","category":"Proteins","nutrition_per_100g":{"calories":296,"protein":18.3,"carbs":3.4,"fats":23.3,"fiber":0,"iron":0.1,"calcium":480,"b12":0.8,"vitC":0},"portions":[{"portion_name":"1 Cup Slices","grams":122},{"portion_name":"100g","grams":100}]},
  {"id":"almonds_raw","name":"Almonds (Raw)","category":"Nuts & Seeds","nutrition_per_100g":{"calories":579,"protein":21.2,"carbs":21.6,"fats":49.9,"fiber":12.5,"iron":3.7,"calcium":269,"b12":0,"vitC":0},"portions":[{"portion_name":"1 Ounce (23 almonds)","grams":28},{"portion_name":"100g","grams":100}]},
  {"id":"walnuts_raw","name":"Walnuts (Raw)","category":"Nuts & Seeds","nutrition_per_100g":{"calories":654,"protein":15.2,"carbs":13.7,"fats":65.2,"fiber":6.7,"iron":2.9,"calcium":98,"b12":0,"vitC":1.3},"portions":[{"portion_name":"1 Ounce (14 halves)","grams":28},{"portion_name":"100g","grams":100}]},
  {"id":"peanuts_raw","name":"Peanuts (Raw)","category":"Nuts & Seeds","nutrition_per_100g":{"calories":567,"protein":25.8,"carbs":16.1,"fats":49.2,"fiber":8.5,"iron":4.6,"calcium":92,"b12":0,"vitC":0},"portions":[{"portion_name":"1 Ounce","grams":28},{"portion_name":"100g","grams":100}]},
  {"id":"chia_seeds","name":"Chia Seeds","category":"Nuts & Seeds","nutrition_per_100g":{"calories":486,"protein":16.5,"carbs":42.1,"fats":30.7,"fiber":34.4,"iron":7.7,"calcium":631,"b12":0,"vitC":1.6},"portions":[{"portion_name":"1 Tbsp","grams":10},{"portion_name":"100g","grams":100}]},
  {"id":"flax_seeds","name":"Flax Seeds","category":"Nuts & Seeds","nutrition_per_100g":{"calories":534,"protein":18.3,"carbs":28.9,"fats":42.2,"fiber":27.3,"iron":5.7,"calcium":255,"b12":0,"vitC":0.6},"portions":[{"portion_name":"1 Tbsp","grams":10},{"portion_name":"100g","grams":100}]},
  {"id":"oats_rolled","name":"Rolled Oats (Raw)","category":"Grains & Pasta","nutrition_per_100g":{"calories":389,"protein":16.9,"carbs":66.3,"fats":6.9,"fiber":10.6,"iron":4.7,"calcium":54,"b12":0,"vitC":0},"portions":[{"portion_name":"1/2 Cup","grams":40},{"portion_name":"100g","grams":100}]},
  {"id":"quinoa_cooked","name":"Quinoa (Cooked)","category":"Grains & Pasta","nutrition_per_100g":{"calories":120,"protein":4.4,"carbs":21.3,"fats":1.9,"fiber":2.8,"iron":1.5,"calcium":17,"b12":0,"vitC":0},"portions":[{"portion_name":"1 Cup","grams":185},{"portion_name":"100g","grams":100}]},
  {"id":"pasta_cooked","name":"Pasta (Cooked)","category":"Grains & Pasta","nutrition_per_100g":{"calories":158,"protein":5.8,"carbs":30.9,"fats":0.9,"fiber":1.8,"iron":1.3,"calcium":7,"b12":0,"vitC":0},"portions":[{"portion_name":"1 Cup","grams":140},{"portion_name":"100g","grams":100}]},
  {"id":"bread_whole_wheat","name":"Whole Wheat Bread","category":"Grains & Pasta","nutrition_per_100g":{"calories":252,"protein":12.5,"carbs":42.7,"fats":3.5,"fiber":6,"iron":2.5,"calcium":161,"b12":0,"vitC":0},"portions":[{"portion_name":"1 Slice","grams":28},{"portion_name":"100g","grams":100}]},
  {"id":"bread_white","name":"White Bread","category":"Grains & Pasta","nutrition_per_100g":{"calories":266,"protein":8.8,"carbs":50.6,"fats":3.3,"fiber":2.7,"iron":3.6,"calcium":144,"b12":0,"vitC":0},"portions":[{"portion_name":"1 Slice","grams":25},{"portion_name":"100g","grams":100}]},
  {"id":"pizza_cheese","name":"Cheese Pizza (Slice)","category":"Fast Food","nutrition_per_100g":{"calories":266,"protein":11.4,"carbs":33.3,"fats":9.8,"fiber":2.3,"iron":2.5,"calcium":188,"b12":0.4,"vitC":1.4},"portions":[{"portion_name":"1 Slice (14 inch)","grams":107},{"portion_name":"100g","grams":100}]},
  {"id":"burger_beef","name":"Beef Burger","category":"Fast Food","nutrition_per_100g":{"calories":254,"protein":12.8,"carbs":29.8,"fats":9.3,"fiber":1.2,"iron":2.3,"calcium":58,"b12":0.9,"vitC":0.6},"portions":[{"portion_name":"1 Burger","grams":226},{"portion_name":"100g","grams":100}]},
  {"id":"french_fries","name":"French Fries","category":"Fast Food","nutrition_per_100g":{"calories":312,"protein":3.4,"carbs":41.4,"fats":14.7,"fiber":3.8,"iron":0.8,"calcium":18,"b12":0,"vitC":4.7},"portions":[{"portion_name":"Medium Order","grams":117},{"portion_name":"100g","grams":100}]},
  {"id":"potato_chips","name":"Potato Chips","category":"Snacks","nutrition_per_100g":{"calories":536,"protein":7,"carbs":52.9,"fats":34.6,"fiber":3.2,"iron":1.6,"calcium":23,"b12":0,"vitC":31.1},"portions":[{"portion_name":"1 Ounce","grams":28},{"portion_name":"100g","grams":100}]},
  {"id":"popcorn_air_popped","name":"Popcorn (Air Popped)","category":"Snacks","nutrition_per_100g":{"calories":387,"protein":12.9,"carbs":77.8,"fats":4.5,"fiber":14.5,"iron":3.2,"calcium":5,"b12":0,"vitC":0},"portions":[{"portion_name":"1 Cup","grams":8},{"portion_name":"100g","grams":100}]},
  {"id":"ice_cream_vanilla","name":"Vanilla Ice Cream","category":"Desserts","nutrition_per_100g":{"calories":207,"protein":3.5,"carbs":23.6,"fats":11,"fiber":0.7,"iron":0.1,"calcium":128,"b12":0.4,"vitC":0.6},"portions":[{"portion_name":"1/2 Cup","grams":66},{"portion_name":"100g","grams":100}]},
  {"id":"chocolate_dark","name":"Dark Chocolate (70-85%)","category":"Desserts","nutrition_per_100g":{"calories":598,"protein":7.8,"carbs":45.9,"fats":42.6,"fiber":10.9,"iron":11.9,"calcium":73,"b12":0,"vitC":0},"portions":[{"portion_name":"1 Ounce","grams":28},{"portion_name":"100g","grams":100}]},
  {"id":"chocolate_milk","name":"Milk Chocolate","category":"Desserts","nutrition_per_100g":{"calories":535,"protein":7.7,"carbs":59.4,"fats":29.7,"fiber":3.4,"iron":2.4,"calcium":189,"b12":0.8,"vitC":0},"portions":[{"portion_name":"1 Bar (1.55 oz)","grams":44},{"portion_name":"100g","grams":100}]},
  {"id":"cake_chocolate","name":"Chocolate Cake","category":"Desserts","nutrition_per_100g":{"calories":371,"protein":5.3,"carbs":53.4,"fats":16.1,"fiber":1.6,"iron":2.1,"calcium":60,"b12":0.2,"vitC":0.2},"portions":[{"portion_name":"1 Slice","grams":64},{"portion_name":"100g","grams":100}]},
  {"id":"cookie_chocolate_chip","name":"Chocolate Chip Cookie","category":"Desserts","nutrition_per_100g":{"calories":488,"protein":4.8,"carbs":64.3,"fats":24.3,"fiber":2.3,"iron":2.9,"calcium":35,"b12":0.1,"vitC":0},"portions":[{"portion_name":"1 Medium Cookie","grams":16},{"portion_name":"100g","grams":100}]},
  {"id":"coffee_black","name":"Coffee (Black)","category":"Beverages","nutrition_per_100g":{"calories":1,"protein":0.1,"carbs":0,"fats":0,"fiber":0,"iron":0,"calcium":2,"b12":0,"vitC":0},"portions":[{"portion_name":"1 Cup (8 oz)","grams":237},{"portion_name":"100ml","grams":100}]},
  {"id":"tea_black","name":"Black Tea","category":"Beverages","nutrition_per_100g":{"calories":1,"protein":0,"carbs":0.3,"fats":0,"fiber":0,"iron":0,"calcium":0,"b12":0,"vitC":0},"portions":[{"portion_name":"1 Cup (8 oz)","grams":237},{"portion_name":"100ml","grams":100}]},
  {"id":"juice_orange","name":"Orange Juice","category":"Beverages","nutrition_per_100g":{"calories":45,"protein":0.7,"carbs":10.4,"fats":0.2,"fiber":0.2,"iron":0.2,"calcium":11,"b12":0,"vitC":50},"portions":[{"portion_name":"1 Cup (8 oz)","grams":248},{"portion_name":"100ml","grams":100}]},
  {"id":"juice_apple","name":"Apple Juice","category":"Beverages","nutrition_per_100g":{"calories":46,"protein":0.1,"carbs":11.3,"fats":0.1,"fiber":0.2,"iron":0.1,"calcium":8,"b12":0,"vitC":0.9},"portions":[{"portion_name":"1 Cup (8 oz)","grams":248},{"portion_name":"100ml","grams":100}]},
  {"id":"soda_cola","name":"Cola (Regular)","category":"Beverages","nutrition_per_100g":{"calories":41,"protein":0,"carbs":10.6,"fats":0,"fiber":0,"iron":0,"calcium":2,"b12":0,"vitC":0},"portions":[{"portion_name":"1 Can (12 oz)","grams":368},{"portion_name":"100ml","grams":100}]},
  {"id":"olive_oil","name":"Olive Oil","category":"Condiments","nutrition_per_100g":{"calories":884,"protein":0,"carbs":0,"fats":100,"fiber":0,"iron":0.6,"calcium":1,"b12":0,"vitC":0},"portions":[{"portion_name":"1 Tbsp","grams":13.5},{"portion_name":"100g","grams":100}]},
  {"id":"butter","name":"Butter","category":"Condiments","nutrition_per_100g":{"calories":717,"protein":0.8,"carbs":0.1,"fats":81.1,"fiber":0,"iron":0,"calcium":24,"b12":0.2,"vitC":0},"portions":[{"portion_name":"1 Tbsp","grams":14.2},{"portion_name":"100g","grams":100}]},
  {"id":"honey","name":"Honey","category":"Condiments","nutrition_per_100g":{"calories":304,"protein":0.3,"carbs":82.4,"fats":0,"fiber":0.2,"iron":0.4,"calcium":6,"b12":0,"vitC":0.5},"portions":[{"portion_name":"1 Tbsp","grams":21},{"portion_name":"100g","grams":100}]}
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
