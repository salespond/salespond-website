export default {
    name: 'blogResource',
    title: 'Blog Resource',
    type: 'document',
    fields: [
        {
            name: 'blogs',
            type: 'array',
            title: 'Blog Article',
            validation: (Rule: any) => Rule.required(),
            of: [
                {
                    type: 'blogArticlePage'
                }
            ]
        },
    ]
}