import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Login from '@/views/login'
import Order from './order'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/home',
            name: 'Home',
            meta:{auth:true,keepAlive: true},
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/view',
            name: 'Home',
            // 需要登录才能进入的页面可以增加一个meta属性
            meta: { 
                requireAuth: true
            },
            component: Home,
            children: [
                ...Order,
            ]
        },
    ]
})

//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.auth)) {// 判断是否需要登录权限
        if (localStorage.getItem('username')) {// 判断是否登录
            next()
        } else {// 没登录则跳转到登录界面
            next({
                path: '/login',
            })
        }
    } else {
        next()
    }
})
export default router;