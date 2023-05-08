<template>
  <div class="page-content">
    <section class="hero-banner flex items-center">
      <div class="s-container">
        <HeroBanner
          :banner="banner.bannerText"
          :label="banner.bannerLabel"
          :content="banner.subheaderText"
          :image="banner.imagePanel"
          :cta-enabled="banner.ctaEnabled"
          :cta-text="banner.ctaText"
          :cta-redirection="banner.ctaRedirection"
        />
      </div>
    </section>

    <section class="min-h-screen bg-gray-100">
      <div
        class="xs-container min-h-screen py-[50px] grid grid-cols-1 lg:grid-cols-2 items-center justify-center"
      >
        <div class="h-full flex items-center justify-center">
          <img
            :src="parseSanityImage(companySeal.imagePanel).url()"
            class="w-[300px]"
            :alt="_.get(companySeal, 'imagePanel.alt')"
          />
        </div>
        <div class="">
          <p class="text-primary font-bold">{{ companySeal.bannerLabel }}</p>
          <h1 class="text-6xl font-bold leading-none">
            {{ companySeal.bannerText }}
          </h1>
          <p class="text-gray-500">
            {{ companySeal.subheaderText }}
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="s-container">
        <div class="h-full py-[50px] lg:py-[120px]">
          <div class="mb-[50px]">
            <p class="text-primary font-bold">{{ twoColumnStory.bannerLabel }}</p>
            <sub-heading-with-highlights
              :text="twoColumnStory.bannerText"
              :highlight="twoColumnStory.textHighlight"
            />
          </div>
          <div class="h-full grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-start">
            <div v-if="column1">
              <hr class="mb-[20px] border-[3px] border-primary w-[50px]" />
              <h2 class="text-2xl font-bold mb-[10px]">
                {{ _.get(column1, 'twoColumnContentTitle') }}
              </h2>
              <div
                class="text-gray-500 mb-[20px] prose"
                v-html="toHTML(column1.twoColumnContentText)"
              ></div>
            </div>

            <div v-if="column2">
              <hr class="mb-[20px] border-[3px] border-primary w-[50px]" />
              <h2 class="text-2xl font-bold mb-[10px]">
                {{ _.get(column2, 'twoColumnContentTitle') }}
              </h2>
              <div
                class="text-gray-500 mb-[20px] prose"
                v-html="toHTML(column2.twoColumnContentText)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100">
      <div class="s-container">
        <div class="h-full py-[50px] lg:py-[120px]">
          <div class="mb-[50px]">
            <p class="text-primary font-bold">{{ clientSection.bannerLabel }}</p>
            <sub-heading-with-highlights
              :text="clientSection.bannerText"
              :highlight="clientSection.textHighlight"
            />
          </div>
          <div
            v-if="clientSection.icons"
            class="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] items-start"
          >
            <div
              v-for="(client, key) in clientSection.icons"
              :key="key"
              class="overflow-hidden cursor-pointer hover:shadow-lg"
            >
              <img
                :src="parseSanityImage(client['image_panel']).url()"
                class="w-full"
                :alt="_.get(client, 'image_panel.alt')"
              />
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
import * as _ from 'lodash'
import { toHTML } from '@portabletext/to-html'
import { ref, reactive } from 'vue'
import { parseSanityImage } from '@/js/composable/parseSanityImage'
import CalloutBlock from '@/components/organism/CalloutBlock.vue'
import HeroBanner from '@/components/organism/HeroBanner.vue'
import SubHeadingWithHighlights from '@/components/atom/text/SubHeadingWIthHighlights.vue'

import Company from '@/core/application/Company'

export default {
  components: {
    CalloutBlock,
    HeroBanner,
    SubHeadingWithHighlights
  },
  setup() {
    const banner = reactive({
      bannerLabel: '',
      bannerText: '',
      subheaderText: '',
      ctaEnabled: true,
      ctaText: '',
      ctaRedirection: '',
      imagePanel: {}
    })

    const companySeal = reactive({
      bannerLabel: '',
      bannerText: '',
      subheaderText: '',
      imagePanel: {}
    })

    const twoColumnStory = reactive({
      bannerLabel: '',
      bannerText: '',
      textHighlight: '',
      twoColumnSection: {}
    })

    const clientSection = reactive({
      bannerLabel: '',
      bannerText: '',
      textHighlight: '',
      icons: {}
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

    const column1 = ref()
    const column2 = ref()

    const company = new Company()
    company.getAllData().then((data: any) => {
      banner.bannerLabel = data.heroBanner.banner_label!
      banner.bannerText = data.heroBanner.banner_text!
      banner.subheaderText = data.heroBanner.subheader_text!
      banner.ctaEnabled = data.heroBanner.cta_enabled!
      banner.ctaText = data.heroBanner.cta_text!
      banner.ctaRedirection = data.heroBanner.cta_redirection!
      banner.imagePanel = data.heroBanner.image_panel!

      companySeal.bannerLabel = data.twoColumnSimple.banner_label!
      companySeal.bannerText = data.twoColumnSimple.banner_text!
      companySeal.subheaderText = data.twoColumnSimple.subheader_text!
      companySeal.imagePanel = data.twoColumnSimple.image_panel!

      twoColumnStory.bannerLabel = data.twoColumnText.banner_label!
      twoColumnStory.bannerText = data.twoColumnText.banner_text!
      twoColumnStory.textHighlight = data.twoColumnText.text_highlight!
      twoColumnStory.twoColumnSection = data.twoColumnText.twoColumnSection!

      clientSection.bannerLabel = data.clientSection.banner_label!
      clientSection.bannerText = data.clientSection.banner_text!
      clientSection.textHighlight = data.clientSection.text_highlight!
      clientSection.icons = data.clientSection.serviceIcon!

      callout.bannerText = data.callout.banner_text!
      callout.textHighlight = data.callout.text_highlight!
      callout.blockContent = data.callout.block_content!
      callout.ctaEnabled = data.callout.cta_enabled!
      callout.ctaText = data.callout.cta_text!
      callout.ctaRedirection = data.callout.cta_redirection!
      callout.imagePanel = data.callout.image_panel!

      column1.value = _.get(data.twoColumnText.twoColumnSection, 'twoColumnSection1')
      column2.value = _.get(data.twoColumnText.twoColumnSection, 'twoColumnSection2')
    })

    return {
      banner,
      companySeal,
      twoColumnStory,
      clientSection,
      callout,
      column1,
      column2,
      toHTML,
      parseSanityImage,
      _
    }
  }
}
</script>
