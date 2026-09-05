/**
 * Client testimonials data
 */

import type { Testimonial } from "@/lib/types";

/**
 * Client testimonials
 */
export const testimonials: Testimonial[] = [
  {
    id: 1,
    authorName: "MOHAMMADOU SADJO",
    authorProfileUrl: "https://www.linkedin.com/in/mohammadou-sadjo-74523a203/",
    authorProfilePic: "",
    authorRole: "Software Developer",
    text: "It is rare to meet someone like Samankassou. I had the pleasure of studying computer science with him and collaborating on several academic projects. His ability to understand a technology, explain it clearly, and analyze problems is exceptional. He is constantly learning and readily shares his knowledge with those around him. He would be a real asset to any team.",
    // LinkedIn exposes a received-recommendations page, not a public per-item link.
    sourceUrl:
      "https://www.linkedin.com/in/sam-foulla/details/recommendations/",
  },
  {
    id: 2,
    authorName: "Magloire KITIO KENFACK",
    authorProfileUrl: "https://www.linkedin.com/in/magloire-kitio/",
    authorProfilePic: "",
    authorRole:
      "Solution Architect | Cloud Computing & Innovative Solutions – Activa Assurances",
    text: "I was genuinely impressed by the way Samankassou works, understands a problem, and resolves it effectively. He is a real asset to a team and adapts very well to different projects.",
    // LinkedIn exposes a received-recommendations page, not a public per-item link.
    sourceUrl:
      "https://www.linkedin.com/in/sam-foulla/details/recommendations/",
  },
];
