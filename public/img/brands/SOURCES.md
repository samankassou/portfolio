# Brand asset sources

Retrieved 2026-09-05. These assets are stored locally and do not require external image requests when rendered.

## Technology logos

- Source: [Devicon v2.17.0](https://github.com/devicons/devicon/tree/v2.17.0/icons).
- License: MIT, retained in [DEVICON-LICENSE.txt](DEVICON-LICENSE.txt). Original SVG artwork and colors are preserved.

Each local file comes from `https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/{name}/{name}-original.svg`:
azure, azuredevops, dotnetcore, csharp, docker, git, laravel, react, typescript, javascript, php, microsoftsqlserver.

The current [homepage](../../../app/page.tsx) uses six of these logos in its toolkit strip through [BrandIcon.tsx](../../../app/components/ui/BrandIcon.tsx). Older section and sidebar components also reference the collection, but are not mounted by the current homepage. Brand names and logos remain the property of their owners; their use identifies technologies without claiming sponsorship or endorsement.

## Africa Global Logistics

- Source: [Africa Global Logistics](https://www.aglgroup.com/).
- Local file: [agl.svg](agl.svg).

Extracted from the official site's navigation SVG (`viewBox="0 0 300 165"`); its site-specific CSS class was removed, preserving the paths and proportions. The retained [ExperienceItem.tsx](../../../app/components/sections/Experience/ExperienceItem.tsx) renders its monochrome form on white alongside AGL employment entries. The current homepage lists employers as text. AGL owns this mark; it is not covered by the Devicon MIT license.

## Project illustrations

The retained [ProjectVisual.tsx](../../../app/components/sections/Portfolio/ProjectVisual.tsx) contains original compositions combining SVG line art, the technology marks above, and [Ionicons](https://github.com/ionic-team/ionicons) from the `react-icons` dependency (MIT). Generic symbols are labeled as workflows rather than vendor logos. These are concept illustrations based on public case-study summaries, not application screenshots or claims about confidential architecture.

The current homepage and case-study pages use [ProjectDiagram.tsx](../../../app/components/studio/ProjectDiagram.tsx), which renders original text-and-SVG diagrams or supplied project cover images.

## Bolloré Transport & Logistics

- Source: [Wikipedia article](https://fr.wikipedia.org/wiki/Bollor%C3%A9_Transport_%26_Logistics), supplied by the portfolio owner.
- File description: [Logo Bolloré Transport Logistics](https://fr.wikipedia.org/wiki/Fichier:Logo_Bollor%C3%A9_Transport_Logistics.png).
- Original image: [Wikimedia-hosted PNG](https://upload.wikimedia.org/wikipedia/fr/f/f8/Logo_Bollor%C3%A9_Transport_Logistics.png).
- Local file: [bollore-transport-logistics.png](bollore-transport-logistics.png) (3590 × 1920).

The file page identifies the March 2016 logo and cites the [former official company asset](http://www.bollore-transport-logistics.com/uploads/tx_lpsystem/Bollore_transport_logistics_RVB.png).

Trademark-protected logo, not a Creative Commons or Devicon MIT asset. The retained experience component uses it on white to identify the June 2022–March 2023 employer entry. Original artwork, colors, proportions, and transparent margins are preserved. It is not displayed on the current homepage.

## EVAT Solar

- Source: [EVAT Solar LinkedIn page](https://cm.linkedin.com/company/evat-solar), supplied by the portfolio owner.
- Original image: [LinkedIn company logo](https://media.licdn.com/dms/image/v2/C560BAQGOLZHb9KZ3gw/company-logo_200_200/company-logo_200_200/0/1630636800431?e=2147483647&t=75VJprb2fELe4KdBo155T0GALCuQXNV07jBSTAuV6PA&v=beta).
- Local file: [evat-solar.jpg](evat-solar.jpg) (original 200 × 200 JPEG, unmodified).

The source page identifies EVAT Solar in Douala, Cameroon. EVAT owns this company mark; it is not covered by the Devicon MIT license. The retained experience component uses it only to identify the February–May 2022 employment entry; the current homepage does not display it.

Colors, white background, and proportions are preserved. The local copy avoids reliance on an expiring LinkedIn image URL.
