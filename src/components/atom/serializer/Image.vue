<template>
  <div>
    <img :src="parseSanityImage(imgSrc).url()" :alt="imgAlt" />
  </div>
</template>
<script lang="ts">
import { toRefs } from 'vue'
import { parseSanityImage } from '@/js/composable/parseSanityImage'

export default {
  name: 'TheImage',
  props: {
    alt: {
      type: String,
      default: 'Podiem Website'
    },
    asset: {
      type: Object,
      default() {
        return {
          _ref: 'image-c7aa9c7ff2cab6c57df928638dda5eb6e997d351-937x1414-png',
          _type: 'reference'
        }
      }
    }
  },
  setup(props: any) {
    const { alt, asset } = toRefs(props)
    return {
      imgAlt: alt,
      imgSrc: asset,
      parseSanityImage
    }
  }
}
</script>
