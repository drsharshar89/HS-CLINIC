import { Helmet } from 'react-helmet-async';
import { SEO, SITE_NAME, DEFAULT_OG_IMAGE, LOCAL_BUSINESS_JSONLD } from '@/lib/seo';
import { Activity, Zap, Orbit, BrainCircuit, ShieldCheck, Microscope } from 'lucide-react';
// import { Render } from "@puckeditor/core";
// import { config } from "../cms/config";
import { CyberHero } from '@/app/components/CyberHero';
import { ClinicalSimulation } from '@/app/components/ClinicalSimulation';
import { GlowCard } from '@/app/components/ui/GlowCard';
import { PatientStories } from '@/app/components/PatientStories';

export function Home() {
  // const puckData = localStorage.getItem("puck-data");

  /*
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
  */

  const features = [
    {
      icon: BrainCircuit,
      title: 'AI Diagnostics',
      description: 'Advanced machine learning protocols to map your perfect bite pattern.',
    },
    {
      icon: Orbit,
      title: '3D Jaw Tracking',
      description: 'Real-time kinetic analysis of mandibular movement in 6 degrees of freedom.',
    },
    {
      icon: Activity,
      title: 'EMG Biofeedback',
      description: 'neuromuscular monitoring to ensure muscle harmony and release tension.',
    },
    {
      icon: Microscope,
      title: 'Micro-Analysis',
      description: 'Sub-millimeter precision for occlusal contact points and force distribution.',
    },
    {
      icon: ShieldCheck,
      title: 'Total Protection',
      description: 'Comprehensive TMJ health preservation using digital splint therapy.',
    },
    {
      icon: Zap,
      title: 'Laser Precision',
      description: 'Non-invasive adjustments using state-of-the-art dental laser systems.',
    },
  ];

  return (
    <div className="bg-dark-950 min-h-screen">
      <Helmet>
        <title>{SEO.home.title}</title>
        <meta name="description" content={SEO.home.description} />
        <link rel="canonical" href={SEO.home.canonical} />
        {/* Open Graph */}
        <meta property="og:title" content={SEO.home.title} />
        <meta property="og:description" content={SEO.home.description} />
        <meta property="og:url" content={SEO.home.canonical} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.home.title} />
        <meta name="twitter:description" content={SEO.home.description} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify(LOCAL_BUSINESS_JSONLD)}</script>
      </Helmet>

      <CyberHero />

      <ClinicalSimulation />

      {/* Feature Grid */}
      <section className="relative px-4 py-32 sm:px-6 lg:px-8">
        <div className="from-dark-950 via-dark-900 to-dark-950 absolute inset-0 bg-gradient-to-b" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-gold-400 mb-4 font-mono text-sm tracking-[0.5em]">
              SYSTEM CAPABILITIES
            </h2>
            <h3 className="mb-6 font-serif text-4xl text-white md:text-5xl">
              Intelligence Made Effortless.
            </h3>
            <p className="mx-auto max-w-2xl text-lg font-light text-gray-400">
              Streamline your dental health with AI-driven protocols designed to simplify, automate,
              and enhance your smile architecture.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      <PatientStories />

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t border-white/5 py-32">
        <div className="bg-gold-600/3 absolute inset-0" />
        <div className="bg-gold-400/8 animate-pulse-slow absolute -top-[50%] -left-[20%] h-[1000px] w-[1000px] rounded-full mix-blend-screen blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-8 font-serif text-5xl tracking-tighter text-white md:text-7xl">
            Ready to Upgrade?
          </h2>
          <p className="mb-12 text-xl font-light text-gray-300">
            Your smile deserves the precision of the future. Initialize your transformation today.
          </p>

          <a
            href="/contact"
            className="border-gold-400 bg-gold-400/10 text-gold-400 hover:bg-gold-400 hover:text-dark-950 focus:ring-gold-400 focus:ring-offset-dark-950 inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg border px-6 font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            START SYSTEM ENGINE
          </a>
        </div>
      </section>
    </div>
  );
}
