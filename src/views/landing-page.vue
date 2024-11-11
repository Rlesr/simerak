<template>
    <div
      class="bg-local bg-cover bg-center bg-gray-200 min-h-screen flex flex-col items-center justify-center relative py-10"
      style="background-image: url('/src/assets/brand/image4.png');"
    >
      <NavBar class="absolute top-0  left-0 w-full bg-transparent flex justify-start p-4 md:p-10" />

      <div class="w-full max-w-6xl px-4 md:px-10 flex flex-col items-start mb-6 mt-20">
        <div class="mb-4 w-full">
          <img
            src="/src/assets/brand/logo-simerak.png"
            alt="Logo Simerak"
            class="w-full max-w-[400px] mx-auto md:mx-0"
          />
        </div>

        <div class="text-white mt-4 text-center md:text-left">
          <h1 class="text-3xl md:text-5xl font-bold mb-2">Selamat Datang di</h1>
          <h1 class="text-2xl md:text-4xl font-bold mb-2">Sistem Informasi Manajemen Rekening Bank</h1>
          <p class="text-lg">Daerah Khusus Ibu Kota Jakarta</p>
        </div>

        <div class="mt-9 w-full flex justify-center md:justify-start">
          <router-link to="/login">
            <button
              class="bg-[#F57900] text-white text-lg w-[150px] h-[60px] rounded-[10px] hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </router-link>
        </div>
      </div>

      <div class="w-full bg-gradient-to-t from-[#054083] to-transparent h-[100px]"></div>

      <div class="w-full bg-[#054083] text-white text-center py-10">
        <h2 class="text-2xl font-bold mb-2">Layanan Kami</h2>
        <p class="text-lg px-4">SIMERAK (Sistem Informasi Manajemen Rekening Bank) Terdiri Dari Beberapa Fitur Menu Yakni :</p>
      </div>

      <div class="w-full bg-gradient-to-b from-[#054083] to-transparent py-10">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Services Cards */}
            <div class="bg-transparent text-white p-6 rounded-lg">
              <h2 class="mb-2">
                <span class="text-2xl font-bold text-[#F57900]">Buka Rekening</span> |
                <span class="text-white">Buka Rekening User SKPD</span>
              </h2>
              <p class="text-sm">Modul untuk mengajukan buka rekening penerimaan, pengeluaran, dan rekening lainnya di wilayah pemerintahan Provinsi DKI Jakarta.</p>
            </div>

            <div class="bg-transparent text-white p-6 rounded-lg">
              <h2 class="mb-2">
                <span class="text-2xl font-bold text-[#F57900]">Tutup Rekening</span> |
                <span class="text-white">Tutup Rekening User SKPD</span>
              </h2>
              <p class="text-sm">Modul untuk mengajukan tutup rekening penerimaan, pengeluaran dan rekening lainnya pada Bank DKI yang ada di wilayah pemerintahan Provinsi DKI Jakarta.</p>
            </div>

            <div class="bg-transparent text-white p-6 rounded-lg">
              <h2 class="mb-2">
                <span class="text-2xl font-bold text-[#F57900]">Pengusulan</span> |
                <span class="text-white text-xs">Pengusulan KPA, Bendahara, dan PLT/PLH User SKPD</span>
              </h2>
              <p class="text-sm">Modul untuk mengusulkan pelaksana kerja baru atau mengganti yang sudah ada.</p>
            </div>

            <div class="bg-transparent text-white p-6 rounded-lg">
              <h2 class="mb-2">
                <span class="text-2xl font-bold text-[#F57900]">Laporan</span> |
                <span class="text-white text-xs">Laporan Mutasi dan Saldo Bank DKI User SKPD</span>
              </h2>
              <p class="text-sm">Modul untuk menampilkan berbagai jenis laporan di seluruh rekening milik Pemerintah Provinsi DKI Jakarta.</p>
            </div>

            <div class="bg-transparent text-white p-6 rounded-lg">
              <h2 class="mb-2">
                <span class="text-2xl font-bold text-[#F57900]">Ubah Specimen</span> |
                <span class="text-white text-xs">Ubah Specimen User SKPD</span>
              </h2>
              <p class="text-sm">Modul untuk mengajukan pengubahan spesimen atas rekening yang sudah dimiliki.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer class="w-full fixed top-12"/>
    </div>
  </template>

  <script>
  import NavBar from '../components/layout/NavBar.vue';
  import Footer from '../components/layout/Footer.vue';

  export default {
    components: {
      NavBar,
      Footer,
    },
    data() {
      return {
        showMe: false,
      };
    },
    methods: {
      press() {
        // Add actions for the login button here
      },
    },
  };
  </script>
