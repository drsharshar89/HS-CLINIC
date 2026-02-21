import {
  CheckCircle2,
  Smile,
  Stethoscope,
  Shield,
  Zap,
  BrainCircuit,
  Scan,
  type LucideIcon,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { SEO, SITE_NAME, DEFAULT_OG_IMAGE, SERVICES_JSONLD } from '@/lib/seo';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { GlowCard } from '@/app/components/ui/GlowCard';
import { motion } from 'framer-motion';
import { useServices, useServicesPageSettings } from '@/hooks/useCmsData';

/** Map Lucide icon name strings from CMS to actual components */
const ICON_MAP: Record<string, LucideIcon> = {
  Stethoscope,
  Zap,
  Scan,
  Shield,
  Smile,
  BrainCircuit,
  CheckCircle2,
};

export function Services() {
  const { services: cmsServices } = useServices();
  const { pageSettings } = useServicesPageSettings();

  const services = cmsServices.map((s) => ({
    icon: (s.icon && ICON_MAP[s.icon]) || Stethoscope,
    title: s.title,
    description: s.description,
  }));

  return (
    <div className="bg-dark-950 min-h-screen pt-24 pb-12">
      <Helmet>
        <title>{SEO.services.title}</title>
        <meta name="description" content={SEO.services.description} />
        <link rel="canonical" href={SEO.services.canonical} />
        <meta property="og:title" content={SEO.services.title} />
        <meta property="og:description" content={SEO.services.description} />
        <meta property="og:url" content={SEO.services.canonical} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.services.title} />
        <meta name="twitter:description" content={SEO.services.description} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(SERVICES_JSONLD)}</script>
      </Helmet>

      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="bg-gold-400/5 absolute top-0 right-0 h-[500px] w-[500px] rounded-full blur-[100px]" />
        <div className="bg-gold-600/5 absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Precision Protocols" subtitle="CLINICAL SERVICES" />

        {/* Services Grid */}
        <div className="mb-32 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          <h3 className="mb-12 text-center font-serif text-3xl text-white">Target pathologies</h3>
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
            {pageSettings.conditions.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(212,175,55,0.12)' }}
                className="hover:text-gold-400 hover:border-gold-400/50 cursor-default rounded-full border border-white/10 bg-white/5 px-6 py-3 font-mono text-sm text-gray-300 transition-all"
              >
                {condition}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <h3 className="mb-16 text-center font-serif text-3xl text-white">The Digital Workflow</h3>
          <div className="grid gap-8 md:grid-cols-4">
            {pageSettings.processSteps.map((p, i) => (
              <div key={i} className="group relative">
                {/* Connecting Line */}
                {i < pageSettings.processSteps.length - 1 && (
                  <div className="from-gold-400/50 absolute top-8 left-1/2 z-0 hidden h-[1px] w-full bg-gradient-to-r to-transparent md:block" />
                )}

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="bg-dark-900 border-gold-400/30 text-gold-400 group-hover:bg-gold-400/10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border font-mono text-xl shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all group-hover:scale-110">
                    {p.step}
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-white">{p.title}</h4>
                  <p className="text-sm text-gray-500 md:max-w-[150px]">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="bg-gold-400 text-dark-950 inline-flex items-center gap-2 rounded-lg px-8 py-4 font-bold transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          >
            INITIATE DIAGNOSTIC SCAN <CheckCircle2 className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
