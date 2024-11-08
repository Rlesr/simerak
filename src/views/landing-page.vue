<template>
    <div
      class="bg-local bg-cover bg-center bg-gray-200 min-h-screen flex flex-col items-center justify-center relative pt-20"
      style="background-image: url('/src/assets/brand/image4.png');"
    >
      <NavBar class="absolute top-0 left-0 w-full bg-transparent flex justify-start p-10" />

      <div class="w-full max-w-2lg flex flex-col items-start mb-[175px] ml-[200px] mt-[130px]">
        <div class="mb-4 ml-6">
          <img src="/src/assets/brand/logo-simerak.png" alt="Logo Simerak" class="w-[400px] h-[137px]" />
        </div>
        <div class="text-white mt-4 ml-6">
          <h1 class="text-5xl font-bold mb-2">Selamat Datang di</h1>
          <h1 class="text-4xl font-bold mb-2">Sistem Informasi Manajemen Rekening Bank</h1>
          <p class="text-xl">Daerah Khusus Ibu Kota Jakarta</p>
        </div>
        <div class="mt-9 ml-6">
          <button
            class="bg-[#F57900] text-white text-[20px] w-[150px] h-[60px] px-[10px] py-[14px] rounded-[10px] hover:bg-blue-600 transition duration-300"
            @click="press"
            v-if="!showMe"
          >
            Login
          </button>
        </div>
      </div>

      <Footer class="w-full" />
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
