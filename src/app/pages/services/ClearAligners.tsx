import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  SEO,
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  CLEAR_ALIGNERS_JSONLD,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from '@/lib/seo';

const breadcrumbs = buildBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL + '/' },
  { name: 'Services', url: SITE_URL + '/services' },
  { name: 'Clear Aligners', url: SITE_URL + '/services/clear-aligners' },
]);

const faqs = [
  {
    question: 'How do digital clear aligners differ from traditional braces?',
    answer:
      'Clear aligners are removable, virtually invisible orthodontic trays made from medical-grade thermoplastic. Unlike metal braces, they have no wires or brackets, are more comfortable, and allow normal eating and brushing. At HS Clinic, Dr. Sharshar integrates digital occlusal analysis to ensure your teeth are not just straight but functionally optimized for a proper bite.',
  },
  {
    question: 'How long does clear aligner treatment take?',
    answer:
      'Treatment duration varies based on complexity. Simple cases may take 3–6 months, while moderate to complex cases typically require 9–18 months. Dr. Sharshar provides a digital treatment simulation during consultation so you can see your projected timeline and final result before starting.',
  },
  {
    question: "What makes Dr. Sharshar's approach to clear aligners unique?",
    answer:
      'Dr. Sharshar integrates clear aligner therapy with digital occlusal analysis using T-Scan and jaw tracking. This ensures your teeth are aligned not only for aesthetics but for optimal bite function, reducing the risk of TMJ problems, premature wear, and relapse. As an Official exocad Certified ICTP Trainer, he applies elite digital dentistry quality control to every case.',
  },
  {
    question: 'Can clear aligners fix bite problems (malocclusion)?',
    answer:
      'Yes. Modern clear aligners can treat many types of malocclusion including overbite, underbite, crossbite, open bite, and crowding. Dr. Sharshar uses digital occlusal analysis to plan treatment that addresses both alignment and functional bite correction simultaneously.',
  },
];

const faqJsonLd = buildFaqJsonLd(faqs);

const benefits = [
  {
    title: 'Digitally Planned',
    desc: 'Full 3D treatment simulation before you start — see your results in advance.',
  },
  {
    title: 'Virtually Invisible',
    desc: 'Clear, removable trays that are nearly undetectable when worn.',
  },
  {
    title: 'Occlusion-Optimized',
    desc: 'Digital bite analysis ensures functional alignment, not just straight teeth.',
  },
  {
    title: 'Comfortable & Removable',
    desc: 'No wires or brackets. Remove for eating, brushing, and special occasions.',
  },
  {
    title: 'Precise & Predictable',
    desc: 'Computer-designed sequential trays for controlled, progressive tooth movement.',
  },
  {
    title: 'Quality Controlled',
    desc: 'exocad-certified digital workflow for elite accuracy in every aligner tray.',
  },
];

export default function ClearAligners() {
  return (
    <div className="bg-dark-950 min-h-screen pt-24 pb-12">
      <Helmet>
        <title>{SEO.clearAligners.title}</title>
        <meta name="description" content={SEO.clearAligners.description} />
        <link rel="canonical" href={SEO.clearAligners.canonical} />
        <meta property="og:title" content={SEO.clearAligners.title} />
        <meta property="og:description" content={SEO.clearAligners.description} />
        <meta property="og:url" content={SEO.clearAligners.canonical} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_EG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.clearAligners.title} />
        <meta name="twitter:description" content={SEO.clearAligners.description} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(CLEAR_ALIGNERS_JSONLD)}</script>
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
          <span className="text-amber-400">Clear Aligners</span>
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
            Digitally Integrated <span className="text-amber-400">Clear Aligner Therapy</span>
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">
            Invisible orthodontics with full digital integration at HS Clinic Cairo. Dr. Haitham
            Sharshar combines 3D treatment planning, digital occlusal analysis (T-Scan + Jaw
            Tracking), and progressive clear aligner therapy to deliver functional and aesthetic
            tooth alignment — not just straight teeth, but a proper bite.
          </p>
          <Link
            to="/contact"
            className="text-dark-950 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold transition-colors hover:bg-amber-400"
          >
            Book Aligner Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* Benefits Grid */}
      <section className="mx-auto mb-20 max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Why Choose Digital Clear Aligners at HS Clinic?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-dark-900/50 rounded-xl border border-white/10 p-6"
            >
              <CheckCircle2 className="mb-3 h-6 w-6 text-amber-400" />
              <h3 className="mb-2 text-lg font-semibold text-white">{b.title}</h3>
              <p className="text-sm text-gray-400">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NLP Content */}
      <section className="mx-auto mb-20 max-w-6xl px-4">
        <h2 className="mb-6 text-3xl font-bold text-white">
          The HS Clinic Difference: Occlusion-Optimized Aligners
        </h2>
        <div className="prose prose-invert max-w-none space-y-4 leading-relaxed text-gray-300">
          <p>
            Most clear aligner treatments focus solely on tooth alignment — making teeth straight.
            Dr. Sharshar goes further by integrating digital occlusal analysis into every aligner
            case. Using T-Scan digital bite analysis and jaw tracking, he ensures that your final
            tooth positions create a functionally optimized bite, reducing the risk of TMJ problems,
            premature tooth wear, and orthodontic relapse.
          </p>
          <p>
            As an Official exocad Certified ICTP Trainer for the Middle East, Dr. Sharshar maintains
            elite quality control standards in every digital dentistry workflow. Each aligner tray
            is designed and verified within a fully digital pipeline, ensuring sub-millimeter
            accuracy in tooth movement and predictable treatment outcomes.
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
            Ready for a Straighter, Healthier Smile?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            See your digital treatment simulation before starting. Book a consultation with Dr.
            Sharshar today.
          </p>
          <Link
            to="/contact"
            className="text-dark-950 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-lg font-semibold transition-colors hover:bg-amber-400"
          >
            Start Your Aligner Journey <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
