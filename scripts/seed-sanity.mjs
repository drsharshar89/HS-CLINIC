/**
 * Seed script — pushes all CMS content to Sanity Studio.
 * Run: node scripts/seed-sanity.mjs
 */
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '..', '.env') });

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'nk38o90y',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

// ─── Documents to create ────────────────────────────────────────

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  clinicName: 'HS Clinic — Digital Occlusion & Cosmetic Dentistry',
  phone: '+20 110 101 0599',
  whatsapp: '+201101010599',
  email: 'info@hsclinic.dental',
  address: '8/63, 10th District, Zahraa El Maadi\nCairo, Egypt',
  socialLinks: [
    { _key: 'fb', platform: 'facebook', url: 'https://facebook.com/dr.haithamsharshar' },
    { _key: 'ig', platform: 'instagram', url: 'https://instagram.com/dr.haithamsharshar' },
    { _key: 'yt', platform: 'youtube', url: 'https://youtube.com/@dr.haithamsharshar' },
    { _key: 'li', platform: 'linkedin', url: 'https://linkedin.com/in/haithamsharshar' },
  ],
};

const hero = {
  _type: 'hero',
  title: 'Precision Dentistry. Perfected.',
  subtitle:
    "Where advanced occlusion science meets cosmetic artistry. Dr. Haitham Sharshar combines digital precision with an artist's eye to create smiles that function as beautifully as they look.",
  ctaText: 'Book Consultation',
  ctaLink: '/contact',
};

const teamMember = {
  _type: 'teamMember',
  name: 'Dr. Haitham Sharshar',
  role: 'Founder — Digital Occlusion & Cosmetic Dentistry Specialist',
  bio: [
    {
      _type: 'block',
      _key: 'bio1',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'bio1s',
          marks: [],
          text: 'Dr. Haitham Sharshar is a leading specialist in digital occlusion and cosmetic dentistry based in Cairo, Egypt. With an MSc in Periodontics & Implantology from Cairo University, he brings over 15 years of clinical experience in complex smile rehabilitation, full-arch implant solutions, and neuromuscular diagnostics.',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'bio2',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'bio2s',
          marks: [],
          text: 'He is certified in Digital Smile Design (DSD), T-Scan occlusal analysis, and CEREC same-day restorations. His clinic uses exclusively German and Swiss implant systems (Straumann, Nobel Biocare) and offers a lifetime warranty on all implant work.',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'bio3',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'bio3s',
          marks: [],
          text: "Dr. Sharshar has treated over 500 international patients from 15+ countries, making HS Clinic one of Cairo's most trusted destinations for dental tourism. His philosophy: every smile must be both beautiful and biomechanically sound.",
        },
      ],
    },
  ],
  order: 1,
};

const services = [
  {
    _type: 'service',
    title: 'Dental Implants',
    slug: { _type: 'slug', current: 'dental-implants' },
    description:
      'German & Swiss implant systems (Straumann, Nobel Biocare) placed with 3D-guided digital surgery. Lifetime warranty included.',
    icon: 'Stethoscope',
    order: 1,
  },
  {
    _type: 'service',
    title: 'Hollywood Smile',
    slug: { _type: 'slug', current: 'hollywood-smile' },
    description:
      'Complete smile makeovers with premium porcelain veneers, bonding, and whitening. Designed using Digital Smile Design technology.',
    icon: 'Sparkles',
    order: 2,
  },
  {
    _type: 'service',
    title: 'All-on-4 Full Arch',
    slug: { _type: 'slug', current: 'all-on-4-full-arch' },
    description:
      'Full arch rehabilitation with just 4 strategically placed implants. Same-day fixed teeth with immediate loading protocol.',
    icon: 'Crown',
    order: 3,
  },
  {
    _type: 'service',
    title: 'TMJ / Occlusion Therapy',
    slug: { _type: 'slug', current: 'tmj-occlusion' },
    description:
      'Advanced neuromuscular diagnostics using T-Scan and EMG jaw tracking. Splint therapy and occlusal adjustment for chronic jaw pain.',
    icon: 'Brain',
    order: 4,
  },
  {
    _type: 'service',
    title: 'Cosmetic Dentistry',
    slug: { _type: 'slug', current: 'cosmetic-dentistry' },
    description:
      'Teeth whitening, gum contouring, cosmetic bonding, and esthetic crown work. Precision color matching for natural results.',
    icon: 'Smile',
    order: 5,
  },
  {
    _type: 'service',
    title: 'Digital Smile Design',
    slug: { _type: 'slug', current: 'digital-smile-design' },
    description:
      '3D facial scanning, cinematic smile photography, and mathematical proportion analysis to design your perfect smile before treatment begins.',
    icon: 'ScanLine',
    order: 6,
  },
];

