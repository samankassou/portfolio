/**
 * Portfolio projects data
 */

import type { ProjectCategory, Project } from "@/lib/types";

/**
 * Available project categories for filtering
 */
export const projectCategories: ProjectCategory[] = [
  "All categories",
  "UI Design",
  "Web Templates",
  "Logos",
  "Branding",
];

/**
 * Portfolio projects
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    link: "Full-Stack Web Application",
    coverImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    category: "UI Design",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    link: "iOS & Android Application",
    coverImg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop",
    category: "UI Design",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    link: "Modern React Template",
    coverImg: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=400&h=400&fit=crop",
    category: "Web Templates",
  },
  {
    id: 4,
    title: "Portfolio Template Pro",
    link: "Next.js & Tailwind CSS",
    coverImg: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=400&fit=crop",
    category: "Web Templates",
  },
  {
    id: 5,
    title: "Tech Startup Logo",
    link: "Brand Identity Design",
    coverImg: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=400&h=400&fit=crop",
    category: "Logos",
  },
  {
    id: 6,
    title: "Coffee Shop Branding",
    link: "Logo & Visual Identity",
    coverImg: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop",
    category: "Logos",
  },
  {
    id: 7,
    title: "Fitness Brand Identity",
    link: "Complete Branding Package",
    coverImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    category: "Branding",
  },
  {
    id: 8,
    title: "Corporate Rebranding",
    link: "Visual Identity Redesign",
    coverImg: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
    category: "Branding",
  },
];
