// Global types for the Animora creative agency website

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
}
