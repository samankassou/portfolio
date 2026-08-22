"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  CHRISTMAS_MODES,
  isChristmasSeason,
  type ChristmasMode,
} from "@/lib/constants/christmas";

interface ChristmasContextValue {
  christmasMode: ChristmasMode | null;
}

const ChristmasContext = createContext<ChristmasContextValue | null>(null);
const SEASON_CHECK_INTERVAL_MS = 60 * 60 * 1_000;

interface ChristmasProviderProps {
  children: ReactNode;
}

export function ChristmasProvider({ children }: ChristmasProviderProps) {
  const christmasMode = useSyncExternalStore<ChristmasMode | null>(
    subscribeToChristmasSeason,
    getChristmasModeSnapshot,
    () => null,
  );

  useEffect(() => {
    document.documentElement.classList.toggle(
      "christmas-mode",
      christmasMode === CHRISTMAS_MODES.ENABLED,
    );
  }, [christmasMode]);

  return (
    <ChristmasContext.Provider value={{ christmasMode }}>
      {children}
    </ChristmasContext.Provider>
  );
}

function getChristmasModeSnapshot(): ChristmasMode {
  return isChristmasSeason(new Date())
    ? CHRISTMAS_MODES.ENABLED
    : CHRISTMAS_MODES.DISABLED;
}

function subscribeToChristmasSeason(onChange: () => void): () => void {
  const intervalId = window.setInterval(onChange, SEASON_CHECK_INTERVAL_MS);
  document.addEventListener("visibilitychange", onChange);

  return () => {
    window.clearInterval(intervalId);
    document.removeEventListener("visibilitychange", onChange);
  };
}

export function useChristmasMode(): ChristmasContextValue {
  const context = useContext(ChristmasContext);
  if (!context) {
    throw new Error("useChristmasMode must be used within ChristmasProvider");
  }
  return context;
}
