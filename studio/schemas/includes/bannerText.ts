export default {
    name: 'banner_text',
    title: 'Banner Text',
    type: 'string',
    validation: Rule => [
        Rule.required().error('This field is required!'),
        Rule.min(5).error('This field must be at least 5 characters long'),
        Rule.max(100).warning('This field must be at most 50 characters long')
    ]
}