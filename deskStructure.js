import {CogIcon, ComposeIcon, FilterIcon, UserIcon, UsersIcon} from '@sanity/icons'

export const myStructure = (S) =>
  S.list()
    .title('Menu')
    .items([
      S.listItem()
        .title('Blogs')
        .icon(ComposeIcon)
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem()
                .title('All Blogs')
                .icon(FilterIcon)
                .child(S.documentTypeList('blogs').title('All Blogs')),
              S.listItem()
                .title('Blogs By Category')
                .icon(FilterIcon)
                .child(
                  S.documentTypeList('categories')
                    .title('Blogs by Category')
                    .child((categoryId) =>
                      S.documentList()
                        .title('Blogs')
                        .filter('_type == "blogs" && category._ref == $categoryId')
                        .params({categoryId})
                    )
                ),
              S.listItem()
                .title('Blogs By Author')
                .icon(FilterIcon)
                .child(
                  S.documentTypeList('authors')
                    .title('Blogs by Author')
                    .child((authorId) =>
                      S.documentList()
                        .title('Blogs')
                        .filter('_type == "blogs" && author._ref == $authorId')
                        .params({authorId})
                    )
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Authors')
        .icon(UsersIcon)
        .child(S.documentTypeList('authors').title('Authors')),
      S.listItem().title('Categories').child(S.documentTypeList('categories').title('Categories')),
      S.divider(),
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('settings').title('Settings')),
    ])
