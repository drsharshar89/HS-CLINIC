import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: () => '⚙️',
  // Singleton: only one siteSettings doc should exist
  // Enforce via structure builder in sanity.config.ts if needed
  fields: [
    defineField({
      name: 'clinicName',
      title: 'Clinic Name',
      type: 'string',
      validation: (rule) => rule.required(),
      initialValue: 'HS Clinic — Digital Occlusion',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Full international format, e.g. +201101010599',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'address',
      title: 'Clinic Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'TikTok', value: 'tiktok' },
                  { title: 'X (Twitter)', value: 'twitter' },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: 'platform', subtitle: 'url' },
          },
        },
      ],
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'string',
      description: 'e.g. "Mon–Fri: 09:00–18:00 | Sat: 09:00–14:00"',
    }),
    // ── SEO Group ──
    defineField({
      name: 'seoTitle',
      title: 'Default SEO Title Suffix',
      type: 'string',
      description: 'Appended to page titles, e.g. "| HS Clinic Cairo"',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Default Meta Description',
      type: 'text',
      rows: 3,
      description: 'Fallback description for pages without their own',
      group: 'seo',
    }),
    defineField({
      name: 'ogImage',
      title: 'Default Open Graph Image',
      type: 'image',
      description: 'Used as the default social sharing image (1200×630 recommended)',
      options: { hotspot: true },
      group: 'seo',
    }),
    defineField({
      name: 'ogImageAlt',
      title: 'OG Image Alt Text',
      type: 'string',
      description: 'Alt text for the social sharing image',
      group: 'seo',
    }),
    defineField({
      name: 'geoLat',
      title: 'Clinic Latitude',
      type: 'number',
      description: 'For Google structured data (e.g. 30.0511)',
      group: 'seo',
    }),
    defineField({
      name: 'geoLng',
      title: 'Clinic Longitude',
      type: 'number',
      description: 'For Google structured data (e.g. 31.3656)',
      group: 'seo',
    }),
  ],
  groups: [
    { name: 'seo', title: 'SEO', icon: () => '🔍' },
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
});
