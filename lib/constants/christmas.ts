/**
 * Christmas mode configuration constants
 */

export const CHRISTMAS_MODES = {
  ENABLED: "enabled",
  DISABLED: "disabled",
} as const;

export type ChristmasMode =
  (typeof CHRISTMAS_MODES)[keyof typeof CHRISTMAS_MODES];

export function isChristmasSeason(date: Date): boolean {
  const month = date.getMonth();
  const day = date.getDate();

  return month === 11 || (month === 0 && day <= 6);
}
