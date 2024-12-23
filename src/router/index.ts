import { createRouter, createWebHistory } from 'vue-router';
import landingPage from '@/views/landing-page.vue';
import login from '@/views/auth/login.vue';
import register from '@/views/auth/register.vue';
import rekeningall from '@/views/buka-rekening/buka-rekeningSKPD.vue';
import bukaRekeningDKI from '@/views/buka-rekening/buka-rekeningDKI.vue';
import FormDKI from '@/views/buka-rekening/form/form-Bank-DKI.vue';
import nonDKIOpd from '@/views/buka-rekening/nonDkiOpd/bank-lainOpd.vue';
import BankLainSKPD from '@/views/buka-rekening/nonDkiOpd/bank-lainSKPD.vue';
import forbukabanklain from '@/views/buka-rekening/form-banklain/buka-bank-lain.vue';
import opdDeposito from '@/views/buka-rekening/deposito/opd-deposito.vue';
import listDeposito from '@/views/buka-rekening/deposito/list-deposito.vue';
import formDeposito from '@/views/buka-rekening/form-deposito/deposito.vue';
import tutupRekeningBankOpd from '@/views/tutup-rekening/tutup-bankDKi/tutup-rekening-bank-opd.vue';
import tutupRekeningSkpd from '@/views/tutup-rekening/tutup-bankDKi/tutup-rekening-skpd.vue';
import formTutupRekeningDKI from '@/views/tutup-rekening/tutup-bankDKi/form/tutup-rekening.vue';
import tutupBankLainBanklainOpd from '@/views/tutup-rekening/tutup-bank-lain/tutup-bank-lain-banklain-opd.vue';
import tutupBankLainSkpd from '@/views/tutup-rekening/tutup-bank-lain/tutup-bank-lain-skpd.vue';
import PengusulanKepala from '@/views/pengusulan/pengusulan-kepala/pengusulan-kepala-opd.vue';
import PengusulanKepalaSkpd from '@/views/pengusulan/pengusulan-kepala/pengusulan-kepala-skpd.vue';
import pengusulanBendahara from '@/views/pengusulan/pengusulan-bendahara/pengusulan-bendahara.vue';
import pengusulanBendaharaSkpd from '@/views/pengusulan/pengusulan-bendahara/pengusulan-bendahara-skpd.vue';
import pengusulanPelaksanaopd from '@/views/pengusulan/pengusulan-pelaksana/pengusulan-pelaksana.vue';
import pengusulanPelaksanaSkpd from '@/views/pengusulan/pengusulan-pelaksana/pengusulan-pelaksana-skpd.vue';
import Pengguna from '@/views/user-management/pengguna/pengguna.vue';
import laporanNonbankDKi from '@/views/laporan/laporan-saldo-non-bank-DKI/List.vue';
import formLaporanNonBankDKI from '@/views/laporan/laporan-saldo-non-bank-DKI/form/form-laporan-nonbank-DKI.vue';
import laporanSaldoBankDKI from '@/views/laporan/laporan-saldo-BDKI/laporan-saldo-BDKI.vue';
import laporanDeposito from '@/views/laporan/laporan-deposito/laporan-deposito.vue';
import laporanMutasi from '@/views/laporan/laporan-mutasi/laporan-mutasi.vue';
import laporanMutasiFee from '@/views/laporan/laporan-mutasi-fee/laporan-mutasi-fee.vue';
import laporanLogAktivitas from '@/views/laporan/laporan-log-aktivitas/laporan-log-aktivitas.vue';
import laporanInfoBankDki from '@/views/laporan/laporan-info-bank-Dki/laporan-info-bank-dki.vue';
import LaporanInfoBankLain from '@/views/laporan/laporan-info-rekening-bank-lain/laporan-info-bank-lain.vue';
import LaporanGiro from '@/views/laporan/laporan-giro/laporan-giro.vue';
import mutasiForm from '@/views/laporan/laporan-giro/form/giro.vue';
import UserManagementOtoritas from '@/views/user-management/otoritas/user-management-otoritas.vue';
import userManagementAplikasi from '@/views/user-management/aplikasi/aplikasi.vue';
import userManagementMenu from '@/views/user-management/menu/menu.vue';
import OtoritasPengguna from '@/views/user-management/otoritas-pengguna/otoritas-pengguna.vue';
import OtoritasMenu from '@/views/user-management/otoritas-menu/otoritas-menu.vue';
import formTutupRekeningLain from '@/views/tutup-rekening/tutup-bank-lain/form/tutup-rekening-bank-lain.vue';
import formPengusulanPLT from '@/views/pengusulan/pengusulan-pelaksana/form/pengusulan-PLT.vue';
import formAddUser from '@/views/user-management/form/add-user.vue';
import formAddOtoritas from '@/views/user-management/form/add-otoritas.vue';
import formEditAplikasi from '@/views/user-management/form/edit-aplikasi.vue';
import identifikasiKategori from '@/views/master/identifikasi-kategori.vue';
import identifikasiRekening from '@/views/master/identifikasi-rekening.vue';
import kodeBankDKI from '@/views/master/kode-bank-dki.vue';
import jenisLaporan from '@/views/master/jenis-laporan.vue';
import jenisPengajuan from '@/views/master/jenis-pengajuan.vue';
import jenisRekening from '@/views/master/jenis-rekening.vue';
import provinsi from '@/views/master/provinsi.vue';
import kota from '@/views/master/kota.vue';
import kecamatan from '@/views/master/kecamatan.vue';
import kelurahan from '@/views/master/kelurahan.vue';
import skpdSekolah from '@/views/master/skpd-sekolah.vue';
import status from '@/views/master/status.vue';
import syarat from '@/views/master/syarat.vue';
import opsi from '@/views/master/opsi.vue';
import filter from '@/views/master/filter.vue';
import formIdentifikasiKategori from '@/views/master/form/form-indentifikasi-kategori.vue';
import formIdentifikasiRekening from '@/views/master/form/form-indentifikasi-rekening.vue';
import formJenisLaporan from '@/views/master/form/form-jenis-laporan.vue';
import formJenisPengajuan from '@/views/master/form/form-jenis-pengajuan.vue';
import formJenisRekening from '@/views/master/form/form-jenis-rekening.vue';
import formProvinsi from '@/views/master/form/form-provinsi.vue';
import formKota from '@/views/master/form/form-kota.vue';
import formKecamatan from '@/views/master/form/form-kecamatan.vue';
import formKelurahan from '@/views/master/form/form-kelurahan.vue';
import formKodeBankDki from '@/views/master/form/form-kode-bank-dki.vue';
import formSkpdSekolah from '@/views/master/form/form-skpd-sekolah.vue';
import formStatus from '@/views/master/form/form-status.vue';
import formSyarat from '@/views/master/form/form-syarat.vue';
import formOpsi from '@/views/master/form/form-opsi.vue';
import formFilter from '@/views/master/form/form-filter.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: landingPage,
        },
        {
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
            path: '/home/user-management/otoritas/list',
            name: 'UserManagementOtoritas',
            component: UserManagementOtoritas,
        },
        {
            path: '/home/user-management/aplikasi/list',
            name: 'userManagementAplikasi',
            component: userManagementAplikasi,
        },
        {
            path: '/home/user-management/menu/list',
            name: 'userManagementMenu',
            component: userManagementMenu,
        },
        {
            path: '/home/user-management/otoritas-pengguna/list',
            name: 'OtoritasPengguna',
            component: OtoritasPengguna,
        },
        {
            path: '/home/user-management/otoritas-menu/list',
            name: 'OtoritasMenu',
            component: OtoritasMenu,
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
        {
            path: '/home/Master/IdentifikasiKategori',
            name: 'MasterIndentifikasiKategori',
            component: identifikasiKategori,
        },
        {
            path: '/home/Master/IdentifikasiRekening',
            name: 'MasterIndentifikasiRekening',
            component: identifikasiRekening,
        },
        {
            path: '/home/Master/KodeBankDKI',
            name: 'MasterKodeBankDKI',
            component: kodeBankDKI,
        },
        {
            path: '/home/Master/JenisLaporan',
            name: 'MasterJenisLaporan',
            component: jenisLaporan,
        },
        {
            path: '/home/Master/JenisPengajuan',
            name: 'MasterJenisPengajuan',
            component: jenisPengajuan,
        },
        {
            path: '/home/Master/JenisRekening',
            name: 'MasterJenisRekening',
            component: jenisRekening,
        },
        {
            path: '/home/Master/Provinsi',
            name: 'MasterProvinsi',
            component: provinsi,
        },
        {
            path: '/home/Master/Kota',
            name: 'MasterKota',
            component: kota,
        },
        {
            path: '/home/Master/Kecamatan',
            name: 'MasterKecamatan',
            component: kecamatan,
        },
        {
            path: '/home/Master/Kelurahan',
            name: 'MasterKelurahan',
            component: kelurahan,
        },
        {
            path: '/home/Master/SkpdSekolah',
            name: 'MasterSkpdSekolah',
            component: skpdSekolah,
        },
        {
            path: '/home/Master/Status',
            name: 'MasterStatus',
            component: status,
        },
        {
            path: '/home/Master/Syarat',
            name: 'MasterSyarat',
            component: syarat,
        },
        {
            path: '/home/Master/Opsi',
            name: 'MasterOpsi',
            component: opsi,
        },
        {
            path: '/home/Master/Filter',
            name: 'MasterFilter',
            component: filter,
        },
        {
            path: '/home/Master/Form/AddIdentifikasiKategori/0',
            name: 'FormIndetifikasiKategori',
            component: formIdentifikasiKategori,
        },
        {
            path: '/home/Master/Form/AddIdentifikasiRekening/0',
            name: 'FormIndetifikasiRekening',
            component: formIdentifikasiRekening,
        },
        {
            path: '/home/Master/Form/AddJenisLaporan/0',
            name: 'FormJenisLaporan',
            component: formJenisLaporan,
        },
        {
            path: '/home/Master/Form/AddJenisPengajuan/0',
            name: 'FormJenisPengajuan',
            component: formJenisPengajuan,
        },
        {
            path: '/home/Master/Form/AddJenisRekening/0',
            name: 'FormJenisRekening',
            component: formJenisRekening,
        },
        {
            path: '/home/Master/Form/AddProvinsi/0',
            name: 'FormProvinsi',
            component: formProvinsi,
        },
        {
            path: '/home/Master/Form/AddKota/0',
            name: 'FormKota',
            component: formKota,
        },
        {
            path: '/home/Master/Form/AddKecamatan/0',
            name: 'FormKecamatan',
            component: formKecamatan,
        },
        {
            path: '/home/Master/Form/AddKelurahan/0',
            name: 'FormKelurahan',
            component: formKelurahan,
        },
        {
            path: '/home/Master/Form/AddKodeBankDki/0',
            name: 'FormKodeBankDki',
            component: formKodeBankDki,
        },
        {
            path: '/home/Master/Form/AddSkpdsekolah/0',
            name: 'FormSkpdSekolah',
            component: formSkpdSekolah,
        },
        {
            path: '/home/Master/Form/AddStatus/0',
            name: 'FormStatus',
            component: formStatus,
        },
        {
            path: '/home/Master/Form/AddSyarat/0',
            name: 'FormSyarat',
            component: formSyarat,
        },
        {
            path: '/home/Master/Form/AddOpsi/0',
            name: 'FormOpsi',
            component: formOpsi,
        },
        {
            path: '/home/Master/Form/AddFilter/0',
            name: 'FormFilter',
            component: formFilter,
        },
        {
            path: '/home/UserManagement/AddUser/0',
            name: 'form-add-user',
            component: formAddUser,
        },
        {
            path: '/home/UserManagement/AddOtoritas/0',
            name: 'form-add-otoritas',
            component: formAddOtoritas,
        },
        {
            path: '/home/UserManagement/EditAplikasi/0',
            name: 'form-edit-aplikasi',
            component: formEditAplikasi,
        },
        {
            path: '/home/tutup-lain/add/0',
            name: 'form-tutup-rekening-bank-lain',
            component: formTutupRekeningLain,
        },
        {
            path: '/home/pengusulan-PLT/add/0',
            name: 'form-pengusulan-PLT',
            component: formPengusulanPLT,
        },
    ],
});

export default router;
