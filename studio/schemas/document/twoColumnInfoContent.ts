import bannerText from "../includes/bannerText"
import bannerSubheaderText from "../includes/bannerSubheaderText"
import imagePanel from "../includes/imagePanel"
import isEnabledCTA from "../includes/isEnabledCTA"
import ctaText from "../includes/ctaText"
import ctaRedirection from "../includes/ctaRedirection"
import blockContent from "../includes/blockContent"

export default {
    name: 'twoColumnInfoContent',
    title: 'Two Column Info Content',
    type: 'document',
    fields: [
        bannerText,
        bannerSubheaderText,
        blockContent,
        {
            name: 'image_section',
            title: 'Image Section',
            type: 'object',
            fields: [
                imagePanel,
                {
                    title: 'Set image to right panel?',
                    description: 'Press toggle on to set image location to right. (By default it is located in the left)',
                    name: 'image_location_toggle',
                    type: 'boolean'
                }
            ]
        }
    ]
}