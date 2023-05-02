import QueryBuilder from '../QueryBuilder'

export default class ThreeColumnRepository {
  constructor(protected contentName: string) {}

  async fetch() {
    const results = await new QueryBuilder()
      .buildQuery(this.contentName, [
        'threeColumnSection'
      ])
      .process()

    return results.getResultInfo()
  }
}
