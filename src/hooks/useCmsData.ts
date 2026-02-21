/**
 * CMS Data Hooks — Fallback-first pattern
 *
 * Each hook fetches data from Sanity CMS. If CMS returns empty/null,
 * the hardcoded defaults are used so the site never breaks.
 */
import { useSanityQuery, useSanityImage } from '@/hooks/useSanity';
import { urlFor } from '@/lib/sanityClient';
import type {
  SanityHero,
  SanityService,
  SanityTestimonial,
  SanityTeamMember,
  SanityTourismPricing,
  SanityFaq,
  SanitySiteSettings,
  SanityAboutSettings,
  SanityTechnologySettings,
  SanityHomepageSettings,
  SanityServicesPageSettings,
  SanityDsdSettings,
  SanityTourismSettings,
  SanityBeforeAfterCase,
  SanityYoutubeVideo,
  SanityServicePillar,
  SanityImage,
} from '@/types/sanity';

/* ================================================================
   Re-export image helper for convenience
   ================================================================ */
export { useSanityImage };

/* ================================================================
   HERO
   ================================================================ */

const DEFAULT_HERO = {
  title: 'Architect Your Perfect Occlusion',
  subtitle:
    'Advanced bio-digital algorithms for TMJ analysis and smile reconstruction. Experience the future of dentistry with 0.01mm precision.',
  ctaText: 'INITIATE CONSULTATION',
  ctaLink: '/contact',
};

export function useHero() {
  const { data, loading, error } = useSanityQuery<SanityHero[]>(
    `*[_type == "hero"][0...1] { title, subtitle, ctaText, ctaLink, backgroundImage, backgroundImageAlt }`
  );
  const hero = data?.[0];
  return {
    title: hero?.title ?? DEFAULT_HERO.title,
    subtitle: hero?.subtitle ?? DEFAULT_HERO.subtitle,
    ctaText: hero?.ctaText ?? DEFAULT_HERO.ctaText,
    ctaLink: hero?.ctaLink ?? DEFAULT_HERO.ctaLink,
    backgroundImage: hero?.backgroundImage ?? null,
    backgroundImageAlt: hero?.backgroundImageAlt ?? 'Digital dentistry clinic interior',
    loading,
    error,
  };
}

/* ================================================================
   SERVICES
   ================================================================ */

export interface CmsService {
  _id: string;
  title: string;
  description: string;
  icon?: string;
  image?: SanityImage;
}

const DEFAULT_SERVICES: CmsService[] = [
  {
    _id: 'default-1',
    title: 'Occlusal Analysis',
    description:
      'Digital bite registration and force distribution mapping using T-Scan technology.',
    icon: 'Stethoscope',
  },
  {
    _id: 'default-2',
    title: 'EMG Diagnostics',
    description:
      'Electromyography to assess muscle function and detect micro-imbalances in jaw muscles.',
    icon: 'Zap',
  },
  {
    _id: 'default-3',
    title: '4D Jaw Tracking',
    description: 'Real-time mandibular movement analysis to identify deviations and restrictions.',
    icon: 'Scan',
  },
  {
    _id: 'default-4',
    title: 'Bite Optimization',
    description: 'Data-driven equilibrium adjustments to stabilize your occlusion long-term.',
    icon: 'Shield',
  },
  {
    _id: 'default-5',
    title: 'Posture Therapy',
    description: 'Correcting the descending chain of dysfunction from jaw to spine.',
    icon: 'Smile',
  },
  {
    _id: 'default-6',
    title: 'Digital Planning',
    description: 'AI-assisted treatment simulation for predictable, non-invasive outcomes.',
    icon: 'BrainCircuit',
  },
];

export function useServices() {
  const { data, loading, error } = useSanityQuery<SanityService[]>(
    `*[_type == "service"] | order(order asc) {
      _id, title, description, icon, imageAlt,
      "slug": slug.current,
      image
    }`
  );
  const services: CmsService[] =
    data && data.length > 0
      ? data.map((s) => ({
          _id: s._id,
          title: s.title,
          description: s.description,
          icon: s.icon,
          image: s.image,
        }))
      : DEFAULT_SERVICES;
  return { services, loading, error };
}

/* ================================================================
   TESTIMONIALS
   ================================================================ */

export interface CmsTestimonial {
  _id: string;
  name: string;
  country?: string;
  countryFlag?: string;
  text: string;
  stars: number;
  image?: SanityImage;
}

const DEFAULT_TESTIMONIALS: CmsTestimonial[] = [
  {
    _id: 'default-t1',
    name: 'Sarah Jenkins',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    text: 'Dr. Sharshar transformed not just my smile, but my confidence. The entire team was professional, and the clinic feels like a 5-star hotel.',
    stars: 5,
  },
  {
    _id: 'default-t2',
    name: 'Michael Ross',
    country: 'United States',
    countryFlag: '🇺🇸',
    text: 'The dental tourism package was seamless. I was picked up from the airport and treated like royalty. The results are beyond my expectations.',
    stars: 5,
  },
  {
    _id: 'default-t3',
    name: 'Elena Silva',
    country: 'Brazil',
    countryFlag: '🇧🇷',
    text: "Incredible attention to detail. Dr. Haitham is truly an artist. The veneers look so natural, nobody believes they aren't my real teeth.",
    stars: 5,
  },
];

export function useTestimonials() {
  const { data, loading, error } = useSanityQuery<SanityTestimonial[]>(
    `*[_type == "testimonial"] | order(_createdAt desc) {
      _id, name, country, countryFlag, text, stars, image, imageAlt
    }`
  );
  const testimonials: CmsTestimonial[] =
    data && data.length > 0
      ? data.map((t) => ({
          _id: t._id,
          name: t.name,
          country: t.country,
          countryFlag: t.countryFlag,
          text: t.text,
          stars: t.stars,
          image: t.image,
        }))
      : DEFAULT_TESTIMONIALS;
  return { testimonials, loading, error };
}

/* ================================================================
   TEAM MEMBERS
   ================================================================ */

