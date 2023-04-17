<template>
  <div class="page-content">
    <section class="hero-banner flex items-center">
      <div class="s-container grid grid-cols-1 lg:grid-cols-2 lg:items-center">
        <div class="py-[80px]">
          <p class="text-sm text-primary font-bold">{{ homeBanner.banner_label }}</p>
          <h1 class="text-5xl lg:text-7xl font-bold text-white pr-3 mb-2">
            {{ homeBanner.banner_text }}
          </h1>
          <p class="text-gray-500 mb-[20px]">
            {{ homeBanner.subheader_text }}
          </p>

          <ButtonPrimary :text="homeBanner.cta_text" :link-to="homeBanner.cta_redirection" />
        </div>
        <img :src="parseSanityImage(homeBanner.image_panel).url()" alt="" />
      </div>
    </section>

    <section class="bg-gray-100">
      <div class="s-container min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] items-center justify-center relative">
        <TwoColumn
          :banner-text="twoColumn1.banner_text" 
          :content="twoColumn1.block_content"
          :cta1="twoColumn1.cta_1"
          :cta2="twoColumn1.cta_2"
          :image="twoColumn1.image_section"
        />
      </div>
    </section>

    <section class="bg-template-gradient">
      <div class="s-container py-[50px] flex flex-col gap-y-[50px]">
        <div
          class="min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] items-center justify-center"
        >
          <!-- <img src="/public/assets/channel.png" alt="Salespond fish" class="opacity-50 mb-[30px]" />
          <div>
            <h2 class="text-6xl lg:text-7xl font-bold text-primary pr-3 mb-2">Channel</h2>
            <p class="text-gray-300 mb-[20px]">
              If your business sells via partners or the channel, SalesPond has many years of
              assisting to drive meaningful conversations and pipeline into your target market. If
              you need more partners, we can help there too.
            </p>
            <ButtonPrimary text="Go to Page" />
          </div> -->
          <TwoColumn
            :banner-text="twoColumn2.banner_text" 
            :content="twoColumn2.block_content"
            :cta1="twoColumn2.cta_1"
            :cta2="twoColumn2.cta_2"
            :image="twoColumn2.image_section"
          />
        </div>
        <div
          class="min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] items-center justify-center"
        >
          <TwoColumn
            :banner-text="twoColumn3.banner_text" 
            :content="twoColumn3.block_content"
            :cta1="twoColumn3.cta_1"
            :cta2="twoColumn3.cta_2"
            :image="twoColumn3.image_section"
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
      <div class="callout-container py-[50px]">
        <div
          class="bg-white grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] items-center rounded-xl shadow-lg px-[30px] py-[60px] lg:p-[50px]"
        >
          <div class="w-full text-center">
            <img
              src="/public/assets/callout.png"
              alt="Salespond fish"
              class="w-full mb-[30px] lg:mb-0 lg:max-w-[450px] lg:mx-auto"
            />
          </div>
          <div>
            <HeadingWithHighlights
              text="Sample Callout"
              highlight="Callout"
              text-location="home"
              class="font-bold text-black mb-[20px]"
            />
            <p class="text-gray-600 mb-[20px]">
              Don’t waste valuable time and money trying to talk to the wrong audience. The most
              reliable data inthe world is custom-built for your target market.
            </p>
            <ButtonPrimary text="Go to Page" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
import ButtonPrimary from '@/components/atom/button/ButtonPrimary.vue'
import ContactSection from '@/components/organism/ContactSection.vue'
import HeadingWithHighlights from '@/components/atom/text/HeadingWithHighlights.vue'
import TwoColumn from '@/components/organism/TwoColumn.vue'
import type HomeModel from '@/core/domain/model/HomeModel'
import { parseSanityImage } from '@/js/composable/parseSanityImage'
import Home from '@/core/application/Home'

export default {
  components: {
    ButtonPrimary,
    ContactSection,
    HeadingWithHighlights,
    TwoColumn
  },
  setup() {
    const homeBanner = reactive({
      banner_label: '',
      banner_text: '',
      subheader_text: '',
      cta_text: '',
      cta_redirection: '',
      image_panel: {}
    })

    const twoColumn1 = reactive({
      banner_text: '',
      block_content: {},
      cta_1: {},
      cta_2: {},
      image_section: {}
    })

    const twoColumn2 = reactive({
      banner_text: '',
      block_content: {},
      cta_1: {},
      cta_2: {},
      image_section: {}
    })

    const twoColumn3 = reactive({
      banner_text: '',
      block_content: {},
      cta_1: {},
      cta_2: {},
      image_section: {}
    })

    const home = new Home()
    home.getAllData().then((data: HomeModel) => {
      homeBanner.banner_label = data.homeBanner.banner_label!
      homeBanner.banner_text = data.homeBanner.banner_text!
      homeBanner.subheader_text = data.homeBanner.subheader_text!
      homeBanner.cta_text = data.homeBanner.cta_text!
      homeBanner.cta_redirection = data.homeBanner.cta_redirection!
      homeBanner.image_panel = data.homeBanner.image_panel!

      twoColumn1.banner_text = data.twoColumnFirstSection.banner_text!
      twoColumn1.block_content = data.twoColumnFirstSection.block_content!
      twoColumn1.cta_1 = data.twoColumnFirstSection.cta_1!
      twoColumn1.cta_2 = data.twoColumnFirstSection.cta_2!
      twoColumn1.image_section = data.twoColumnFirstSection.image_section!

      twoColumn2.banner_text = data.twoColumnSecondSection.banner_text!
      twoColumn2.block_content = data.twoColumnSecondSection.block_content!
      twoColumn2.cta_1 = data.twoColumnSecondSection.cta_1!
      twoColumn2.cta_2 = data.twoColumnSecondSection.cta_2!
      twoColumn2.image_section = data.twoColumnSecondSection.image_section!

      twoColumn3.banner_text = data.twoColumnThirdSection.banner_text!
      twoColumn3.block_content = data.twoColumnThirdSection.block_content!
      twoColumn3.cta_1 = data.twoColumnThirdSection.cta_1!
      twoColumn3.cta_2 = data.twoColumnThirdSection.cta_2!
      twoColumn3.image_section = data.twoColumnThirdSection.image_section!

      console.info(data)
    })

    return {
      parseSanityImage,
      homeBanner,
      twoColumn1,
      twoColumn2,
      twoColumn3
    }
  }
}
</script>
