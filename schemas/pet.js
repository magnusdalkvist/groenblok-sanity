export default {
  name: 'pet',
  type: 'document',
  title: 'Pet',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'age',
      type: 'number',
      title: 'Age',
    },
    {
      name: 'species',
      type: 'string',
      title: 'Species',
      options: {
        list: [
          {title: 'Dog', value: 'dog'},
          {title: 'Cat', value: 'cat'},
          {title: 'Bird', value: 'bird'},
        ],
      },
    },
  ],
}
