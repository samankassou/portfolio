/**
 * Site-wide configuration
 */

import type { SiteConfig, SocialLink } from "@/lib/types";

export const siteConfig: SiteConfig = {
  metadata: {
    title: "Portfolio - Foulla SAMANKASSOU",
    description: "Software Engineer specializing in BI, AI, Cloud Solutions, and Full-Stack Development",
    language: "en",
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
  { id: 1, icon: "logo-linkedin", url: "https://linkedin.com/in/sam-foulla", label: "LinkedIn" },
  { id: 2, icon: "logo-github", url: "https://github.com/samankassou", label: "GitHub" },
];
