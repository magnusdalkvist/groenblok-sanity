import {UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  type: 'document',
  title: 'Settings',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'name',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title,
        media: UserIcon,
      }
    },
  },
})
