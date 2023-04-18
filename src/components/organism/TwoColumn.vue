<template>
  <div class="min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] items-center justify-center">
    <ColumnImage :image-src="src" />
    <ColumnDetails :cta1="button1" :cta2="button2" />
  </div>
</template>
<script lang="ts">
import { toRefs, provide } from 'vue'
import ColumnImage from '../molecule/ColumnImage.vue'
import ColumnDetails from '../molecule/ColumnDetails.vue'

export default {
  components: {
    ColumnImage,
    ColumnDetails
  },
  props: {
    bannerText: {
      type: String,
      default: 'Sample Banner Text'
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
    cta1: {
      type: Object,
      default() {
        return {
          cta_enabled: true,
          cta_redirection: '#',
          cta_text: 'Sales Acceleration'
        }
      }
    },
    cta2: {
      type: Object,
      default() {
        return {
          cta_enabled: true,
          cta_redirection: '#',
          cta_text: 'Sales Acceleration'
        }
      }
    },
    image: {
      type: Object,
      default() {
        return {
          image_location_toggle: true,
          image_panel: {
            _type: 'image',
            alt: 'Salespond Website',
            asset: {
              _ref: 'image-49e0fdcdfe515584914a059626e5fa0042a83763-5302x3659-jpg',
              _type: 'reference'
            }
          }
        }
      }
    }
  },
  setup(props: any) {
    const { bannerText, content, cta1, cta2, image } = toRefs(props)

    const isLocatedRight = image.value.image_location_toggle
    const src = image.value.image_panel

    provide('bannerText', bannerText)
    provide('descriptionText', content)

    return {
      banner: bannerText,
      blockContent: content,
      button1: cta1,
      button2: cta2,
      isLocatedRight,
      src
    }
  }
}
</script>
<style scoped>
.two-column {
  @apply min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] items-center justify-center relative;
}
</style>
