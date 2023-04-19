import TwoColumnInfoRepository from '../TwoColumnInfoRepository'

export default class SalesAccelerationTwoColumnInfo extends TwoColumnInfoRepository {
  static schemaId = 'sales_twoSectionContent'

  constructor() {
    super(SalesAccelerationTwoColumnInfo.schemaId)
  }
}
