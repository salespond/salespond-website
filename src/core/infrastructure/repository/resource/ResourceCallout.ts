import CalloutRepository from '../CalloutRepository'

export default class ResourceCallout extends CalloutRepository {
  static schemaId = 'resource_callout'

  constructor() {
    super(ResourceCallout.schemaId)
  }
}
