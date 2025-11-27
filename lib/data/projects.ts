/**
 * Portfolio projects data
 * Extracted from projectsList.js and portfolioContainer.js
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
