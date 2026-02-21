import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import {
  SEO,
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  DENTAL_IMPLANTS_JSONLD,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from '@/lib/seo';

const breadcrumbs = buildBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL + '/' },
  { name: 'Services', url: SITE_URL + '/services' },
  { name: 'Dental Implants', url: SITE_URL + '/services/dental-implants' },
]);

const faqs = [
  {
    question: 'How much do dental implants cost in Cairo compared to the USA or UK?',
    answer:
      'A single dental implant at HS Clinic costs approximately $450 USD, compared to $3,000–$5,000 in the USA or £2,000–£3,500 in the UK. Full-arch All-on-4 rehabilitation starts at $5,500 versus $20,000–$30,000 in Western countries — a savings of 70–90%.',
  },
  {
    question: 'What makes digitally guided implant surgery safer than traditional placement?',
    answer:
      'Dr. Haitham Sharshar uses CBCT 3D imaging to create a complete virtual model of your jaw, then digitally plans the exact implant position, angle, and depth. A 3D-printed surgical guide ensures the implant is placed with sub-millimeter accuracy, avoiding nerves and sinus cavities while maximizing bone contact for faster healing.',
  },
  {
    question: 'Am I a candidate for dental implants if I have bone loss?',
    answer:
      'Yes, in most cases. Dr. Sharshar uses CBCT 3D imaging to assess bone volume and density precisely. Bone grafting, sinus lifts, or zygomatic implants can be used to rebuild bone when needed. The digital planning workflow ensures every option is explored before recommending treatment.',
  },
  {
    question: 'What is the All-on-4 technique and who is it for?',
    answer:
      'All-on-4 is a full-arch rehabilitation technique where 4 strategically placed dental implants support an entire arch of fixed teeth. It is ideal for patients who are fully edentulous (missing all teeth) or have severely compromised teeth. Dr. Sharshar uses CBCT-guided planning to optimize implant angles for maximum bone engagement, often avoiding the need for bone grafting.',
  },
  {
    question: 'How long does the dental implant process take from start to finish?',
    answer:
      'The digital planning phase takes 1–2 visits. Implant placement surgery is completed in a single session. Healing (osseointegration) typically takes 3–6 months, during which a temporary prosthesis is worn. The final prosthetic is delivered once integration is confirmed via follow-up CBCT scan.',
  },
];

const faqJsonLd = buildFaqJsonLd(faqs);

const steps = [
  {
    title: 'CBCT 3D Scan',
    description: 'Complete three-dimensional imaging of your jaw, teeth, nerves, and sinuses.',
  },
  {
    title: 'Digital Planning',
    description:
      'Virtual implant placement with precise angle, depth, and prosthetic outcome simulation.',
  },
  {
    title: 'Surgical Guide',
    description:
      '3D-printed guide manufactured from your digital plan for sub-millimeter accuracy.',
  },
  {
    title: 'Guided Placement',
    description:
      'Minimally invasive implant surgery using the printed guide for exact positioning.',
  },
  {
    title: 'Prosthetic Delivery',
    description:
      'Custom-designed crown, bridge, or full-arch prosthesis delivered after osseointegration.',
  },
];

export default function DentalImplants() {
  return (
    <div className="bg-dark-950 min-h-screen pt-24 pb-12">
      <Helmet>
        <title>{SEO.dentalImplants.title}</title>
        <meta name="description" content={SEO.dentalImplants.description} />
        <link rel="canonical" href={SEO.dentalImplants.canonical} />
        <meta property="og:title" content={SEO.dentalImplants.title} />
        <meta property="og:description" content={SEO.dentalImplants.description} />
        <meta property="og:url" content={SEO.dentalImplants.canonical} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_EG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.dentalImplants.title} />
        <meta name="twitter:description" content={SEO.dentalImplants.description} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(DENTAL_IMPLANTS_JSONLD)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      {/* Breadcrumb Navigation */}
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
          <span className="text-amber-400">Dental Implants</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="mx-auto mb-20 max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Digitally Guided <span className="text-amber-400">Dental Implant Surgery</span> in Cairo
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">
            Dr. Haitham Sharshar performs digitally guided dental implant surgery using CBCT 3D
            imaging, computer-designed surgical guides, and precision-planned prosthetic outcomes.
            Whether you need a single implant, All-on-4 full-arch rehabilitation, or complex
            multi-implant reconstruction, every case is planned with sub-millimeter digital accuracy
            at HS Clinic, Cairo, Egypt.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="text-dark-950 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold transition-colors hover:bg-amber-400"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/dental-tourism"
              className="inline-flex items-center gap-2 rounded-lg border border-amber-500/30 px-6 py-3 font-semibold text-amber-400 transition-colors hover:bg-amber-500/10"
            >
              Dental Tourism Packages
            </Link>
          </div>
        </motion.div>
      </section>

      {/* NLP Semantic Section — Why HS Clinic */}
      <section className="mx-auto mb-20 max-w-6xl px-4">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Why Choose Dr. Haitham Sharshar for Dental Implants?
        </h2>
        <div className="prose prose-invert max-w-none space-y-4 leading-relaxed text-gray-300">
          <p>
            Dr. Haitham Sharshar is a Digital Dentistry Consultant and Perio Implantologist with
            over 15 years of experience in advanced implant surgery. As the Official exocad
            Certified ICTP Trainer for the Middle East, he integrates clinical and laboratory
            digital workflows to deliver faster, more comfortable, and more predictable implant
            outcomes.
          </p>
          <p>
            At HS Clinic in Cairo, every implant case begins with a CBCT cone beam computed
            tomography scan, providing a complete 3D map of the patient&apos;s jaw anatomy. Dr.
            Sharshar digitally plans the implant position, angulation, and depth using specialized
            software, then 3D-prints a surgical guide that ensures the physical surgery matches the
            digital plan with sub-millimeter precision.
          </p>
          <p>
            This digital-first approach significantly reduces surgical time, minimizes tissue
            trauma, accelerates healing, and virtually eliminates the risk of nerve damage or sinus
            perforation — making it the safest and most predictable method of implant placement
            available in the Middle East.
          </p>
        </div>
      </section>

      {/* Digital Workflow Steps */}
      <section className="mx-auto mb-20 max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white">The Digital Implant Process</h2>
        <div className="grid gap-6 md:grid-cols-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-900/50 relative rounded-xl border border-amber-500/20 p-5"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 text-sm font-bold text-amber-400">
                {i + 1}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Implant Types */}
      <section className="mx-auto mb-20 max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white">Implant Solutions We Offer</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Single Tooth Implants',
              desc: 'Individual implant and crown to replace a single missing tooth with natural-looking aesthetics and full chewing function.',
            },
            {
              title: 'All-on-4 Full Arch',
              desc: 'Four strategically placed implants supporting a complete arch of fixed teeth. Ideal for fully edentulous patients or those with severely compromised dentition.',
            },
            {
              title: 'Full-Arch Reconstruction',
              desc: 'Comprehensive treatment combining multiple implants, bone grafting if needed, and custom prosthetics for complete mouth rehabilitation.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-dark-900/50 rounded-xl border border-white/10 p-6">
              <CheckCircle2 className="mb-3 h-6 w-6 text-amber-400" />
              <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
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
            Ready for Your Dental Implant Consultation?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Whether you&apos;re in Cairo or traveling from abroad, Dr. Sharshar offers free virtual
            consultations to discuss your implant options. Save 70–90% compared to USA/UK prices.
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
