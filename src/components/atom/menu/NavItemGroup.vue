<template>
  <div class="hidden lg:flex flex-row h-full gap-[15px] items-center lg:visible">
    <template v-for="(item, key) in navItems" :key="key">
      <router-link :to="{ name: item.name }" class="px-[5px] leading-10 text-white tracking-wide"
        :class="{ 'text-primary font-bold': key == 2 }">
        {{ item.text }}
      </router-link>
    </template>

    <ButtonPrimary text="Contact Us" linkTo="contact_us" />
  </div>
</template>

<script lang="ts">
import { NAV_ITEMS } from '@/js/BaseConstant'
import ButtonPrimary from '../button/ButtonPrimary.vue'


export default {
  components: {
    ButtonPrimary,
  },
  setup() {
    return {
      navItems: NAV_ITEMS,
    }
  }
}
</script>