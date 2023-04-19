import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import SalesAccelerationTwoColumnInfo from '@/core/infrastructure/repository/sales_acceleration/SalesAccelerationTwoColumnInfo'
import hasData from '@/core/domain/specification/hasData'

export default class SalesAccelerationTwoColumnInfoService implements ServiceInterface {
  constructor() {
    this.salesAccelerationTwoColumnInfo = new SalesAccelerationTwoColumnInfo()
  }

  async process() {
    const { data, totalCount } = await this.salesAccelerationTwoColumnInfo.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly salesAccelerationTwoColumnInfo: SalesAccelerationTwoColumnInfo
}
