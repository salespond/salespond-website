<template>
  <div class="bg-white px-[20px] lg:px-[30px] py-[50px] rounded-xl shadow-lg">
    <template v-if="sending">
      <div class="h-[400px] flex flex-col items-center justify-center">
        <spinner :inverted="false" />
        <p class="mt-2 text-neutral-1">Sending...</p>
      </div>
    </template>
    <template v-else>
      <template v-if="sent">
        <template v-if="error.status">
          <danger-alert :text="error.message" />
        </template>
        <template v-else>
          <div class="h-[400px] flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              class="w-16 h-16 text-green-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 class="mt-2 text-2xl font-bold">Thank you!</h2>
            <p class="apercu-light px-5 text-center text-neutral-1 mb-5">
              Your message has been sent successfully!
            </p>
            <p class="text-neutral-3 text-xs">Reloading in {{ closingCountdown }}</p>
          </div>
        </template>
      </template>
      <template v-else>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
          <InputField
            v-model="formInputs.firstName"
            type="text"
            id="first_name"
            :hasError="formError.firstName"
            :errorMessage="formErrorMessage.firstName"
            placeholder-text="First name"
            :required="true"
            @input="checkFields()"
          />
          <InputField
            v-model="formInputs.lastName"
            type="text"
            id="last_name"
            :hasError="formError.lastName"
            :errorMessage="formErrorMessage.lastName"
            placeholder-text="Last name"
            :required="true"
            @input="checkFields()"
          />
        </div>

        <div class="flex flex-col gap-5 mb-6">
          <InputField
            v-model="formInputs.email"
            type="email"
            id="email"
            :hasError="formError.email"
            :errorMessage="formErrorMessage.email"
            placeholder-text="Email address"
            :required="true"
            @input="checkFields()"
          />
        </div>

        <div class="flex flex-col gap-5 lg:flex-row mb-6">
          <InputField
            v-model="formInputs.jobTitle"
            :hasError="formError.jobTitle"
            :errorMessage="formErrorMessage.jobTitle"
            class="flex-1"
            placeholderText="Job Title"
            id="job_title"
            @input="checkFields()"
          />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
          <InputField
            v-model="formInputs.phoneNumber"
            type="text"
            id="phone"
            :hasError="formError.phoneNumber"
            :errorMessage="formErrorMessage.phoneNumber"
            placeholder-text="Phone number"
            :required="true"
            @input="checkFields()"
          />
          <InputField
            v-model="formInputs.companyName"
            type="text"
            id="company"
            :hasError="formError.companyName"
            :errorMessage="formErrorMessage.companyName"
            placeholder-text="Company"
            :required="true"
            @input="checkFields()"
          />
        </div>
        <div class="flex flex-col gap-5 lg:flex-row mb-6">
          <textarea
            v-model="formInputs.message"
            rows="5"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg resize-none focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div class="flex flex-col items-start mb-6">
          <div class="flex flex-row">
            <input
              v-model="formInputs.gdpr"
              @update:checked="checkFields()"
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
            <label for="remember" class="ml-2 text-sm font-medium text-gray-700">
              By checking this box, you are consenting to receive future communication from
              Salespond.
            </label>
          </div>

          <div v-if="formError.gdpr" class="flex flex-row items-center mt-1 gap-x-1 pl-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.663 1.67065C7.26851 0.509525 8.7311 0.509524 9.33661 1.67065L14.9752 12.4833C15.5987 13.6788 14.8502 15.1998 13.6384 15.1998H2.36118C1.1494 15.1998 0.400923 13.6788 1.02438 12.4833L6.663 1.67065ZM7.1998 9.1998V5.1998H8.7998V9.1998H7.1998ZM7.9998 12.7998C7.33706 12.7998 6.7998 12.2625 6.7998 11.5998C6.7998 10.9371 7.33706 10.3998 7.9998 10.3998C8.66255 10.3998 9.1998 10.9371 9.1998 11.5998C9.1998 12.2625 8.66255 12.7998 7.9998 12.7998Z"
                fill="#EB5757"
              />
            </svg>
            <p class="error-message text-red-500 text-xs leading-none">
              {{ formErrorMessage.gdpr }}
            </p>
          </div>
        </div>
        <button
          @click="sendInquiry()"
          class="w-full mb-2 bg-primary rounded-full h-[43px] px-[25px] text-white tracking-wide transition-all duration-75 hover:opacity-90"
        >
          Submit
        </button>

        <div>
          <p class="text-sm text-gray-400">
            By submitting your information to our website, you agree to the terms outlined in our
            <a href="/privacy-policy" class="text-primary underline">Privacy Policy.</a>
          </p>
        </div>
      </template>
    </template>
  </div>
