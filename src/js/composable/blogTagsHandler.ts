import { BLOG_TAGS } from '@/js/BaseConstant'

export const blogTagsHandler = (blogTags: [] = []) => {
  const tags = BLOG_TAGS;

  interface BaseTags {
    id?: number | string,
    title: string
  }

  return blogTags.map((tag: string) => {
    return tags.find((baseTag: BaseTags) => {
      if (baseTag.id === parseInt(tag)) {
        return baseTag.title.toString().toUpperCase()
      }
    })
  })
}