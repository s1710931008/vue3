<script setup>

// import GoodsItem from '../Home/components/GoodsItem.vue'
// import { useBanner } from './composables/useBanner'
// import { useCategory } from './composables/useCategory'
// const { bannerList } = useBanner()
// const { categoryData } = useCategory()

// 封装轮播图，封装分类数据
/*
import { getCategoryAPI } from '@/apis/category';
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'
*/

/*
// 获取数据
const categoryData = ref({})
const route = useRoute()
const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
}

onMounted(() => getCategory())

// 目标：路由参数变化的时候 可以把分类数据接口重新发送
onBeforeRouteUpdate((to) => {
    console.log('路由变化了！')
    // 存在问题：使用最新的路由参数请求最新的分类数据
    console.log(to)
    getCategory(to.params.id)
})
*/

// 获取banner
/*
const bannerList = ref([])

const getBanner = async () => {
    const res = await getBannerAPI({
        distributionSite: '2'
    })
    console.log(res)
    bannerList.value = res.result
}

onMounted(() => getBanner())
*/

// watch 监听路由 -> 解决路由缓存！
// import { watch } from 'vue'
// watch(
//     () => route.params,
//     (newValue, oldValue) => {
//         console.log(newValue)
//         console.log(oldValue)
//         getCategory()
//     },
//     { immediate: true }
// )

</script>

<template>
    <div class="top-category">
        分類
    </div>
</template>


<style scoped lang="scss">
.top-category {
    h3 {
        font-size: 28px;
        color: #666;
        font-weight: normal;
        text-align: center;
        line-height: 100px;
    }

    .sub-list {
        margin-top: 20px;
        background-color: #fff;

        ul {
            display: flex;
            padding: 0 32px;
            flex-wrap: wrap;

            li {
                width: 168px;
                height: 160px;


                a {
                    text-align: center;
                    display: block;
                    font-size: 16px;

                    img {
                        width: 100px;
                        height: 100px;
                    }

                    p {
                        line-height: 40px;
                    }

                    &:hover {
                        color: $xtxColor;
                    }
                }
            }
        }
    }

    .ref-goods {
        background-color: #fff;
        margin-top: 20px;
        position: relative;

        .head {
            .xtx-more {
                position: absolute;
                top: 20px;
                right: 20px;
            }

            .tag {
                text-align: center;
                color: #999;
                font-size: 20px;
                position: relative;
                top: -20px;
            }
        }

        .body {
            display: flex;
            justify-content: space-around;
            padding: 0 40px 30px;
        }
    }

    .bread-container {
        padding: 25px 0;
    }
}

.home-banner {
    width: 1240px;
    height: 500px;
    margin: 0 auto;


    img {
        width: 100%;
        height: 500px;
    }
}
</style>