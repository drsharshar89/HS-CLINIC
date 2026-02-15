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
    latitude: 30.0444,
    longitude: 31.2357,
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
