import { ServiceItem, ProjectItem, TestimonialItem } from '../types';

export const COMPANY_DETAILS = {
  name: 'Nextvane Solutions',
  tagline: 'Empowering Digital Growth',
  phone: '03152984976',
  email: 'syedbasilali22@gmail.com',
  location: 'Remote-First | Global Delivery Network',
  copyright: '© Nextvane Solutions. All rights reserved.',
  founded: '2023',
  stats: [
    { label: 'Completed Projects', value: '150+' },
    { label: 'Client Satisfaction', value: '99.4%' },
    { label: 'Team Specialists', value: '28+' },
    { label: 'Countries Served', value: '14+' },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    tagline: 'High-Converting & Ultra-Fast Web Presence',
    description:
      'We engineer bespoke, lightning-fast corporate websites, landing pages, and content portals tailored to drive measurable conversions and showcase your brand authority.',
    iconName: 'Globe',
    badge: 'Core Specialty',
    features: [
      'Responsive design across 100% of devices',
      'Sub-second load times & Core Web Vitals 95+',
      'Technical SEO architecture & semantic HTML',
      'Scalable Jamstack & Headless CMS architectures',
    ],
    deliverables: [
      'Full source code repository',
      'Content management setup',
      'Cross-browser accessibility testing',
      'Analytics & tracking integration',
    ],
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    tagline: 'Enterprise-Grade SaaS & Cloud Platforms',
    description:
      'Architecting secure, fault-tolerant web apps and SaaS products that handle heavy transaction volumes, complex business logic, and mission-critical operations.',
    iconName: 'Layers',
    badge: 'High Performance',
    features: [
      'Modern Single Page & Server-Rendered architectures',
      'Resilient RESTful & GraphQL API integrations',
      'Role-based access control & enterprise security',
      'Real-time websockets & reactive state pipelines',
    ],
    deliverables: [
      'Production-ready scalable cloud deployment',
      'Interactive admin dashboards',
      'Automated CI/CD pipelines',
      'Comprehensive API documentation',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Tactile, Neumorphic & Intuitive Interfaces',
    description:
      'Designing visually compelling, user-obsessed digital experiences with tactile depth, refined micro-interactions, and frictionless customer conversion paths.',
    iconName: 'Layout',
    badge: 'Design System',
    features: [
      'User journey mapping & high-fidelity wireframing',
      'Claymorphic & neumorphic design tokens',
      'Clickable interactive Figma prototypes',
      'Design tokens & developer handoff libraries',
    ],
    deliverables: [
      'Complete Figma design file & component library',
      'Interaction specifications',
      'Typography & color accessibility report',
      'Asset exports for iOS, Android, and Web',
    ],
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'High-Performance iOS & Android Solutions',
    description:
      'Building ultra-smooth, responsive mobile applications engineered for native performance, intuitive gestures, offline-first reliability, and seamless cloud synchronization.',
    iconName: 'Smartphone',
    badge: 'Cross-Platform',
    features: [
      'Native-grade React Native & Flutter engineering',
      'Biometric authentication & secure offline storage',
      'Instant push notifications & device API integration',
      'Fluid 120Hz gesture physics & tactile UI components',
    ],
    deliverables: [
      'Production-ready iOS & Android application binaries',
      'App Store & Google Play compliance & deployment',
      'Automated OTA update configurations',
      'Mobile analytics & crash reporting setup',
    ],
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-commerce Solutions',
    tagline: 'Seamless Stores Engineered for Revenue',
    description:
      'Transforming browsing into buying with custom e-commerce storefronts, frictionless checkout flows, secure multi-currency payment gateways, and inventory sync.',
    iconName: 'ShoppingCart',
    badge: 'Conversion Focused',
    features: [
      'Zero-friction one-click checkout flows',
      'Stripe, PayPal, Apple Pay & custom gateway integration',
      'Dynamic real-time inventory management',
      'Cart abandonment recovery & upsell logic',
    ],
    deliverables: [
      'Turnkey online storefront',
      'Payment gateway compliance verification',
      'Customer order management portal',
      'Automated transactional emails',
    ],
  },
  {
    id: 'digital-marketing-solutions',
    title: 'Digital Marketing Solutions',
    tagline: 'Data-Driven Acquisition & Market Dominance',
    description:
      'Scaling your digital footprint with quantitative search engine optimization, funnel architecture, customer lifetime value expansion, and targeted growth sprints.',
    iconName: 'TrendingUp',
    badge: 'Growth Engine',
    features: [
      'High-intent organic SEO & keyword dominance',
      'Conversion Rate Optimization (CRO) A/B testing',
      'Funnel analytics & attribution tracking',
      'Performance marketing infrastructure',
    ],
    deliverables: [
      'Monthly KPI & growth performance dashboards',
      'Technical SEO audit & implementation',
      'Customer retention funnels',
      'Competitor intelligence benchmarks',
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'pulse-analytics',
    title: 'PulseTelemetry Cloud',
    category: 'Web Applications',
    summary: 'Next-generation telemetry dashboard for distributed cloud services with sub-second event ingestion and customizable real-time charts.',
    impactMetric: '1.2M events/sec with 0.1s latency',
    tags: ['React', 'TypeScript', 'Tailwind', 'WebSockets'],
    client: 'CloudScale Technologies',
    completionYear: '2024',
    colorGradient: 'from-[#9787F3] to-[#6C5DD3]',
  },
  {
    id: 'omnipay-global',
    title: 'OmniPay Global Checkout',
    category: 'E-commerce',
    summary: 'Bespoke multi-currency checkout engine engineered with neumorphic tactile controls, reducing abandoned checkout rates for international buyers.',
    impactMetric: '+38% checkout completion rate',
    tags: ['Next.js', 'Stripe API', 'PostgreSQL', 'Clay Design'],
    client: 'OmniRetail International',
    completionYear: '2024',
    colorGradient: 'from-[#7C6EE6] to-[#4F46E5]',
  },
  {
    id: 'nova-health',
    title: 'NovaHealth Telemedicine',
    category: 'Web Applications',
    summary: 'Secure patient consult portal featuring real-time clinical notes, instant scheduling, and encrypted video diagnostics.',
    impactMetric: '99.98% uptime across 85k sessions',
    tags: ['WebRTC', 'React', 'HIPAA Secure', 'Tailwind'],
    client: 'NovaCare Health System',
    completionYear: '2023',
    colorGradient: 'from-[#8B7AEB] to-[#5848C2]',
  },
  {
    id: 'aura-luxury',
    title: 'Aura Artisan Marketplace',
    category: 'Websites',
    summary: 'High-end design showcase and flagship brand website for luxury architectural furnishings with fluid transitions and interactive 3D product previews.',
    impactMetric: '4.8x average session duration',
    tags: ['React', 'Motion', 'Headless CMS', 'Tailwind'],
    client: 'Aura Atelier New York',
    completionYear: '2024',
    colorGradient: 'from-[#9787F3] to-[#7B68EE]',
  },
  {
    id: 'zenith-design-system',
    title: 'Zenith Claymorphic OS',
    category: 'UI/UX Design',
    summary: 'Comprehensive tactile design system with over 240+ claymorphic component tokens, accessibility compliance, and interactive states.',
    impactMetric: 'Used by 40+ engineering squads',
    tags: ['Figma', 'Design System', 'Tokens', 'WCAG AA'],
    client: 'Zenith Labs Global',
    completionYear: '2024',
    colorGradient: 'from-[#6C5DD3] to-[#3B3486]',
  },
  {
    id: 'strata-mobile',
    title: 'Strata Wealth & Mobile App',
    category: 'Mobile Apps',
    summary: 'Cross-platform iOS and Android wealth management app with biometric login, real-time portfolio tickers, and tactile tactile micro-interactions.',
    impactMetric: '4.9★ rating across 120k+ app store downloads',
    tags: ['React Native', 'TypeScript', 'Biometrics', 'Charts'],
    client: 'Strata Capital Partners',
    completionYear: '2024',
    colorGradient: 'from-[#8070F0] to-[#5542D0]',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'HyperScale Systems (San Francisco)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote:
      'Nextvane Solutions delivered our complex SaaS portal 3 weeks ahead of schedule. The tactile neumorphic UI instantly set us apart in investor demos, and the codebase was pristine.',
    rating: 5,
    projectType: 'Web Applications',
  },
  {
    id: '2',
    name: 'Elena Rostova',
    role: 'Founder & Managing Director',
    company: 'Veloce Global Media (London)',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    quote:
      'Working with the Nextvane team was seamless despite our 8-hour timezone gap. Their remote-first structure and proactive communication made them feel like our in-house engineering squad.',
    rating: 5,
    projectType: 'Website Development',
  },
  {
    id: '3',
    name: 'David Chen',
    role: 'VP of Product',
    company: 'Lumina FinTech (Singapore)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote:
      'Our e-commerce conversion jumped by 38% after Nextvane redesigned our payment flow and implemented their custom checkout UI. Outstanding design precision and reliability.',
    rating: 5,
    projectType: 'E-commerce Solutions',
  },
];

export const FAQS_DATA = [
  {
    question: 'How does Nextvane Solutions handle remote development?',
    answer:
      'We operate with a fully agile, remote-first model. We maintain transparent sprint boards, daily automated progress rollups, dedicated Slack/Discord channels, and regular video demos to ensure your project stays on track and transparent.',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Custom websites and high-impact landing pages typically launch in 2 to 3 weeks. Comprehensive web applications, SaaS MVPs, and complex e-commerce platforms range from 4 to 8 weeks depending on specifications.',
  },
  {
    question: 'Do you provide maintenance and ongoing updates after launch?',
    answer:
      'Yes, we provide 30 days of complimentary post-launch warranty support with every project, followed by flexible monthly retainers covering server maintenance, feature additions, and security audits.',
  },
  {
    question: 'How do you structure payments and milestones?',
    answer:
      'We split projects into predictable milestone-based payments (e.g. initial kickoff, design prototype approval, development staging review, and final production signoff) so you only pay as real progress is delivered.',
  },
];
