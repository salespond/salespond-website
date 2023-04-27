import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import ChannelCallout from '@/core/infrastructure/repository/channel/ChannelCallout'
import hasData from '@/core/domain/specification/hasData'

export default class ChannelCalloutService implements ServiceInterface {
  constructor() {
    this.channelCallout = new ChannelCallout()
  }

  async process() {
    const { data, totalCount } = await this.channelCallout.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly channelCallout: ChannelCallout
}
