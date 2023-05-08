<template>
  <div class="mb-[20px] prose" v-html="toHTML(description)"></div>
</template>
<script lang="ts">
import { inject } from 'vue'
import { toHTML } from '@portabletext/to-html'

export default {
  setup() {
    const description: any = inject('descriptionText')

    return {
      description,
      toHTML
    }
  }
}
</script>
<style scoped>
.prose :where(.prose > :last-child):not(:where([class~='not-prose'] *)) {
  @apply text-gray-400
}
</style>
