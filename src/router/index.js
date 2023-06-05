import { createRouter, createWebHashHistory } from "vue-router"
 
const routes = [
    // {
    //     path: '/',
    //     name: 'index',
    //     component: () => import('@/App.vue')
    // },
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/About.vue')
    }
]
export const router = createRouter({
    history: createWebHashHistory(),
    mode: 'history', // 去掉url中的#
    scrollBehavior: () => ({ y: 0 }),
    routes: routes,
    //routes: constantRoutes
})

export default router