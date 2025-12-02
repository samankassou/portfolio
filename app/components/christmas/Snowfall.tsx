"use client";

import { useChristmasMode } from "@/app/components/providers/ChristmasProvider";
import { useReducedMotion } from "@/lib/utils/animations";

export default function Snowfall() {
  const { christmasMode } = useChristmasMode();
  const reducedMotion = useReducedMotion();

  if (christmasMode !== 'enabled' || reducedMotion) return null;

  const snowflakeCount = 50;
  const snowflakes = Array.from({ length: snowflakeCount }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${8 + Math.random() * 12}s`,
    animationDelay: `${Math.random() * 5}s`,
    opacity: 0.3 + Math.random() * 0.5,
    size: 2 + Math.random() * 4,
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
