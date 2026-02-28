import Link from "next/link";
import BlogsList from "./BlogsList";
import { getAllBlogPosts } from "@/lib/utils/mdx";

export default function Blogs() {
  const posts = getAllBlogPosts();

  return (
    <div>
      <BlogsList posts={posts} />
      <div className="mt-6 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-700 dark:hover:text-primary-400"
        >
          View all posts
          <span className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
