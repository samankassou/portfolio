import { Metadata } from "next";
import { getAllBlogPosts, getAllCategories } from "@/lib/utils/mdx";
import BlogIndexClient from "./BlogIndexClient";

export const metadata: Metadata = {
  title: "Blog | Portfolio - Foulla SAMANKASSOU",
  description:
    "Articles about software engineering, BI, AI, cloud solutions, and full-stack development.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getAllCategories();

  return <BlogIndexClient posts={posts} categories={categories} />;
}
