# Foulla SAMANKASSOU — Portfolio

Personal portfolio for an Azure DevOps and .NET engineer based in Douala, Cameroon. The site presents cloud modernization, application development, AI, and BI work through anonymized case studies, alongside experience, qualifications, recommendations, and an MDX blog.

[Visit the portfolio](https://www.samankassou.com/)

## Run locally

Use Node.js 20.9 or later and npm. From the repository root:

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Browsing the site does not require service credentials. To test contact delivery, copy [.env.example](.env.example) to `.env.local` and follow the [contact setup guide](docs/contact.md). Delivery uses Resend and a shared Upstash Redis rate limiter.

## Commands

| Command                        | Purpose                                  |
| ------------------------------ | ---------------------------------------- |
| `npm run dev`                  | Start the development server.            |
| `npm run build`                | Build the production application.        |
| `npm start`                    | Serve the production build.              |
| `npm run lint`                 | Run ESLint with zero warnings allowed.   |
| `npm run type-check`           | Check TypeScript without emitting files. |
| `npx prettier --write <files>` | Format selected files.                   |

## Project map

The app uses Next.js App Router, React, TypeScript, and Tailwind CSS. Dependency versions and scripts are defined in [package.json](package.json); [package-lock.json](package-lock.json) pins installations.

| Location                                                       | Responsibility                                                   |
| -------------------------------------------------------------- | ---------------------------------------------------------------- |
| [app/page.tsx](app/page.tsx)                                   | Homepage composition and editorial copy.                         |
| [app/components/studio/](app/components/studio/)               | Shared header/footer, work filters, diagrams, and animated hero. |
| [app/studio.css](app/studio.css)                               | Current visual system and responsive layouts.                    |
| [app/globals.css](app/globals.css)                             | Tailwind setup and shared styles.                                |
| [app/portfolio/](app/portfolio/)                               | Case studies at `/portfolio/[id]`.                               |
| [app/blog/](app/blog/)                                         | Blog index and articles at `/blog/[slug]`.                       |
| [app/api/contact/route.ts](app/api/contact/route.ts)           | Validation and contact email delivery.                           |
| [lib/utils/contactRateLimit.ts](lib/utils/contactRateLimit.ts) | Shared Redis rate limiting.                                      |
| [lib/data/](lib/data/) and [lib/types/](lib/types/)            | Portfolio data and content types.                                |
| [content/blog/](content/blog/)                                 | Published Markdown and MDX articles.                             |
| [public/](public/)                                             | Static images, icons, and asset source records.                  |

Some earlier layout and section components remain in `app/components/`. Follow imports from the current route before choosing which component or data file to edit.

## Documentation

| Guide                      | Use it to                                                           |
| -------------------------- | ------------------------------------------------------------------- |
| [Content](docs/content.md) | Update professional content, case studies, images, and metadata.    |
| [Blog](docs/blog.md)       | Write and publish articles with supported MDX features.             |
| [Contact](docs/contact.md) | Configure Resend and Redis, test delivery, and troubleshoot errors. |
| [Design](docs/design.md)   | Maintain the visual system, motion, and accessibility behavior.     |

Asset provenance stays beside the files: [brands](public/img/brands/SOURCES.md), [certifications](public/img/certifications/SOURCES.md), and [education](public/img/education/SOURCES.md). The [Devicon license](public/img/brands/DEVICON-LICENSE.txt) applies to the imported Devicon artwork.

## Before deploying

Run the project checks:

```bash
npm run type-check
npm run lint
npm run build
```

Use a host that runs Next.js server routes; the contact endpoint requires a server runtime. Configure the [contact environment variables and trusted proxy headers](docs/contact.md), then serve the build with `npm start` or the host's Next.js integration.

Review the homepage, filters, case studies, blog, and contact feedback on desktop and mobile in both themes. Follow the [metadata checklist](docs/content.md#identity-and-metadata) when changing the owner or domain.

## License

This project is licensed under the [MIT License](LICENSE), copyright © 2026 Foulla SAMANKASSOU. Third-party assets retain their respective licenses and rights; see the asset source records linked above.
