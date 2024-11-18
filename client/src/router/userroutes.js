import home from "@/views/user/home.vue";
import userBookListView from "@/views/user/book/userBookListView.vue";
export default[
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: { requiresAuth: true, role:'user'}
    },
    {
        path: '/resources/books',
        name: 'user book list',
        component: userBookListView,
        meta: { requiresAuth: true, role:'user'}
    },
]