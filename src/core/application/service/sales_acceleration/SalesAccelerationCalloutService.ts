import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import SalesAccelerationCallout from '@/core/infrastructure/repository/sales_acceleration/SalesAccelerationCallout'
import hasData from '@/core/domain/specification/hasData'

export default class SalesAccelerationCalloutService implements ServiceInterface {
  constructor() {
    this.salesAccelerationCallout = new SalesAccelerationCallout()
  }

  async process() {
    const { data, totalCount } = await this.salesAccelerationCallout.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly salesAccelerationCallout: SalesAccelerationCallout
}
