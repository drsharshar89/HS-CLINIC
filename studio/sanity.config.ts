import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'hs-dental-clinic',
  title: 'HS Dental Clinic',

  projectId: 'nk38o90y',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singletons (always exactly one document each)
            S.listItem()
              .title('Site Settings')
              .icon(() => '⚙️')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Hero Section')
              .icon(() => '🏠')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.divider(),
            // Page Settings singletons
            S.listItem()
              .title('Homepage Settings')
              .icon(() => '🏡')
              .child(S.document().schemaType('homepageSettings').documentId('homepageSettings')),
            S.listItem()
              .title('About Page Settings')
              .icon(() => '📋')
              .child(S.document().schemaType('aboutSettings').documentId('aboutSettings')),
            S.listItem()
              .title('Services Page Settings')
              .icon(() => '🩺')
              .child(S.document().schemaType('servicesPageSettings').documentId('servicesPageSettings')),
            S.listItem()
              .title('Technology Page Settings')
              .icon(() => '🔬')
              .child(S.document().schemaType('technologySettings').documentId('technologySettings')),
            S.listItem()
              .title('DSD Page Settings')
              .icon(() => '💎')
              .child(S.document().schemaType('dsdSettings').documentId('dsdSettings')),
            S.listItem()
              .title('Tourism Page Settings')
              .icon(() => '✈️')
              .child(S.document().schemaType('tourismSettings').documentId('tourismSettings')),
            S.divider(),
            // All other document types (exclude singletons from the generic list)
            ...S.documentTypeListItems().filter(
              (item) => !['siteSettings', 'hero', 'homepageSettings', 'aboutSettings', 'servicesPageSettings', 'technologySettings', 'dsdSettings', 'tourismSettings'].includes(item.getId() ?? '')
            ),
          ]),
    }),
    visionTool(), // GROQ playground — useful for debugging queries
  ],

  schema: {
    types: schemaTypes,
  },
});
