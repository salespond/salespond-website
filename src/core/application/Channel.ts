import ChannelHeroBannerService from './service/channel/ChannelHeroBannerService'
import ChannelTwoColumnInfoService from './service/channel/ChannelTwoColumnInfoService'
import ChannelCalloutService from './service/channel/ChannelCalloutService'

export default class ContactUs {
  constructor() {
    this.channelHeroBannerService = new ChannelHeroBannerService()
    this.channelTwoColumnInfoService = new ChannelTwoColumnInfoService()
    this.channelCalloutService = new ChannelCalloutService()
  }

  async getAllData() {
    const heroBanner = await this.channelHeroBannerService.process()
    const twoColumnInfo = await this.channelTwoColumnInfoService.process()
    const callout = await this.channelCalloutService.process()

    return {
      heroBanner,
      twoColumnInfo,
      callout
    }
  }

  private readonly channelHeroBannerService: ChannelHeroBannerService
  private readonly channelTwoColumnInfoService: ChannelTwoColumnInfoService
  private readonly channelCalloutService: ChannelCalloutService
}
