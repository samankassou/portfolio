"use client";

import BlogItem from "./BlogItem";
import { useRef } from "react";
import Icon from "@/lib/components/Icon";
import type { BlogPost } from "@/lib/types";

interface BlogsListProps {
  posts: BlogPost[];
}

export default function BlogsList({ posts }: BlogsListProps) {
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust this value to control scroll distance
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="group/scroll relative">
      <ul
        ref={scrollContainerRef}
        className="scrollbar-hidden snap-x-proximity flex gap-6 overflow-x-auto scroll-smooth pb-4"
      >
        {posts &&
          posts.map((post) => (
            <li className="min-w-80 max-w-sm snap-center" key={post.slug}>
              <BlogItem key={post.slug} post={post} />
            </li>
          ))}
      </ul>

      {/* Scroll fade gradient - indicates more content */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-base via-base/50 to-transparent dark:from-[#000000] dark:via-[#000000]/50" />

      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-secondary/20 bg-base-100/95 p-3 text-secondary shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-primary/50 hover:bg-base-100 hover:text-primary dark:border-base-700 dark:bg-[#1C1C1C]/95 dark:text-base-100 dark:hover:border-primary/50 dark:hover:bg-[#1C1C1C] md:block"
        aria-label="Scroll left"
      >
        <Icon name="chevron-back" className="text-xl" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-secondary/20 bg-base-100/95 p-3 text-secondary shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-primary/50 hover:bg-base-100 hover:text-primary dark:border-base-700 dark:bg-[#1C1C1C]/95 dark:text-base-100 dark:hover:border-primary/50 dark:hover:bg-[#1C1C1C] md:block"
        aria-label="Scroll right"
      >
        <Icon name="chevron-forward" className="text-xl" />
      </button>
    </div>
  );
}
