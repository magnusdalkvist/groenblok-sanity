import {DocumentIcon} from '@sanity/icons'

export default {
  name: 'blogs',
  type: 'document',
  title: 'Blogs',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',

      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    //add blog content
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              options: {
                isHighlighted: true,
              },
            },
          ],
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title,
        subtitle: '.../blogs/' + subtitle,
        media: DocumentIcon,
      }
    },
  },
}
