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
            // ── Global Settings ─────────────────────────────────
            S.listItem()
              .title('Global Settings')
              .icon(() => '⚙️')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

            S.divider(),

            // ── Pages ───────────────────────────────────────────

            // Homepage (folder: hero + homepage settings)
            S.listItem()
              .title('Homepage')
              .icon(() => '🏠')
              .child(
                S.list()
                  .title('Homepage')
                  .items([
                    S.listItem()
                      .title('Hero Section')
                      .icon(() => '🎯')
                      .child(S.document().schemaType('hero').documentId('hero')),
                    S.listItem()
                      .title('Homepage Settings')
                      .icon(() => '🏡')
                      .child(
                        S.document()
                          .schemaType('homepageSettings')
                          .documentId('homepageSettings'),
                      ),
                  ]),
              ),

            // About Page (folder: settings + team members)
            S.listItem()
              .title('About Page')
              .icon(() => '📋')
              .child(
                S.list()
                  .title('About Page')
                  .items([
                    S.listItem()
                      .title('About Page Settings')
                      .icon(() => '📋')
                      .child(
                        S.document().schemaType('aboutSettings').documentId('aboutSettings'),
                      ),
                    S.documentTypeListItem('teamMember')
                      .title('Team Members')
                      .icon(() => '👤'),
                  ]),
              ),

            // Services (folder: page settings + service cards)
            S.listItem()
              .title('Services')
              .icon(() => '🩺')
              .child(
                S.list()
                  .title('Services')
                  .items([
                    S.listItem()
                      .title('Services Page Settings')
                      .icon(() => '🩺')
                      .child(
                        S.document()
                          .schemaType('servicesPageSettings')
                          .documentId('servicesPageSettings'),
                      ),
                    S.documentTypeListItem('service')
                      .title('Service Cards')
                      .icon(() => '💊'),
                  ]),
              ),

            // Technology Page (singleton — opens directly)
            S.listItem()
              .title('Technology Page')
              .icon(() => '🔬')
              .child(
                S.document().schemaType('technologySettings').documentId('technologySettings'),
              ),

            // DSD Page (singleton — opens directly)
            S.listItem()
              .title('DSD Page')
              .icon(() => '💎')
              .child(S.document().schemaType('dsdSettings').documentId('dsdSettings')),

            // Dental Tourism (folder: settings + pricing)
            S.listItem()
              .title('Dental Tourism')
              .icon(() => '✈️')
              .child(
                S.list()
                  .title('Dental Tourism')
                  .items([
                    S.listItem()
                      .title('Tourism Page Settings')
                      .icon(() => '✈️')
                      .child(
                        S.document()
                          .schemaType('tourismSettings')
                          .documentId('tourismSettings'),
                      ),
                    S.documentTypeListItem('tourismPricing')
                      .title('Tourism Pricing')
                      .icon(() => '💰'),
                  ]),
              ),

            // Gallery (folder: before/after + videos)
            S.listItem()
              .title('Gallery')
              .icon(() => '📸')
              .child(
                S.list()
                  .title('Gallery')
                  .items([
                    S.documentTypeListItem('beforeAfterCase')
                      .title('Before/After Cases')
                      .icon(() => '📸'),
                    S.documentTypeListItem('youtubeVideo')
                      .title('YouTube Videos')
                      .icon(() => '🎬'),
                  ]),
              ),

            S.divider(),

            // ── Shared Content ──────────────────────────────────
            S.documentTypeListItem('testimonial').title('Testimonials').icon(() => '⭐'),
            S.documentTypeListItem('faq').title('FAQs').icon(() => '❓'),

            S.divider(),

            // ── SEO Pillar Content ──────────────────────────────
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
