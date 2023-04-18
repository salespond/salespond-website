import ContactUsService from './service/contact/ContactUsService'

export default class ContactUs {
  constructor() {
    this.contactUsService = new ContactUsService()
  }

  async getAllData() {
    const contactUsBanner = await this.contactUsService.process()

    return {
      contactUsBanner
    }
  }

  private readonly contactUsService: ContactUsService
}
