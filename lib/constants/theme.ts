/**
 * Theme configuration constants
 */

export const THEME_MODES = {
  SYSTEM: "system",
  DARK: "dark",
  LIGHT: "light",
} as const;

export type ThemeMode = typeof THEME_MODES[keyof typeof THEME_MODES];

export const THEME_STORAGE_KEY = "theme" as const;

export const THEME_ICONS: Record<ThemeMode, string> = {
  system: "contrast-outline",
  dark: "moon-outline",
  light: "sunny-outline",
};
