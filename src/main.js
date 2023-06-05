import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router' //Vue3需改为以下方式应用
//import * as router from 'vue-router'

import './assets/main.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
