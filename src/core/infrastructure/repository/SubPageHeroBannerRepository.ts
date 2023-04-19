import QueryBuilder from '../QueryBuilder'

export default class SubPageHeroBannerRepository {
  constructor(public contentName: string) {}

  async fetch() {
    const results = await new QueryBuilder()
      .buildQuery(this.contentName, [
        'banner_label',
        'banner_text',
        'text_highlight',
        'subheader_text',
        'cta_enabled',
        'cta_text',
        'cta_redirection',
        'image_panel'
      ])
      .process()

    return results.getResultInfo()
  }
}
