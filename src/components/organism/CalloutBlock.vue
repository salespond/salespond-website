<template>
  <div
    v-if="text"
    class="bg-white grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] items-center rounded-[40px] shadow-lg px-[30px] py-[60px] lg:px-[50px] lg:py-[80px]"
  >
    <div class="w-full text-center">
      <img
        :src="parseSanityImage(image).url()"
        alt="Salespond fish"
        class="w-full mb-[30px] lg:mb-0 lg:max-w-[450px] lg:mx-auto"
        width="640" height="360"
      />
    </div>
    <div>
      <HeadingWithHighlights
        :text="text"
        :highlight="highlight"
        text-location="home"
        class="font-bold text-black mb-[20px]"
      />
      <p class="text-gray-600 mb-[20px] prose" v-html="toHTML(content)"></p>
      <ButtonPrimary v-if="ctaEnabled" :text="ctaText" :link-to="ctaRedirection" />
    </div>
  </div>
</template>
<script lang="ts">
import { toHTML } from '@portabletext/to-html'
import { parseSanityImage } from '@/js/composable/parseSanityImage'
import ButtonPrimary from '../atom/button/ButtonPrimary.vue'
import HeadingWithHighlights from '@/components/atom/text/HeadingWithHighlights.vue'

export default {
  components: {
    ButtonPrimary,
    HeadingWithHighlights
  },
  props: {
    text: {
      type: String,
      default: 'Callout Banner'
    },
    highlight: {
      type: String,
      default: 'Banner'
    },
    content: {
      type: Object,
      default() {
        return {
          _key: 'eb2d42c61833',
          _type: 'block',
          children: [
            {
              _key: '1e97bab5656b0',
              _type: 'span',
              marks: [],
              text: 'Our best practice approach will maximise results by bridging the gap between marketing and salesxx.'
            }
          ],
          markDefs: [],
          style: 'normal'
        }
      }
    },
    ctaText: {
      type: String,
      default: 'Learn More'
    },
    ctaRedirection: {
      type: String,
      default: '#'
    },
    ctaEnabled: {
      type: Boolean,
      default: true
    },
    image: {
      type: Object,
      default() {
        return {
          _type: 'image',
          alt: 'Salespond Website',
          asset: {
            _ref: 'image-49e0fdcdfe515584914a059626e5fa0042a83763-5302x3659-jpg',
            _type: 'reference'
          }
        }
      }
    }
  },
  setup(props: any) {
    // const {
    //   text,
    //   highlight,
    //   content,
    //   ctaText,
    //   ctaRedirection,
    //   ctaEnabled,
    //   image
    // } = toRefs(props)

    return {
      parseSanityImage,
      toHTML
    }
  }
}
</script>
<style lang=""></style>
