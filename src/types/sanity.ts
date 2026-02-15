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
}

/** Doctor / staff profile */
export interface SanityTeamMember {
  _id: string;
  _type: 'teamMember';
  name: string;
  role: string;
  bio?: SanityBlock[];
  image?: SanityImage;
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
}
