import CalloutRepository from "../CalloutRepository"

export default class HomeCallout extends CalloutRepository {
  static schemaId = 'home_callout'

  constructor() {
    super(HomeCallout.schemaId)
  }
}
