import MarketingHeroBannerService from './service/marketing/MarketingHeroBannerService'
import MarketingTwoColumnInfoService from './service/marketing/MarketingTwoColumnInfoService'
import MarketingCalloutService from './service/marketing/MarketingCalloutService'

export default class ContactUs {
  constructor() {
    this.marketingHeroBannerService = new MarketingHeroBannerService()
    this.marketingTwoColumnInfoService = new MarketingTwoColumnInfoService()
    this.marketingCalloutService = new MarketingCalloutService()
  }

  async getAllData() {
    const heroBanner = await this.marketingHeroBannerService.process()
    const twoColumnInfo = await this.marketingTwoColumnInfoService.process()
    const callout = await this.marketingCalloutService.process()

    return {
      heroBanner,
      twoColumnInfo,
      callout
    }
  }

  private readonly marketingHeroBannerService: MarketingHeroBannerService
  private readonly marketingTwoColumnInfoService: MarketingTwoColumnInfoService
  private readonly marketingCalloutService: MarketingCalloutService
}