</template>
<script lang="ts">
import { ref, reactive } from 'vue'
import { isValidEmail } from '@/js/composable/validateEmail'
import InputField from '@/components/atom/input/InputField.vue'
import isOk from '@/core/domain/specification/isOk'
import ContactFormDto from '@/core/domain/dto/ContactFormDto'
import SendContactForm from '@/core/application/SendContactForm'
import DangerAlert from '@/components/atom/alerts/DangerAlert.vue'
import Spinner from '@/components/atom/loading/Spinner.vue'

export default {
  name: 'ContactForm',
  components: {
    InputField,
    DangerAlert,
    Spinner
  },
  props: {
    formOrigin: {
      type: String
    }
  },
  setup() {
    const submittedOnce = ref(false)
    const sending = ref(false)
    const sent = ref(false)
    const error = reactive({
      status: false,
      message: 'Something went wrong while sending the form.'
    })
    const closingCountdown = ref(10) // 10 seconds

    const formInputs = reactive({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      companyName: '',
      jobTitle: '',
      inquiryCategory: 'Salespond Contact Us',
      message: '',
      gdpr: false,
      requestForm: 'Contact Us'
    })

    const formError = reactive({
      firstName: false,
      lastName: false,
      email: false,
      phoneNumber: false,
      companyName: false,
      jobTitle: false,
      inquiryCategory: false,
      gdpr: false
    })

    const formErrorMessage = reactive({
      firstName: 'First name is required',
      lastName: 'Last name is required',
      email: 'Email is required',
      phoneNumber: 'Phone number is required',
      companyName: 'Company name is required',
      jobTitle: 'Job Title is required',
      inquiryCategory: 'Inquiry category is required',
      gdpr: 'Please agree to the terms and conditions'
    })

    const checkFields = () => {
      if (submittedOnce.value) {
        Object.entries(formInputs).forEach(([key, item]) => {
          formError[key as keyof typeof formError] = false
          if ((item === '' || !item) && key !== 'message') {
            formError[key as keyof typeof formError] = true
          }
          if (key === 'email') {
            if (!isValidEmail(item) && item !== '') {
              formError[key as keyof typeof formError] = true
              formErrorMessage[key as keyof typeof formErrorMessage] =
                'Invalid email address provided'
            }
          }
        })
      }
    }

    const sendInquiry = async () => {
      submittedOnce.value = true
      checkFields()

      const hasErrors = Object.values(formError).includes(true)
      if (!hasErrors) {
        sending.value = true
        const contactFormDto = new ContactFormDto(formInputs)
        const sendContactForm = new SendContactForm(contactFormDto)
        const sendForm = await sendContactForm.send()

        if (isOk(sendForm.status)) {
          sending.value = false
          sent.value = true

          const counter = setInterval(() => {
            closingCountdown.value--
          }, 1000)

          setTimeout(() => {
            clearInterval(counter)
            location.reload()
          }, 10000)
        } else {
          error.status = true
        }
      }
    }

    const dropdownItems = ['Pricing', 'Demo', 'Partner', 'Other']

    const isOpenDropdown = ref(false)
    const openDropdown = () => {
      isOpenDropdown.value = !isOpenDropdown.value
    }

    return {
      sendInquiry,
      formInputs,
      formError,
      formErrorMessage,
      checkFields,
      sending,
      sent,
      error,
      closingCountdown,
      dropdownItems,
      isOpenDropdown,
      openDropdown
    }
  }
}
</script>
<style lang=""></style>
