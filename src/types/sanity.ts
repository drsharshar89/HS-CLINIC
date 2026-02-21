/* ================================================================
   Sanity Document Types — HS Dental Clinic
   These mirror the schemas you'll define in Sanity Studio.
   ================================================================ */

/** Sanity image reference (reusable) */
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

/** Portable Text block (simplified) */
export interface SanityBlock {
  _type: 'block';
  _key: string;
  children: Array<{ _type: string; text: string; marks?: string[] }>;
  markDefs?: Array<{ _type: string; _key: string; href?: string }>;
  style?: string;
}

/* ------------------------------------------------------------------ */
/*  Document Schemas                                                    */
/* ------------------------------------------------------------------ */

/** Hero section content */
export interface SanityHero {
  _id: string;
  _type: 'hero';
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: SanityImage;
  backgroundImageAlt?: string;
}

/** Individual service card */
export interface SanityService {
  _id: string;
  _type: 'service';
  title: string;
  slug: { current: string };
  description: string;
  icon?: string;
  image?: SanityImage;
  imageAlt?: string;
  order?: number;
}

/** Patient testimonial / review */
export interface SanityTestimonial {
  _id: string;
  _type: 'testimonial';
  name: string;
  country?: string;
  countryFlag?: string;
  text: string;
  stars: number;
  image?: SanityImage;
  imageAlt?: string;
}

/** Doctor / staff profile */
export interface SanityTeamMember {
  _id: string;
  _type: 'teamMember';
  name: string;
  role: string;
  bio?: SanityBlock[];
  image?: SanityImage;
  imageAlt?: string;
  order?: number;
}

/** Generic CMS-managed page */
export interface SanityPage {
  _id: string;
  _type: 'page';
  title: string;
  slug: { current: string };
  body?: (SanityBlock | SanityImage)[];
  seoTitle?: string;
  seoDescription?: string;
}

/** Dental tourism pricing row */
export interface SanityTourismPricing {
  _id: string;
  _type: 'tourismPricing';
  treatment: string;
  egyptPrice: string;
  usaPrice: string;
  ukPrice: string;
  turkeyPrice?: string;
  hungaryPrice?: string;
  uaePrice?: string;
  saving: string;
}

/** Dental tourism FAQ */
export interface SanityFaq {
  _id: string;
  _type: 'faq';
  question: string;
  answer: string;
  order?: number;
}

/** Site-wide settings (singleton) */
export interface SanitySiteSettings {
  _id: string;
  _type: 'siteSettings';
  clinicName: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  socialLinks?: Array<{ platform: string; url: string }>;
  workingHours?: string;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: SanityImage;
  ogImageAlt?: string;
  geoLat?: number;
  geoLng?: number;
}

/** About page settings (singleton) */
export interface SanityAboutSettings {
  _id: string;
  _type: 'aboutSettings';
  quote?: string;
  values?: Array<{ title: string; description: string; iconName?: string }>;
  stats?: Array<{ value: string; label: string }>;
  certifications?: string[];
}

/** Technology page settings (singleton) */
export interface SanityTechnologySettings {
  _id: string;
  _type: 'technologySettings';
  technologies?: Array<{ title: string; description: string; iconName?: string }>;
  heroImage?: SanityImage;
  heroImageAlt?: string;
  stats?: Array<{ value: string; label: string }>;
}

/** Homepage settings (singleton) */
export interface SanityHomepageSettings {
  _id: string;
  _type: 'homepageSettings';
  features?: Array<{ title: string; description: string; iconName?: string }>;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
}

/** Services page settings (singleton) */
export interface SanityServicesPageSettings {
  _id: string;
  _type: 'servicesPageSettings';
  conditions?: string[];
  processSteps?: Array<{ step: string; title: string; description: string }>;
}

/** DSD page settings (singleton) */
export interface SanityDsdSettings {
  _id: string;
  _type: 'dsdSettings';
  heroImage?: SanityImage;
  heroImageAlt?: string;
  heroCtaText?: string;
  splitRealityTitle?: string;
  splitRealitySubtitle?: string;
  splitRealityImage?: SanityImage;
  splitRealityImageAlt?: string;
  timeline?: Array<{ title: string; description: string; iconName?: string }>;
  goldenTitle?: string;
  goldenDescription?: string;
  goldenStats?: Array<{ value: string; label: string }>;
  goldenImage?: SanityImage;
  goldenImageAlt?: string;
  goldenCtaText?: string;
  journey?: Array<{ number: string; title: string; description: string; iconName?: string }>;
  journeyCtaText?: string;
}

/** Tourism page settings (singleton) */
export interface SanityTourismSettings {
  _id: string;
  _type: 'tourismSettings';
  heroTagline?: string;
  heroTitle?: string;
  heroTitleAccent?: string;
  heroSubtitle?: string;
  heroCtaText?: string;
  timelineSteps?: Array<{ step: string; title: string; description: string; iconName?: string }>;
  fusionSubheading?: string;
  fusionTitle?: string;
  vipFeatures?: Array<{ title: string; description: string; iconName?: string }>;
  vipStats?: Array<{ value: string; label: string }>;
  whyClinicReasons?: Array<{ title: string; description: string; iconName?: string }>;
  residences?: Array<{
    name: string;
    subtitle: string;
    stars: number;
    description: string;
    features?: string[];
  }>;
  bottomCtaText?: string;
}

/** Before / After case — collection document */
export interface SanityBeforeAfterCase {
  _id: string;
  _type: 'beforeAfterCase';
  label: string;
  beforeImage?: SanityImage;
  afterImage?: SanityImage;
  treatment?: string;
  sortOrder?: number;
}

/** YouTube Video — collection document */
export interface SanityYoutubeVideo {
  _id: string;
  _type: 'youtubeVideo';
  title: string;
  videoId: string;
  description?: string;
  category: string;
  sortOrder?: number;
}

/** Service Pillar Page — per-service CMS document */
export interface SanityServicePillar {
  _id: string;
  _type: 'servicePillar';
  slug: { current: string };
  serviceTitle: string;
  seoTitle?: string;
  seoDescription?: string;
  heroTagline?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: SanityImage;
  sections?: Array<{
    heading: string;
    body?: SanityBlock[];
    iconName?: string;
  }>;
  technologies?: Array<{
    name: string;
    description?: string;
    iconName?: string;
  }>;
  benefits?: Array<{
    title: string;
    description?: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  ctaPrimary?: string;
  ctaSecondary?: string;
}
