import { Activity, Cpu, Gauge, Eye, ScanLine, Laptop, Server } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { SEO, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/seo';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { GlowCard } from '@/app/components/ui/GlowCard';

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
        <title>{SEO.technology.title}</title>
        <meta name="description" content={SEO.technology.description} />
        <link rel="canonical" href={SEO.technology.canonical} />
        <meta property="og:title" content={SEO.technology.title} />
        <meta property="og:description" content={SEO.technology.description} />
        <meta property="og:url" content={SEO.technology.canonical} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.technology.title} />
        <meta name="twitter:description" content={SEO.technology.description} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      </Helmet>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="The Digital Arsenal" subtitle="ADVANCED DIAGNOSTICS" />

        {/* Hero Image */}
        <div className="group relative mb-24 overflow-hidden rounded-2xl border border-white/10">
          <div className="from-dark-950 absolute inset-0 z-10 bg-gradient-to-t via-transparent to-transparent" />
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2832&auto=format&fit=crop"
            alt="Advanced Dental Tech"
            className="h-96 w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute bottom-8 left-8 z-20">
            <div className="text-gold-400 mb-2 flex items-center gap-2 font-mono text-sm">
              <Server className="h-4 w-4 animate-pulse" />
              SYSTEM STATUS: OPTIMAL
            </div>
            <h3 className="font-serif text-3xl text-white">Next-Gen Integration</h3>
          </div>
        </div>

        {/* Tech Grid */}
        <div className="mb-32 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="grid gap-8 border-t border-white/5 pt-16 md:grid-cols-3">
          {[
            { label: 'Precision', value: '10μm' },
            { label: 'Data Points', value: '1M+' },
            { label: 'Analysis Time', value: '<5s' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="mb-2 font-mono text-4xl font-bold text-white md:text-5xl">
                {stat.value}
              </div>
              <div className="text-gold-400 text-sm tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
