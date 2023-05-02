import ThreeColumnRepository from '../ThreeColumnRepository'

export default class ContactThreeColumn extends ThreeColumnRepository {
  static schemaId = 'contact_us_threeColumnImage'

  constructor() {
    super(ContactThreeColumn.schemaId)
  }
}
