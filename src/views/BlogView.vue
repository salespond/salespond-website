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

    <section class="w-full bg-gray-100 py-[100px]">
      <div class="s-container relative">
        <div class="blog-nav grid grid-cols-1 lg:grid-cols-2 gap-4 h-[48px] mb-[80px]">
          <div
            class="flex flex-row justify-between lg:justify-start lg:space-x-[45px] items-center"
          >
            <div
              class="px-1 transition-all duration-100 cursor-pointer border-b-4 border-gray-100 hover:border-primary"
            >
              All
            </div>
            <div
              v-for="(categ, key) in blogCateg"
              :key="key"
              class="px-1 transition-all duration-100 cursor-pointer border-b-4 border-gray-100 hover:border-primary"
            >
              {{ _.get(categ, 'category') }}
            </div>
          </div>

          <div class="flex flex-row">
            <input
              class="w-full lg:w-1/2 lg:ml-auto h-[43px] px-5 bg-gray-300 rounded-full"
              type="text"
              placeholder="Search articles"
            />
          </div>
        </div>

        <div class="blog-result">
          <div
            class="grid grid-cols-1 gap-y-[30px] lg:grid-cols-3 sxl:grid-cols-4 gap-x-[30px] md:gap-y-[30px]"
          >
            <div
              v-for="(blog, i) in blogList"
              :key="i"
              class="bg-white rounded-3xl p-[40px] shadow-lg hover:shadow-2xl transition-all duration-100 border border-gray-100"
            >
              <div class="image w-full mb-[20px]">
                <img src="/public/assets/callout.png" class="w-full" />
              </div>
              <div class="content mb-[25px]">
                <p class="text-primary text-sm mb-[15px] leading-none">
                  {{ _.get(blog, 'articleInfo.readingTime') }}
                </p>
                <div class="max-h-[70px] overflow-hidden mb-[15px] min-h-[60px]">
                  <p class="text-lg text-gray-700">
                    {{ _.get(blog, 'banner_text') }}
                  </p>
                </div>
              </div>

              <div>
                <button
                  class="border border-primary rounded-full text-primary hover:text-white hover:bg-primary py-2 px-[25px] text-[16px]"
                  @click="goToArticle(_.get(blog, 'banner_text'), _.get(blog, '_key'))"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import SubPageHeroBanner from '@/components/organism/SubPageHeroBanner.vue'
import CalloutBlock from '@/components/organism/CalloutBlock.vue'
import Resource from '@/core/application/Resource'

export default {
  components: {
    CalloutBlock,
    SubPageHeroBanner
  },
  setup() {
    const router = useRouter()
    const resource = new Resource()

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

    const callout = reactive({
      bannerText: '',
      textHighlight: '',
      blockContent: {},
      ctaEnabled: false,
      ctaText: '',
      ctaRedirection: '',
      imagePanel: {}
    })

    const allBlogs = ref()
    const blogList = ref()
    const blogCateg = ref()

    resource.getAllData().then((data: any) => {
      pageBanner.bannerLabel = data.heroBanner.banner_label!
      pageBanner.bannerText = data.heroBanner.banner_text!
      pageBanner.subheaderText = data.heroBanner.subheader_text!
      pageBanner.textHighlight = data.heroBanner.text_highlight!
      pageBanner.ctaEnabled = data.heroBanner.cta_enabled!
      pageBanner.ctaText = data.heroBanner.cta_text!
      pageBanner.ctaRedirection = data.heroBanner.cta_redirection!
      pageBanner.imagePanel = data.heroBanner.image_panel!

      callout.bannerText = data.callout.banner_text!
      callout.textHighlight = data.callout.text_highlight!
      callout.blockContent = data.callout.block_content!
      callout.ctaEnabled = data.callout.cta_enabled!
      callout.ctaText = data.callout.cta_text!
      callout.ctaRedirection = data.callout.cta_redirection!
      callout.imagePanel = data.callout.image_panel!

      allBlogs.value = data.blogList!
      blogList.value = data.blogList!
      blogCateg.value = data.blogCategory!
    })

    const goToArticle = (details: any, key: any) => {
      const slug = details.toLowerCase().replace(/\s+/g, '-')
      const url = '/blog/' + key + '/' + slug

      router.push(url)
    }

    return {
      pageBanner,
      callout,
      allBlogs,
      blogList,
      blogCateg,
      goToArticle,
      _
    }
  }
}
</script>
