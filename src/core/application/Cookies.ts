import CookiesContent from '../infrastructure/repository/cookies/CookiesContent'
import hasData from '@/core/domain/specification/hasData'

export default class Cookies {
  cookiesContent: CookiesContent

  constructor() {
    this.cookiesContent = new CookiesContent()
  }

  async getAllData() {
    const { data, totalCount } = await this.cookiesContent.fetch()

    if (!hasData(totalCount)) {
      throw new TypeError('No data was provided')
    }

    return data
  }
}
