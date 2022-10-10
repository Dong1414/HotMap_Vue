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
    path: '/hotmap',
    name: 'hotmap',
    component: () => import('../views/map/HotMapView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
