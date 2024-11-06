import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import appSetting from '@/app-setting';

import HomeView from '../views/landing-page.vue';

const routes: RouteRecordRaw[] = [
    // dashboard
    { path: '/', name: 'home', component: HomeView },

]