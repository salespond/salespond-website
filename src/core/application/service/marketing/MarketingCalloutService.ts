import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import MarketingCallout from '@/core/infrastructure/repository/marketing/MarketingCallout'
import hasData from '@/core/domain/specification/hasData'

export default class MarketingCalloutService implements ServiceInterface {
  constructor() {
    this.marketingCallout = new MarketingCallout()
  }

  async process() {
    const { data, totalCount } = await this.marketingCallout.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly marketingCallout: MarketingCallout
}
