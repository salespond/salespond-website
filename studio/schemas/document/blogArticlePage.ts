import imagePanel from "../includes/imagePanel"
import bannerText from "../includes/bannerText"
import bannerTextHighlight from "../includes/bannerTextHighlight"
import blogCategory from "../includes/blogCategory"
import isEnabledCTA from "../includes/isEnabledCTA"
import ctaText from "../includes/ctaText"
import ctaRedirection from "../includes/ctaRedirection"

export default {
    name: 'blogArticlePage',
    title: 'Blog Article',
    type: 'object',
    fields: [
        bannerText,
        bannerTextHighlight,
        imagePanel,
        {
            title: 'Article',
            name: 'articleInfo',
            type: 'object',
            fields: [
                {
                    title: 'Published Date',
                    name: 'datePosted',
                    type: 'date',
                    options: {
                        dateFormat: 'MM/DD/YYYY',
                        calendarTodayLabel: 'Today'
                    },
                    validation: (Rule: any) => Rule.required()
                },
                {
                    name: 'publishedBy',
                    title: 'Published By',
                    type: 'string',
                    validation: (Rule: any) => Rule.required()
                },
                {
                    name: 'blogCategoryOption',
                    title: 'Category',
                    type: 'reference',
                    to: [{ type: blogCategory.name }]
                },
                {
                    name: 'blogContent',
                    title: 'Blog Content',
                    type: 'block_content',
                    validation: (Rule: any) => Rule.required()
                },
                {
                    name: 'tags',
                    title: 'Tags',
                    type: 'string',
                    description: 'You can input multiple tags separated by commas',
                    validation: (Rule: any) => Rule.required()
                },
                {
                    name: 'readingTime',
                    title: 'Reading Time',
                    type: 'string',
                    description: 'How long would it take to read the blog',
                    validation: (Rule: any) => Rule.required()
                },
            ]
        },
        {
            name: 'footerCallout',
            title: 'Footer Callout',
            type: 'object',
            fieldsets: [
                {
                    name: 'blog_footer',
                    title: 'Blog Article Footer',
                    options: { collapsible: true, collapsed: true },
                },
            ],
            fields: [
                bannerText,
                bannerTextHighlight,
                isEnabledCTA,
                ctaText,
                ctaRedirection,
                imagePanel
            ]
        }
    ]
}