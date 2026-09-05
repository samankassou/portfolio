"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BlogItem from "@/app/components/sections/Blogs/BlogItem";
import { COMMON_CLASSES, cn } from "@/lib/constants/colors";
import {
  staggerContainer,
  fadeInUp,
  useReducedMotion,
  getTransition,
} from "@/lib/utils/animations";
import type { BlogPostSummary } from "@/lib/types";

interface BlogIndexClientProps {
  posts: BlogPostSummary[];
  categories: string[];
}

export default function BlogIndexClient({
  posts,
  categories,
}: BlogIndexClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const reducedMotion = useReducedMotion();

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter(
          (post) =>
            post.frontmatter.category.toLowerCase() ===
            activeCategory.toLowerCase(),
        );

  const allCategories = ["All", ...categories];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1
          className={`mb-3 text-3xl font-bold md:text-4xl ${COMMON_CLASSES.TEXT}`}
        >
          Blog
        </h1>
        <p
          className={`mx-auto max-w-xl text-sm leading-6 md:text-base ${COMMON_CLASSES.TEXT_MUTED}`}
        >
          Thoughts on software engineering, technology, and building great
          products.
        </p>
      </div>

      {/* Category Filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              activeCategory === category
                ? "bg-primary text-base-content shadow-sm"
                : "bg-base-200 text-secondary/70 hover:bg-base-300 dark:bg-[#131313] dark:text-base-400 dark:hover:bg-[#1C1C1C]",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={getTransition(reducedMotion, 0.3)}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              variants={fadeInUp}
              transition={getTransition(reducedMotion, 0.4)}
            >
              <BlogItem post={post} eager={index === 0} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className={`py-12 text-center text-lg ${COMMON_CLASSES.TEXT_MUTED}`}>
          No posts found in this category.
        </p>
      )}
    </div>
  );
}
