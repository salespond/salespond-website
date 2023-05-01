import QueryBuilder from '../QueryBuilder'

export default class TwoColumnSimpleRepository {
  constructor(protected contentName: string) {}

  async fetch() {
    const results = await new QueryBuilder()
      .buildQuery(this.contentName, [
        'banner_text',
        'banner_label',
        'subheader_text',
        'image_panel'
      ])
      .process()

    return results.getResultInfo()
  }
}
