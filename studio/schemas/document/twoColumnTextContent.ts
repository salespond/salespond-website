import bannerText from "../includes/bannerText"
import bannerLabel from "../includes/bannerLabel"
import bannerTextHighlight from "../includes/bannerTextHighlight"

export default {
    name: 'twoColumnTextContent',
    title: 'Two Column Text Content',
    type: 'document',
    fields: [
        bannerLabel,
        bannerText,
        bannerTextHighlight,
        {
          name: 'twoColumnSection',
          title: 'Two Column Section',
          type: 'object',
          fields: [
              {
                  type: 'object',
                  name: 'twoColumnSection1',
                  title: "Column Section 1",
                  fieldsets: [
                      { 
                          name: 'twoColumnColumn1', 
                          title: 'Column One',
                          options: {
                              collapsible: true,
                              collapsed: true,
                          }
                      }
                  ],
                  fields: [
                      {
                          name: 'twoColumnContentTitle',
                          title: 'Title',
                          type: 'string',
                          validation: (Rule: any) => Rule.required()
                      },
                      {
                          name: 'twoColumnContentText',
                          title: 'Content',
                          type: 'blockContent',
                          validation: (Rule: any) => Rule.required()
                      }
                  ]
              },
              {
                  type: 'object',
                  name: 'twoColumnSection2',
                  title: "Column Section 2",
                  fieldsets: [
                      { 
                          name: 'twoColumnColumn2', 
                          title: 'Column Two',
                          options: {
                              collapsible: true,
                              collapsed: true,
                          }
                       }
                  ],
                  fields: [
                      {
                          name: 'twoColumnContentTitle',
                          title: 'Title',
                          type: 'string',
                          validation: (Rule: any) => Rule.required()
                      },
                      {
                          name: 'twoColumnContentText',
                          title: 'Content',
                          type: 'block_content',
                          validation: (Rule: any) => Rule.required()
                      }
                  ]
              },
          
          ],
      },
    ]
}