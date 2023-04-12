<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavMenu from './components/molecule/NavMenu.vue'
</script>

<template>
  <header>
    <NavMenu/>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
