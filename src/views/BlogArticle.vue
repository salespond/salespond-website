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

    <section class="article bg-white py-[50px] lg:py-[100px]">
      <div class="xs-container">
        <div class="prose mx-auto mb-10" v-html="portableText"></div>
        <div class="max-w-[65ch] mx-auto">
          Tags: <span class="text-blue-700 text-sm">{{ tags }}</span>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 py-[50px] lg:py-[100px]">
      <div class="s-container">
        <div class="blog-result">
          <h2 class="text-3xl font-bold mb-[80px]">More Articles</h2>
          <div
            class="grid grid-cols-1 gap-y-[30px] lg:grid-cols-3 sxl:grid-cols-4 gap-x-[30px] md:gap-y-[30px]"
          >
            <div
              v-for="(featured, i) in featuredArticles"
              :key="i"
              class="bg-white rounded-3xl p-[40px] shadow-lg hover:shadow-2xl transition-all duration-100 border border-gray-100"
            >
              <div class="image w-full mb-[20px]">
                <img
                  :src="parseSanityImage(featured['image_panel']).url()"
                  class="w-full"
                  width="640"
                  height="360"
                />
              </div>
              <div class="content mb-[25px]">
                <p class="text-primary text-sm mb-[15px] leading-none">
                  {{ _.get(featured['articleInfo'], 'readingTime') }}
                </p>
                <div class="max-h-[70px] overflow-hidden mb-[15px] min-h-[60px]">
                  <p class="text-lg text-gray-700">
                    {{ featured['banner_text'] }}
                  </p>
                </div>
              </div>

              <div>
                <button
                  @click="goToArticle(featured['banner_text'], featured['_key'])"
                  class="border border-primary rounded-full text-primary hover:text-white hover:bg-primary py-2 px-[25px] text-[16px]"
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
import dayjs from 'dayjs'
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { parseSanityImage } from '@/js/composable/parseSanityImage'
import { toHTML } from '@portabletext/to-html'
import SubPageHeroBanner from '@/components/organism/SubPageHeroBanner.vue'

import ArticleService from '@/core/application/ArticleService'
import BlogCategoryService from '@/core/application/service/blog/BlogCategoryService'

export default {
  components: {
    SubPageHeroBanner
  },
  setup() {
    const paramId = computed(() => route.params.id)
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const slug = route.params.slug.toString().split('-').join(' ')

    // console.info(store.getters['blog_category/GET_category'])
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

    // const inPageBanner = reactive({
    //     bannerLabel: '',
    //     bannerText: '',
    //     subheaderText: '',
    //     textHighlight: '',
    //     imagePanel: {},
    // })

    const author = ref('')
    const publishingDate = ref('')

    const blogContent = ref({})

    const footerCallout = reactive({
      bannerText: '',
      textHighlight: '',
      calloutImage: {},
      ctaDetails: {}
    })

    const blogCategory = ref([])
    new BlogCategoryService().process().then((data: any) => {
      blogCategory.value = data.map((result: any) => {
        return result.category
      })
    })

    const articleKey = ref('')
    const articleCategory = ref('')
    const featuredArticles = ref([])
    const portableText = ref('')
    const tags = ref('')
    const indexKey = ref('')
    const categoryKey = ref('')

    const limit = ref(3)
    const article = new ArticleService()
    article.setKey(slug)
    const loadData = () => {
      article.process().then((data: any) => {
        console.info(data)
        pageBanner.bannerLabel = data.blogs[0].articleInfo.readingTime! // change this
        pageBanner.bannerText = data.blogs[0].banner_text!
        pageBanner.subheaderText = data.blogs[0].articleInfo.readingTime!
        pageBanner.textHighlight = data.blogs[0].text_highlight!
        pageBanner.imagePanel = data.blogs[0].image_panel!

        author.value = data.blogs[0].articleInfo.publishedBy!
        publishingDate.value = data.blogs[0].articleInfo.datePosted!

        blogContent.value = data.blogs[0].articleInfo.blogContent!

        articleKey.value = data.blogs[0]._key!

        footerCallout.bannerText = data.blogs[0].footerCallout.banner_text!
        footerCallout.textHighlight = data.blogs[0].footerCallout.text_highlight!
        footerCallout.calloutImage = data.blogs[0].footerCallout.image_panel!
        footerCallout.ctaDetails = {
          cta_enabled: data.blogs[0].footerCallout.cta_enabled!,
          cta_text: data.blogs[0].footerCallout.cta_text!,
          cta_redirection: data.blogs[0].footerCallout.cta_redirection!
        }

        const myPortableTextComponents = {
          types: {
            image: ({ value }: any) => '<img src=' + parseSanityImage(value.asset) + ' />'
          }
        }

        portableText.value = toHTML(data.blogs[0].articleInfo.blogContent!, {
          components: myPortableTextComponents
        })

        indexKey.value = data.blogs[0]._key!
        categoryKey.value = data.blogs[0].articleInfo.blogCategoryOption._ref!

        article
          .retrieveFeaturedArticle(categoryKey.value, indexKey.value, limit.value)
          .then((data: any) => {
            featuredArticles.value = data.blogs
            showMore()
          })

        article.retrieveSpecificCategory(categoryKey.value).then((data: any) => {
          articleCategory.value = data.blog_category
        })

        tags.value = data.blogs[0].articleInfo.tags!
      })
    }

    loadData()

    const serializers = {
      types: {
        image: Image
      }
    }

    const goToArticle = (details: string, key: number) => {
      console.info('dent', details)
      const slug = details.toLowerCase().replace(/\s+/g, '-')
      const url = '/blog/' + key + '/' + slug

      router.push(url)
      setTimeout(() => {
        location.reload()
      }, 200)
    }

    const showMore = () => {
      limit.value += 3
    }

    const moveToResources = () => {
      article
        .retrieveFeaturedArticle(categoryKey.value, indexKey.value, limit.value)
        .then((data: any) => {
          featuredArticles.value = data.blogs
          showMore()
        })
    }

    const formatDate = (dateString: string) => {
      const date = dayjs(dateString)
      return date.format('MMMM D, YYYY')
    }

    const formatTags = (tags: string) => {
      // return tags.replaceAll(',', ' ')
      return tags.split(',').join('')
    }

    return {
      pageBanner,
      blogCategory,
      blogContent,
      serializers,
      footerCallout,
      featuredArticles,
      parseSanityImage,
      articleKey,
      articleCategory,
      goToArticle,
      moveToResources,
      author,
      publishingDate,
      formatDate,
      portableText,
      tags,
      formatTags,
      limit,
      _
    }
  }
}
</script>
