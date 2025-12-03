import Image from "next/image";
import Link from "next/link";
import { COMMON_CLASSES, cn } from "@/lib/constants/colors";
import type { BlogPost } from "@/lib/types";
import Icon from "@/lib/components/Icon";

interface BlogItemProps {
  post: BlogPost;
}

export default function BlogItem({ post }: BlogItemProps) {
  const { slug, frontmatter, readingTime } = post;

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300",
        "border border-secondary/10 dark:border-base-800",
        "hover:scale-[1.02] hover:shadow-xl hover:border-primary/30 dark:hover:border-primary/50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-secondary",
        COMMON_CLASSES.CARD_BG
      )}
    >
      <div className="relative h-52 w-full flex-shrink-0 overflow-hidden">
        <Image
          src={frontmatter.image}
          alt={frontmatter.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-8">
        <div className="flex-1 space-y-3">
          {/* Category Badge */}
          <span className="inline-block rounded-full bg-primary-100 dark:bg-primary-900/40 px-3 py-1 text-xs font-semibold text-primary-700 dark:text-primary-300 shadow-sm">
            {frontmatter.category}
          </span>

          <h3 className="text-xl font-bold leading-snug text-base-content dark:text-base-100 line-clamp-2">
            {frontmatter.title}
          </h3>
          <p className="leading-relaxed text-secondary/70 dark:text-base-400 line-clamp-2">
            {frontmatter.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-secondary/50 dark:text-base-500">
            <span className="flex items-center gap-1">
              <Icon name="calendar-outline" />
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="time-outline" />
              {readingTime}
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary-700 dark:group-hover:text-primary-400">
          <span>Read more</span>
          <Icon name="arrow-forward" className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
