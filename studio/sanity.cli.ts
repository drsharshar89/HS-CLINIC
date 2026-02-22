import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'nk38o90y',
    dataset: (process.env.SANITY_STUDIO_DATASET as string) || 'production',
  },
  studioHost: 'hs-dental-clinic',
});
