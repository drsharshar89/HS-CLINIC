import { defineType, defineField } from 'sanity';

export const servicesPageSettings = defineType({
  name: 'servicesPageSettings',
  title: 'Services Page Settings',
  type: 'document',
  icon: () => '🩺',
  fields: [
    defineField({
      name: 'conditions',
      title: 'Target Conditions',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. "TMJ Disorders", "Chronic Headaches", "Jaw Clicking"',
    }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'step', title: 'Step Number', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'step' } },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Services Page Settings' };
    },
  },
});
