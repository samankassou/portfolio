# Education asset sources

Retrieved 2026-09-05 from the official school websites supplied by the portfolio owner.

| School         | Source page                                                             | Original image                                        | Local file                               |
| -------------- | ----------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------- |
| ENSP Douala    | [School website](https://enspd-udo.cm/)                                 | [PNG](https://enspd-udo.cm/images/enspd/logo.png)     | [enspd.png](enspd.png)                   |
| IUT Douala     | [School website](https://www.iut-dla.cm/)                               | [JPEG](https://www.iut-dla.cm/images/logo_iut.jpeg)   | [iut-douala.jpg](iut-douala.jpg)         |
| IUT Ngaoundéré | [School presentation](https://site.iut-ndere.net/a-propos/presentation) | [PNG](https://site.iut-ndere.net/images/Logo-iut.png) | [iut-ngaoundere.png](iut-ngaoundere.png) |

At retrieval, the ENSPD logo appeared in its official site's footer; the IUT Douala and IUT Ngaoundéré logos appeared in their website headers. The institutions retain rights to their logos; these assets are not covered by the Devicon MIT license. Their use identifies the corresponding education entries without claiming endorsement.

Original files, colors, and proportions are preserved. [education.ts](../../../lib/data/education.ts) retains the local logo paths, and the older [EducationItem.tsx](../../../app/components/sections/Education/EducationItem.tsx) renders them with `object-contain` on white at 80 px, appropriate for the small IUT Douala and Ngaoundéré source images. The current [homepage](../../../app/page.tsx) renders education entries as text without these logos.
