import axios from "axios"
import type ContactFormDto from "@/core/domain/dto/ContactFormDto"
import { CONTACT_FORM_API_URL } from '@/core/Constants'

export default class SendContactForm {
    constructor(protected contactForm: ContactFormDto) { }

    async send() : Promise<any>{
        const data = {
            firstName: this.contactForm.getFirstName(),
            lastName: this.contactForm.getLastName(),
            email: this.contactForm.getEmail(),
            phone: this.contactForm.getPhoneNumber(),
            jobTitle: this.contactForm.getJobTitle(),
            whatInfo: this.contactForm.getInquiryCategory(),
            message: this.contactForm.getMessage(),
            companyName: this.contactForm.getCompanyName(),
            grpdConsent: this.contactForm.getGdpr(),
            requestForm: this.contactForm.getRequestForm(),
        }

        return await axios.post(CONTACT_FORM_API_URL, data)
            .then((response) => {
                return response
            })
            .catch((error) => {
                console.error(error)
            })
    }
}
