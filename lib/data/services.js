/**
 * Services data
 * Extracted from servicesList.js
 */

/**
 * @typedef {Object} Service
 * @property {number} id
 * @property {string} icon - Ionicon name
 * @property {string} title - Service title
 * @property {string[]} items - List of service offerings
 */

/**
 * Services offered
 * @type {Service[]}
 */
export const services = [
  {
    id: 1,
    icon: "logo-html5",
    title: "Web Development",
    items: ["Frontend Development", "Backend Development", "CMS Development"],
  },
  {
    id: 2,
    icon: "phone-portrait",
    title: "App Development",
    items: [
      "iOS Development",
      "Android Development",
      "Cross-Platform Development",
    ],
  },
  {
    id: 3,
    icon: "grid",
    title: "UI / UX Design",
    items: [
      "User Research",
      "Wireframing & Visual Design",
      "Prototyping & Testing",
    ],
  },
  {
    id: 4,
    icon: "color-palette",
    title: "Graphics Design",
    items: ["Branding Design", "Social Media Post", "Logo Design"],
  },
  {
    id: 5,
    icon: "film",
    title: "Video Editing",
    items: ["Motion Graphics", "Video Editing", "VFX Editor"],
  },
];
