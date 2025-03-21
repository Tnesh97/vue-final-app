import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// set up the router for te SPA 
//look at router.js file in this folder

app.use(router)

app.mount('#app')
