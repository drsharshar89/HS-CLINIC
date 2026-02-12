import { CheckCircle2, Smile, AlertCircle, Stethoscope, Shield, Zap, BrainCircuit, Activity, Scan } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { SectionHeader } from './ui/SectionHeader';
import { GlowCard } from './ui/GlowCard';
import { motion } from 'framer-motion';

export function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Occlusal Analysis',
      description: 'Digital bite registration and force distribution mapping using T-Scan technology.',
    },
    {
      icon: Zap,
      title: 'EMG Diagnostics',
      description: 'Electromyography to assess muscle function and detect micro-imbalances in jaw muscles.',
    },
    {
      icon: Scan,
      title: '4D Jaw Tracking',
      description: 'Real-time mandibular movement analysis to identify deviations and restrictions.',
    },
    {
      icon: Shield,
      title: 'Bite Optimization',
      description: 'Data-driven equilibrium adjustments to stabilize your occlusion long-term.',
    },
    {
      icon: Smile,
      title: 'Posture Therapy',
      description: 'Correcting the descending chain of dysfunction from jaw to spine.',
    },
    {
      icon: BrainCircuit,
      title: 'Digital Planning',
      description: 'AI-assisted treatment simulation for predictable, non-invasive outcomes.',
    },
  ];

  const conditions = [
    'TMJ Disorders', 'Chronic Headaches', 'Jaw Clicking', 'Bruxism', 
    'Uneven Bite', 'Facial Neuralgia', 'Neck Pain', 'Tinnitus', 
    'Limited Opening', 'Sleep Apnea'
  ];

  const process = [
    { step: '01', title: 'Scan', desc: 'Full digital topography & motion capture' },
    { step: '02', title: 'Analyze', desc: 'AI-driven data interpretation' },
    { step: '03', title: 'Plan', desc: 'Virtual treatment modeling' },
    { step: '04', title: 'Execute', desc: 'Laser-guided precision therapy' },
  ];

  return (
    <div className="bg-dark-950 min-h-screen pt-24 pb-12">
      <Helmet>
        <title>Services | Digital Occlusion & TMJ</title>
        <meta name="description" content="Advanced digital dental services: EMG, Jaw Tracking, and T-Scan Analysis." />
      </Helmet>
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 blur-[100px] rounded-full" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
            title="Precision Protocols" 
            subtitle="CLINICAL SERVICES" 
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
            {services.map((service, index) => (
              <GlowCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
        </div>

        {/* Conditions Hologram */}
        <div className="mb-32">
            <h3 className="text-3xl font-serif text-white text-center mb-12">Target pathologies</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {conditions.map((condition, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(212,175,55,0.12)" }}
                        className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 font-mono text-sm cursor-default hover:text-gold-400 hover:border-gold-400/50 transition-all"
                    >
                        {condition}
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
            <h3 className="text-3xl font-serif text-white text-center mb-16">The Digital Workflow</h3>
            <div className="grid md:grid-cols-4 gap-8">
                {process.map((p, i) => (
                    <div key={i} className="relative group">
                        {/* Connecting Line */}
                        {i < process.length - 1 && (
                            <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-gradient-to-r from-gold-400/50 to-transparent z-0" />
                        )}
                        
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-2xl bg-dark-900 border border-gold-400/30 flex items-center justify-center text-xl font-mono text-gold-400 mb-6 group-hover:bg-gold-400/10 group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                                {p.step}
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">{p.title}</h4>
                            <p className="text-sm text-gray-500 max-w-[150px]">{p.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-400 text-dark-950 font-bold rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all">
                INITIATE DIAGNOSTIC SCAN <CheckCircle2 className="w-5 h-5" />
            </a>
        </div>

      </div>
    </div>
  );
}
