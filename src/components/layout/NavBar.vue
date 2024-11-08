<template>
    <div :class="{'backdrop-blur': menuOpen}" class="bg-gradient py-3.5 px-6 flex justify-between items-center transition-all duration-300">
        <!-- Logo -->
        <div v-if="!menuOpen" class="flex items-center cursor-pointer">
            <a href="/">
                <img src="/src/assets/brand/bpkd.png" alt="Logo" class="w-[227px] h-[64px]">
            </a>
        </div>

        <!-- Mobile Hamburger Icon -->
        <div class="lg:hidden flex items-center">
            <button @click="toggleMenu" class="text-white">
                <span :class="{'transform rotate-45': menuOpen}" class="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
                <span :class="{'opacity-0': menuOpen}" class="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
                <span :class="{'transform -rotate-45': menuOpen}" class="block w-6 h-0.5 bg-white transition-all duration-300"></span>
            </button>
        </div>

        <!-- Navigation Links -->
        <ul :class="{'hidden': !menuOpen, 'lg:flex': true, 'flex-col': true, 'lg:flex-row': true, 'mt-3': true, 'lg:mt-0': true }" class="flex items-center space-x-10 lg:space-x-5">
            <li class="w-full">
                <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-3 text-center">
                    Dashboard
                </a>
            </li>
            <li class="w-full">
                <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-3 text-center">
                    Buka Rekening
                </a>
            </li>
            <li class="w-full">
                <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-3 text-center">
                    Tutup Rekening
                </a>
            </li>
            <li class="w-full">
                <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-3 text-center">
                    Pengusulan
                </a>
            </li>
            <li class="w-full">
                <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-3 text-center">
                    User Management
                </a>
            </li>
            <li class="w-full">
                <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-3 text-center">
                    Ubah Specimen
                </a>
            </li>
            <li class="w-full">
                <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-3 text-center">
                    Laporan
                </a>
            </li>
            <!-- Master Menu with Dropdown -->
            <li class="relative w-full">
                <button @click="toggleDropdown" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-3 text-center w-full">
                    Master
                </button>
                <ul v-if="dropdownOpen" class="absolute left-[-10px] mt-0 w-[175px] bg-white text-sm text-black shadow-lg rounded-lg">
                    <li v-for="item in masterItems" :key="item" class="hover:bg-gray-200">
                        <a href="#" class="block py-2 px-6">{{ item }}</a>
                    </li>
                </ul>
            </li>
            <li class="w-full">
                <a href="https://drive.google.com/drive/folders/1hE5Hmo6CULyxmPlnAEvEVbE9BnKWuvLz?usp=sharing" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-3 text-center">
                    Buku Panduan
                </a>
            </li>
            <!-- Other Links -->
            <li class="w-full">
                <a href="#" class="text-l text-black hover:text-red-400 transition-colors duration-200 block py-2 px-3 text-center">
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
.bg-gradient {
    background: linear-gradient(to bottom, #054083, transparent);
}
.backdrop-blur {
    backdrop-filter: blur(5px);
}
button span {
    transition: all 0.3s ease;
}
</style>
