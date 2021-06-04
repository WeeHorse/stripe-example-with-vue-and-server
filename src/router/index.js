import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Checkout from '/src/components/Checkout.vue'
import CheckoutResult from '/src/components/CheckoutResult.vue'

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
    },
    {
        path: '/checkout-result/:result',
        name: 'CheckoutResult',
        component: CheckoutResult,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router