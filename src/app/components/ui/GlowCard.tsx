import { motion } from "framer-motion";

type GlowCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export function GlowCard({ icon: Icon, title, description }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card group relative p-8 cursor-pointer overflow-hidden border border-white/5 bg-gradient-to-br from-white/5 to-white/0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-gold-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 mb-6 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold-400/50 transition-colors">
          <Icon className="w-7 h-7 text-gold-400 group-hover:text-gold-300 transition-colors" />
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-white font-serif tracking-wide group-hover:text-gold-300 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-200 transition-colors">
          {description}
        </p>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-gold-400/50 transition-all" />
      </div>
    </motion.div>
  );
}
