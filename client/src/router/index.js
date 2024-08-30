import { createRouter, createWebHistory } from 'vue-router';
import dashboard from '@/views/dashboard.vue';
// import Books from '@/views/Books.vue';
// import Employees from '@/views/Employees.vue';
// import Students from '@/views/Students.vue';
// import Facilities from '@/views/Facilities.vue';
// import Orders from '@/views/Orders.vue';

const routes = [
  { path: '/', component: dashboard },
  // { path: '/books', component: Books },
  // { path: '/employees', component: Employees },
  // { path: '/students', component: Students },
  // { path: '/facilities', component: Facilities },
  // { path: '/orders', component: Orders },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
