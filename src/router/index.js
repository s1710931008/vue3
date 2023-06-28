//createRouter: 創選router實列對象
//createWebHistory: 創建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path和commponent對應關系的位置
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children:[
        {
          path:'',
          name: 'category',
          component:Home
        },
        {
          path:'category/:id',
          component:Category
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          // component: SubCategory
        },
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