export interface CmsTeamMember {
  _id: string;
  name: string;
  role: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bio?: any[];
  image?: SanityImage;
}

const DEFAULT_TEAM: CmsTeamMember[] = [
  {
    _id: 'default-tm1',
    name: 'Dr. Haitham Sharshar',
    role: 'Chief Medical Officer',
    bio: undefined,
    image: undefined,
  },
];

export function useTeamMembers() {
  const { data, loading, error } = useSanityQuery<SanityTeamMember[]>(
    `*[_type == "teamMember"] | order(order asc) {
      _id, name, role, bio, image
    }`
  );
  const members: CmsTeamMember[] =
    data && data.length > 0
      ? data.map((m) => ({
          _id: m._id,
          name: m.name,
          role: m.role,
          bio: m.bio,
          image: m.image,
        }))
      : DEFAULT_TEAM;
  return { members, loading, error };
}

/* ================================================================
   TOURISM PRICING
   ================================================================ */

export interface CmsPricing {
  _id: string;
  treatment: string;
  egyptPrice: string;
  usaPrice: string;
  ukPrice: string;
  turkeyPrice?: string;
  hungaryPrice?: string;
  uaePrice?: string;
  saving: string;
}

const DEFAULT_PRICING: CmsPricing[] = [
  {
    _id: 'dp1',
    treatment: 'Single Implant',
    egyptPrice: '$350–600',
    usaPrice: '$3,000–5,000',
    ukPrice: '$2,500–4,000',
    turkeyPrice: '$800–1,500',
    hungaryPrice: '$900–1,800',
    uaePrice: '$2,000–3,500',
    saving: 'Up to 90%',
  },
  {
    _id: 'dp2',
    treatment: 'All-on-4',
    egyptPrice: '$3,500–5,000',
    usaPrice: '$20,000–30,000',
    ukPrice: '$15,000–25,000',
    turkeyPrice: '$6,000–10,000',
    hungaryPrice: '$7,000–12,000',
    uaePrice: '$12,000–18,000',
    saving: 'Up to 85%',
  },
  {
    _id: 'dp3',
    treatment: 'Veneer (per tooth)',
    egyptPrice: '$150–300',
    usaPrice: '$1,000–2,500',
    ukPrice: '$800–1,500',
    turkeyPrice: '$250–500',
    hungaryPrice: '$300–600',
    uaePrice: '$600–1,200',
    saving: 'Up to 88%',
  },
  {
    _id: 'dp4',
    treatment: 'Bone Graft',
    egyptPrice: '$200–400',
    usaPrice: '$2,000–3,000',
    ukPrice: '$1,500–2,500',
    turkeyPrice: '$400–800',
    hungaryPrice: '$500–1,000',
    uaePrice: '$1,200–2,000',
    saving: 'Up to 87%',
  },
];

export function useTourismPricing() {
  const { data, loading, error } = useSanityQuery<SanityTourismPricing[]>(
    `*[_type == "tourismPricing"] | order(order asc, treatment asc) {
      _id, treatment, egyptPrice, usaPrice, ukPrice,
      turkeyPrice, hungaryPrice, uaePrice, saving
    }`
  );
  const pricing: CmsPricing[] =
    data && data.length > 0
      ? data.map((p) => ({
          _id: p._id,
          treatment: p.treatment,
          egyptPrice: p.egyptPrice,
          usaPrice: p.usaPrice,
          ukPrice: p.ukPrice,
          turkeyPrice: p.turkeyPrice,
          hungaryPrice: p.hungaryPrice,
          uaePrice: p.uaePrice,
          saving: p.saving,
        }))
      : DEFAULT_PRICING;
  return { pricing, loading, error };
}

/* ================================================================
   FAQs
   ================================================================ */

export interface CmsFaq {
  _id: string;
  question: string;
  answer: string;
}

const DEFAULT_FAQS: CmsFaq[] = [
  {
    _id: 'df1',
    question: 'Is dental treatment in Egypt safe?',
    answer:
      'Absolutely. Our clinic uses German and Swiss implant systems, FDA-approved materials, and follows international sterilization protocols. Dr. Sharshar is DSD-certified and has 20+ years of experience.',
  },
  {
    _id: 'df2',
    question: 'How much can I save compared to the US or UK?',
    answer:
      'Patients typically save 70–90% on major procedures like implants, veneers, and full-mouth rehabilitation while receiving the same quality materials and care.',
  },
  {
    _id: 'df3',
    question: 'What is included in the dental tourism package?',
    answer:
      'Our packages include airport pick-up, luxury accommodation assistance, all clinical procedures, post-operative care, and a dedicated patient coordinator throughout your stay.',
  },
  {
    _id: 'df4',
    question: 'How long do I need to stay in Cairo?',
    answer:
      'Most treatments require 5–10 days. We provide a detailed timeline during your free virtual consultation so you can plan your trip with confidence.',
  },
];

export function useFaqs() {
  const { data, loading, error } = useSanityQuery<SanityFaq[]>(
    `*[_type == "faq"] | order(order asc) { _id, question, answer }`
  );
  const faqs: CmsFaq[] =
    data && data.length > 0
      ? data.map((f) => ({
          _id: f._id,
          question: f.question,
          answer: f.answer,
        }))
      : DEFAULT_FAQS;
  return { faqs, loading, error };
}

/* ================================================================
   SITE SETTINGS (singleton)
   ================================================================ */

export interface CmsSiteSettings {
  clinicName: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  socialLinks: Array<{ platform: string; url: string }>;
  workingHours: string;
  seoTitle: string;
  seoDescription: string;
  ogImage?: SanityImage | null;
  ogImageAlt: string;
  geoLat: number;
  geoLng: number;
}

const DEFAULT_SETTINGS: CmsSiteSettings = {
  clinicName: 'HS Clinic — Digital Occlusion',
  phone: '+20 123 456 7890',
  whatsapp: '+201101010599',
  email: 'clinic@drhaithamsharshar.com',
  address: 'Cairo, Egypt',
  socialLinks: [],
  workingHours: 'Mon–Fri: 09:00–18:00 | Sat: 09:00–14:00',
  seoTitle: '',
  seoDescription: '',
  ogImage: null,
  ogImageAlt: '',
  geoLat: 30.0511,
  geoLng: 31.3656,
};

