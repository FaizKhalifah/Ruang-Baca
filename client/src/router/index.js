import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/views/admin/dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: dashboard
  },
  {
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
