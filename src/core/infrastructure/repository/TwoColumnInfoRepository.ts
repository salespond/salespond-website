import QueryBuilder from '../QueryBuilder'

export default class TwoColumnInfoRepository {
  constructor(protected contentName: string) {}

  async fetch() {
    const results = await new QueryBuilder()
      .rawQuery(`*[_id == '${this.contentName}'][0].twoColumnInfoContent`)
      .process()

    return results.getResultInfo()
  }
}