export function useSiteSettings() {
  const { data, loading, error } = useSanityQuery<SanitySiteSettings[]>(
    `*[_type == "siteSettings"][0...1] {
      clinicName, phone, whatsapp, email, address, socialLinks, workingHours,
      seoTitle, seoDescription, ogImage, ogImageAlt, geoLat, geoLng
    }`
  );
  const doc = data?.[0];
  const settings: CmsSiteSettings = {
    clinicName: doc?.clinicName ?? DEFAULT_SETTINGS.clinicName,
    phone: doc?.phone ?? DEFAULT_SETTINGS.phone,
    whatsapp: doc?.whatsapp ?? DEFAULT_SETTINGS.whatsapp,
    email: doc?.email ?? DEFAULT_SETTINGS.email,
    address: doc?.address ?? DEFAULT_SETTINGS.address,
    socialLinks: doc?.socialLinks ?? DEFAULT_SETTINGS.socialLinks,
    workingHours: doc?.workingHours ?? DEFAULT_SETTINGS.workingHours,
    seoTitle: doc?.seoTitle ?? '',
    seoDescription: doc?.seoDescription ?? '',
    ogImage: doc?.ogImage ?? null,
    ogImageAlt: doc?.ogImageAlt ?? '',
    geoLat: doc?.geoLat ?? 30.0511,
    geoLng: doc?.geoLng ?? 31.3656,
  };
  return { settings, loading, error };
}

// ─── About Page Settings ─────────────────────────────────────────
const DEFAULT_ABOUT_SETTINGS = {
  quote: 'Precision is not just a metric. It is the only acceptable standard.',
  values: [
    {
      title: 'Empathy Engine',
      description: 'Calibrated care protocols designed for maximum patient comfort.',
      iconName: 'Heart',
    },
    {
      title: 'Clinical Excellence',
      description: 'Operating at the bleeding edge of dental science standards.',
      iconName: 'Award',
    },
    {
      title: 'Continuous Logic',
      description: 'Never-ending integration of new research and methodologies.',
      iconName: 'GraduationCap',
    },
    {
      title: 'Holistic Sys',
      description: 'Connecting oral occlusion to total body biomechanics.',
      iconName: 'Users',
    },
  ],
  stats: [
    { value: '20+', label: 'Years R&D' },
    { value: '5K+', label: 'Cases Logged' },
    { value: '100%', label: 'Digital Workflow' },
  ],
  certifications: ['DSD CERTIFIED', 'T-SCAN MASTER'],
};

export function useAboutSettings() {
  const { data, loading, error } = useSanityQuery<SanityAboutSettings[]>(
    `*[_type == "aboutSettings"][0...1] {
      quote, values, stats, certifications
    }`
  );
  const doc = data?.[0];
  return {
    about: {
      quote: doc?.quote ?? DEFAULT_ABOUT_SETTINGS.quote,
      values: doc?.values ?? DEFAULT_ABOUT_SETTINGS.values,
      stats: doc?.stats ?? DEFAULT_ABOUT_SETTINGS.stats,
      certifications: doc?.certifications ?? DEFAULT_ABOUT_SETTINGS.certifications,
    },
    loading,
    error,
  };
}

// ─── Technology Page Settings ─────────────────────────────────────
const DEFAULT_TECH_SETTINGS = {
  technologies: [
    {
      title: 'Kinematic Jaw Tracking',
      description: 'Real-time 6-DOF mandibular movement recording.',
      iconName: 'Activity',
    },
    {
      title: 'Computerized EMG',
      description: 'Micron-level detection of muscle electrical potentials.',
      iconName: 'Cpu',
    },
    {
      title: 'T-Scan Force Analysis',
      description: 'Digital occlusal force distribution mapping.',
      iconName: 'Gauge',
    },
    {
      title: 'Tekscan Digital Sensors',
      description: 'High-resolution pressure sensing grid.',
      iconName: 'Eye',
    },
    {
      title: 'CBCT 3D Evaluation',
      description: 'Volumetric visualization of TMJ structures.',
      iconName: 'ScanLine',
    },
    {
      title: 'JVA (Joint Vibration)',
      description: 'Acoustic analysis of cartilage friction.',
      iconName: 'Laptop',
    },
  ],
  stats: [
    { value: '10μm', label: 'Precision' },
    { value: '1M+', label: 'Data Points' },
    { value: '<5s', label: 'Analysis Time' },
  ],
};

export function useTechnologySettings() {
  const { data, loading, error } = useSanityQuery<SanityTechnologySettings[]>(
    `*[_type == "technologySettings"][0...1] {
      technologies, heroImage, heroImageAlt, stats
    }`
  );
  const doc = data?.[0];
  return {
    tech: {
      technologies: doc?.technologies ?? DEFAULT_TECH_SETTINGS.technologies,
      heroImage: doc?.heroImage ?? null,
      heroImageAlt: doc?.heroImageAlt ?? 'Advanced dental technology equipment',
      stats: doc?.stats ?? DEFAULT_TECH_SETTINGS.stats,
    },
    loading,
    error,
  };
}

// ─── Homepage Settings ────────────────────────────────────────────
const DEFAULT_HOMEPAGE_SETTINGS = {
  features: [
    {
      title: 'AI Diagnostics',
      description: 'Advanced machine learning protocols to map your perfect bite pattern.',
      iconName: 'BrainCircuit',
    },
    {
      title: '3D Jaw Tracking',
      description: 'Real-time kinetic analysis of mandibular movement in 6 degrees of freedom.',
      iconName: 'Orbit',
    },
    {
      title: 'EMG Biofeedback',
      description: 'neuromuscular monitoring to ensure muscle harmony and release tension.',
      iconName: 'Activity',
    },
    {
      title: 'Micro-Analysis',
      description: 'Sub-millimeter precision for occlusal contact points and force distribution.',
      iconName: 'Microscope',
    },
    {
      title: 'Total Protection',
      description: 'Comprehensive TMJ health preservation using digital splint therapy.',
      iconName: 'ShieldCheck',
    },
    {
      title: 'Laser Precision',
      description: 'Non-invasive adjustments using state-of-the-art dental laser systems.',
      iconName: 'Zap',
    },
  ],
  ctaTitle: 'Ready to Upgrade?',
  ctaSubtitle:
    'Your smile deserves the precision of the future. Initialize your transformation today.',
  ctaButtonText: 'START SYSTEM ENGINE',
};

