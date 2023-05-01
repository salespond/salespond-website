import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import hasData from '@/core/domain/specification/hasData'
import CompanyHeroBanner from '@/core/infrastructure/repository/company/CompanyHeroBanner'

export default class CompanyHeroBannerService implements ServiceInterface {
  constructor() {
    this.companyHeroBanner = new CompanyHeroBanner()
  }

  async process() {
    const { data, totalCount } = await this.companyHeroBanner.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly companyHeroBanner: CompanyHeroBanner
}
