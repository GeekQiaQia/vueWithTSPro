/**
 * @Description:
 * @author GeekQiaQia
 * @date 2019/10/17 10:57
 * @IDE WebStorm
 */
/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
import Home from '../pages/views/Home.vue';
export default [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            icon: '',
            keepAlive: false,
            title: 'login'
        }
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../pages/views/About.vue'),
        meta: {
            icon: '',
            keepAlive: false,
            title: 'login'
        }
    },
    {
        path: '/home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Home,
        meta: {
            icon: '',
            keepAlive: false,
            title: 'login'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/views/login/login.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            title: 'login'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../pages/views/regist/regist.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            title: 'register'
        }
    },
    // {
    //     path: '/index',
    //     name: 'index',
    //     component: () => import('../pages/views/index/index.vue'),
    //     meta: {
    //         icon: '',
    //         keepAlive: true,
    //         title: 'index'
    //     }
    // }
];
