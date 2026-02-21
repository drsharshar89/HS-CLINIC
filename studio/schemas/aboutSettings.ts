import { defineType, defineField } from 'sanity';

export const aboutSettings = defineType({
  name: 'aboutSettings',
  title: 'About Page Settings',
  type: 'document',
  icon: () => '📋',
  fields: [
    defineField({
      name: 'quote',
      title: 'Doctor Quote',
      type: 'text',
      rows: 3,
      description: 'The headline quote displayed on the About page',
    }),
    defineField({
      name: 'values',
      title: 'Core Values',
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
              description: 'Lucide icon name, e.g. Heart, Award, GraduationCap, Users',
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'label', title: 'Label', type: 'string', validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    }),
    defineField({
      name: 'certifications',
      title: 'Certifications / Badges',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. "DSD CERTIFIED", "T-SCAN MASTER"',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'About Page Settings' };
    },
  },
});
