import { defineType, defineField } from 'sanity';

export const technologySettings = defineType({
  name: 'technologySettings',
  title: 'Technology Page Settings',
  type: 'document',
  icon: () => '🔬',
  fields: [
    defineField({
      name: 'technologies',
      title: 'Technologies',
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
              description: 'Lucide icon name, e.g. Activity, Cpu, Gauge, Eye, ScanLine, Laptop',
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroImageAlt',
      title: 'Hero Image Alt Text',
      type: 'string',
      description: 'e.g. "Advanced dental technology equipment at HS Clinic"',
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
  ],
  preview: {
    prepare() {
      return { title: 'Technology Page Settings' };
    },
  },
});
