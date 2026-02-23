import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

const dataset = (process.env.SANITY_STUDIO_DATASET as string) || 'production';

export default defineConfig({
  name: 'hs-dental-clinic',
  title: `HS Dental Clinic${dataset !== 'production' ? ` [${dataset.toUpperCase()}]` : ''}`,

  projectId: 'nk38o90y',
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // ── Global ──────────────────────────────────────────
            S.listItem()
              .title('Site Settings')
              .icon(() => '⚙️')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

            S.divider(),

            // ── Homepage ────────────────────────────────────────
            S.listItem()
              .title('Hero Section')
              .icon(() => '🏠')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem()
              .title('Homepage Settings')
              .icon(() => '🏡')
              .child(S.document().schemaType('homepageSettings').documentId('homepageSettings')),

            S.divider(),

            // ── Page Settings (singletons) ──────────────────────
            S.listItem()
              .title('About Page')
              .icon(() => '📋')
              .child(S.document().schemaType('aboutSettings').documentId('aboutSettings')),
            S.listItem()
              .title('Services Page')
              .icon(() => '🩺')
              .child(
                S.document()
                  .schemaType('servicesPageSettings')
                  .documentId('servicesPageSettings'),
              ),
            S.listItem()
              .title('Technology Page')
              .icon(() => '🔬')
              .child(
                S.document().schemaType('technologySettings').documentId('technologySettings'),
              ),
            S.listItem()
              .title('DSD Page')
              .icon(() => '💎')
              .child(S.document().schemaType('dsdSettings').documentId('dsdSettings')),
            S.listItem()
              .title('Tourism Page')
              .icon(() => '✈️')
              .child(S.document().schemaType('tourismSettings').documentId('tourismSettings')),

            S.divider(),

            // ── Collections ─────────────────────────────────────
            S.documentTypeListItem('service').title('Services').icon(() => '💊'),
            S.documentTypeListItem('testimonial').title('Testimonials').icon(() => '⭐'),
            S.documentTypeListItem('teamMember').title('Team Members').icon(() => '👤'),
            S.documentTypeListItem('tourismPricing').title('Tourism Pricing').icon(() => '💰'),
            S.documentTypeListItem('faq').title('FAQs').icon(() => '❓'),
            S.documentTypeListItem('beforeAfterCase')
              .title('Before/After Cases')
              .icon(() => '📸'),
            S.documentTypeListItem('youtubeVideo').title('YouTube Videos').icon(() => '🎬'),

            S.divider(),

            // ── SEO Content ─────────────────────────────────────
            S.documentTypeListItem('servicePillar')
              .title('Service Pillar Pages')
              .icon(() => '📄'),
            S.documentTypeListItem('page').title('Pages').icon(() => '📝'),
          ]),
    }),
    visionTool(), // GROQ playground — useful for debugging queries
  ],

  schema: {
    types: schemaTypes,
  },
});
