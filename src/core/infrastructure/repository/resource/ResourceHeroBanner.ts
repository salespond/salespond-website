import SubPageHeroBannerRepository from '../SubPageHeroBannerRepository'

export default class ResourceHeroBanner extends SubPageHeroBannerRepository {
  static schemaId = 'resource_banner'

  constructor() {
    super(ResourceHeroBanner.schemaId)
  }
}
