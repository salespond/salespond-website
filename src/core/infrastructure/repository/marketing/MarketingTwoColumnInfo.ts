import TwoColumnInfoRepository from '../TwoColumnInfoRepository'

export default class MarketingTwoColumnInfo extends TwoColumnInfoRepository {
  static schemaId = 'marketing_twoSectionContent'

  constructor() {
    super(MarketingTwoColumnInfo.schemaId)
  }
}
