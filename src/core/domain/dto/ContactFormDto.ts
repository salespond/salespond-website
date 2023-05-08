import type ContactFormModel from "../model/ContactFormModel"

export default class ContactFormDto {
    constructor(protected formInput: ContactFormModel) {}

    getAllInputs() { return this.formInput }
    getFirstName() { return this.formInput.firstName }
    getLastName() { return this.formInput.lastName }
    getEmail() { return this.formInput.email }
    getPhoneNumber() { return this.formInput.phoneNumber }
    getCompanyName() { return this.formInput.companyName }
    getJobTitle() { return this.formInput.jobTitle }
    getInquiryCategory() { return this.formInput.inquiryCategory }
    getMessage() { return this.formInput.message }
    getGdpr() { return this.formInput.gdpr }
    getRequestForm() { return this.formInput.requestForm }
}