export function useHomepageSettings() {
  const { data, loading, error } = useSanityQuery<SanityHomepageSettings[]>(
    `*[_type == "homepageSettings"][0...1] {
      features, ctaTitle, ctaSubtitle, ctaButtonText
    }`
  );
  const doc = data?.[0];
  return {
    homepage: {
      features: doc?.features ?? DEFAULT_HOMEPAGE_SETTINGS.features,
      ctaTitle: doc?.ctaTitle ?? DEFAULT_HOMEPAGE_SETTINGS.ctaTitle,
      ctaSubtitle: doc?.ctaSubtitle ?? DEFAULT_HOMEPAGE_SETTINGS.ctaSubtitle,
      ctaButtonText: doc?.ctaButtonText ?? DEFAULT_HOMEPAGE_SETTINGS.ctaButtonText,
    },
    loading,
    error,
  };
}

// ─── Services Page Settings ───────────────────────────────────────
const DEFAULT_SERVICES_PAGE = {
  conditions: [
    'TMJ Disorders',
    'Chronic Headaches',
    'Jaw Clicking',
    'Bruxism',
    'Uneven Bite',
    'Facial Neuralgia',
    'Neck Pain',
    'Tinnitus',
    'Limited Opening',
    'Sleep Apnea',
  ],
  processSteps: [
    { step: '01', title: 'Scan', description: 'Full digital topography & motion capture' },
    { step: '02', title: 'Analyze', description: 'AI-driven data interpretation' },
    { step: '03', title: 'Plan', description: 'Virtual treatment modeling' },
    { step: '04', title: 'Execute', description: 'Laser-guided precision therapy' },
  ],
};

export function useServicesPageSettings() {
  const { data, loading, error } = useSanityQuery<SanityServicesPageSettings[]>(
    `*[_type == "servicesPageSettings"][0...1] {
      conditions, processSteps
    }`
  );
  const doc = data?.[0];
  return {
    pageSettings: {
      conditions: doc?.conditions ?? DEFAULT_SERVICES_PAGE.conditions,
      processSteps: doc?.processSteps ?? DEFAULT_SERVICES_PAGE.processSteps,
    },
    loading,
    error,
  };
}

// ─── DSD Page Settings ────────────────────────────────────────────
const DEFAULT_DSD_SETTINGS = {
  heroImageAlt: 'Luxarian Scientific Digital Smile Design — blueprint and reveal',
  heroCtaText: 'Book Consultation',
  splitRealityTitle: 'The Split Reality',
  splitRealitySubtitle:
    'Witness the transformation — from scientific blueprint to artistic masterpiece.',
  splitRealityImageAlt:
    'Digital Smile Design split reality — before and after transformation with golden proportion analysis',
  timeline: [
    {
      title: 'Video Analysis',
      description: 'Comprehensive video analysis, skeletal-fascial identity.',
      iconName: 'Video',
    },
    { title: '2D Design', description: 'Design a plan and blueprint design.', iconName: 'PenTool' },
    { title: '3D Mockup', description: 'Hyper-fashion, tooth and scanner.', iconName: 'Box' },
    {
      title: 'Final Try-in',
      description: 'Perfects mirror to perfect your smile.',
      iconName: 'Smile',
    },
  ],
  goldenTitle: 'Golden\nProportion',
  goldenDescription:
    "Every smile we design follows the timeless principles of the Golden Ratio — the same mathematical harmony found in nature's most beautiful structures. Precision down to 0.01mm.",
  goldenStats: [
    { value: '1.618', label: 'Ratio' },
    { value: '0.01mm', label: 'Precision' },
    { value: '98.7%', label: 'Symmetry' },
  ],
  goldenImageAlt: 'Golden proportion dental analysis overlay',
  goldenCtaText: 'Start Your Design',
  journey: [
    {
      number: '1',
      title: 'DIGITAL CAPTURE & ANALYSIS',
      description:
        'We utilize advanced 3D imaging to map your unique facial structure and dental anatomy with micron-level accuracy.',
      iconName: 'ScanLine',
    },
    {
      number: '2',
      title: 'PRECISION PLANNING',
      description:
        'A bespoke gold-standard blueprint is meticulously crafted, combining facial aesthetics with dental function.',
      iconName: 'Sparkles',
    },
    {
      number: '3',
      title: 'FINAL TRANSFORMATION',
      description:
        'Experience the seamless realization of your dream smile, expertly crafted and delivered with exceptional artistry.',
      iconName: 'Crown',
    },
  ],
  journeyCtaText: 'Explore the Full Process',
};

