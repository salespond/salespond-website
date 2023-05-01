import CalloutRepository from '../CalloutRepository'

export default class CompanyCallout extends CalloutRepository {
  static schemaId = 'company_callout'

  constructor() {
    super(CompanyCallout.schemaId)
  }
}
