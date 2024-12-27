<template>
    <Layout />

    <div class="min-h-screen flex flex-auto">
        <!-- Gunakan ml-64 untuk desktop, ml-0 untuk mobile -->
        <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
            <!-- Breadcrumb -->
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="javascript:;">Home</a></li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Filter</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Filter</h2>
                <p class="text-sm mb-[10px]">Menu ini digunakan untuk melihat daftar Filter</p>
                <hr class="border-t-2 border-black" />
            </div>

            <div class="flex-1 px-6 py-4 space-y-6">
                <div class="bg-white p-4 rounded-md shadow max-h-full max-w-full">
                    <div class="flex justify-between items-center w-full overflow-x-auto whitespace-nowrap">
                        <div class="flex items-center border border-gray-300 rounded-md h-10 w-[250px] px-2">
                            <input
                                v-model="searchNamaFilter"
                                placeholder="Nama Filter"
                                class="h-full w-full bg-transparent border-none outline-none text-sm placeholder-gray-400 text-gray-700"
                            />
                        </div>
                        <div class="flex items-center border border-gray-300 rounded-md h-10 w-[250px] px-2">
                            <input
                                v-model="searchKodeFilter"
                                placeholder="Kode Filter"
                                class="h-full w-full bg-transparent border-none outline-none text-sm placeholder-gray-400 text-gray-700"
                            />
                        </div>
                        <button class="btn-primary h-10 w-[200px] flex items-center justify-center" @click="navigateToAddFilter">
                            <p class="text-[#054083] font-semibold">Tambah</p>
                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px] ml-2" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12H20M12 4V20" stroke="#054083" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full max-w-full border-collapse bg-white text-left text-sm text-gray-700 h-full">
                            <thead>
                                <tr>
                                    <th class="border-b p-4 font-medium text-gray-900">No.</th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Nama Filter
                                            <button @click="toggleSort('namaFilter')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'namaFilter' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'namaFilter' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Kode Filter
                                            <button @click="toggleSort('kodeFilter')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'kodeFilter' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'kodeFilter' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in paginatedData" :key="index" class="border-b">
                                    <td class="border-b p-4">{{ (currentPage - 1) * entriesPerPage + index + 1 }}</td>
                                    <td class="border-b p-4">{{ item.namaFilter }}</td>
                                    <td class="border-b p-4">{{ item.kodeFilter }}</td>
                                    <td class="border-b p-4 flex space-x-2">
                                        <!-- Tombol Edit -->
                                        <button class="text-blue-500 hover:text-blue-700" @click="editItem(item.kodeFilter)" title="Edit">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-5 h-5"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="M11 17H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v5"></path>
                                                <path d="M18.5 19.5L13 14l3-3 5.5 5.5-3 3z"></path>
                                            </svg>
                                        </button>

                                        <!-- Tombol Delete -->
                                        <button class="text-red-500 hover:text-red-700" @click="deleteItem(item.kodeFilter)" title="Delete">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-5 h-5"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"></path>
                                                <path d="M10 11v6"></path>
                                                <path d="M14 11v6"></path>
                                            </svg>
                                        </button>
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
    import { defineComponent } from 'vue';
    import Layout from '@/components/layout/Layout.vue';

    interface DataItem {
        id: number;
        kodeFilter: String;
        namaFilter: String;
    }

    export default defineComponent({
        name: 'BukaRekening',
        components: {
            Layout,
        },
        data() {
            return {
                data: [
                    { id: 1, kodeFilter: 'FL001', namaFilter: 'Filter Aktif' },
                    { id: 2, kodeFilter: 'FL002', namaFilter: 'Filter Nonaktif' },
                    { id: 3, kodeFilter: 'FL003', namaFilter: 'Filter Tertunda' },
                    { id: 4, kodeFilter: 'FL004', namaFilter: 'Filter Ditolak' },
                    { id: 5, kodeFilter: 'FL005', namaFilter: 'Filter Disetujui' },
                    { id: 6, kodeFilter: 'FL006', namaFilter: 'Filter Dalam Proses' },
                    { id: 7, kodeFilter: 'FL007', namaFilter: 'Filter Selesai' },
                    { id: 8, kodeFilter: 'FL008', namaFilter: 'Filter Baru' },
                    { id: 9, kodeFilter: 'FL009', namaFilter: 'Filter Lama' },
                    { id: 10, kodeFilter: 'FL010', namaFilter: 'Filter Popularitas Tinggi' },
                    { id: 11, kodeFilter: 'FL011', namaFilter: 'Filter Lokasi Terdekat' },
                    { id: 12, kodeFilter: 'FL012', namaFilter: 'Filter Lokasi Jauh' },
                    { id: 13, kodeFilter: 'FL013', namaFilter: 'Filter Harga Rendah' },
                    { id: 14, kodeFilter: 'FL014', namaFilter: 'Filter Harga Tinggi' },
                    { id: 15, kodeFilter: 'FL015', namaFilter: 'Filter Waktu Terkini' },
                    { id: 16, kodeFilter: 'FL016', namaFilter: 'Filter Waktu Terlama' },
                    { id: 17, kodeFilter: 'FL017', namaFilter: 'Filter Spesifik' },
                    { id: 18, kodeFilter: 'FL018', namaFilter: 'Filter General' },
                    { id: 19, kodeFilter: 'FL019', namaFilter: 'Filter Relevansi Tinggi' },
                    { id: 20, kodeFilter: 'FL020', namaFilter: 'Filter Relevansi Rendah' },
                ] as DataItem[],
                sortColumn: null as keyof DataItem | null,
                sortDirection: 'asc' as 'asc' | 'desc',
                entriesPerPage: 5,
                currentPage: 1,
                searchNamaFilter: '',
                searchKodeFilter: '',
            };
        },
        setup() {},

        computed: {
            totalPages() {
                return Math.ceil(this.filteredData.length / this.entriesPerPage);
            },
            filteredData() {
                let filtered = this.data.filter((item) => {
                    const matchesKodeFilter = item.kodeFilter.toLowerCase().includes(this.searchKodeFilter.toLowerCase());
                    const matchesNamaFilter = item.namaFilter.toLowerCase().includes(this.searchNamaFilter.toLowerCase());
                    return matchesNamaFilter && matchesKodeFilter;
                });

                // Sorting logic
                if (this.sortColumn) {
                    filtered = filtered.sort((a, b) => {
                        const aValue = a[this.sortColumn] || '';
                        const bValue = b[this.sortColumn] || '';

                        if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
                        if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
                        return 0;
                    });
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

            navigateToAddFilter() {
                this.$router.push('/home/Master/Form/AddFilter/0');
            },

            editItem(id) {
                // Arahkan ke URL Edit. Ganti URL berikut sesuai kebutuhan Anda.
                this.$router.push(`/edit/${id}`);
            },
            deleteItem(id) {
                if (confirm('Apakah Anda yakin ingin menghapus item ini?')) {
                    // Tambahkan logika penghapusan di sini.
                    console.log(`Item dengan ID ${id} dihapus`);
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
