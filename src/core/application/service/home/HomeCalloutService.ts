import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import HomeCallout from '@/core/infrastructure/repository/home/HomeCallout'
import hasData from '@/core/domain/specification/hasData'

export default class HomeCalloutService implements ServiceInterface {
  constructor() {
    this.homeCallout = new HomeCallout()
  }

  async process() {
    const { data, totalCount } = await this.homeCallout.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly homeCallout: HomeCallout
}
