"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  // Access theme state and updater function from next-themes
  const { theme, setTheme } = useTheme();

  return (
    <div
      // Toggle theme between dark and light modes on click
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center gap-2 cursor-pointer w-full h-full py-0"
    >
      {/* 
        Pure CSS theme switching via Tailwind's `dark:` modifier 
        to prevent hydration mismatch and flash of unstyled content
      */}
      <Sun className="hidden dark:block" />
      <Moon className="block dark:hidden" />

      <span className="hidden dark:inline">Light Mode</span>
      <span className="inline dark:hidden">Dark Mode</span>
    </div>
  );
}
