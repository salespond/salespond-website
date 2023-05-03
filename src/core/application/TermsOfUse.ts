import TermsOfUseContent from '../infrastructure/repository/terms_of_use/TermsOfUseContent'
import hasData from '@/core/domain/specification/hasData'

export default class TermsOfUse {
  termsOfUseContent: TermsOfUseContent

  constructor() {
    this.termsOfUseContent = new TermsOfUseContent()
  }

  async getAllData() {
    const { data, totalCount } = await this.termsOfUseContent.fetch()

    if (!hasData(totalCount)) {
      throw new TypeError('No data was provided')
    }

    return data
  }
}
