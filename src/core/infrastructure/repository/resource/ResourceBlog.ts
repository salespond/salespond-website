import BlogArticleRepository from '../BlogArticleRepository'

export default class ResourceBlog extends BlogArticleRepository {
  static schemaId = 'resource_blogResource'

  constructor() {
    super(ResourceBlog.schemaId)
  }
}
