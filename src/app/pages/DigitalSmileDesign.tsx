import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Video,
  PenTool,
  Box,
  Smile,
  ScanLine,
  Sparkles,
  Crown,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { SEO, SITE_NAME, DEFAULT_OG_IMAGE, DSD_JSONLD } from '@/lib/seo';

/* ────────── animation presets ────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ────────── timeline data ────────── */
const timeline = [
  {
    icon: Video,
    title: 'Video Analysis',
    desc: 'Comprehensive video analysis, skeletal-fascial identity.',
  },
  {
    icon: PenTool,
    title: '2D Design',
    desc: 'Design a plan and blueprint design.',
  },
  {
    icon: Box,
    title: '3D Mockup',
    desc: 'Hyper-fashion, tooth and scanner.',
  },
  {
    icon: Smile,
    title: 'Final Try-in',
    desc: 'Perfects mirror to perfect your smile.',
  },
];

/* ────────── journey cards ────────── */
const journey = [
  {
    icon: ScanLine,
    num: '1',
    title: 'DIGITAL CAPTURE & ANALYSIS',
    desc: 'We utilize advanced 3D imaging to map your unique facial structure and dental anatomy with micron-level accuracy.',
  },
  {
    icon: Sparkles,
    num: '2',
    title: 'PRECISION PLANNING',
    desc: 'A bespoke gold-standard blueprint is meticulously crafted, combining facial aesthetics with dental function.',
  },
  {
    icon: Crown,
    num: '3',
    title: 'FINAL TRANSFORMATION',
    desc: 'Experience the seamless realization of your dream smile, expertly crafted and delivered with exceptional artistry.',
  },
];

