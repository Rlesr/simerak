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
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Kecamatan</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Kecamatan</h2>
                <p class="text-sm mb-[10px]">Menu ini digunakan untuk melihat daftar Kecamatan</p>
                <hr class="border-t-2 border-black" />
            </div>

            <div class="flex-1 px-6 py-4 space-y-6">
                <div class="bg-white p-4 rounded-md shadow max-h-full max-w-full">
                    <div class="flex flex-wrap space-x-4">
                        <div class="flex items-center border border-gray-300 rounded-md h-10 w-[250px] px-2">
                            <input
                                v-model="searchNamaKecamatan"
                                placeholder="Nama Kecamatan"
                                class="h-full w-full bg-transparent border-none outline-none text-sm placeholder-gray-400 text-gray-700"
                            />
                        </div>
                        <div class="flex items-center border border-gray-300 rounded-md h-10 w-[250px] px-2">
                            <input
                                v-model="searchkodeKota"
                                placeholder="Kode Kota"
                                class="h-full w-full bg-transparent border-none outline-none text-sm placeholder-gray-400 text-gray-700"
                            />
                        </div>
                        <button class="btn-primary h-10 w-[200px] flex items-center justify-center" @click="navigateToAddKecamatan">
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
                                            Kode Kota
                                            <button @click="toggleSort('kodeKota')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'kodeKota' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'kodeKota' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Nama Kecamatan
                                            <button @click="toggleSort('namaKecamatan')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'namaKecamatan' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'namaKecamatan' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
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
                                    <td class="border-b p-4">{{ item.kodeKota }}</td>
                                    <td class="border-b p-4">{{ item.namaKecamatan }}</td>
                                    <td class="border-b p-4 flex space-x-2">
                                        <!-- Tombol Edit -->
                                        <button class="text-blue-500 hover:text-blue-700" @click="editItem(item.namaKecamatan)" title="Edit">
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
                                        <button class="text-red-500 hover:text-red-700" @click="deleteItem(item.namaKecamatan)" title="Delete">
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
        kodeKota: number;
        namaKecamatan: String;
    }

    export default defineComponent({
        name: 'BukaRekening',
        components: {
            Layout,
        },
        data() {
            return {
                data: [
                    { id: 1, kodeKota: 101, namaKecamatan: 'Kecamatan Menteng' },
                    { id: 2, kodeKota: 101, namaKecamatan: 'Kecamatan Cempaka Putih' },
                    { id: 3, kodeKota: 102, namaKecamatan: 'Kecamatan Andir' },
                    { id: 4, kodeKota: 102, namaKecamatan: 'Kecamatan Coblong' },
                    { id: 5, kodeKota: 103, namaKecamatan: 'Kecamatan Tegalsari' },
                    { id: 6, kodeKota: 103, namaKecamatan: 'Kecamatan Wonokromo' },
                    { id: 7, kodeKota: 104, namaKecamatan: 'Kecamatan Medan Baru' },
                    { id: 8, kodeKota: 104, namaKecamatan: 'Kecamatan Medan Johor' },
                    { id: 9, kodeKota: 105, namaKecamatan: 'Kecamatan Panakkukang' },
                    { id: 10, kodeKota: 105, namaKecamatan: 'Kecamatan Rappocini' },
                    { id: 11, kodeKota: 106, namaKecamatan: 'Kecamatan Gondokusuman' },
                    { id: 12, kodeKota: 106, namaKecamatan: 'Kecamatan Umbulharjo' },
                    { id: 13, kodeKota: 107, namaKecamatan: 'Kecamatan Ilir Barat' },
                    { id: 14, kodeKota: 107, namaKecamatan: 'Kecamatan Seberang Ulu' },
                    { id: 15, kodeKota: 108, namaKecamatan: 'Kecamatan Banyumanik' },
                    { id: 16, kodeKota: 108, namaKecamatan: 'Kecamatan Tembalang' },
                    { id: 17, kodeKota: 109, namaKecamatan: 'Kecamatan Sekupang' },
                    { id: 18, kodeKota: 109, namaKecamatan: 'Kecamatan Batu Aji' },
                    { id: 19, kodeKota: 110, namaKecamatan: 'Kecamatan Senapelan' },
                    { id: 20, kodeKota: 110, namaKecamatan: 'Kecamatan Bukit Raya' },
                    { id: 21, kodeKota: 111, namaKecamatan: 'Kecamatan Denpasar Barat' },
                    { id: 22, kodeKota: 111, namaKecamatan: 'Kecamatan Denpasar Selatan' },
                    { id: 23, kodeKota: 112, namaKecamatan: 'Kecamatan Balikpapan Utara' },
                    { id: 24, kodeKota: 112, namaKecamatan: 'Kecamatan Balikpapan Selatan' },
                    { id: 25, kodeKota: 113, namaKecamatan: 'Kecamatan Banjarmasin Timur' },
                    { id: 26, kodeKota: 113, namaKecamatan: 'Kecamatan Banjarmasin Barat' },
                    { id: 27, kodeKota: 114, namaKecamatan: 'Kecamatan Pontianak Kota' },
                    { id: 28, kodeKota: 114, namaKecamatan: 'Kecamatan Pontianak Barat' },
                    { id: 29, kodeKota: 115, namaKecamatan: 'Kecamatan Samarinda Utara' },
                    { id: 30, kodeKota: 115, namaKecamatan: 'Kecamatan Samarinda Ilir' },
                    { id: 31, kodeKota: 116, namaKecamatan: 'Kecamatan Wenang' },
                    { id: 32, kodeKota: 116, namaKecamatan: 'Kecamatan Tikala' },
                    { id: 33, kodeKota: 117, namaKecamatan: 'Kecamatan Jayapura Utara' },
                    { id: 34, kodeKota: 117, namaKecamatan: 'Kecamatan Jayapura Selatan' },
                    { id: 35, kodeKota: 118, namaKecamatan: 'Kecamatan Kelapa Lima' },
                    { id: 36, kodeKota: 118, namaKecamatan: 'Kecamatan Maulafa' },
                    { id: 37, kodeKota: 119, namaKecamatan: 'Kecamatan Cakranegara' },
                    { id: 38, kodeKota: 119, namaKecamatan: 'Kecamatan Mataram' },
                    { id: 39, kodeKota: 120, namaKecamatan: 'Kecamatan Sirimau' },
                    { id: 40, kodeKota: 120, namaKecamatan: 'Kecamatan Nusaniwe' },
                    { id: 41, kodeKota: 121, namaKecamatan: 'Kecamatan Cimahi Selatan' },
                    { id: 42, kodeKota: 121, namaKecamatan: 'Kecamatan Cimahi Tengah' },
                    { id: 43, kodeKota: 122, namaKecamatan: 'Kecamatan Sukmajaya' },
                    { id: 44, kodeKota: 122, namaKecamatan: 'Kecamatan Pancoran Mas' },
                    { id: 45, kodeKota: 123, namaKecamatan: 'Kecamatan Bekasi Utara' },
                    { id: 46, kodeKota: 123, namaKecamatan: 'Kecamatan Bekasi Timur' },
                    { id: 47, kodeKota: 124, namaKecamatan: 'Kecamatan Ciledug' },
                    { id: 48, kodeKota: 124, namaKecamatan: 'Kecamatan Cipondoh' },
                    { id: 49, kodeKota: 125, namaKecamatan: 'Kecamatan Tangerang Selatan' },
                    { id: 50, kodeKota: 125, namaKecamatan: 'Kecamatan Serpong' },
                ] as DataItem[],
                sortColumn: null as keyof DataItem | null,
                sortDirection: 'asc' as 'asc' | 'desc',
                entriesPerPage: 5,
                currentPage: 1,
                searchNamaKecamatan: '',
                searchkodeKota: '',
            };
        },
        setup() {},

        computed: {
            totalPages() {
                return Math.ceil(this.filteredData.length / this.entriesPerPage);
            },
            filteredData() {
                let filtered = this.data.filter((item) => {
                    const matchesNamaKecamatan = item.namaKecamatan.toLowerCase().includes(this.searchNamaKecamatan.toLowerCase());
                    const matcheskodeKota = item.kodeKota.toString().includes(this.searchkodeKota.toLowerCase());
                    return matchesNamaKecamatan && matcheskodeKota;
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
            navigateToAddKecamatan() {
                this.$router.push('/home/Master/Form/AddKecamatan/0');
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
