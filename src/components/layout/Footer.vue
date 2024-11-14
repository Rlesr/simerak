<template>
  <footer class="relative z-1">
    <div class="bg-gradient-to-b from-transparent via-[#054083]/70 to-[#054083]/100 py-10">
      <div class="container mx-auto flex flex-col lg:flex-row justify-between px-6 text-white space-y-8 lg:space-y-0">
        
        <!-- Bagian Kiri: Informasi BPKD -->
        <div class="lg:w-1/3 space-y-2 text-center lg:text-left">
          <img src="/src/assets/brand/bpkd.png" alt="Logo DKI Jakarta" class="w-[200px] lg:w-[227px] h-auto mb-4 mx-auto lg:mx-0">
          <p class="text-white/90">BPKD(Badan Pengelola Keuangan Daerah)</p>
          <p class="text-white/90">Gedung Balai Kota Graha Ali Sadikin</p>
          <p class="text-white/90">Jl. Medan Merdeka Selatan No. 8-9 Blok G Lt.7,14 dan 15 RT.11/RW.2 Gambir, Jakarta Pusat, Daerah Khusus Ibukota Jakarta, 10110</p>
          <p class="text-white/90">Phone: 021-382 2137 | 021-382 2537</p>
          <p class="text-white/90">Instagram: @bpkdpemprovdki</p>
          <p class="text-white/90">Youtube: @bpkddkijakarta190</p>
        </div>

        <!-- Bagian Kanan: Layanan SIMERA -->
        <div class="lg:w-1/3 text-center lg:text-right">
          <h3 class="text-[#F57900] font-semibold mt-20 mb-3">Layanan SIMERAK</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-white/90 hover:text-[#F57900] transition-colors duration-300">Buka Rekening</a></li>
            <li><a href="#" class="text-white/90 hover:text-[#F57900] transition-colors duration-300">Tutup Rekening</a></li>
            <li><a href="#" class="text-white/90 hover:text-[#F57900] transition-colors duration-300">Ubah Spesimen</a></li>
            <li><a href="#" class="text-white/90 hover:text-[#F57900] transition-colors duration-300">Pengusulan</a></li>
            <li><a href="#" class="text-white/90 hover:text-[#F57900] transition-colors duration-300">Laporan</a></li>
          </ul>
        </div>
      </div>

      <!-- Ikon Media Sosial -->
      <div class="flex space-x-5 justify-center  items-center text-white mt-6 mb-4" >
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" class=" hover:text-[#F57900] transition-colors duration-300 cursor-pointer" height="1.2em" viewBox="0 0 16 16">
          <path fill="currentColor" d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301c1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class=" hover:text-[#F57900] transition-colors duration-300 cursor-pointer" width="1.5em" height="1.5em" viewBox="0 0 32 32">
          <path fill="currentColor" d="M19.254 2C15.312 2 13 4.082 13 8.826V13H8v5h5v12h5V18h4l1-5h-5V9.672C18 7.885 18.583 7 20.26 7H23V2.205C22.526 2.141 21.145 2 19.254 2" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class=" hover:text-[#F57900] transition-colors duration-300 cursor-pointer" width="1.6em" height="1.6em" viewBox="0 0 16 16">
          <path fill="currentColor" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class=" hover:text-[#F57900] transition-colors duration-300 cursor-pointer" width="1.5em" height="1.5em" viewBox="0 0 16 16">
          <path fill="currentColor" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518a3.3 3.3 0 0 0 1.447-1.817a6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429a3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218a3.2 3.2 0 0 1-.865.115a3 3 0 0 1-.614-.057a3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
      </svg>

        </div>

      <!-- Footer Bottom Text -->
      <div class="text-center text-sm text-[#F57900] font-medium mt-4">
        Badan Pengelola Keuangan Daerah © 2024
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';

export default {
  name: 'Footer',
  defineComponent: {
    name: 'BiGoogle'
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* Tambahkan smooth transition untuk hover effects */
a {
  @apply transition-all duration-300 ease-in-out;
}

/* Optional: Tambahkan backdrop filter untuk efek blur */
footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  z-index: -1;
}
</style>
