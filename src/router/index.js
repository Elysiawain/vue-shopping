import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [// 注册路由(一级路由)
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: 'home', // 重定向路由
      children: [// 引入二级路由
        { path: '/home', component: () => import('@/views/layout/home') },
        { path: '/category', component: () => import('@/views/layout/category') },
        { path: '/cart', component: () => import('@/views/layout/cart') },
        { path: 'user', component: () => import('@/views/layout/user') }
      ]
    },
    { path: '/myorder', component: () => import('@/views/myorder') },
    { path: '/pay', component: () => import('@/views/pay') },
    { path: '/prodetail/:id', component: () => import('@/views/prodetail') },
    { path: '/search', component: () => import('@/views/search/index.vue') },
    { path: '/searchlist/', component: () => import('@/views/search/list.vue') }
  ]
})

// 设置路由前置守卫
const authList = ['/myorder', '/pay']
router.beforeEach((to, from, next) => {
  if (!authList.includes(to.path)) {
    next()// 不需要权限的校验直接放行
    return
  }
  // 访问的权限页面，校验token
  const token = store.state.user.userInfo.token
  if (!token) {
    next('/login')
  } else { next() }// 放行
})
export default router
