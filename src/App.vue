<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { RouterView } from 'vue-router'
import NavMenu from './components/molecule/NavMenu.vue'
import FooterMenu from './components/molecule/FooterMenu.vue'
import { useMouseInElement } from '@vueuse/core'

let randomDrop = ($el: any) => {
  var x = Math.random() * $el.outerWidth()
  var y = Math.random() * $el.outerHeight()
  var dropRadius = 20
  var strength = 0.04 + Math.random() * 0.04
  $el.ripples('drop', x, y, dropRadius, strength)
}

let setRandomInterval = (callback: any, minInterval: any, maxInterval: any) => {
  setTimeout(() => {
    callback()
    setRandomInterval(callback, minInterval, maxInterval)
  }, Math.floor(Math.random() * (maxInterval - minInterval + 1) + minInterval))
}

$(document).ready(() => {
  let $el = $('.hero-banner').ripples({
    resolution: 800,
    dropRadius: 20,
    perturbance: 0.04
  })

  setRandomInterval(() => randomDrop($el), 500, 3000)
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
