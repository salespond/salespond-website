<template>
  <nav class="w-full bg-accent-1 h-[88px] fixed top-0 left-0 z-50">
    <div class="s-container h-full flex items-center justify-between ">
      <div>
        <BrandIcon />
      </div>
      <div>
        <MobileMenuButton class="lg:hidden" />
        <NavItemGroup />
      </div>
    </div>

    <!-- mobile -->
    <NavMobileItemGroup />
  </nav>
</template>

<script lang="ts">
import BrandIcon from '@/components/icon/BrandIcon.vue'
import MobileMenuButton from '../atom/button/MobileMenuButton.vue'
import NavItemGroup from '../atom/menu/NavItemGroup.vue'
import NavMobileItemGroup from '../atom/menu/NavMobileItemGroup.vue'

export default {
  components: {
    BrandIcon,
    MobileMenuButton,
    NavItemGroup,
    NavMobileItemGroup
  },
}
</script>

<style scoped>
.bg-nav-gradient {
  @apply bg-gradient-to-b from-accent-1 to-accent-2
}
</style>