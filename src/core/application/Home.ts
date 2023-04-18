import HomeBannerService from './service/home/HomeBannerService'
import TwoColumnSectionService from './service/home/TwoColumnSectionService'
import HomeCalloutService from './service/home/HomeCalloutService'

export default class Home {
  private readonly homeBannerService: HomeBannerService
  private readonly twoColumnSectionService: TwoColumnSectionService
  private readonly homeCalloutService: HomeCalloutService

  constructor() {
    this.homeBannerService = new HomeBannerService()
    this.twoColumnSectionService = new TwoColumnSectionService()
    this.homeCalloutService = new HomeCalloutService()
  }

  async getAllData() {
    const homeBanner = await this.homeBannerService.process()
    const { section1, section2, section3 } = await this.twoColumnSectionService.process()
    const homeCallout = await this.homeCalloutService.process()

    return {
      homeBanner,
      twoColumnFirstSection: section1,
      twoColumnSecondSection: section2,
      twoColumnThirdSection: section3,
      homeCallout
    }
  }
}
