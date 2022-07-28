import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/app1'
    },
    {
        path: '/app1',
        component: () => import('../App.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router