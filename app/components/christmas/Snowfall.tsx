"use client";

import { useChristmasMode } from "@/app/components/providers/ChristmasProvider";
import { useReducedMotion } from "@/lib/utils/animations";

export default function Snowfall() {
  const { christmasMode } = useChristmasMode();
  const reducedMotion = useReducedMotion();

  if (christmasMode !== "enabled" || reducedMotion) return null;

  const snowflakeCount = 50;
  const snowflakes = Array.from({ length: snowflakeCount }, (_, i) => ({
    id: i,
    left: `${seededValue(i, 1) * 100}%`,
    animationDuration: `${8 + seededValue(i, 2) * 12}s`,
    animationDelay: `${seededValue(i, 3) * 5}s`,
    opacity: 0.3 + seededValue(i, 4) * 0.5,
    size: 2 + seededValue(i, 5) * 4,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-50" aria-hidden="true">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake absolute top-0"
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            opacity: flake.opacity,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
          }}
        />
      ))}
    </div>
  );
}

function seededValue(index: number, salt: number): number {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}
