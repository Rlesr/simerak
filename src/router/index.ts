import { createRouter, createWebHistory } from 'vue-router';
import landingPage from '@/views/landing-page.vue';
import login from '@/views/auth/login.vue';
import BukaRekeningDKI from '@/views/buka-rekening/buka-rekeningDKI.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: landingPage,
    },{
      path: '/login',
      name: 'login',
      component: login,
    },{
    path: '/buka/opd',
    name: 'bukabankDki',
    component: BukaRekeningDKI
    },
  ],
});

export default router;
