<template>
  <div class="page-content">
    <section class="hero-banner flex items-center">
      <div class="s-container grid grid-cols-1 lg:grid-cols-2 lg:items-center">
        <HeroBanner
          :banner="homeBanner.bannerText"
          :label="homeBanner.bannerLabel"
          :content="homeBanner.subheaderText"
          :image="homeBanner.imagePanel"
          :cta-enabled="homeBanner.ctaEnabled"
          :cta-text="homeBanner.ctaText"
          :cta-redirection="homeBanner.ctaRedirection"
        />
      </div>
    </section>

    <section class="bg-gray-100">
      <div
        class="s-container min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] items-center justify-center relative"
      >
        <TwoColumn
          :banner-text="twoColumn1.bannerText"
          :content="twoColumn1.blockContent"
          :cta1="twoColumn1.cta1"
          :cta2="twoColumn1.cta2"
          :image="twoColumn1.imageSection"
        />
      </div>
    </section>

    <section class="bg-template-gradient">
      <div class="s-container py-[50px] flex flex-col gap-y-[50px]">
        <div
          class="min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] items-center justify-center"
        >
          <TwoColumn
            :banner-text="twoColumn2.bannerText"
            :content="twoColumn2.blockContent"
            :cta1="twoColumn2.cta1"
            :cta2="twoColumn2.cta2"
            :image="twoColumn2.imageSection"
          />
        </div>
        <div
          class="min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] items-center justify-center"
        >
          <TwoColumn
            :banner-text="twoColumn3.bannerText"
            :content="twoColumn3.blockContent"
            :cta1="twoColumn3.cta1"
            :cta2="twoColumn3.cta2"
            :image="twoColumn3.imageSection"
          />
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
import { reactive } from 'vue'
import CalloutBlock from '@/components/organism/CalloutBlock.vue'
import ContactSection from '@/components/organism/ContactSection.vue'
import HeroBanner from '@/components/organism/HeroBanner.vue'
import TwoColumn from '@/components/organism/TwoColumn.vue'
import type HomeModel from '@/core/domain/model/HomeModel'
import { parseSanityImage } from '@/js/composable/parseSanityImage'
import Home from '@/core/application/Home'

export default {
  components: {
    CalloutBlock,
    ContactSection,
    HeroBanner,
    TwoColumn
  },
  setup() {
    const homeBanner = reactive({
      bannerLabel: '',
      bannerText: '',
      subheaderText: '',
      ctaEnabled: true,
      ctaText: '',
      ctaRedirection: '',
      imagePanel: {}
    })

    const twoColumn1 = reactive({
      bannerText: '',
      blockContent: {},
      cta1: {},
      cta2: {},
      imageSection: {}
    })

    const twoColumn2 = reactive({
      bannerText: '',
      blockContent: {},
      cta1: {},
      cta2: {},
      imageSection: {}
    })

    const twoColumn3 = reactive({
      bannerText: '',
      blockContent: {},
      cta1: {},
      cta2: {},
      imageSection: {}
    })

    const callout = reactive({
      bannerText: '',
      textHighlight: '',
      blockContent: {},
      ctaEnabled: false,
      ctaText: '',
      ctaRedirection: '',
      imagePanel: {}
    })

    const home = new Home()
    home.getAllData().then((data: HomeModel) => {
      homeBanner.bannerLabel = data.homeBanner.banner_label!
      homeBanner.bannerText = data.homeBanner.banner_text!
      homeBanner.subheaderText = data.homeBanner.subheader_text!
      homeBanner.ctaEnabled = data.homeBanner.cta_enabled!
      homeBanner.ctaText = data.homeBanner.cta_text!
      homeBanner.ctaRedirection = data.homeBanner.cta_redirection!
      homeBanner.imagePanel = data.homeBanner.image_panel!

      twoColumn1.bannerText = data.twoColumnFirstSection.banner_text!
      twoColumn1.blockContent = data.twoColumnFirstSection.block_content!
      twoColumn1.cta1 = data.twoColumnFirstSection.cta_1!
      twoColumn1.cta2 = data.twoColumnFirstSection.cta_2!
      twoColumn1.imageSection = data.twoColumnFirstSection.image_section!

      twoColumn2.bannerText = data.twoColumnSecondSection.banner_text!
      twoColumn2.blockContent = data.twoColumnSecondSection.block_content!
      twoColumn2.cta1 = data.twoColumnSecondSection.cta_1!
      twoColumn2.cta2 = data.twoColumnSecondSection.cta_2!
      twoColumn2.imageSection = data.twoColumnSecondSection.image_section!

      twoColumn3.bannerText = data.twoColumnThirdSection.banner_text!
      twoColumn3.blockContent = data.twoColumnThirdSection.block_content!
      twoColumn3.cta1 = data.twoColumnThirdSection.cta_1!
      twoColumn3.cta2 = data.twoColumnThirdSection.cta_2!
      twoColumn3.imageSection = data.twoColumnThirdSection.image_section!

      callout.bannerText = data.homeCallout.banner_text!
      callout.textHighlight = data.homeCallout.text_highlight!
      callout.blockContent = data.homeCallout.block_content!
      callout.ctaEnabled = data.homeCallout.cta_enabled!
      callout.ctaText = data.homeCallout.cta_text!
      callout.ctaRedirection = data.homeCallout.cta_redirection!
      callout.imagePanel = data.homeCallout.image_panel!
    })

    return {
      parseSanityImage,
      homeBanner,
      twoColumn1,
      twoColumn2,
      twoColumn3,
      callout
    }
  }
}
</script>
