export default [
    {
        path: '/',
        redirect: '/login',
        component: () => import('@/pages/LoginReg/LoginReg.vue'),
        children: [
            {
                path: '/login',
                component: () => import('@/pages/LoginReg/Login/Login.vue')
            },
            {
                path: '/register',
                component: () => import('@/pages/LoginReg/Register/Register.vue')
            },
            {
                path: '/findpsw',
                component: () => import('@/pages/LoginReg/FindPsw/FindPsw.vue')
            }
        ]
    }
]