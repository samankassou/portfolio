# Completing portfolio content

The interface works without a CMS. Empty image and recommendation URL fields have deliberate, non-clickable fallbacks. Keep the existing English copy consistent when replacing content.

## Project images and results

Edit `lib/data/projects.ts`:

- `coverImg`: put an authorized project image in `public/img/projects/` and enter its public path, e.g. `/img/projects/azure-migration.webp`.
- `coverAlt`: describe what the image shows for screen-reader users.
- `coverCaption`: a short, accurate caption, including anonymization if relevant.
- `results`: the outcome shown on both the card and the case-study page. The existing outcomes are reused; no new performance figures have been invented.

Images use a 16:9 frame with `object-contain` so diagrams and screenshots are not cropped. With no image, the card shows a clearly labelled conceptual illustration. Setting the image also updates the case-study hero.

## Recommendations

Edit `lib/data/testimonials.ts`:

- `sourceUrl`: currently links to the verified received-recommendations section of the portfolio owner’s LinkedIn profile. LinkedIn did not expose a public individual recommendation link in the inspected interface; do not use owner-only edit links.
- `authorProfileUrl`: the verified LinkedIn profile of the author, linked from their name.
- Check `text`, `authorName` and `authorRole` against the original recommendation.

Until a source URL is supplied, the card displays “LinkedIn source coming soon”. Once populated, the source link appears automatically. No star rating is displayed.

## Experience

Edit `lib/data/experience.ts`:

- `mission`: one short sentence describing the role.
- `contributions`: the two main contributions.
- `technologies`: the separately displayed tools.
- `description`: fuller context, shown under “More about this role”.

## Contact

The subject is optional; the server uses “Project enquiry” when it is blank or omitted. Name, email and message remain required. The success confirmation remains visible until the visitor edits the form or submits again.

Delivery still requires the existing email provider configuration described in `RESEND_SETUP.md`. Automated validation uses a mocked provider and sends no real emails.
