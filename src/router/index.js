import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: home
  },
  {
    path: '/properties/:id',
    name: 'Properties',
    component: () => import('../views/properties.vue')
  },
  {
    path: '/property',
    name: 'Property',
    component: () => import('../views/property.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
