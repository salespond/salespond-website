import ContactUsService from './service/contact/ContactUsService'
import ContactUsCalloutService from './service/contact/ContactUsCalloutService'
import ContactUsThreeColumnService from './service/contact/ContactUsThreeColumnService'

export default class ContactUs {
  constructor() {
    this.contactUsService = new ContactUsService()
    this.contactUsCalloutService = new ContactUsCalloutService()
    this.contactUsThreeColumnService = new ContactUsThreeColumnService()
  }

  async getAllData() {
    const contactUsBanner = await this.contactUsService.process()
    const callout = await this.contactUsCalloutService.process()
    const threeColumn = await this.contactUsThreeColumnService.process()

    return {
      contactUsBanner,
      callout,
      threeColumn
    }
  }

  private readonly contactUsService: ContactUsService
  private readonly contactUsCalloutService: ContactUsCalloutService
  private readonly contactUsThreeColumnService: ContactUsThreeColumnService
}
