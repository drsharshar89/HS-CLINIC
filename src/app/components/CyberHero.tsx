import { motion } from "framer-motion";
import { Link } from 'react-router';
import { ChevronRight, Activity, Zap } from 'lucide-react';

export function CyberHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950">
      
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(197,165,90,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(197,165,90,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gold-400/15 blur-[120px] rounded-full mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-gold-600/8 blur-[100px] rounded-full mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-400/30 bg-gold-400/10 text-gold-400 mb-8"
        >
            <Activity className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-mono tracking-wider">SYSTEM ONLINE // DR. SHARSHAR PROTOCOL v2.0</span>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-8"
        >
            <span className="text-white block">Architect Your</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-white">
                Perfect Occlusion
            </span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
            Advanced bio-digital algorithms for TMJ analysis and smile reconstruction. 
            Experience the future of dentistry with <span className="text-gold-400 font-semibold">0.01mm precision</span>.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
        >
            <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gold-400 text-dark-950 font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
            >
                <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                    INITIATE CONSULTATION <ChevronRight className="w-5 h-5" />
                </span>
            </Link>

            <Link
                to="/technology"
                className="px-8 py-4 border border-gold-400/30 text-white rounded-lg hover:bg-gold-400/10 transition-all flex items-center gap-2 group"
            >
                <Zap className="w-5 h-5 text-gold-400 group-hover:text-gold-300 transition-colors" />
                EXPLORE TECHNOLOGY
            </Link>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 hidden lg:block"
      >
        <div className="glass-card p-4 border-l-4 border-gold-400">
            <div className="text-gold-400 font-mono text-xs mb-1">DATA STREAM</div>
            <div className="text-white font-bold text-lg">EMG: STABLE</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 hidden lg:block"
      >
        <div className="glass-card p-4 border-r-4 border-gold-500">
            <div className="text-gold-500 font-mono text-xs mb-1">SCAN COMPLETE</div>
            <div className="text-white font-bold text-lg">ACCURACY: 99.9%</div>
        </div>
      </motion.div>

    </section>
  );
}
