<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavMenu from './components/molecule/NavMenu.vue'
import FooterMenu from './components/molecule/FooterMenu.vue'
</script>

<template>
  <header>
    <NavMenu />
  </header>
  <main>
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
  <footer>
    <FooterMenu />
  </footer>
</template>

<style scoped></style>
