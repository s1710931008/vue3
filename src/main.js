import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

//測試接口函數
// import {getCategory} from '@/apis/testApi'
// getCategory().then(res=>{
//     console.log(res)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.directive('img-lazy',{
    mounted (el,binding){
        //el:指令綁定元素img
        //binding: binding.value 指令等於後面的表達式的值 圖片url
        console.log(el, binding.value)
        const { stop } = useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
              console.log(isIntersecting)
              if (isIntersecting) {
                // 进入视口区域
                el.src = binding.value
                // 載入後就中斷
                stop()
              }
            },
          )
    }
})