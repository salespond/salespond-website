import type SubscribeFormModel from '../model/SubscribeFormModel'

export default class ContactFormDto {
  constructor(protected email: string) {}

  getEmail() {
    return this.email
  }
}
