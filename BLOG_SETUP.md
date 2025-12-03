# MDX Blog Setup

This document explains the MDX-based blog system that has been implemented in your portfolio.

## Overview

Your portfolio now has a dynamic blog system powered by **MDX (Markdown with JSX)**. This allows you to:
- Write blog posts in simple Markdown files
- Keep content in your git repository (version controlled)
- Add new posts without touching any code
- Get automatic features like reading time, syntax highlighting, and more

## How It Works

### 1. Content Location
All blog posts are stored in the `content/blog/` directory as `.mdx` files:

```
content/
└── blog/
    ├── getting-started-with-nextjs.mdx
    ├── typescript-best-practices.mdx
    └── tailwind-css-tips.mdx
```

### 2. Blog Post Format

Each blog post file has two parts:

#### Frontmatter (Metadata)
At the top of each file, wrapped in `---`:

```yaml
---
title: "Your Blog Post Title"
excerpt: "A short description that appears in the blog list"
date: "2024-02-10"
category: "Web Development"
image: "https://images.unsplash.com/photo-..."
tags: ["Next.js", "React", "TypeScript"]
author: "Your Name"
featured: true
---
```

**Frontmatter Fields:**
- `title` (required): The blog post title
- `excerpt` (required): Short description for previews
- `date` (required): Publication date (YYYY-MM-DD format)
- `category` (required): Blog category (e.g., "Web Development", "CSS", "TypeScript")
- `image` (required): Cover image URL
- `tags` (required): Array of tags
- `author` (required): Author name
- `featured` (required): Boolean - whether to highlight this post (true/false)

#### Content (Markdown)
Below the frontmatter, write your content in standard Markdown:

```markdown
# Main Heading

Regular paragraphs with **bold** and *italic* text.

## Subheading

- Bullet points
- Are supported

```javascript
// Code blocks with syntax highlighting
function example() {
  console.log("Hello, World!");
}
```

[Links](https://example.com) work too!
```

### 3. Creating a New Blog Post

To add a new blog post:

1. Create a new `.mdx` file in `content/blog/`
2. Use a URL-friendly filename (e.g., `my-awesome-post.mdx`)
3. Add the frontmatter at the top
4. Write your content below
5. Commit and push (or save locally for dev)

**Example:**

Create `content/blog/my-new-post.mdx`:

```markdown
---
title: "My Awesome Blog Post"
excerpt: "Learn about something amazing!"
date: "2024-12-03"
category: "Tutorial"
image: "https://images.unsplash.com/photo-1234567890"
tags: ["tutorial", "beginner"]
author: "John Doe"
featured: false
---

# My Awesome Blog Post

Your content goes here...
```

That's it! The post will automatically appear on your blog.

### 4. URL Structure

Posts are accessible at: `/blog/[filename]`

Examples:
- `content/blog/getting-started-with-nextjs.mdx` → `/blog/getting-started-with-nextjs`
- `content/blog/my-new-post.mdx` → `/blog/my-new-post`

## Features

### ✅ Automatic Features
- **Reading Time**: Calculated automatically from content length
- **Syntax Highlighting**: Code blocks are highlighted with GitHub Dark theme
- **Responsive Images**: All images are optimized by Next.js
- **SEO Metadata**: Title, description, and Open Graph tags generated
- **Related Posts**: Shows 3 related posts from the same category
- **Category Badges**: Visual category indicators
- **Date Formatting**: Friendly date display
- **Tags Display**: Show all tags for each post

### ✅ Styling Features
- Dark mode support
- Responsive design
- Hover effects
- Smooth transitions
- Code block styling
- Link styling

## Technical Details

### Dependencies Added
- `gray-matter`: Parses frontmatter from MDX files
- `next-mdx-remote`: Renders MDX content
- `reading-time`: Calculates reading time
- `rehype-highlight`: Syntax highlighting for code blocks
- `rehype-slug`: Adds IDs to headings
- `rehype-autolink-headings`: Makes headings clickable
- `highlight.js`: Syntax highlighting library

### Files Created/Modified

**New Files:**
- `content/blog/` - Blog content directory
- `content/blog/*.mdx` - Example blog posts (3 samples)
- `lib/utils/mdx.ts` - MDX utility functions
- `app/blog/[slug]/page.tsx` - Individual blog post page

**Modified Files:**
- `lib/types/index.ts` - Added `BlogFrontmatter` and `BlogPost` types
- `app/components/sections/Blogs/index.tsx` - Updated to fetch from MDX
- `app/components/sections/Blogs/BlogItem.tsx` - Updated for new data structure
- `lib/components/Icon.tsx` - Added calendar, time, and person icons

### Utility Functions

Located in `lib/utils/mdx.ts`:

```typescript
// Get all blog posts (sorted by date)
getAllBlogPosts(): BlogPost[]

// Get a single blog post by slug
getBlogPost(slug: string): BlogPost | null

// Get featured posts only
getFeaturedBlogPosts(): BlogPost[]

// Get posts by category
getBlogPostsByCategory(category: string): BlogPost[]

// Get posts by tag
getBlogPostsByTag(tag: string): BlogPost[]

// Get all unique categories
getAllCategories(): string[]

// Get all unique tags
getAllTags(): string[]
```

## Next Steps

### Adding More Posts
Just create more `.mdx` files in `content/blog/`!

### Filtering by Category/Tag
You can extend the blog section to add filtering using the utility functions:

```typescript
const webDevPosts = getBlogPostsByCategory("Web Development");
const reactPosts = getBlogPostsByTag("React");
```

### Custom Styling
Modify `app/blog/[slug]/page.tsx` to customize the blog post page styling.

### Adding Features
Some ideas for future enhancements:
- Search functionality
- Category/tag filter pages
- Comments system (e.g., Giscus, Disqus)
- Table of contents
- Share buttons
- RSS feed
- Pagination

## Markdown Features

Your blog posts support all standard Markdown:

- **Headings**: `# H1`, `## H2`, `### H3`, etc.
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Links**: `[text](url)`
- **Images**: `![alt](url)`
- **Lists**: `-` or `1.`
- **Code**: `` `inline` `` or ` ```language ` for blocks
- **Blockquotes**: `> quote`
- **Tables**: Markdown tables are supported

## Example Blog Post Template

Copy this template to create new posts:

```markdown
---
title: "Your Title Here"
excerpt: "Brief description (2-3 sentences)"
date: "2024-12-03"
category: "Category Name"
image: "https://images.unsplash.com/photo-..."
tags: ["tag1", "tag2", "tag3"]
author: "Your Name"
featured: false
---

# Main Title

Introduction paragraph explaining what this post is about.

## Section 1

Content for section 1...

### Subsection

More detailed content...

## Section 2

Content for section 2...

## Conclusion

Wrap up your post...
```

## Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Documentation](https://mdxjs.com/)
- [Unsplash](https://unsplash.com/) - Free images for blog covers
- [Highlight.js Themes](https://highlightjs.org/static/demo/) - Other syntax themes

## Troubleshooting

**Blog post not showing?**
- Check that the `.mdx` file is in `content/blog/`
- Verify frontmatter is valid (proper YAML syntax)
- Make sure all required fields are present
- Restart the dev server

**Images not loading?**
- Ensure image URLs are valid
- Check `next.config.mjs` for allowed domains
- Use absolute URLs for external images

**Syntax highlighting not working?**
- Specify language in code blocks: ` ```javascript `
- Check that `highlight.js` is installed

---

**Happy blogging!** 🎉
