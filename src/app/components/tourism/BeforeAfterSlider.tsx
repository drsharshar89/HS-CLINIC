import { motion } from "framer-motion";
import { useState, useRef } from "react";

const cases = [
  { before: "/images/dental/dental-implant-dr-haitham-sharshar.jpeg", after: "/images/dental/Full-arch-dental-implant-dr-haitham-sharshar.jpeg", label: "Full Arch Rehabilitation" },
  { before: "/images/dental/All-on-4-Dental-Implants-dr haitham sharshar.jpg", after: "/images/dental/dental-implant-dr-haitham-sharshar.jpeg", label: "All-on-4 Dental Implants" },
];

function Slider({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  };

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-white/10 cursor-col-resize select-none"
        onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* After (full background) */}
        <img src={after} alt="After treatment" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        {/* Before (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt="Before treatment" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: containerRef.current?.offsetWidth || "100%" }} loading="lazy" />
        </div>
        {/* Divider line */}
        <div className="absolute top-0 bottom-0 z-10" style={{ left: `${pos}%` }}>
          <div className="absolute -translate-x-1/2 w-0.5 h-full bg-gold-400 shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-950 border-2 border-gold-400 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 2L1 8L5 14" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/><path d="M11 2L15 8L11 14" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
        </div>
        {/* Labels */}
        <div className="absolute top-3 left-3 px-2 py-1 bg-dark-950/80 text-white text-xs font-mono rounded z-20">BEFORE</div>
        <div className="absolute top-3 right-3 px-2 py-1 bg-gold-400/20 text-gold-400 text-xs font-mono rounded z-20">AFTER</div>
      </div>
      <p className="text-center text-sm text-gray-400 font-mono">{label}</p>
    </div>
  );
}

export function BeforeAfterSlider() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h2 className="text-gold-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">REAL RESULTS</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">Before & After</h3>
          <p className="text-gray-400 max-w-xl mx-auto">Drag the slider to compare. Every case performed by Dr. Haitham Sharshar at HS Clinic, Cairo.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }}>
              <Slider {...c} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
