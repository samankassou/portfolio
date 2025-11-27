"use client";

import { useTheme } from "@/app/components/providers/ThemeProvider";
import { THEME_ICONS } from "@/lib/constants/theme";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={className}
      aria-label="Toggle theme"
    >
      <ion-icon
        name={theme ? THEME_ICONS[theme] : THEME_ICONS.system}
        suppressHydrationWarning
      ></ion-icon>
    </button>
  );
}
