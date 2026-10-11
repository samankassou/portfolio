/**
 * Site-wide configuration
 */

import type { SiteConfig, SocialLink } from "@/lib/types";

export const siteConfig: SiteConfig = {
  metadata: {
    title: "Azure DevOps & .NET Engineer | Foulla SAMANKASSOU",
    description:
      "Azure DevOps and .NET engineer who builds and modernizes applications on Microsoft Azure and leads AI and BI delivery.",
    language: "en",
    url: "https://samankassou.com",
  },
  author: {
    name: "Foulla SAMANKASSOU",
    email: "samankassoufoulla@gmail.com",
    phone: "+237691565877",
  },
};

/**
 * Social media links
 */
export const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: "logo-linkedin",
    url: "https://linkedin.com/in/sam-foulla",
    label: "LinkedIn",
  },
  {
    id: 2,
    icon: "logo-github",
    url: "https://github.com/samankassou",
    label: "GitHub",
  },
];
