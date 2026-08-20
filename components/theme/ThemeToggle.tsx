"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSidebar } from "../ui/sidebar";

export function ThemeToggle() {
  // Access theme state and updater function from next-themes
  const { resolvedTheme, setTheme } = useTheme();
  const { isMobile } = useSidebar();
  return (
    <div
      // Toggle theme between dark and light modes on click
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex items-center gap-2 cursor-pointer w-full h-full py-0"
    >
      {/* 
        Pure CSS theme switching via Tailwind's `dark:` modifier 
        to prevent hydration mismatch and flash of unstyled content
      */}
      <Sun className="hidden dark:block" />
      <Moon className="block dark:hidden" />

      {!isMobile && <span className="hidden dark:inline">Light Mode</span>}
      {!isMobile && <span className="inline dark:hidden">Dark Mode</span>}
    </div>
  );
}
