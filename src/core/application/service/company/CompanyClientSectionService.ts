import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import CompanyClientSection from '@/core/infrastructure/repository/company/CompanyClientSection'
import hasData from '@/core/domain/specification/hasData'

export default class CompanyClientSectionService implements ServiceInterface {
  constructor() {
    this.companyClientSection = new CompanyClientSection()
  }

  async process() {
    const { data, totalCount } = await this.companyClientSection.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly companyClientSection: CompanyClientSection
}
