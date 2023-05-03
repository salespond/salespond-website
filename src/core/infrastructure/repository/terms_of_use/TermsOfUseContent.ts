import UtilityPageRepository from '../UtilityPageRepository'

export default class TermsOfUseContent extends UtilityPageRepository {
  static schemaId = 'utility_termsOfUse'

  constructor() {
    super(TermsOfUseContent.schemaId)
  }
}
