export default {
    name: 'text_highlight',
    title: 'Highlighted Text',
    type: 'string',
    description: 'Input the exact text you want to highlight from the banner text',
    validation: Rule => Rule.required()
}