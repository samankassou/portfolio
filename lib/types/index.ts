// Profile & Contact
export interface ProfileData {
  name: string;
  title: string;
  photo?: string;
  badge: boolean;
}

export interface ContactInfo {
  id: number;
  label: string;
  value: string;
  highlight?: boolean;
}

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
  images?: string[];
}

// Testimonials
export interface Testimonial {
  id: number;
  authorName: string;
  authorProfilePic: string;
  authorProfileUrl?: string;
  authorRole: string;
  text: string;
  sourceUrl?: string;
}

// Blog
export interface Blog {
  id: number;
  title: string;
  shortDescription: string;
  thumbnail: string;
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
    skype: string;
    telegram: string;
  };
}

// Navigation
export interface NavItem {
  id: string;
  icon: string;
  label: string;
  href: string;
}

// Animation types
export interface AnimationConfig {
  initial: object;
  animate: object;
  exit?: object;
  transition?: object;
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

// Languages
export interface Language {
  id: number;
  name: string;
  proficiency:
    | "Native"
    | "Fluent"
    | "Professional"
    | "Conversational"
    | "Basic";
}

// Skill Categories
export interface SkillCategory {
  id: number;
  category: string;
  skills: Skill[];
}
