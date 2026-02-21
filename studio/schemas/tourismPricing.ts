import { defineType, defineField } from 'sanity';

export const tourismPricing = defineType({
  name: 'tourismPricing',
  title: 'Tourism Pricing',
  type: 'document',
  icon: () => '💰',
  fields: [
    defineField({
      name: 'treatment',
      title: 'Treatment Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'egyptPrice',
      title: '🇪🇬 Egypt Price',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'usaPrice',
      title: '🇺🇸 USA Price',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ukPrice',
      title: '🇬🇧 UK Price',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'turkeyPrice',
      title: '🇹🇷 Turkey Price',
      type: 'string',
    }),
    defineField({
      name: 'hungaryPrice',
      title: '🇭🇺 Hungary Price',
      type: 'string',
    }),
    defineField({
      name: 'uaePrice',
      title: '🇦🇪 UAE Price',
      type: 'string',
    }),
    defineField({
      name: 'saving',
      title: 'Saving %',
      type: 'string',
      description: 'e.g. "Up to 90%"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (e.g. 1 = most important treatment)',
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'treatment', subtitle: 'egyptPrice' },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle ? `Egypt: ${subtitle}` : '' };
    },
  },
});
