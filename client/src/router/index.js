import { createRouter, createWebHistory } from 'vue-router'
import adminroutes from './adminroutes'
import userroutes from './userroutes'
import login from '@/views/auth/login.vue'
import register from '@/views/auth/register.vue'
import home from '@/views/user/home.vue'

const routes = [
  ...adminroutes,
  ...userroutes,
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
    path: '/home',
    name:'home',
    component:home,
    meta: { requiresAuth: true, role:'user'}
  },


  { 
    path: '/:pathMatch(.*)*', 
    redirect: (to) => {
      const role = localStorage.getItem('role');
      const intendedPath = to.fullPath; 
      if (!role) {
        console.warn(`Attempted to access ${intendedPath} without authentication`);
        return { name: 'login' };
      }

      // If role exists, redirect to the appropriate page
      console.warn(`Redirecting from ${intendedPath} based on role`);
      return role === 'admin' ? { name: 'adminDashboard' } : { name: 'home' };
    }
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
    next({ name: 'login' });
  } else if (to.meta.role && to.meta.role !== role) {
    next(role === 'admin' ? { name: 'adminDashboard' } : { name: 'home' });
  } else {
    next();
  }
});

export default router
