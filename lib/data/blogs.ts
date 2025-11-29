/**
 * Blog posts data
 */

import type { Blog } from "@/lib/types";

/**
 * Blog posts
 */
export const blogs: Blog[] = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js 14",
    shortDescription:
      "Explore the latest features in Next.js 14 including Server Components, App Router, and how to build performant, production-ready applications.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "The Power of TypeScript in Modern Development",
    shortDescription:
      "Discover how TypeScript enhances code quality, developer experience, and maintainability in large-scale JavaScript applications.",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Mastering React Hooks: Best Practices and Patterns",
    shortDescription:
      "Learn advanced React Hooks patterns, custom hooks creation, and performance optimization techniques for modern React applications.",
    thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop",
  },
];
