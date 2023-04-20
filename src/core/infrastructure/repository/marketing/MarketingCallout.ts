import CalloutRepository from '../CalloutRepository'

export default class MarketingCallout extends CalloutRepository {
  static schemaId = 'marketing_callout'

  constructor() {
    super(MarketingCallout.schemaId)
  }
}
