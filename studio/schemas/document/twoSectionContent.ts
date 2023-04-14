import bannerText from "../includes/bannerText"
import bannerSubheaderText from "../includes/bannerSubheaderText"
import imagePanel from "../includes/imagePanel"
import isEnabledCTA from "../includes/isEnabledCTA"
import ctaText from "../includes/ctaText"
import ctaRedirection from "../includes/ctaRedirection"
import blockContent from "../includes/blockContent"

export default {
    name: 'twoSectionContent',
    title: 'Two Section Content',
    type: 'document',
    fields: [
        bannerText,
        blockContent,
        {
            name: 'cta_1',
            title: 'First Button',
            type: 'object',
            fields: [
                isEnabledCTA,
                ctaText,
                ctaRedirection,
            ]
        },
        {
            name: 'cta_2',
            title: 'Second Button',
            type: 'object',
            fields: [
                isEnabledCTA,
                ctaText,
                ctaRedirection,
            ]
        },
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