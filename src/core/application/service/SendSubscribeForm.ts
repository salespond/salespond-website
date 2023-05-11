import axios from 'axios'
import type SubscribeFormDto from '@/core/domain/dto/SubscribeFormDto'
import { SUBSCRIBE_FORM_API_URL } from '@/core/Constants'

export default class SendSubscribeForm {
  constructor(protected contactForm: SubscribeFormDto) {}

  async send(): Promise<any> {
    const data = {
      email: this.contactForm.getEmail()
    }

    return await axios
      .post(SUBSCRIBE_FORM_API_URL, data)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
