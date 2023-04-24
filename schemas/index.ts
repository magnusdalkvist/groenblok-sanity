import blogs from './documents/blog'
import authors from './documents/author'
import categories from './documents/category'
import settings from './documents/settings'
import home from './documents/home'
import template from './documents/template'
import header from './modules/header'
import footer from './modules/footer'
import page from './documents/page'
import hero from './modules/hero'

const modules = [header, footer, hero]

const documents = [blogs, authors, categories, settings, home, template, page]

export const schemaTypes = [...documents, ...modules]
