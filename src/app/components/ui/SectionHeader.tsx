import { motion } from 'framer-motion';

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-16 text-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-gold-400 mb-3 font-mono text-sm tracking-[0.3em] uppercase">
          {subtitle}
        </h2>
        <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        <div className="from-gold-600 via-gold-400 to-gold-600 mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r" />
      </motion.div>
    </div>
  );
}
