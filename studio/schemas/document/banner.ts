import bannerText from "../includes/bannerText"
import bannerLabel from "../includes/bannerLabel"
import bannerSubheaderText from "../includes/bannerSubheaderText"
import imagePanel from "../includes/imagePanel"
import isEnabledCTA from "../includes/isEnabledCTA"
import ctaText from "../includes/ctaText"
import ctaRedirection from "../includes/ctaRedirection"

export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        bannerLabel,
        bannerText,
        bannerSubheaderText,
        isEnabledCTA,
        ctaText,
        ctaRedirection,
        imagePanel,
    ]
}