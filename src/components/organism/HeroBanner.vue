<template>
  <div
    v-if="banner"
    ref="target"
    class="grid grid-cols-1 lg:grid-cols-2 lg:items-center"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1000
      }
    }"
  >
    <div class="py-[80px]">
      <p class="text-sm text-primary font-bold">{{ label }}</p>
      <h1 class="font-bold text-white pr-3 mb-2" :class="additionalClass">
        {{ banner }}
      </h1>
      <p class="text-gray-400 mb-[20px]">
        {{ content }}
      </p>

      <ButtonPrimary v-if="ctaEnabled" :text="ctaText" :link-to="ctaRedirection" />
    </div>
    <img
      :src="parseSanityImage(image).url()"
      :alt="image.alt"
      class="w-full"
      width="640"
      height="360"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 1000
        }
      }"
      :delay="200"
    />
  </div>
</template>
<script lang="ts">
import { ref, computed, reactive } from 'vue'
import { parseSanityImage } from '@/js/composable/parseSanityImage'
import ButtonPrimary from '../atom/button/ButtonPrimary.vue'
import { useMouseInElement } from '@vueuse/core'

export default {
  components: {
    ButtonPrimary
  },
  props: {
    banner: {
      type: String,
      default: 'Banner text'
    },
    label: {
      type: String,
      default: 'Banner label'
    },
    content: {
      type: String,
      default: 'Banner content'
    },
    ctaEnabled: {
      type: Boolean,
      default: true
    },
    ctaText: {
      type: String,
      default: 'CTA text'
    },
    ctaRedirection: {
      type: String,
      default: '#'
    },
    image: {
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
    },
    bannerSize: {
      type: String,
      default: 'default'
    }
  },
  setup(props: any) {
    const additionalClass =
      props.bannerSize === 'xl' ? 'text-5xl lg:text-8xl' : 'text-5xl lg:text-7xl'

    const target = ref(null)

    const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

    const mouse = reactive(useMouseInElement(target))

    const cardTransform = computed(() => {
      const MAX_ROTATION = 6

      const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(
        2
      )

      const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(
        2
      )

      // console.info(rX)
      console.info(rY)

      return isOutside.value
        ? ''
        : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rX}deg)`
    })

    return {
      parseSanityImage,
      additionalClass,
      cardTransform,
      elementX,
      elementY,
      isOutside,
      elementHeight,
      elementWidth,
      mouse
    }
  }
}
</script>

<style scoped>
/* .hero-image {
  transform: perspective(64px) rotateX(0.60deg) rotateY(51deg);
} */
</style>
