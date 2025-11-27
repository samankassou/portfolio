/**
 * Type definitions for projects
 */

/**
 * @typedef {"All categories" | "UI Design" | "Web Templates" | "Logos" | "Branding"} ProjectCategory
 */

/**
 * @typedef {Object} Project
 * @property {number} id
 * @property {string} title - Project title
 * @property {string} link - Project URL
 * @property {string} coverImg - Cover image URL
 * @property {Exclude<ProjectCategory, "All categories">} category - Project category
 */

export default {};
