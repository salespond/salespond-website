import CalloutRepository from '../CalloutRepository'

export default class ChannelCallout extends CalloutRepository {
  static schemaId = 'channel_callout'

  constructor() {
    super(ChannelCallout.schemaId)
  }
}
