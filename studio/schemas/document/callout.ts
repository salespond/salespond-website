import bannerText from "../includes/bannerText"
import bannerTextHighlight from "../includes/bannerTextHighlight"
import imagePanel from "../includes/imagePanel"
import isEnabledCTA from "../includes/isEnabledCTA"
import ctaText from "../includes/ctaText"
import ctaRedirection from "../includes/ctaRedirection"
import blockContent from "../includes/blockContent"

export default {
    name: 'callout',
    title: 'Callout Section',
    type: 'document',
    fields: [
        imagePanel,
        bannerText,
        bannerTextHighlight,
        blockContent,
        isEnabledCTA,
        ctaText,
        ctaRedirection
    ],
}