import { defineType, defineField } from 'sanity';

export const servicePillar = defineType({
  name: 'servicePillar',
  title: 'Service Pillar Page',
  type: 'document',
  icon: () => '🏥',
  fields: [
    // ── Identity ──
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'e.g. "dental-implants", "tmj-tmd-treatment", "clear-aligners", "full-arch-rehabilitation"',
      validation: (r) => r.required(),
      group: 'identity',
    }),
    defineField({
      name: 'serviceTitle',
      title: 'Service Title',
      type: 'string',
      description: 'Display name, e.g. "Dental Implants"',
      validation: (r) => r.required(),
      group: 'identity',
    }),

    // ── SEO ──
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Page title for <title> tag. Max 60 chars.',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 2,
      description: 'Meta description for search results. Max 160 chars.',
      group: 'seo',
    }),

    // ── Hero Section ──
    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'string',
      description: 'Short category label above the title',
      group: 'hero',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero H1 Title',
      type: 'string',
      description: 'Main heading, e.g. "Digitally Guided Dental Implant Surgery in Cairo"',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),

    // ── Content Sections ──
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'heading', title: 'Section Heading (H2)', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'body', title: 'Body Content', type: 'array', of: [{ type: 'block' }] }),
            defineField({
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon name, e.g. Shield, Target, Zap',
            }),
          ],
          preview: { select: { title: 'heading' } },
        },
      ],
    }),

    // ── Technology / Features ──
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Technology Name', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
            defineField({
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon name',
            }),
          ],
          preview: { select: { title: 'name', subtitle: 'description' } },
        },
      ],
    }),

    // ── Benefits ──
    defineField({
      name: 'benefits',
      title: 'Key Benefits',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Benefit Title', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),

    // ── FAQs ──
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group: 'faqs',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 3, validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'question' } },
        },
      ],
    }),

    // ── CTA ──
    defineField({
      name: 'ctaPrimary',
      title: 'Primary CTA Text',
      type: 'string',
      description: 'e.g. "Book Free Consultation"',
      group: 'cta',
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Secondary CTA Text',
      type: 'string',
      description: 'e.g. "Dental Tourism Packages"',
      group: 'cta',
    }),
  ],
  groups: [
    { name: 'identity', title: 'Identity', icon: () => '🏷️' },
    { name: 'seo', title: 'SEO', icon: () => '🔍' },
    { name: 'hero', title: 'Hero', icon: () => '🏠' },
    { name: 'content', title: 'Content', icon: () => '📝' },
    { name: 'faqs', title: 'FAQs', icon: () => '❓' },
    { name: 'cta', title: 'CTAs', icon: () => '📞' },
  ],
  preview: {
    select: { title: 'serviceTitle', slug: 'slug.current' },
    prepare({ title, slug }) {
      return {
        title: title || 'Untitled Service',
        subtitle: slug ? `/services/${slug}` : 'No slug',
      };
    },
  },
});