export function useDsdSettings() {
  const { data, loading, error } = useSanityQuery<SanityDsdSettings[]>(
    `*[_type == "dsdSettings"][0...1] {
      heroImage, heroImageAlt, heroCtaText,
      splitRealityTitle, splitRealitySubtitle, splitRealityImage, splitRealityImageAlt,
      timeline, goldenTitle, goldenDescription, goldenStats,
      goldenImage, goldenImageAlt, goldenCtaText,
      journey, journeyCtaText
    }`
  );
  const doc = data?.[0];
  return {
    dsd: {
      heroImage: doc?.heroImage ?? null,
      heroImageAlt: doc?.heroImageAlt ?? DEFAULT_DSD_SETTINGS.heroImageAlt,
      heroCtaText: doc?.heroCtaText ?? DEFAULT_DSD_SETTINGS.heroCtaText,
      splitRealityTitle: doc?.splitRealityTitle ?? DEFAULT_DSD_SETTINGS.splitRealityTitle,
      splitRealitySubtitle: doc?.splitRealitySubtitle ?? DEFAULT_DSD_SETTINGS.splitRealitySubtitle,
      splitRealityImage: doc?.splitRealityImage ?? null,
      splitRealityImageAlt: doc?.splitRealityImageAlt ?? DEFAULT_DSD_SETTINGS.splitRealityImageAlt,
      timeline: doc?.timeline ?? DEFAULT_DSD_SETTINGS.timeline,
      goldenTitle: doc?.goldenTitle ?? DEFAULT_DSD_SETTINGS.goldenTitle,
      goldenDescription: doc?.goldenDescription ?? DEFAULT_DSD_SETTINGS.goldenDescription,
      goldenStats: doc?.goldenStats ?? DEFAULT_DSD_SETTINGS.goldenStats,
      goldenImage: doc?.goldenImage ?? null,
      goldenImageAlt: doc?.goldenImageAlt ?? DEFAULT_DSD_SETTINGS.goldenImageAlt,
      goldenCtaText: doc?.goldenCtaText ?? DEFAULT_DSD_SETTINGS.goldenCtaText,
      journey: doc?.journey ?? DEFAULT_DSD_SETTINGS.journey,
      journeyCtaText: doc?.journeyCtaText ?? DEFAULT_DSD_SETTINGS.journeyCtaText,
    },
    loading,
    error,
  };
}

// ─── Tourism Page Settings ────────────────────────────────────────
const DEFAULT_TOURISM = {
  heroTagline: 'DENTAL TOURISM // CAIRO, EGYPT',
  heroTitle: 'World-Class Implants.',
  heroTitleAccent: 'A Majestic Journey.',
  heroSubtitle:
    'Your new smile awaits in the cradle of civilization. Premium German technology, unbeatable value, unforgettable experience.',
  heroCtaText: 'Start Your Journey — Free Quote',
  timelineSteps: [
    {
      step: '01',
      title: 'Virtual Consultation',
      description:
        'Share your smile photos. Get a free personalized treatment plan and cost estimate from Dr. Sharshar — all from your home.',
      iconName: 'Video',
    },
    {
      step: '02',
      title: 'VIP Arrival & Tourism',
      description:
        'We handle airport transfers, recommend 5-star hotels, and plan your Cairo experience — Pyramids, Nile cruises, Khan el-Khalili.',
      iconName: 'Plane',
    },
    {
      step: '03',
      title: 'The Procedure at HS Clinic',
      description:
        'Premium German implants placed with digital precision. Same-day results. Pain-free protocols. International safety standards.',
      iconName: 'Shield',
    },
    {
      step: '04',
      title: 'Fly Home with Confidence',
      description:
        'Complete aftercare guide, lifetime warranty on implants, and a video follow-up schedule. Your new smile travels with you.',
      iconName: 'BookOpen',
    },
  ],
  fusionSubheading: 'WHERE PRECISION MEETS WONDER',
  fusionTitle: 'Precision Engineering in a Timeless City',
  vipFeatures: [
    {
      title: 'Private Terminal Access',
      description:
        'Your concierge awaits tarmac-side. Skip the lines — step off the plane and into luxury.',
      iconName: 'Plane',
    },
    {
      title: 'Luxury Transfer',
      description:
        'Chauffeured in a premium vehicle from the airport directly to your 5-star accommodation.',
      iconName: 'Car',
    },
    {
      title: 'Personal Concierge (24/7)',
      description:
        'Dedicated multilingual coordinator handles everything — scheduling, translations, and local guidance.',
      iconName: 'Clock',
    },
    {
      title: 'Digital Smile Design Ritual',
      description:
        'Your bespoke consultation: 3D facial scanning and cinematic smile photography by Dr. Sharshar.',
      iconName: 'Sparkles',
    },
    {
      title: 'Curated Recovery Dining',
      description:
        'Post-procedure menus crafted for comfort and healing. Delivered to your suite or at partnered restaurants.',
      iconName: 'Utensils',
    },
    {
      title: 'Cultural Experiences',
      description:
        'Private guided tours of the Pyramids, the Egyptian Museum, and Nile-side dining — all scheduled around your treatment.',
      iconName: 'Crown',
    },
  ],
  vipStats: [
    { value: '500+', label: 'INTERNATIONAL PATIENTS' },
    { value: '24/7', label: 'CONCIERGE ACCESS' },
    { value: '15+', label: 'COUNTRIES SERVED' },
  ],
  whyClinicReasons: [
    {
      title: 'Fully Digital Workflow',
      description:
        '3D-guided surgery, digital occlusion analysis & in-house 3D printing for 0.01mm precision.',
      iconName: 'Cpu',
    },
    {
      title: 'International Sterilization',
      description:
        'Strict infection control protocols exceeding WHO standards. Near-zero infection risk.',
      iconName: 'Shield',
    },
    {
      title: 'Lifetime Implant Warranty',
      description:
        'Written lifetime guarantee on all German/Swiss implant systems (Straumann, Nobel Biocare).',
      iconName: 'Award',
    },
    {
      title: 'English-Speaking Team',
      description: 'Fluent communication in English, Arabic & French. No language barriers, ever.',
      iconName: 'Globe',
    },
    {
      title: 'Neuro-Occlusion Specialist',
      description:
        "Dr. Sharshar's MSc in Perio-Implantology + EMG jaw-tracking ensures functional perfection.",
      iconName: 'HeartPulse',
    },
    {
      title: 'VIP Travel Concierge',
      description:
        'Airport pickup, 5-star hotel booking, clinic transfers & curated Cairo sightseeing tours.',
      iconName: 'Plane',
    },
  ],
  residences: [
    {
      name: 'St. Regis Cairo',
      subtitle: 'Nile Corniche',
      stars: 5,
      description: 'Unrivaled Nile views with bespoke butler service. 15 minutes from the clinic.',
      features: ['Butler Service', 'Nile Views', 'Spa & Pool'],
    },
    {
      name: 'Four Seasons',
      subtitle: 'First Residence, Giza',
      stars: 5,
      description:
        'Iconic luxury overlooking the Pyramids. Complimentary airport transfers for our patients.',
      features: ['Pyramid Views', 'Private Balcony', 'Fine Dining'],
    },
    {
      name: 'Kempinski Nile Hotel',
      subtitle: 'Garden City',
      stars: 5,
      description:
        'European elegance on the banks of the Nile. Walking distance to historic Cairo.',
      features: ['Riverside Terrace', 'Heated Pool', 'Concierge'],
    },
    {
      name: 'Marriott Mena House',
      subtitle: 'Giza Plateau',
      stars: 5,
      description: 'Sleep at the foot of the Great Pyramids. A legendary retreat since 1886.',
      features: ['Historic Palace', 'Garden Oasis', 'Pyramid Gate'],
    },
  ],
  bottomCtaText: 'Book Free Consultation',
};

