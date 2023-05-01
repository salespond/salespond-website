import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import hasData from '@/core/domain/specification/hasData'
import CompanyTwoColumnSimple from '@/core/infrastructure/repository/company/CompanyTwoColumnSimple'

export default class CompanyTwoColumnSimpleService implements ServiceInterface {
  constructor() {
    this.companyTwoColumnSimple = new CompanyTwoColumnSimple()
  }

  async process() {
    const { data, totalCount } = await this.companyTwoColumnSimple.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly companyTwoColumnSimple: CompanyTwoColumnSimple
}
