import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogFrontmatter, BlogPost } from "@/lib/types";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "content/blog");

/**
 * Get all blog post slugs
 */
export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_CONTENT_PATH)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_CONTENT_PATH)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

/**
 * Get a single blog post by slug
 */
export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(BLOG_CONTENT_PATH, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      // Try .md extension
      const mdPath = path.join(BLOG_CONTENT_PATH, `${slug}.md`);
      if (!fs.existsSync(mdPath)) {
        return null;
      }
      return parseBlogFile(mdPath, slug);
    }

    return parseBlogFile(fullPath, slug);
  } catch (error) {
    console.error(`Error reading blog post: ${slug}`, error);
    return null;
  }
}

/**
 * Parse a blog file and extract frontmatter and content
 */
function parseBlogFile(filePath: string, slug: string): BlogPost {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  // Validate and type-cast frontmatter
  const frontmatter: BlogFrontmatter = {
    title: data.title || "Untitled",
    excerpt: data.excerpt || "",
    date: data.date || new Date().toISOString(),
    category: data.category || "Uncategorized",
    image: data.image || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    author: data.author || "Anonymous",
    featured: data.featured === true,
  };

  return {
    slug,
    frontmatter,
    content,
    readingTime: stats.text,
  };
}

/**
 * Get all blog posts, sorted by date (newest first)
 */
export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogSlugs();

  const posts = slugs
    .map((slug) => getBlogPost(slug))
    .filter((post): post is BlogPost => post !== null);

  // Sort by date, newest first
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();
    return dateB - dateA;
  });
}

/**
 * Get featured blog posts
 */
export function getFeaturedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.frontmatter.featured);
}

/**
 * Get blog posts by category
 */
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter(
    (post) => post.frontmatter.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get blog posts by tag
 */
export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getAllBlogPosts().filter((post) =>
    post.frontmatter.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = posts.map((post) => post.frontmatter.category);
  return Array.from(new Set(categories)).sort();
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tags = posts.flatMap((post) => post.frontmatter.tags);
  return Array.from(new Set(tags)).sort();
}
