# Portfolio content

[Back to README](../README.md)

Content is stored in TypeScript data files and Markdown/MDX articles. The current homepage also contains editorial copy directly in [app/page.tsx](../app/page.tsx). Check both the data and its renderer when updating a professional claim.

## Where to edit

| Content                                                | Source                                                                                                               | Rendering notes                                                                                      |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Identity, email, social links                          | [siteConfig.ts](../lib/data/siteConfig.ts)                                                                           | Shared metadata and homepage contact links.                                                          |
| Introduction, location, languages, current role, phone | [app/page.tsx](../app/page.tsx)                                                                                      | These visible homepage values are written directly in the page.                                      |
| Skills                                                 | [profile.ts](../lib/data/profile.ts)                                                                                 | The homepage uses `skillCategories` for the expanded toolkit; the hero toolkit is in `app/page.tsx`. |
| Case studies                                           | [projects.ts](../lib/data/projects.ts)                                                                               | Work filters and `/portfolio/[id]` pages.                                                            |
| Experience                                             | [experience.ts](../lib/data/experience.ts)                                                                           | Role disclosures; the first entry is expanded and marked current.                                    |
| Capabilities                                           | [services.ts](../lib/data/services.ts)                                                                               | Titles and item lists; introductory paragraphs are selected by array position in `app/page.tsx`.     |
| Certifications                                         | [certifications.ts](../lib/data/certifications.ts)                                                                   | Badge, title, issuer, date, and credential details.                                                  |
| Education                                              | [education.ts](../lib/data/education.ts)                                                                             | Certificate, school, period, and description.                                                        |
| Recommendations                                        | [testimonials.ts](../lib/data/testimonials.ts)                                                                       | Author details and full text; featured excerpts are selected by array position in `app/page.tsx`.    |
| Navigation                                             | [SiteHeader.tsx](../app/components/studio/SiteHeader.tsx), [SiteFooter.tsx](../app/components/studio/SiteFooter.tsx) | Current navigation links are defined in these components.                                            |
| Articles                                               | [content/blog/](../content/blog/)                                                                                    | Follow the [blog guide](blog.md).                                                                    |

[lib/types/index.ts](../lib/types/index.ts) defines the data contracts. Older profile, language, navigation, and blog data may still serve earlier components; they do not all control the current homepage.

## Case studies

Edit the `projects` array in [projects.ts](../lib/data/projects.ts). Keep IDs unique and stable: the ID determines the public URL. Array order determines display order and previous/next navigation; the first project is featured under “All work”.

Use one of the existing categories: `Cloud & DevOps`, `Web Applications`, `AI & Automation`, or `BI & Data`. `All categories` is only a filter value.

Include the following for a complete case study:

- `title`, `description`, `category`, and `technologies` for the work listing.
- `link` for the short focus label (it is text, not a URL), plus `role`.
- `challenge`, `solution`, and `results` for the story sections.
- `confidentialityNote` to explain any anonymization.
- Optional `liveUrl` and `githubUrl` for public destinations you can share.
- Optional `sourceLinks` with `label` and `url` for projects with multiple repositories.
- Optional `screenshots` with `src`, `alt`, `caption`, `width`, and `height` for additional images on the detail page.

`results` appears on the case-study page and on the featured card in “All work”. Empty story fields are omitted on the detail page. The optional `images` array is not rendered by the current case-study page.

### Project images and diagrams

Place authorized images under `public/img/projects/` (create the folder if needed), then set:

```typescript
coverImg: "/img/projects/azure-migration.webp",
coverAlt: "Describe the actual image for screen-reader users.",
coverCaption: "Add an accurate caption and anonymization context.",
```

The same image appears in the work listing and case-study hero, with `object-contain` to preserve its full contents. Set `coverWidth` and `coverHeight` to its actual pixel dimensions. Its frame is controlled by [app/studio.css](../app/studio.css). Wida (`/portfolio/6`) uses real interface screenshots with fictional demo data; source and license details are in `public/img/projects/SOURCES.md`. Add a demo URL only after confirming the public deployment address.

Without `coverImg`, [ProjectDiagram.tsx](../app/components/studio/ProjectDiagram.tsx) displays a labeled conceptual workflow. Existing diagrams are keyed by project ID; a new ID receives a generic context/build/outcome diagram. Edit that mapping if a new project needs a specific illustration.

## Experience and recommendations

For experience, keep `mission` concise, list key work in `contributions`, put tools in `technologies`, and use `description` for fuller context. Review the homepage's separate current-role text when changing the first experience entry.

For recommendations, preserve the original meaning of `text`, `authorName`, and `authorRole`. `authorProfileUrl` links the name; `sourceUrl` adds “View on LinkedIn” inside the full recommendation. An empty source URL hides that link. Current source URLs point to the owner's received-recommendations page. Use public links rather than account-only editing URLs.

When adding or reordering recommendations or capabilities, also update the position-based excerpts or introductions in `app/page.tsx` so the copy stays associated with the correct entry.

## Identity and metadata

Start with [siteConfig.ts](../lib/data/siteConfig.ts), then check the locations that also contain identity or domain text:

- [app/layout.tsx](../app/layout.tsx): metadata, social profiles, and `Person` structured data.
- [app/sitemap.ts](../app/sitemap.ts) and [app/robots.ts](../app/robots.ts): production domain.
- [app/opengraph-image.tsx](../app/opengraph-image.tsx) and [app/manifest.ts](../app/manifest.ts): social preview and app identity.
- [app/blog/page.tsx](../app/blog/page.tsx) and [app/portfolio/[id]/page.tsx](../app/portfolio/%5Bid%5D/page.tsx): page titles.
- Homepage, shared header/footer, and [.env.example](../.env.example): visible identity and example sender address. Update the deployed sender setting through the [contact guide](contact.md).

## Review before publishing

Keep professional claims factual: anonymize confidential work, use authorized imagery, and verify metrics, recommendation wording, credential status, and qualification dates before changing them. Asset badges and logos are not proof of a person's credential status.

Preview affected pages and links on desktop and mobile, including disclosures and image fallbacks. Run the [project checks](../README.md#before-deploying). Maintain image source and license records alongside any new assets; existing records are linked from the README.
