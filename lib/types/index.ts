// Profile & Contact
export interface ProfileData {
  name: string;
  title: string;
  photo: string;
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
  description: string;
  tags: string[];
}

// Education & Experience
export interface EducationEntry {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface ExperienceEntry {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

// Projects
export type ProjectCategory =
  | "All categories"
  | "Web Design"
  | "Mobile App"
  | "Development"
  | "UI/UX Design";

export interface Project {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "All categories">;
  image: string;
  description?: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// Testimonials
export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company?: string;
  photo: string;
  rating: number;
  text: string;
}

// Blog
export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime?: string;
  slug?: string;
}

// Site Configuration
export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  metadata: {
    title: string;
    description: string;
    language: string;
  };
  socialLinks: SocialLink[];
  cvDownloadUrl: string;
}

// Navigation
export interface NavigationItem {
  id: number;
  label: string;
  href: string;
  icon?: string;
}
