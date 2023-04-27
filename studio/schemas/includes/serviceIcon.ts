import imagePanel from "./imagePanel"

export default {
  name: 'serviceIcon',
    title: 'Service Icon',
    type: 'object',
    fields: [
      {
        title: 'Company Name',
        name: 'company_name',
        type: 'string'
      },
      {
        title: 'Website',
        name: 'website_url',
        description: 'Link to their website',
        type: 'url'
      },
      imagePanel
    ]
}