export function useTourismSettings() {
  const { data, loading, error } = useSanityQuery<SanityTourismSettings[]>(
    `*[_type == "tourismSettings"][0...1] {
      heroTagline, heroTitle, heroTitleAccent, heroSubtitle, heroCtaText,
      timelineSteps, fusionSubheading, fusionTitle,
      vipFeatures, vipStats, whyClinicReasons, residences,
      bottomCtaText
    }`
  );
  const doc = data?.[0];
  return {
    tourism: {
      heroTagline: doc?.heroTagline ?? DEFAULT_TOURISM.heroTagline,
      heroTitle: doc?.heroTitle ?? DEFAULT_TOURISM.heroTitle,
      heroTitleAccent: doc?.heroTitleAccent ?? DEFAULT_TOURISM.heroTitleAccent,
      heroSubtitle: doc?.heroSubtitle ?? DEFAULT_TOURISM.heroSubtitle,
      heroCtaText: doc?.heroCtaText ?? DEFAULT_TOURISM.heroCtaText,
      timelineSteps: doc?.timelineSteps ?? DEFAULT_TOURISM.timelineSteps,
      fusionSubheading: doc?.fusionSubheading ?? DEFAULT_TOURISM.fusionSubheading,
      fusionTitle: doc?.fusionTitle ?? DEFAULT_TOURISM.fusionTitle,
      vipFeatures: doc?.vipFeatures ?? DEFAULT_TOURISM.vipFeatures,
      vipStats: doc?.vipStats ?? DEFAULT_TOURISM.vipStats,
      whyClinicReasons: doc?.whyClinicReasons ?? DEFAULT_TOURISM.whyClinicReasons,
      residences: doc?.residences ?? DEFAULT_TOURISM.residences,
      bottomCtaText: doc?.bottomCtaText ?? DEFAULT_TOURISM.bottomCtaText,
    },
    loading,
    error,
  };
}

/* ================================================================
   Before / After Cases — collection hook (Gallery + Slider)
   ================================================================ */
const DEFAULT_BA_CASES = [
  {
    before: '/images/dental/dental-implant-dr-haitham-sharshar.webp',
    after: '/images/dental/Full-arch-dental-implant-dr-haitham-sharshar.webp',
    label: 'Full Arch Rehabilitation',
    treatment: 'Dental Implants',
  },
  {
    before: '/images/dental/All-on-4-Dental-Implants-dr haitham sharshar.webp',
    after: '/images/dental/dental-implant-dr-haitham-sharshar.webp',
    label: 'All-on-4 Dental Implants',
    treatment: 'Dental Implants',
  },
];

export function useBeforeAfterCases() {
  const { data, loading, error } = useSanityQuery<SanityBeforeAfterCase[]>(
    `*[_type == "beforeAfterCase"] | order(sortOrder asc) { _id, label, beforeImage, afterImage, treatment, sortOrder }`
  );

  // If CMS has data, use urlFor() for proper image URLs; otherwise use hardcoded paths
  const cases =
    data && data.length > 0
      ? data.map((c) => ({
          before: c.beforeImage
            ? urlFor(c.beforeImage).auto('format').width(800).url()
            : '/images/dental/dental-implant-dr-haitham-sharshar.webp',
          after: c.afterImage
            ? urlFor(c.afterImage).auto('format').width(800).url()
            : '/images/dental/dental-implant-dr-haitham-sharshar.webp',
          label: c.label,
          treatment: c.treatment ?? '',
        }))
      : DEFAULT_BA_CASES;

  return { cases, loading, error };
}

/* ================================================================
   YouTube Videos — filtered by page category
   ================================================================ */
export function useYoutubeVideos(category: string) {
  const { data, loading, error } = useSanityQuery<SanityYoutubeVideo[]>(
    `*[_type == "youtubeVideo" && category == "${category}"] | order(sortOrder asc) { _id, title, videoId, description, category, sortOrder }`
  );

  const videos = (data ?? []).map((v) => ({
    videoId: v.videoId,
    title: v.title,
    description: v.description ?? '',
  }));

  return { videos, loading, error };
}

/* ================================================================
   SERVICE PILLAR PAGES — CMS-driven with hardcoded fallbacks
   ================================================================ */

export interface ServicePillarData {
  heroTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  faqs: Array<{ question: string; answer: string }>;
  benefits: Array<{ title: string; description?: string }>;
  technologies: Array<{ name: string; description?: string; iconName?: string }>;
  ctaPrimary: string;
  ctaSecondary: string;
  seoTitle?: string;
  seoDescription?: string;
}

