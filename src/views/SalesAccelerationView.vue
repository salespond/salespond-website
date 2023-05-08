<template>
  <div class="page-content">
    <section class="hero-banner-light flex items-center">
      <div class="s-container">
        <SubPageHeroBanner
          :banner="pageBanner.bannerText"
          :label="pageBanner.bannerLabel"
          :highlight="pageBanner.textHighlight"
          :content="pageBanner.subheaderText"
          :cta-enabled="pageBanner.ctaEnabled"
          :cta-text="pageBanner.ctaText"
          :cta-redirection="pageBanner.ctaRedirection"
          :image="pageBanner.imagePanel"
        />
      </div>
    </section>

    <section
      v-for="(info, key) in twoColumnInfo"
      :key="key"
      class="flex items-center"
      :class="[
        { 'bg-template-gradient': !get(info, 'image_section.image_location_toggle') },
        { 'bg-template-light': get(info, 'image_section.image_location_toggle') }
      ]"
    >
      <div class="s-container">
        <div
          class="grid grid-cols-1 lg:items-center py-[50px] lg:py-[120px]"
          :class="{ 'text-white': !get(info, 'image_section.image_location_toggle') }"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-x-[100px] lg:mb-[50px]">
            <div class="mb-[30px]">
              <h2 class="text-primary font-bold text-5xl mb-[30px]">
                {{ get(info, 'banner_text') }}
              </h2>
              <p>
                {{ get(info, 'subheader_text') }}
              </p>
            </div>
            <div></div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-x-[100px]">
            <div class="rounded-xl overflow-hidden w-full">
              <img
                :src="parseSanityImage(get(info, 'image_section.image_panel')).url()"
                :alt="get(info, 'image_section.image_panel.alt')"
              />
            </div>

            <div
              class="flex flex-col gap-5"
              :class="{ 'order-first': !get(info, 'image_section.image_location_toggle') }"
            >
              <div
                v-html="contentChange(get(info, 'block_content'))"
                class="prose info-content"
                :class="{ 'isDark': !get(info, 'image_section.image_location_toggle') }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100">
      <div class="s-container py-[50px] lg:py-[80px]">
        <ContactSection />
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
import get from 'lodash/get'
import { ref, reactive } from 'vue'
import { toHTML } from '@portabletext/to-html'
import { parseSanityImage } from '@/js/composable/parseSanityImage'
import CalloutBlock from '@/components/organism/CalloutBlock.vue'
import ContactSection from '@/components/organism/ContactSection.vue'
import SubPageHeroBanner from '@/components/organism/SubPageHeroBanner.vue'
import SalesAcceleration from '@/core/application/SalesAcceleration'

interface SalesAccelerationModel {
  heroBanner: {
    banner_label?: string
    banner_text?: string
    text_highlight?: string
    subheader_text?: string
    cta_enabled?: boolean
    cta_text?: string
    cta_redirection?: string
    image_panel?: object
  }
  twoColumnInfo?: any
  callout: {
    banner_text?: string
    text_highlight?: string
    block_content?: object
    cta_enabled?: boolean
    image_panel?: object
    cta_text?: string
    cta_redirection?: string
  }
}

export default {
  components: {
    SubPageHeroBanner,
    CalloutBlock,
    ContactSection
  },
  setup() {
    const pageBanner = reactive({
      bannerLabel: '',
      bannerText: '',
      textHighlight: '',
      subheaderText: '',
      ctaEnabled: false,
      ctaText: '',
      ctaRedirection: '',
      imagePanel: {}
    })

    const twoColumnInfo = ref([])

    const callout = reactive({
      bannerText: '',
      textHighlight: '',
      blockContent: {},
      ctaEnabled: false,
      ctaText: '',
      ctaRedirection: '',
      imagePanel: {}
    })
    
    const salesAcceleration = new SalesAcceleration()
    salesAcceleration.getAllData().then((data: SalesAccelerationModel) => {
      pageBanner.bannerLabel = data.heroBanner.banner_label!
      pageBanner.bannerText = data.heroBanner.banner_text!
      pageBanner.subheaderText = data.heroBanner.subheader_text!
      pageBanner.textHighlight = data.heroBanner.text_highlight!
      pageBanner.ctaEnabled = data.heroBanner.cta_enabled!
      pageBanner.ctaText = data.heroBanner.cta_text!
      pageBanner.ctaRedirection = data.heroBanner.cta_redirection!
      pageBanner.imagePanel = data.heroBanner.image_panel!

      twoColumnInfo.value = data.twoColumnInfo

      callout.bannerText = data.callout.banner_text!
      callout.textHighlight = data.callout.text_highlight!
      callout.blockContent = data.callout.block_content!
      callout.ctaEnabled = data.callout.cta_enabled!
      callout.ctaText = data.callout.cta_text!
      callout.ctaRedirection = data.callout.cta_redirection!
      callout.imagePanel = data.callout.image_panel!

      
    })

    const contentChange = (content: any) => {
      const myPortableTextComponents = {
          types: {
            image: ({ value }: any) => '<img src=' + parseSanityImage(value.asset) + ' />'
          }
        }

        const rawHtml = toHTML(content, {
          components: myPortableTextComponents
        })

      return rawHtml
        .split('<h4>')
        .join('<h4><hr class="mb-3 border-[3px] border-primary w-[50px]">')
    }

    return {
      pageBanner,
      twoColumnInfo,
      callout,
      toHTML,
      parseSanityImage,
      get,
      contentChange
    }
  }
}
</script>
<style class="scoped">
.info-content h1 > strong,
h2 > strong,
h3 > strong,
h4 > strong {
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 30px;
}

.info-content p {
  margin-bottom: 40px;
}
</style>
