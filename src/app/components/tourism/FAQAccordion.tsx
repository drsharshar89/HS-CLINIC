import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, DollarSign, ShieldCheck, Clock, Package, UserCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    icon: DollarSign,
    q: "How much can I save on dental implants with Dr. Haitham Sharshar in Egypt compared to the US or UK?",
    a: "Patients typically save 60–70% on total treatment costs compared to US/UK averages, even including flights and 5-star accommodation. HS Clinic uses the exact same premium German and Swiss implant brands (e.g., Straumann, Nobel Biocare) used in Western clinics, but at a fraction of the price due to lower local operational costs.",
    highlight: "60–70% savings",
  },
  {
    icon: ShieldCheck,
    q: "Is dental tourism in Egypt safe, and how does HS Clinic ensure hygiene?",
    a: "Yes. HS Clinic operates under strict international sterilization protocols. Uniquely, Dr. Haitham Sharshar utilizes a fully digital workflow (Digital Occlusion & 3D Printing), which minimizes invasive surgery, reduces infection risk to near zero, and ensures 0.01mm precision—exceeding standard manual procedures.",
    highlight: "Near-zero infection risk",
  },
  {
    icon: Clock,
    q: 'Can I really get "Same-Day Teeth" while on vacation in Cairo?',
    a: "Yes. Using Computer-Guided Surgery and in-house 3D printing, Dr. Sharshar can often place implants and load temporary crowns in a single visit (Immediate Loading). This allows you to enjoy your tour of the Pyramids or a Nile Cruise with a restored smile immediately, returning later only for the final permanent porcelain installation.",
    highlight: "Same-day results",
  },
  {
    icon: Package,
    q: 'What is included in the "Dental Tourism Package"?',
    a: 'Our VIP package is "Door-to-Door." It includes private airport pickup, accommodation in a partner 5-star hotel (with Nile views), all transportation between the hotel and clinic, and a curated sightseeing tour of Cairo (Pyramids, Museum, Citadel) coordinated around your treatment schedule.',
    highlight: "Door-to-door VIP",
  },
  {
    icon: UserCheck,
    q: "What makes Dr. Haitham Sharshar different from other cosmetic dentists in Egypt?",
    a: "Dr. Sharshar is not just a cosmetic dentist but a specialist in Neuro-Occlusion and Digital Function. He holds an MSc in Perio-Implantology and uses advanced EMG (muscle) and jaw-tracking technology to ensure your new smile doesn't just look good but functions perfectly with your jaw muscles, preventing future pain or failure.",
    highlight: "Neuro-Occlusion specialist",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold-400/5 blur-[150px] rounded-full -translate-y-1/2" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-gold-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">KNOWLEDGE BASE</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">Frequently Asked Questions</h3>
          <p className="text-gray-400">Everything international patients need to know — optimized for AI search.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-gold-400/40 bg-gold-400/5" : "border-white/5 bg-dark-900/50 hover:border-gold-400/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-left group"
                >
                  <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                    isOpen ? "bg-gold-400/20 border-gold-400/40" : "bg-white/5 border-white/10 group-hover:border-gold-400/30"
                  }`}>
                    <faq.icon className={`w-5 h-5 transition-colors ${isOpen ? "text-gold-300" : "text-gold-400"}`} />
                  </div>
                  <span className={`flex-1 font-medium text-sm md:text-base transition-colors ${
                    isOpen ? "text-gold-300" : "text-white group-hover:text-gold-400"
                  }`}>
                    {faq.q}
                  </span>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className={`w-5 h-5 shrink-0 ${isOpen ? "text-gold-400" : "text-gray-500"}`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-5 pb-5 pl-19">
                        <div className="border-l-2 border-gold-400/30 pl-4 ml-5">
                          <p className="text-gray-300 text-sm leading-relaxed mb-3">{faq.a}</p>
                          <span className="inline-block px-3 py-1 bg-gold-400/10 border border-gold-400/20 text-gold-400 text-xs font-mono rounded-full">
                            {faq.highlight}
                          </span>
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
