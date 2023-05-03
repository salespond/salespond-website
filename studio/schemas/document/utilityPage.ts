import bannerText from "../includes/bannerText"
import bannerSubheaderText from "../includes/bannerSubheaderText"

export default {
    name: 'utilityPage',
    title: 'Utility Page',
    type: 'document',
    fields: [
        bannerText,
        bannerSubheaderText,
        {
            name: 'pageContent',
            title: 'Content',
            type: 'block_content',
        },
    ],
}