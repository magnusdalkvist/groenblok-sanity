import {
  CogIcon,
  ComposeIcon,
  DocumentsIcon,
  FilterIcon,
  HomeIcon,
  TiersIcon,
  UsersIcon,
} from '@sanity/icons'

export const myStructure = (S) =>
  S.list()
    .title('Menu')
    .items([
      S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(S.document().schemaType('home').title('Home')),
      S.listItem()
        .title('Pages')
        .icon(DocumentsIcon)
        .child(S.documentTypeList('page').title('Pages')),
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
                .child(S.documentTypeList('blog').title('All Blogs')),
              S.listItem()
                .title('Blogs By Category')
                .icon(FilterIcon)
                .child(
                  S.documentTypeList('category')
                    .title('Blogs by Category')
                    .child((categoryId) =>
                      S.documentList()
                        .title('Blogs')
                        .filter('_type == "blog" && category._ref == $categoryId')
                        .params({categoryId})
                    )
                ),
              S.listItem()
                .title('Blogs By Author')
                .icon(FilterIcon)
                .child(
                  S.documentTypeList('author')
                    .title('Blogs by Author')
                    .child((authorId) =>
                      S.documentList()
                        .title('Blogs')
                        .filter('_type == "blog" && author._ref == $authorId')
                        .params({authorId})
                    )
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Authors')
        .icon(UsersIcon)
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem().title('Categories').child(S.documentTypeList('category').title('Categories')),
      S.divider(),
      S.listItem()
        .title('Templates')
        .icon(TiersIcon)
        .child(S.documentTypeList('template').title('Templates')),
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('settings').title('Settings')),
    ])
