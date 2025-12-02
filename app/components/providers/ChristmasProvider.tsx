"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { CHRISTMAS_MODES, CHRISTMAS_STORAGE_KEY, type ChristmasMode } from "@/lib/constants/christmas";

interface ChristmasContextValue {
  christmasMode: ChristmasMode | null;
  toggleChristmasMode: () => void;
}

const ChristmasContext = createContext<ChristmasContextValue | null>(null);

interface ChristmasProviderProps {
  children: ReactNode;
}

export function ChristmasProvider({ children }: ChristmasProviderProps) {
  const [christmasMode, setChristmasMode] = useState<ChristmasMode | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(CHRISTMAS_STORAGE_KEY);
    setChristmasMode(saved === CHRISTMAS_MODES.ENABLED ? CHRISTMAS_MODES.ENABLED : CHRISTMAS_MODES.DISABLED);
  }, []);

  const toggleChristmasMode = () => {
    const newMode = christmasMode === CHRISTMAS_MODES.ENABLED ? CHRISTMAS_MODES.DISABLED : CHRISTMAS_MODES.ENABLED;
    setChristmasMode(newMode);
    localStorage.setItem(CHRISTMAS_STORAGE_KEY, newMode);

    if (newMode === CHRISTMAS_MODES.ENABLED) {
      document.documentElement.classList.add('christmas-mode');
    } else {
      document.documentElement.classList.remove('christmas-mode');
    }
  };

  return (
    <ChristmasContext.Provider value={{ christmasMode, toggleChristmasMode }}>
      {children}
    </ChristmasContext.Provider>
  );
}

export function useChristmasMode(): ChristmasContextValue {
  const context = useContext(ChristmasContext);
  if (!context) {
    throw new Error("useChristmasMode must be used within ChristmasProvider");
  }
  return context;
}
