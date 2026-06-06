import React, { useState, useEffect } from "react";
import { getWorkouts } from "../db/firebaseService";

export const Workouts = () => {
  const [goal, setGoal] = useState("fat_loss");
  const [equipment, setEquipment] = useState("none");
  const [duration, setDuration] = useState(30);
  const [activeWorkout, setActiveWorkout] = useState(null);

  // Load standard workouts on preference changes
  useEffect(() => {
    handleQueryWorkouts();
  }, [goal, equipment, duration]);

  const handleQueryWorkouts = () => {
    const workouts = getWorkouts(goal, equipment, duration);
    if (workouts.length > 0) {
      setActiveWorkout(workouts[0]);
    } else {
      setActiveWorkout(null);
    }
  };

  // Toggle completed exercises just for micro visual state feedback
  const [completedExercises, setCompletedExercises] = useState({});

  const toggleExerciseCheck = (exerciseName) => {
    setCompletedExercises(prev => ({
      ...prev,
      [exerciseName]: !prev[exerciseName]
    }));
  };

  const goalsList = [
    { id: "fat_loss", label: "Fat Loss" },
    { id: "muscle_gain", label: "Muscle Gain" },
    { id: "general_fitness", label: "Mobility" }
  ];

  const equipmentList = [
    { id: "none", label: "None" },
    { id: "yoga_mat", label: "Yoga Mat" },
    { id: "dumbbells", label: "Dumbbells" },
    { id: "resistance_bands", label: "Bands" }
  ];

  const durationList = [15, 30, 45];

  return (
    <div className="w-full max-w-[28rem] mx-auto space-y-lg pt-md pb-32">
      {/* 1. Header */}
      <section>
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-base font-bold">
          Craft Your Session
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Adjust your preferences to get a personalized routine.
        </p>
      </section>

      {/* 2. Preferences Bento Form Box */}
      <section className="flex flex-col gap-lg bg-surface-container-lowest p-container-padding rounded-2xl shadow-level-1 border border-outline-variant/30">
        {/* Goal Selector */}
        <div>
          <h3 className="font-label-md text-label-md text-on-surface mb-xs font-semibold">Goal</h3>
          <div className="flex gap-sm overflow-x-auto no-scrollbar pb-1">
            {goalsList.map(g => {
              const active = goal === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setGoal(g.id)}
                  className={`font-label-md text-label-md px-md py-[10px] rounded-full whitespace-nowrap active:scale-95 transition-all ${
                    active 
                      ? "bg-primary-container text-on-primary-container font-bold shadow-sm" 
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-container-highest"
                  }`}
                >
                  {g.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Equipment Selector */}
        <div>
          <h3 className="font-label-md text-label-md text-on-surface mb-xs font-semibold">Equipment</h3>
          <div className="flex gap-sm overflow-x-auto no-scrollbar pb-1">
            {equipmentList.map(eq => {
              const active = equipment === eq.id;
              return (
                <button
                  key={eq.id}
                  type="button"
                  onClick={() => setEquipment(eq.id)}
                  className={`font-label-md text-label-md px-md py-[10px] rounded-full whitespace-nowrap active:scale-95 transition-all ${
                    active 
                      ? "bg-primary-container text-on-primary-container font-bold shadow-sm" 
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-container-highest"
                  }`}
                >
                  {eq.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Duration Selector */}
        <div>
          <h3 className="font-label-md text-label-md text-on-surface mb-xs font-semibold">Duration</h3>
          <div className="flex gap-sm">
            {durationList.map(dur => {
              const active = duration === dur;
              return (
                <button
                  key={dur}
                  type="button"
                  onClick={() => setDuration(dur)}
                  className={`flex-1 font-label-md text-label-md py-[10px] rounded-lg active:scale-95 transition-all ${
                    active 
                      ? "bg-primary-container text-on-primary-container font-bold shadow-sm" 
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-container-highest"
                  }`}
                >
                  {dur} min
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleQueryWorkouts}
          className="w-full bg-primary text-on-primary font-label-md text-label-md h-touch-target rounded-lg mt-xs shadow-md hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-xs"
        >
          <span className="material-symbols-outlined text-[20px]">refresh</span>
          Update Plan
        </button>
      </section>

      {/* 3. Generated Workout Card Panel */}
      {activeWorkout ? (
        <section className="flex flex-col gap-md pb-md">
          <div className="flex justify-between items-end mb-xs px-xs">
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold leading-tight">
              {activeWorkout.name}
            </h3>
            <span className="font-caption text-caption text-on-surface-variant font-medium shrink-0 ml-xs">
              {activeWorkout.exercises.length} Exercises • {activeWorkout.rounds} Rounds
            </span>
          </div>

          <div className="space-y-sm">
            {activeWorkout.exercises.map((ex, idx) => {
              const isChecked = !!completedExercises[ex.name];
              return (
                <div
                  key={idx}
                  onClick={() => toggleExerciseCheck(ex.name)}
                  className={`bg-surface-container-lowest rounded-[24px] shadow-level-1 p-md flex items-center gap-md border transition-all cursor-pointer ${
                    isChecked 
                      ? "border-primary/40 bg-primary/5" 
                      : "border-outline-variant/20 hover:border-primary/30"
                  }`}
                >
                  {/* Exercise Icon Box */}
                  <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[32px]">
                      {ex.category === "warmup" ? "mode_fan" : ex.category === "cooldown" ? "spa" : "fitness_center"}
                    </span>
                  </div>

                  {/* Body text */}
                  <div className="flex-1 min-w-0">
                    {ex.category === "warmup" && (
                      <p className="font-caption text-caption text-primary font-bold mb-base uppercase tracking-wider">
                        Warmup
                      </p>
                    )}
                    {ex.category === "cooldown" && (
                      <p className="font-caption text-caption text-tertiary font-bold mb-base uppercase tracking-wider">
                        Cooldown
                      </p>
                    )}
                    <h4 className="font-headline-md text-[18px] leading-tight text-on-surface font-semibold truncate">
                      {ex.name}
                    </h4>
                    <p className="font-body-md text-[14px] text-on-surface-variant flex items-center gap-1 mt-[2px]">
                      <span className="material-symbols-outlined text-[16px] text-outline">
                        {ex.reps.includes("sec") || ex.reps.includes("min") ? "timer" : "repeat"}
                      </span> 
                      {ex.sets > 1 ? `${ex.sets} Sets × ` : ""}{ex.reps} (Rest: {ex.rest})
                    </p>
                  </div>

                  {/* Action Play/Check Circle */}
                  <button
                    aria-label={`Toggle check for ${ex.name}`}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                      isChecked 
                        ? "bg-primary text-on-primary" 
                        : "bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary-container"
                    }`}
                  >
                    <span className="material-symbols-outlined">
                      {isChecked ? "check" : "play_arrow"}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="py-xl flex flex-col items-center justify-center text-center bg-surface-container-lowest rounded-2xl border border-dashed border-outline-variant/50">
          <span className="material-symbols-outlined text-outline-variant text-[48px] mb-md font-light">
            fitness_center
          </span>
          <p className="font-body-lg text-body-lg text-on-surface-variant">No templates found for this query.</p>
          <p className="font-caption text-caption text-on-surface-variant/70 mt-xs">
            Try switching equipment to "None" or goal to "Fat Loss".
          </p>
        </section>
      )}
    </div>
  );
};
export default Workouts;
