import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


// component: () => import(/* webpackChunkName: "about" */ '../views/HeaderView.vue')
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hotPlace',
    name: 'hotPlace',
    component: () => import('../views/map/HotPlaceView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
