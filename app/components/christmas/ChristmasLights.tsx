"use client";

import { useChristmasMode } from "@/app/components/providers/ChristmasProvider";
import { useReducedMotion } from "@/lib/utils/animations";

interface ChristmasLightsProps {
  count?: number;
  className?: string;
}

export default function ChristmasLights({ count = 15, className = "" }: ChristmasLightsProps) {
  const { christmasMode } = useChristmasMode();
  const reducedMotion = useReducedMotion();

  if (christmasMode !== 'enabled') return null;

  const lights = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i / (count - 1)) * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    colorIndex: i % 4,
  }));

  return (
    <div className={`absolute inset-x-0 top-0 flex justify-between ${className}`} aria-hidden="true">
      {lights.map((light) => (
        <div
          key={light.id}
          className={`christmas-light ${reducedMotion ? '' : 'christmas-light-animated'}`}
          style={{
            left: light.left,
            animationDelay: light.animationDelay,
          }}
          data-color-index={light.colorIndex}
        />
      ))}
    </div>
  );
}
