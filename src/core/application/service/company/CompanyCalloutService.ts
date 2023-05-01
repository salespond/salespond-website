import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import CompanyCallout from '@/core/infrastructure/repository/company/CompanyCallout'
import hasData from '@/core/domain/specification/hasData'

export default class CompanyCalloutService implements ServiceInterface {
  constructor() {
    this.companyCallout = new CompanyCallout()
  }

  async process() {
    const { data, totalCount } = await this.companyCallout.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly companyCallout: CompanyCallout
}
