import { Award, GraduationCap, Heart, Users, Quote } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { SectionHeader } from './ui/SectionHeader';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Empathy Engine',
      description: 'Calibrated care protocols designed for maximum patient comfort.',
    },
    {
      icon: Award,
      title: 'Clinical Excellence',
      description: 'Operating at the bleeding edge of dental science standards.',
    },
    {
      icon: GraduationCap,
      title: 'Continuous Logic',
      description: 'Never-ending integration of new research and methodologies.',
    },
    {
      icon: Users,
      title: 'Holistic Sys',
      description: 'Connecting oral occlusion to total body biomechanics.',
    },
  ];

  return (
    <div className="bg-dark-950 min-h-screen pt-24 pb-12">
      <Helmet>
        <title>About Dr. Sharshar | The Visionary</title>
        <meta name="description" content="Dr. Haitham Sharshar: Pioneer in Digital Dental Occlusion and high-tech dentistry." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
            title="The Visionary" 
            subtitle="DR. HAITHAM SHARSHAR" 
        />

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            {/* Image Hologram */}
            <div className="relative group">
                <div className="absolute inset-0 bg-gold-400/15 blur-2xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                <div className="relative rounded-2xl overflow-hidden border border-gold-400/30 p-1 bg-dark-900/50 backdrop-blur-sm">
                    <img 
                        src="https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwNzEyOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                        alt="Dr. Sharshar" 
                        className="rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-dark-950/80 backdrop-blur border border-white/10 p-3 rounded lg:opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="text-xs font-mono text-gold-400 mb-1">ID: DHS-001</div>
                         <div className="text-sm text-white">Chief Medical Officer</div>
                    </div>
                </div>
            </div>

            {/* Typography */}
            <div>
                <Quote className="w-12 h-12 text-gold-500/20 mb-6" />
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-6 leading-tight">
                    "Precision is not just a metric. <br/>
                    <span className="text-gold-400">It is the only acceptable standard.</span>"
                </h3>
                <div className="space-y-6 text-gray-400 font-light text-lg">
                    <p>
                        Leading the digital revolution in Middle Eastern dentistry, Dr. Sharshar has 
                        discarded traditional guesswork in favor of <span className="text-white border-b border-gold-400/30">absolute data</span>.
                    </p>
                    <p>
                        By integrating aerospace-grade sensor technology with biological science, 
                        he reconstructs not just smiles, but the functional harmony of the entire cranio-facial system.
                    </p>
                </div>
                
                <div className="mt-8 flex gap-4">
                    <div className="px-4 py-2 bg-white/5 rounded border border-white/10 text-sm font-mono text-gold-400">
                        DSD CERTIFIED
                    </div>
                    <div className="px-4 py-2 bg-white/5 rounded border border-white/10 text-sm font-mono text-gold-500">
                        T-SCAN MASTER
                    </div>
                </div>
            </div>
        </div>

        {/* Values Matrix */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {values.map((val, i) => (
                <div key={i} className="bg-dark-900/50 p-6 rounded-xl border border-white/5 hover:border-gold-400/50 transition-colors group">
                    <val.icon className="w-8 h-8 text-gray-600 group-hover:text-gold-400 mb-4 transition-colors" />
                    <h4 className="text-lg font-bold text-white mb-2">{val.title}</h4>
                    <p className="text-sm text-gray-500">{val.description}</p>
                </div>
            ))}
        </div>

        {/* Credentials Data Stream */}
        <div className="border-t border-b border-white/5 py-12 flex flex-wrap justify-between items-center gap-8 text-center md:text-left">
            <div>
                <div className="text-5xl font-mono text-white font-bold tracking-tighter">20+</div>
                <div className="text-gold-400 text-xs tracking-widest uppercase mt-1">Years R&D</div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div>
                <div className="text-5xl font-mono text-white font-bold tracking-tighter">5K+</div>
                <div className="text-gold-400 text-xs tracking-widest uppercase mt-1">Cases Logged</div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div>
                <div className="text-5xl font-mono text-white font-bold tracking-tighter">100%</div>
                <div className="text-gold-400 text-xs tracking-widest uppercase mt-1">Digital Workflow</div>
            </div>
        </div>

      </div>
    </div>
  );
}
