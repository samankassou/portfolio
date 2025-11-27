/**
 * Navigation data
 * Single source of truth for all navigation menus (mobile, sidebar, etc.)
 */

import type { NavItem } from "@/lib/types";

/**
 * Main navigation items
 * Used across mobile menu, sidebar navigation, etc.
 */
export const mainNavigation: NavItem[] = [
  { id: "home", icon: "home", label: "Home", href: "#" },
  { id: "services", icon: "grid", label: "Services", href: "#services" },
  { id: "education", icon: "school", label: "Education", href: "#education" },
  {
    id: "experience",
    icon: "briefcase",
    label: "Experience",
    href: "#experience",
  },
  { id: "portfolio", icon: "folder", label: "Portfolio", href: "#portfolio" },
  {
    id: "testimonials",
    icon: "chatbubbles",
    label: "Testimonials",
    href: "#testimonials",
  },
  { id: "blog", icon: "newspaper", label: "Blog", href: "#blog" },
  { id: "contact", icon: "mail", label: "Contact", href: "#contact" },
];
