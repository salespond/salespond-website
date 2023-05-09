<template>
  <div class="flex flex-col relative">
      <div class="flex flex-col pt-5 lg:relative z-50">
          <input
              type="email"
              class="subscribe-input"
              v-model="emailInput"
              @input="checkInput()"
              :placeholder="placeholderText"
              :class="[
                  { 'focus:ring-0 border-error-1 hover:border-error-1 mb-[25px]': hasError },
                  {'border-neutral-3 mb-[10px]': !hasError},
              ]"
          >
          <button @click="subscribeNow()" class="subscribe-button">
              {{ buttonText }}
          </button>
      </div>
      <div v-if="hasError" class="flex flex-row items-center mt-1 gap-x-1 pl-1 absolute pt-[65px]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.663 1.67065C7.26851 0.509525 8.7311 0.509524 9.33661 1.67065L14.9752 12.4833C15.5987 13.6788 14.8502 15.1998 13.6384 15.1998H2.36118C1.1494 15.1998 0.400923 13.6788 1.02438 12.4833L6.663 1.67065ZM7.1998 9.1998V5.1998H8.7998V9.1998H7.1998ZM7.9998 12.7998C7.33706 12.7998 6.7998 12.2625 6.7998 11.5998C6.7998 10.9371 7.33706 10.3998 7.9998 10.3998C8.66255 10.3998 9.1998 10.9371 9.1998 11.5998C9.1998 12.2625 8.66255 12.7998 7.9998 12.7998Z" fill="#EB5757"/>
          </svg>
          <p class="error-message text-error-1 leading-none">{{ errorMessage }}</p>
      </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { isValidEmail } from '@/js/composable/validateEmail'
import isOk from '@/core/domain/specification/isOk'
import SubscribeFormDto from '@/core/domain/dto/SubscribeFormDto'
import SendSubscribeForm from '@/core/application/service/SendSubscribeForm'

export default {
  name: 'SubscribeInput',
  props: {
      placeholderText: {
          type: String,
          default: 'Label'
      },
      buttonText: {
          type: String,
          default: 'Im a button'
      },
  },
  setup(props: any) {
      const store = useStore()
      const emailInput = ref('')
      const hasError = ref(false)
      const errorMessage = ref('Invalid email address provided')
      const submittedOnce = ref(false)

      const checkInput = () => {
          if(submittedOnce.value) {
              if(emailInput.value === '') {
                  errorMessage.value = 'Email is required'
                  hasError.value = true
              }

              if (!isValidEmail(emailInput.value) && emailInput.value !== '') {
                  errorMessage.value = 'Invalid email address provided'
                  hasError.value = true
              } 
              
              if (isValidEmail(emailInput.value) && emailInput.value !== '') {
                  hasError.value = false
              }
          }
      }

      const subscribeNow = async () => {
          submittedOnce.value = true
          checkInput()

          if (!hasError.value) {
              const subscribeFormDto = new SubscribeFormDto(emailInput.value)
              const sendSubscribeForm = new SendSubscribeForm(subscribeFormDto)
              const sendForm = await sendSubscribeForm.send()

              if (isOk(sendForm.status)) {
                  store.dispatch('subscribe/setFormStatus', true)
              }
          }
      }

      return {
          emailInput,
          hasError,
          errorMessage,
          checkInput,
          subscribeNow,
          submittedOnce,
      }
  }
}
</script>

<style scoped>
.subscribe-input {
  @apply lg:absolute w-full rounded-full lg:pr-36 bg-gray-200 border pl-5 h-[43px]
}

.subscribe-button {
  @apply lg:absolute lg:right-0 md:w-fit w-full bg-primary text-white rounded-full hover:brightness-90 disabled:brightness-95 disabled:text-white h-[43px] px-3
}
</style>