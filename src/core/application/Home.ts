import HomeBannerService from './service/home/HomeBannerService'

export default class Home {
  protected homeBannerService: HomeBannerService

  constructor() {
    this.homeBannerService = new HomeBannerService()
  }

  async getAllData() {
    const homeBanner = await this.homeBannerService.process()

    return {
      homeBanner
    }
  }
}
