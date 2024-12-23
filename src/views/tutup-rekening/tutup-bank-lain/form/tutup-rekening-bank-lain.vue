<template>
    <Layout />
    <div class="min-h-screen flex flex-auto">
       
        

        <!-- Main Content -->
        <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="/">Home</a></li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Tutup Rekening Bank Lain</a>
                    </li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Form Tutup Rekening Bank Lain</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Form Tutup Rekening Bank Lain</h2>
                <hr class="border-t-2 border-black" />
            </div>


            <main class="p-2 flex-grow">
                <div class=" p-4 rounded-lg">
                    <div class="grid grid-cols-6 gap-4 mb-4">
                        <label class="col-span-2 ">Nama SKPD</label>
                        <input class="col-span-4 bg-gray-200 rounded px-4 py-2" type="text" readonly :value="namaSkpd" />

                        <label class="col-span-2 ">Nama</label>
                        <div class="col-span-4 flex items-center gap-2">
                            <input class="bg-gray-200 rounded px-4 py-2 flex-grow" type="text" readonly :value="selectedRekening.nama" />
                            <button @click="toggleModal" class="bg-[#7EA5EC] text-[#054083] rounded p-2">
                                <!-- Ikon SVG -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" d="m20 20l-6-6" />
                                        <path d="M15 9.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0Z" />
                                    </g>
                                </svg>
                            </button>
                        </div>

                        <label class="col-span-2 ">Nomor Rekening</label>
                        <input class="col-span-4 bg-gray-200 rounded px-4 py-2" type="text" readonly :value="selectedRekening.nomor" />

                        <label class="col-span-2 ">Jenis Rekening</label>
                        <input class="col-span-4 bg-gray-200 rounded px-4 py-2" type="text" readonly :value="selectedRekening.jenis" />

                        <label class="col-span-2 ">Jenis Kategori</label>
                        <input class="col-span-4 bg-gray-200 rounded px-4 py-2" type="text" readonly :value="selectedRekening.kategori" />

                        <label class="col-span-2 ">Saldo Akhir</label>
                        <div class="col-span-4 flex items-center">
                            <span class="bg-gray-200 px-4 py-2 rounded-l">Rp</span>
                            <input class="flex-grow rounded-r px-4 py-2 border" type="number" placeholder="Masukkan saldo akhir" v-model="saldoAkhir" />
                        </div>
                    </div>

                    <div class="flex justify-between">
                        <button class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">Kembali</button>
                        <submit class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Simpan</submit>
                    </div>
                </div>

                <div v-if="isModalOpen" class="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
                    <!-- Card Modal -->
                    <div class="bg-white ml-[250px] rounded shadow-lg w-3/4 p-4">
                        <!-- Header Modal -->
                        <div class="flex justify-between items-center border-b pb-2 mb-4">
                            <h3 class="text-lg font-semibold">List Rekening</h3>
                            <button @click="toggleModal" class="text-gray-500 hover:text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <!-- Table -->
                        <div class="overflow-x-auto">
                            <table class="table-auto w-full border-collapse border border-gray-300">
                                <thead class="bg-gray-100">
                                    <tr>
                                        <th class="border border-gray-300 px-4 py-2 text-left">No</th>
                                        <th class="border border-gray-300 px-4 py-2 text-left">Nama Rekening</th>
                                        <th class="border border-gray-300 px-4 py-2 text-left">Nomor Rekening</th>
                                        <th class="border border-gray-300 px-4 py-2 text-left">Jenis</th>
                                        <th class="border border-gray-300 px-4 py-2 text-left">Kategori</th>
                                        <th class="border border-gray-300 px-4 py-2 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(rekening, index) in paginatedData" :key="index">
                                        <td class="border border-gray-300 px-4 py-2 text-center">{{ (currentPage - 1) * entriesPerPage + index + 1 }}</td>
                                        <td class="border border-gray-300 px-4 py-2">{{ rekening.nama }}</td>
                                        <td class="border border-gray-300 px-4 py-2">{{ rekening.nomor }}</td>
                                        <td class="border border-gray-300 px-4 py-2">{{ rekening.jenis }}</td>
                                        <td class="border border-gray-300 px-4 py-2">{{ rekening.kategori }}</td>
                                        <td class="border border-gray-300 px-4 py-2 text-center">
                                            <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded" @click="selectRekening(rekening)">
                                                Pilih
                                            </button>
                                        </td>
                                    </tr>
                                    <tr v-if="data.length === 0">
                                        <td colspan="5" class="border border-gray-300 px-4 py-2 text-center text-gray-500">Tidak ada data</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Footer -->
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
            </main>
        </div>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';
    import Layout from '@/components/layout/Layout.vue';
    interface DataItem {
        nomor: string;
        nama: string;
        jenis: string;
        kategori: string;
    }

    export default {
        components: { Layout },

        data() {
            return {
                data: [
                    { nama: 'Rekening 1', nomor: '123456789', jenis: 'Tabungan', kategori: 'A' },
                    { nama: 'Rekening 2', nomor: '987654321', jenis: 'Giro', kategori: 'B' },
                    { nama: 'Rekening 2', nomor: '987654321', jenis: 'Giro', kategori: 'B' },
                    { nama: 'Rekening 2', nomor: '987654321', jenis: 'Giro', kategori: 'B' },
                    { nama: 'Rekening 2', nomor: '987654321', jenis: 'Giro', kategori: 'B' },
                    { nama: 'Rekening 2', nomor: '987654321', jenis: 'Giro', kategori: 'B' },
                    { nama: 'Rekening 2', nomor: '987654321', jenis: 'Giro', kategori: 'B' },
                    { nama: 'Rekening 2', nomor: '987654321', jenis: 'Giro', kategori: 'B' },
                    { nama: 'Rekening 2', nomor: '987654321', jenis: 'Giro', kategori: 'B' },
                    { nama: 'Rekening 2', nomor: '987654321', jenis: 'Giro', kategori: 'B' },
                    { nama: 'Rekening 2', nomor: '987654321', jenis: 'Giro', kategori: 'B' },
                    { nama: 'Rekening 2', nomor: '987654321', jenis: 'Giro', kategori: 'B' },
                ] as DataItem[],
                sortColumn: null as keyof DataItem | null,
                sortDirection: 'asc' as 'asc' | 'desc',
                entriesPerPage: 2,
                currentPage: 1,
            };
        },
        computed: {
            totalPages() {
                return Math.ceil(this.data.length / this.entriesPerPage);
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
            goToPage(page) {
                this.currentPage = page;
            },
        },
        setup() {
            const namaSkpd = 'PKBM Negeri 39 Cakung';
            const selectedRekening = ref({
                nama: '',
                nomor: '',
                jenis: '',
                kategori: '',
            });
            const saldoAkhir = ref('');
            const isModalOpen = ref(false);
            const itemsPerPage = ref(10);

            const toggleModal = () => {
                isModalOpen.value = !isModalOpen.value;
            };

            const selectRekening = (rekening: any) => {
                selectedRekening.value = rekening;
                toggleModal();
            };

            return {
                namaSkpd,
                selectedRekening,
                saldoAkhir,
                isModalOpen,
                toggleModal,
                selectRekening,
                itemsPerPage,
            };
        },
    };
</script>

<style scoped>
     .form-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 500px;
        margin: auto;
    }

    .form-field {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .input-group {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .input {
        flex: 1;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
</style>
