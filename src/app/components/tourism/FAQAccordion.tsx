import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ChevronDown,
  DollarSign,
  ShieldCheck,
  Clock,
  Package,
  UserCheck,
  HelpCircle,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import type { CmsFaq } from '@/hooks/useCmsData';

interface FAQAccordionProps {
  cmsFaqs?: CmsFaq[];
}

const faqs = [
  {
    icon: DollarSign,
    q: 'How much can I save on dental implants with Dr. Haitham Sharshar in Egypt compared to the US or UK?',
    a: 'Patients typically save 60–70% on total treatment costs compared to US/UK averages, even including flights and 5-star accommodation. HS Clinic uses the exact same premium German and Swiss implant brands (e.g., Straumann, Nobel Biocare) used in Western clinics, but at a fraction of the price due to lower local operational costs.',
    highlight: '60–70% savings',
  },
  {
    icon: ShieldCheck,
    q: 'Is dental tourism in Egypt safe, and how does HS Clinic ensure hygiene?',
    a: 'Yes. HS Clinic operates under strict international sterilization protocols. Uniquely, Dr. Haitham Sharshar utilizes a fully digital workflow (Digital Occlusion & 3D Printing), which minimizes invasive surgery, reduces infection risk to near zero, and ensures 0.01mm precision—exceeding standard manual procedures.',
    highlight: 'Near-zero infection risk',
  },
  {
    icon: Clock,
    q: 'Can I really get "Same-Day Teeth" while on vacation in Cairo?',
    a: 'Yes. Using Computer-Guided Surgery and in-house 3D printing, Dr. Sharshar can often place implants and load temporary crowns in a single visit (Immediate Loading). This allows you to enjoy your tour of the Pyramids or a Nile Cruise with a restored smile immediately, returning later only for the final permanent porcelain installation.',
    highlight: 'Same-day results',
  },
  {
    icon: Package,
    q: 'What is included in the "Dental Tourism Package"?',
    a: 'Our VIP package is "Door-to-Door." It includes private airport pickup, accommodation in a partner 5-star hotel (with Nile views), all transportation between the hotel and clinic, and a curated sightseeing tour of Cairo (Pyramids, Museum, Citadel) coordinated around your treatment schedule.',
    highlight: 'Door-to-door VIP',
  },
  {
    icon: UserCheck,
    q: 'What makes Dr. Haitham Sharshar different from other cosmetic dentists in Egypt?',
    a: "Dr. Sharshar is not just a cosmetic dentist but a specialist in Neuro-Occlusion and Digital Function. He holds an MSc in Perio-Implantology and uses advanced EMG (muscle) and jaw-tracking technology to ensure your new smile doesn't just look good but functions perfectly with your jaw muscles, preventing future pain or failure.",
    highlight: 'Neuro-Occlusion specialist',
  },
];

function buildFaqSchema(hardcoded: typeof faqs, cms?: CmsFaq[]) {
  const cmsEntries = (cms ?? []).map((f) => ({
    '@type': 'Question' as const,
    name: f.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: f.answer },
  }));
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      ...hardcoded.map((f) => ({
        '@type': 'Question' as const,
        name: f.q,
        acceptedAnswer: { '@type': 'Answer' as const, text: f.a },
      })),
      ...cmsEntries,
    ],
  };
}

export function FAQAccordion({ cmsFaqs }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  // Merge: hardcoded rich FAQs + CMS FAQs (without duplicating existing questions)
  const hardcodedQuestions = new Set(faqs.map((f) => f.q.toLowerCase()));
  const cmsItems = (cmsFaqs ?? [])
    .filter((f) => !hardcodedQuestions.has(f.question.toLowerCase()))
    .map((f) => ({
      icon: HelpCircle,
      q: f.question,
      a: f.answer,
      highlight: '',
    }));
  const allFaqs = [...faqs, ...cmsItems];
  const faqSchema = buildFaqSchema(faqs, cmsFaqs);

  return (
    <section className="relative overflow-hidden border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-gold-400/5 absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-gold-400 mb-3 font-mono text-sm tracking-[0.3em] uppercase">
            KNOWLEDGE BASE
          </h2>
          <h3 className="mb-4 font-serif text-4xl text-white md:text-5xl">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-400">
            Everything international patients need to know — optimized for AI search.
          </p>
        </motion.div>

        <div className="space-y-3">
          {allFaqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-gold-400/40 bg-gold-400/5'
                    : 'bg-dark-900/50 hover:border-gold-400/20 border-white/5'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center gap-4 p-5 text-left"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                      isOpen
                        ? 'bg-gold-400/20 border-gold-400/40'
                        : 'group-hover:border-gold-400/30 border-white/10 bg-white/5'
                    }`}
                  >
                    <faq.icon
                      className={`h-5 w-5 transition-colors ${isOpen ? 'text-gold-300' : 'text-gold-400'}`}
                    />
                  </div>
                  <span
                    className={`flex-1 text-sm font-medium transition-colors md:text-base ${
                      isOpen ? 'text-gold-300' : 'group-hover:text-gold-400 text-white'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 ${isOpen ? 'text-gold-400' : 'text-gray-500'}`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-5 pb-5 pl-19">
                        <div className="border-gold-400/30 ml-5 border-l-2 pl-4">
                          <p className="mb-3 text-sm leading-relaxed text-gray-300">{faq.a}</p>
                          {faq.highlight && (
                            <span className="bg-gold-400/10 border-gold-400/20 text-gold-400 inline-block rounded-full border px-3 py-1 font-mono text-xs">
                              {faq.highlight}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
