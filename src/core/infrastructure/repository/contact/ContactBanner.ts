import SimpleBannerRepository from "../SimpleBannerRepository"

export default class ContactBanner extends SimpleBannerRepository {
  static schemaId = 'home_simpleBanner'

  constructor() {
    super(ContactBanner.schemaId)
  }
}
