<template>
    <Header class="fixed-header border-1" />

    <div class="min-h-screen flex overflow-hidden">
        <!-- Sidebar -->
        <Sidebar class="h-[100vh] fixed-sidebar" />

        <!-- Main Content Area dengan Scroll -->
        <div class="content-area py-16 flex-1 flex flex-col overflow-hidden">
            <!-- Breadcrumb -->
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="/">Home</a></li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="/buka/opd/bank-lain" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70"
                            >Buku Rekening Bank Lain</a
                        >
                    </li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">List</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Buka Rekening</h2>
                <p class="text-sm mb-[10px]">Menu ini digunakan untuk melihat daftar pembukaan rekening Bank lain</p>
                <hr class="border-t-2 border-black" />
            </div>

            <!-- Scrollable Content -->
            <div class="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                <!-- Rekening Details Form -->
                <div class="bg-white p-6 rounded-md shadow-md mx-auto">
                    <h3 class="text-2xl font-bold mb-4">List Buka Rekening Bank Lain List</h3>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <label for="kode-skpd" class="mr-[200px] text-sm font-medium text-gray-700">Kode SKPD</label>
                            <input
                                id="kode-skpd"
                                type="text"
                                class="block w-[400px] px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="P908763"
                                readonly
                            />
                        </div>
                        <div class="flex items-center">
                            <label for="nama-skpd" class="mr-[195px] text-sm font-medium text-gray-700">Nama SKPD</label>
                            <input
                                id="nama-skpd"
                                type="text"
                                class="block w-[400px] px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="PJKM (Perguruan Tinggi)"
                                readonly
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
                            <div class="flex items-center gap-4">
                                <!-- Input Pencarian -->
                                <input
                                    type="text"
                                    v-model="searchQuery"
                                    class="input-field h-10 w-[200px] border border-gray-300 rounded px-2"
                                    placeholder="Cari Nama Rekening"
                                />
                            </div>

                            <div class="relative flex items-center border border-gray-300 rounded-md h-10 w-[200px] px-2">
                                <!-- Input untuk memilih tanggal -->
                                <input
                                    type="date"
                                    class="w-full outline-none"
                                    @input="selectDate($event)"
                                    :value="formattedDate ? formattedDate.split('/').reverse().join('-') : ''"
                                />
                                <!-- Tombol Clear -->
                                <button class="ml-2 text-gray-500 hover:text-red-500 focus:outline-none" @click="clearDate">Clear</button>
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
                            <div class="flex border border-[#7EA5EC] h-[40px] rounded-md overflow-hidden">
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
                                        Nama Rekening
                                        <button @click="toggleSort('namaRekening')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'namaRekening' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'namaRekening' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                                <th class="border-b p-4 font-medium text-gray-900">
                                    <div class="flex items-center space-x-2">
                                        Rekening
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

                                <th class="border-b p-4 font-medium text-gray-900">Status Pengajuan</th>
                                <th class="border-b p-4 font-medium text-gray-900">Catatan</th>
                                <th class="border-b p-4 font-medium text-gray-900">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in paginatedData" :key="index" class="border-b">
                                <td class="border-b p-4">{{ (currentPage - 1) * entriesPerPage + index + 1 }}</td>
                                <td class="border-b p-4">{{ item.tanggalBuka }}</td>
                                <td class="border-b p-4">{{ item.namaRekening }}</td>
                                <td class="border-b p-4">{{ item.jenisRekening }}</td>
                                <td class="border-b p-4">{{ item.nomorRekening }}</td>
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
        namaRekening: string;
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
            Header,
        },
        data() {
            return {
                data: [
                    {
                        tanggalBuka: '01/11/2024',
                        namaRekening: 'Lorem Ipsum',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '12345678',
                        namaCabang: 'Cabang A',
                        statusPengajuan: 'rekening-aktif',
                        catatan: 'Catatan 1',
                    },
                    {
                        tanggalBuka: '03/11/2024',
                        namaRekening: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Pengajuan',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: '05/11/2024',
                        namaRekening: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Selesai',
                        catatan: 'Catatan 2',
                    },
                    {
                        tanggalBuka: '08/11/2024',
                        namaRekening: 'Dolor Sit',
                        jenisRekening: 'Lorem Ipsum',
                        nomorRekening: '87654321',
                        namaCabang: 'Cabang B',
                        statusPengajuan: 'Ditolak oleh Dinas Pendidikan',
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
                    { value: 'pengajuan', label: 'Pengajuan' },
                    { value: 'Disetujui oleh Dinas Pendidikan', label: 'Disetujui oleh Dinas Pendidikan' },
                    { value: 'Ditolak oleh Dinas Pendidikan', label: 'Ditolak oleh Dinas Pendidikan' },
                    { value: 'Disetujui oleh BPKD', label: 'Disetujui oleh BPKD' },
                    { value: 'Ditolak oleh BPKD', label: 'Ditolak oleh BPKD' },
                    { value: 'Penerbitan Surat Rekomendasi BPKD', label: 'Penerbitan Surat Rekomendasi BPKD' },
                    { value: 'selesai', label: 'Selesai' },
                    { value: 'rekening-aktif', label: 'Rekening Aktif' },
                ],
            };
        },
        setup() {
            const formattedDate = ref<string>('');

            const selectDate = (event: Event) => {
                const target = event.target as HTMLInputElement;
                const date = new Date(target.value);
                formattedDate.value = `${String(date.getDate()).padStart(2, '0 ')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
            };

            const clearDate = () => {
                formattedDate.value = '';
            };

            return {
                formattedDate,
                selectDate,
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
                            'pengajuan',
                            'disetujui-dinas',
                            'ditolak-dinas',
                            'disetujui-bpkd',
                            'ditolak-bpkd',
                            'penerbitan',
                            'selesai',
                            'rekening-aktif',
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

                if (this.formattedDate) {
                    filtered = filtered.filter((item) => item.tanggalBuka === this.formattedDate);
                }

                if (this.selectedStatus && this.selectedStatus !== 'all') {
                    filtered = filtered.filter((item) => item.statusPengajuan.toLowerCase().includes(this.selectedStatus.toLowerCase()));
                }
                if (this.searchQuery) {
                    filtered = filtered.filter((item) => item.namaRekening.toLowerCase().includes(this.searchQuery.toLowerCase()));
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
                    case 'rekening-aktif':
                        return 'bg-green-500';
                    case 'selesai':
                        return 'bg-blue-500';
                    case 'Pengajuan':
                        return 'bg-yellow-500';
                    case 'Ditolak oleh Dinas Pendidikan':
                    case 'Ditolak oleh BPKD':
                        return 'bg-red-500';
                    case 'Disetujui oleh Dinas Pendidikan':
                    case 'Disetujui oleh BPKD':
                        return 'bg-purple-500';
                    case 'Penerbitan Surat Rekomendasi BPKD':
                        return 'bg-orange-500';
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
