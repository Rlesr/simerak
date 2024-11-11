<template>
    <nav
        :class="{'backdrop-blur': menuOpen}"
        class="fixed top-0 left-0 w-full z-50 bg-gradient py-3.5 px-6 flex justify-between items-center transition-all duration-300"
    >
        <!-- Logo -->
        <div v-if="!menuOpen" class="flex items-center cursor-pointer">
            <a href="/">
                <img src="/src/assets/brand/bpkd.png" alt="Logo" class="w-[150px] md:w-[227px] h-auto">
            </a>
        </div>

        <!-- Mobile Hamburger Icon -->
        <div class="lg:hidden flex items-center z-50">
            <button @click="toggleMenu" class="text-white focus:outline-none">
                <span
                    :class="{'transform rotate-45 translate-y-1.5': menuOpen}"
                    class="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"
                ></span>
                <span
                    :class="{'opacity-0': menuOpen}"
                    class="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"
                ></span>
                <span
                    :class="{'transform -rotate-45 -translate-y-1.5': menuOpen}"
                    class="block w-6 h-0.5 bg-white transition-all duration-300"
                ></span>
            </button>
        </div>

        <!-- Navigation Links -->
        <ul
            :class="{
                'hidden': !menuOpen,
                'lg:flex': true,
                'flex-col': menuOpen,
                'lg:flex-row': true,
                'absolute': menuOpen,
                'top-0': menuOpen,
                'left-0': menuOpen,
                'w-full': menuOpen,
                'bg-white': menuOpen,
                'pt-20': menuOpen,
                'z-40': menuOpen
            }"
            class="flex items-center space-x-0 lg:space-x-5"
        >
            <li
                v-for="(link, index) in navLinks"
                :key="index"
                class="w-full lg:w-auto relative group"
            >
                <a
                    :href="link.href"
                    @click="setActiveLink(index)"
                    :class="{
                        'text-[#F57900]': activeLink === index,
                        'text-white': activeLink !== index
                    }"
                    class="text-l hover:text-[#F57900] transition-colors duration-200 block py-2 px-3 text-center relative"
                >
                    {{ link.name }}
                    <span
                        v-if="activeLink === index"
                        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-8 bg-[#F57900] rounded-full"
                    ></span>
                </a>
            </li>

            <!-- Master Dropdown -->
            <li class="relative w-full lg:w-auto group">
                <button
                    @click="toggleDropdown"
                    :class="{
                        'text-[#F57900]': dropdownOpen,
                        'text-black': !dropdownOpen
                    }"
                    class="text-l hover:text-[#F57900] transition-colors duration-200 block py-2 px-3 text-center w-full relative"
                >
                    Master
                    <span
                        v-if="dropdownOpen"
                        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-8 bg-[#F57900] rounded-full"
                    ></span>
                </button>
                <ul
                    v-if="dropdownOpen"
                    class="lg:absolute lg:left-0 lg:mt-2 w-full lg:w-[250px] bg-white text-sm text-black shadow-lg rounded-lg lg:z-50"
                >
                    <li
                        v-for="(item, index) in masterItems"
                        :key="index"
                        class="hover:bg-gray-200"
                    >
                        <a href="#" class="block py-2 px-6">{{ item }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
    setup() {
        const menuOpen = ref(false);
        const dropdownOpen = ref(false);
        const activeLink = ref(0);
        const isScrolled = ref(false);

        const navLinks = [
            { name: 'Dashboard', href: '#' },
            { name: 'Buka Rekening', href: '#' },
            { name: 'Tutup Rekening', href: '#' },
            { name: 'Pengusulan', href: '#' },
            { name: 'User Management', href: '#' },
            { name: 'Ubah Specimen', href: '#' },
            { name: 'Laporan', href: '#' },
            { name: 'Buku Panduan', href: 'https://drive.google.com/drive/folders/1hE5Hmo6CULyxmPlnAEvEVbE9BnKWuvLz?usp=sharing' },
            { name: 'Akun', href: '#' }
        ];

        const masterItems = [
            "Identifikasi Kategori", "Identifikasi Rekening", "Jenis Laporan",
            "Jenis Pengajuan", "Jenis Rekening", "Provinsi", "Kota",
            "Kecamatan", "Kelurahan", "Kode Bank DKI", "SKPD dan Sekolah",
            "Status", "Syarat", "Opsi", "Filter"
        ];

        const toggleMenu = () => {
            menuOpen.value = !menuOpen.value;
            dropdownOpen.value = false;
        };

        const toggleDropdown = () => {
            dropdownOpen.value = !dropdownOpen.value;
        };

        const setActiveLink = (index) => {
            activeLink.value = index;
            menuOpen.value = false;
        };

        const handleScroll = () => {
            isScrolled.value = window.scrollY > 50;
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            menuOpen,
            dropdownOpen,
            activeLink,
            isScrolled,
            navLinks,
            masterItems,
            toggleMenu,
            toggleDropdown,
            setActiveLink
        };
    },
};
</script>

<style scoped>
.bg-gradient {
    background: linear-gradient(to bottom, #054083, transparent);
    transition: background-color 0.3s ease;
}

.backdrop-blur {
    backdrop-filter: blur(5px);
    background-color: rgba(5, 64, 131, 0.8);
}

button span {
    transition: all 0.3s ease;
}

/* Mobile Responsiveness */
@media (max-width: 1024px) {
    nav ul {
        position: fixed;
        height: 100vh;
        overflow-y: auto;
        padding-bottom: 50px;
    }
}
</style>
