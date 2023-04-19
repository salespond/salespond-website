<template>
  <div v-if="banner" class="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
    <div class="py-[80px]">
      <p class="text-sm text-primary font-bold">{{ label }}</p>
      <HeadingWithHighlights class="mb-2" text="Sales Acceleration" highlight="Acceleration" />
      <p class="text-gray-500 mb-[20px]">
        {{ content }}
      </p>

      <ButtonPrimary v-if="ctaEnabled" :text="ctaText" :link-to="ctaRedirection" />
    </div>
    <img :src="parseSanityImage(image).url()" :alt="image.alt" />
  </div>
</template>
<script lang="ts">
import { parseSanityImage } from '@/js/composable/parseSanityImage'
import ButtonPrimary from '../atom/button/ButtonPrimary.vue'
import HeadingWithHighlights from '../atom/text/HeadingWithHighlights.vue'

export default {
  components: {
    ButtonPrimary,
    HeadingWithHighlights
  },
  props: {
    banner: {
      type: String,
      default: 'Banner text'
    },
    label: {
      type: String,
      default: 'Banner label'
    },
    content: {
      type: String,
      default: 'Banner content'
    },
    ctaEnabled: {
      type: Boolean,
      default: true
    },
    ctaText: {
      type: String,
      default: 'CTA text'
    },
    ctaRedirection: {
      type: String,
      default: '#'
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
  setup() {
    return {
      parseSanityImage
    }
  }
}
</script>
