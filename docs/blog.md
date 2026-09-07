# Blog authoring

The blog uses files in [content/blog/](../content/blog/) and serves them at `/blog` and `/blog/[slug]`. The mobile menu and footer link to it as **Writing**.

## Add an article

1. Create a `.mdx` or `.md` file directly in `content/blog/`. Use a unique, URL-friendly filename: `azure-openai-patterns.mdx` becomes `/blog/azure-openai-patterns`. Do not create both extensions with the same slug.
2. Add the frontmatter below, replacing the example values. Put the cover image in `public/img/blog/` if using the example local path.
3. Write the article below the closing `---`. Start body sections at `##`; the page already renders the title as its main heading.
4. Run `npm run dev` and check `/blog`, the category filter, and the article on mobile and desktop in both themes.
5. Run `npm run type-check`, `npm run lint`, and `npm run build` before deploying.

```yaml
---
title: "Azure OpenAI integration patterns"
excerpt: "Practical notes on connecting an application to Azure OpenAI."
date: "2026-09-07"
category: "Cloud & AI"
image: "/img/blog/azure-openai-patterns.jpg"
tags: ["Azure", "AI"]
author: "Foulla SAMANKASSOU"
featured: false
---
```

Every article file is included in the index, generated article routes, and sitemap. There is no draft flag or publication-date filter, so keep unfinished articles outside `content/blog/` until ready to publish.

## Metadata

| Field      | Current use                                                                                                          |
| ---------- | -------------------------------------------------------------------------------------------------------------------- |
| `title`    | Card, article heading, page title, and Open Graph title.                                                             |
| `excerpt`  | Card summary and metadata description.                                                                               |
| `date`     | Displayed publication date, newest-first sorting, and Open Graph publication time. Use a quoted `YYYY-MM-DD` string. |
| `category` | Card label and index filter. Reuse consistent category names.                                                        |
| `image`    | Card image, article cover, and Open Graph image. Provide a valid path or URL; cards always render an image.          |
| `tags`     | Topic labels available to utility functions; no tag search or filter appears in the current interface.               |
| `author`   | Open Graph author metadata; no visible byline is rendered.                                                           |
| `featured` | Boolean used by `getFeaturedBlogPosts()`; the current index lists all posts.                                         |

The parser supplies defaults for missing values but does not validate the metadata schema. Fill these fields explicitly, especially the date and image.

## Writing features

The renderer supports Markdown headings, paragraphs, emphasis, links, lists, blockquotes, and code blocks. It adds syntax highlighting, heading IDs and links, a calculated reading time on article cards, and previous/next navigation ordered by date (previous is older; next is newer).

Use the custom `Note` component for callouts:

````mdx
## Integration notes

Explain the approach in short paragraphs.

<Note>Keep configuration values outside the application code.</Note>

```typescript
const message = "Hello from the application";
```
````

GitHub-style pipe tables are not enabled. Additional custom MDX components must be registered in the [article renderer](../app/blog/%5Bslug%5D/page.tsx) before use.

## Images and review

Local images live in [public/](../public/) and use paths beginning with `/`, without the `public` prefix. Remote cover images must match an HTTPS hostname in [next.config.mjs](../next.config.mjs): currently `images.unsplash.com`, `placehold.co`, or `picsum.photos`. Restart the development server after changing that configuration.

Before publishing, check the cover image, code blocks, heading links, category filter, adjacent articles, and page metadata. Replace example metadata with accurate details and review article content for confidential information.

## Implementation reference

- [lib/utils/mdx.ts](../lib/utils/mdx.ts): file loading, frontmatter defaults, sorting, reading time, and category/tag/featured helpers.
- [app/blog/page.tsx](../app/blog/page.tsx) and [BlogIndexClient.tsx](../app/blog/BlogIndexClient.tsx): index data, metadata, and category filtering.
- [app/blog/[slug]/page.tsx](../app/blog/%5Bslug%5D/page.tsx): article rendering, MDX components, metadata, and adjacent-post links.
- [lib/types/index.ts](../lib/types/index.ts): `BlogFrontmatter`, `BlogPost`, and `BlogPostSummary` types.

See the [README](../README.md) for project setup and deployment.
