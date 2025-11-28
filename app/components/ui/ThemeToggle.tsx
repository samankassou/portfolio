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
      className={className}
      aria-label="Toggle theme"
      type="button"
    >
      <Icon
        name={(theme ? THEME_ICONS[theme] : THEME_ICONS.system) as IconName}
      />
    </button>
  );
}
