<template>
  <div class="page-content">
    <section class="hero-banner-light bg-gray-100">
      <div class="s-container py-[50px] lg:py-[80px]">
        <ContactSection />
      </div>
    </section>

    <section class="bg-white py-[100px] xl:pt-[120px]">
      <div class="section-container">
        <suspense>
          <three-column-image :column-items="threeColumn" />
        </suspense>
      </div>
    </section>

    <section class="bg-gray-100">
      <div class="callout-container py-[50px] lg:py-[80px]">
        <CalloutBlock
          :text="callout.bannerText"
          :highlight="callout.textHighlight"
          :content="callout.blockContent"
          :cta-enabled="callout.ctaEnabled"
          :cta-text="callout.ctaText"
          :cta-redirection="callout.ctaRedirection"
          :image="callout.imagePanel"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'
import CalloutBlock from '@/components/organism/CalloutBlock.vue'
import ContactSection from '@/components/organism/ContactSection.vue'
import ThreeColumnImage from '@/components/organism/ThreeColumnImage.vue'

import ContactUs from '@/core/application/ContactUs'

export default {
  components: {
    CalloutBlock,
    ContactSection,
    ThreeColumnImage
  },
  setup() {
    const section1 = ref()
    const section2 = ref()
    const section3 = ref()

    const callout = reactive({
      bannerText: '',
      textHighlight: '',
      blockContent: {},
      ctaEnabled: false,
      ctaText: '',
      ctaRedirection: '',
      imagePanel: {}
    })

    const contactUs = new ContactUs()
    contactUs.getAllData().then((data: any) => {
      console.info(data)

      section1.value = data.threeColumn.threeColumnSection.columnSection1!
      section2.value = data.threeColumn.threeColumnSection.columnSection2!
      section3.value = data.threeColumn.threeColumnSection.columnSection3!

      callout.bannerText = data.callout.banner_text!
      callout.textHighlight = data.callout.text_highlight!
      callout.blockContent = data.callout.block_content!
      callout.ctaEnabled = data.callout.cta_enabled!
      callout.ctaText = data.callout.cta_text!
      callout.ctaRedirection = data.callout.cta_redirection!
      callout.imagePanel = data.callout.image_panel!
    })

    return {
      threeColumn: [section1, section2, section3],
      callout
    }
  }
}
</script>
