import HeroBannerRepository from '../HeroBannerRepository'

export default class CompanyHeroBanner extends HeroBannerRepository {
  static schemaId = 'company_banner'

  constructor() {
    super(CompanyHeroBanner.schemaId)
  }
}
