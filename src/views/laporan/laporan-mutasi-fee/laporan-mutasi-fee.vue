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
                        <a href="/home/laporan/mutasi-fee" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70"
                            >Laporan</a
                        >
                    </li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="#" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">List</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Laporan Mutasi FEE</h2>
                <p class="text-sm mb-[10px]">Menu ini digunakan untuk melihat daftar Laporan mutasi fee</p>
                <hr class="border-t-2 border-black" />


            </div>

            <!-- Scrollable Content -->
            <div class="flex-1 px-6 py-4 space-y-6">
                <!-- Rekening List -->
                <div class="bg-white p-4 rounded-md shadow max-h-full max-w-full">
                    <!-- Filter Section -->
                    <div class="flex justify-between items-center w-full overflow-x-auto">
                        <!-- Left side: Search/Filter Controls -->
                        <div class="flex items-center space-x-4">
                            <div class="flex gap-2">
                                <select v-model="selectedTahun" class="border border-gray-300 rounded-md px-2 py-1">
                                    <option disabled value="">Tahun</option>
                                    <option v-for="option in tahunOptions" :key="option.value" :value="option.value" class="hover:bg-blue-500 hover:text-white">
                                        {{ option.label }}
                                    </option>
                                </select>
                                <select v-model="selectedBulan" class="border border-gray-300 rounded-md px-2 py-1">
                                    <option disabled value="">Bulan</option>
                                    <option v-for="option in BulanOptions" :key="option.value" :value="option.value" class="hover:bg-blue-500 hover:text-white">
                                        {{ option.label }}
                                    </option>
                                </select>
                            </div>
                            <div class="flex gap-2">
                                <select v-model="selectedJenisRekening" class="border border-gray-300 rounded-md px-2 py-1">
                                    <option value="null" disabled>Jenis Rekening</option>
                                    <option value="all" selected>ALL</option>
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
                            </div>
                        </div>

                        <div class="flex items-center ml-8">
                            <div class="flex border border-[#7EA5EC] h-[40px] rounded-md overflow-hidden">
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm">Copy</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-4 py-2 text-sm border-[#7EA5EC]">CSV</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">PDF</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">Excel</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">Print</button>
                                <button class="bg-[#3e55b9] text-[#ffffff] px-3 py-2 text-sm border-[#3e55b9]" @click="isModalOpen = true">Hitung Debit</button>
                            </div>
                            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                                <div class="bg-white rounded-lg shadow-lg w-1/3 p-6">
                                    <h2 class="text-xl font-bold text-gray-700 mb-4">Hasil Perhitungan</h2>
                                    <p class="text-gray-600">Total Debit dari data yang dipilih adalah:</p>
                                    <p class="text-3xl font-bold text-blue-500 mt-2">{{ formatCurrency(totalDebit) }}</p>
                                    <div class="mt-6 flex justify-end space-x-2">
                                        <button class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400" @click="isModalOpen = false">
                                            Tutup
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full max-w-full border-collapse bg-white text-left text-sm text-gray-700">
                            <thead>
                                <tr>
                                    <th class="border-b p-4 font-medium text-gray-900">Pilih</th>
                                    <th class="border-b p-4 font-medium text-gray-900">No</th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Tanggal Transaksi
                                            <button @click="toggleSort('tanggalTransaksi')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        :fill="sortColumn === 'tanggalTransaksi' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <path
                                                        :fill="sortColumn === 'tanggalTransaksi' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900">Jam Transaksi</th>
                                    <th class="border-b p-4 font-medium text-gray-900">Kode Transaksi</th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Nama Rekening
                                            <button @click="toggleSort('namaRekening')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        :fill="sortColumn === 'namaRekening' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <path
                                                        :fill="sortColumn === 'namaRekening' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900">Nomor Rekening</th>
                                    <th class="border-b p-4 font-medium text-gray-900">Nomor Rekening Tujuan</th>
                                    <th class="border-b p-4 font-medium text-gray-900">Nama Rekening Tujuan</th>
                                    <th class="border-b p-4 font-medium text-gray-900">Deskripsi 1</th>
                                    <th class="border-b p-4 font-medium text-gray-900">Deskripsi 2</th>
                                    <th class="border-b p-4 font-medium text-gray-900">Kredit</th>
                                    <th class="border-b p-4 font-medium text-gray-900">Debit</th>
                                    <th class="border-b p-4 font-medium text-gray-900">Saldo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in paginatedData" :key="index" class="border-b">
                                    <td class="border-b p-4">
                                        <input type="checkbox" v-model="selectedRows" :value="item.noRekening" />
                                    </td>
                                    <td class="border-b p-4">{{ (currentPage - 1) * entriesPerPage + index + 1 }}</td>
                                    <td class="border-b p-4">{{ item.tanggalTransaksi }}</td>
                                    <td class="border-b p-4">{{ item.jamTransaksi }}</td>
                                    <td class="border-b p-4">{{ item.kodeTransaksi }}</td>
                                    <td class="border-b p-4">{{ item.namaRekening }}</td>
                                    <td class="border-b p-4">{{ item.noRekening }}</td>
                                    <td class="border-b p-4">{{ item.nomorRekeningTujuan }}</td>
                                    <td class="border-b p-4">{{ item.namaRekeningTujuan }}</td>
                                    <td class="border-b p-4">{{ item.deskripsi1 }}</td>
                                    <td class="border-b p-4">{{ item.deskripsi2 }}</td>
                                    <td class="border-b p-4">{{ formatCurrency(item.kredit) }}</td>
                                    <td class="border-b p-4">{{ formatCurrency(item.debit) }}</td>
                                    <td class="border-b p-4">{{ formatCurrency(item.saldo) }}</td>
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

    interface DataItem {
        tanggalTransaksi: string;
        jamTransaksi: string;
        kodeTransaksi: string;
        namaRekening: string;
        noRekening: string;
        nomorRekeningTujuan: string;
        namaRekeningTujuan: string;
        jenisRekening: string;
        deskripsi1: string;
        deskripsi2: string;
        kredit: number;
        debit: number;
        saldo: number;
    }
    function parseDate(dateString: string): Date {
        const [day, month, year] = dateString.split('/').map(Number);
        return new Date(year, month - 1, day); // Month is zero-based in JavaScript
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
                        tanggalTransaksi: '01/11/2024',
                        jamTransaksi: '10:00',
                        kodeTransaksi: 'TX12345',
                        namaRekening: 'okdo',
                        noRekening: '12345678',
                        nomorRekeningTujuan: '12345678',
                        namaRekeningTujuan: 'Tujuan A',
                        deskripsi1: 'Deskripsi A',
                        deskripsi2: 'Catatan A',
                        kredit: 500000,
                        jenisRekening: 'Rekening RKUD',
                        debit: 0,
                        saldo: 500000,
                    },
                    {
                        tanggalTransaksi: '03/11/2024',
                        jamTransaksi: '12:00',
                        kodeTransaksi: 'TX12346',
                        namaRekening: 'iueni',
                        noRekening: '87654321',
                        nomorRekeningTujuan: '438787654321',
                        namaRekeningTujuan: 'Tujuan B',
                        deskripsi1: 'Deskripsi B',
                        deskripsi2: 'Catatan B',
                        jenisRekening: 'Rekening BOP Negeri',
                        kredit: 0,
                        debit: 300000,
                        saldo: 200000,
                    },
                    {
                        tanggalTransaksi: '05/11/2024',
                        jamTransaksi: '14:00',
                        kodeTransaksi: 'TX12347',
                        namaRekening: 'teqef',
                        noRekening: '12398765245',
                        nomorRekeningTujuan: '12398765',
                        namaRekeningTujuan: 'Tujuan C',
                        deskripsi1: 'Deskripsi C',
                        deskripsi2: 'Catatan C',
                        jenisRekening: 'Rekening BOS Swasta',
                        kredit: 200000,
                        debit: 0,
                        saldo: 400000,
                    },
                    {
                        tanggalTransaksi: '08/11/2024',
                        jamTransaksi: '16:00',
                        kodeTransaksi: 'TX12348',
                        namaRekening: 'ewpfo',
                        noRekening: '931375454865432',
                        nomorRekeningTujuan: '98765432',
                        namaRekeningTujuan: 'Tujuan D',
                        deskripsi1: 'Deskripsi D',
                        deskripsi2: 'Catatan D',
                        jenisRekening: 'Rekening BOS Negeri',
                        kredit: 0,
                        debit: 100000,
                        saldo: 300000,
                    },
                ] as DataItem[],

                sortColumn: null as keyof DataItem | null,
                sortDirection: 'asc' as 'asc' | 'desc',
                entriesPerPage: 5,
                currentPage: 1,
                selectedBulan: '',
                selectedTahun: '',
                selectedJenisRekening: null,
                searchQuery: '',
                selectedRows: [] as string[], // Menyimpan ID dari item yang dipilih
                isModalOpen: false,
                BulanOptions: [
                    { value: 'Januari', label: 'Januari' },
                    { value: 'Februari', label: 'Februari' },
                    { value: 'Maret', label: 'Maret' },
                    { value: 'April', label: 'April' },
                    { value: 'Mei', label: 'Mei' },
                    { value: 'Juni', label: 'Juni' },
                    { value: 'Juli', label: 'Juli' },
                    { value: 'Agustus', label: 'Agustus' },
                    { value: 'September', label: 'September' },
                    { value: 'Oktober', label: 'Oktober' },
                    { value: 'November', label: 'November' },
                    { value: 'Desember', label: 'Desember' },
                ],
                tahunOptions: [
                    { value: 2020, label: 2020 },
                    { value: 2021, label: 2021 },
                    { value: 2022, label: 2022 },
                    { value: 2023, label: 2023 },
                    { value: 2024, label: 2024 },
                ],
                jenisRekeningOptions: [
                    { value: 'all', label: 'All' },
                    { value: 'Rekening Bank DKI BPKD BUD', label: 'Rekening Bank DKI BPKD BUD' },
                    { value: 'Rekening Kas BLUD', label: 'Rekening Kas BLUD' },
                    { value: 'Rekening Sekolah Negeri', label: 'Rekening Sekolah Negeri' },
                    { value: 'Rekening Sekolah Swasta', label: 'Rekening Sekolah Swasta' },
                    { value: 'Rekening Penerimaan SKPD', label: 'Rekening Penerimaan SKPD' },
                    { value: 'Rekening Pengeluaran SKPD', label: 'Rekening Pengeluaran SKPD' },
                    { value: 'Rekening Penerimaan BLUD', label: 'Rekening Penerimaan BLUD' },
                    { value: 'Rekening Pengeluaran BLUD', label: 'Rekening Pengeluaran BLUD' },
                    { value: 'Buka Rekening non Bank DKI BLUD', label: 'Buka Rekening non Bank DKI BLUD' },
                    { value: 'Buka Rekening non Bank DKI Sekolah', label: 'Buka Rekening non Bank DKI Sekolah' },
                    { value: 'Rekening Dana Kelola BLUD', label: 'Rekening Dana Kelola BLUD' },
                ],
            };
        },

        computed: {
            totalDebit(): number {
                // Filter data berdasarkan baris yang dipilih (selectedRows)
                return this.data.filter((item) => this.selectedRows.includes(item.noRekening)).reduce((sum, item) => sum + item.debit, 0); // Hitung total debit
            },
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

                // Filter berdasarkan Tahun
                if (this.selectedTahun) {
                    filtered = filtered.filter((item) => {
                        const itemYear = new Date(item.tanggalTransaksi).getFullYear();
                        return itemYear === Number(this.selectedTahun); // Konversi selectedTahun ke number
                    });
                }

                // Filter berdasarkan Bulan
                if (this.selectedBulan) {
                    filtered = filtered.filter((item) => {
                        // Gunakan parseDate untuk memastikan tanggal dikenali dengan benar
                        const itemDate = parseDate(item.tanggalTransaksi);

                        // Extract nama bulan dalam bahasa Indonesia
                        const itemMonth = itemDate.toLocaleString('id-ID', { month: 'long' });

                        // Convert both selectedBulan dan itemMonth ke huruf kecil untuk perbandingan
                        return itemMonth.toLowerCase() === this.selectedBulan.toLowerCase();
                    });
                }

                // Filter berdasarkan Jenis Rekening
                if (this.selectedJenisRekening && this.selectedJenisRekening !== 'all') {
                    filtered = filtered.filter((item) => item.jenisRekening.toLowerCase() === this.selectedJenisRekening.toLowerCase());
                }

                // Filter berdasarkan pencarian (search query)
                if (this.searchQuery) {
                    filtered = filtered.filter((item) => Object.values(item).join(' ').toLowerCase().includes(this.searchQuery.toLowerCase()));
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
            formatCurrency(value: number): string {
                return new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                }).format(value);
            },
            parseDate(dateString: string): Date {
                const [day, month, year] = dateString.split('/').map(Number);
                return new Date(year, month - 1, day); // Month is zero-based in JavaScript
            },
            // Fungsi lainnya
            toggleSort(column: keyof DataItem) {
                if (this.sortColumn === column) {
                    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
                } else {
                    this.sortColumn = column;
                    this.sortDirection = 'asc';
                }
            },

            clearSearch() {
                this.searchQuery = ''; // Mengosongkan input pencarian
                this.currentPage = 1; // Kembali ke halaman pertama
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

<style scoped></style>
