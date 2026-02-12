import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Star, Webcam, Plane, Smile, BookOpen, MapPin, Phone, Shield, Award, Globe } from "lucide-react";
import { Link } from "react-router";
import { WhyHSClinic } from "./tourism/WhyHSClinic";
import { ServicesGrid } from "./tourism/ServicesGrid";
import { FAQAccordion } from "./tourism/FAQAccordion";
import { ConsultationForm } from "./tourism/ConsultationForm";
import { BeforeAfterSlider } from "./tourism/BeforeAfterSlider";
import { ImplantScene } from "./tourism/ImplantScene";

/* Old ImplantPyramidAnimation removed — replaced by 3D ImplantScene */

/* ================================================================
   2. REVIEWS DATA
   ================================================================ */

const reviews = [
  { name: "James W.", country: "🇬🇧", text: '"Saved 70% compared to the US. The clinic felt like a 5-star hotel."', stars: 5 },
  { name: "Maria S.", country: "🇩🇪", text: '"Dr. Sharshar is a magician. My implants are perfect and the trip was unforgettable."', stars: 5 },
  { name: "Ahmed K.", country: "🇦🇪", text: '"World-class technology at a fraction of Gulf prices. Highly recommended."', stars: 5 },
  { name: "Sarah L.", country: "🇺🇸", text: '"I combined my dental work with visiting the Pyramids. Best decision ever!"', stars: 5 },
  { name: "Oliver P.", country: "🇦🇺", text: '"The virtual consultation made everything so easy. Flew in, got treated, explored Cairo."', stars: 5 },
  { name: "Fatima R.", country: "🇸🇦", text: '"Premium German implants for a third of the price. The team is incredibly professional."', stars: 5 },
];

/* ================================================================
   3. TIMELINE DATA
   ================================================================ */

const timelineSteps = [
  {
    icon: Webcam,
    step: "01",
    title: "Virtual Consultation",
    desc: "Share your smile photos. Get a free personalized treatment plan and cost estimate from Dr. Sharshar — all from your home.",
  },
  {
    icon: Plane,
    step: "02",
    title: "VIP Arrival & Tourism",
    desc: "We handle airport transfers, recommend 5-star hotels, and plan your Cairo experience — Pyramids, Nile cruises, Khan el-Khalili.",
  },
  {
    icon: Shield,
    step: "03",
    title: "The Procedure at HS Clinic",
    desc: "Premium German implants placed with digital precision. Same-day results. Pain-free protocols. International safety standards.",
  },
  {
    icon: BookOpen,
    step: "04",
    title: "Fly Home with Confidence",
    desc: "Complete aftercare guide, lifetime warranty on implants, and a video follow-up schedule. Your new smile travels with you.",
  },
];

/* ================================================================
   4. PRICE COMPARISON DATA
   ================================================================ */

const priceComparison = [
  { treatment: "Single Implant", egypt: "$350–600", usa: "$3,000–5,000", uk: "$2,500–4,000", turkey: "$800–1,500", hungary: "$900–1,800", uae: "$2,000–3,500", saving: "Up to 90%" },
  { treatment: "All-on-4", egypt: "$4,000–7,000", usa: "$25,000–35,000", uk: "$18,000–25,000", turkey: "$8,000–14,000", hungary: "$10,000–16,000", uae: "$15,000–22,000", saving: "Up to 85%" },
  { treatment: "Hollywood Smile (20)", egypt: "$3,000–5,000", usa: "$20,000–40,000", uk: "$15,000–30,000", turkey: "$5,000–10,000", hungary: "$6,000–12,000", uae: "$12,000–25,000", saving: "Up to 88%" },
  { treatment: "Bone Graft", egypt: "$200–400", usa: "$2,000–3,000", uk: "$1,500–2,500", turkey: "$400–800", hungary: "$500–1,000", uae: "$1,200–2,000", saving: "Up to 87%" },
];

/* ================================================================
   MAIN COMPONENT
   ================================================================ */

