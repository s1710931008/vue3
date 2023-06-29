<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

//触發獲取導旅列表的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(()=> categoryStore.getCategory())
</script>

<template>

    <LayoutFixed/>
<div style="height:1100px;">
    <LayoutNav />
</div>
    <LayoutHeader />
    <RouterView />
    <LayoutFooter /> 
</template>