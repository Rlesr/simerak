<template>
    <div
      class="bg-local bg-cover bg-center bg-gray-200 min-h-screen flex flex-col items-center justify-center relative pt-20"
      style="background-image: url('/src/assets/brand/image4.png');"
    >
      <NavBar class="absolute top-0 left-0 w-full bg-transparent flex justify-start p-10" />

      <div class="w-90% max-w-1xl flex flex-col items-start mb-[24px] ml-[100px]  mr-auto mt-[130px] ">
        <div class="mb-4 ml-6">
          <img src="/src/assets/brand/logo-simerak.png" alt="Logo Simerak" class="w-[400px] h-[137px]" />
        </div>
        <div class="text-white mt-4 ml-6">
          <h1 class="text-5xl font-bold mb-2">Selamat Datang di</h1>
          <h1 class="text-4xl font-bold mb-2">Sistem Informasi Manajemen Rekening Bank</h1>
          <p class="text-xl">Daerah Khusus Ibu Kota Jakarta</p>
        </div>
        <div class="mt-9 ml-6">
        <router-link to="/login">
          <button
            class="bg-[#F57900] text-white text-[20px] w-[150px] h-[60px] px-[10px] py-[14px] rounded-[10px] hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </router-link>
      </div>
    </div>
    <div class=" flex items-center justify-center w-full h-[256px] bg-gradient-to-t from-[#054083] to-transparent">

    </div>
<div class="flex items-center justify-center w-full h-[256px]">
  <div class="w-full h-full bg-[#054083] text-white flex flex-col items-center justify-center ">
    <h2 class="text-2xl font-bold mb-2">Layanan Kami</h2>
    <p class="text-lg">SIMERAK (Sistem Informasi Manajemen Rekening Bank) Terdiri Dari Beberapa Fitur Menu Yakni :</p>
  </div>
</div>
<div class=" flex items-center justify-center w-full h-[256px] bg-gradient-to-b from-[#054083] to-transparent">
  <div class="p-10 h-[417px]">
  <div class="grid grid-cols-3 ml-[324px]  gap-[42px] p-13 bg-opacity-80 bg-transparent">
    <!-- Bagian atas dengan 2 kolom -->
    <div class="p-2 text-white w-[402px] h-[116px]">
      <h2 class="font-bold mb-2">
        <span class="text-2xl font-bold text-[#F57900]">Buka Rekening</span> | <span class="text-white">Buka Rekening User SKPD</span>
      </h2>
      <p class="text-x">Modul untuk mengajukan buka rekening penerimaan, pengeluaran, dan rekening lainnya di wilayah pemerintahan Provinsi DKI Jakarta.</p>
    </div>

    <div class="p-2 text-white w-[402px] h-[116px] ">
      <h2 class="mb-2">
        <span class="text-2xl font-bold text-[#F57900]">Tutup Rekening</span> | <span class="text-white">Tutup Rekening User SKPD</span>
      </h2>
      <p class="text-x">Modul untuk mengajukan tutup rekening penerimaan, pengeluaran dan rekening lainnya pada Bank DKI yang ada di wilayah pemerintahan Provinsi DKI Jakarta.</p>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-6 p-6 bg-opacity-80 bg-transparent mt-4">
    <!-- Bagian bawah dengan 3 kolom -->
    <div class="p-4 text-white">
      <h2 class="mb-2">
        <span class="text-2xl font-bold text-[#F57900]">Pengusulan</span> | <span class="text-white text-xs">Pengusulan KPA, Bendahara, dan PLT/PLH User SKPD</span>
      </h2>
      <p class="text-x">Modul untuk mengusulkan pelaksana kerja baru atau mengganti yang sudah ada.</p>
    </div>

    <div class="p-4 text-white gap-10">
      <h2 class="mb-2">
        <span class="text-2xl font-bold text-[#F57900]">Laporan</span> | <span class="text-white text-xs">Laporan Mutasi dan Saldo Bank DKI User SKPD</span>
      </h2>
      <p class="text-x">Modul untuk menampilkan berbagai jenis laporan di seluruh rekening milik Pemerintah Provinsi DKI Jakarta.</p>
    </div>

    <div class="p-4 text-white">
      <h2 class="mb-2">
        <span class="text-2xl font-bold text-[#F57900]">Ubah Specimen</span> | <span class="text-white text-xs">Ubah Specimen User SKPD</span>
      </h2>
      <p class="text-x">Modul untuk mengajukan pengubahan spesimen atas rekening yang sudah dimiliki.</p>
    </div>
  </div>
</div>




</div>




      <Footer class="w-full mb-auto h-fit"  />
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