export default function DigitalSmileDesign() {
  const seo = SEO.digitalSmileDesign;

  return (
    <div className="bg-dark-950 min-h-screen">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(DSD_JSONLD)}</script>
      </Helmet>

      {/* ═══════════════════════════════════════════
          SECTION 1 — VARIANT 2 HERO
          Full-bleed 4K Stitch image as hero
      ═══════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden">
        {/* 4K Stitch Variant 2 as full hero */}
        <motion.img
          src="/images/dsd/variant2-4k.webp"
          alt="Luxarian Scientific Digital Smile Design — blueprint and reveal"
          className="block h-auto w-full"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          loading="eager"
        />

        {/* Subtle gradient overlay at bottom for smooth transition */}
        <div className="from-dark-950 absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent" />

        {/* CTA overlay bottom-center */}
        <motion.div
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            to="/contact"
            className="bg-gold-400 hover:bg-gold-500 text-dark-950 shadow-gold-400/20 inline-flex items-center gap-2 rounded-sm px-5 py-3 text-xs font-semibold tracking-[0.15em] uppercase shadow-lg transition-all duration-300 hover:scale-105 sm:gap-3 sm:px-8 sm:py-4 sm:text-sm"
          >
            Book Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — VARIANT 1 HERO / SPLIT REALITY
          Full-bleed 4K Stitch image
      ═══════════════════════════════════════════ */}
      <section className="bg-dark-950 relative w-full overflow-hidden">
        {/* Section header */}
        <motion.div
          className="px-4 pt-20 pb-10 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gold-400 mb-4 font-mono text-xs tracking-[0.25em] uppercase">
            Before &amp; After
          </p>
          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            The Split Reality
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Witness the transformation — from scientific blueprint to artistic masterpiece.
          </p>
        </motion.div>

        {/* 4K Stitch Variant 1 as full-width showcase */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/dsd/variant1-4k.webp"
            alt="Digital Smile Design split reality — before and after transformation with golden proportion analysis"
            className="block h-auto w-full"
            loading="lazy"
          />
          {/* Bottom gradient for seamless transition */}
          <div className="from-dark-950 absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t to-transparent" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — PROJECT TIMELINE
          Matches Variant 1's right-side timeline
      ═══════════════════════════════════════════ */}
      <section className="bg-dark-950 border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-gold-400 mb-4 font-mono text-xs tracking-[0.25em] uppercase">
              The Process
            </p>
            <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
              Project Timeline
            </h2>
          </motion.div>

          {/* Horizontal timeline */}
          <motion.div
            className="relative"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Connecting line */}
            <div className="from-gold-400/30 via-gold-400 to-gold-400/30 absolute top-[52px] right-[12%] left-[12%] hidden h-px bg-gradient-to-r md:block" />

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
              {timeline.map((step, i) => (
                <motion.div
                  key={step.title}
                  className="group flex flex-col items-center text-center"
                  variants={fadeUp}
                  custom={i * 0.1}
                >
                  {/* Icon circle */}
                  <div className="border-gold-400/40 bg-dark-900/80 group-hover:border-gold-400 relative mb-5 flex h-[104px] w-[104px] items-center justify-center rounded-full border-2 backdrop-blur transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                    <step.icon className="text-gold-400 h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                    {/* Gold dot on the connecting line */}
                    <div className="bg-gold-400 absolute -bottom-[7px] hidden h-3.5 w-3.5 rounded-full shadow-[0_0_12px_rgba(212,175,55,0.5)] md:block" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold tracking-wide text-white">
                    {step.title}
                  </h3>
                  <p className="max-w-[200px] text-sm leading-relaxed text-gray-400">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — GOLDEN PROPORTION
          Matches Variant 1's bottom-right section
      ═══════════════════════════════════════════ */}
      <section className="bg-dark-900 border-t border-b border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 md:grid-cols-2">
            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-gold-400 mb-4 font-mono text-xs tracking-[0.25em] uppercase">
                Mathematical Beauty
              </p>
              <h2 className="mb-6 font-serif text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
                Golden
                <br />
                Proportion
              </h2>
              <p className="mb-8 max-w-md text-lg leading-relaxed text-gray-400">
                Every smile we design follows the timeless principles of the Golden Ratio — the same
                mathematical harmony found in nature&apos;s most beautiful structures. Precision
                down to 0.01mm.
              </p>

              {/* Stat badges */}
              <div className="mb-8 flex flex-wrap gap-4">
                {[
                  { label: 'Ratio', value: '1.618' },
                  { label: 'Precision', value: '0.01mm' },
                  { label: 'Symmetry', value: '98.7%' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-dark-800/60 rounded-lg border border-white/5 px-5 py-3 backdrop-blur"
                  >
                    <p className="text-gold-400 font-serif text-2xl font-bold">{s.value}</p>
                    <p className="mt-0.5 text-xs tracking-wider text-gray-500 uppercase">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="text-gold-400 hover:text-gold-300 group inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase transition-colors"
              >
                Start Your Design
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Golden Proportion image area */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative overflow-hidden rounded-sm shadow-2xl shadow-black/40">
                <img
                  src="/images/dsd/variant1-4k.webp"
                  alt="Golden proportion dental analysis overlay"
                  className="block h-auto w-full"
                  loading="lazy"
                />
                {/* Overlay frame to indicate proportion analysis */}
                <div className="border-gold-400/20 pointer-events-none absolute inset-0 border" />
              </div>
              {/* Decorative axes */}
              <div className="via-gold-400/40 absolute top-1/4 -right-3 bottom-1/4 w-px bg-gradient-to-b from-transparent to-transparent" />
              <div className="via-gold-400/40 absolute right-1/4 -bottom-3 left-1/4 h-px bg-gradient-to-r from-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — THE DSD JOURNEY
          Matches Variant 2's bottom section exactly
      ═══════════════════════════════════════════ */}
      <section className="bg-[#F5F0EB] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-dark-950 font-serif text-4xl font-bold tracking-tight md:text-5xl">
              THE DSD JOURNEY
            </h2>
            <div className="bg-gold-400 mx-auto mt-4 h-px w-24" />
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {journey.map((card) => (
              <motion.div
                key={card.num}
                className="border-gold-400/30 group hover:border-gold-400 rounded-sm border bg-white/60 p-8 text-center backdrop-blur transition-all duration-500 hover:shadow-lg md:p-10"
                variants={fadeUp}
              >
                {/* Icon */}
                <div className="border-gold-400/30 group-hover:border-gold-400 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border transition-colors">
                  <card.icon className="text-gold-600 h-9 w-9 transition-transform duration-300 group-hover:scale-110" />
                </div>

                <h3 className="text-dark-950 mb-3 text-base font-bold tracking-wider">
                  {card.num}. {card.title}
                </h3>
                <p className="text-dark-950/70 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-14 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="bg-gold-400 hover:bg-gold-500 text-dark-950 shadow-gold-400/20 inline-flex items-center gap-3 rounded-sm px-10 py-4 text-sm font-semibold tracking-[0.15em] uppercase shadow-lg transition-all duration-300 hover:scale-105"
            >
              Explore the Full Process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
