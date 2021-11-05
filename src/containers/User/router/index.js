export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/user/views/Login.vue'),
        meta: {
            layout: 'Empty',
            requreAuth: false,
            permition: null
        }
    },
    {
        path: '/filial',
        name: 'filial',
        component: () => import('@/user/views/Filial.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null, 
            uname: 'filial'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: () => import('@/user/views/404.vue'), 
        meta: {
            layout: 'Empty',
            requreAuth: false,
            permition: null,
            group: null
        }
      }, 
]