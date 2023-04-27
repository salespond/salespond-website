import bannerText from "../includes/bannerText"
import bannerLabel from "../includes/bannerLabel"
import bannerTextHighlight from "../includes/bannerTextHighlight"

export default {
    name: 'clientSection',
    title: 'Client List',
    type: 'document',
    fields: [
        bannerLabel,
        bannerText,
        bannerTextHighlight,
        {
          name: 'serviceIcon', 
          type: 'array',
          title: 'Representing',
          of: [
            {
              type: 'serviceIcon'
            }
          ]
      },
    ]
}