<script setup>
import { useCategoryStore } from '@/stores/categoryStore'
const categoryStore = useCategoryStore()

  import { onMounted, ref } from 'vue'
  import { getCategoryAPI } from '@/apis/layout'
  
  const categoryList = ref([])

  const getCategory = async () => {
    const res = await getCategoryAPI()
    console.log(res)
    categoryList.value = res.result
  }
  onMounted(()=>{
    getCategory
  })

  getCategory().then(res=>{
    console.log(res)
})

</script>


<template>
<div>
    <ul class="app-header-nav">
        <li class="home">
            <RouterLink to="/">首页</RouterLink>
        </li>
        <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
            <RouterLink active-class="active" :to="`/category/${item.id}`">
                {{ item.name }}
            </RouterLink>
        </li>
    </ul>
</div>

</template>


<style lang="scss">
.app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
        margin-right: 40px;
        width: 38px;
        text-align: center;

        a {
            font-size: 16px;
            line-height: 32px;
            height: 32px;
            display: inline-block;

            &:hover {
                color: $xtxColor;
                border-bottom: 1px solid $xtxColor;
            }
        }

        .active {
            color: $xtxColor;
            border-bottom: 1px solid $xtxColor;
        }
    }
}
</style>