import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const guaranteeItems = [
  {
    treatment: 'Dental Implants (Titanium Posts)',
    term: 'Lifetime Structural Guarantee',
    details:
      'Covers implant fixture failure due to manufacturing defects or osseointegration failure under normal conditions.',
  },
  {
    treatment: 'Zirconia Crowns & Bridges',
    term: '10-Year Guarantee',
    details:
      'Covers fracture, chipping, or structural failure of monolithic zirconia restorations under normal wear.',
  },
  {
    treatment: 'Porcelain & E-max Veneers',
    term: '7-Year Guarantee',
    details: 'Covers debonding, fracture, or significant discoloration under normal everyday use.',
  },
  {
    treatment: 'Full-Arch Prosthetics (All-on-4/6)',
    term: '10-Year Structural Guarantee',
    details:
      'Covers the prosthetic framework. Individual teeth or acrylic components carry a 5-year guarantee.',
  },
  {
    treatment: 'Clear Aligners',
    term: 'Treatment Completion Guarantee',
    details:
      'Includes refinement aligners as needed to achieve the digitally planned outcome within the treatment period.',
  },
  {
    treatment: 'TMD/TMJ Splint Therapy',
    term: '2-Year Appliance Guarantee',
    details:
      'Covers Neurobite splint structural integrity. Retreatment support provided if symptoms recur within guarantee period.',
  },
];

export default function Guarantee() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      className="relative min-h-screen py-24 sm:py-32"
    >
      <Helmet>
        <title>Treatment Guarantee | {SITE_NAME}</title>
        <meta
          name="description"
          content="HS Clinic's treatment guarantee policy. We stand behind our work with comprehensive warranties on dental implants, veneers, crowns, and full-arch restorations."
        />
        <link rel="canonical" href={SITE_URL + '/guarantee'} />
      </Helmet>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="mb-16 text-center">
          <Award className="text-gold-400 mx-auto mb-4 h-12 w-12" />
          <h1 className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Treatment Guarantee
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            We stand behind every treatment with comprehensive warranties. Your confidence and
            long-term satisfaction are our priority.
          </p>
        </motion.div>

        {/* Guarantee Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {guaranteeItems.map((item) => (
            <motion.div
              key={item.treatment}
              variants={fadeUp}
              className="group hover:border-gold-400/20 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-colors"
            >
              <div className="mb-3 flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <div>
                  <h2 className="font-semibold text-white">{item.treatment}</h2>
                  <p className="text-gold-400 mt-1 text-sm font-medium">{item.term}</p>
                </div>
              </div>
              <p className="pl-8 text-sm text-gray-400">{item.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Conditions */}
        <motion.div variants={fadeUp} className="mt-16 space-y-8">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-lg font-semibold text-white">Guarantee Conditions</h2>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <span className="text-gold-400 shrink-0">•</span>
                All guarantees require adherence to the prescribed aftercare protocol and attendance
                at recommended follow-up appointments.
              </li>
              <li className="flex gap-2">
                <span className="text-gold-400 shrink-0">•</span>
                Regular dental check-ups (every 6 months) and professional cleanings are required to
                maintain warranty validity.
              </li>
              <li className="flex gap-2">
                <span className="text-gold-400 shrink-0">•</span>
                Damage resulting from trauma, accidents, bruxism without prescribed night guard use,
                or neglect of oral hygiene is excluded.
              </li>
              <li className="flex gap-2">
                <span className="text-gold-400 shrink-0">•</span>
                International patients: follow-up can be conducted via our virtual consultation
                platform. If in-clinic work is needed, travel costs are the patient&apos;s
                responsibility.
              </li>
            </ul>
          </div>

          {/* International Patient Assurance */}
          <div className="rounded-xl border border-emerald-400/10 bg-emerald-400/5 p-6">
            <h2 className="mb-3 text-lg font-semibold text-white">
              International Patient Assurance
            </h2>
            <p className="text-sm text-gray-300">
              For medical tourism patients: if a guaranteed restoration requires repair or
              replacement within the warranty period, we will provide the clinical work at{' '}
              <strong className="text-emerald-400">no additional cost</strong>. We coordinate with
              our tourism partners to assist with return trip logistics.
            </p>
          </div>

          <div className="text-center">
            <p className="mb-6 text-sm text-gray-500">
              Have questions about our guarantee? We&apos;re happy to discuss specifics for your
              treatment plan.
            </p>
            <Link
              to="/contact"
              className="bg-gold-500 hover:bg-gold-400 hover:shadow-gold-500/20 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-slate-950 transition-all hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
