<template>
  <div role="status" class="w-full animate-pulse">
    <div v-for="key in lineCount" :key="key" class="h-5 bg-gray-300 rounded mb-4 w-full"></div>
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FullTextLoading',
  props: {
    lines: {
      type: Number,
      default: 3
    }
  },
  setup(props: any) {
    return {
      lineCount: props.lines
    }
  }
}
</script>