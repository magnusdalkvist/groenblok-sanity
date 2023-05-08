import header from './modules/header'
import footer from './modules/footer'
import hero from './modules/hero'
const modules = [header, footer, hero]

import blogs from './documents/blog'
import authors from './documents/author'
import categories from './documents/category'
import settings from './documents/settings'
import home from './documents/home'
import template from './documents/template'
import page from './documents/page'
const documents = [blogs, authors, categories, settings, home, template, page]

import buttonGroup from './blocks/buttonGroup'
import copy from './blocks/copy'
import title from './blocks/title'
const blocks = [buttonGroup, copy, title]

export const schemaTypes = [...documents, ...modules, ...blocks]
