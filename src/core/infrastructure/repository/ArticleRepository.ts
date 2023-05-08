import QueryBuilder from '../QueryBuilder'

export default class ArticleRepository {
  static contentName = 'resource_blogResource'
  constructor(protected key: string) {}

  async fetch() {
    const results = await new QueryBuilder()
      .rawQuery(`*[_id == '${ArticleRepository.contentName}'][0] { blogs[_key == '${this.key}'] }`)
      .process()

    return results.getResultInfo()
  }
}
