export default {
    name: 'simpleBlockContent',
    title: 'Subheader Text',
    type: 'array',
    of: [
      {
        type: 'block',
        // Only allow these block styles
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H1', value: 'h1'},
          {title: 'H2', value: 'h2'}
        ],
        // Only allow numbered lists
        lists: [
          {title: 'Bullet', value: 'bullet'}, 
          {title: 'Numbered', value: 'number'}
        ],
        marks: {
          // Only allow these decorators
          decorators: [
            {title: 'Strong', value: 'strong'},
            {title: 'Emphasis', value: 'em'}    
          ],
        }
      }
    ]
  }