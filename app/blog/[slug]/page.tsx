import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import {
  getAllBlogPosts,
  getBlogPost,
  getBlogSlugs,
} from "@/lib/utils/mdx";
import { COMMON_CLASSES, cn } from "@/lib/constants/colors";
import Icon from "@/lib/components/Icon";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

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

  const { frontmatter, content, readingTime } = post;

  // MDX components customization
  const components = {
    h1: (props: any) => (
      <h1
        className="mb-4 mt-8 text-4xl font-bold text-secondary dark:text-base-100"
        {...props}
      />
    ),
    h2: (props: any) => (
      <h2
        className="mb-3 mt-6 text-3xl font-semibold text-secondary dark:text-base-100"
        {...props}
      />
    ),
    h3: (props: any) => (
      <h3
        className="mb-2 mt-4 text-2xl font-semibold text-secondary dark:text-base-100"
        {...props}
      />
    ),
    p: (props: any) => (
      <p className={cn("mb-4 leading-relaxed", COMMON_CLASSES.TEXT)} {...props} />
    ),
    ul: (props: any) => (
      <ul className="mb-4 ml-6 list-disc space-y-2" {...props} />
    ),
    ol: (props: any) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2" {...props} />
    ),
    li: (props: any) => (
      <li className={COMMON_CLASSES.TEXT} {...props} />
    ),
    a: (props: any) => (
      <a
        className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    blockquote: (props: any) => (
      <blockquote
        className="my-4 border-l-4 border-primary-500 bg-base-200 dark:bg-[#1C1C1C] pl-4 py-2 italic"
        {...props}
      />
    ),
    code: (props: any) => {
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
    pre: (props: any) => (
      <pre
        className="my-4 overflow-x-auto rounded-lg bg-[#0d1117] p-4 text-sm"
        {...props}
      />
    ),
  };

  return (
    <div className="min-h-screen">
      {/* Back to Blog */}
      <div className="mb-6">
        <Link
          href="/#blogs"
          className="inline-flex items-center gap-2 text-secondary/60 hover:text-secondary dark:text-base-400 dark:hover:text-base-100 transition-colors"
        >
          <Icon name="arrow-back" className="text-xl" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Hero Image */}
      {frontmatter.image && (
        <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-xl">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Article Header */}
      <article className={cn("rounded-xl p-8", COMMON_CLASSES.CARD_BG)}>
        <header className="mb-8 border-b border-secondary/10 dark:border-base-800 pb-8">
          {/* Category */}
          <div className="mb-3">
            <span className="inline-block rounded-full bg-primary-100 dark:bg-primary-900/30 px-3 py-1 text-sm font-medium text-primary-700 dark:text-primary-400">
              {frontmatter.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold text-secondary dark:text-base-100 lg:text-5xl">
            {frontmatter.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-secondary/60 dark:text-base-400">
            <div className="flex items-center gap-2">
              <Icon name="person-outline" />
              <span>{frontmatter.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="calendar-outline" />
              <time dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="time-outline" />
              <span>{readingTime}</span>
            </div>
          </div>

          {/* Tags */}
          {frontmatter.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-md bg-base-200 dark:bg-[#131313] px-2 py-1 text-xs text-secondary/80 dark:text-base-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
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
        </div>
      </article>

      {/* Related Posts */}
      <RelatedPosts currentSlug={slug} category={frontmatter.category} />
    </div>
  );
}

function RelatedPosts({
  currentSlug,
  category,
}: {
  currentSlug: string;
  category: string;
}) {
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter(
      (post) =>
        post.slug !== currentSlug && post.frontmatter.category === category
    )
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="mb-6 text-2xl font-bold text-secondary dark:text-base-100">
        Related Posts
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={cn(
              "group rounded-xl p-6 transition-all hover:scale-105",
              COMMON_CLASSES.CARD_BG
            )}
          >
            {post.frontmatter.image && (
              <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg">
                <Image
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
            )}
            <h3 className="mb-2 text-lg font-semibold text-secondary dark:text-base-100 group-hover:text-primary-500">
              {post.frontmatter.title}
            </h3>
            <p className={cn("text-sm line-clamp-2", COMMON_CLASSES.TEXT_MUTED)}>
              {post.frontmatter.excerpt}
            </p>
            <div className="mt-2 text-xs text-secondary/60 dark:text-base-400">
              {new Date(post.frontmatter.date).toLocaleDateString()}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
