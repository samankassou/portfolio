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
  items: string[];
}

// Education & Experience
export interface Education {
  id: number;
  school: string;
  role: string;
  certificate: string;
  period: string;
  description: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

// Projects
export type ProjectCategory =
  | "All categories"
  | "UI Design"
  | "Web Templates"
  | "Logos"
  | "Branding";

export interface Project {
  id: number;
  title: string;
  link: string;
  coverImg: string;
  category: Exclude<ProjectCategory, "All categories">;
}

// Testimonials
export interface Testimonial {
  id: number;
  authorName: string;
  authorProfilePic: string;
  authorRole: string;
  text: string;
  rating: number;
}

// Blog
export interface Blog {
  id: number;
  title: string;
  shortDescription: string;
  thumbnail: string;
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
