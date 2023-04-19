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
          styles: [
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
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
