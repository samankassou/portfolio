/**
 * Type definitions for profile-related data
 */

/**
 * @typedef {Object} ProfileData
 * @property {string} name - User's full name
 * @property {string} title - Professional title
 * @property {string} photo - Path to profile photo
 * @property {boolean} badge - Show verification badge
 */

/**
 * @typedef {Object} ContactInfo
 * @property {number} id
 * @property {string} label - Field label (e.g., "Email")
 * @property {string} value - Contact value
 * @property {boolean} [highlight] - Highlight this item
 */

/**
 * @typedef {Object} Skill
 * @property {number} id
 * @property {string} name - Skill name
 * @property {number} [percentage] - Proficiency percentage (0-100)
 */

export default {};
