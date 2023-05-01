import type ServiceInterface from "@/core/domain/contract/ServiceInterface";
import hasData from "@/core/domain/specification/hasData";
import CompanyTwoColumnText from "@/core/infrastructure/repository/company/CompanyTwoColumnText";

export default class CompanyTwoColumnTextService implements ServiceInterface {
  constructor() {
    this.companyTwoColumnText = new CompanyTwoColumnText()
  }

  async process() {
    const { data, totalCount } = await this.companyTwoColumnText.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly companyTwoColumnText: CompanyTwoColumnText
}