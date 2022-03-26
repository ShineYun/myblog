import {createRouter,createWebHistory} from "vue-router";

const routerHistory = createWebHistory()

import Index from "@/views/Index";
const routes = [
    {
        path:'/',
        name: 'index',
        component:Index,
        meta: {
            index: 1,
        }
    },
    {
        path: '/category',
        name: 'category',
        component: () => import("@/views/Category"),
        meta: {
            index: 2,
        }
    },
    {
        path: '/timeline',
        name: 'timeline',
        component: () => import("@/views/TimeLine.vue"),
        meta: {
            index: 3,
        }
    },
    {
        path: '/info',
        name: 'info',
        component: () => import("@/views/Info"),
        meta: {
            index: 4,
        }
    },
    //假博客地址
    {
        path: '/blog',
        name: 'blog',
        component: () => import("@/views/Blog"),
    }
]

const router = createRouter({
    history:routerHistory,
    routes:routes
})

export default router