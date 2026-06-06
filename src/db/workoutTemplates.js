// Curated Workout Templates matching user preferences: goal, equipment, and duration.
// Goals: fat_loss (Weight Loss), muscle_gain (Weight Gain), general_fitness (General Fitness)
// Equipment: none (Bodyweight), yoga_mat, dumbbells, resistance_bands

export const workoutTemplates = [
  // 1. Bodyweight Fat Loss (30 mins)
  {
    id: "fat_loss_none_30",
    name: "30 Min Bodyweight Fat Loss (HIIT)",
    goal: "fat_loss",
    equipment: "none",
    duration: 30,
    rounds: 3,
    rest_between_rounds: 60,
    exercises: [
      { name: "Jumping Jacks", category: "warmup", sets: 1, reps: "60 sec", rest: "15 sec" },
      { name: "Bodyweight Squats", category: "work", sets: 3, reps: "15 reps", rest: "30 sec" },
      { name: "Modified Push-ups", category: "work", sets: 3, reps: "12 reps", rest: "30 sec" },
      { name: "Mountain Climbers", category: "work", sets: 3, reps: "40 sec", rest: "30 sec" },
      { name: "Forearm Plank", category: "work", sets: 3, reps: "45 sec", rest: "30 sec" },
      { name: "Child's Pose Stretch", category: "cooldown", sets: 1, reps: "60 sec", rest: "0 sec" }
    ]
  },
  // 2. Bodyweight Fat Loss (15 mins)
  {
    id: "fat_loss_none_15",
    name: "15 Min Express Fat Burner",
    goal: "fat_loss",
    equipment: "none",
    duration: 15,
    rounds: 2,
    rest_between_rounds: 45,
    exercises: [
      { name: "Jumping Jacks", category: "warmup", sets: 1, reps: "45 sec", rest: "10 sec" },
      { name: "High Knees", category: "work", sets: 2, reps: "30 sec", rest: "15 sec" },
      { name: "Bodyweight Squats", category: "work", sets: 2, reps: "15 reps", rest: "15 sec" },
      { name: "Burpees (Low Impact)", category: "work", sets: 2, reps: "10 reps", rest: "30 sec" },
      { name: "Plank Hold", category: "work", sets: 2, reps: "30 sec", rest: "15 sec" }
    ]
  },
  // 3. Dumbbell Strength Fat Loss (45 mins)
  {
    id: "fat_loss_dumbbells_45",
    name: "45 Min Dumbbell Shred & Strength",
    goal: "fat_loss",
    equipment: "dumbbells",
    duration: 45,
    rounds: 4,
    rest_between_rounds: 90,
    exercises: [
      { name: "Arm Circles & Torso Twists", category: "warmup", sets: 1, reps: "60 sec", rest: "10 sec" },
      { name: "Dumbbell Goblet Squats", category: "work", sets: 4, reps: "12 reps", rest: "45 sec" },
      { name: "Dumbbell Renegade Rows", category: "work", sets: 4, reps: "10 reps/side", rest: "45 sec" },
      { name: "Dumbbell Thrusters", category: "work", sets: 4, reps: "12 reps", rest: "60 sec" },
      { name: "Dumbbell Romanian Deadlifts", category: "work", sets: 4, reps: "15 reps", rest: "45 sec" },
      { name: "Bicycle Crunches", category: "work", sets: 4, reps: "20 reps", rest: "30 sec" },
      { name: "Standing Hamstring Stretch", category: "cooldown", sets: 1, reps: "60 sec", rest: "0 sec" }
    ]
  },
  // 4. Dumbbell Muscle Builder (30 mins)
  {
    id: "muscle_gain_dumbbells_30",
    name: "30 Min Dumbbell Hypertrophy",
    goal: "muscle_gain",
    equipment: "dumbbells",
    duration: 30,
    rounds: 3,
    rest_between_rounds: 60,
    exercises: [
      { name: "Arm Swings & Leg Swings", category: "warmup", sets: 1, reps: "60 sec", rest: "10 sec" },
      { name: "Dumbbell Floor Press", category: "work", sets: 3, reps: "10 reps", rest: "45 sec" },
      { name: "Dumbbell Goblet Squats", category: "work", sets: 3, reps: "12 reps", rest: "45 sec" },
      { name: "Dumbbell Overhead Shoulder Press", category: "work", sets: 3, reps: "10 reps", rest: "45 sec" },
      { name: "Dumbbell Bent-Over Rows", category: "work", sets: 3, reps: "12 reps", rest: "45 sec" },
      { name: "Dumbbell Bicep Curls", category: "work", sets: 3, reps: "12 reps", rest: "30 sec" }
    ]
  },
  // 5. Dumbbell Muscle Builder (45 mins)
  {
    id: "muscle_gain_dumbbells_45",
    name: "45 Min Full Body Dumbbell Build",
    goal: "muscle_gain",
    equipment: "dumbbells",
    duration: 45,
    rounds: 3,
    rest_between_rounds: 75,
    exercises: [
      { name: "Dynamic Full Body Warmup", category: "warmup", sets: 1, reps: "2 min", rest: "15 sec" },
      { name: "Dumbbell Romanian Deadlifts", category: "work", sets: 3, reps: "12 reps", rest: "60 sec" },
      { name: "Dumbbell Bench/Floor Press", category: "work", sets: 3, reps: "12 reps", rest: "60 sec" },
      { name: "Dumbbell Reverse Lunges", category: "work", sets: 3, reps: "10 reps/leg", rest: "45 sec" },
      { name: "Dumbbell Single-Arm Rows", category: "work", sets: 3, reps: "12 reps/side", rest: "45 sec" },
      { name: "Dumbbell Lateral Raises", category: "work", sets: 3, reps: "15 reps", rest: "45 sec" },
      { name: "Dumbbell Overhead Tricep Extension", category: "work", sets: 3, reps: "12 reps", rest: "45 sec" },
      { name: "Seated Butterfly Stretch", category: "cooldown", sets: 1, reps: "60 sec", rest: "0 sec" }
    ]
  },
  // 6. Bodyweight Muscle Builder (30 mins)
  {
    id: "muscle_gain_none_30",
    name: "30 Min Bodyweight Strength & Tone",
    goal: "muscle_gain",
    equipment: "none",
    duration: 30,
    rounds: 3,
    rest_between_rounds: 60,
    exercises: [
      { name: "Jumping Jacks", category: "warmup", sets: 1, reps: "45 sec", rest: "10 sec" },
      { name: "Standard Push-ups", category: "work", sets: 3, reps: "12 reps", rest: "45 sec" },
      { name: "Bulgarian Split Squats (using chair)", category: "work", sets: 3, reps: "10 reps/leg", rest: "45 sec" },
      { name: "Pike Push-ups (Shoulders)", category: "work", sets: 3, reps: "8 reps", rest: "45 sec" },
      { name: "Single-Leg Glute Bridges", category: "work", sets: 3, reps: "12 reps/leg", rest: "30 sec" },
      { name: "Plank to Push-up", category: "work", sets: 3, reps: "8 reps", rest: "45 sec" }
    ]
  },
  // 7. Resistance Band Muscle Builder (30 mins)
  {
    id: "muscle_gain_resistance_bands_30",
    name: "30 Min Band Resistance Hypertrophy",
    goal: "muscle_gain",
    equipment: "resistance_bands",
    duration: 30,
    rounds: 3,
    rest_between_rounds: 60,
    exercises: [
      { name: "Band Pull-aparts", category: "warmup", sets: 1, reps: "20 reps", rest: "15 sec" },
      { name: "Band Squats (under feet & over shoulders)", category: "work", sets: 3, reps: "15 reps", rest: "45 sec" },
      { name: "Band Standing Chest Press", category: "work", sets: 3, reps: "12 reps", rest: "45 sec" },
      { name: "Band Seated Rows", category: "work", sets: 3, reps: "12 reps", rest: "45 sec" },
      { name: "Band Overhead Press", category: "work", sets: 3, reps: "10 reps", rest: "45 sec" },
      { name: "Band Bicep Curls", category: "work", sets: 3, reps: "15 reps", rest: "30 sec" }
    ]
  },
  // 8. Yoga Mat Mobility & Stretch (15 mins)
  {
    id: "general_fitness_yoga_mat_15",
    name: "15 Min Daily Yoga Flow & Mobility",
    goal: "general_fitness",
    equipment: "yoga_mat",
    duration: 15,
    rounds: 1,
    rest_between_rounds: 0,
    exercises: [
      { name: "Cat-Cow Stretch", category: "warmup", sets: 1, reps: "60 sec", rest: "10 sec" },
      { name: "Downward Facing Dog", category: "work", sets: 3, reps: "45 sec", rest: "15 sec" },
      { name: "Cobra Pose", category: "work", sets: 3, reps: "30 sec", rest: "15 sec" },
      { name: "Warrior II Pose", category: "work", sets: 2, reps: "30 sec/side", rest: "15 sec" },
      { name: "Pigeon Pose", category: "work", sets: 2, reps: "45 sec/leg", rest: "15 sec" },
      { name: "Corpse Pose (Savasana)", category: "cooldown", sets: 1, reps: "120 sec", rest: "0 sec" }
    ]
  },
  // 9. Yoga Mat Mobility (30 mins)
  {
    id: "general_fitness_yoga_mat_30",
    name: "30 Min Full Body Restorative Yoga",
    goal: "general_fitness",
    equipment: "yoga_mat",
    duration: 30,
    rounds: 2,
    rest_between_rounds: 30,
    exercises: [
      { name: "Child's Pose", category: "warmup", sets: 1, reps: "60 sec", rest: "10 sec" },
      { name: "Cat-Cow Dynamic Stretch", category: "warmup", sets: 1, reps: "60 sec", rest: "10 sec" },
      { name: "Downward Dog to Cobra Flow", category: "work", sets: 3, reps: "8 reps", rest: "30 sec" },
      { name: "Low Lunge Hip Opener", category: "work", sets: 3, reps: "45 sec/side", rest: "20 sec" },
      { name: "Thread the Needle (Shoulders)", category: "work", sets: 3, reps: "30 sec/side", rest: "15 sec" },
      { name: "Seated Forward Fold", category: "work", sets: 2, reps: "60 sec", rest: "15 sec" },
      { name: "Supine Spinal Twist", category: "cooldown", sets: 1, reps: "60 sec/side", rest: "0 sec" }
    ]
  },
  // 10. General Fitness Band & Core (30 mins)
  {
    id: "general_fitness_resistance_bands_30",
    name: "30 Min Active Band Tone & Core",
    goal: "general_fitness",
    equipment: "resistance_bands",
    duration: 30,
    rounds: 3,
    rest_between_rounds: 60,
    exercises: [
      { name: "Band Pull-aparts", category: "warmup", sets: 1, reps: "15 reps", rest: "10 sec" },
      { name: "Band Woodchoppers", category: "work", sets: 3, reps: "12 reps/side", rest: "30 sec" },
      { name: "Band Monster Walks", category: "work", sets: 3, reps: "45 sec", rest: "30 sec" },
      { name: "Band Lat Pull-downs", category: "work", sets: 3, reps: "15 reps", rest: "30 sec" },
      { name: "Dead Bug Core Hold", category: "work", sets: 3, reps: "45 sec", rest: "30 sec" },
      { name: "Child's Pose", category: "cooldown", sets: 1, reps: "60 sec", rest: "0 sec" }
    ]
  },
  // 11. Bodyweight Express Core (15 mins)
  {
    id: "general_fitness_none_15",
    name: "15 Min Bodyweight Core & Balance",
    goal: "general_fitness",
    equipment: "none",
    duration: 15,
    rounds: 2,
    rest_between_rounds: 30,
    exercises: [
      { name: "Torso Twists", category: "warmup", sets: 1, reps: "45 sec", rest: "10 sec" },
      { name: "Bird-Dog Pose", category: "work", sets: 2, reps: "10 reps/side", rest: "15 sec" },
      { name: "Glute Bridge Hold", category: "work", sets: 2, reps: "45 sec", rest: "15 sec" },
      { name: "Superman Hold", category: "work", sets: 2, reps: "30 sec", rest: "15 sec" },
      { name: "Dead Bug Exercises", category: "work", sets: 2, reps: "12 reps/side", rest: "15 sec" }
    ]
  },
  // 12. Dumbbell General Fitness (30 mins)
  {
    id: "general_fitness_dumbbells_30",
    name: "30 Min Light Dumbbell Sculpt",
    goal: "general_fitness",
    equipment: "dumbbells",
    duration: 30,
    rounds: 3,
    rest_between_rounds: 65,
    exercises: [
      { name: "Arm Rotations & Shrugs", category: "warmup", sets: 1, reps: "60 sec", rest: "10 sec" },
      { name: "Light Dumbbell Squat to Press", category: "work", sets: 3, reps: "12 reps", rest: "45 sec" },
      { name: "Light Dumbbell Row to Kickback", category: "work", sets: 3, reps: "10 reps", rest: "45 sec" },
      { name: "Dumbbell Goblet Lunges", category: "work", sets: 3, reps: "8 reps/leg", rest: "45 sec" },
      { name: "Dumbbell Russian Twists", category: "work", sets: 3, reps: "20 twists", rest: "30 sec" }
    ]
  }
];

// Helper to filter templates
export const filterWorkouts = (goal, equipment, duration) => {
  return workoutTemplates.filter(workout => {
    const matchGoal = workout.goal === goal;
    const matchEquipment = workout.equipment === equipment;
    const matchDuration = workout.duration === Number(duration);
    return matchGoal && matchEquipment && matchDuration;
  });
};
