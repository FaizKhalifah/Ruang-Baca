import overview from "@/views/admin/overview.vue";
import adminBooksView from "@/views/admin/adminBooksView.vue";
import adminJournalView from "@/views/admin/adminJournalView.vue";
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
        component:adminBooksView,
        meta: { requiresAuth: true, role:'admin'}
      },
      {
        path:'/admin/journals',
        name:'adminJournals',
        component:adminJournalView,
        meta: { requiresAuth: true, role:'admin'}
      }
]