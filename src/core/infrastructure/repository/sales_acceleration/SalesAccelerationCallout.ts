import CalloutRepository from '../CalloutRepository'

export default class SalesAccelerationCallout extends CalloutRepository {
  static schemaId = 'sales_callout'

  constructor() {
    super(SalesAccelerationCallout.schemaId)
  }
}
