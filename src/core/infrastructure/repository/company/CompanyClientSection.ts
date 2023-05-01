import ClientSectionRepository from "../ClientSectionRepository"

export default class CompanyClientSection extends ClientSectionRepository {
  static schemaId = 'company_clientSection'

  constructor() {
    super(CompanyClientSection.schemaId)
  }
}
