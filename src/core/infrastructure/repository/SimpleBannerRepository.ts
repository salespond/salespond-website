import QueryBuilder from '../QueryBuilder'

export default class SimpleBannerRepository {
  constructor(public contentName: string) {}

  async fetch() {
    const results = await new QueryBuilder()
      .buildQuery(this.contentName, ['banner_label', 'banner_text', 'block_content'])
      .process()

    return results.getResultInfo()
  }
}
