import TwoColumnInfoRepository from '../TwoColumnInfoRepository'

export default class ChannelTwoColumnInfo extends TwoColumnInfoRepository {
  static schemaId = 'channel_twoSectionContent'

  constructor() {
    super(ChannelTwoColumnInfo.schemaId)
  }
}
