// Type definitions for CraftSync website

export interface NavigationItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  company?: string;
  subject?: string;
  budget?: string;
  timeline?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageUrl: string;
  category: string;
  tags: string[];
  projectUrl?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  imageUrl: string;
  bio: string;
  skills: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
  };
}

export interface Language {
  code: 'en' | 'ua';
  name: string;
}

export interface SEOMeta {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
}
