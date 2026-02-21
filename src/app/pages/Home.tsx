import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SEO, SITE_NAME, DEFAULT_OG_IMAGE, buildLocalBusinessJsonLd } from '@/lib/seo';
import {
  Activity,
  Zap,
  Orbit,
  BrainCircuit,
  ShieldCheck,
  Microscope,
  type LucideIcon,
} from 'lucide-react';
import { CyberHero } from '@/app/components/CyberHero';
import { ClinicalSimulation } from '@/app/components/ClinicalSimulation';
import { GlowCard } from '@/app/components/ui/GlowCard';
import { PatientStories } from '@/app/components/PatientStories';
import { useHomepageSettings, useSiteSettings, useSanityImage } from '@/hooks/useCmsData';

/** Map icon name strings from CMS to Lucide components */
const ICON_MAP: Record<string, LucideIcon> = {
  BrainCircuit,
  Orbit,
  Activity,
  Microscope,
  ShieldCheck,
  Zap,
};

export function Home() {
  const { homepage } = useHomepageSettings();
  const { settings } = useSiteSettings();
  const ogImageUrl = useSanityImage(settings.ogImage, 1200) || DEFAULT_OG_IMAGE;
  const jsonLd = buildLocalBusinessJsonLd(settings);

  const features = homepage.features.map((f) => ({
    icon: (f.iconName && ICON_MAP[f.iconName]) || Zap,
    title: f.title,
    description: f.description,
  }));

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
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.home.title} />
        <meta name="twitter:description" content={SEO.home.description} />
        <meta name="twitter:image" content={ogImageUrl} />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
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
            {homepage.ctaTitle}
          </h2>
          <p className="mb-12 text-xl font-light text-gray-300">{homepage.ctaSubtitle}</p>

          <Link
            to="/contact"
            className="border-gold-400 bg-gold-400/10 text-gold-400 hover:bg-gold-400 hover:text-dark-950 focus:ring-gold-400 focus:ring-offset-dark-950 inline-flex h-12 w-full max-w-xs items-center justify-center rounded-lg border px-6 font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            {homepage.ctaButtonText}
          </Link>
        </div>
      </section>
    </div>
  );
}
