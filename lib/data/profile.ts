/**
 * Profile and personal information data
 * Extracted from leftSideMenu.js
 */

import type { ProfileData, ContactInfo, Skill } from "@/lib/types";

/**
 * Main profile data
 */
export const profileData: ProfileData = {
  name: "Foulla",
  title: "Product Developer",
  photo: "/img/profile/profile_pic_sm.jpg",
  badge: true,
};

/**
 * Contact information items
 */
export const contactInfo: ContactInfo[] = [
  { id: 1, label: "Email", value: "info@example.com" },
  { id: 2, label: "Phone", value: "+1 234 567 890" },
  { id: 3, label: "Residence", value: "Your Country" },
  { id: 4, label: "City", value: "Your City" },
  { id: 5, label: "Age", value: "24 Years" },
  { id: 6, label: "Freelance", value: "Available", highlight: true },
  { id: 7, label: "Language", value: "French, English" },
];

/**
 * Major skills with proficiency percentages
 */
export const majorSkills: Skill[] = [
  { id: 1, name: "Html", percentage: 90 },
  { id: 2, name: "CSS", percentage: 95 },
  { id: 3, name: "UI Design", percentage: 95 },
  { id: 4, name: "JavaScript", percentage: 70 },
  { id: 5, name: "WordPress", percentage: 80 },
];

/**
 * Extra skills (no percentage)
 */
export const extraSkills: Skill[] = [
  { id: 1, name: "Bootstrap" },
  { id: 2, name: "Materialize" },
  { id: 3, name: "Sass" },
  { id: 4, name: "Stylus" },
  { id: 5, name: "Less" },
  { id: 6, name: "Gulp" },
  { id: 7, name: "Grunt" },
  { id: 8, name: "Git Knowledge" },
  { id: 9, name: "Webpack" },
];
