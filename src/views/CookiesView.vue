<template>
  <div class="page-content">
    <div class="s-container">
      <template v-if="pageInfo">
        <section class="mx-auto px-[25px] mt-[88px] lg:mt-[200px] md:mb-[50px] mb-[50px]">
          <simple-banner-title :pageTitle="pageInfo.pageBanner" :customClass="'mb-[20px]'" />

          <div class="flex flex-col items-center justify-center">
            <p class="m-0 text-neutral-2 leading-none text-center mb-[5px] prose">
              {{ pageInfo.pageSubheader }}
            </p>
          </div>
        </section>

        <section class="flex flex-row pb-[100px]">
          <div class="flex-none w-[350px]">
            <aside class="w-full border-r" aria-label="Sidebar">
              <div class="py-4 px-3 rounded w-full">
                <ul class="space-y-2">
                  <li v-for="(item, key) in contentItems" :key="key">
                    <div
                      @click="scrollTo(item.link)"
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer"
                    >
                      <span class="ml-3">{{ item.data }}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>

          <div class="flex-1">
            <div v-if="pageInfo.content" class="max-w-none w-full lg:px-10 prose text-justify">
              <div v-html="portableText"></div>
            </div>
          </div>
        </section>
      </template>
      <template v-else>
        <section class="h-screen flex items-center">
          <full-text-loading />
        </section>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import _ from 'lodash'
import { ref, reactive, nextTick } from 'vue'
import { toHTML } from '@portabletext/to-html'
import { parseSanityImage } from '@/js/composable/parseSanityImage'
import SimpleBannerTitle from '@/components/atom/text/SimpleBannerTitle.vue'
import FullTextLoading from '@/components/atom/loading/FullTextLoading.vue'
import Image from '@/components/atom/serializer/Image.vue'

import Cookies from '@/core/application/Cookies'

interface UtilityPageModel {
  bannerText?: string
  subheaderText?: object
  pageContent?: object
}

export default {
  components: {
    SimpleBannerTitle,
    FullTextLoading
  },
  setup() {
    const open = ref(false)
    const pageInfo = reactive({
      pageBanner: '',
      pageSubheader: {},
      content: {}
    })

    const contentItems: Array<any> = []
    const portableText = ref('')

    const cookies = new Cookies()
    cookies.getAllData().then(async (data: any) => {
      pageInfo.pageBanner = data.banner_text!
      pageInfo.pageSubheader = data.subheader_text!
      pageInfo.content = data.pageContent!

      for (const key in data.pageContent!) {
        if (['h1', 'h2'].includes(data.pageContent[key].style)) {
          const text = data.pageContent[key].children[0].text
          contentItems.push({
            data: text,
            link: '#' + _.kebabCase(text)
          })
        }
      }

      const myPortableTextComponents = {
        types: {
          image: ({ value }: any) => '<img src=' + parseSanityImage(value.asset).url() + ' />'
        }
      }

      portableText.value = toHTML(data.pageContent, { components: myPortableTextComponents })

      await nextTick()
      const heading = document.getElementsByTagName('h2')
      contentItems.forEach((value: { data?: string }, index) => {
        heading[index].setAttribute('id', _.kebabCase(value.data))
      })
    })

    const scrollTo = (link: any) => {
      document.querySelector(link).scrollIntoView({
        behavior: 'smooth'
      })
    }

    const serializers = {
      types: {
        image: Image
      }
    }

    return {
      open,
      pageInfo,
      contentItems,
      scrollTo,
      serializers,
      portableText
    }
  }
}
</script>
<style scoped>
.prose :where(a) {
  @apply text-primary;
}

.prose :where(p) {
  @apply mb-[20px];
}
</style>
