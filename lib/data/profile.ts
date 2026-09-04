/**
 * Profile and personal information data
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
  title: "Azure DevOps & .NET Engineer",
  photo: "/img/profile/profile_pic_sm.webp",
  badge: false,
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
];

/**
 * Categorized skills organized by domain
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    category: "Azure & DevOps",
    skills: [
      { id: 1, name: "Microsoft Azure" },
      { id: 2, name: "Azure DevOps" },
      { id: 3, name: "Docker" },
      { id: 4, name: "Git" },
    ],
  },
  {
    id: 2,
    category: ".NET Engineering",
    skills: [
      { id: 5, name: "C#" },
      { id: 6, name: ".NET Core" },
      { id: 7, name: "SQL Server" },
      { id: 8, name: "Azure SQL" },
    ],
  },
  {
    id: 3,
    category: "Web Engineering",
    skills: [
      { id: 9, name: "PHP" },
      { id: 10, name: "Laravel" },
      { id: 11, name: "JavaScript" },
      { id: 12, name: "TypeScript" },
      { id: 13, name: "React" },
      { id: 14, name: "Vue.js" },
      { id: 15, name: "HTML/CSS" },
      { id: 16, name: "TailwindCSS" },
      { id: 17, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    category: "Databases",
    skills: [
      { id: 18, name: "MySQL" },
      { id: 19, name: "PostgreSQL" },
      { id: 20, name: "SQLite" },
    ],
  },
  {
    id: 5,
    category: "Systems",
    skills: [
      { id: 21, name: "Windows / Windows Server" },
      { id: 22, name: "macOS" },
      { id: 23, name: "Linux (Ubuntu, CentOS, Kali)" },
    ],
  },
  {
    id: 6,
    category: "AI & Business Intelligence",
    skills: [
      { id: 24, name: "Azure OpenAI" },
      { id: 25, name: "AI Builder" },
      { id: 26, name: "Power BI" },
      { id: 27, name: "QlikView" },
      { id: 28, name: "Talend" },
    ],
  },
];

/**
 * Major skills (backward compatibility - no percentages)
 */
export const majorSkills: Skill[] = [
  { id: 1, name: "Microsoft Azure" },
  { id: 2, name: "Azure DevOps" },
  { id: 3, name: "C#" },
  { id: 4, name: ".NET Core" },
  { id: 5, name: "Laravel" },
];

/**
 * Extra skills (backward compatibility)
 */
export const extraSkills: Skill[] = [
  { id: 1, name: "Docker" },
  { id: 2, name: "Git" },
  { id: 3, name: "PHP" },
  { id: 4, name: "React" },
  { id: 5, name: "Vue.js" },
  { id: 6, name: "Power BI" },
];
