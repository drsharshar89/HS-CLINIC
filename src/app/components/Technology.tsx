import { Activity, Cpu, Gauge, Eye, Zap, ScanLine, Laptop, Server } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { SectionHeader } from './ui/SectionHeader';
import { GlowCard } from './ui/GlowCard';

export function Technology() {
  const technologies = [
    {
      icon: Activity,
      title: 'Kinematic Jaw Tracking',
      description: 'Real-time 6-DOF mandibular movement recording.',
    },
    {
      icon: Cpu,
      title: 'Computerized EMG',
      description: 'Micron-level detection of muscle electrical potentials.',
    },
    {
      icon: Gauge,
      title: 'T-Scan Force Analysis',
      description: 'Digital occlusal force distribution mapping.',
    },
    {
      icon: Eye,
      title: 'Tekscan Digital Sensors',
      description: 'High-resolution pressure sensing grid.',
    },
    {
      icon: ScanLine,
      title: 'CBCT 3D Evaluation',
      description: 'Volumetric visualization of TMJ structures.',
    },
    {
      icon: Laptop,
      title: 'JVA (Joint Vibration)',
      description: 'Acoustic analysis of cartilage friction.',
    },
  ];

  return (
    <div className="bg-dark-950 min-h-screen pt-24 pb-12">
      <Helmet>
        <title>Technology | Digital Dentistry Suite</title>
        <meta name="description" content="State-of-the-art dental technology: T-Scan, EMG, and 3D Imaging." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
            title="The Digital Arsenal" 
            subtitle="ADVANCED DIAGNOSTICS" 
        />

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-24 border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent z-10" />
            <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2832&auto=format&fit=crop" 
                alt="Advanced Dental Tech" 
                className="w-full h-96 object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute bottom-8 left-8 z-20">
                <div className="flex items-center gap-2 text-gold-400 font-mono text-sm mb-2">
                    <Server className="w-4 h-4 animate-pulse" />
                    SYSTEM STATUS: OPTIMAL
                </div>
                <h3 className="text-3xl font-serif text-white">Next-Gen Integration</h3>
            </div>
        </div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
            {technologies.map((tech, index) => (
              <GlowCard 
                key={index}
                icon={tech.icon}
                title={tech.title}
                description={tech.description}
              />
            ))}
        </div>

        {/* Stats Block */}
        <div className="grid md:grid-cols-3 gap-8 border-t border-white/5 pt-16">
            {[
                { label: 'Precision', value: '10μm' },
                { label: 'Data Points', value: '1M+' },
                { label: 'Analysis Time', value: '<5s' }
            ].map((stat, i) => (
                <div key={i} className="text-center">
                    <div className="text-4xl md:text-5xl font-mono font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gold-400 tracking-widest text-sm uppercase">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
