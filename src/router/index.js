import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Checkout from '/src/components/Checkout.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router