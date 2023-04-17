<template>
  <div class="grid grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-[100px]">
    <div class="lg:col-span-4">
      <div class="h-full flex flex-col items-start justify-center">
        <p class="text-sm text-primary font-bold">Contact Us</p>
        <h1 class="text-5xl lg:text-7xl font-bold text-black pr-3 mb-2">
          Keep in touch with us
        </h1>
        <p class="text-gray-500 mb-[20px]">
          Get in touch today to see why some of the world’s leading companies trust us to
          deliver reliable and professional results.
        </p>
      </div>
    </div>
    <div class="lg:col-span-3">
      <ContactForm />
    </div>
  </div>
</template>
<script lang="ts">
import ContactForm from '@/components/molecule/ContactForm.vue'

export default {
  components: {
    ContactForm
  }
}
</script>
<style lang="">
  
</style>