import { useEffect, useState } from "react";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";
import "./TheameSwitch.css"

export function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" || 
             (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center space-x-2">
      {/* Box around the switch and label */}
      <div className="flex items-center p-2 border-2 border-gray-400 dark:border-gray-600 rounded-lg hover:border-white">
        {/* Switch component */}
        <Switch
          id="theme-switch"
          checked={isDarkMode}
          onCheckedChange={setIsDarkMode}
          className={`${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          } rounded-full w-10 h-5 transition-all duration-300 ease-in-out
            border border-gray-400 dark:border-gray-600 dark:bg-gray-600`}
        />
        {/* Label next to the switch */}
        <Label htmlFor="theme-switch" className="ml-2 text-black dark:text-white">
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </Label>
      </div>
    </div>
  );
}
