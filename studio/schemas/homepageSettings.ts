import { defineType, defineField } from 'sanity';

export const homepageSettings = defineType({
  name: 'homepageSettings',
  title: 'Homepage Settings',
  type: 'document',
  icon: () => '🏡',
  fields: [
    defineField({
      name: 'features',
      title: 'Feature Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
            defineField({
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon name, e.g. BrainCircuit, Orbit, Activity, Microscope, ShieldCheck, Zap',
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      description: 'The big call-to-action heading, e.g. "Ready to Upgrade?"',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA Subtitle',
      type: 'text',
      rows: 2,
      description: 'Supporting text under the CTA title',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'e.g. "START SYSTEM ENGINE"',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Homepage Settings' };
    },
  },
});