const PILLAR_DEFAULTS: Record<string, ServicePillarData> = {
  'dental-implants': {
    heroTagline: '',
    heroTitle: 'Digitally Guided Dental Implant Surgery in Cairo',
    heroSubtitle:
      'Dr. Haitham Sharshar performs digitally guided dental implant surgery using CBCT 3D imaging, computer-designed surgical guides, and precision-planned prosthetic outcomes. Whether you need a single implant, All-on-4 full-arch rehabilitation, or complex multi-implant reconstruction, every case is planned with sub-millimeter digital accuracy at HS Clinic, Cairo, Egypt.',
    faqs: [
      {
        question: 'How much do dental implants cost in Cairo compared to the USA or UK?',
        answer:
          'A single dental implant at HS Clinic costs approximately $450 USD, compared to $3,000\u2013$5,000 in the USA or \u00a32,000\u2013\u00a33,500 in the UK. Full-arch All-on-4 rehabilitation starts at $5,500 versus $20,000\u2013$30,000 in Western countries \u2014 a savings of 70\u201390%.',
      },
      {
        question: 'What makes digitally guided implant surgery safer than traditional placement?',
        answer:
          'Dr. Haitham Sharshar uses CBCT 3D imaging to create a complete virtual model of your jaw, then digitally plans the exact implant position, angle, and depth. A 3D-printed surgical guide ensures the implant is placed with sub-millimeter accuracy, avoiding nerves and sinus cavities while maximizing bone contact for faster healing.',
      },
      {
        question: 'Am I a candidate for dental implants if I have bone loss?',
        answer:
          'Yes, in most cases. Dr. Sharshar uses CBCT 3D imaging to assess bone volume and density precisely. Bone grafting, sinus lifts, or zygomatic implants can be used to rebuild bone when needed.',
      },
      {
        question: 'What is the All-on-4 technique and who is it for?',
        answer:
          'All-on-4 is a full-arch rehabilitation technique where 4 strategically placed dental implants support an entire arch of fixed teeth. It is ideal for patients who are fully edentulous or have severely compromised teeth.',
      },
      {
        question: 'How long does the dental implant process take from start to finish?',
        answer:
          'The digital planning phase takes 1\u20132 visits. Implant placement surgery is completed in a single session. Healing typically takes 3\u20136 months, during which a temporary prosthesis is worn.',
      },
    ],
    benefits: [
      {
        title: 'Single Tooth Implants',
        description:
          'Individual implant and crown to replace a single missing tooth with natural-looking aesthetics and full chewing function.',
      },
      {
        title: 'All-on-4 Full Arch',
        description:
          'Four strategically placed implants supporting a complete arch of fixed teeth.',
      },
      {
        title: 'Full-Arch Reconstruction',
        description:
          'Comprehensive treatment combining multiple implants, bone grafting if needed, and custom prosthetics.',
      },
    ],
    technologies: [
      {
        name: 'CBCT 3D Scan',
        description: 'Complete three-dimensional imaging of your jaw, teeth, nerves, and sinuses.',
      },
      {
        name: 'Digital Planning',
        description:
          'Virtual implant placement with precise angle, depth, and prosthetic outcome simulation.',
      },
      {
        name: 'Surgical Guide',
        description:
          '3D-printed guide manufactured from your digital plan for sub-millimeter accuracy.',
      },
      {
        name: 'Guided Placement',
        description:
          'Minimally invasive implant surgery using the printed guide for exact positioning.',
      },
      {
        name: 'Prosthetic Delivery',
        description:
          'Custom-designed crown, bridge, or full-arch prosthesis delivered after osseointegration.',
      },
    ],
    ctaPrimary: 'Book Free Consultation',
    ctaSecondary: 'Dental Tourism Packages',
  },
  'tmj-tmd-treatment': {
    heroTagline: "Middle East's Most Advanced TMD Center",
    heroTitle: 'Advanced TMJ/TMD Neuromuscular Treatment',
    heroSubtitle:
      'Dr. Haitham Sharshar provides the most comprehensive TMD/TMJ treatment protocol in the Middle East, combining jaw tracking (Zebris JMA-Optic+, Germany), surface EMG electromyography, TENS neuromuscular therapy, Occlusense digital pressure mapping, and custom Neurobite occlusal splint therapy.',
    faqs: [
      {
        question: 'What is TMD and how do I know if I have it?',
        answer:
          'Temporomandibular Disorder (TMD) is a group of conditions affecting the jaw joint (TMJ), masticatory muscles, and occlusion. Symptoms include jaw pain, clicking or popping sounds, headaches, ear pain, limited mouth opening, and teeth grinding.',
      },
      {
        question: 'What is jaw tracking and why is it important for TMD diagnosis?',
        answer:
          'Jaw tracking (JT-3D by Zebris, Germany) records your mandibular movement patterns in three dimensions. It measures range of motion, velocity, trajectory deviations, and opening/closing paths.',
      },
      {
        question: 'How does Dr. Sharshar use EMG in TMD treatment?',
        answer:
          'Surface electromyography (EMG) measures the electrical activity of your masticatory muscles. Dr. Sharshar uses EMG to identify muscle hyperactivity, asymmetry, fatigue patterns, and dysfunction.',
      },
      {
        question: 'What is a Neurobite splint and how does it differ from a regular night guard?',
        answer:
          'A Neurobite occlusal splint is a custom-designed appliance fabricated using data from your EMG, jaw tracking, and TENS sessions. It is calibrated to your specific neuromuscular rest position.',
      },
      {
        question: 'Is Dr. Sharshar the only dentist in the Middle East with this TMD technology?',
        answer:
          'Dr. Haitham Sharshar is the Official JMA-Optic+ Digital Occlusion System Certified Trainer for Zebris Co. (Germany) \u2014 the chosen international trainer for the entire Middle East region.',
      },
    ],
    benefits: [],
    technologies: [
      {
        name: 'Jaw Tracking (JT-3D)',
        description:
          'Records 3D mandibular movement patterns, range of motion, velocity, and trajectory deviations.',
      },
      {
        name: 'Surface EMG',
        description:
          'Measures electrical activity of masseter and temporalis muscles to identify hyperactivity and dysfunction.',
      },
      {
        name: 'TENS Unit',
        description:
          'Relaxes masticatory muscles to find the neuromuscular rest (myocentric) jaw position.',
      },
      {
        name: 'Occlusense',
        description:
          'Wireless real-time bite force distribution mapping for precise occlusal adjustment.',
      },
      {
        name: 'Neurobite Splint',
        description:
          'Neuromuscular occlusal splint designed from patient-specific EMG and jaw tracking data.',
      },
    ],
    ctaPrimary: 'Book TMD Consultation',
    ctaSecondary: '',
  },
  'clear-aligners': {
    heroTagline: '',
    heroTitle: 'Digitally Integrated Clear Aligner Therapy',
    heroSubtitle:
      'Invisible orthodontics with full digital integration at HS Clinic Cairo. Dr. Haitham Sharshar combines 3D treatment planning, digital occlusal analysis (T-Scan + Jaw Tracking), and progressive clear aligner therapy to deliver functional and aesthetic tooth alignment.',
    faqs: [
      {
        question: 'How do digital clear aligners differ from traditional braces?',
        answer:
          'Clear aligners are removable, virtually invisible orthodontic trays made from medical-grade thermoplastic. Unlike metal braces, they have no wires or brackets, are more comfortable, and allow normal eating and brushing.',
      },
      {
        question: 'How long does clear aligner treatment take?',
        answer:
          'Treatment duration varies based on complexity. Simple cases may take 3\u20136 months, while moderate to complex cases typically require 9\u201318 months.',
      },
      {
        question: "What makes Dr. Sharshar's approach to clear aligners unique?",
        answer:
          'Dr. Sharshar integrates clear aligner therapy with digital occlusal analysis using T-Scan and jaw tracking. This ensures your teeth are aligned for optimal bite function, not just aesthetics.',
      },
      {
        question: 'Can clear aligners fix bite problems (malocclusion)?',
        answer:
          'Yes. Modern clear aligners can treat many types of malocclusion including overbite, underbite, crossbite, open bite, and crowding.',
      },
    ],
    benefits: [
      {
        title: 'Digitally Planned',
        description:
          'Full 3D treatment simulation before you start \u2014 see your results in advance.',
      },
      {
        title: 'Virtually Invisible',
        description: 'Clear, removable trays that are nearly undetectable when worn.',
      },
      {
        title: 'Occlusion-Optimized',
        description: 'Digital bite analysis ensures functional alignment, not just straight teeth.',
      },
      {
        title: 'Comfortable & Removable',
        description: 'No wires or brackets. Remove for eating, brushing, and special occasions.',
      },
      {
        title: 'Precise & Predictable',
        description:
          'Computer-designed sequential trays for controlled, progressive tooth movement.',
      },
      {
        title: 'Quality Controlled',
        description: 'exocad-certified digital workflow for elite accuracy in every aligner tray.',
      },
    ],
    technologies: [],
    ctaPrimary: 'Book Aligner Consultation',
    ctaSecondary: '',
  },
  'full-arch-rehabilitation': {
    heroTagline: '',
    heroTitle: 'Full-Arch Rehabilitation & All-on-4 Implants',
    heroSubtitle:
      'Complete oral rehabilitation combining dental implants, prosthetics, and digital occlusal analysis. Dr. Haitham Sharshar delivers All-on-4 and full-mouth reconstruction with CBCT-guided precision, same-day temporary teeth, and digital occlusion verification.',
    faqs: [
      {
        question: 'What is All-on-4 dental implant treatment?',
        answer:
          'All-on-4 is a clinically proven technique where 4 dental implants are strategically placed in each jaw to support a full arch of fixed prosthetic teeth.',
      },
      {
        question:
          'How much does full-arch rehabilitation cost at HS Clinic compared to the USA/UK?',
        answer:
          'Full-arch All-on-4 rehabilitation at HS Clinic starts at approximately $5,500 USD per arch, compared to $20,000\u2013$30,000 in the USA or \u00a315,000\u2013\u00a325,000 in the UK.',
      },
      {
        question: 'Can I get temporary teeth on the same day as implant surgery?',
        answer:
          'Yes. Dr. Sharshar offers immediate loading protocols where a temporary fixed prosthesis is attached to the implants on the same day as surgery.',
      },
      {
        question: 'How long do full-arch implant prosthetics last?',
        answer:
          'With proper care and regular maintenance, implant-supported full-arch prosthetics can last 15\u201325+ years. The titanium implants themselves can last a lifetime.',
      },
    ],
    benefits: [
      {
        title: 'CBCT-Guided Planning',
        description:
          'Complete 3D jaw mapping for precise implant position, angulation, and prosthetic outcome prediction.',
      },
      {
        title: 'Same-Day Teeth',
        description:
          'Immediate loading protocol \u2014 leave with a fixed temporary prosthesis on the day of surgery.',
      },
      {
        title: 'Digital Occlusion Verification',
        description:
          'T-Scan and jaw tracking ensure your prosthetic bite is functionally optimized.',
      },
      {
        title: 'Minimal Bone Requirements',
        description:
          'Angled posterior implants maximize bone contact, often avoiding the need for bone grafting.',
      },
    ],
    technologies: [],
    ctaPrimary: 'Book Consultation',
    ctaSecondary: 'International Patient? See Tourism Packages',
  },
};

