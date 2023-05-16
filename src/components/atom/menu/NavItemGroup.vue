<template>
  <div class="hidden lg:flex flex-row h-full gap-[15px] items-center lg:visible">
    <template v-for="(item, key) in navItems" :key="key">
      <!-- <router-link :to="{ name: item.name }" class="px-[5px] leading-10 text-white tracking-wide">
        {{ item.text }}
      </router-link> -->
      <a
        :href="item.redirection"
        class="px-[5px] leading-10 text-white tracking-wide"
        :class="{ 'border-b-[3px] border-primary': currentRoute === item.name }"
      >
        {{ item.text }}
      </a>
    </template>

    <ButtonPrimary text="Contact Us" linkTo="contact_us" />
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { NAV_ITEMS } from '@/js/BaseConstant'
import ButtonPrimary from '../button/ButtonPrimary.vue'

export default {
  components: {
    ButtonPrimary
  },
  setup() {
    const route = useRoute()
    const currentRoute = computed(() => route.name)
    return {
      navItems: NAV_ITEMS,
      currentRoute
    }
  }
}
</script>
