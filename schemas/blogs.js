import {DocumentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogs',
  type: 'document',
  title: 'Blogs',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    //author
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'authors'}],
      validation: (Rule) => Rule.required(),
    }),
    //category
    defineField({
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'categories'}],
      validation: (Rule) => Rule.required(),
    }),
    //tags
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    //add blog banner image
    defineField({
      name: 'bannerImage',
      type: 'image',
      title: 'Banner Image',
    }),
    //add blog content
    defineField({
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
      validation: (Rule) => Rule.required(),
    }),
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
})
