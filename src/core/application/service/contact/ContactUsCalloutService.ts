import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import ContactCallout from '@/core/infrastructure/repository/contact/ContactCallout'
import hasData from '@/core/domain/specification/hasData'

export default class ContactUsCalloutService implements ServiceInterface {
  constructor() {
    this.contactCallout = new ContactCallout()
  }

  async process() {
    const { data, totalCount } = await this.contactCallout.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly contactCallout: ContactCallout
}
