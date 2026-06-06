import React from "react";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const { loginWithGoogle } = useAuth();

  return (
    <div className="w-full max-w-[28rem] mx-auto min-h-screen bg-surface px-container-padding flex flex-col justify-center py-xl">
      <div className="text-center mb-xl">
        <div className="w-16 h-16 bg-primary-container/20 rounded-2xl flex items-center justify-center mx-auto mb-md">
          <span className="material-symbols-outlined text-[36px] text-primary">nutrition</span>
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold">NutriFast</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
          Clean nutrition and workouts, logged in under 10 seconds.
        </p>
      </div>

      <div className="bg-surface-container-lowest rounded-[24px] p-lg shadow-soft border border-surface-container-high/40 text-center">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">
          Welcome to NutriFast
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
          Sign in to safely store your goals and daily meal logs in the cloud.
        </p>

        <button
          onClick={loginWithGoogle}
          className="w-full h-touch-target bg-primary text-on-primary font-headline-md text-headline-md rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-sm"
        >
          {/* Simple Google SVG icon */}
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.81 15.71 17.59V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
            <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.59C14.73 18.25 13.48 18.66 12 18.66C9.14 18.66 6.71 16.73 5.84 14.14H2.15V17.01C3.96 20.61 7.69 23 12 23Z" fill="#34A853"/>
            <path d="M5.84 14.14C5.61 13.48 5.48 12.76 5.48 12C5.48 11.24 5.61 10.52 5.84 9.86V6.99H2.15C1.4 8.49 1 10.19 1 12C1 13.81 1.4 15.51 2.15 17.01L5.84 14.14Z" fill="#FBBC05"/>
            <path d="M12 5.34C13.61 5.34 15.05 5.9 16.19 6.99L19.36 3.82C17.46 2.05 14.97 1 12 1C7.69 1 3.96 3.39 2.15 6.99L5.84 9.86C6.71 7.27 9.14 5.34 12 5.34Z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>
      </div>

      <div className="relative flex py-lg items-center max-w-[20rem] mx-auto opacity-70">
        <div className="flex-grow border-t border-outline-variant/40"></div>
        <span className="flex-shrink mx-4 font-caption text-caption text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">cloud_done</span>
          Cloud Synced
        </span>
        <div className="flex-grow border-t border-outline-variant/40"></div>
      </div>
    </div>
  );
};
export default Login;
