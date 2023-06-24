<script setup>
import LayoutNav from './components/LayoutNar.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
  <LayoutNav />
  <br>
  <LayoutHeader />
  <br>
  <RouterView />
  <LayoutFooter />
</template>