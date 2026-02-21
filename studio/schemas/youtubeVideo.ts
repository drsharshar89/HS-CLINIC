import { defineType, defineField } from 'sanity';

export const youtubeVideo = defineType({
  name: 'youtubeVideo',
  title: 'YouTube Video',
  type: 'document',
  icon: () => '🎬',
  fields: [
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'videoId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'The part after "v=" in the YouTube URL — e.g. "dQw4w9WgXcQ".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'category',
      title: 'Page Category',
      type: 'string',
      description: 'Which page should this video appear on?',
      options: {
        list: [
          { title: 'Home', value: 'home' },
          { title: 'About', value: 'about' },
          { title: 'DSD', value: 'dsd' },
          { title: 'Tourism', value: 'tourism' },
          { title: 'Technology', value: 'technology' },
          { title: 'Gallery', value: 'gallery' },
        ],
      },
      validation: (rule) => rule.required(),
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
    select: { title: 'title', subtitle: 'category', videoId: 'videoId' },
    prepare({ title, subtitle, videoId }) {
      return {
        title: title ?? 'Untitled Video',
        subtitle: `${subtitle ?? '—'} • ${videoId ?? ''}`,
      };
    },
  },
});