export function useServicePillar(slug: string) {
  const { data, loading, error } = useSanityQuery<SanityServicePillar[]>(
    `*[_type == "servicePillar" && slug.current == "${slug}"][0...1] {
      serviceTitle, seoTitle, seoDescription,
      heroTagline, heroTitle, heroSubtitle, heroImage,
      sections, technologies, benefits, faqs,
      ctaPrimary, ctaSecondary
    }`
  );
  const doc = data?.[0];
  const defaults = PILLAR_DEFAULTS[slug] ?? PILLAR_DEFAULTS['dental-implants'];

  const pillar: ServicePillarData = {
    heroTagline: doc?.heroTagline ?? defaults.heroTagline,
    heroTitle: doc?.heroTitle ?? defaults.heroTitle,
    heroSubtitle: doc?.heroSubtitle ?? defaults.heroSubtitle,
    faqs: doc?.faqs ?? defaults.faqs,
    benefits: doc?.benefits ?? defaults.benefits,
    technologies: doc?.technologies ?? defaults.technologies,
    ctaPrimary: doc?.ctaPrimary ?? defaults.ctaPrimary,
    ctaSecondary: doc?.ctaSecondary ?? defaults.ctaSecondary,
    seoTitle: doc?.seoTitle,
    seoDescription: doc?.seoDescription,
  };

  return { pillar, loading, error };
}
