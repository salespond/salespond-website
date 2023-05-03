<template>
  <h1
      class="apercu-bold text-heading-lg md:text-heading-xl font-bold text-center leading-none"
      :class="customCss"
  >
      {{ title }}
  </h1>
</template>

<script lang="ts">
import { toRefs } from "vue"

export default {
  name: 'SimpleBannerTitle',
  props: {
      pageTitle: {
          type: String,
          default: 'Sample Banner',
      },
      customClass: {
          type: String,
          default: '',
      }
  },
  setup(props: any) {
      const { pageTitle, customClass } = toRefs(props)

      return {
          title: pageTitle,
          customCss: customClass,
      }
  }
}
</script>
<style lang="">
  
</style>