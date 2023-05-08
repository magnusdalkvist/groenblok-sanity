import {BulbOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.events',
  title: 'Events',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('You must add a title'),
    }),
    defineField({
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [
        defineField({
          name: 'event',
          title: 'Event',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'tags',
              type: 'array',
              title: 'Tags',
              of: [{type: 'string'}],
              options: {
                layout: 'tags',
              },
            }),
            defineField({
              name: 'date',
              title: 'Date',
              type: 'date',
              options: {
                dateFormat: 'DD-MM-YYYY',
              },
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title,
        subtitle: 'Events',
        media: BulbOutlineIcon,
      }
    },
  },
})
