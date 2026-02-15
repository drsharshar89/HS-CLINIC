import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const cases = [
  {
    before: '/images/dental/dental-implant-dr-haitham-sharshar.webp',
    after: '/images/dental/Full-arch-dental-implant-dr-haitham-sharshar.webp',
    label: 'Full Arch Rehabilitation',
  },
  {
    before: '/images/dental/All-on-4-Dental-Implants-dr haitham sharshar.webp',
    after: '/images/dental/dental-implant-dr-haitham-sharshar.webp',
    label: 'All-on-4 Dental Implants',
  },
];

function Slider({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | string>('100%');

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

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
        className="relative h-64 w-full cursor-col-resize overflow-hidden rounded-xl border border-white/10 select-none sm:h-80"
        onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* After (full background) */}
        <img
          src={after}
          alt="After treatment"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        {/* Before (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={before}
            alt="Before treatment"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ minWidth: width }}
            loading="lazy"
          />
        </div>
        {/* Divider line */}
        <div className="absolute top-0 bottom-0 z-10" style={{ left: `${pos}%` }}>
          <div className="bg-gold-400 absolute h-full w-0.5 -translate-x-1/2 shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
          <div className="bg-dark-950 border-gold-400 absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 2L1 8L5 14" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
              <path d="M11 2L15 8L11 14" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        {/* Labels */}
        <div className="bg-dark-950/80 absolute top-3 left-3 z-20 rounded px-2 py-1 font-mono text-xs text-white">
          BEFORE
        </div>
        <div className="bg-gold-400/20 text-gold-400 absolute top-3 right-3 z-20 rounded px-2 py-1 font-mono text-xs">
          AFTER
        </div>
      </div>
      <p className="text-center font-mono text-sm text-gray-400">{label}</p>
    </div>
  );
}

export function BeforeAfterSlider() {
  return (
    <section className="border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-14 text-center"
        >
          <h2 className="text-gold-400 mb-3 font-mono text-sm tracking-[0.3em] uppercase">
            REAL RESULTS
          </h2>
          <h3 className="mb-4 font-serif text-4xl text-white md:text-5xl">Before & After</h3>
          <p className="mx-auto max-w-xl text-gray-400">
            Drag the slider to compare. Every case performed by Dr. Haitham Sharshar at HS Clinic,
            Cairo.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Slider {...c} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
