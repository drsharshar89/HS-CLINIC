import { motion } from "framer-motion";
import { Activity, Scan, Maximize, Database } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- SUB-COMPONENTS ---

function FaceScanner() {
  return (
    <div className="relative w-full h-64 bg-dark-900/50 rounded-xl overflow-hidden border border-white/10 group">
      <div className="absolute inset-0 grid place-items-center opacity-30">
        {/* Simple Face Silhouette SVG */}
        <svg viewBox="0 0 200 200" className="w-48 h-48 stroke-neon-cyan fill-none stroke-[0.5]">
           <path d="M100,20 C60,20 30,50 30,100 C30,160 60,190 100,190 C140,190 170,160 170,100 C170,50 140,20 100,20 Z" />
           <path d="M60,90 Q80,90 100,90 Q120,90 140,90" className="opacity-50" />
           <path d="M90,120 L110,120" className="opacity-50" />
           <path d="M80,150 Q100,160 120,150" className="opacity-50" />
           
           {/* 3D Net Effect */}
           <motion.circle cx="100" cy="100" r="80" strokeDasharray="4 4" 
             animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
             className="opacity-20"
           />
        </svg>
      </div>

      {/* Scanning Laser */}
      <motion.div
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-1 bg-neon-cyan/50 shadow-[0_0_20px_rgba(6,182,212,0.8)] z-10"
      />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="absolute bottom-4 left-4 bg-dark-950/80 px-3 py-1 rounded text-xs text-neon-cyan font-mono border border-neon-cyan/30 flex items-center gap-2">
        <Scan className="w-3 h-3 animate-pulse" />
        MET-SMILE 3D ACQUISITION
      </div>
    </div>
  );
}

function EmgMonitor() {
  // Generate random bars
  const bars = Array.from({ length: 20 });
  
  return (
    <div className="relative w-full h-64 bg-dark-900/50 rounded-xl overflow-hidden border border-white/10 p-6 flex flex-col justify-end">
      <div className="absolute top-4 left-4 flex items-center gap-2 text-neon-purple font-mono text-xs">
        <Activity className="w-3 h-3" />
        BIO-FEEDBACK // MASSETER LEFT
      </div>
      
      <div className="flex justify-between items-end h-32 gap-1">
        {bars.map((_, i) => (
          <motion.div
            key={i}
            animate={{ height: ["10%", "80%", "30%", "100%", "10%"] }}
            transition={{ 
                duration: 0.5 + Math.random(), 
                repeat: Infinity, 
                repeatType: "mirror",
                delay: i * 0.05 
            }}
            className="w-full bg-gradient-to-t from-neon-purple/20 to-neon-purple rounded-t-sm"
            style={{ opacity: 0.7 }}
          />
        ))}
      </div>
      <div className="mt-2 h-px w-full bg-white/20" />
      <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
        <span>0ms</span>
        <span>50ms</span>
        <span>100ms</span>
      </div>
    </div>
  );
}

function JawTracker() {
  return (
    <div className="relative w-full h-64 bg-dark-900/50 rounded-xl overflow-hidden border border-white/10 grid place-items-center">
        <div className="absolute top-4 left-4 flex items-center gap-2 text-neon-blue font-mono text-xs">
            <Maximize className="w-3 h-3" />
            MANDIBULAR TRACKING (6DOF)
        </div>

        {/* Abstract Jaw SVG */}
        <div className="relative w-40 h-40">
            {/* Upper Jaw (Fixed) */}
            <svg viewBox="0 0 100 60" className="absolute top-10 left-0 w-full text-gray-600 fill-current opacity-50">
                <path d="M10,40 Q50,-10 90,40" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M20,40 L20,50 M80,40 L80,50" className="stroke-white" />
            </svg>

            {/* Lower Jaw (Animated) */}
            <motion.div
                animate={{ 
                    y: [0, 15, 0],
                    rotateX: [0, 10, 0],
                    rotateZ: [0, -2, 2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 left-0 w-full h-20"
            >
                <svg viewBox="0 0 100 60" className="w-full h-full text-neon-blue fill-none stroke-current stroke-2">
                     <path d="M15,10 Q50,60 85,10" />
                     {/* Condyles */}
                     <circle cx="15" cy="10" r="3" className="fill-neon-blue" />
                     <circle cx="85" cy="10" r="3" className="fill-neon-blue" />
                </svg>
                
                {/* Tracking Dots */}
                <motion.div 
                    className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            </motion.div>
        </div>
        
        {/* Data readout */}
        <div className="absolute top-1/2 right-4 text-right font-mono text-[10px] text-neon-blue space-y-1">
            <div>X: +0.02mm</div>
            <div>Y: -1.24mm</div>
            <div>Z: +0.00mm</div>
        </div>
    </div>
  );
}

export function ClinicalSimulation() {
  return (
    <section className="py-24 bg-dark-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="inline-flex items-center gap-2 text-neon-cyan font-mono text-sm mb-4 border border-neon-cyan/20 px-3 py-1 rounded-full"
                >
                    <Database className="w-4 h-4" />
                    LIVE TELEMETRY // DEMO MODE
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Real-Time Clinical Precision</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We don't guess. We measure. Our digital ecosystem captures every micron of movement.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <FaceScanner />
                <JawTracker />
                <EmgMonitor />
            </div>
        </div>
    </section>
  );
}
