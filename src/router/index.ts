import { createRouter, createWebHistory } from 'vue-router';
import landingPage from '@/views/landing-page.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: landingPage,
    },
  ],
});

export default router;
