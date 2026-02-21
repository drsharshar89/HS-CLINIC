import { defineType, defineField } from 'sanity';

export const dsdSettings = defineType({
  name: 'dsdSettings',
  title: 'DSD Page Settings',
  type: 'document',
  icon: () => '💎',
  fields: [
    // ── Hero Section ──
    defineField({
      name: 'heroImage',
      title: 'Hero Image (Variant 2 Stitch)',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),
    defineField({
      name: 'heroImageAlt',
      title: 'Hero Image Alt Text',
      type: 'string',
      description: 'e.g. "Luxarian Scientific Digital Smile Design — blueprint and reveal"',
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Hero CTA Button Text',
      type: 'string',
      description: 'e.g. "Book Consultation"',
      group: 'hero',
    }),

    // ── Split Reality Section ──
    defineField({
      name: 'splitRealityTitle',
      title: 'Split Reality Title',
      type: 'string',
      description: 'e.g. "The Split Reality"',
      group: 'splitReality',
    }),
    defineField({
      name: 'splitRealitySubtitle',
      title: 'Split Reality Subtitle',
      type: 'text',
      rows: 2,
      group: 'splitReality',
    }),
    defineField({
      name: 'splitRealityImage',
      title: 'Split Reality Image (Variant 1 Stitch)',
      type: 'image',
      options: { hotspot: true },
      group: 'splitReality',
    }),
    defineField({
      name: 'splitRealityImageAlt',
      title: 'Split Reality Image Alt Text',
      type: 'string',
      group: 'splitReality',
    }),

    // ── Project Timeline ──
    defineField({
      name: 'timeline',
      title: 'Project Timeline Steps',
      type: 'array',
      group: 'timeline',
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
              description: 'Lucide icon name, e.g. Video, PenTool, Box, Smile',
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),

    // ── Golden Proportion Section ──
    defineField({
      name: 'goldenTitle',
      title: 'Golden Proportion Title',
      type: 'string',
      description: 'e.g. "Golden Proportion"',
      group: 'goldenProportion',
    }),
    defineField({
      name: 'goldenDescription',
      title: 'Golden Proportion Description',
      type: 'text',
      rows: 3,
      group: 'goldenProportion',
    }),
    defineField({
      name: 'goldenStats',
      title: 'Golden Proportion Stats',
      type: 'array',
      group: 'goldenProportion',
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
      name: 'goldenImage',
      title: 'Golden Proportion Image',
      type: 'image',
      options: { hotspot: true },
      group: 'goldenProportion',
    }),
    defineField({
      name: 'goldenImageAlt',
      title: 'Golden Proportion Image Alt Text',
      type: 'string',
      group: 'goldenProportion',
    }),
    defineField({
      name: 'goldenCtaText',
      title: 'Golden Proportion CTA Text',
      type: 'string',
      description: 'e.g. "Start Your Design"',
      group: 'goldenProportion',
    }),

    // ── DSD Journey Section ──
    defineField({
      name: 'journey',
      title: 'DSD Journey Cards',
      type: 'array',
      group: 'journey',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Step Number', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
            defineField({
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon name, e.g. ScanLine, Sparkles, Crown',
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'number' } },
        },
      ],
    }),
    defineField({
      name: 'journeyCtaText',
      title: 'Journey CTA Button Text',
      type: 'string',
      description: 'e.g. "Explore the Full Process"',
      group: 'journey',
    }),
  ],
  groups: [
    { name: 'hero', title: 'Hero', icon: () => '🖼️' },
    { name: 'splitReality', title: 'Split Reality', icon: () => '🔀' },
    { name: 'timeline', title: 'Timeline', icon: () => '⏱️' },
    { name: 'goldenProportion', title: 'Golden Proportion', icon: () => '✨' },
    { name: 'journey', title: 'Journey', icon: () => '🗺️' },
  ],
  preview: {
    prepare() {
      return { title: 'DSD Page Settings' };
    },
  },
});
