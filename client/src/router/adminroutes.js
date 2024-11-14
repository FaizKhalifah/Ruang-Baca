import overview from "@/views/admin/overview.vue";
import adminBooksListView from "@/views/admin/Books/adminBooksListView.vue";
import adminAddBookView from "@/views/admin/Books/adminAddBookView.vue";
import adminEditBookView from "@/views/admin/Books/adminEditBookView.vue";
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
        component:adminBooksListView,
        meta: { requiresAuth: true, role:'admin'}
      },
      {
        path:'/admin/book/add',
        name:'add books',
        component:adminAddBookView,
        meta: { requiresAuth: true, role:'admin'}
      },
      {
        path:'/admin/book/edit/:id',
        name:'edit books',
        component:adminEditBookView,
        meta: { requiresAuth: true, role:'admin'}
      },
      {
        path:'/admin/journals',
        name:'adminJournals',
        component:adminJournalView,
        meta: { requiresAuth: true, role:'admin'}
      }
]