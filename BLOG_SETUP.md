# MDX blog authoring guide

The portfolio includes an optional, repository-backed blog. Articles live in `content/blog/` and are rendered at `/blog` and `/blog/[slug]`.

The blog is intentionally separate from the primary homepage journey: the homepage and main navigation do not promote it by default. Add a blog navigation item or section only when publishing it becomes part of the portfolio strategy.

## How content is organized

Each `.mdx` or `.md` file in `content/blog/` becomes one article. The filename is the URL slug:

```text
content/blog/power-bi-migration.mdx → /blog/power-bi-migration
```

Posts are sorted from newest to oldest using the `date` value in their frontmatter.

## Required frontmatter

Add YAML metadata between `---` delimiters at the start of each file:

```yaml
---
title: "Migrating from QlikView to Power BI"
excerpt: "A practical framework for modernizing enterprise reporting."
date: "2026-08-22"
category: "BI & Data"
image: "https://images.unsplash.com/photo-..."
tags: ["Power BI", "Migration", "Analytics"]
author: "Foulla SAMANKASSOU"
featured: true
---
```

| Field      | Purpose                                                    |
| ---------- | ---------------------------------------------------------- |
| `title`    | Article title and metadata title.                          |
| `excerpt`  | Summary used in the article list and metadata description. |
| `date`     | Publication date in `YYYY-MM-DD` format.                   |
| `category` | Category label used by the blog filter.                    |
| `image`    | Cover image URL and Open Graph article image.              |
| `tags`     | Searchable list of topic labels.                           |
| `author`   | Author displayed in article metadata.                      |
| `featured` | Boolean available for featured-post queries.               |

Keep frontmatter values accurate. The parser provides fallbacks for missing fields, but complete metadata produces a better reading and sharing experience.

## Create an article

1. Create a URL-friendly file in `content/blog/`, for example `azure-openai-patterns.mdx`.
2. Copy the frontmatter template above and update every value.
3. Write the article below the closing `---` using Markdown or supported MDX components.
4. Start the site and review both the blog index and article page.
5. Run the project checks before publishing.

```bash
npm run dev
npm run type-check
npm run lint
```

## Supported writing features

- Headings, paragraphs, emphasis, links, lists, blockquotes, and tables.
- Inline code and fenced code blocks with syntax highlighting.
- Automatic heading IDs and linked headings.
- Automatic reading-time calculation.
- Responsive cover images through Next.js.
- Page metadata and article Open Graph fields.
- Previous and next article navigation.
- A custom `<Note>` callout component.

Example:

````mdx
## A clear section title

Explain the idea in short paragraphs.

<Note>Keep confidential client details anonymized.</Note>

```typescript
const outcome = "A maintainable reporting foundation";
```
````

## Images

External cover images must use a hostname allowed by `next.config.mjs`. Prefer stable, appropriately licensed images with descriptive context. If an image does not load:

1. verify the URL in a browser;
2. confirm its hostname is configured for Next.js images;
3. restart the development server after changing the configuration.

## Implementation reference

| Location                       | Responsibility                                             |
| ------------------------------ | ---------------------------------------------------------- |
| `content/blog/`                | Article source files.                                      |
| `lib/utils/mdx.ts`             | File parsing, sorting, filtering, and reading time.        |
| `app/blog/page.tsx`            | Blog index metadata and data loading.                      |
| `app/blog/BlogIndexClient.tsx` | Client-side index and category filtering.                  |
| `app/blog/[slug]/page.tsx`     | Article rendering, metadata, and adjacent-post navigation. |
| `lib/types/index.ts`           | `BlogFrontmatter` and `BlogPost` types.                    |

The main helpers in `lib/utils/mdx.ts` are:

```typescript
getAllBlogPosts();
getBlogPost(slug);
getFeaturedBlogPosts();
getBlogPostsByCategory(category);
getBlogPostsByTag(tag);
getAllCategories();
getAllTags();
getAdjacentPosts(slug);
```

## Publishing checklist

- Use a descriptive, unique filename and title.
- Validate the date, author, category, tags, and cover image.
- Check light and dark modes on desktop and mobile.
- Verify code blocks, heading links, and previous/next navigation.
- Avoid confidential client names, screenshots, data, and unsupported performance claims.
- Confirm the article's metadata preview before sharing it publicly.

Useful references: [MDX](https://mdxjs.com/), [Markdown Guide](https://www.markdownguide.org/), and [Next.js Image](https://nextjs.org/docs/app/api-reference/components/image).
