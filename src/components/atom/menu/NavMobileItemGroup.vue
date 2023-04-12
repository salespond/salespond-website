<template>
  <div class="w-full bg-accent-1 lg:hidden" v-if="isOpenMobileMenu">
    <div class="flex flex-col s-container px-[15px] mx-auto py-[20px]">
      <template v-for="(item, key) in navItems" :key="key">
        <router-link :to="{ name: item.name }" class="px-[5px] leading-10 text-white tracking-wide">
          {{ item.text }}
        </router-link>
      </template>

      <ButtonPrimary text="Contact Us" linkTo="contact_us" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { NAV_ITEMS } from '@/js/BaseConstant'

import ButtonPrimary from '../button/ButtonPrimary.vue'

export default {
  components: {
    ButtonPrimary
  },
  setup() {
    const store = useStore()
    const mobileMenuStatus = computed(() => store.getters['nav_menu/GET_mobileMenuStatus'])

    return {
      navItems: NAV_ITEMS,
      isOpenMobileMenu: mobileMenuStatus
    }
  }
}
</script>