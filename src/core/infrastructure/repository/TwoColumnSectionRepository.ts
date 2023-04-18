import QueryBuilder from '../QueryBuilder'

export default class TwoColumnSectionRepository {
  constructor(protected contentName: string) {}

  async fetch() {
    const results = await new QueryBuilder()
      .buildQuery(this.contentName, [
        'banner_text',
        'block_content',
        'image_section',
        'cta_1',
        'cta_2'
      ])
      .process()

    return results.getResultInfo()
  }
}
