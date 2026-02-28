/**
 * Portfolio projects data
 */

import type { ProjectCategory, Project } from "@/lib/types";

/**
 * Available project categories for filtering
 */
export const projectCategories: ProjectCategory[] = [
  "All categories",
  "UI Design",
  "Web Templates",
  "Logos",
  "Branding",
];

/**
 * Portfolio projects
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    link: "Full-Stack Web Application",
    coverImg:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    category: "UI Design",
    description:
      "A comprehensive e-commerce analytics dashboard that provides real-time insights into sales, inventory, and customer behavior. Built with a focus on data visualization and intuitive UX.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "Node.js",
      "PostgreSQL",
    ],
    challenge:
      "The client needed a way to monitor multiple store metrics simultaneously without switching between different tools. Performance was critical as the dashboard handles thousands of data points in real-time.",
    solution:
      "Designed a modular dashboard with customizable widgets using a grid layout. Implemented WebSocket connections for live data updates and optimized rendering with virtualized lists and memoized chart components.",
    results:
      "Reduced the client's daily reporting time by 60%. The dashboard now serves 50+ store managers with sub-second load times and has become the primary tool for business decisions.",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    link: "iOS & Android Application",
    coverImg:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop",
    category: "UI Design",
    description:
      "A modern mobile banking application designed for seamless financial management. Features include account overview, fund transfers, bill payments, and spending analytics.",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "Node.js",
      "MongoDB",
      "Plaid API",
    ],
    challenge:
      "Creating a secure yet frictionless banking experience that works across both platforms while meeting strict financial industry compliance requirements.",
    solution:
      "Implemented biometric authentication, encrypted data storage, and a clean UI that guides users through complex financial operations with minimal steps. Used React Native for cross-platform consistency.",
    results:
      "Achieved a 4.8-star app store rating with over 10,000 downloads in the first month. Transaction completion rate improved by 35% compared to the previous app version.",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    link: "Modern React Template",
    coverImg:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=400&h=400&fit=crop",
    category: "Web Templates",
    description:
      "A high-converting SaaS landing page template built with modern React and optimized for performance and SEO. Features smooth animations, responsive design, and easy customization.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    challenge:
      "Creating a template that balances visual appeal with performance, while being flexible enough for different SaaS products without requiring extensive customization.",
    solution:
      "Built a component-based architecture with a theme configuration system. Used CSS variables for easy color scheme changes and Framer Motion for performant animations that don't impact Core Web Vitals.",
    results:
      "Template achieved a 98 Lighthouse performance score. Used by 200+ projects and consistently drives above-average conversion rates for SaaS products.",
  },
  {
    id: 4,
    title: "Portfolio Template Pro",
    link: "Next.js & Tailwind CSS",
    coverImg:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=400&fit=crop",
    category: "Web Templates",
    description:
      "A professional portfolio template for developers and designers, featuring dark mode, blog integration, project showcases, and contact forms. Built with Next.js App Router.",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "MDX",
      "Framer Motion",
    ],
    challenge:
      "Building a portfolio template that is both visually stunning and technically impressive, while remaining easy for non-technical users to customize and deploy.",
    solution:
      "Designed a data-driven architecture where all content is managed through simple TypeScript files. Integrated MDX for blog posts and used Tailwind CSS for a fully customizable design system.",
    results:
      "Featured on multiple web development resource lists. The template has been forked over 500 times and serves as the foundation for portfolios across various industries.",
  },
  {
    id: 5,
    title: "Tech Startup Logo",
    link: "Brand Identity Design",
    coverImg:
      "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=400&h=400&fit=crop",
    category: "Logos",
    description:
      "A modern, minimalist logo design for a technology startup focused on AI solutions. The design conveys innovation and trust through clean geometric shapes and a bold color palette.",
    technologies: [
      "Adobe Illustrator",
      "Figma",
      "Brand Strategy",
      "Color Theory",
    ],
    challenge:
      "The startup needed a logo that would stand out in the crowded tech space while communicating both cutting-edge innovation and reliability to enterprise clients.",
    solution:
      "Created a geometric mark that subtly incorporates neural network nodes, paired with a custom wordmark. The design works seamlessly across digital and print media at any scale.",
    results:
      "The logo helped establish immediate brand recognition. The startup secured Series A funding shortly after the rebrand, with investors noting the professional brand presence.",
  },
  {
    id: 6,
    title: "Coffee Shop Branding",
    link: "Logo & Visual Identity",
    coverImg:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop",
    category: "Logos",
    description:
      "A warm and inviting brand identity for an artisan coffee shop chain. The design captures the craft and passion behind specialty coffee through hand-drawn elements and earthy tones.",
    technologies: [
      "Adobe Illustrator",
      "Procreate",
      "Typography Design",
      "Print Design",
    ],
    challenge:
      "Differentiating from large coffee chains while appealing to both coffee enthusiasts and casual customers. The brand needed to feel authentic and artisanal.",
    solution:
      "Developed a hand-drawn logo with organic shapes that evoke the handcrafted nature of specialty coffee. Created a comprehensive brand guide with packaging designs, menu layouts, and signage templates.",
    results:
      "The rebrand contributed to a 25% increase in foot traffic. Customer surveys showed the new branding was the primary reason for first-time visits for 40% of new customers.",
  },
  {
    id: 7,
    title: "Fitness Brand Identity",
    link: "Complete Branding Package",
    coverImg:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    category: "Branding",
    description:
      "A bold and energetic brand identity for a premium fitness studio chain. The branding encompasses everything from logo design to environmental graphics and digital presence.",
    technologies: [
      "Adobe Creative Suite",
      "Figma",
      "Environmental Design",
      "Motion Graphics",
    ],
    challenge:
      "Creating a cohesive brand that works across physical gym spaces, mobile apps, social media, and merchandise while maintaining high energy and motivation.",
    solution:
      "Developed a dynamic brand system with flexible logo lockups, an energetic color palette, and custom iconography. Created animated social media templates and environmental wayfinding systems.",
    results:
      "The comprehensive rebrand led to a 50% increase in membership sign-ups. Social media engagement tripled within three months of launching the new brand identity.",
  },
  {
    id: 8,
    title: "Corporate Rebranding",
    link: "Visual Identity Redesign",
    coverImg:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
    category: "Branding",
    description:
      "A comprehensive visual identity redesign for an established consulting firm transitioning to digital services. The rebrand modernized the company's image while preserving its legacy of trust.",
    technologies: [
      "Brand Strategy",
      "Adobe Creative Suite",
      "Figma",
      "Style Guide Development",
    ],
    challenge:
      "Balancing modernization with heritage — the firm had 20 years of brand equity that needed to evolve without alienating existing clients.",
    solution:
      "Conducted stakeholder interviews and client surveys to identify core brand values. Created an evolutionary design that retained the trust and professionalism of the original brand while introducing modern elements.",
    results:
      "Successfully repositioned the firm in the digital consulting space. Client retention remained at 95% through the transition, while new client acquisition increased by 30%.",
  },
];
