<template>
  <form class="bg-white px-[20px] lg:px-[30px] py-[50px] rounded-xl shadow-lg">
    <div class="flex flex-col gap-5 lg:flex-row mb-6">
      <InputField
        v-model="formInputs.firstName"
        type="text"
        id="first_name"
        placeholder-text="First name"
        :required="true"
      />
      <InputField
        v-model="formInputs.lastName"
        type="text"
        id="last_name"
        placeholder-text="Last name"
        :required="true"
      />
    </div>
    <div class="flex flex-col gap-5 lg:flex-row mb-6">
      <InputField
        v-model="formInputs.email"
        type="email"
        id="email"
        placeholder-text="Email address"
        :required="true"
      />
    </div>
    <div class="flex flex-col gap-5 lg:flex-row mb-6">
      <InputField
        v-model="formInputs.phoneNumber"
        type="text"
        id="phone"
        placeholder-text="Phone number"
        :required="true"
      />
      <InputField
        v-model="formInputs.companyName"
        type="text"
        id="company"
        placeholder-text="Company"
        :required="true"
      />
    </div>
    <div class="flex flex-col gap-5 lg:flex-row mb-6">
      <textarea
        rows="5"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg resize-none focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full"
        placeholder="Message"
        required
      ></textarea>
    </div>
    <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
        <input
          id="remember"
          type="checkbox"
          value=""
          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          required
        />
      </div>
      <label for="remember" class="ml-2 text-sm font-medium text-gray-700"
        >By checking this box, you are consenting to receive future communication from
        Podiem.</label
      >
    </div>
    <ButtonPrimary class="w-full mb-6" text="Submit" />

    <div>
      <p class="text-sm text-gray-400">
        By submitting your information to our website, you agree to the terms outlined in our
        <a href="#" class="text-primary underline">Privacy Policy.</a>
      </p>
    </div>
  </form>
</template>
<script lang="ts">
import { reactive } from 'vue'
import ButtonPrimary from '../atom/button/ButtonPrimary.vue'
import InputField from '../atom/input/InputField.vue'

export default {
  components: {
    ButtonPrimary,
    InputField
  },
  setup() {
    const formInputs = reactive({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      companyName: '',
      jobTitle: '',
      message: '',
      gdpr: false
    })

    return {
      formInputs
    }
  }
}
</script>
<style lang=""></style>