export function DentalTourism() {
  const fusionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: fusionRef,
    offset: ["start end", "end start"],
  });
  const fusionOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const fusionScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  return (
    <div className="bg-dark-950 min-h-screen overflow-hidden">
      <Helmet>
        <title>Dental Tourism in Cairo | Save Up to 90% | HS Clinic Egypt</title>
        <meta name="description" content="Premium dental implants in Cairo, Egypt. Save 70-90% vs USA/UK prices. German technology, 5-star experience, and explore the Pyramids. Free virtual consultation." />
      </Helmet>

      {/* ==========================================
          SECTION 1: CINEMATIC HERO
          ========================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background pattern — circuit + geometry grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(197,165,90,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(197,165,90,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gold-400/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gold-600/5 blur-[120px] rounded-full mix-blend-screen" />

        {/* Floating gold dust particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-400/30 bg-gold-400/10 text-gold-400 mb-6"
            >
              <Globe className="w-4 h-4 animate-pulse" />
              <span className="text-xs font-mono tracking-wider">DENTAL TOURISM // CAIRO, EGYPT</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-white">World-Class Implants.</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-white">
                A Majestic Journey.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl font-light leading-relaxed"
            >
              Your new smile awaits in the cradle of civilization.{" "}
              <span className="text-white">Premium German technology</span>,{" "}
              <span className="text-gold-400">unbeatable value</span>,{" "}
              unforgettable experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gold-400 text-dark-950 font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
              >
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  Start Your Journey — Free Quote <ChevronRight className="w-5 h-5" />
                </span>
              </Link>
              <a
                href="https://wa.me/201101010599"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gold-400/30 text-gold-400 rounded-lg hover:bg-gold-400/10 transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex gap-4 flex-wrap"
            >
              {["German Implants", "Lifetime Warranty", "5000+ Cases"].map((badge) => (
                <div key={badge} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-gray-400">
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Implant / Pyramid Animation */}
          <Suspense fallback={<div className="w-80 h-80 md:w-[420px] md:h-[420px] flex items-center justify-center"><div className="w-12 h-12 border-2 border-gold-400/30 border-t-gold-400 rounded-full animate-spin" /></div>}>
            <ImplantScene />
          </Suspense>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold-400/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-gold-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ==========================================
          SECTION 2: FUSION — TECH × HISTORY
          ========================================== */}
      <section ref={fusionRef} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div style={{ opacity: fusionOpacity, scale: fusionScale }} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-gold-400 font-mono text-sm tracking-[0.3em] uppercase mb-3"
            >
              WHERE PRECISION MEETS WONDER
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-white mb-6"
            >
              Precision Engineering in a Timeless City
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-3xl mx-auto text-lg font-light"
            >
              While your implants integrate with digital perfection, you'll explore 5,000 years of human achievement.
              HS Clinic's cutting-edge procedures mean less chair time and more adventure time.
            </motion.p>
          </div>

          {/* Double-exposure grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dental Tech Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden border border-gold-400/20 h-80 bg-dark-900/50 group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(197,165,90,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(197,165,90,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              {/* Jawline SVG */}
              <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-70 transition-opacity duration-700">
                <svg viewBox="0 0 300 200" className="w-64 h-44 stroke-gold-400 fill-none stroke-[1.5]">
                  <path d="M50,80 Q80,30 150,25 Q220,30 250,80" />
                  <path d="M55,80 Q80,130 150,140 Q220,130 245,80" />
                  {/* Teeth outlines */}
                  {[80, 105, 130, 150, 170, 195, 220].map((x, i) => (
                    <rect key={i} x={x - 8} y="60" width="16" height="22" rx="3" opacity="0.5" />
                  ))}
                  {/* Implant markers */}
                  <circle cx="105" cy="100" r="4" className="fill-gold-400" opacity="0.8" />
                  <circle cx="195" cy="100" r="4" className="fill-gold-400" opacity="0.8" />
                  <line x1="105" y1="75" x2="105" y2="100" strokeDasharray="3 3" />
                  <line x1="195" y1="75" x2="195" y2="100" strokeDasharray="3 3" />
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 z-10">
                <div className="text-gold-400 font-mono text-xs mb-1">DIGITAL PRECISION</div>
                <div className="text-white text-lg font-serif">3D-Guided Implant Placement</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
            </motion.div>

            {/* Cairo Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden border border-gold-400/20 h-80 group"
            >
              <img
                src="/images/tourism/The-pyramids-the-Sphinx-and-the-buildings-of-Cairo-1200x720.jpg"
                alt="Pyramids of Giza at sunset"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <div className="text-gold-400 font-mono text-xs mb-1">YOUR VACATION AWAITS</div>
                <div className="text-white text-lg font-serif">5,000 Years of Wonder</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ==========================================
          SECTION 2.5: PRICE COMPARISON TABLE
          ========================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-gold-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">TRANSPARENT PRICING</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">Save Up to 90%</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">Same premium German/Swiss implant brands used in Hollywood. A fraction of the price.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="overflow-x-auto"
          >
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-3 text-xs font-mono text-gray-500 uppercase tracking-wider">Treatment</th>
                  <th className="py-4 px-3 text-xs font-mono text-gold-400 uppercase tracking-wider">🇪🇬 Egypt</th>
                  <th className="py-4 px-3 text-xs font-mono text-gray-500 uppercase tracking-wider">🇺🇸 USA</th>
                  <th className="py-4 px-3 text-xs font-mono text-gray-500 uppercase tracking-wider">🇬🇧 UK</th>
                  <th className="py-4 px-3 text-xs font-mono text-gray-500 uppercase tracking-wider">🇹🇷 Turkey</th>
                  <th className="py-4 px-3 text-xs font-mono text-gray-500 uppercase tracking-wider">🇭🇺 Hungary</th>
                  <th className="py-4 px-3 text-xs font-mono text-gray-500 uppercase tracking-wider">🇦🇪 UAE</th>
                  <th className="py-4 px-3 text-xs font-mono text-gold-400 uppercase tracking-wider">Save</th>
                </tr>
              </thead>
              <tbody>
                {priceComparison.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="border-b border-white/5 hover:bg-gold-400/5 transition-colors"
                  >
                    <td className="py-4 px-3 text-white font-medium text-sm">{row.treatment}</td>
                    <td className="py-4 px-3 text-gold-400 font-bold text-sm">{row.egypt}</td>
                    <td className="py-4 px-3 text-gray-500 line-through text-sm">{row.usa}</td>
                    <td className="py-4 px-3 text-gray-500 line-through text-sm">{row.uk}</td>
                    <td className="py-4 px-3 text-gray-500 line-through text-sm">{row.turkey}</td>
                    <td className="py-4 px-3 text-gray-500 line-through text-sm">{row.hungary}</td>
                    <td className="py-4 px-3 text-gray-500 line-through text-sm">{row.uae}</td>
                    <td className="py-4 px-3">
                      <span className="px-2 py-1 bg-gold-400/10 text-gold-400 rounded-full text-xs font-bold">
                        {row.saving}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: REVIEWS CAROUSEL
          ========================================== */}
      <section className="py-24 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-gold-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">GLOBAL PATIENT REVIEWS</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Amazing Reviews</h3>
          </motion.div>
        </div>

        {/* Auto-scrolling carousel */}
        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-6"
          >
            {/* Duplicate for infinite scroll illusion */}
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[380px] bg-dark-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:border-gold-400/30 transition-colors"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light italic">
                  {review.text}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium text-sm">{review.name}</div>
                    <div className="text-gray-500 text-xs">Verified Patient</div>
                  </div>
                  <span className="text-2xl">{review.country}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: CONCIERGE TIMELINE
          ========================================== */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 blur-[150px] rounded-full" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-gold-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">YOUR CONCIERGE EXPERIENCE</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Four Steps to Your New Smile</h3>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Golden beam connector */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400/50 via-gold-400/20 to-transparent" />

            {timelineSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start gap-6 mb-16 md:mb-20 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Line dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gold-400 rounded-full border-4 border-dark-950 shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10" />

                  {/* Content card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <div className="bg-dark-900/50 backdrop-blur border border-white/5 rounded-2xl p-6 hover:border-gold-400/30 transition-colors group">
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? "md:justify-end" : ""}`}>
                        <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center border border-gold-400/30 group-hover:bg-gold-400/20 transition-colors">
                          <step.icon className="w-5 h-5 text-gold-400" />
                        </div>
                        <span className="text-gold-400 font-mono text-sm">{step.step}</span>
                      </div>
                      <h4 className="text-xl font-serif font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW SECTIONS */}
      <WhyHSClinic />
      <ServicesGrid />
      <BeforeAfterSlider />
      <FAQAccordion />
      <ConsultationForm />

      {/* ==========================================
          SECTION 5: FOOTER CTA
          ========================================== */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
        {/* Cairo skyline silhouette */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 200" className="w-full" preserveAspectRatio="none">
            {/* Mosque domes and minarets */}
            <path
              d="M0,200 L0,160 L50,160 L60,120 L70,160 L120,160 L130,140 Q150,110 170,140 L180,160 L250,160 L260,130 L265,100 L270,130 L280,160 L400,160 L410,120 Q430,80 450,120 L460,160 L550,160 L560,140 L565,110 L570,140 L580,160 L700,160 L720,130 Q740,100 760,130 L780,160 L850,160 L860,140 L865,100 L870,140 L880,160 L950,160 L960,120 L970,160 L1050,160 L1060,130 Q1080,100 1100,130 L1120,160 L1200,160 L1200,200 Z"
              fill="rgba(20,20,20,0.8)"
            />
          </svg>
        </div>

        {/* Gold light streaks */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Award className="w-12 h-12 text-gold-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Don't just fix your teeth.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300">
                Experience Egypt.
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
              World-class dental care. Ancient wonders. One extraordinary journey.
              Book your free consultation today.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group relative px-10 py-5 bg-gold-400 text-dark-950 font-bold text-lg rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]"
              >
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  Book Free Consultation <ChevronRight className="w-5 h-5" />
                </span>
              </Link>
              <a
                href="https://wa.me/201101010599"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border border-gold-400/30 text-gold-400 rounded-lg hover:bg-gold-400/10 transition-all flex items-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
