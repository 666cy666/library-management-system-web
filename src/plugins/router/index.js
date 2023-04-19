import { createRouter, createWebHashHistory } from 'vue-router'
import HomeRoutes from './home'
import LoginRoutes from './login'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...HomeRoutes, ...LoginRoutes
    ]
})

export default router