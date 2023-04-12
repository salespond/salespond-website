<template>
  <nav class="w-full bg-accent-1 h-[88px] fixed top-0 left-0 z-50">
    <div class="container h-full mx-auto px-[15px] flex items-center justify-between ">
      <div class="">
        <BrandIcon />
      </div>
      <div class="">
        <HamburgerIcon />
      </div>
    </div>

    <!-- mobile -->
    <div class="w-full bg-accent-1">
      <div class="flex flex-col container px-[15px] mx-auto py-[20px]">
        <div v-for="(item, key) in navItems" :key="key" class="px-[5px] leading-10 text-white" :class="{ 'bg-primary text-white': key == 2 }">
          {{ item.name }}
        </div>
        <button class="w-fit bg-primary rounded-full py-[6px] px-[25px] mt-[10px] text-white">
          Contact Us
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import BrandIcon from '@/components/icon/BrandIcon.vue'
import HamburgerIcon from '@/components/icon/HamburgerIcon.vue'

import { NAV_ITEMS } from '@/js/BaseConstant';

export default {
  components: {
    BrandIcon,
    HamburgerIcon,
  },
  setup() {
    return {
      navItems: NAV_ITEMS,
    }
  }
}
</script>

<style scoped>
.bg-nav-gradient {
  @apply bg-gradient-to-b from-accent-1 to-accent-2
}
</style>