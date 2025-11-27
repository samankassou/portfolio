/**
 * Profile and personal information data
 * Extracted from leftSideMenu.js
 */

/**
 * @typedef {Object} ProfileData
 * @property {string} name
 * @property {string} title
 * @property {string} photo
 * @property {boolean} badge
 */

/**
 * Main profile data
 * @type {ProfileData}
 */
export const profileData = {
  name: "Foulla",
  title: "Product Developer",
  photo: "/img/profile_pic_sm.jpg",
  badge: true,
};

/**
 * @typedef {Object} ContactInfo
 * @property {number} id
 * @property {string} label
 * @property {string} value
 * @property {boolean} [highlight]
 */

/**
 * Contact information items
 * @type {ContactInfo[]}
 */
export const contactInfo = [
  { id: 1, label: "Email", value: "info@example.com" },
  { id: 2, label: "Phone", value: "+1 234 567 890" },
  { id: 3, label: "Residence", value: "Your Country" },
  { id: 4, label: "City", value: "Your City" },
  { id: 5, label: "Age", value: "24 Years" },
  { id: 6, label: "Freelance", value: "Available", highlight: true },
  { id: 7, label: "Language", value: "French, English" },
];

/**
 * @typedef {Object} Skill
 * @property {number} id
 * @property {string} name
 * @property {number} [percentage] - Proficiency percentage (0-100)
 */

/**
 * Major skills with proficiency percentages
 * @type {Skill[]}
 */
export const majorSkills = [
  { id: 1, name: "Html", percentage: 90 },
  { id: 2, name: "CSS", percentage: 95 },
  { id: 3, name: "UI Design", percentage: 95 },
  { id: 4, name: "JavaScript", percentage: 70 },
  { id: 5, name: "WordPress", percentage: 80 },
];

/**
 * Extra skills (no percentage)
 * @type {Skill[]}
 */
export const extraSkills = [
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
