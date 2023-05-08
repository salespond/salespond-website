<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavMenu from './components/molecule/NavMenu.vue'
import FooterMenu from './components/molecule/FooterMenu.vue'
</script>

<template>
  <div class="min-h-screen" v-cloak>
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