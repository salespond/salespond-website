import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import MarketingTwoColumnInfo from '@/core/infrastructure/repository/marketing/MarketingTwoColumnInfo'
import hasData from '@/core/domain/specification/hasData'

export default class MarketingTwoColumnInfoService implements ServiceInterface {
  constructor() {
    this.marketingTwoColumnInfo = new MarketingTwoColumnInfo()
  }

  async process() {
    const { data, totalCount } = await this.marketingTwoColumnInfo.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly marketingTwoColumnInfo: MarketingTwoColumnInfo
}
