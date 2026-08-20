"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

// Workaround: next-themes injects a <script> tag internally to prevent
// theme flash on load. React 19 flags this as an error, even though it
// works correctly. This is a known, documented issue in next-themes
// (unmaintained since early 2025) - suppressing this specific message only.
// Placed at module scope (not inside useEffect) so it's active before
// the very first render, not after it.
if (typeof window !== "undefined") {
  const originalError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag while rendering")
    ) {
      return;
    }
    originalError(...args);
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}