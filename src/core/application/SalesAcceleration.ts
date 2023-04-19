import SalesAccelerationHeroBannerService from './service/sales_acceleration/SalesAccelerationHeroBannerService'
import SalesAccelerationTwoColumnInfoService from './service/sales_acceleration/SalesAccelerationTwoColumnInfoService'
import SalesAccelerationCalloutService from './service/sales_acceleration/SalesAccelerationCalloutService'

export default class ContactUs {
  constructor() {
    this.salesAccelerationHeroBannerService = new SalesAccelerationHeroBannerService()
    this.salesAccelerationTwoColumnInfoService = new SalesAccelerationTwoColumnInfoService()
    this.salesAccelerationCalloutService = new SalesAccelerationCalloutService()
  }

  async getAllData() {
    const heroBanner = await this.salesAccelerationHeroBannerService.process()
    const twoColumnInfo = await this.salesAccelerationTwoColumnInfoService.process()
    const callout = await this.salesAccelerationCalloutService.process()

    return {
      heroBanner,
      twoColumnInfo,
      callout
    }
  }

  private readonly salesAccelerationHeroBannerService: SalesAccelerationHeroBannerService
  private readonly salesAccelerationTwoColumnInfoService: SalesAccelerationTwoColumnInfoService
  private readonly salesAccelerationCalloutService: SalesAccelerationCalloutService
}
