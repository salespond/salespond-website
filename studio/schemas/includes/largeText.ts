export default {
    name: 'banner_text',
    title: 'Banner Text',
    type: 'string',
    validation: Rule => {
        Rule.required().error('This field is required!')
        Rule.min(10).error('This field must be at least 10 characters long')
        Rule.max(50).warning('This field must be at most 50 characters long')
    }
}