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
                        <a href="#" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Laporan Giro</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Daftaf Laporan Giro</h2>
                <p class="text-sm mb-[10px]">Menu ini digunakan untuk melihat daftar Laporan Giro</p>
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
                            <select v-model="selectedTipe" class="border border-gray-300 rounded-md px-2 py-1">
                                <option value="" disabled>Tipe</option>
                                <option value="tahun">Tahun</option>
                                <option value="bulan">Bulan</option>
                                <option value="harian">Harian</option>
                            </select>
                            <select v-model="selectedTahun" class="border border-gray-300 rounded-md px-2 py-1">
                                <option value="" disabled>Tahun</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                            </select>
                            <select
                                v-if="selectedTipe === 'bulan' || selectedTipe === 'harian'"
                                v-model="selectedBulan"
                                class="border border-gray-300 rounded-md px-2 py-1"
                            >
                                <option value="" disabled>Bulan</option>
                                <option value="Januari">Januari</option>
                                <option value="Februari">Februari</option>
                                <option value="Maret">Maret</option>
                                <option value="April">April</option>
                                <option value="Mei">Mei</option>
                                <option value="Juni">Juni</option>
                                <option value="Juli">Juli</option>
                                <option value="Agustus">Agustus</option>
                                <option value="September">September</option>
                                <option value="Oktober">Oktober</option>
                                <option value="November">November</option>
                                <option value="Desember">Desember</option>
                            </select>

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
                            <button
                                @click="showModal = true"
                                class="bg-[#7EA5EC] text-[#054083] px-4 py-2 text-sm border-[#7EA5EC] rounded-[15px] flex items-center gap-2 max-w-screen-md"
                            >
                                <!-- SVG Icon with adjusted width and height -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z" />
                                </svg>
                                Bunga
                            </button>
                            <ModalMasterBungaGiro v-if="showModal" :isModalVisible="showModal" @close="showModal = false" />
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
                    <div class="overflow-x-auto"></div>
                    <TabelTahun v-if="selectedTipe === 'tahun'" />
                    <TabelBulan v-if="selectedTipe === 'bulan'" />
                    <TabelHarian
                        v-if="selectedTipe === 'harian'"
                        :filterTahun="selectedTahun"
                        :filterBulan="selectedBulan"
                        :selectedJenisRekening="selectedJenisRekening"
                    />
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
    import ModalMasterBungaGiro from './modal/bunga.vue';
    import { defineComponent } from 'vue';
    import TabelBulan from './tabel/tabel-bulan.vue';
    import TabelTahun from './tabel/tabel-tahun.vue';
    import TabelHarian from './tabel/tabel-harian.vue';

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
        components: {
            TabelTahun,
            TabelBulan,
            TabelHarian,
            ModalMasterBungaGiro,
        },
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
                showModal: false,
                selectedJenisRekening: '', // Default to 'all'
                selectedDate: null as string | null,
                searchNamaRekening: '',
                searchnoRekening: '',
                selectedBulan: '',
                selectedTahun: '',
                selectedTipe: '',
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
            openModal() {
                this.showModal = true; // Membuka modal
            },
            closeModal() {
                this.showModal = false; // Menutup modal
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
