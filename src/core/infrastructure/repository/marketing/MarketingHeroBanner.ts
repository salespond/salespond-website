import SubPageHeroBannerRepository from '../SubPageHeroBannerRepository'

export default class MarketingHeroBanner extends SubPageHeroBannerRepository {
  static schemaId = 'marketing_banner'

  constructor() {
    super(MarketingHeroBanner.schemaId)
  }
}
