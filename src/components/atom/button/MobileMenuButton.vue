<template>
    <div>
        <transition name="fade" mode="out-in">
            <HamburgerIcon v-if="!isOpenMobileMenu" @click="toggleMenu()" />
            <CloseIcon v-else @click="toggleMenu()" />
        </transition>
    </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

import HamburgerIcon from '@/components/icon/HamburgerIcon.vue'
import CloseIcon from '@/components/icon/CloseIcon.vue'



export default {
    components: {
        CloseIcon,
        HamburgerIcon,
    },
    setup() {
        const store = useStore()
        const mobileMenuStatus = computed(() => store.getters['nav_menu/GET_mobileMenuStatus'])


        const toggleMenu = () => {
            store.dispatch('nav_menu/toggleMobileMenu')
        }

        return {
            isOpenMobileMenu: mobileMenuStatus,
            toggleMenu
        }
    }
}

</script>