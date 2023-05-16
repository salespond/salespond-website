<template>
  <div class="grid grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-[100px]">
    <div class="lg:col-span-4" data-aos="fade-up" data-aos-delay="200" data-aos-mirror="true">
      <div class="h-full flex flex-col items-start justify-center">
        <p class="text-sm text-primary font-bold">{{ contactInfo.bannerLabel }}</p>
        <h1 class="text-5xl lg:text-7xl font-bold pr-3 mb-2">
          {{ contactInfo.bannerText }}
        </h1>
        <p class="text-white mb-[20px] prose" v-html="toHTML(block)"></p>
      </div>
    </div>
    <div class="lg:col-span-3" data-aos="fade-up" data-aos-delay="400" data-aos-mirror="true">
      <ContactForm />
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref } from 'vue'
import { toHTML } from '@portabletext/to-html'
import ContactForm from '@/components/molecule/ContactForm.vue'
import ContactUs from '@/core/application/ContactUs'

import type ContactUsModel from '@/core/domain/model/ContactUsModel'

export default {
  components: {
    ContactForm
  },
  setup() {
    const contactInfo = reactive({
      bannerText: '',
      bannerLabel: ''
    })
    const block = ref()

    const contactUs = new ContactUs()
    contactUs.getAllData().then((data: ContactUsModel) => {
      contactInfo.bannerText = data.contactUsBanner.banner_text!
      contactInfo.bannerLabel = data.contactUsBanner.banner_label!
      block.value = data.contactUsBanner.block_content!
    })

    return {
      contactInfo,
      toHTML,
      block
    }
  }
}
</script>
