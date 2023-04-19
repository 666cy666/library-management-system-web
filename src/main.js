import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import './style.scss'
import router from './plugins/router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router).use(createPinia())


app.mount('#app')




