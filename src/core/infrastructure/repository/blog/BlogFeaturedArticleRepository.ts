import QueryBuilder from '../../QueryBuilder'

export default class BlogFeaturedArticleRepository {
  static contentName = 'resource_blogResource'
  constructor(protected categoryKey: string, protected index: string, protected limit: number) {}

  async fetch() {
    const results = await new QueryBuilder()
      .rawQuery(
        `*[_id == '${BlogFeaturedArticleRepository.contentName}'][0] { blogs[articleInfo.blogCategoryOption._ref == '${this.categoryKey}' && _key != '${this.index}'][0...${this.limit}] }`
      )
      .process()

    return results.getResultInfo()
  }
}
