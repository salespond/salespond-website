import CalloutRepository from '../CalloutRepository'

export default class TrainingCallout extends CalloutRepository {
  static schemaId = 'training_callout'

  constructor() {
    super(TrainingCallout.schemaId)
  }
}
