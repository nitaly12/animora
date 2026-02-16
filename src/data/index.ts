import type { Project, Service, Testimonial, TimelineItem } from '@/types';

export const timelineData: TimelineItem[] = [
  { id: '1', year: '2012', title: 'Founded', description: 'Started in a small studio in Brooklyn' },
  { id: '2', year: '2016', title: 'Global Expansion', description: 'Opened offices in London and Tokyo' },
  { id: '3', year: '2020', title: 'Award Recognition', description: 'Won Awwwards Agency of the Year' },
  { id: '4', year: '2024', title: 'Next Chapter', description: 'Pioneering immersive experiences' },
];

export const servicesData: Service[] = [
  {
    id: '1',
    title: 'Brand Strategy',
    description: 'We develop compelling brand narratives and visual identities that resonate with your audience and stand out.',
    icon: '◆',
  },
  {
    id: '2',
    title: 'Digital Products',
    description: 'From concept to launch, we build intuitive digital products that users love and businesses thrive on.',
    icon: '◇',
  },
  {
    id: '3',
    title: 'Experience Design',
    description: 'Immersive installations and interactive experiences that create memorable moments and drive engagement.',
    icon: '○',
  },
  {
    id: '4',
    title: 'Motion & Film',
    description: 'Cinematic storytelling through animation and film. We bring stories to life with movement and emotion.',
    icon: '◐',
  },
];

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Nova Fashion',
    category: 'E-commerce',
    image: '/api/placeholder/800/600',
    description: 'Complete rebrand and e-commerce platform for luxury fashion house.',
    tags: ['Branding', 'E-commerce', 'UX'],
  },
  {
    id: '2',
    title: 'Atlas Finance',
    category: 'Fintech',
    image: '/api/placeholder/800/600',
    description: 'Investment platform with real-time analytics and intuitive dashboards.',
    tags: ['Product Design', 'Development'],
  },
  {
    id: '3',
    title: 'Spectrum Music',
    category: 'Entertainment',
    image: '/api/placeholder/800/600',
    description: 'Interactive music discovery experience with generative visuals.',
    tags: ['WebGL', 'Creative Tech'],
  },
  {
    id: '4',
    title: 'Meridian Travel',
    category: 'Travel',
    image: '/api/placeholder/800/600',
    description: 'Elegant travel booking experience with AR destination previews.',
    tags: ['AR', 'Product Design'],
  },
  {
    id: '5',
    title: 'Lumina Art',
    category: 'Culture',
    image: '/api/placeholder/800/600',
    description: 'Digital gallery platform for contemporary artists.',
    tags: ['Branding', 'Platform'],
  },
  {
    id: '6',
    title: 'Pulse Health',
    category: 'HealthTech',
    image: '/api/placeholder/800/600',
    description: 'Wellness app with AI-powered personalization.',
    tags: ['Mobile', 'AI'],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: "Animora transformed our brand completely. Their attention to detail and creative vision exceeded our expectations. The new identity resonated instantly with our audience.",
    author: 'Sarah Chen',
    role: 'CEO, Nova Fashion',
    avatar: '/api/placeholder/100/100',
  },
  {
    id: '2',
    quote: "Working with Animora was a game-changer. They don't just deliver projects—they deliver experiences. Our conversion rates increased 40% after the redesign.",
    author: 'Marcus Webb',
    role: 'Founder, Atlas Finance',
    avatar: '/api/placeholder/100/100',
  },
  {
    id: '3',
    quote: "The most innovative agency we've worked with. They brought our vision to life in ways we couldn't have imagined. Truly world-class creative partners.",
    author: 'Elena Rodriguez',
    role: 'Director, Spectrum Music',
    avatar: '/api/placeholder/100/100',
  },
];
