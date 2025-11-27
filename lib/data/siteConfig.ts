/**
 * Site-wide configuration
 */

import type { SiteConfig, SocialLink } from "@/lib/types";

export const siteConfig: SiteConfig = {
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
 * Social media links
 */
export const socialLinks: SocialLink[] = [
  { id: 1, icon: "logo-facebook", url: "#", label: "Facebook" },
  { id: 2, icon: "logo-twitter", url: "#", label: "Twitter" },
  { id: 3, icon: "logo-instagram", url: "#", label: "Instagram" },
  { id: 4, icon: "logo-linkedin", url: "#", label: "LinkedIn" },
  { id: 5, icon: "logo-youtube", url: "#", label: "YouTube" },
  { id: 6, icon: "logo-github", url: "#", label: "GitHub" },
];
