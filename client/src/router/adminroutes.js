import overview from "@/views/admin/overview.vue";
import adminBooksListView from "@/views/admin/Books/adminBooksListView.vue";
import adminAddBookView from "@/views/admin/Books/adminAddBookView.vue";
import adminEditBookView from "@/views/admin/Books/adminEditBookView.vue";
import adminJournalsListView from "@/views/admin/Journals/adminJournalsListView.vue";
import adminAddJournalView from "@/views/admin/Journals/adminAddJournalView.vue";
import adminEditJournalView from "@/views/admin/Journals/adminEditJournalView.vue";
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
        component:adminJournalsListView,
        meta: { requiresAuth: true, role:'admin'}
      },
      {
        path:'/admin/journal/add',
        name:'add journal',
        component:adminAddJournalView,
        meta: { requiresAuth: true, role:'admin'}
      },
      {
        path:'/admin/journal/edit/:id',
        name:'edit journal',
        component:adminEditJournalView,
        meta: { requiresAuth: true, role:'admin'}
      },

]