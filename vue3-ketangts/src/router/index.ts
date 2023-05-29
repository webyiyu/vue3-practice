import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/mine/index.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
