<template>
  <div class="mb-[50px]">
    <template v-if="!sent">
      <h5 class="apercu-bold mb-1">Not quite ready for Podiem?</h5>
      <p class="text-gray-400 apercu-light">
        Join our online community for free and hear about the latest news.
      </p>

      <subscribe-input placeholderText="Enter your email address" buttonText="Subscribe" />
    </template>

    <template v-else>
      <h5 class="apercu-bold mb-1">
        Thanks for submitting your interest in Salespond. We look forward to supporting your digital
        sales teams!
      </h5>
    </template>
  </div>
</template>
<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import SubscribeInput from '@/components/atom/input/SubscribeInput.vue'

export default {
  name: 'SubscribeField',
  components: {
    SubscribeInput
  },
  setup() {
    const store = useStore()
    return {
      sent: computed(() => store.getters['subscribe/GET_formStatus'])
    }
  }
}
</script>
<style lang=""></style>
