import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import {
  getAdjacentPosts,
  getBlogPost,
  getBlogSlugs,
} from "@/lib/utils/mdx";
import { COMMON_CLASSES, cn } from "@/lib/constants/colors";
import Icon from "@/lib/components/Icon";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import type { BlogPost } from "@/lib/types";

// Import highlight.js theme
import "highlight.js/styles/github-dark.css";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.frontmatter.title} | Blog`,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      images: [post.frontmatter.image],
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;
  const { prev, next } = getAdjacentPosts(slug);

  // MDX components customization
  const components = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        className="mb-4 mt-8 text-4xl font-bold text-secondary dark:text-base-100"
        {...props}
      />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className="mb-3 mt-6 text-3xl font-semibold text-secondary dark:text-base-100"
        {...props}
      />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        className="mb-2 mt-4 text-2xl font-semibold text-secondary dark:text-base-100"
        {...props}
      />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p className={cn("mb-4 leading-relaxed", COMMON_CLASSES.TEXT)} {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className="mb-4 ml-6 list-disc space-y-2" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2" {...props} />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
      <li className={COMMON_CLASSES.TEXT} {...props} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a
        className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        className="my-4 border-l-4 border-primary-500 bg-base-200 dark:bg-[#1C1C1C] pl-4 py-2 italic"
        {...props}
      />
    ),
    code: (props: React.HTMLAttributes<HTMLElement> & { className?: string }) => {
      // Inline code
      if (!props.className) {
        return (
          <code
            className="rounded bg-base-200 dark:bg-[#1C1C1C] px-1.5 py-0.5 text-sm font-mono text-primary-600 dark:text-primary-400"
            {...props}
          />
        );
      }
      // Code blocks are handled by rehype-highlight
      return <code {...props} />;
    },
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
      <pre
        className="my-4 overflow-x-auto rounded-lg bg-[#0d1117] p-4 text-sm"
        {...props}
      />
    ),
    Note: ({ children }: { children: React.ReactNode }) => (
      <div className="my-6 rounded-lg border-l-4 border-primary-500 bg-primary-50 dark:bg-primary-900/20 p-4">
        <div className="flex items-start gap-3">
          <Icon
            name="bulb"
            className="mt-0.5 text-lg text-primary-600 dark:text-primary-400 flex-shrink-0"
          />
          <div className="text-sm text-secondary/80 dark:text-base-300">
            {children}
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Date */}
      <time className="block mb-4 text-sm text-secondary/60 dark:text-base-400">
        {new Date(frontmatter.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </time>

      {/* Title */}
      <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary dark:text-base-100 leading-tight">
        {frontmatter.title}
      </h1>

      {/* Hero Image */}
      {frontmatter.image && (
        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-16">
        <MDXRemote
          source={content}
          components={components}
          options={{
            mdxOptions: {
              rehypePlugins: [
                rehypeHighlight,
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
              ],
            },
          }}
        />
      </article>

      {/* Prev/Next Navigation */}
      <PostNavigation prev={prev} next={next} />
    </div>
  );
}

function PostNavigation({
  prev,
  next,
}: {
  prev: BlogPost | null;
  next: BlogPost | null;
}) {
  if (!prev && !next) {
    return null;
  }

  return (
    <nav className="mt-12 border-t border-secondary/10 dark:border-base-800 pt-8">
      <div className="flex justify-between items-stretch gap-4">
        {/* Previous Post (Older) */}
        {prev ? (
          <Link
            href={`/blog/${prev.slug}`}
            className={cn(
              "group flex-1 flex flex-col p-4 rounded-lg transition-colors",
              "hover:bg-base-200 dark:hover:bg-[#1C1C1C]"
            )}
          >
            <span className="text-xs text-secondary/60 dark:text-base-400 mb-1 flex items-center gap-1">
              <Icon name="chevron-back" className="text-sm" />
              Previous
            </span>
            <span className="text-secondary dark:text-base-100 font-medium group-hover:text-primary-500 transition-colors line-clamp-2">
              {prev.frontmatter.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {/* Next Post (Newer) */}
        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className={cn(
              "group flex-1 flex flex-col items-end text-right p-4 rounded-lg transition-colors",
              "hover:bg-base-200 dark:hover:bg-[#1C1C1C]"
            )}
          >
            <span className="text-xs text-secondary/60 dark:text-base-400 mb-1 flex items-center gap-1">
              Next
              <Icon name="chevron-forward" className="text-sm" />
            </span>
            <span className="text-secondary dark:text-base-100 font-medium group-hover:text-primary-500 transition-colors line-clamp-2">
              {next.frontmatter.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </nav>
  );
}
