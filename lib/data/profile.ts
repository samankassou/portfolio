/**
 * Profile and personal information data
 * Extracted from leftSideMenu.js
 */

import type {
  ProfileData,
  ContactInfo,
  Skill,
  SkillCategory,
} from "@/lib/types";

/**
 * Main profile data
 */
export const profileData: ProfileData = {
  name: "Foulla SAMANKASSOU",
  title: "Software Engineer",
  photo: "/img/profile/profile_pic_sm.webp",
  badge: true,
};

/**
 * Contact information items
 */
export const contactInfo: ContactInfo[] = [
  { id: 1, label: "Email", value: "samankassoufoulla@gmail.com" },
  { id: 2, label: "Phone", value: "+237 691 56 58 77" },
  { id: 3, label: "Location", value: "Douala, Cameroon" },
  { id: 4, label: "LinkedIn", value: "sam-foulla", highlight: false },
  { id: 5, label: "GitHub", value: "samankassou", highlight: false },
  { id: 6, label: "Freelance", value: "Available", highlight: true },
];

/**
 * Categorized skills organized by domain
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    category: "Programming Languages",
    skills: [
      { id: 1, name: "C#" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "PHP" },
      { id: 5, name: "HTML/CSS" },
    ],
  },
  {
    id: 2,
    category: "Frameworks & Libraries",
    skills: [
      { id: 6, name: ".NET Core" },
      { id: 7, name: "React" },
      { id: 8, name: "Vue.js" },
      { id: 9, name: "Laravel" },
      { id: 10, name: "TailwindCSS" },
      { id: 11, name: "Bootstrap" },
    ],
  },
  {
    id: 3,
    category: "Cloud & DevOps",
    skills: [
      { id: 12, name: "Microsoft Azure" },
      { id: 13, name: "Azure DevOps" },
      { id: 14, name: "Azure OpenAI" },
      { id: 15, name: "Docker" },
      { id: 16, name: "Git" },
    ],
  },
  {
    id: 4,
    category: "Business Intelligence",
    skills: [
      { id: 17, name: "Power BI" },
      { id: 18, name: "QlikView" },
      { id: 19, name: "Talend" },
      { id: 20, name: "AI Builder" },
    ],
  },
  {
    id: 5,
    category: "Databases",
    skills: [
      { id: 21, name: "SQL Server" },
      { id: 22, name: "Azure SQL" },
      { id: 23, name: "MySQL" },
      { id: 24, name: "PostgreSQL" },
      { id: 25, name: "SQLite" },
    ],
  },
  {
    id: 6,
    category: "Systems",
    skills: [
      { id: 26, name: "Windows / Windows Server" },
      { id: 27, name: "macOS" },
      { id: 28, name: "Linux (Ubuntu, CentOS, Kali)" },
    ],
  },
];

/**
 * Major skills (backward compatibility - no percentages)
 */
export const majorSkills: Skill[] = [
  { id: 1, name: "C#" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "React" },
  { id: 4, name: "Azure DevOps" },
  { id: 5, name: "Power BI" },
];

/**
 * Extra skills (backward compatibility)
 */
export const extraSkills: Skill[] = [
  { id: 1, name: "Docker" },
  { id: 2, name: "Git" },
  { id: 3, name: "Laravel" },
  { id: 4, name: ".NET Core" },
  { id: 5, name: "Vue.js" },
  { id: 6, name: "Azure OpenAI" },
];
