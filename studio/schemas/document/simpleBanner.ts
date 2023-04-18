import bannerText from "../includes/bannerText"
import bannerLabel from "../includes/bannerLabel"
import blockContent from "../includes/blockContent"

export default {
    name: 'simpleBanner',
    title: 'Simple Banner',
    type: 'document',
    fields: [
        bannerLabel,
        bannerText,
        blockContent,
    ]
}