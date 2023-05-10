<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavMenu from './components/molecule/NavMenu.vue'
import FooterMenu from './components/molecule/FooterMenu.vue'

$(document).ready(() => {
  console.info('jq')
  $('.hero-banner').ripples({
    resolution: 800,
    dropRadius: 20,
    perturbance: 0.04,
  });
})
</script>

<template>
  <div>
    <header>
      <NavMenu />
    </header>
    <main>
      <router-view v-slot="{ Component }">
        <transition appear enter-active-class="animate__animated animate__fadeIn">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </main>
    <footer>
      <FooterMenu />
    </footer>
  </div>
</template>

<style scoped>
main {
  @apply min-h-screen bg-gradient-to-b from-accent-1 to-accent-2 min-h-screen;
}
</style>
