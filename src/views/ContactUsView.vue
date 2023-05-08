<template>
  <div class="page-content">
    <section class="hero-banner-light bg-gray-100">
      <div class="s-container py-[50px] lg:py-[80px]">
        <ContactSection />
      </div>
    </section>

    <section class="bg-white py-[100px] xl:pt-[120px]">
      <div class="section-container">
        <!-- <suspense>
          <three-column-image :column-items="threeColumn" />
        </suspense> -->
        <div v-if="threeColumn" class="three-column-section w-full">
          <div class="flex flex-col lg:flex-row lg:gap-x-10 gap-y-10 mb-10">
            <div v-for="(item, id) in threeColumn" :key="id" class="flex-1">
              <template v-if="item.image_panel">
                <img
                  class="rounded-full overflow-hidden w-full max-w-[152px] max-h-[152px] mb-[20px]"
                  :src="parseSanityImage(item.image_panel).url()"
                />
              </template>
              <h3 class="text-black font-bold mb-[20px]">
                {{ item.contentTitle }}
              </h3>

              <div
                class="text-neutral-2 apercu-light prose"
                v-html="toHTML(item.contentText)"
              ></div>
            </div>
          </div>
        </div>
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
import { toHTML } from '@portabletext/to-html'
import { parseSanityImage } from '@/js/composable/parseSanityImage'
import CalloutBlock from '@/components/organism/CalloutBlock.vue'
import ContactSection from '@/components/organism/ContactSection.vue'

import ContactUs from '@/core/application/ContactUs'

export default {
  components: {
    CalloutBlock,
    ContactSection
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

    const columnItems = ref()

    const contactUs = new ContactUs()
    contactUs.getAllData().then((data: any) => {
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

      columnItems.value = [
        data.threeColumn.threeColumnSection.columnSection1!,
        data.threeColumn.threeColumnSection.columnSection2!,
        data.threeColumn.threeColumnSection.columnSection3!
      ]
    })

    return {
      threeColumn: columnItems,
      callout,
      toHTML,
      parseSanityImage
    }
  }
}
</script>
