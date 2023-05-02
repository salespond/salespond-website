import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import ContactThreeColumn from '@/core/infrastructure/repository/contact/ContactThreeColumn'
import hasData from '@/core/domain/specification/hasData'

export default class ContactUsThreeColumnService implements ServiceInterface {
  constructor() {
    this.contactThreeColumn = new ContactThreeColumn()
  }

  async process() {
    const { data, totalCount } = await this.contactThreeColumn.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly contactThreeColumn: ContactThreeColumn
}
