import { createApp } from 'vue'
import App from './App.vue'

import store from "/src/store/index"
import router from "./router/index"

createApp(App).use(store).use(router).mount('#app')

