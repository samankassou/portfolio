/**
 * @typedef {Object} SiteConfig
 * @property {Object} metadata - Site metadata
 * @property {Object} author - Author information
 */

/**
 * Site-wide configuration
 */
export const siteConfig = {
  metadata: {
    title: "Portfolio - Samankassou",
    description: "The portfolio of Samankassou, a full-stack web developer",
    language: "fr",
  },
  author: {
    name: "Foulla SAMANKASSOU",
    email: "samankassoufoulla@gmail.com",
    skype: "@foullasamankassou",
    telegram: "@foullasamankassou",
  },
};

/**
 * @typedef {Object} SocialLink
 * @property {number} id
 * @property {string} icon - Ionicon name
 * @property {string} url - Link URL
 * @property {string} label - Link label for accessibility
 */

/**
 * Social media links
 * @type {SocialLink[]}
 */
export const socialLinks = [
  { id: 1, icon: "logo-facebook", url: "#", label: "Facebook" },
  { id: 2, icon: "logo-twitter", url: "#", label: "Twitter" },
  { id: 3, icon: "logo-instagram", url: "#", label: "Instagram" },
  { id: 4, icon: "logo-linkedin", url: "#", label: "LinkedIn" },
  { id: 5, icon: "logo-youtube", url: "#", label: "YouTube" },
  { id: 6, icon: "logo-github", url: "#", label: "GitHub" },
];
