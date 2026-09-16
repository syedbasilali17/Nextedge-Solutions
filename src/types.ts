export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  badge: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web Applications' | 'Websites' | 'UI/UX Design' | 'Mobile Apps' | 'E-commerce' | 'Digital Marketing';
  summary: string;
  impactMetric: string;
  tags: string[];
  client: string;
  completionYear: string;
  liveUrl?: string;
  colorGradient: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  projectType: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
}

export interface QuoteEstimateOptions {
  projectType: string;
  timeline: string;
  features: string[];
  clientName: string;
  clientEmail: string;
  clientNotes: string;
}
