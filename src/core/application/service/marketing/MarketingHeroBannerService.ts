import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import MarketingHeroBanner from '@/core/infrastructure/repository/marketing/MarketingHeroBanner'
import hasData from '@/core/domain/specification/hasData'

export default class MarketingHeroBannerService implements ServiceInterface {
  constructor() {
    this.marketingHeroBanner = new MarketingHeroBanner()
  }

  async process() {
    const { data, totalCount } = await this.marketingHeroBanner.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly marketingHeroBanner: MarketingHeroBanner
}
