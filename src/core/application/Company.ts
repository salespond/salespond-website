import CompanyHeroBannerService from './service/company/CompanyHeroBannerService'
import CompanyTwoColumnSimpleService from './service/company/CompanyTwoColumnSimpleService'
import CompanyTwoColumnTextService from './service/company/CompanyTwoColumnTextService'
import CompanyClientSectionService from './service/company/CompanyClientSectionService'
import CompanyCalloutService from './service/company/CompanyCalloutService'

export default class Company {
  constructor() {
    this.companyHeroBannerService = new CompanyHeroBannerService()
    this.companyTwoColumnSimpleService = new CompanyTwoColumnSimpleService()
    this.companyTwoColumnTextService = new CompanyTwoColumnTextService()
    this.companyClientSectionService = new CompanyClientSectionService()
    this.companyCalloutService = new CompanyCalloutService()
  }

  async getAllData() {
    const heroBanner = await this.companyHeroBannerService.process()
    const twoColumnSimple = await this.companyTwoColumnSimpleService.process()
    const twoColumnText = await this.companyTwoColumnTextService.process()
    const clientSection = await this.companyClientSectionService.process()
    const callout = await this.companyCalloutService.process()

    return {
      heroBanner,
      twoColumnSimple,
      twoColumnText,
      clientSection,
      callout
    }
  }

  private readonly companyHeroBannerService: CompanyHeroBannerService
  private readonly companyTwoColumnSimpleService: CompanyTwoColumnSimpleService
  private readonly companyTwoColumnTextService: CompanyTwoColumnTextService
  private readonly companyClientSectionService: CompanyClientSectionService
  private readonly companyCalloutService: CompanyCalloutService
}
