<template>
  <div class="w-full rounded-xl overflow-hidden mb-[50px]">
    <img :src="parseSanityImage(image).url()" alt="Sales chart" />
  </div>
</template>
<script lang="ts">
import { toRefs } from 'vue'
import { parseSanityImage } from '@/js/composable/parseSanityImage'

export default {
  props: {
    imageSrc: {
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
    const { imageSrc } = toRefs(props)

    return {
      image: imageSrc,
      parseSanityImage
    }
  }
}
</script>
<style lang=""></style>
