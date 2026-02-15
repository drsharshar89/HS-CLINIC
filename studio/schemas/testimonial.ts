import { defineType, defineField } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: () => '⭐',
  fields: [
    defineField({
      name: 'name',
      title: 'Patient Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'countryFlag',
      title: 'Country Flag Emoji',
      type: 'string',
      description: 'e.g. 🇬🇧 🇺🇸 🇩🇪',
    }),
    defineField({
      name: 'text',
      title: 'Review Text',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stars',
      title: 'Star Rating',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'image',
      title: 'Patient Photo',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'country', media: 'image' },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle ? `${subtitle}` : '' };
    },
  },
});
