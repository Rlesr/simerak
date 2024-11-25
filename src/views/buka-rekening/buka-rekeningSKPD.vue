<template>
<Layout />

    <div class="min-h-screen flex overflow-hidden">
        <!-- Sidebar -->

        <!-- Main Content Area dengan Scroll -->
        <div class="content-area py-16 flex-1 flex flex-col overflow-hidden">
            <!-- Breadcrumb -->
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="javascript:;">Home</a></li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Buku Rekening</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Buka Rekening</h2>
                <p class="text-sm mb-[10px]">Menu ini digunakan untuk melihat daftar pembukaan rekening Bank DKI</p>
                <hr class="border-t-2 border-black" />
            </div>

            <!-- Scrollable Content -->
            <div class="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                <!-- Rekening Details Form -->
                <div class="bg-white p-6 rounded-md shadow-md mx-auto">
                    <h3 class="text-2xl font-bold mb-4">Daftar Pembukaan Rekening</h3>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <label for="kode-skpd" class="mr-[200px] text-sm font-medium text-gray-700">Kode SKPD</label>
                            <input
                                id="kode-skpd"
                                type="text"
                                class="block w-[400px] px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="P908763"
                            />
                        </div>
                        <div class="flex items-center">
                            <label for="nama-skpd" class="mr-[195px] text-sm font-medium text-gray-700">Nama SKPD</label>
                            <input
                                id="nama-skpd"
                                type="text"
                                class="block w-[400px] px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="PJKM (Perguruan Tinggi)"
                            />
                        </div>
                    </div>
                </div>

                <!-- Rekening List -->
                <div class="bg-white p-4 rounded-md shadow">
                    <!-- Filter Section -->
                    <div class="flex justify-between items-center w-full">
                        <!-- Left side: Search/Filter Controls -->
                        <div class="flex items-center space-x-4">
                            <input type="text" class="input-field h-10 w-[200px]" placeholder="Nama SKPD" />

                            <select class="input-field h-10 w-[200px]">
                                <option>--Pilih Jenis Rekening--</option>
                            </select>

                            <!-- Date input with calendar icon -->
                            <div class="relative flex items-center border border-gray-300 rounded-md h-10 w-[200px] px-2">
                                <!-- Input untuk tanggal yang menampilkan tanggal yang dipilih -->
                                <input type="date" class="w-full outline-none" @input="selectDate($event)" />

                                <!-- Tombol Ikon Kalender -->
                            </div>

                            <select class="input-field h-10 w-[200px]">
                                <option>--Pilih Status--</option>
                            </select>

                            <button class="btn-primary h-10 w-[200px] flex items-center justify-center text-[#054083]">
                                <p class="text-[#054083] font-semibold">Cari</p>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-[20px] h-[20px] ml-2" viewBox="0,0,255.99431,255.99431">
                                    <g
                                        fill="#054083"
                                        fill-rule="nonzero"
                                        stroke="none"
                                        stroke-width="1"
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        stroke-miterlimit="10"
                                        stroke-dasharray=""
                                        stroke-dashoffset="0"
                                        font-family="none"
                                        font-weight="none"
                                        font-size="none"
                                        text-anchor="none"
                                        style="mix-blend-mode: normal"
                                    >
                                        <g transform="scale(5.12,5.12)">
                                            <path
                                                d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </button>

                            <button class="btn-primary h-10 w-[200px] flex items-center justify-center">
                                <p class="text-[#054083] font-semibold">Tambah</p>
                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px] ml-2" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M12 4V20" stroke="#054083" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>

                        <!-- Right side: Action Buttons with proper spacing -->
                        <div class="flex items-center ml-8">
                            <div class="flex border ml-[300px] border-[#7EA5EC] h-[40px] rounded-md overflow-hidden">
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm">Copy</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-4 py-2 text-sm border-[#7EA5EC]">CSV</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">PDF</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">Excel</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">Print</button>
                            </div>
                        </div>
                    </div>

                    <!-- Table Section -->
                    <table class="w-full border-collapse bg-white text-left text-sm text-gray-700">
                        <thead>
                            <tr>
                                <th class="border-b p-4 font-medium text-gray-900">No.</th>
                                <th class="border-b p-4 font-medium text-gray-900">
                                    <div class="flex items-center space-x-2">
                                        Tanggal Buka Rekening
                                        <button @click="toggleSort('tanggalBuka')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'tanggalBuka' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'tanggalBuka' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                                <th class="border-b p-4 font-medium text-gray-900">
                                    <div class="flex items-center space-x-2">
                                        Kode SKPD
                                        <button @click="toggleSort('kodeSKPD')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'kodeSKPD' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'kodeSKPD' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                                <th class="border-b p-4 font-medium text-gray-900">
                                    <div class="flex items-center space-x-2">
                                        Nama SKPD
                                        <button @click="toggleSort('namaSKPD')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'namaSKPD' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'namaSKPD' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                                <th class="border-b p-4 font-medium text-gray-900">
                                    <div class="flex items-center space-x-2">
                                        Jenis Rekening
                                        <button @click="toggleSort('jenisRekening')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'jenisRekening' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'jenisRekening' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                                <th class="border-b p-4 font-medium text-gray-900">
                                    <div class="flex items-center space-x-2">
                                        Nomor Rekening
                                        <button @click="toggleSort('nomorRekening')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'nomorRekening' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'nomorRekening' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                                <th class="border-b p-4 font-medium text-gray-900">
                                    <div class="flex items-center space-x-2">
                                        Nama Cabang
                                        <button @click="toggleSort('namaCabang')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'namaCabang' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'namaCabang' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                                <th class="border-b p-4 font-medium text-gray-900">Status Pengajuan</th>
                                <th class="border-b p-4 font-medium text-gray-900">Catatan</th>
                                <th class="border-b p-4 font-medium text-gray-900">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in paginatedData" :key="index" class="border-b">
                                <td class="border-b p-4">{{ (currentPage - 1) * entriesPerPage + index + 1 }}</td>
                                <td class="border-b p-4">{{ item.tanggalBuka }}</td>
                                <td class="border-b p-4">{{ item.kodeSKPD }}</td>
                                <td class="border-b p-4">{{ item.namaSKPD }}</td>
                                <td class="border-b p-4">{{ item.jenisRekening }}</td>
                                <td class="border-b p-4">{{ item.nomorRekening }}</td>
                                <td class="border-b p-4">{{ item.namaCabang }}</td>
                                <td class="border-b p-4">
                                    <span class="bg-orange-500 text-white px-3 py-1 rounded-full">{{ item.statusPengajuan }}</span>
                                </td>
                                <td class="border-b p-4">{{ item.catatan }}</td>
                                <td class="border-b p-4">
                                    <button class="text-blue-500">⋮</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Pagination Section -->
                    <div class="flex justify-between items-center mt-4">
                        <!-- Entries Selection -->
                        <div class="text-sm">
                            Show
                            <select v-model="entriesPerPage" @change="changeEntries" class="border rounded-md p-1 text-gray-600">
                                <option :value="2">2</option>
                                <option :value="5">5</option>
                                <option :value="10">10</option>
                            </select>
                            entries
                        </div>

                        <!-- Pagination Controls -->
                        <div class="flex items-center gap-2">
                            <button
                                @click="goToFirstPage"
                                :disabled="currentPage === 1"
                                class="px-2 py-1 rounded-md text-sm text-gray-500"
                                :class="{ 'text-gray-300': currentPage === 1 }"
                            >
                                First
                            </button>
                            <button
                                @click="prevPage"
                                :disabled="currentPage === 1"
                                class="px-2 py-1 rounded-md text-sm text-gray-500"
                                :class="{ 'text-gray-300': currentPage === 1 }"
                            >
                                Previous
                            </button>
                            <button
                                v-for="page in totalPages"
                                :key="page"
                                @click="goToPage(page)"
                                class="px-3 py-1 rounded-md text-sm"
                                :class="{ 'bg-blue-600 text-white': currentPage === page, 'text-gray-500': currentPage !== page }"
                            >
                                {{ page }}
                            </button>
                            <button
                                @click="nextPage"
                                :disabled="currentPage === totalPages"
                                class="px-2 py-1 rounded-md text-sm text-gray-500"
                                :class="{ 'text-gray-300': currentPage === totalPages }"
                            >
                                Next
                            </button>
                            <button
                                @click="goToLastPage"
                                :disabled="currentPage === totalPages"
                                class="px-2 py-1 rounded-md text-sm text-gray-500"
                                :class="{ 'text-gray-300': currentPage === totalPages }"
                            >
                                Last
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, computed } from 'vue';
    import Sidebar from '@/components/layout/Sidebar.vue';
    import Header from '@/components/layout/Header.vue';


    interface DataItem {
        tanggalBuka: string;
        kodeSKPD: string;
        namaSKPD: string;
        jenisRekening: string;
        nomorRekening: string;
        namaCabang: string;
        statusPengajuan: string;
        catatan: string;
    }

    export default defineComponent({
        name: 'BukaRekening',
        components: {
            Sidebar,
            Header, // Register sidebar component
        },
        data() {
            return {
                data: [
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098763',
                        namaSKPD: 'Lorem Ipsum',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '12345678',
                        namaCabang: 'Cabang A',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 1',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: 'dd/mm/yy',
                        kodeSKPD: '098764',
                        namaSKPD: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Rekening Aktif',
                        catatan: 'Catatan 2',
                    },
                    // Tambahkan data sesuai kebutuhan
                ] as DataItem[],
                sortColumn: null as keyof DataItem | null,
                sortDirection: 'asc' as 'asc' | 'desc',
                entriesPerPage: 5,
                currentPage: 1,
            };
        },
        setup() {
            const formattedDate = ref<string>('');
            const showCalendar = ref<boolean>(false);

            // Toggle calendar visibility when clicking the icon
            const toggleCalendar = () => {
                showCalendar.value = !showCalendar.value;
            };

            // Select date and format it as dd/mm/yyyy
            const selectDate = (event: Event) => {
                const target = event.target as HTMLInputElement;
                const date = new Date(target.value);
                formattedDate.value = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
                showCalendar.value = false;
            };

            return {
                formattedDate,
                selectDate,
                showCalendar,
                toggleCalendar,
            };
        },

        computed: {
            totalPages() {
                return Math.ceil(this.sortedData.length / this.entriesPerPage);
            },
            sortedData() {
                if (!this.sortColumn) return this.data;

                return [...this.data].sort((a, b) => {
                    const aValue = a[this.sortColumn!];
                    const bValue = b[this.sortColumn!];

                    if (aValue === bValue) return 0;
                    if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
                    if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
                    return 0;
                });
            },
            paginatedData() {
                const start = (this.currentPage - 1) * this.entriesPerPage;
                const end = start + this.entriesPerPage;
                return this.sortedData.slice(start, end);
            },
        },
        methods: {
            toggleSort(column: keyof DataItem) {
                if (this.sortColumn === column) {
                    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
                } else {
                    this.sortColumn = column;
                    this.sortDirection = 'asc';
                }
            },
            changeEntries() {
                this.currentPage = 1;
            },
            goToFirstPage() {
                this.currentPage = 1;
            },
            goToLastPage() {
                this.currentPage = this.totalPages;
            },
            nextPage() {
                if (this.currentPage < this.totalPages) {
                    this.currentPage++;
                }
            },
            prevPage() {
                if (this.currentPage > 1) {
                    this.currentPage--;
                }
            },
            goToPage(page: number) {
                if (page > 0 && page <= this.totalPages) {
                    this.currentPage = page;
                }
            },
        },
    });
</script>

<style scoped>
    .fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgb(249 250 251);
  z-index: 50;
}
    .fixed-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 250px; /* Adjust width as needed */
        background-color: #1e3a8a; /* Adjust color as needed */
    }
    .content-area {
        margin-left: 250px; /* Matches sidebar width */
    }
    .input-field {
        @apply w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm;
    }
    .btn-primary {
        @apply bg-[#7EA5EC] border-b p-4 rounded-md;
    }
    .btn-secondary {
        @apply bg-blue-100 text-blue-700 border-b p-4 rounded-md;
    }
</style>
