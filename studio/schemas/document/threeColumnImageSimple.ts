import imagePanel from "../includes/imagePanel"

export default {
    name: "threeColumnImageSimple",
    title: "Three Column (Simple)",
    type: "document",
    fields: [
        {
            name: 'threeColumnSection',
            title: 'Three Column Section',
            type: 'object',
            fields: [
                {
                    type: 'object',
                    name: 'columnSection1',
                    title: "Column Section 1",
                    fieldsets: [
                        { 
                            name: 'column1', 
                            title: 'Column One',
                            options: {
                                collapsible: true,
                                collapsed: true,
                            }
                        }
                    ],
                    fields: [
                        imagePanel,
                        {
                            name: 'contentTitle',
                            title: 'Title',
                            type: 'string',
                            validation: (Rule: any) => Rule.required()
                        },
                        {
                            name: 'contentText',
                            title: 'Content',
                            type: 'block_content',
                            validation: (Rule: any) => Rule.required()
                        }
                    ]
                },
                {
                    type: 'object',
                    name: 'columnSection2',
                    title: "Column Section 2",
                    fieldsets: [
                        { 
                            name: 'column2', 
                            title: 'Column Two',
                            options: {
                                collapsible: true,
                                collapsed: true,
                            }
                         }
                    ],
                    fields: [
                        imagePanel,
                        {
                            name: 'contentTitle',
                            title: 'Title',
                            type: 'string',
                            validation: (Rule: any) => Rule.required()
                        },
                        {
                            name: 'contentText',
                            title: 'Content',
                            type: 'block_content',
                            validation: (Rule: any) => Rule.required()
                        },
                    ]
                },
                {
                    type: 'object',
                    name: 'columnSection3',
                    title: "Column Section 3",
                    fieldsets: [
                        { 
                            name: 'column3', 
                            title: 'Column Three',
                            options: {
                                collapsible: true,
                                collapsed: true,
                            }
                         }
                    ],
                    fields: [
                        imagePanel,
                        {
                            name: 'contentTitle',
                            title: 'Title',
                            type: 'string',
                            validation: (Rule: any) => Rule.required()
                        },
                        {
                            name: 'contentText',
                            title: 'Content',
                            type: 'block_content',
                            validation: (Rule: any) => Rule.required()
                        },
                    ]
                }
            ],
        },
    ]
}