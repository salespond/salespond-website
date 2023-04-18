export default {
    name: 'infoContent',
    title: 'Info Content',
    type: 'document',
    fields: [
        {
            name: 'twoColumnInfoContent',
            type: 'array',
            title: 'Two Column Contents',
            validation: (Rule) => Rule.required(),
            of: [
                {
                    type: 'twoColumnInfoContent'
                }
            ]
        },
    ]
}