import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import ResourceCallout from '@/core/infrastructure/repository/resource/ResourceCallout'
import hasData from '@/core/domain/specification/hasData'

export default class ResourcesCalloutService implements ServiceInterface {
  constructor() {
    this.resourceCallout = new ResourceCallout()
  }

  async process() {
    const { data, totalCount } = await this.resourceCallout.fetch()

    if (!hasData(totalCount)) {
      throw new TypeError('No data was provided')
    }

    return data
  }

  protected readonly resourceCallout: ResourceCallout
}
