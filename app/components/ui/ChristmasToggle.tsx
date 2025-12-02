"use client";

import { useChristmasMode } from "@/app/components/providers/ChristmasProvider";
import { CHRISTMAS_ICONS } from "@/lib/constants/christmas";
import Icon from "@/lib/components/Icon";
import type { IconName } from "@/lib/components/Icon";

interface ChristmasToggleProps {
  className?: string;
}

export default function ChristmasToggle({ className = "" }: ChristmasToggleProps) {
  const { christmasMode, toggleChristmasMode } = useChristmasMode();

  return (
    <button
      onClick={toggleChristmasMode}
      className={className}
      aria-label="Toggle Christmas mode"
      type="button"
    >
      <Icon
        name={(christmasMode ? CHRISTMAS_ICONS[christmasMode] : CHRISTMAS_ICONS.disabled) as IconName}
      />
    </button>
  );
}
