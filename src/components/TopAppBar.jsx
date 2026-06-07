import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export const TopAppBar = ({ onTitleClick, onNavigate }) => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEditGoals = () => {
    setIsMenuOpen(false);
    if (onNavigate) onNavigate("goal_setup");
  };

  const handleLogoutClick = () => {
    setIsMenuOpen(false);
    if (window.confirm("Do you want to log out of your current session?")) {
      logout();
    }
  };

  // Provide a fallback if photo isn't available
  const initials = user?.email ? user.email.charAt(0).toUpperCase() : "U";
  const photoUrl = user?.photoURL || `https://ui-avatars.com/api/?name=${initials}&background=006e2f&color=fff`;

  return (
    <header className="bg-surface/80 dark:bg-surface-dim/80 docked full-width top-0 sticky backdrop-blur-md transition-all duration-200 z-40 border-b border-surface-container-high/30">
      <div className="flex justify-between items-center px-container-padding h-touch-target w-full max-w-[28rem] mx-auto">
        <div className="flex items-center gap-xs relative" ref={menuRef}>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="User profile options"
            className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high shrink-0 active:scale-95 transition-transform border border-outline-variant/30 flex items-center justify-center shadow-sm"
          >
            <img 
              alt="User avatar" 
              className="w-full h-full object-cover" 
              src={photoUrl}
            />
          </button>

          {isMenuOpen && (
            <div className="absolute top-12 left-0 w-48 bg-surface-container-lowest rounded-xl shadow-elevation-high border border-surface-variant/50 overflow-hidden z-50 animate-fade-in">
              <button 
                onClick={handleEditGoals}
                className="w-full text-left px-4 py-3 text-body-md text-on-surface hover:bg-surface-container flex items-center gap-3 transition-colors border-b border-surface-variant/50"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">edit</span>
                Edit Goals
              </button>
              <button 
                onClick={handleLogoutClick}
                className="w-full text-left px-4 py-3 text-body-md text-error hover:bg-error-container/50 flex items-center gap-3 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">logout</span>
                Logout
              </button>
            </div>
          )}
        </div>
        <h1 
          onClick={onTitleClick}
          className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim cursor-pointer select-none"
        >
          NutriFast
        </h1>
        {/* Placeholder for symmetry to keep title perfectly centered */}
        <div className="w-8 h-8"></div>
      </div>
    </header>
  );
};
export default TopAppBar;
