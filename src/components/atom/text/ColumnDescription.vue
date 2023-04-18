<template>
  <p class="text-gray-500 mb-[20px] prose" v-html="toHTML(description)"></p>
</template>
<script lang="ts">
import { inject } from 'vue'
import { toHTML } from '@portabletext/to-html'

export default {
  setup() {
    const description = inject('descriptionText')

    return {
      description,
      toHTML
    }
  }
}
</script>
<style lang=""></style>
