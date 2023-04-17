<template>
  <h1 class="text-6xl lg:text-7xl font-bold text-primary pr-3 mb-2">{{ title }}</h1>
</template>
<script lang="ts">
import { inject } from 'vue'

export default {
  setup() {
    const title = inject('bannerText')

    return {
      title
    }
  }
}
</script>
<style lang="">
  
</style>