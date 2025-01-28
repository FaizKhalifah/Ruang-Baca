import home from "@/views/user/home.vue";
import userBookListView from "@/views/user/book/userBookListView.vue";
import userServiceView from "@/views/user/service/userServiceView.vue";
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
    {
        path: '/services',
        name: 'user services',
        component: userServiceView,
        meta: { requiresAuth: true, role:'user'}
    },
]