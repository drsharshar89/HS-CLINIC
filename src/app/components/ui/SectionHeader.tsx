import { motion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-gold-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">
                {subtitle}
            </h2>
            <h1 className="text-4xl md:text-6xl font-serif text-white font-bold tracking-tight">
                {title}
            </h1>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 mx-auto rounded-full" />
        </motion.div>
    </div>
  );
}
