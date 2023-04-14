import bannerText from "../includes/bannerText"
import bannerTextHighlight from "../includes/bannerTextHighlight"
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
        bannerText,
        bannerTextHighlight,
        bannerSubheaderText,
        isEnabledCTA,
        ctaText,
        ctaRedirection,
        imagePanel,
    ]
}