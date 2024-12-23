<template>
    <Layout />
    <div class="min-h-screen flex overflow-hidden">
        <!-- Sidebar -->

        <!-- Main Content Area dengan Scroll -->
        <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
            <!-- Breadcrumb -->
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="/">Home</a></li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="/home/pengusulan/bendahara/opd" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70"
                            >Pengusulan</a
                        >
                    </li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="/home/pengusulan/opd/pelaksana" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70"
                            >pelaksana</a
                        >
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Pengusulan</h2>
                <p class="text-sm mb-[10px]">Menu ini digunakan untuk melihat daftar Pengusulan</p>
                <hr class="border-t-2 border-black" />

                <!-- Info Skpd Bank Lain -->
                <div class="bg-white p-6 rounded-md shadow-md mx-auto">
                    <h3 class="text-2xl font-bold mb-4">Daftar Pelaksana</h3>
                    <div class="space-y-4">
                        <div class="flex flex-col sm:flex-row sm:items-center sm:gap-x-4">
                            <label for="kode-skpd" class="text-sm font-medium text-gray-700 sm:w-[200px] mb-2 sm:mb-0">Kode SKPD</label>
                            <input
                                id="kode-skpd"
                                type="text"
                                class="block w-full sm:w-[400px] px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="P908763"
                                readonly
                            />
                        </div>
                        <div class="flex flex-col sm:flex-row sm:items-center sm:gap-x-4">
                            <label for="nama-skpd" class="text-sm font-medium text-gray-700 sm:w-[200px] mb-2 sm:mb-0">Nama SKPD</label>
                            <input
                                id="nama-skpd"
                                type="text"
                                class="block w-full sm:w-[400px] px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="PJKM (Perguruan Tinggi)"
                                readonly
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Scrollable Content -->
            <div class="flex-1 px-6 py-4 space-y-6">
                <!-- Rekening List -->
                <div class="bg-white p-4 rounded-md shadow max-h-full max-w-full">
                    <!-- Filter Section -->
                    <div class="flex justify-between items-center w-full overflow-x-auto">
                        <!-- Left side: Search/Filter Controls -->
                        <div class="flex items-center space-x-4">
                            <div class="flex flex-wrap gap-4 items-center">
                                <!-- Input Pencarian -->
                                <input
                                    type="text"
                                    v-model="searchQuery"
                                    class="input-field h-10 w-[200px] border border-gray-300 rounded px-2"
                                    placeholder="Cari Nama Rekening"
                                />
                            </div>

                            <div class="relative flex items-center border border-gray-300 rounded-md h-10 w-[200px] px-2">
                                <!-- Input untuk Flatpickr -->
                                <input type="text" ref="flatpickrInput" class="w-[200px] outline-none" placeholder="Pilih tanggal pengajuan" readonly />
                                <!-- Tombol Clear -->
                                <button class="absolute right-2 text-gray-500 hover:text-red-500 focus:outline-none" @click="clearDate" v-if="selectedDate">
                                    Clear
                                </button>
                            </div>

                            <div class="flex gap-2">
                                <select v-model="selectedStatus" class="border border-gray-300 rounded-md px-2 py-1">
                                    <option disabled value="">Pilih Status Pengajuan</option>
                                    <option
                                        v-for="option in statusOptions"
                                        :key="option.value"
                                        :value="option.value"
                                        class="hover:bg-blue-500 hover:text-white"
                                    >
                                        {{ option.label }}
                                    </option>
                                </select>
                            </div>

                            <button class="btn-primary h-8 w-[200px] flex items-center justify-center">
                                <p class="text-[#054083] font-semibold">Tambah</p>
                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px] ml-2" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M12 4V20" stroke="#054083" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>

                        <div class="flex items-center ml-8">
                            <div class="flex border border-[#7EA5EC] h-[40px] rounded-md overflow-hidden">
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm">Copy</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-4 py-2 text-sm border-[#7EA5EC]">CSV</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">PDF</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">Excel</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">Print</button>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full max-w-full border-collapse bg-white text-left text-sm text-gray-700">
                            <thead>
                                <tr>
                                    <th class="border-b p-4 font-medium text-gray-900">No.</th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Tanggal Pengajuan
                                            <button @click="toggleSort('tanggalPengajuan')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'tanggalPengajuan' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'tanggalPengajuan' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>

                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Nama
                                            <button @click="toggleSort('nama')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'nama' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'nama' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            NIP/NRK
                                            <button @click="toggleSort('nipataunrk')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'nipataunrk' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'nipataunrk' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Jabatan/Nama Terganti
                                            <button @click="toggleSort('Jabatan')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'Jabatan' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'Jabatan' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Pengganti
                                            <button @click="toggleSort('Pengganti')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'Pengganti' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'Pengganti' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
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
                                    <td class="border-b p-4">{{ item.tanggalPengajuan }}</td>
                                    <td class="border-b p-4">{{ item.nama }}</td>
                                    <td class="border-b p-4">{{ item.nipataunrk }}</td>
                                    <td class="border-b p-4">{{ item.Jabatan }}</td>
                                    <td class="border-b p-4">{{ item.Pengganti }}</td>
                                    <td class="border-b p-4">
                                        <span
                                            class="text-white w-auto min-w-[150px] h-8 flex items-center justify-center px-3 py-1 rounded-full text-sm whitespace-nowrap"
                                            :class="getStatusColorClass(item.statusPengajuan)"
                                        >
                                            {{ item.statusPengajuan }}
                                        </span>
                                    </td>
                                    <td class="border-b p-4">{{ item.catatan }}</td>
                                    <td class="border-b p-4">
                                        <button class="text-blue-500">⋮</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
    import { defineComponent, ref, computed, onMounted } from 'vue';
    import Layout from '@/components/layout/Layout.vue';
    import flatpickr from 'flatpickr';
    import 'flatpickr/dist/flatpickr.min.css';

    interface DataItem {
        tanggalPengajuan: string;
        Jabatan: string;
        Pengganti: string;
        nama: string;
        nipataunrk: string;
        nomorRekening: string;
        namaCabang: string;
        statusPengajuan: string;
        catatan: string;
    }

    export default defineComponent({
        name: 'BukaRekening',
        components: {
            Layout,
        },
        data() {
            return {
                data: [
                    {
                        tanggalPengajuan: '01/11/2024',
                        nama: 'Lorem Ipsum',
                        nipataunrk: 'Lorem Ipsum',
                        Jabatan: 'letnan',
                        Pengganti: 'kepala organisasi',
                        statusPengajuan: 'Pengusulan Diterima',
                        catatan: 'Catatan 1',
                    },
                    {
                        tanggalPengajuan: '03/11/2024',
                        nama: 'Dolor Sit',
                        nipataunrk: 'Lorem Ipsum',
                        Jabatan: 'kolonel',
                        Pengganti: 'kepala organisasi',
                        statusPengajuan: 'Pengusulan Ditolak',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalPengajuan: '05/11/2024',
                        nama: 'Dolor Sit',
                        nipataunrk: 'Lorem Ipsum',
                        Jabatan: 'jendral',
                        Pengganti: 'kepala organisasi',
                        statusPengajuan: 'Pengusulan Diterima',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalPengajuan: '08/11/2024',
                        nama: 'Dolor Sit',
                        nipataunrk: 'Lorem Ipsum',
                        Jabatan: 'presiden',
                        Pengganti: 'kepala organisasi',
                        statusPengajuan: 'Ditolak oleh SBPK',
                        catatan: 'Catatan 3',
                    },
                ] as DataItem[],
                sortColumn: null as keyof DataItem | null,
                sortDirection: 'asc' as 'asc' | 'desc',
                entriesPerPage: 5,
                currentPage: 1,
                selectedStatus: '',
                searchQuery: '',
                statusOptions: [
                    // Define the dropdown options here
                    { value: 'all', label: 'All' },
                    { value: 'Disetujui oleh SBPK', label: 'Disetujui oleh SBPK' },
                    { value: 'Ditolak oleh SBPK', label: 'Ditolak oleh SBPK' },
                    { value: 'Disetujui oleh BPKD Pembinaan', label: 'Disetujui oleh BPKD Pembinaan' },
                    { value: 'Ditolak oleh BPKD Pembinaan', label: 'Ditolak oleh BPKD Pembinaan' },
                    { value: 'Proses Penerbitan Surat Penolakan', label: 'Proses Penerbitan Surat Penolakan' },
                    { value: 'Pengusulan Diterima', label: 'Pengusulan Diterima' },
                    { value: 'Pengusulan Ditolak', label: 'Pengusulan Ditolak' },
                ],
            };
        },
        setup() {
            const flatpickrInput = ref<HTMLInputElement | null>(null);
            const selectedDate = ref<string>('');

            const initFlatpickr = () => {
                if (flatpickrInput.value) {
                    flatpickr(flatpickrInput.value, {
                        dateFormat: 'd/m/Y',
                        defaultDate: selectedDate.value || null,
                        onChange: (selectedDates, dateStr) => {
                            selectedDate.value = dateStr; // Update date when changed
                        },
                    });
                }
            };

            const clearDate = () => {
                selectedDate.value = '';
                if (flatpickrInput.value) {
                    flatpickrInput.value.value = ''; // Clear Flatpickr input
                }
            };

            onMounted(() => {
                initFlatpickr();
            });

            return {
                flatpickrInput,
                selectedDate,
                clearDate,
            };
        },
        computed: {
            totalPages() {
                return Math.ceil(this.filteredData.length / this.entriesPerPage);
            },
            sortedData() {
                if (!this.sortColumn) return this.data;

                return [...this.data].sort((a, b) => {
                    const aValue = a[this.sortColumn!];
                    const bValue = b[this.sortColumn!];

                    if (aValue === bValue) {
                        const statusOrder = [
                            'Disetujui oleh SBPK',
                            'Ditolak oleh SBPK',
                            'Disetujui oleh BPKD Pembinaan',
                            'Ditolak oleh BPKD Pembinaan',
                            'Proses Penerbitan Surat Penolakan',
                            'Pengusulan Diterima',
                            'Pengusulan Ditolak',
                        ];

                        const aStatusIndex = statusOrder.indexOf(a.statusPengajuan.toLowerCase());
                        const bStatusIndex = statusOrder.indexOf(b.statusPengajuan.toLowerCase());

                        if (aStatusIndex === bStatusIndex) return 0;
                        return aStatusIndex < bStatusIndex ? -1 : 1;
                    }

                    return aValue < bValue ? (this.sortDirection === 'asc' ? -1 : 1) : this.sortDirection === 'asc' ? 1 : -1;
                });
            },
            filteredData() {
                let filtered = this.sortedData;

                // Filter berdasarkan tanggal
                if (this.selectedDate) {
                    filtered = filtered.filter((item) => item.tanggalPengajuan === this.selectedDate);
                }

                if (this.selectedStatus && this.selectedStatus !== 'all') {
                    filtered = filtered.filter((item) => item.statusPengajuan.toLowerCase().includes(this.selectedStatus.toLowerCase()));
                }
                if (this.searchQuery) {
                    filtered = filtered.filter((item) => item.nama.toLowerCase().includes(this.searchQuery.toLowerCase()));
                }

                return filtered;
            },
            paginatedData() {
                const start = (this.currentPage - 1) * this.entriesPerPage;
                const end = start + this.entriesPerPage;
                return this.filteredData.slice(start, end);
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
            getStatusColorClass(status: string): string {
                switch (status) {
                    case 'Disetujui oleh SBPK':
                        return 'bg-green-500';
                    case 'Disetujui oleh BPKD Pembinaan':
                        return 'bg-green-500';
                    case 'Ditolak oleh SBPK':
                        return 'bg-red-500';
                    case 'Ditolak oleh BPKD Pembinaan':
                        return 'bg-red-500';
                    case 'Proses Penerbitan Surat Penolakan':
                        return 'bg-yellow-500';
                    case 'Pengusulan Diterima':
                        return 'bg-green-500';
                    case 'Pengusulan Ditolak':
                        return 'bg-red-500';
                    default:
                        return 'bg-gray-500'; // Default color if no match
                }
            },
            clearSearch() {
                this.searchQuery = ''; // Mengosongkan input pencarian
                this.currentPage = 1; // Kembali ke halaman pertama
            },
            changeEntries() {
                this.currentPage = 1;
            },
            clearStatus() {
                this.selectedStatus = ''; // Clear the status filter
                this.goToFirstPage(); // Optional: go back to the first page
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
    :table {
        width: 100%; /* Buat tabel memenuhi lebar kontainer */
        border-collapse: collapse; /* Hilangkan jarak antar border */
        word-wrap: break-word; /* Agar teks panjang tidak meluber */
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
    * {
        box-sizing: border-box;
    }
</style>
