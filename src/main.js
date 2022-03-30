import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import animated from 'animate.css'
const pinia = createPinia()

createApp(App).use(pinia).use(router).use(animated).mount('#app')
