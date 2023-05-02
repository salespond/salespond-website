import QueryBuilder from '../QueryBuilder'

export default class BlogArticleRepository {
  constructor(protected contentName: string) {}

  async fetch() {
    const results = await new QueryBuilder()
      .rawQuery(`*[_id == '${this.contentName}'][0].blogs`)
      .process()

    return results.getResultInfo()
  }
}
