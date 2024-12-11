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
import formDeposito from '@/views/buka-rekening/form-deposito/deposito.vue';
import tutupRekeningBankOpd from '@/views/tutup-rekening/tutup-bankDKi/tutup-rekening-bank-opd.vue';
import tutupRekeningSkpd from '@/views/tutup-rekening/tutup-bankDKi/tutup-rekening-skpd.vue';
import formTutupRekeningDKI from '@/views/tutup-rekening/tutup-bankDKi/form/tutup-rekening.vue'
import tutupBankLainBanklainOpd from '@/views/tutup-rekening/tutup-bank-lain/tutup-bank-lain-banklain-opd.vue';
import tutupBankLainSkpd from '@/views/tutup-rekening/tutup-bank-lain/tutup-bank-lain-skpd.vue';
import PengusulanKepala from '@/views/pengusulan/pengusulan-kepala/pengusulan-kepala-opd.vue';
import PengusulanKepalaSkpd from '@/views/pengusulan/pengusulan-kepala/pengusulan-kepala-skpd.vue';
import pengusulanBendahara from '@/views/pengusulan/pengusulan-bendahara/pengusulan-bendahara.vue';
import pengusulanBendaharaSkpd from '@/views/pengusulan/pengusulan-bendahara/pengusulan-bendahara-skpd.vue';
import pengusulanPelaksanaopd from '@/views/pengusulan/pengusulan-pelaksana/pengusulan-pelaksana.vue';
import pengusulanPelaksanaSkpd from '@/views/pengusulan/pengusulan-pelaksana/pengusulan-pelaksana-skpd.vue';
import Pengguna from '@/views/user-management/pengguna/pengguna.vue';
import laporanNonbankDKi from '@/views/laporan/laporan-saldo-non-bank-DKI/List.vue'
import formLaporanNonBankDKI from '@/views/laporan/laporan-saldo-non-bank-DKI/form/form-laporan-nonbank-DKI.vue'
import laporanSaldoBankDKI from '@/views/laporan/laporan-saldo-BDKI/laporan-saldo-BDKI.vue'
import laporanDeposito from '@/views/laporan/laporan-deposito/laporan-deposito.vue';
import laporanMutasi from '@/views/laporan/laporan-mutasi/laporan-mutasi.vue';
import laporanMutasiFee from '@/views/laporan/laporan-mutasi-fee/laporan-mutasi-fee.vue';
import laporanLogAktivitas from '@/views/laporan/laporan-log-aktivitas/laporan-log-aktivitas.vue';
import laporanInfoBankDki from '@/views/laporan/laporan-info-bank-Dki/laporan-info-bank-dki.vue';
import LaporanInfoBankLain from '@/views/laporan/laporan-info-rekening-bank-lain/laporan-info-bank-lain.vue';
import LaporanGiro from '@/views/laporan/laporan-giro/laporan-giro.vue';
import mutasiForm from '@/views/laporan/laporan-giro/form/giro.vue'


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
    {
        path: '/home/tutup/opd',
        name: 'tutupRekeningBankOpd',
        component: tutupRekeningBankOpd,
    },
    {
        path: '/home/tutup/list',
        name: 'tutupRekeningSkpd',
        component: tutupRekeningSkpd,
    },
    {
        path: '/home/tutup/add/0',
        name: 'formTutupRekeningDKI',
        component: formTutupRekeningDKI,
    },
    {
        path: '/home/tutup-bank-lain/opd',
        name: 'tutupBankLainBanklainOpd',
        component: tutupBankLainBanklainOpd,
    },
    {
        path: '/home/tutup-bank-lain/list',
        name: 'tutupBankLainSkpd',
        component: tutupBankLainSkpd,
    },
    {
        path: '/home/pengusulan/kepala/opd',
        name: 'PengusulanKepala',
        component: PengusulanKepala,
    },
    {
        path: '/home/pengusulan/kepala',
        name: 'PengusulanKepalaSkpd',
        component: PengusulanKepalaSkpd,
    },
    {
        path: '/home/pengusulan/opd/bendahara',
        name: 'pengusulanBendahara',
        component: pengusulanBendahara,
    },
    {
        path: '/home/pengusulan/bendahara/',
        name: 'pengusulanBendaharaSkpd',
        component: pengusulanBendaharaSkpd,
    },
    {
        path: '/home/pengusulan/opd/pelaksana',
        name: 'pengusulanPelaksanaopd',
        component: pengusulanPelaksanaopd,
    },
    {
        path: '/home/pengusulan/pelaksana',
        name: 'pengusulanPelaksanaSkpd',
        component: pengusulanPelaksanaSkpd,
    },
    {
        path: '/home/user-management/pengguna/list',
        name: 'Pengguna',
        component: Pengguna,
    },
    {
        path: '/home/laporan/saldo/list',
        name: 'laporanNonbankDKi',
        component: laporanNonbankDKi,
    },
    {
        path: '/home/laporan/saldo/add/',
        name: 'formLaporanNonBankDKI',
        component: formLaporanNonBankDKI,
    },
    {
        path: '/home/laporan/saldo-bdki/list/',
        name: 'laporanSaldoBankDKI',
        component: laporanSaldoBankDKI,
    },
    {
        path: '/home/laporan/deposito/list',
        name: 'laporanDeposito',
        component: laporanDeposito,
    },
    {
        path: '/home/laporan/mutasi/list/',
        name: 'laporanMutasi',
        component: laporanMutasi,
    },
    {
        path: '/home/laporan/mutasi-fee',
        name: 'laporanMutasiFee',
        component: laporanMutasiFee,
    },
    {
        path: '/home/laporan/log-aktivitas',
        name: 'laporanLogAktivitas',
        component: laporanLogAktivitas,
    },
    {
        path: '/home/laporan/info-bankdki',
        name: 'laporanInfoBankDki',
        component: laporanInfoBankDki,
    },
    {
        path: '/home/laporan/info-nonbankdki',
        name: 'LaporanInfoBankLain',
        component: LaporanInfoBankLain,
    },
    {
        path: '/home/laporan/giro-bdki/list',
        name: 'LaporanGiro',
        component: LaporanGiro,
    },
    {
        path: '/home/laporan/giro-bdki/add/',
        name: 'mutasiForm',
        component: mutasiForm,
    },

  ],
});

export default router;
