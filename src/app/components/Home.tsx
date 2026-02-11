import { Helmet } from 'react-helmet-async';
import { Activity, Cpu, Gauge, Zap, Orbit, BrainCircuit, ShieldCheck, Microscope } from 'lucide-react';
import { Render } from "@puckeditor/core";
import { config } from "../cms/config";
import { CyberHero } from './CyberHero';
import { ClinicalSimulation } from './ClinicalSimulation';
import { GlowCard } from './ui/GlowCard';

export function Home() {
  const puckData = localStorage.getItem("puck-data");
  
  if (puckData) {
    try {
      const data = JSON.parse(puckData);
      if (data.content && data.content.length > 0) {
        return <Render config={config} data={data} />;
      }
    } catch (e) {
        // Fallback to default
    }
  }

  const features = [
    { icon: BrainCircuit, title: 'AI Diagnostics', description: 'Advanced machine learning protocols to map your perfect bite pattern.' },
    { icon: Orbit, title: '3D Jaw Tracking', description: 'Real-time kinetic analysis of mandibular movement in 6 degrees of freedom.' },
    { icon: Activity, title: 'EMG Biofeedback', description: 'neuromuscular monitoring to ensure muscle harmony and release tension.' },
    { icon: Microscope, title: 'Micro-Analysis', description: 'Sub-millimeter precision for occlusal contact points and force distribution.' },
    { icon: ShieldCheck, title: 'Total Protection', description: 'Comprehensive TMJ health preservation using digital splint therapy.' },
    { icon: Zap, title: 'Laser Precision', description: 'Non-invasive adjustments using state-of-the-art dental laser systems.' },
  ];

  return (
    <div className="bg-dark-950 min-h-screen">
      <Helmet>
        <title>Dr. Sharshar | Digital Occlusion Architect</title>
        <meta name="description" content="The future of dental occlusion. AI-driven diagnostics and laser-precision treatments in the Middle East." />
      </Helmet>
      
      <CyberHero />
      
      <ClinicalSimulation />

      {/* Feature Grid */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-neon-cyan font-mono text-sm tracking-[0.5em] mb-4">SYSTEM CAPABILITIES</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Intelligence Made Effortless.</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                Streamline your dental health with AI-driven protocols designed to simplify, automate, and enhance your smile architecture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <GlowCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-neon-purple/5" />
        <div className="absolute -top-[50%] -left-[20%] w-[1000px] h-[1000px] bg-neon-cyan/10 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tighter">
                Ready to Upgrade?
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-light">
                Your smile deserves the precision of the future. Initialize your transformation today.
            </p>
            
            <a href="/contact" className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg border border-neon-cyan bg-neon-cyan/10 px-6 font-medium text-neon-cyan transition-colors hover:bg-neon-cyan hover:text-dark-950 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-dark-950">
                START SYSTEM ENGINE
            </a>
        </div>
      </section>
    </div>
  );
}
