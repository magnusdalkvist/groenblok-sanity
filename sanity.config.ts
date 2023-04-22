import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {myStructure} from './deskStructure'

const devOnlyPlugins = [getStartedPlugin()]

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

const singletonTypes = new Set(['settings'])

export default defineConfig({
  name: 'default',
  title: 'Grøn Blok',

  projectId: 'at6buhh6',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
