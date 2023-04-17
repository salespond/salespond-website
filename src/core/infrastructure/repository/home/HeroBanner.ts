import HeroBannerRepository from '../HeroBannerRepository'

export default class HeroBanner extends HeroBannerRepository {
  static schemaId = 'home_banner'

  constructor() {
    super(HeroBanner.schemaId)
  }
}
