import bannerText from "../includes/bannerText"
import bannerLabel from "../includes/bannerLabel"
import bannerSubheaderText from "../includes/bannerSubheaderText"
import imagePanel from "../includes/imagePanel"
import isEnabledCTA from "../includes/isEnabledCTA"
import ctaText from "../includes/ctaText"
import ctaRedirection from "../includes/ctaRedirection"
import bannerTextHighlight from "../includes/bannerTextHighlight"

export default {
    name: 'subPageBanner',
    title: 'Hero Banner',
    type: 'document',
    fields: [
        bannerLabel,
        bannerText,
        bannerTextHighlight,
        bannerSubheaderText,
        isEnabledCTA,
        ctaText,
        ctaRedirection,
        imagePanel,
    ]
}