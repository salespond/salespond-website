import bannerText from "../includes/bannerText"
import bannerLabel from "../includes/bannerLabel"
import bannerSubheaderText from "../includes/bannerSubheaderText"

export default {
    name: 'simpleBanner',
    title: 'Simple Banner',
    type: 'document',
    fields: [
        bannerLabel,
        bannerText,
        bannerSubheaderText,
    ]
}