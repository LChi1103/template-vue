import Vue from 'vue'
import VueRouter from 'vue-router'
import { COMPONENTS } from './components'

// 解决Uncaught (in promise) NavigationDuplicated问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: COMPONENTS.Login },
  {
    path: '/home',
    name: 'home',
    component: COMPONENTS.Home,
    children: [
      // { path: 'login', name: 'login', component: COMPONENTS.Login }
    ]
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // 在这里进行验证是否登陆等一些操作
  next()
})

export default router
