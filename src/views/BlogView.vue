<template>
  <div class="page-content">
    <section class="hero-banner flex items-center">
      <div class="s-container">
        <HeroBanner :banner="pageBanner.bannerText" :label="pageBanner.bannerLabel" :content="pageBanner.subheaderText"
          :image="pageBanner.imagePanel" :cta-enabled="pageBanner.ctaEnabled" :cta-text="pageBanner.ctaText"
          :cta-redirection="pageBanner.ctaRedirection" />
      </div>
    </section>

    <!-- <section class="bg-gray-100">
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
    </section> -->

    <section class="w-full bg-gray-100 py-[100px]">
      <div class="s-container relative">
        <!-- <div class="blog-nav grid grid-cols-1 lg:grid-cols-2 gap-4 h-[48px] mb-[80px]">
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
        </div> -->

        <div class="blog-result">
          <div class="grid grid-cols-1 gap-y-[30px] lg:grid-cols-3 sxl:grid-cols-4 gap-x-[30px] md:gap-y-[30px]">
            <div v-for="(blog, i) in blogList" :key="i"
              class="bg-white rounded-3xl cursor-pointer p-[40px] shadow-lg hover:shadow-2xl transition-all duration-100 border border-gray-100">
              <div class="image w-full mb-[20px]">
                <img :src="parseSanityImage(blog.image_panel).url()" class="w-full" width="640" height="360" />
              </div>
              <div class="content mb-[25px]">
                <p class="text-primary text-sm mb-[15px] leading-none">
                  {{ _.get(blog, 'articleInfo.readingTime') }}
                </p>
                <div class="max-h-[200px] overflow-hidden mb-[15px] min-h-[200px]">
                  <p class="text-lg text-gray-700 mb-[30px] font-bold">
                    {{ _.get(blog, 'banner_text') }}
                  </p>
                  <div class="flex flex-col gap-1">
                    <h5 class="text-xs font-bold">TAGS:</h5>
                    <a
                      href="javascript:void(0)"
                      class="text-blue-500 hover:underline"
                      :key="id"  
                      v-for="(tag, id) in getTags(_.get(blog, 'articleInfo.blogTags'))"
                      @click="filterByTag(_.get(tag, 'id'))"
                    >
                      {{ _.get(tag, 'title') }}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <button
                  class="bg-primary border border-primary rounded-full text-white hover:brightness-90 hover:bg-primary py-2 px-[25px] text-[16px]"
                  @click="goToArticle(_.get(blog, 'banner_text'), _.get(blog, '_key'))">
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
import { parseSanityImage } from '@/js/composable/parseSanityImage'
import { BLOG_TAGS } from '@/js/BaseConstant'
import SubPageHeroBanner from '@/components/organism/SubPageHeroBanner.vue'
import CalloutBlock from '@/components/organism/CalloutBlock.vue'
import HeroBanner from '@/components/organism/HeroBanner.vue'
import Resource from '@/core/application/Resource'

export default {
  components: {
    CalloutBlock,
    SubPageHeroBanner,
    HeroBanner
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
      const slug = details.replace(/\s+/g, '-')
      const url = `/blog/${slug}`

      router.push(url)
    }

    const getTags = (blogTags: []) => {
      const tags = BLOG_TAGS;

      interface BaseTags {
        id?: number | string,
        title: string
      }

      return blogTags.map((tag: string) => {
        return tags.find((baseTag: BaseTags) => {
          if (baseTag.id === parseInt(tag)) {
            return baseTag.title.toString().toUpperCase()
          }
        })
      })
    }

    const filterByTag = (tag: any) => {
      const blogListCopy = [...allBlogs.value]
      const newBlogList: object[] = []
      blogListCopy.map((data: any, key) => {
        if (data.articleInfo.blogTags.includes(tag.toString())) {
          newBlogList.push(blogListCopy[key])
        }
      })
      blogList.value = newBlogList
    }

    return {
      parseSanityImage,
      pageBanner,
      callout,
      allBlogs,
      blogList,
      blogCateg,
      goToArticle,
      _,
      getTags,
      filterByTag
    }
  }
}
</script>
