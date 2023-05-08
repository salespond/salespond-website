<template>
  <div v-if="banner" class="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
    <div class="py-[80px]">
      <p class="text-sm text-primary font-bold">{{ label }}</p>
      <h1 class="font-bold text-white pr-3 mb-2" :class="additionalClass">
        {{ banner }}
      </h1>
      <p class="text-gray-400 mb-[20px]">
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

export default {
  components: {
    ButtonPrimary
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
    },
    bannerSize: {
      type: String,
      default: 'default'
    }
  },
  setup(props: any) {
    const additionalClass = props.bannerSize === 'xl' ? 'text-5xl lg:text-8xl' : 'text-5xl lg:text-7xl'
    
    return {
      parseSanityImage,
      additionalClass
    }
  }
}
</script>
