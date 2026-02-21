import { defineType, defineField } from 'sanity';

export const beforeAfterCase = defineType({
  name: 'beforeAfterCase',
  title: 'Before / After Case',
  type: 'document',
  icon: () => '🦷',
  fields: [
    defineField({
      name: 'label',
      title: 'Case Label',
      type: 'string',
      description: 'Short description – e.g. "Full Arch Rehabilitation".',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'beforeImage',
      title: 'Before Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Patient photo BEFORE the procedure.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Patient photo AFTER the procedure.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'treatment',
      title: 'Treatment Type',
      type: 'string',
      description: 'Optional tag – e.g. "Dental Implants", "Veneers".',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first.',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Sort Order',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'label', subtitle: 'treatment' },
  },
});
