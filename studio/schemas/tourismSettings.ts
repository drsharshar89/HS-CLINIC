import { defineType, defineField } from 'sanity';

export const tourismSettings = defineType({
  name: 'tourismSettings',
  title: 'Tourism Page Settings',
  type: 'document',
  icon: () => '✈️',
  fields: [
    // ── Hero Section ──
    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'string',
      description: 'e.g. "DENTAL TOURISM // CAIRO, EGYPT"',
      group: 'hero',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title (Line 1)',
      type: 'string',
      description: 'e.g. "World-Class Implants."',
      group: 'hero',
    }),
    defineField({
      name: 'heroTitleAccent',
      title: 'Hero Title (Accent Line)',
      type: 'string',
      description: 'e.g. "A Majestic Journey." — displays in gold gradient',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Hero CTA Button Text',
      type: 'string',
      description: 'e.g. "Start Your Journey — Free Quote"',
      group: 'hero',
    }),

    // ── Timeline Steps ──
    defineField({
      name: 'timelineSteps',
      title: 'Timeline Steps (Four Steps to Your Smile)',
      type: 'array',
      group: 'timeline',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'step', title: 'Step Number', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
            defineField({
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon name, e.g. Video, Plane, Shield, BookOpen',
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'step' } },
        },
      ],
    }),

    // ── Fusion Section ──
    defineField({
      name: 'fusionSubheading',
      title: 'Fusion Subheading',
      type: 'string',
      description: 'e.g. "WHERE PRECISION MEETS WONDER"',
      group: 'fusion',
    }),
    defineField({
      name: 'fusionTitle',
      title: 'Fusion Title',
      type: 'string',
      description: 'e.g. "Precision Engineering in a Timeless City"',
      group: 'fusion',
    }),

    // ── VIP Welcome ──
    defineField({
      name: 'vipFeatures',
      title: 'VIP Features',
      type: 'array',
      group: 'vip',
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
              description: 'Lucide icon name, e.g. Plane, Car, Clock, Sparkles, Utensils, Crown',
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),
    defineField({
      name: 'vipStats',
      title: 'VIP Stats',
      type: 'array',
      group: 'vip',
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

    // ── Why HS Clinic ──
    defineField({
      name: 'whyClinicReasons',
      title: 'Why HS Clinic — Reasons',
      type: 'array',
      group: 'whyClinic',
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
              description: 'Lucide icon name, e.g. Cpu, Shield, Award, Globe, HeartPulse, Plane',
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),

    // ── Curated Residences ──
    defineField({
      name: 'residences',
      title: 'Curated Residences (Hotels)',
      type: 'array',
      group: 'residences',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Hotel Name', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'subtitle', title: 'Location', type: 'string' }),
            defineField({ name: 'stars', title: 'Star Rating', type: 'number', validation: (r) => r.min(1).max(5) }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
            defineField({
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: { select: { title: 'name', subtitle: 'subtitle' } },
        },
      ],
    }),

    // ── Bottom CTA ──
    defineField({
      name: 'bottomCtaText',
      title: 'Bottom CTA Button Text',
      type: 'string',
      description: 'e.g. "Book Free Consultation"',
      group: 'cta',
    }),
  ],
  groups: [
    { name: 'hero', title: 'Hero', icon: () => '🏠' },
    { name: 'timeline', title: 'Timeline', icon: () => '⏱️' },
    { name: 'fusion', title: 'Fusion Section', icon: () => '🔀' },
    { name: 'vip', title: 'VIP Experience', icon: () => '👑' },
    { name: 'whyClinic', title: 'Why HS Clinic', icon: () => '🏆' },
    { name: 'residences', title: 'Residences', icon: () => '🏨' },
    { name: 'cta', title: 'CTA', icon: () => '📞' },
  ],
  preview: {
    prepare() {
      return { title: 'Tourism Page Settings' };
    },
  },
});
