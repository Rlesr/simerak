<template>
    <Layout />

    <div class="min-h-screen flex flex-auto">
        <!-- Gunakan ml-64 untuk desktop, ml-0 untuk mobile -->
        <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
            <!-- Breadcrumb -->
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="/">Home</a></li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="#" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Lapora Rekening non Bank DKI</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Laporan Info Rekening Bank DKi</h2>
                <p class="text-sm mb-[10px]">Menu ini digunakan untuk melihat daftar Laporan Info Rekening Bank DKI</p>
                <hr class="border-t-2 border-black" />
            </div>

            <!-- Scrollable Content -->
            <div class="flex-1 px-6 py-4 space-y-6">
                <!-- Rekening Details Form -->

                <!-- Rekening List -->
                <div class="bg-white p-4 rounded-md shadow max-h-full max-w-full">
                    <!-- Filter Section -->
                    <div class="flex justify-between items-center w-full overflow-x-auto">
                        <!-- Left side: Search/Filter Controls -->
                        <div class="flex items-center space-x-1">
                            <select v-model="selectedJenisRekening" class="border border-gray-300 rounded-md px-2 py-1">
                                <option value="" disabled>Jenis Rekening</option>
                                <option value="all">ALL</option>
                                <option value="Rekening RKUD">Rekening RKUD</option>
                                <option value="Rekening BUD">Rekening BUD</option>
                                <option value="Rekening Pengeluaran">Rekening Pengeluaran</option>
                                <option value="Rekening Pengeluaran SKPD">Rekening Pengeluaran SKPD</option>
                                <option value="Rekening Pengeluaran BUD">Rekening Pengeluaran BUD</option>
                                <option value="Rekening Pengeluaran BLUD">Rekening Pengeluaran BLUD</option>
                                <option value="Rekening Penerimaan">Rekening Penerimaan</option>
                                <option value="Rekening Penerimaan SKPD">Rekening Penerimaan SKPD</option>
                                <option value="Rekening Penerimaan BUD">Rekening Penerimaan BUD</option>
                                <option value="Rekening Penerimaan BLUD">Rekening Penerimaan BLUD</option>
                                <option value="Rekening BOS Negeri">Rekening BOS Negeri</option>
                                <option value="Rekening BOS Swasta">Rekening BOS Swasta</option>
                                <option value="Rekening BOP Negeri">Rekening BOP Negeri</option>
                                <option value="Rekening BOP Swasta">Rekening BOP Swasta</option>
                                <option value="Rekening Khusus Pengeluaran SKPD">Rekening Khusus Pengeluaran SKPD</option>
                                <option value="Rekening Khusus Pengeluaran BLUD">Rekening Khusus Pengeluaran BLUD</option>
                                <option value="Rekening Khusus Penerimaan SKPD">Rekening Khusus Penerimaan SKPD</option>
                                <option value="Rekening Khusus Penerimaan BLUD">Rekening Khusus Penerimaan BLUD</option>
                            </select>
                            <input
                                v-model="searchNamaRekening"
                                type="text"
                                placeholder="Nama Rekening"
                                class="px-4 py-2 border border-[#7EA5EC] rounded-md text-sm"
                            />
                            <input
                                v-model="searchnoRekening"
                                type="text"
                                placeholder="Nama Rekening Rekening"
                                class="px-4 py-2 border border-[#7EA5EC] rounded-md text-sm"
                            />
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

                    <!-- Table Section -->
                    <div class="overflow-x-auto">
                        <table class="w-full max-w-full border-collapse bg-white text-left text-sm text-gray-700 h-full">
                            <thead>
                                <tr>
                                    <th class="border-b p-4 font-medium text-gray-900">No.</th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Nama Isntansi
                                            <button @click="toggleSort('namaInstansi')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'namaInstansi' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'namaInstansi' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
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
                                            Status Rekening
                                            <button @click="toggleSort('statusRekening')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'statusRekening' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'statusRekening' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Tanggal
                                            <button @click="toggleSort('tanggal')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'tanggal' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'tanggal' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in paginatedData" :key="index" class="border-b">
                                    <td class="border-b p-4">{{ (currentPage - 1) * entriesPerPage + index + 1 }}</td>
                                    <td class="border-b p-4">{{ item.namaInstansi }}</td>
                                    <td class="border-b p-4">{{ item.namaRekening }}</td>
                                    <td class="border-b p-4">{{ item.nomorRekening }}</td>
                                    <td class="border-b p-4">{{ item.jenisRekening }}</td>
                                    <td class="border-b p-4">{{ item.statusRekening }}</td>
                                    <td class="border-b p-4">{{ item.tanggal }}</td>
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
    import { defineComponent } from 'vue';

    interface DataItem {
        tanggal: string;
        namaInstansi: string;
        nomorInstansi: string;
        namaRekening: string;
        jenisRekening: string;
        nomorRekening: string;
        statusRekening: string;
    }

    export default defineComponent({
        name: 'laporanInfoBankDki',
        components: {},
        data() {
            return {
                data: [
                    {
                        tanggal: '01/01/2024',
                        namaInstansi: 'Instansi A',
                        nomorInstansi: '098763',
                        jenisRekening: 'Rekening Pengeluaran SKPD',
                        nomorRekening: '12345678',
                        statusRekening: 'Rekening Aktif',
                        namaRekening: 'Rekening A',
                    },
                    {
                        tanggal: '02/02/2024',
                        namaInstansi: 'Instansi B',
                        nomorInstansi: '098764',
                        jenisRekening: 'Rekening Penerimaan BUD',
                        nomorRekening: '87654321',
                        statusRekening: 'Rekening Aktif',
                        namaRekening: 'Rekening B',
                    },
                    {
                        tanggal: '03/03/2024',
                        namaInstansi: 'Instansi C',
                        nomorInstansi: '098765',
                        jenisRekening: 'Rekening Khusus Pengeluaran SKPD',
                        nomorRekening: '11223344',
                        statusRekening: 'Rekening Aktif',
                        namaRekening: 'Rekening C',
                    },
                    {
                        tanggal: '04/04/2024',
                        namaInstansi: 'Instansi D',
                        nomorInstansi: '098766',
                        jenisRekening: 'Rekening Penerimaan BLUD',
                        nomorRekening: '55667788',
                        statusRekening: 'Rekening Aktif',
                        namaRekening: 'Rekening D',
                    },
                    {
                        tanggal: '05/05/2024',
                        namaInstansi: 'Instansi E',
                        nomorInstansi: '098767',
                        jenisRekening: 'Rekening BUD',
                        nomorRekening: '99887766',
                        statusRekening: 'Rekening Aktif',
                        namaRekening: 'Rekening E',
                    },
                ] as DataItem[],
                sortColumn: null as keyof DataItem | null,
                sortDirection: 'asc' as 'asc' | 'desc',
                entriesPerPage: 5,
                currentPage: 1,
                selectedJenisRekening: '', // Default to 'all'
                selectedDate: null as string | null,
                searchNamaRekening: '',
                searchnoRekening: '',
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

                    if (aValue === bValue) return 0;
                    return aValue < bValue ? (this.sortDirection === 'asc' ? -1 : 1) : this.sortDirection === 'asc' ? 1 : -1;
                });
            },
            filteredData() {
                let filtered = this.sortedData;

                // Filter by selectedJenisRekening
                if (this.selectedJenisRekening && this.selectedJenisRekening !== 'all') {
                    filtered = filtered.filter((item) => item.jenisRekening === this.selectedJenisRekening);
                }

                // Filter by tanggal
                if (this.selectedDate) {
                    filtered = filtered.filter((item) => item.tanggal === this.selectedDate);
                }

                // Filter by namaRekening
                if (this.searchNamaRekening) {
                    filtered = filtered.filter((item) => item.namaRekening.toLowerCase().includes(this.searchNamaRekening.toLowerCase()));
                }

                // Filter by nomorRekening
                if (this.searchnoRekening) {
                    filtered = filtered.filter((item) => item.nomorRekening.includes(this.searchnoRekening));
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
