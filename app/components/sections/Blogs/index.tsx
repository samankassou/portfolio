import BlogsList from "./BlogsList";
import { getAllBlogPosts } from "@/lib/utils/mdx";

export default function Blogs() {
  const posts = getAllBlogPosts();

  return <BlogsList posts={posts} />;
}
