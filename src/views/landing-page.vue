<template>
    <div class="bg-landing min-h-screen flex flex-col items-center justify-center relative">
      <!-- Navbar - positioned absolutely with a transparent background -->
      <NavBar class="absolute top-0 left-0 w-full bg-transparent flex justify-start p-10" />

      <div class="w-full max-w-5md flex flex-col items-start mb-[175px] px-6"> <!-- Adjust container width and add padding -->
        <!-- Logo on the left side with left margin -->
        <div class="mb-4 ml-6"> <!-- Adjust margin to keep it from touching the page edge -->
          <img src="../assets/brand/logo-simerak.png" alt="Logo Simerak" class="w-[500px] h-auto"> <!-- Smaller width for responsive design -->
        </div>
        <!-- Welcome Text -->
        <div class="text-white mt-4 ml-6"> <!-- Align text with the logo by adding the same margin -->
          <h1 class="text-5xl font-bold mb-2">Selamat Datang di</h1>
          <h1 class="text-4xl font-bold mb-2">Sistem Informasi Manajemen Rekening Bank</h1>
          <p class="text-xl">Daerah Khusus Ibu Kota Jakarta</p>
        </div>
        <!-- Login Button -->
        <div class="mt-6 ml-6">
          <button
            class="bg-[#F57900] text-white text-lg px-6 py-3 rounded-xl hover:bg-blue-600 transition duration-300"
            @click="press"
            v-if="!showMe"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </template>

  <script>
  import NavBar from '../components/layout/NavBar.vue';

  export default {
    components: {
      NavBar,
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

  <style scoped>
  /* Styling background landing page */
  .bg-landing {
    background-image: url("../assets/brand/image4.png");
    background-color: #e4e7ea;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  </style>
