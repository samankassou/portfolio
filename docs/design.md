# Design and implementation

[Back to README](../README.md)

The portfolio's direction is “Systems in motion”, expressed through the message **“Complexity, made clear.”** Azure DevOps and .NET lead the professional story, with Laravel, AI, and BI adding breadth.

## Visual system

- Graphite and pale green surfaces with an electric lime accent, defined by `--studio-*` variables in [app/studio.css](../app/studio.css).
- Inter for the main typography, Georgia for italic accents, and system monospace for technical labels.
- Open layouts, thin rules, square edges, generous spacing, and numbered homepage sections.
- A featured Azure case study, conceptual project diagrams, and a real portrait.
- Native disclosures for capabilities, experience, qualifications, and full recommendations.

## Implementation map

| File                                                                                                                 | Role                                                                           |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [app/page.tsx](../app/page.tsx)                                                                                      | Server-rendered homepage composition and editorial copy.                       |
| [app/studio.css](../app/studio.css)                                                                                  | Theme variables, layouts, responsive behavior, and studio component styles.    |
| [app/globals.css](../app/globals.css)                                                                                | Tailwind directives and shared styles.                                         |
| [SiteHeader.tsx](../app/components/studio/SiteHeader.tsx), [SiteFooter.tsx](../app/components/studio/SiteFooter.tsx) | Navigation shared by the homepage, case studies, and blog.                     |
| [SelectedWork.tsx](../app/components/studio/SelectedWork.tsx)                                                        | Client-side category filtering and featured work layout.                       |
| [ProjectDiagram.tsx](../app/components/studio/ProjectDiagram.tsx)                                                    | Supplied images or conceptual workflows, with a compact mobile representation. |
| [SystemSculpture.tsx](../app/components/studio/SystemSculpture.tsx)                                                  | Pointer-responsive mathematical knot drawn on Canvas 2D.                       |
| [Reveal.tsx](../app/components/studio/Reveal.tsx)                                                                    | Entrance animations using IntersectionObserver and the Web Animations API.     |
| [ContactForm.tsx](../app/components/sections/Contact/ContactForm.tsx)                                                | Shared interactive contact form within the studio layout.                      |

The knot projects 3D geometry onto Canvas 2D without an additional graphics dependency. Animation drawing is capped at roughly 30 fps and device pixel ratio at 2. It skips animation updates while offscreen, the document is hidden, the user has paused it, or reduced motion is requested; resize and theme changes can still redraw the static frame.

## Preserve when changing the interface

- Native scrolling, section anchors, the skip link, and visible keyboard focus.
- Mobile navigation's expanded state, Escape handling, and focus return.
- Theme support, reduced-motion handling, and the sculpture's pause control.
- Filter button pressed states and the announced result count.
- Readable content before entrance animations run.
- Clear labels distinguishing conceptual workflows from actual project images.

Keep data and visible copy aligned using the [content guide](content.md). When making visual changes, review desktop and mobile layouts, both themes, keyboard navigation, disclosures, and reduced motion across the homepage, a case study, and a blog article.

## Screenshots

The [README preview](../README.md#preview) uses real browser captures from the local application, taken on 8 September 2026 at a 1280 × 720 viewport:

| Image                                                    | View                                                                               |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [homepage-light.jpg](screenshots/homepage-light.jpg)     | Homepage hero in light mode.                                                       |
| [homepage-dark.jpg](screenshots/homepage-dark.jpg)       | Homepage hero in dark mode.                                                        |
| [azure-case-study.jpg](screenshots/azure-case-study.jpg) | Conceptual workflow on `/portfolio/4`, scrolled below the case-study introduction. |

After a visual redesign, refresh these files from the running application and update the capture date here and in the README. Wait for fonts and images to load, use the theme toggle to capture each mode, and hide development overlays through the developer menu before capturing. Keep the conceptual-workflow caption visible in the case-study image and inspect every saved image for clipping or capture artifacts.
