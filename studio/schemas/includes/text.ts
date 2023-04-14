export default {
    name: 'plainText',
    title: 'Plain Text',
    type: 'string',
    validation: Rule => [
        Rule.required().error('This field is required!'),
        Rule.min(8).error('This field must be at least 10 characters long'),
        Rule.max(100).warning('This field must be at most 50 characters long')
    ]
}