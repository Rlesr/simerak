<template>
    <div class="bg-black bg-opacity-0 text-gray-100 py-3.5 px-6 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center cursor-pointer">
        <a href="/">
          <img src="/src/assets/brand/bpkd.png" alt="Logo" class="h-[100px] w-auto">
        </a>
      </div>

      <!-- Mobile Hamburger Icon -->
      <div class="lg:hidden flex items-center">
        <button @click="toggleMenu" class="text-white">
          <span class="block w-6 h-0.5 bg-white mb-1"></span>
          <span class="block w-6 h-0.5 bg-white mb-1"></span>
          <span class="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      <!-- Navigation Links -->
      <ul :class="{ 'hidden': !menuOpen, 'lg:flex': true, 'lg:space-x-5': true, 'flex-col': true, 'mt-3': true, 'lg:mt-0': true }" class="flex items-center space-x-10 lg:flex-row">
        <li class="w-full">
          <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-4 text-center">
            Dashboard
          </a>
        </li>
        <li class="w-full">
          <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-4 text-center">
            Buka Rekening
          </a>
        </li>
        <li class="w-full">
          <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-4 text-center">
            Tutup Rekening
          </a>
        </li>
        <li class="w-full">
          <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-4 text-center">
            Pengusulan
          </a>
        </li>
        <li class="w-full">
          <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-4 text-center">
            User Management
          </a>
        </li>
        <li class="w-full">
          <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-4 text-center">
            Ubah Specimen
          </a>
        </li>
        <li class="w-full">
          <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-4 text-center">
            Laporan
          </a>
        </li>
        <!-- Master Menu with Dropdown -->
        <li class="relative w-full">
          <button @click="toggleDropdown" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-4 text-center w-full">
            Master
          </button>
          <ul v-if="dropdownOpen" class="absolute left-[-10px] mt-0 w-[175px] bg-white text-sm text-black shadow-lg rounded-lg">
            <li v-for="item in masterItems" :key="item" class="hover:bg-gray-200">
              <a href="#" class="block py-2 px-6">{{ item }}</a>
            </li>
          </ul>
        </li>
        <li class="w-full">
          <a href="https://drive.google.com/drive/folders/1hE5Hmo6CULyxmPlnAEvEVbE9BnKWuvLz?usp=sharing" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-4 text-center">
            Buku Panduan
          </a>
        </li>
        <!-- Other Links -->
        <li class="w-full">
          <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-4 text-center">
            Akun
          </a>
        </li>
      </ul>
    </div>
  </template>

  <script>
  import { ref } from "vue";

  export default {
    setup() {
      const menuOpen = ref(false);
      const dropdownOpen = ref(false);
      const masterItems = [
        "Identifikasi Kategori",
        "Identifikasi Rekening",
        "Jenis Laporan",
        "Jenis Pengajuan",
        "Jenis Rekening",
        "Provinsi",
        "Kota",
        "Kecamatan",
        "Kelurahan",
        "Kode Bank DKI",
        "SKPD dan Sekolah",
        "Status",
        "Syarat",
        "Opsi",
        "Filter"
      ];

      const toggleMenu = () => {
        menuOpen.value = !menuOpen.value;
      };

      const toggleDropdown = () => {
        dropdownOpen.value = !dropdownOpen.value;
      };

      return { menuOpen, dropdownOpen, toggleMenu, toggleDropdown, masterItems };
    },
  };
  </script>

  <style scoped>
  button span {
    transition: all 0.3s ease;
  }

  button.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  button.open span:nth-child(2) {
    opacity: 0;
  }

  button.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  </style>
