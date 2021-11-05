export default [
    {
        path: '/',
        name: 'Home',
        component: () => `<h1>123</h1>`,
        meta: {
            layout: 'SideMenu',
            requreAuth: true,
            permition: 'dashboard-view',
            uname: 'dashboard'
        }
    }
]