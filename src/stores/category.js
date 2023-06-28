import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
    //state 導旅列表數據
    const categoryList = ref([])

    // action 获取导航数据的方法
    const getCategory = async () => {
      const res = await getCategoryAPI()
      categoryList.value = res.result
    }

    return{
        categoryList,
        getCategory
    }
})
 