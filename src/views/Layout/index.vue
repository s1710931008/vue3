<script setup>
import LayoutNavr from './components/LayoutNar.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(()=> categoryStore.getCategory())
</script>

<template>
  <LayoutFixed />   
  <LayoutNavr />
  <br><br><br>
  <LayoutHeader />
  <RouterView />
   <br><br>
  <LayoutFooter />
</template>