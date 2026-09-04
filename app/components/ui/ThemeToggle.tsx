"use client";

import { useTheme } from "@/app/components/providers/ThemeProvider";
import { THEME_ICONS } from "@/lib/constants/theme";
import Icon from "@/lib/components/Icon";
import type { IconName } from "@/lib/components/Icon";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-secondary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:hover:bg-white/5 ${className}`}
      aria-label="Toggle theme"
      type="button"
    >
      <Icon
        name={(theme ? THEME_ICONS[theme] : THEME_ICONS.system) as IconName}
      />
    </button>
  );
}
