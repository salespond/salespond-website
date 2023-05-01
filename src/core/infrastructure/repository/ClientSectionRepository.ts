import QueryBuilder from '../QueryBuilder'

export default class ClientSectionRepository {
  constructor(protected contentName: string) {}

  async fetch() {
    const results = await new QueryBuilder()
      .buildQuery(this.contentName, [
        'banner_text',
        'banner_label',
        'text_highlight',
        'serviceIcon'
      ])
      .process()

    return results.getResultInfo()
  }
}
