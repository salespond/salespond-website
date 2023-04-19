import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import SalesAccelerationHeroBanner from '@/core/infrastructure/repository/sales_acceleration/SalesAccelerationHeroBanner'
import hasData from '@/core/domain/specification/hasData'

export default class SalesAccelerationHeroBannerService implements ServiceInterface {
  constructor() {
    this.salesAccelerationHeroBanner = new SalesAccelerationHeroBanner()
  }

  async process() {
    const { data, totalCount } = await this.salesAccelerationHeroBanner.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly salesAccelerationHeroBanner: SalesAccelerationHeroBanner
}
