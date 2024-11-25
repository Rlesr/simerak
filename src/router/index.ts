import { createRouter, createWebHistory } from 'vue-router';
import landingPage from '@/views/landing-page.vue';
import login from '@/views/auth/login.vue';
import register from '@/views/auth/register.vue';
import rekeningall from '@/views/buka-rekening/buka-rekeningSKPD.vue';
import bukaRekeningDKI from '@/views/buka-rekening/buka-rekeningDKI.vue';
import FormUmum from '@/views/buka-rekening/form/formUmum.vue';
import FormDKI from '@/views/buka-rekening/form/form-Bank-DKI.vue';
import FormKepalaSekolah from '@/views/buka-rekening/form/formKepalaSekolah.vue';
import FormTandaTangan from '@/views/buka-rekening/form/formTandaTangan.vue';
import nonDKIOpd from '@/views/buka-rekening/nonDkiOpd/bank-lainOpd.vue';
import BankLainSKPD from '@/views/buka-rekening/nonDkiOpd/bank-lainSKPD.vue';
import forbukabanklain from '@/views/buka-rekening/form-banklain/buka-bank-lain.vue'
import opdDeposito from '@/views/buka-rekening/deposito/opd-deposito.vue';
import listDeposito from '@/views/buka-rekening/deposito/list-deposito.vue';
import formDeposito from '@/views/buka-rekening/form-deposito/deposito.vue'

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
        path: '/buka',
        name: 'buka-rekening',
        component: rekeningall,
      },
    {
        path: '/buka/form/umum',
        name: 'formUmum',
        component: FormUmum,
    },
    {
        path: '/buka/opd',
        name: 'BukaDki',
        component: bukaRekeningDKI,
    },
    {
        path: '/buka/form/DKI',
        name: 'form DKI',
        component: FormDKI,
    },
    {
        path: '/buka/form/kepalasekolah',
        name: 'formKepalaSekolah',
        component: FormKepalaSekolah,
    },
    {
        path: '/buka/form/tandatangan',
        name: 'formTandaTangan',
        component: FormTandaTangan,
    },
    {
        path: '/buka/opd/bank-lain',
        name: 'nonDKIOpd',
        component: nonDKIOpd,
    },
    {
        path: '/buka/bank-lain',
        name: 'BankLainSKPD',
        component: BankLainSKPD,
    },
    {
        path: '/buka/buka-bank-lain/add/0',
        name: 'forbukabanklain',
        component: forbukabanklain,
    },
    {
        path: '/buka/opd/deposito/',
        name: 'opdDeposito',
        component: opdDeposito,
    },
    {
        path: '/buka/deposito/list',
        name: 'listDeposito',
        component: listDeposito,
    },
    {
        path: '/buka/deposito/add/0',
        name: 'formDeposito',
        component: formDeposito,
    },

  ],
});

export default router;
