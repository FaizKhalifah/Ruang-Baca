import overview from "@/views/admin/overview.vue";
import booksView from "@/views/admin/booksView.vue";
import journal from "@/views/admin/journal.vue";

export default [
    {
        path: '/admin/dashboard',
        name: 'adminDashboard',
        component: overview,
        meta: { requiresAuth: true, role:'admin'}
      },
      {
        path: '/admin/books',
        name:'books',
        component:booksView,
        meta: { requiresAuth: true, role:'admin'}
      },
      {
        path:'/admin/journals',
        name:'adminJournals',
        component:journal,
        meta: { requiresAuth: true, role:'admin'}
      }
]