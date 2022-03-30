import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home'
import Index from '../pages/home/subpages/index/index'
import Series from '../pages/home/subpages/series'
import All from '../pages/home/subpages/all'
import Ratio from '../pages/ratio'
const routes = [
    {
        path: '/ratio',
        component: Ratio 
    },
    { 
        path: '/', 
        redirect: '/index',
        component: Home,
        children: [
            {
                path: '/index',
                component: Index
            },
            {
                path: '/series/:id',
                component: Series
            },
            {
                path: '/all',
                component: All
            }
        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;