import { motion } from 'framer-motion';
import { Shield, Globe, Award, Cpu, HeartPulse, Plane } from 'lucide-react';

const reasons = [
  {
    icon: Cpu,
    title: 'Fully Digital Workflow',
    desc: '3D-guided surgery, digital occlusion analysis & in-house 3D printing for 0.01mm precision.',
  },
  {
    icon: Shield,
    title: 'International Sterilization',
    desc: 'Strict infection control protocols exceeding WHO standards. Near-zero infection risk.',
  },
  {
    icon: Award,
    title: 'Lifetime Implant Warranty',
    desc: 'Written lifetime guarantee on all German/Swiss implant systems (Straumann, Nobel Biocare).',
  },
  {
    icon: Globe,
    title: 'English-Speaking Team',
    desc: 'Fluent communication in English, Arabic & French. No language barriers, ever.',
  },
  {
    icon: HeartPulse,
    title: 'Neuro-Occlusion Specialist',
    desc: "Dr. Sharshar's MSc in Perio-Implantology + EMG jaw-tracking ensures functional perfection.",
  },
  {
    icon: Plane,
    title: 'VIP Travel Concierge',
    desc: 'Airport pickup, 5-star hotel booking, clinic transfers & curated Cairo sightseeing tours.',
  },
];

export function WhyHSClinic() {
  return (
    <section className="border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-gold-400 mb-3 font-mono text-sm tracking-[0.3em] uppercase">
            WHY PATIENTS CHOOSE US
          </h2>
          <h3 className="mb-4 font-serif text-4xl text-white md:text-5xl">Why HS Clinic Cairo?</h3>
          <p className="mx-auto max-w-2xl text-gray-400">
            World-class technology. Unmatched hospitality. The most advanced digital dental practice
            in Egypt.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-dark-900/50 hover:border-gold-400/30 rounded-2xl border border-white/5 p-6 backdrop-blur transition-all duration-300"
            >
              <div className="bg-gold-400/10 border-gold-400/20 group-hover:bg-gold-400/20 group-hover:border-gold-400/40 mb-4 flex h-12 w-12 items-center justify-center rounded-lg border transition-colors">
                <r.icon className="text-gold-400 h-6 w-6" />
              </div>
              <h4 className="group-hover:text-gold-300 mb-2 font-serif text-lg font-bold text-white transition-colors">
                {r.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-400">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
