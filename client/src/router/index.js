import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/views/admin/dashboard.vue'
import BooksView from '@/views/admin/booksView.vue'
import login from '@/views/auth/login.vue'
import register from '@/views/auth/register.vue'
import home from '@/views/user/home.vue'

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
    name: 'AdminDashboard',
    component: dashboard,
    meta: { requiresAuth: true, role:'admin'}
  },
  {
    path: '/admin/books',
    name:'books',
    component:BooksView,
    meta: { requiresAuth: true, role:'admin'}
  },
  {
    path: '/home',
    name:'home',
    component:home,
    meta: { requiresAuth: true, role:'user'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (to.meta.requiresAuth && !token) {
    next({ name: 'Login' });
  } else if (to.meta.role && to.meta.role !== role) {
    next(role === 'admin' ? { name: 'AdminDashboard' } : { name: 'home' });
  } else {
    next();
  }
});

export default router
