"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  THEME_MODES,
  THEME_STORAGE_KEY,
  type ThemeMode,
} from "@/lib/constants/theme";

interface ThemeContextValue {
  theme: ThemeMode | null;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);
const THEME_CHANGE_EVENT = "portfolio-theme-change";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useSyncExternalStore<ThemeMode | null>(
    subscribeToTheme,
    getThemeSnapshot,
    () => null,
  );

  const applySystemTheme = useCallback(() => {
    document.documentElement.classList.toggle(
      "dark",
      window.matchMedia("(prefers-color-scheme: dark)").matches,
    );
  }, []);

  useEffect(() => {
    if (theme === null) return;
    document.documentElement.classList.toggle(
      "dark",
      theme === THEME_MODES.DARK ||
        (theme === THEME_MODES.SYSTEM &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
    if (theme !== THEME_MODES.SYSTEM) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", applySystemTheme);
    return () => mediaQuery.removeEventListener("change", applySystemTheme);
  }, [applySystemTheme, theme]);

  const toggleTheme = () => {
    const currentTheme = theme ?? THEME_MODES.SYSTEM;
    if (currentTheme === THEME_MODES.SYSTEM) {
      localStorage.setItem(THEME_STORAGE_KEY, THEME_MODES.DARK);
      document.documentElement.classList.add("dark");
    } else if (currentTheme === THEME_MODES.DARK) {
      localStorage.setItem(THEME_STORAGE_KEY, THEME_MODES.LIGHT);
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.removeItem(THEME_STORAGE_KEY);
      applySystemTheme();
    }
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function getThemeSnapshot(): ThemeMode {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === THEME_MODES.DARK) {
    return THEME_MODES.DARK;
  }
  if (savedTheme === THEME_MODES.LIGHT) {
    return THEME_MODES.LIGHT;
  }
  return THEME_MODES.SYSTEM;
}

function subscribeToTheme(onChange: () => void): () => void {
  window.addEventListener("storage", onChange);
  window.addEventListener(THEME_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
  };
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
