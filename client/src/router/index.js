import { createRouter, createWebHistory } from "vue-router";
import dashboard from "@/views/dashboard.vue";
import buku from "@/views/buku.vue";
import fasilitas from "@/views/fasilitas.vue";
import karyawan from "@/views/karyawan.vue";
import login from "@/views/login.vue";
import register from "@/views/register.vue";

const routes = [
  { path: '/', name: 'Dashboard', component: dashboard },
  { path: '/buku', name: 'Buku', component: buku },
  { path: '/karyawan', name: 'Karyawan', component: karyawan },
  { path: '/fasilitas', name: 'Fasilitas', component: fasilitas },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
 export default router;