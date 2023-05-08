<template>
  <div class="w-full flex items-center justify-center">
      <div 
          class="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent rounded-full"
          :class="color"
          role="status" 
          aria-label="loading"
      >
          <span class="sr-only">Loading...</span>
      </div>
  </div>
</template>
<script lang="ts">
import { toRefs, ref } from 'vue'
export default {
  name: 'Spinner',
  props: {
      inverted: {
          type: Boolean,
          default: false
      }
  },
  setup(props: any) {
      const { inverted } = toRefs(props)
      const color = ref('')
      
      color.value = inverted.value ? 'text-white' : 'text-primary-1'

      return {
          color,
      }
  }
}
</script>
<style lang="">
  
</style>