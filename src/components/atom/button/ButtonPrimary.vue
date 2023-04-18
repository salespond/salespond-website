<template>
  <button
    @click="redirect"
    class="w-fit bg-primary rounded-full h-[43px] px-[25px] text-white tracking-wide transition-all duration-75 hover:opacity-90"
  >
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default {
  props: {
    text: {
      type: String,
      default: 'Default Button'
    },
    linkTo: {
      type: String,
      default: '/'
    }
  },
  setup(props: any) {
    const { text, linkTo } = toRefs(props)
    const router = useRouter()

    const redirect = () => {
      router.push({
        name: linkTo.value
      })
    }

    return {
      buttonText: text,
      redirection: linkTo,
      redirect
    }
  }
}
</script>
