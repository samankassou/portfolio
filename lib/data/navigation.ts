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
  { id: "home", icon: "home", label: "Home", href: "/" },
  {
    id: "portfolio",
    icon: "folder",
    label: "Case Studies",
    href: "/#portfolio",
  },
  {
    id: "experience",
    icon: "briefcase",
    label: "Experience",
    href: "/#experience",
  },
  {
    id: "capabilities",
    icon: "grid",
    label: "Capabilities",
    href: "/#capabilities",
  },
  {
    id: "testimonials",
    icon: "chatbubbles",
    label: "Testimonials",
    href: "/#testimonials",
  },
  {
    id: "education",
    icon: "school",
    label: "Education",
    href: "/#education",
  },
  { id: "contact", icon: "mail", label: "Contact", href: "/#contact" },
];
