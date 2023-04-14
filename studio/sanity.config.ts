import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import deskStructure from './deskStructure'
import schemas from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'datalist-website',

  projectId: '0w6ohht0',
  dataset: 'production',

  plugins: [
    deskTool({
        structure: deskStructure
    }),
    visionTool({
        defaultApiVersion: 'v2021-10-21',
        defaultDataset: 'production',
    })
],

  schema: {
    types: schemas,
  },
})
