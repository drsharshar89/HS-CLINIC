import { motion } from "framer-motion";
import { Shield, Globe, Award, Cpu, HeartPulse, Plane } from "lucide-react";

const reasons = [
  { icon: Cpu, title: "Fully Digital Workflow", desc: "3D-guided surgery, digital occlusion analysis & in-house 3D printing for 0.01mm precision." },
  { icon: Shield, title: "International Sterilization", desc: "Strict infection control protocols exceeding WHO standards. Near-zero infection risk." },
  { icon: Award, title: "Lifetime Implant Warranty", desc: "Written lifetime guarantee on all German/Swiss implant systems (Straumann, Nobel Biocare)." },
  { icon: Globe, title: "English-Speaking Team", desc: "Fluent communication in English, Arabic & French. No language barriers, ever." },
  { icon: HeartPulse, title: "Neuro-Occlusion Specialist", desc: "Dr. Sharshar's MSc in Perio-Implantology + EMG jaw-tracking ensures functional perfection." },
  { icon: Plane, title: "VIP Travel Concierge", desc: "Airport pickup, 5-star hotel booking, clinic transfers & curated Cairo sightseeing tours." },
];

export function WhyHSClinic() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-gold-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">WHY PATIENTS CHOOSE US</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">Why HS Clinic Cairo?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">World-class technology. Unmatched hospitality. The most advanced digital dental practice in Egypt.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-dark-900/50 backdrop-blur border border-white/5 rounded-2xl p-6 hover:border-gold-400/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center border border-gold-400/20 mb-4 group-hover:bg-gold-400/20 group-hover:border-gold-400/40 transition-colors">
                <r.icon className="w-6 h-6 text-gold-400" />
              </div>
              <h4 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">{r.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
