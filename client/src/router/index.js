import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/views/admin/dashboard.vue'
import BooksView from '@/views/admin/booksView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: dashboard
  },
  {
    path: '/admin/books',
    name:'books',
    component:BooksView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
