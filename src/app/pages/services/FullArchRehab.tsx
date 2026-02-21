import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  SEO,
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from '@/lib/seo';

/** JSON-LD for Full-Arch Rehabilitation procedure */
const FULL_ARCH_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Full-Arch Rehabilitation & All-on-4 Implants',
  url: SITE_URL + '/services/full-arch-rehabilitation',
  description:
    'Complete full-arch rehabilitation at HS Clinic Cairo. All-on-4 and All-on-6 implant-supported prosthetics, CBCT-guided planning, digital occlusal optimization, and same-day temporary teeth by Dr. Haitham Sharshar.',
  procedureType: 'http://schema.org/SurgicalProcedure',
  howPerformed:
    'CBCT 3D scan → digital treatment planning → guided implant placement (4-6 implants per arch) → immediate temporary prosthesis → osseointegration period → final prosthetic delivery with digital occlusal verification.',
  preparation:
    'Comprehensive digital examination, CBCT scan, diagnostic wax-up, and digital smile design preview.',
  bodyLocation: 'Full maxillary and/or mandibular arch',
  status: 'http://schema.org/EventScheduled',
};

const breadcrumbs = buildBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL + '/' },
  { name: 'Services', url: SITE_URL + '/services' },
  { name: 'Full Arch Rehabilitation', url: SITE_URL + '/services/full-arch-rehabilitation' },
]);

const faqs = [
  {
    question: 'What is All-on-4 dental implant treatment?',
    answer:
      'All-on-4 is a clinically proven technique where 4 dental implants are strategically placed in each jaw to support a full arch of fixed prosthetic teeth. The posterior implants are angled to maximize bone contact, often eliminating the need for bone grafting. Dr. Sharshar uses CBCT-guided planning to optimize implant positions for each patient.',
  },
  {
    question: 'How much does full-arch rehabilitation cost at HS Clinic compared to the USA/UK?',
    answer:
      'Full-arch All-on-4 rehabilitation at HS Clinic starts at approximately $5,500 USD per arch, compared to $20,000–$30,000 in the USA or £15,000–£25,000 in the UK. This represents a savings of 70–85% with the same standard of technology and materials.',
  },
  {
    question: 'Can I get temporary teeth on the same day as implant surgery?',
    answer:
      'Yes. Dr. Sharshar offers immediate loading protocols where a temporary fixed prosthesis is attached to the implants on the same day as surgery. This means you leave the clinic with functional, aesthetic teeth while your implants heal (osseointegrate) over the following 3–6 months.',
  },
  {
    question: 'How long do full-arch implant prosthetics last?',
    answer:
      'With proper care and regular maintenance, implant-supported full-arch prosthetics can last 15–25+ years. The titanium implants themselves can last a lifetime. Dr. Sharshar uses digital occlusal verification to ensure proper bite distribution, which is critical for long-term prosthetic longevity.',
  },
];

const faqJsonLd = buildFaqJsonLd(faqs);

const features = [
  {
    title: 'CBCT-Guided Planning',
    desc: 'Complete 3D jaw mapping for precise implant position, angulation, and prosthetic outcome prediction.',
  },
  {
    title: 'Same-Day Teeth',
    desc: 'Immediate loading protocol — leave with a fixed temporary prosthesis on the day of surgery.',
  },
  {
    title: 'Digital Occlusion Verification',
    desc: 'T-Scan and jaw tracking ensure your prosthetic bite is functionally optimized for long-term durability.',
  },
  {
    title: 'Minimal Bone Requirements',
    desc: 'Angled posterior implants maximize bone contact, often avoiding the need for bone grafting procedures.',
  },
];

export default function FullArchRehab() {
  return (
    <div className="bg-dark-950 min-h-screen pt-24 pb-12">
      <Helmet>
        <title>{SEO.fullArchRehab.title}</title>
        <meta name="description" content={SEO.fullArchRehab.description} />
        <link rel="canonical" href={SEO.fullArchRehab.canonical} />
        <meta property="og:title" content={SEO.fullArchRehab.title} />
        <meta property="og:description" content={SEO.fullArchRehab.description} />
        <meta property="og:url" content={SEO.fullArchRehab.canonical} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_EG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.fullArchRehab.title} />
        <meta name="twitter:description" content={SEO.fullArchRehab.description} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(FULL_ARCH_JSONLD)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-gray-400">
          <Link to="/" className="transition-colors hover:text-amber-400">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/services" className="transition-colors hover:text-amber-400">
            Services
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-amber-400">Full Arch Rehabilitation</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto mb-20 max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            <span className="text-amber-400">Full-Arch Rehabilitation</span> & All-on-4 Implants
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">
            Complete oral rehabilitation combining dental implants, prosthetics, and digital
            occlusal analysis. Dr. Haitham Sharshar delivers All-on-4 and full-mouth reconstruction
            with CBCT-guided precision, same-day temporary teeth, and digital occlusion verification
            for long-lasting, functional results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="text-dark-950 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold transition-colors hover:bg-amber-400"
            >
              Book Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/dental-tourism"
              className="inline-flex items-center gap-2 rounded-lg border border-amber-500/30 px-6 py-3 font-semibold text-amber-400 transition-colors hover:bg-amber-500/10"
            >
              International Patient? See Tourism Packages
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="mx-auto mb-20 max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white">The HS Clinic Full-Arch Advantage</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-900/50 rounded-xl border border-white/10 p-6"
            >
              <CheckCircle2 className="mb-3 h-6 w-6 text-amber-400" />
              <h3 className="mb-2 text-xl font-semibold text-white">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NLP Content */}
      <section className="mx-auto mb-20 max-w-6xl px-4">
        <h2 className="mb-6 text-3xl font-bold text-white">Who Needs Full-Arch Rehabilitation?</h2>
        <div className="prose prose-invert max-w-none space-y-4 leading-relaxed text-gray-300">
          <p>
            Full-arch rehabilitation is ideal for patients who are fully edentulous (missing all
            teeth in one or both arches), have severely compromised remaining teeth, or are
            currently wearing removable dentures and want a permanent, fixed solution. It is also
            the treatment of choice for patients with terminal dentition — teeth that cannot be
            saved due to advanced periodontal disease or extensive decay.
          </p>
          <p>
            Dr. Sharshar&apos;s digital-first approach begins with a comprehensive CBCT scan and
            digital smile design preview. Patients see their projected final result before any
            surgery begins. Implant positions are planned virtually and executed with 3D-printed
            surgical guides, ensuring predictable outcomes and minimizing surgical time and
            discomfort.
          </p>
          <p>
            What sets the HS Clinic apart is the integration of digital occlusal verification
            (T-Scan and jaw tracking) into the prosthetic phase. This ensures that the final bite
            distribution is functionally optimized — a critical factor for long-term implant and
            prosthetic longevity that most clinics overlook.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mb-20 max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-dark-900/50 rounded-xl border border-white/10"
            >
              <summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-white">
                {faq.question}
                <ChevronRight className="h-4 w-4 text-amber-400 transition-transform group-open:rotate-90" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-gray-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 text-center">
        <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 to-amber-600/5 p-12">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Transform Your Smile with Full-Arch Implants
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Save 70–85% compared to USA/UK prices. Free virtual consultation available for
            international patients.
          </p>
          <Link
            to="/contact"
            className="text-dark-950 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-lg font-semibold transition-colors hover:bg-amber-400"
          >
            Get Your Free Consultation <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
