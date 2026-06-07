import React, { useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { NutritionProvider, useNutrition } from "./context/NutritionContext";
import TopAppBar from "./components/TopAppBar";
import BottomNavBar from "./components/BottomNavBar";
import PWAPrompt from "./components/PWAPrompt";
import Login from "./pages/Login";
import GoalSetup from "./pages/GoalSetup";
import Dashboard from "./pages/Dashboard";
import AddMeal from "./pages/AddMeal";
import MealHistory from "./pages/MealHistory";
import Workouts from "./pages/Workouts";

function MainAppContent() {
  const { user, authLoading } = useAuth();
  const { profile, isLoading } = useNutrition();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedMealType, setSelectedMealType] = useState("breakfast");

  // Loading States
  if (authLoading || isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-surface">
        <span className="material-symbols-outlined text-[48px] text-primary animate-spin">
          sync
        </span>
        <p className="mt-md font-body-lg text-body-lg text-on-surface-variant font-medium">
          Loading NutriFast...
        </p>
      </div>
    );
  }

  // 1. Authenticate user
  if (!user) {
    return <Login />;
  }

  // 2. Onboarding Goal Setup check
  if (!profile) {
    return <GoalSetup onComplete={() => setActiveTab("dashboard")} />;
  }

  // Helper to transition from dashboard "Add to Breakfast" button directly to the Add Meal Tab
  const handleTriggerAddMealTab = (type) => {
    setSelectedMealType(type);
    setActiveTab("add_meal");
  };

  const handleMealLoggedSuccess = () => {
    setActiveTab("dashboard");
  };

  // Render active screen based on bottom navigation tabs
  const renderActiveScreen = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard onAddMealClick={handleTriggerAddMealTab} />;
      case "add_meal":
        return (
          <AddMeal 
            defaultMealType={selectedMealType} 
            onMealAdded={handleMealLoggedSuccess} 
          />
        );
      case "history":
        return <MealHistory />;
      case "workouts":
        return <Workouts />;
      case "goal_setup":
        return <GoalSetup onComplete={() => setActiveTab("dashboard")} isEditing={true} />;
      default:
        return <Dashboard onAddMealClick={handleTriggerAddMealTab} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface flex flex-col font-body-md antialiased pb-24 selection:bg-primary/20 selection:text-primary md:flex md:justify-center">
      {/* Wrapper to enforce a modern app viewport width constraints on desktop */}
      <div className="w-full max-w-[28rem] bg-surface min-h-screen relative shadow-2xl pb-[env(safe-area-inset-bottom)]">
        {/* Shared Top Bar header */}
        <TopAppBar 
          onTitleClick={() => setActiveTab("dashboard")} 
          onNavigate={(tab) => setActiveTab(tab)}
        />

        {/* Scrollable Main viewport */}
        <main className="px-container-padding pt-xs">
          {renderActiveScreen()}
        </main>

        {/* iOS installation prompt */}
        <PWAPrompt />

        {/* Shared Bottom Navigation tabs */}
        <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NutritionProvider>
        <MainAppContent />
      </NutritionProvider>
    </AuthProvider>
  );
}
