import TwoColumnSimpleRepository from '../TwoColumnSimpleRepository'

export default class CompanyTwoColumnSimple extends TwoColumnSimpleRepository {
  static schemaId = 'company_twoColumnSimple'

  constructor() {
    super(CompanyTwoColumnSimple.schemaId)
  }
}
