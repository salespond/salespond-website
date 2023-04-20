import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import ChannelTwoColumnInfo from '@/core/infrastructure/repository/channel/ChannelTwoColumnInfo'
import hasData from '@/core/domain/specification/hasData'

export default class ChannelTwoColumnInfoService implements ServiceInterface {
  constructor() {
    this.channelTwoColumnInfo = new ChannelTwoColumnInfo()
  }

  async process() {
    const { data, totalCount } = await this.channelTwoColumnInfo.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly channelTwoColumnInfo: ChannelTwoColumnInfo
}
