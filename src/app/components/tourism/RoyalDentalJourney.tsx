import { motion } from 'framer-motion';
import { Sparkles, ScanFace, Lightbulb, Ship, Music, Utensils, MapPin } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

/* ── The Ritual ── */
const ritualFeatures = [
  { icon: ScanFace, label: '3D Facial Scanning' },
  { icon: Lightbulb, label: 'Cinematic Lighting' },
  { icon: Sparkles, label: 'Digital Smile Design' },
];

/* ── Nile Noir ── */
const nileFeatures = [
  { icon: Ship, label: 'Private Yacht' },
  { icon: Music, label: 'Live Jazz' },
  { icon: Utensils, label: 'Curated Comfort Menu' },
];

/* ── Pharaoh's Rest ── */
const pharaohExperiences = [
  {
    title: 'The Agatha Christie Suite',
    desc: 'Step into the legendary author\u2019s world at the historic Old Cataract Hotel \u2014 where mysteries were penned and empires gazed upon the Nile.',
    image: '/images/journey/pharaoh-aswan.jpg',
    location: 'Old Cataract, Aswan',
  },
  {
    title: 'Royal Garden Walk',
    desc: 'A private guided stroll through the Winter Palace gardens, designed as a meditative interval between your treatment sessions.',
    image: '/images/journey/pharaoh-luxor.jpg',
    location: 'Winter Palace, Luxor',
  },
  {
    title: 'Post-Op Recovery Villa',
    desc: 'A serene, fully-staffed private villa on the Red Sea coast for the ultimate post-procedure recovery in warmth and privacy.',
    image: '/images/journey/pharaoh-redsea.jpg',
    location: 'The Red Sea',
  },
];

export function RoyalDentalJourney() {
  return (
    <div className="space-y-0">
      {/* ═══════════════════════════════════════════
          THE RITUAL — Digital Smile Design
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
        {/* Ambient glow */}
        <div className="bg-gold-400/5 pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          {/* Left — Editorial copy */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-gold-400/70 mb-4 inline-block font-mono text-xs tracking-[0.25em] uppercase"
            >
              Day 02
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mb-6 font-serif text-3xl leading-tight font-bold text-white md:text-5xl"
            >
              The Ritual
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mb-8 text-lg leading-relaxed text-gray-400"
            >
              Enter the Luxarian Scientific suite. Here, Dr.&nbsp;Sharshar performs the
              &lsquo;Digital Smile Design&rsquo; ritual. Using 3D facial scanning and cinematic
              lighting, we design a smile that harmonizes with your unique facial architecture.
            </motion.p>

            {/* Schedule card */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="border-gold-400/10 bg-dark-900/60 mb-8 rounded-2xl border p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <ScanFace className="text-gold-400 h-5 w-5" />
                <span className="text-sm tracking-widest text-white uppercase">Procedure</span>
              </div>
              {[
                { step: 'Consultation', time: '09:00 AM' },
                { step: '3D Modeling', time: '10:30 AM' },
                { step: 'Mock-up Trial', time: '12:00 PM' },
              ].map((s, i) => (
                <div
                  key={s.step}
                  className={`flex items-end justify-between py-2 ${i < 2 ? 'border-b border-white/10' : ''}`}
                >
                  <span className="text-sm text-gray-300">{s.step}</span>
                  <span className="text-gold-400 font-mono text-xs">{s.time}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4">
              {ritualFeatures.map((f) => (
                <div
                  key={f.label}
                  className="border-gold-400/20 bg-gold-400/5 text-gold-400 flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
                >
                  <f.icon className="h-4 w-4" />
                  {f.label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Clinic image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src="/images/journey/ritual-clinic.jpg"
                alt="High-tech dental clinic interior with modern equipment and warm lighting"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Inner border accent */}
              <div className="border-gold-400/20 pointer-events-none absolute inset-0 m-4 rounded-xl border" />
              {/* Gradient overlay */}
              <div className="from-dark-950/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
            </div>
            {/* Decorative corner accents */}
            <div className="border-gold-400/10 pointer-events-none absolute -top-3 -right-3 h-20 w-20 rounded-tr-2xl border-t border-r" />
            <div className="border-gold-400/10 pointer-events-none absolute -bottom-3 -left-3 h-20 w-20 rounded-bl-2xl border-b border-l" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          NILE NOIR — Private Yacht Experience
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src="/images/journey/nile-noir.jpg"
            alt="Luxury dinner setup on a private yacht at night on the Nile"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="bg-dark-950/80 absolute inset-0 backdrop-blur-[2px]" />
          <div className="from-dark-950 to-dark-950 absolute inset-0 bg-gradient-to-b via-transparent" />
        </div>

        {/* Gold grid lines overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-gold-400/70 mb-4 inline-block font-mono text-xs tracking-[0.25em] uppercase"
            >
              Day 03
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mb-6 font-serif text-3xl font-bold text-white md:text-5xl"
            >
              Nile Noir
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400"
            >
              As the sun sets over the Nile, board our private yacht for a restorative dinner. Soft
              gold lighting, live jazz, and a menu curated for post-procedure comfort ensure your
              evening is as healing as it is memorable.
            </motion.p>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {nileFeatures.map((f, i) => (
              <motion.div
                key={f.label}
                variants={fadeUp}
                custom={i}
                className="group border-gold-400/10 bg-dark-900/60 hover:border-gold-400/30 relative rounded-2xl border px-8 py-5 backdrop-blur-sm transition-all duration-500"
              >
                <div className="from-gold-400/5 absolute inset-0 rounded-2xl bg-gradient-to-b to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <f.icon className="text-gold-400 h-5 w-5" />
                  <span className="font-medium text-white">{f.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PHARAOH'S REST — Luxury Experiences
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
        <div className="bg-gold-400/5 pointer-events-none absolute top-0 right-0 h-[400px] w-[500px] rounded-full blur-[140px]" />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-gold-400/70 mb-4 inline-block font-mono text-xs tracking-[0.25em] uppercase"
            >
              The Extension
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mb-4 font-serif text-3xl font-bold text-white md:text-5xl"
            >
              The Pharaoh&rsquo;s Rest
            </motion.h2>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="mb-2 flex items-center justify-center gap-3"
            >
              <span className="bg-gold-400/20 h-px w-16" />
              <Sparkles className="text-gold-400/40 h-4 w-4" />
              <span className="bg-gold-400/20 h-px w-16" />
            </motion.div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {pharaohExperiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group border-gold-400/10 hover:border-gold-400/20 relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500"
              >
                {/* Card image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="from-dark-950 via-dark-950/40 absolute inset-0 bg-gradient-to-t to-transparent" />
                  {/* Location badge */}
                  <div className="text-gold-400 absolute bottom-4 left-4 flex items-center gap-1.5 text-xs tracking-widest uppercase">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </div>
                </div>
                {/* Card body */}
                <div className="bg-dark-900/80 relative p-6">
                  <div className="from-gold-400/5 absolute inset-0 bg-gradient-to-b to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <h3 className="mb-3 font-serif text-xl font-bold text-white italic">
                      {exp.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">{exp.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
