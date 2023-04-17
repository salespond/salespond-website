import HomeBannerService from './service/home/HomeBannerService'
import TwoColumnSectionService from './service/home/TwoColumnSectionService'

export default class Home {
  protected homeBannerService: HomeBannerService
  protected twoColumnSectionService: TwoColumnSectionService

  constructor() {
    this.homeBannerService = new HomeBannerService()
    this.twoColumnSectionService = new TwoColumnSectionService()
  }

  async getAllData() {
    const homeBanner = await this.homeBannerService.process()
    const { section1, section2, section3 } = await this.twoColumnSectionService.process()

    return {
      homeBanner,
      twoColumnFirstSection: section1,
      twoColumnSecondSection: section2,
      twoColumnThirdSection: section3
    }
  }
}
