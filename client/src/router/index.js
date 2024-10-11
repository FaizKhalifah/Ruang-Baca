import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/views/admin/dashboard.vue'
import BooksView from '@/views/admin/booksView.vue'
import login from '@/views/auth/login.vue'
import register from '@/views/auth/register.vue'

const routes = [
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path:'/register',
    name:'register',
    component:register
  },
  {
    path: '/admin/dashboard',
    name: 'home',
    component: dashboard,
    meta: { requiresAuth: true}
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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  if (to.meta.requiresAuth) {
    if (!token) {
      next('/login');
    } else if (to.meta.role && to.meta.role !== userRole) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
