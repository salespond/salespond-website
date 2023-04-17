import TwoColumnSectionRepository from "../TwoColumnSectionRepository"

export default class TwoColumnSection extends TwoColumnSectionRepository {
  constructor(readonly schemaId: string) {
    super(schemaId)
  }
}
