<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <HomeCategory />
  <HomeBanner />
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <!-- 測試面板組件 -->
  <HomePanel title="新鮮好物" sub-title="新鮮好物 好多商品">
    <div>新鮮好物的插件</div>
  </HomePanel>
  <HomePanel title="人氣推薦" sub-title="人氣推薦 好多商品">
    <div>人氣推薦的插件</div>
  </HomePanel>
</template>