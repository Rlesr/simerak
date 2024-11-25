<template>
    <aside 
        :class="[
            'w-64 h-[100vh] bg-[#054083] text-white flex flex-col items-start p-4 overflow-y-scroll no-scrollbar fixed z-40 transition-transform duration-300 ease-in-out',
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
            'md:translate-x-0'
        ]"
        @scroll="onScroll"
        ref="scrollContainer">

        <!-- Logo -->
        <div class="mb-6">
            <img src="/src/assets/brand/logo-simerak.png" alt="Logo Simerak" class="w-[200px] ml-[10px] mt-[20px] h-[73px]mx-auto" />
            <hr class="ml-[10px] mt-[20px] w-[200px]" />
        </div>

        <!-- Menu Items -->
        <ul class="space-y-2 w-full">
            <li>
                <a href="/" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083] group">
                   
                    <span href="">Home</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                    
                    <span>Dashboard</span>
                </a>
            </li>

            <li></li>
            <li>
                <div
                    class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083] cursor-pointer"
                    @click="toggleDropdown"
                >

                    <span>Buka Rekening</span>
                    <span :class="{ 'rotate-180': isOpen }" class="ml-auto transition-transform">
                        <!-- Panah dropdown -->
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                    fill="currentColor"
                                ></path>
                            </g>
                        </svg>
                    </span>
                </div>
            </li>

            <ul v-if="isOpen" class="ml-8 space-y-2">
                <li>
                    <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                        <!-- Icon SVG for Bank DKI -->
                        
                        Bank DKI
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                        <!-- Icon SVG for Non Bank DKI -->
                        
                        Non Bank DKI
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                        <!-- Icon SVG for Deposito -->
                        
                        Deposito
                    </a>
                </li>
            </ul>
            <li>
                <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">

                    <span>Pengusulan</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                    
                    <span>Ubah Spesimen</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                    
                    <span>Laporan</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                    
                    <span>User Management</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                   
                    <span>Master</span>
                </a>
            </li>
        </ul>
    </aside>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    name: 'Scrolly',
    props: {
        isSidebarOpen: {
            type: Boolean,
            required: true
        }
    },
    setup() {
        const scrollContainer = ref<HTMLElement | null>(null);

        const onScroll = () => {
            if (scrollContainer.value) {
                const scrollTop = scrollContainer.value.scrollTop;
                const scrollHeight = scrollContainer.value.scrollHeight;
                const clientHeight = scrollContainer.value.clientHeight;
                const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
                console.log(`Scroll position: ${scrollTop}px (${scrollPercentage.toFixed(2)}%)`);
            }
        };

        onMounted(() => {
            if (scrollContainer.value) {
                scrollContainer.value.addEventListener('scroll', onScroll);
            }
        });

        return {
            scrollContainer,
            onScroll
        };
    },

    data() {
        return {
            isOpen: false,
        };
    },

    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        }
    }
});
</script>


<style scoped>
    .rotate-180 {
        transform: rotate(180deg);
    }

    .hover-effect:hover svg {
        fill: #054083;
    }

    .no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
