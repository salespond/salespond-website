import SubPageHeroBannerRepository from '../SubPageHeroBannerRepository'

export default class ChannelHeroBanner extends SubPageHeroBannerRepository {
  static schemaId = 'channel_banner'

  constructor() {
    super(ChannelHeroBanner.schemaId)
  }
}
