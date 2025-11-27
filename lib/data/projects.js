/**
 * Portfolio projects data
 * Extracted from projectsList.js and portfolioContainer.js
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

/**
 * Available project categories for filtering
 * @type {ProjectCategory[]}
 */
export const projectCategories = [
  "All categories",
  "UI Design",
  "Web Templates",
  "Logos",
  "Branding",
];

/**
 * Portfolio projects
 * @type {Project[]}
 */
export const projects = [
  {
    id: 1,
    title: "Google",
    link: "Lead Web Developer",
    coverImg: "https://picsum.photos/400/400?random=1",
    category: "UI Design",
  },
  {
    id: 2,
    title: "Facebook",
    link: "Lead Web Developer",
    coverImg: "https://picsum.photos/400/400?random=2",
    category: "UI Design",
  },
  {
    id: 3,
    title: "Microsoft",
    link: "Lead Web Developer",
    coverImg: "https://picsum.photos/400/400?random=3",
    category: "Web Templates",
  },
  {
    id: 4,
    title: "Microsoft",
    link: "Lead Web Developer",
    coverImg: "https://picsum.photos/400/400?random=4",
    category: "Web Templates",
  },
  {
    id: 5,
    title: "Microsoft",
    link: "Lead Web Developer",
    coverImg: "https://picsum.photos/400/400?random=5",
    category: "Logos",
  },
  {
    id: 6,
    title: "Microsoft",
    link: "Lead Web Developer",
    coverImg: "https://picsum.photos/400/400?random=6",
    category: "Logos",
  },
  {
    id: 7,
    title: "Microsoft",
    link: "Lead Web Developer",
    coverImg: "https://picsum.photos/400/400?random=7",
    category: "Branding",
  },
  {
    id: 8,
    title: "Microsoft",
    link: "Lead Web Developer",
    coverImg: "https://picsum.photos/400/400?random=8",
    category: "Branding",
  },
];
