/**
 * Christmas mode configuration constants
 */

export const CHRISTMAS_MODES = {
  ENABLED: "enabled",
  DISABLED: "disabled",
} as const;

export type ChristmasMode = typeof CHRISTMAS_MODES[keyof typeof CHRISTMAS_MODES];

export const CHRISTMAS_STORAGE_KEY = "christmas-mode" as const;

/**
 * Theme-aware Christmas colors
 * Dark mode: Warm, cozy tones (gold, coral-red, teal, peach)
 * Light mode: Traditional but subtle (red, green, gold, blue)
 */
export const CHRISTMAS_COLORS = {
  darkMode: {
    lights: ['#FFD700', '#FF6B6B', '#4ECDC4', '#FFA07A'], // Gold, coral-red, teal, peach
    snow: 'rgba(255, 255, 255, 0.9)',
    ornament: '#FFD700',
    glow: 'rgba(255, 215, 0, 0.4)'
  },
  lightMode: {
    lights: ['#C41E3A', '#0F8A5F', '#FFD700', '#4169E1'], // Red, green, gold, blue
    snow: 'rgba(200, 220, 255, 0.7)',
    ornament: '#C41E3A',
    glow: 'rgba(196, 30, 58, 0.3)'
  }
} as const;

/**
 * Icon mapping for Christmas toggle button
 */
export const CHRISTMAS_ICONS: Record<ChristmasMode, string> = {
  enabled: "snow",
  disabled: "snow-outline",
};
