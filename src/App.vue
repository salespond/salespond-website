<template>
  <div>
    <header>
      <NavMenu />
    </header>
    <main id="mainDiv">
      <!-- <div class="w-[50px] h-[50px] opacity-50 top-0 left-0 absolute boxx"></div> -->
      <router-view v-slot="{ Component }" class="ripple-container">
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

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import NavMenu from './components/molecule/NavMenu.vue'
import FooterMenu from './components/molecule/FooterMenu.vue'

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
  const element = $('section') as any;
  let $el = element.ripples({
    resolution: 500,
    dropRadius: 30,
    perturbance: 0.01
  })
  console.info('test')
  // setRandomInterval(() => randomDrop($el), 500, 3000)
})

</script>

<style scoped>
main {
  @apply w-full min-h-screen bg-[#010101];
  /* @apply w-full min-h-screen bg-gradient-to-b from-accent-1 to-accent-2; */
    /* background-image: url('/public/assets/water2.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
    background-attachment: fixed;
  }

  .boxx {
    background-image: url('public/assets/ezgif.com-crop.gif');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
</style>
