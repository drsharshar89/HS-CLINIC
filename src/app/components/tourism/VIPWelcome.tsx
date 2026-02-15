import { motion } from 'framer-motion';
import { Plane, Crown, Clock, Car, Sparkles, Utensils } from 'lucide-react';

const vipFeatures = [
  {
    icon: Plane,
    title: 'Private Terminal Access',
    description:
      'Your concierge awaits tarmac-side. Skip the lines — step off the plane and into luxury.',
  },
  {
    icon: Car,
    title: 'Luxury Transfer',
    description:
      'Chauffeured in a premium vehicle from the airport directly to your 5-star accommodation.',
  },
  {
    icon: Clock,
    title: 'Personal Concierge (24/7)',
    description:
      'Dedicated multilingual coordinator handles everything — scheduling, translations, and local guidance.',
  },
  {
    icon: Sparkles,
    title: 'Digital Smile Design Ritual',
    description:
      'Your bespoke consultation: 3D facial scanning and cinematic smile photography by Dr. Sharshar.',
  },
  {
    icon: Utensils,
    title: 'Curated Recovery Dining',
    description:
      'Post-procedure menus crafted for comfort and healing. Delivered to your suite or at partnered restaurants.',
  },
  {
    icon: Crown,
    title: 'Cultural Experiences',
    description:
      'Private guided tours of the Pyramids, the Egyptian Museum, and Nile-side dining — all scheduled around your treatment.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function VIPWelcome() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 px-4 py-32 sm:px-6 lg:px-8">
      {/* Background accents */}
      <div className="bg-gold-400/5 absolute top-0 right-0 h-[600px] w-[600px] rounded-full blur-[180px]" />
      <div className="bg-gold-600/3 absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left Column: Editorial intro */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-400 mb-4 font-mono text-sm tracking-[0.3em] uppercase"
            >
              THE VIP EXPERIENCE
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6 font-serif text-4xl leading-tight text-white md:text-5xl"
            >
              Your Royal Arrival
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8 text-lg leading-relaxed text-gray-400"
            >
              Your journey to a perfect smile begins the moment you land. Our dedicated concierge
              team ensures every detail is curated — from airport pickup to post-procedure recovery
              — so you experience dental artistry where modern luxury meets the timeless wonder of
              Egypt.
            </motion.p>

            {/* Accent stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-8"
            >
              <div>
                <p className="text-gold-400 font-serif text-3xl">500+</p>
                <p className="mt-1 font-mono text-xs text-gray-500">INTERNATIONAL PATIENTS</p>
              </div>
              <div className="border-l border-white/10 pl-8">
                <p className="text-gold-400 font-serif text-3xl">24/7</p>
                <p className="mt-1 font-mono text-xs text-gray-500">CONCIERGE ACCESS</p>
              </div>
              <div className="border-l border-white/10 pl-8">
                <p className="text-gold-400 font-serif text-3xl">15+</p>
                <p className="mt-1 font-mono text-xs text-gray-500">COUNTRIES SERVED</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Feature list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-4"
          >
            {vipFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group bg-dark-900/40 hover:border-gold-400/20 hover:bg-dark-900/60 flex gap-5 rounded-xl border border-white/5 p-5 transition-all duration-300"
              >
                <div className="bg-gold-400/10 group-hover:bg-gold-400/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg transition-colors">
                  <feature.icon className="text-gold-400 h-5 w-5" />
                </div>
                <div>
                  <h4 className="group-hover:text-gold-300 mb-1 text-sm font-medium text-white transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
