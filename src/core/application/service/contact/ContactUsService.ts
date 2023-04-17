import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import ContactBanner from '@/core/infrastructure/repository/contact/ContactBanner'
import hasData from '@/core/domain/specification/hasData'

export default class ContactUsService implements ServiceInterface {
  constructor() {
    this.contactBanner = new ContactBanner()
  }

  async process() {
    const { data, totalCount } = await this.contactBanner.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly contactBanner: ContactBanner
}
