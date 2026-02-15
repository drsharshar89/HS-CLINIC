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
    structureTool(),
    visionTool(), // GROQ playground — useful for debugging queries
  ],

  schema: {
    types: schemaTypes,
  },
});
