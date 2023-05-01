import TwoColumnTextContentRepository from "../TwoColumnTextContentRepository"

export default class CompanyTwoColumnText extends TwoColumnTextContentRepository {
  static schemaId = 'company_twoColumn'

  constructor() {
    super(CompanyTwoColumnText.schemaId)
  }
}
