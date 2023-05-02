import CalloutRepository from '../CalloutRepository'

export default class ContactCallout extends CalloutRepository {
  static schemaId = 'contact_us_callout'

  constructor() {
    super(ContactCallout.schemaId)
  }
}