const testimonials = [
  {
    _type: 'testimonial',
    name: 'James W.',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    text: 'Saved 70% compared to London prices. The clinic felt like a 5-star hotel. Dr. Sharshar explained everything clearly and the results are incredible.',
    stars: 5,
  },
  {
    _type: 'testimonial',
    name: 'Maria S.',
    country: 'Germany',
    countryFlag: '🇩🇪',
    text: 'Dr. Sharshar is a true artist. My implants are perfect and the whole Cairo experience was unforgettable. The concierge arranged everything.',
    stars: 5,
  },
  {
    _type: 'testimonial',
    name: 'Ahmed K.',
    country: 'UAE',
    countryFlag: '🇦🇪',
    text: 'World-class technology at a fraction of Gulf prices. The digital smile design process was amazing — I could see my new smile before any work started.',
    stars: 5,
  },
  {
    _type: 'testimonial',
    name: 'Sarah M.',
    country: 'United States',
    countryFlag: '🇺🇸',
    text: 'I flew from New York for my Hollywood Smile. Best decision ever. The whole trip cost less than one veneer in Manhattan, and I got to see the Pyramids!',
    stars: 5,
  },
  {
    _type: 'testimonial',
    name: 'Fatima A.',
    country: 'Saudi Arabia',
    countryFlag: '🇸🇦',
    text: "The VIP treatment from airport to clinic was seamless. Dr. Sharshar's attention to detail is unmatched. My smile has never looked this natural.",
    stars: 5,
  },
];

const tourismPricing = [
  {
    _type: 'tourismPricing',
    treatment: 'Single Implant',
    egyptPrice: '$450',
    usaPrice: '$4,500',
    ukPrice: '£3,000',
    turkeyPrice: '$800',
    hungaryPrice: '$900',
    uaePrice: '$3,500',
    saving: 'Up to 90%',
  },
  {
    _type: 'tourismPricing',
    treatment: 'All-on-4 (per arch)',
    egyptPrice: '$3,500',
    usaPrice: '$25,000',
    ukPrice: '£18,000',
    turkeyPrice: '$5,000',
    hungaryPrice: '$5,500',
    uaePrice: '$20,000',
    saving: 'Up to 86%',
  },
  {
    _type: 'tourismPricing',
    treatment: 'Hollywood Smile (20 veneers)',
    egyptPrice: '$3,000',
    usaPrice: '$30,000',
    ukPrice: '£20,000',
    turkeyPrice: '$4,500',
    hungaryPrice: '$5,000',
    uaePrice: '$25,000',
    saving: 'Up to 90%',
  },
  {
    _type: 'tourismPricing',
    treatment: 'Teeth Whitening',
    egyptPrice: '$150',
    usaPrice: '$800',
    ukPrice: '£500',
    turkeyPrice: '$300',
    hungaryPrice: '$350',
    uaePrice: '$700',
    saving: 'Up to 81%',
  },
  {
    _type: 'tourismPricing',
    treatment: 'Porcelain Crown',
    egyptPrice: '$120',
    usaPrice: '$1,500',
    ukPrice: '£900',
    turkeyPrice: '$200',
    hungaryPrice: '$250',
    uaePrice: '$1,200',
    saving: 'Up to 92%',
  },
];

const faqs = [
  {
    _type: 'faq',
    question: 'How long do I need to stay in Cairo?',
    answer:
      "Most treatments require 5-7 days. We'll provide a personalized schedule during your virtual consultation. Some procedures like whitening can be done in a single visit.",
    order: 1,
  },
  {
    _type: 'faq',
    question: 'Is dental tourism in Egypt safe?',
    answer:
      'Absolutely. HS Clinic follows international sterilization protocols exceeding WHO standards. We use only FDA-approved German and Swiss implant systems with lifetime warranties.',
    order: 2,
  },
  {
    _type: 'faq',
    question: "What's included in the VIP package?",
    answer:
      'Airport pickup in a luxury vehicle, 5-star hotel recommendations, clinic transfers, a personal multilingual concierge, and curated Cairo sightseeing tours between appointments.',
    order: 3,
  },
  {
    _type: 'faq',
    question: 'How do I start the process?',
    answer:
      'Send us your X-rays or smile photos via WhatsApp or our consultation form. Within 24 hours, Dr. Sharshar will provide a personalized treatment plan with pricing.',
    order: 4,
  },
  {
    _type: 'faq',
    question: 'Do you offer a warranty on implants?',
    answer:
      'Yes — we provide a written lifetime warranty on all German and Swiss implant systems (Straumann, Nobel Biocare). This includes both the implant fixture and the abutment.',
    order: 5,
  },
];

// ─── Execute ────────────────────────────────────────────────────

async function seed() {
  console.log('🌱 Starting Sanity seed...\n');

  const allDocs = [
    siteSettings,
    hero,
    teamMember,
    ...services,
    ...testimonials,
    ...tourismPricing,
    ...faqs,
  ];

  let created = 0;
  let errors = 0;

  for (const doc of allDocs) {
    try {
      if (doc._id) {
        // Singleton (siteSettings) — use createOrReplace
        const result = await client.createOrReplace(doc);
        console.log(
          `  ✅ ${doc._type}: ${doc.title || doc.clinicName || doc.name || doc._id} → ${result._id}`
        );
      } else {
        const result = await client.create(doc);
        console.log(
          `  ✅ ${doc._type}: ${doc.title || doc.name || doc.question || doc.treatment} → ${result._id}`
        );
      }
      created++;
    } catch (err) {
      console.error(`  ❌ ${doc._type}: ${err.message}`);
      errors++;
    }
  }

  console.log(`\n🏁 Done! Created: ${created} | Errors: ${errors}`);
}

seed();
