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
            // Singleton: Site Settings (always exactly one)
            S.listItem()
              .title('Site Settings')
              .icon(() => '⚙️')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            // All other document types (exclude siteSettings from the generic list)
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'siteSettings'
            ),
          ]),
    }),
    visionTool(), // GROQ playground — useful for debugging queries
  ],

  schema: {
    types: schemaTypes,
  },
});
