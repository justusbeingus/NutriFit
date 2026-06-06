import React, { useState, useEffect } from "react";
import { useNutrition } from "../context/NutritionContext";

export const GoalSetup = ({ onComplete }) => {
  const { profile, saveGoalProfile } = useNutrition();

  const [weight, setWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("");

  // Pre-populate if profile already exists (editing mode)
  useEffect(() => {
    if (profile) {
      setWeight(profile.current_weight || "");
      setTargetWeight(profile.target_weight || "");
      setAge(profile.age || "");
      setHeight(profile.height || "");
      setGender(profile.gender || "male");
      setActivityLevel(profile.activity_level || "");
    }
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!weight || !targetWeight || !age || !height || !activityLevel) {
      alert("Please fill in all details to calculate your plan.");
      return;
    }
    saveGoalProfile(weight, targetWeight, activityLevel, age, height, gender);
    if (onComplete) onComplete();
  };

  return (
    <div className="w-full max-w-[28rem] mx-auto min-h-screen bg-surface flex flex-col font-body-md antialiased pb-xl">
      <header className="w-full flex justify-center items-center px-container-padding h-touch-target top-0 sticky bg-surface/80 backdrop-blur-md z-40">
        <div className="text-center">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
            {profile ? "Edit Targets" : "Step 1 of 2"}
          </span>
          <div className="w-24 h-1 bg-surface-container-high rounded-full mt-2 mx-auto overflow-hidden">
            <div className="w-1/2 h-full bg-primary rounded-full"></div>
          </div>
        </div>
      </header>

      <main className="flex-grow px-container-padding flex flex-col pt-md max-w-[28rem] mx-auto w-full">
        <div className="text-center mb-lg">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-xs">
            {profile ? "Adjust Your Plan" : "Set Your Goals"}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Let's calculate the perfect nutritional plan for your body.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-md flex-grow">
          {/* Gender Selector */}
          <div className="bg-surface-container-lowest rounded-[24px] p-md shadow-soft border border-surface-container-high">
            <label className="font-label-md text-label-md text-on-surface-variant block mb-sm">Gender</label>
            <div className="flex gap-sm">
              <button
                type="button"
                onClick={() => setGender("male")}
                className={`flex-1 h-touch-target rounded-xl font-label-md text-label-md active:scale-95 transition-all flex items-center justify-center gap-xs ${
                  gender === "male"
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">male</span>
                Male
              </button>
              <button
                type="button"
                onClick={() => setGender("female")}
                className={`flex-1 h-touch-target rounded-xl font-label-md text-label-md active:scale-95 transition-all flex items-center justify-center gap-xs ${
                  gender === "female"
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">female</span>
                Female
              </button>
            </div>
          </div>

          {/* Weight Inputs (Current vs Target) */}
          <div className="grid grid-cols-2 gap-sm">
            <div className="bg-surface-container-lowest rounded-[24px] p-md shadow-soft border border-surface-container-high">
              <label className="font-label-md text-label-md text-on-surface-variant block mb-xs" htmlFor="current-weight">
                Current Weight
              </label>
              <div className="relative flex items-center">
                <input
                  id="current-weight"
                  type="number"
                  step="0.1"
                  placeholder="70.0"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full h-10 bg-transparent font-headline-md text-headline-md text-on-surface border-b border-outline-variant focus:border-primary focus:ring-0 px-0 pb-1 outline-none"
                  required
                />
                <span className="absolute right-0 font-label-md text-label-md text-on-surface-variant">kg</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-[24px] p-md shadow-soft border border-surface-container-high">
              <label className="font-label-md text-label-md text-on-surface-variant block mb-xs" htmlFor="target-weight">
                Target Weight
              </label>
              <div className="relative flex items-center">
                <input
                  id="target-weight"
                  type="number"
                  step="0.1"
                  placeholder="65.0"
                  value={targetWeight}
                  onChange={(e) => setTargetWeight(e.target.value)}
                  className="w-full h-10 bg-transparent font-headline-md text-headline-md text-on-surface border-b border-outline-variant focus:border-primary focus:ring-0 px-0 pb-1 outline-none"
                  required
                />
                <span className="absolute right-0 font-label-md text-label-md text-on-surface-variant">kg</span>
              </div>
            </div>
          </div>

          {/* Height and Age */}
          <div className="grid grid-cols-2 gap-sm">
            <div className="bg-surface-container-lowest rounded-[24px] p-md shadow-soft border border-surface-container-high">
              <label className="font-label-md text-label-md text-on-surface-variant block mb-xs" htmlFor="height">
                Height (cm)
              </label>
              <div className="relative flex items-center">
                <input
                  id="height"
                  type="number"
                  placeholder="170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full h-10 bg-transparent font-headline-md text-headline-md text-on-surface border-b border-outline-variant focus:border-primary focus:ring-0 px-0 pb-1 outline-none"
                  required
                />
                <span className="absolute right-0 font-label-md text-label-md text-on-surface-variant">cm</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-[24px] p-md shadow-soft border border-surface-container-high">
              <label className="font-label-md text-label-md text-on-surface-variant block mb-xs" htmlFor="age">
                Age (years)
              </label>
              <div className="relative flex items-center">
                <input
                  id="age"
                  type="number"
                  placeholder="25"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full h-10 bg-transparent font-headline-md text-headline-md text-on-surface border-b border-outline-variant focus:border-primary focus:ring-0 px-0 pb-1 outline-none"
                  required
                />
                <span className="absolute right-0 font-label-md text-label-md text-on-surface-variant">yrs</span>
              </div>
            </div>
          </div>

          {/* Activity Level */}
          <div className="bg-surface-container-lowest rounded-[24px] p-md shadow-soft border border-surface-container-high">
            <label className="font-label-md text-label-md text-on-surface-variant block mb-sm" htmlFor="activity-level">
              Activity Level
            </label>
            <div className="relative">
              <select
                id="activity-level"
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full h-touch-target bg-surface-bright rounded-lg px-sm font-body-lg text-body-lg text-on-surface border-none outline-none appearance-none focus:ring-2 focus:ring-primary-container cursor-pointer"
                required
              >
                <option value="" disabled>Select your daily activity</option>
                <option value="sedentary">Sedentary (Office job / minimal exercise)</option>
                <option value="light">Light (Exercise 1-3 days/week)</option>
                <option value="moderate">Moderate (Exercise 3-5 days/week)</option>
                <option value="active">Active (Heavy exercise 6-7 days/week)</option>
              </select>
              <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                expand_more
              </span>
            </div>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full h-touch-target bg-primary-container text-on-primary-container font-headline-md text-headline-md rounded-lg shadow-md hover:bg-primary-fixed active:scale-95 transition-all duration-200 flex items-center justify-center gap-xs mt-md"
          >
            {profile ? "Update Targets" : "Calculate My Plan"}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </form>
      </main>
    </div>
  );
};
export default GoalSetup;
