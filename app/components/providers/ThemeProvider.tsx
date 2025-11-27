"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { THEME_MODES, THEME_STORAGE_KEY, type ThemeMode } from "@/lib/constants/theme";

interface ThemeContextValue {
  theme: ThemeMode | null;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeMode | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === THEME_MODES.DARK) {
      setTheme(THEME_MODES.DARK);
    } else if (savedTheme === THEME_MODES.LIGHT) {
      setTheme(THEME_MODES.LIGHT);
    } else {
      setTheme(THEME_MODES.SYSTEM);
    }
  }, []);

  const applySystemTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    if (theme === THEME_MODES.SYSTEM) {
      setTheme(THEME_MODES.DARK);
      localStorage.setItem(THEME_STORAGE_KEY, THEME_MODES.DARK);
      document.documentElement.classList.add("dark");
    } else if (theme === THEME_MODES.DARK) {
      setTheme(THEME_MODES.LIGHT);
      localStorage.setItem(THEME_STORAGE_KEY, THEME_MODES.LIGHT);
      document.documentElement.classList.remove("dark");
    } else if (theme === THEME_MODES.LIGHT) {
      setTheme(THEME_MODES.SYSTEM);
      localStorage.removeItem(THEME_STORAGE_KEY);
      applySystemTheme();
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
