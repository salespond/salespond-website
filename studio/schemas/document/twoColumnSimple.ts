import bannerText from "../includes/bannerText"
import bannerSubheaderText from "../includes/bannerSubheaderText"
import imagePanel from "../includes/imagePanel"
import bannerLabel from "../includes/bannerLabel"

export default {
    name: 'twoColumnSimple',
    title: 'Two Column Simple Content',
    type: 'document',
    fields: [
        bannerLabel,
        bannerText,
        bannerSubheaderText,
        imagePanel,
    ]
}