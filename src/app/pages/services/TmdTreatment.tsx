import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import {
  SEO,
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  TMD_TREATMENT_JSONLD,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from '@/lib/seo';

const breadcrumbs = buildBreadcrumbJsonLd([
  { name: 'Home', url: SITE_URL + '/' },
  { name: 'Services', url: SITE_URL + '/services' },
  { name: 'TMJ/TMD Treatment', url: SITE_URL + '/services/tmj-tmd-treatment' },
]);

const faqs = [
  {
    question: 'What is TMD and how do I know if I have it?',
    answer:
      'Temporomandibular Disorder (TMD) is a group of conditions affecting the jaw joint (TMJ), masticatory muscles, and occlusion. Symptoms include jaw pain, clicking or popping sounds, headaches, ear pain, limited mouth opening, and teeth grinding (bruxism). Dr. Sharshar uses objective diagnostic tools — jaw tracking, EMG, and Occlusense — to confirm the diagnosis rather than relying on symptoms alone.',
  },
  {
    question: 'What is jaw tracking and why is it important for TMD diagnosis?',
    answer:
      'Jaw tracking (JT-3D by Zebris, Germany) records your mandibular movement patterns in three dimensions. It measures range of motion, velocity, trajectory deviations, and opening/closing paths. This objective data reveals functional abnormalities that cannot be detected by clinical examination alone, making it essential for accurate TMD diagnosis and treatment planning.',
  },
  {
    question: 'How does Dr. Sharshar use EMG in TMD treatment?',
    answer:
      'Surface electromyography (EMG) measures the electrical activity of your masticatory muscles — primarily the masseter and temporalis. Dr. Sharshar uses EMG to identify muscle hyperactivity, asymmetry, fatigue patterns, and dysfunction that contribute to TMD pain. The data guides treatment decisions and monitors muscle recovery throughout therapy.',
  },
  {
    question: 'What is a Neurobite splint and how does it differ from a regular night guard?',
    answer:
      'A Neurobite occlusal splint is a custom-designed appliance fabricated using data from your EMG, jaw tracking, and TENS sessions. Unlike a generic night guard, the Neurobite is calibrated to your specific neuromuscular rest position — the jaw position where muscles are most relaxed. This makes it far more effective at relieving TMD pain, reducing bruxism forces, and stabilizing the temporomandibular joint.',
  },
  {
    question: 'Is Dr. Sharshar the only dentist in the Middle East with this TMD technology?',
    answer:
      'Dr. Haitham Sharshar is the Official JMA-Optic+ Digital Occlusion System Certified Trainer for Zebris Co. (Germany) — the chosen international trainer for the entire Middle East region. His clinic is equipped with the complete neuromuscular diagnostic suite (Jaw Tracking + EMG + TENS + Occlusense + Neurobite), making it the most comprehensively equipped TMD treatment center in the region.',
  },
];

const faqJsonLd = buildFaqJsonLd(faqs);

const diagnosticTools = [
  {
    name: 'Jaw Tracking (JT-3D)',
    maker: 'Zebris, Germany',
    purpose:
      'Records 3D mandibular movement patterns, range of motion, velocity, and trajectory deviations.',
    color: 'from-blue-500/20 to-blue-600/10',
  },
  {
    name: 'Surface EMG',
    maker: 'Electromyography',
    purpose:
      'Measures electrical activity of masseter and temporalis muscles to identify hyperactivity and dysfunction.',
    color: 'from-green-500/20 to-green-600/10',
  },
  {
    name: 'TENS Unit',
    maker: 'Ultra-Low Frequency',
    purpose:
      'Relaxes masticatory muscles to find the neuromuscular rest (myocentric) jaw position.',
    color: 'from-purple-500/20 to-purple-600/10',
  },
  {
    name: 'Occlusense',
    maker: 'Digital Pressure Sensor',
    purpose: 'Wireless real-time bite force distribution mapping for precise occlusal adjustment.',
    color: 'from-amber-500/20 to-amber-600/10',
  },
  {
    name: 'Neurobite Splint',
    maker: 'Custom Fabricated',
    purpose:
      'Neuromuscular occlusal splint designed from patient-specific EMG and jaw tracking data.',
    color: 'from-red-500/20 to-red-600/10',
  },
];

const treatmentSteps = [
  'Comprehensive clinical examination and patient history',
  'CBCT 3D imaging of TMJ and surrounding structures',
  'Jaw tracking (JT-3D) records mandibular movement patterns',
  'Surface EMG measures masticatory muscle activity and symmetry',
  'TENS therapy relaxes muscles to neuromuscular rest position',
  'Occlusense maps bite force distribution in relaxed state',
  'Custom Neurobite splint fabricated from collected data',
  'Progressive occlusal adjustment and periodic reassessment',
];

export default function TmdTreatment() {
  return (
    <div className="bg-dark-950 min-h-screen pt-24 pb-12">
      <Helmet>
        <title>{SEO.tmdTreatment.title}</title>
        <meta name="description" content={SEO.tmdTreatment.description} />
        <link rel="canonical" href={SEO.tmdTreatment.canonical} />
        <meta property="og:title" content={SEO.tmdTreatment.title} />
        <meta property="og:description" content={SEO.tmdTreatment.description} />
        <meta property="og:url" content={SEO.tmdTreatment.canonical} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_EG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.tmdTreatment.title} />
        <meta name="twitter:description" content={SEO.tmdTreatment.description} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(TMD_TREATMENT_JSONLD)}</script>
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
          <span className="text-amber-400">TMJ/TMD Treatment</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto mb-20 max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-sm text-amber-400">
            Middle East&apos;s Most Advanced TMD Center
          </div>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Advanced <span className="text-amber-400">TMJ/TMD Neuromuscular Treatment</span>
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">
            Dr. Haitham Sharshar provides the most comprehensive TMD/TMJ treatment protocol in the
            Middle East, combining jaw tracking (Zebris JMA-Optic+, Germany), surface EMG
            electromyography, TENS neuromuscular therapy, Occlusense digital pressure mapping, and
            custom Neurobite occlusal splint therapy to diagnose and treat temporomandibular joint
            disorders, chronic jaw pain, bruxism, and occlusal dysfunction.
          </p>
          <Link
            to="/contact"
            className="text-dark-950 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold transition-colors hover:bg-amber-400"
          >
            Book TMD Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* NLP Authority Section */}
      <section className="mx-auto mb-20 max-w-6xl px-4">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Why Dr. Sharshar Is the Leading TMD Specialist in the Middle East
        </h2>
        <div className="prose prose-invert max-w-none space-y-4 leading-relaxed text-gray-300">
          <p>
            Dr. Haitham Sharshar is the Official JMA-Optic+ Digital Occlusion System Certified
            Trainer for Zebris Co. (Germany) — the chosen international trainer for the entire
            Middle East. He utilizes and teaches dynamic jaw tracking, ensuring that restorations,
            splints, and occlusal treatments are designed to align perfectly with each
            patient&apos;s natural jaw movements.
          </p>
          <p>
            Unlike traditional TMD treatment that relies on subjective clinical assessment, Dr.
            Sharshar&apos;s protocol uses five objective diagnostic instruments to measure,
            quantify, and document jaw function. This data-driven approach eliminates guesswork,
            ensures reproducible results, and allows precise monitoring of treatment progress over
            time.
          </p>
          <p>
            His clinic is the only facility in the Middle East equipped with the complete
            neuromuscular TMD diagnostic suite: Jaw Tracking + Surface EMG + TENS + Occlusense +
            Neurobite. This combination enables diagnosis and treatment of conditions that other
            clinics cannot objectively assess.
          </p>
        </div>
      </section>

      {/* Diagnostic Technology Grid */}
      <section className="mx-auto mb-20 max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white">Our TMD Diagnostic Technology</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {diagnosticTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl border border-white/10 bg-gradient-to-br ${tool.color} p-6`}
            >
              <h3 className="mb-1 text-xl font-semibold text-white">{tool.name}</h3>
              <p className="mb-3 text-xs text-amber-400">{tool.maker}</p>
              <p className="text-sm text-gray-300">{tool.purpose}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Treatment Protocol */}
      <section className="mx-auto mb-20 max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white">The Complete TMD Treatment Protocol</h2>
        <div className="space-y-3">
          {treatmentSteps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-dark-900/30 flex items-start gap-4 rounded-lg border border-white/5 p-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-400">
                {i + 1}
              </span>
              <p className="text-sm text-gray-300">{step}</p>
            </motion.div>
          ))}
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
            Suffering from Jaw Pain or TMJ Issues?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Dr. Sharshar offers comprehensive TMD evaluations using objective diagnostic technology.
            Get a definitive diagnosis and a data-driven treatment plan.
          </p>
          <Link
            to="/contact"
            className="text-dark-950 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-lg font-semibold transition-colors hover:bg-amber-400"
          >
            Book Your TMD Evaluation <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
