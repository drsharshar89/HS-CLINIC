/**
 * SEO Constants — HS Clinic
 * Central source for all SEO metadata across the site.
 */

export const SITE_URL = 'https://drhaithamsharshar.com';
export const SITE_NAME = 'Dr. Haitham Sharshar | HS Clinic';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.webp`;

export const SEO = {
  home: {
    title: 'Dr. Haitham Sharshar | Digital Occlusion & Cosmetic Dentistry | Cairo',
    description:
      'Leading dental clinic in Cairo, Egypt specializing in digital occlusion, TMJ treatment, cosmetic dentistry, and dental implants. AI-driven diagnostics with 15+ years of expertise.',
    canonical: SITE_URL + '/',
  },
  about: {
    title: 'About Dr. Haitham Sharshar | Board-Certified Prosthodontist | Cairo',
    description:
      'Dr. Haitham Sharshar is a board-certified prosthodontist and pioneer in digital dental occlusion with over 15 years of experience in Cairo, Egypt.',
    canonical: SITE_URL + '/about',
  },
  services: {
    title: 'Services | Digital Occlusion, TMJ Treatment & Cosmetic Dentistry | HS Clinic',
    description:
      'Advanced dental services including EMG analysis, jaw tracking, T-Scan diagnostics, cosmetic dentistry, dental implants, and full-arch rehabilitation at HS Clinic Cairo.',
    canonical: SITE_URL + '/services',
  },
  technology: {
    title: 'Technology | CBCT, T-Scan, EMG & Digital Smile Design | HS Clinic',
    description:
      'State-of-the-art dental technology at HS Clinic Cairo: CBCT 3D imaging, T-Scan occlusal analysis, EMG diagnostics, and CAD/CAM digital dentistry.',
    canonical: SITE_URL + '/technology',
  },
  dentalTourism: {
    title: 'Dental Tourism in Cairo | Save Up to 90% | HS Clinic Egypt',
    description:
      'Premium dental implants and cosmetic dentistry in Cairo, Egypt. Save 70-90% vs USA/UK prices. German technology, 5-star experience, free virtual consultation.',
    canonical: SITE_URL + '/dental-tourism',
  },
  contact: {
    title: 'Contact HS Clinic | Book Your Appointment in Cairo, Egypt',
    description:
      'Book your dental appointment with Dr. Haitham Sharshar in Cairo, Egypt. WhatsApp consultation available. Located in Nasr City, Cairo.',
    canonical: SITE_URL + '/contact',
  },
  digitalSmileDesign: {
    title: 'Digital Smile Design | Luxarian Scientific DSD | HS Clinic Cairo',
    description:
      'Experience luxury scientific Digital Smile Design at HS Clinic Cairo. Golden proportion analysis, 3D mockups, and precision planning for your perfect smile transformation.',
    canonical: SITE_URL + '/digital-smile-design',
  },
} as const;

/** JSON-LD: LocalBusiness schema for Google Rich Results */
export const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'HS Clinic - Dr. Haitham Sharshar',
  description:
    'Leading dental clinic in Cairo specializing in digital occlusion, TMJ treatment, cosmetic dentistry, and dental implants.',
  url: SITE_URL,
  telephone: '+201234567890',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nasr City',
    addressLocality: 'Cairo',
    addressCountry: 'EG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.0511,
    longitude: 31.3656,
  },
  image: DEFAULT_OG_IMAGE,
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '22:00',
    },
  ],
  sameAs: [],
  medicalSpecialty: 'Dentistry',
};

/** JSON-LD: Person schema for the doctor */
export const DOCTOR_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Haitham Sharshar',
  jobTitle: 'Prosthodontist & Digital Occlusion Specialist',
  worksFor: {
    '@type': 'Dentist',
    name: 'HS Clinic',
  },
  url: SITE_URL + '/about',
  image: DEFAULT_OG_IMAGE,
  description:
    'Board-certified prosthodontist and pioneer in digital dental occlusion with over 15 years of clinical experience.',
};

/**
 * Build a LocalBusiness JSON-LD from CMS settings.
 * Falls back to the hardcoded constant for any missing field.
 */
export function buildLocalBusinessJsonLd(settings: {
  clinicName?: string;
  phone?: string;
  address?: string;
  geoLat?: number;
  geoLng?: number;
  socialLinks?: Array<{ platform: string; url: string }>;
}) {
  return {
    ...LOCAL_BUSINESS_JSONLD,
    name: settings.clinicName || LOCAL_BUSINESS_JSONLD.name,
    telephone: settings.phone || LOCAL_BUSINESS_JSONLD.telephone,
    address: {
      '@type': 'PostalAddress' as const,
      streetAddress: settings.address || 'Nasr City',
      addressLocality: 'Cairo',
      addressCountry: 'EG',
    },
    geo: {
      '@type': 'GeoCoordinates' as const,
      latitude: settings.geoLat ?? LOCAL_BUSINESS_JSONLD.geo.latitude,
      longitude: settings.geoLng ?? LOCAL_BUSINESS_JSONLD.geo.longitude,
    },
    sameAs: settings.socialLinks?.map((s) => s.url) ?? [],
  };
}

/**
 * Build a Person JSON-LD for a team member/doctor from CMS data.
 */
export function buildDoctorJsonLd(doctor: { name: string; role: string; bioExcerpt: string }) {
  return {
    ...DOCTOR_JSONLD,
    name: doctor.name || DOCTOR_JSONLD.name,
    jobTitle: doctor.role || DOCTOR_JSONLD.jobTitle,
    description: doctor.bioExcerpt || DOCTOR_JSONLD.description,
  };
}

/** JSON-LD: Services page — list of offered dental services */
export const SERVICES_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'HS Clinic - Dr. Haitham Sharshar',
  url: SITE_URL + '/services',
  medicalSpecialty: 'Dentistry',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dental Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Digital Occlusion & TMJ',
        description: 'EMG analysis, jaw tracking, T-Scan diagnostics for occlusal optimization.',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Cosmetic Dentistry',
        description: 'Veneers, smile makeovers, aesthetic restorations with Digital Smile Design.',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Dental Implants',
        description:
          'Single implants, All-on-4, full-arch rehabilitation with CBCT-guided planning.',
      },
      {
        '@type': 'OfferCatalog',
        name: 'Full-Arch Rehabilitation',
        description:
          'Complete oral rehabilitation combining implants, prosthetics, and occlusal analysis.',
      },
    ],
  },
};

/** JSON-LD: Technology page — diagnostic equipment and methods */
export const TECHNOLOGY_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'HS Clinic - Advanced Diagnostics',
  url: SITE_URL + '/technology',
  medicalSpecialty: 'Dentistry',
  description:
    'State-of-the-art dental technology: CBCT 3D imaging, T-Scan occlusal analysis, EMG diagnostics, and CAD/CAM digital dentistry.',
  availableService: [
    {
      '@type': 'MedicalProcedure',
      name: 'CBCT 3D Imaging',
      description: 'Cone beam computed tomography for precise 3D dental and jaw imaging.',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'T-Scan Occlusal Analysis',
      description: 'Digital occlusal force measurement and bite analysis.',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'EMG Diagnostics',
      description: 'Electromyography for jaw muscle activity assessment.',
    },
  ],
};

/** JSON-LD: Digital Smile Design page — the DSD procedure */
export const DSD_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Luxarian Scientific Digital Smile Design',
  url: SITE_URL + '/digital-smile-design',
  description:
    'A precision cosmetic planning procedure using golden proportion analysis, 3D mockups, and digital facial mapping to design the perfect smile.',
  procedureType: 'http://schema.org/NoninvasiveProcedure',
  howPerformed:
    'Video analysis → 2D blueprint design → 3D mockup → final try-in with golden proportion verification.',
  preparation: 'Initial consultation and comprehensive digital scanning.',
  bodyLocation: 'Teeth and facial structure',
  status: 'http://schema.org/EventScheduled',
};
