import QueryBuilder from '../QueryBuilder'

export default class HeroBannerRepository {
  constructor(protected schemaId: string) {}
  async fetch() {
    const results = await new QueryBuilder()
      .buildQuery(this.schemaId, [
        'banner_text',
        'subheader_text',
        'cta_text',
        'cta_redirection',
        'image_panel'
      ])
      .process()

    return results.getResultInfo()
  }
}
