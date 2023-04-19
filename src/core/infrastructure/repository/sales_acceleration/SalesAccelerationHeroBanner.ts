import SubPageHeroBannerRepository from '../SubPageHeroBannerRepository'

export default class SalesAccelerationHeroBanner extends SubPageHeroBannerRepository {
  static schemaId = 'sales_banner'

  constructor() {
    super(SalesAccelerationHeroBanner.schemaId)
  }
}
