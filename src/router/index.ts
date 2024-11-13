import { createRouter, createWebHistory } from 'vue-router';
import landingPage from '@/views/landing-page.vue';
import login from '@/views/auth/login.vue';
import register from '@/views/auth/register.vue';
import bukaRekeningDKI from '@/views/buka-rekening/buka-rekeningDKI.vue';

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
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },

    {
      path: '/buka/rekeningDKI',
      name: 'BukaDki',
      component: bukaRekeningDKI,
    },

  ],
});

export default router;
