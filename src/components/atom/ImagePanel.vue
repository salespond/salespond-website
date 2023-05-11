<template>
  <img
    :src="parseSanityImage(image).url"
    :alt="image.alt"
    class="w-full"
    width="640"
    height="360"
  />
</template>
<script lang="ts">
import { parseSanityImage } from '@/js/composable/parseSanityImage'

export default {
  props: {
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
<style lang=""></style>
