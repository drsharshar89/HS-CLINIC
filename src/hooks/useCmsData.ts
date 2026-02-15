/**
 * CMS Data Hooks — Fallback-first pattern
 *
 * Each hook fetches data from Sanity CMS. If CMS returns empty/null,
 * the hardcoded defaults are used so the site never breaks.
 */
import { useSanityQuery, useSanityImage } from '@/hooks/useSanity';
import type {
  SanityHero,
  SanityService,
  SanityTestimonial,
  SanityTeamMember,
  SanityTourismPricing,
  SanityFaq,
  SanitySiteSettings,
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
  const { data, loading, error } = useSanityQuery<SanityHero[]>(`*[_type == "hero"][0...1]`);
  const hero = data?.[0];
  return {
    title: hero?.title ?? DEFAULT_HERO.title,
    subtitle: hero?.subtitle ?? DEFAULT_HERO.subtitle,
    ctaText: hero?.ctaText ?? DEFAULT_HERO.ctaText,
    ctaLink: hero?.ctaLink ?? DEFAULT_HERO.ctaLink,
    backgroundImage: hero?.backgroundImage ?? null,
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
      _id, title, description, icon,
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
      _id, name, country, countryFlag, text, stars, image
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
    `*[_type == "tourismPricing"] | order(treatment asc) {
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
}

const DEFAULT_SETTINGS: CmsSiteSettings = {
  clinicName: 'HS Clinic — Digital Occlusion',
  phone: '+20 123 456 7890',
  whatsapp: '+201101010599',
  email: 'clinic@drhaithamsharshar.com',
  address: 'Cairo, Egypt',
  socialLinks: [],
};

export function useSiteSettings() {
  const { data, loading, error } = useSanityQuery<SanitySiteSettings[]>(
    `*[_type == "siteSettings"][0...1] {
      clinicName, phone, whatsapp, email, address, socialLinks
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
  };
  return { settings, loading, error };
}
