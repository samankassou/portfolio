// Skills
export interface Skill {
  id: number;
  name: string;
  percentage?: number;
}

// Services
export interface Service {
  id: number;
  icon: string;
  title: string;
  summary: string;
  items: string[];
}

// Education & Experience
export interface Education {
  logo?: string;
  id: number;
  school: string;
  role: string;
  certificate: string;
  period: string;
  description: string;
}

export interface Experience {
  mission: string;
  contributions: string[];
  technologies: string[];
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

// Projects
export type ProjectCategory =
  | "All categories"
  | "BI & Data"
  | "AI & Automation"
  | "Cloud & DevOps"
  | "Web Applications";

export interface Project {
  id: number;
  title: string;
  link: string;
  coverImg?: string;
  coverAlt?: string;
  coverCaption?: string;
  coverWidth?: number;
  coverHeight?: number;
  category: Exclude<ProjectCategory, "All categories">;
  description: string;
  technologies: string[];
  role?: string;
  confidentialityNote?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  liveUrl?: string;
  githubUrl?: string;
  sourceLinks?: { label: string; url: string }[];
  screenshots?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  }[];
  images?: string[];
}

// Testimonials
export interface Testimonial {
  id: number;
  authorName: string;
  authorProfilePic: string;
  authorProfileUrl?: string;
  authorRole: string;
  pullQuote: string;
  text: string;
  sourceUrl?: string;
}

// MDX Blog
export interface BlogFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
  author: string;
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: string;
}

export type BlogPostSummary = Omit<BlogPost, "content">;

// Site Configuration
export interface SocialLink {
  id: number;
  icon: string;
  url: string;
  label: string;
}

export interface SiteConfig {
  metadata: {
    title: string;
    description: string;
    language: string;
    url: string;
  };
  author: {
    name: string;
    email: string;
    phone: string;
  };
}

// Certifications
export interface Certification {
  badge?: string;
  badgeAlt?: string;
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}

// Skill Categories
export interface SkillCategory {
  id: number;
  category: string;
  skills: Skill[];
}
