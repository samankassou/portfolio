import { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/utils/mdx";
import BlogIndexClient from "./BlogIndexClient";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog | Portfolio - Foulla SAMANKASSOU",
  description:
    "Articles about Azure, DevOps, .NET, software engineering, cloud modernization, and complementary AI and BI work.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts().map(({ slug, frontmatter, readingTime }) => ({
    slug,
    frontmatter,
    readingTime,
  }));
  const categories = Array.from(
    new Set(posts.map((post) => post.frontmatter.category)),
  ).sort();

  return <BlogIndexClient posts={posts} categories={categories} />;
}
