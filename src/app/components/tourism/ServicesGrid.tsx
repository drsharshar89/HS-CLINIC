import { motion } from "framer-motion";
import { Link } from "react-router";
import { Stethoscope, Sparkles, Brain, Smile } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Dental Implants", desc: "German & Swiss systems with lifetime warranty", href: "/services", img: "/images/dental/dental-implant-dr-haitham-sharshar.jpeg" },
  { icon: Sparkles, title: "Hollywood Smile", desc: "Veneers, bonding & full smile makeovers", href: "/services", img: "/images/dental/Full-arch-dental-implant-dr-haitham-sharshar.jpeg" },
  { icon: Brain, title: "TMJ / Occlusion", desc: "EMG diagnostics, T-Scan & splint therapy", href: "/services", img: "/images/dental/All-on-4-Dental-Implants-dr haitham sharshar.jpg" },
  { icon: Smile, title: "Esthetics", desc: "Whitening, gum contouring & cosmetic bonding", href: "/services", img: "/images/dental/dental-implant-dr-haitham-sharshar.jpeg" },
];

export function ServicesGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h2 className="text-gold-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">OUR SPECIALTIES</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Treatments Available for Tourists</h3>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={s.href} className="group block relative rounded-2xl overflow-hidden border border-white/5 hover:border-gold-400/30 transition-all h-72">
                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <div className="w-10 h-10 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-3 group-hover:bg-gold-400/20 transition-colors">
                    <s.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <h4 className="text-white font-serif font-bold text-lg mb-1 group-hover:text-gold-300 transition-colors">{s.title}</h4>
                  <p className="text-gray-400 text-xs">{s.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
