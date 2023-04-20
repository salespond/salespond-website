import TwoColumnInfoRepository from '../TwoColumnInfoRepository'

export default class TrainingTwoColumnInfo extends TwoColumnInfoRepository {
  static schemaId = 'training_twoSectionContent'

  constructor() {
    super(TrainingTwoColumnInfo.schemaId)
  }
}
