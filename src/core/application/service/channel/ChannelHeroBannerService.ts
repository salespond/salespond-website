import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import ChannelHeroBanner from '@/core/infrastructure/repository/channel/ChannelHeroBanner'
import hasData from '@/core/domain/specification/hasData'

export default class ChannelHeroBannerService implements ServiceInterface {
  constructor() {
    this.channelHeroBanner = new ChannelHeroBanner()
  }

  async process() {
    const { data, totalCount } = await this.channelHeroBanner.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly channelHeroBanner: ChannelHeroBanner
}
