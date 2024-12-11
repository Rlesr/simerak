<template>
    <Layout />
    <div class="min-h-screen flex overflow-hidden">
        <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="/"> Home </a></li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="#" class="text-blue-500 dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70"> Daftar Saldo Bank DKI</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Daftar Laporan Saldo</h2>
                <p class="text-sm mb-[10px]">Menu ini digunakan untuk melihat daftar Laporan Saldo Bank DKI</p>
                <hr class="border-t-2 border-black" />
            </div>

            <div class="flex-1 px-6 py-4 space-y-6">
                <div class="bg-white p-4 rounded-md shadow max-h-full max-w-full">
                    <!-- Filter Section -->
                    <div class="flex items-center w-full overflow-x-auto">
                        <!-- Filter Pertama -->
                        <select
                            v-model="jenisRekening"
                            @change="filterNoRekening"
                            class="relative flex items-center border border-gray-300 rounded-md h-10 w-[150px] px-2"
                        >
                            <option disabled value="null">Jenis Rekening</option>
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

                        <!-- Filter Kedua -->
                        <select
                            v-model="selectedNoRekening"
                            @change="filterMutasi"
                            class="border border-gray-300 rounded-md h-10 px-2"
                            :disabled="!jenisRekening"
                        >
                            <option value="">Pilih No Rekening</option>
                            <option v-for="rekening in filteredNoRekenings" :key="rekening.nomorRekening" :value="rekening.nomorRekening">
                                {{ rekening.namaRekening }}
                            </option>
                        </select>

                        <!-- Filter Tanggal -->
                        <div>
                            <input
                                id="start-date"
                                type="text"
                                v-model="startDate"
                                ref="startDatePicker"
                                class="border border-gray-300 rounded-md px-2 py-1 w-48"
                            />
                            <button @click="clearStartDate" class="text-red-500 ml-2">Clear</button>
                        </div>
                        <div>
                            <input id="end-date" type="text" v-model="endDate" ref="endDatePicker" class="border border-gray-300 rounded-md px-2 py-1 w-48" />
                            <button @click="clearEndDate" class="text-red-500 ml-2">Clear</button>
                        </div>
                    </div>

                    <!-- Pesan Instruksi -->
                    <div v-if="!jenisRekening || !selectedNoRekening" class="text-center mt-4">
                        <span>Silakan lengkapi filter untuk melihat data.</span>
                    </div>

                    <!-- Tabel hanya ditampilkan jika kedua filter sudah diisi -->
                    <div v-if="jenisRekening && selectedNoRekening" class="overflow-x-auto mt-4">
                        <mutasi :data="paginatedData" :entriesPerPage="entriesPerPage" :currentPage="currentPage" />
                        <div class="flex justify-end mt-4 space-x-6">
                            <div class="text-gray-600 font-semibold">
                                Total Debit:
                                <span class="text-blue-600">{{ totalDebit.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}</span>
                            </div>
                            <div class="text-gray-600 font-semibold">
                                Total Kredit:
                                <span class="text-red-600">{{ totalKredit.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Pagination Section -->
                    <div v-if="jenisRekening && selectedNoRekening" class="flex justify-between items-center mt-4">
                        <div class="text-sm">
                            Show
                            <select v-model="entriesPerPage" @change="changeEntries" class="border rounded-md p-1 text-gray-600">
                                <option :value="2">2</option>
                                <option :value="5">5</option>
                                <option :value="10">10</option>
                            </select>
                            entries
                        </div>

                        <div class="flex items-center gap-2">
                            <button @click="goToFirstPage" :disabled="currentPage === 1" class="px-2 py-1 rounded-md text-sm text-gray-500">First</button>
                            <button @click="prevPage" :disabled="currentPage === 1" class="px-2 py-1 rounded-md text-sm text-gray-500">Previous</button>
                            <button
                                v-for="page in totalPages"
                                :key="page"
                                @click="goToPage(page)"
                                class="px-3 py-1 rounded-md text-sm"
                                :class="{ 'bg-blue-600 text-white': currentPage === page, 'text-gray-500': currentPage !== page }"
                            >
                                {{ page }}
                            </button>
                            <button @click="nextPage" :disabled="currentPage === totalPages" class="px-2 py-1 rounded-md text-sm text-gray-500">Next</button>
                            <button @click="goToLastPage" :disabled="currentPage === totalPages" class="px-2 py-1 rounded-md text-sm text-gray-500">
                                Last
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import dummyData from './table/dummyDatamutasi.json';
    import mutasi from './table/mutasi.vue';
    import flatpickr from 'flatpickr';
    import 'flatpickr/dist/flatpickr.css';

    export default {
        components: {
            mutasi,
        },
        data() {
            return {
                jenisRekening: null,
                selectedNoRekening: '',
                startDate: '',
                endDate: '',
                data: dummyData || [], // Data dummy atau fallback ke array kosong
                filteredMutasi: [],
                filteredNoRekenings: [],
                currentPage: 1,
                entriesPerPage: 5,
            };
        },
        computed: {
            paginatedData() {
                const startIndex = (this.currentPage - 1) * this.entriesPerPage;
                return this.filteredMutasi.slice(startIndex, startIndex + this.entriesPerPage);
            },
            totalPages() {
                return Math.ceil(this.filteredMutasi.length / this.entriesPerPage);
            },
            totalDebit() {
                return this.filteredMutasi.reduce((sum, mutasi) => sum + (mutasi.debit || 0), 0);
            },
            totalKredit() {
                return this.filteredMutasi.reduce((sum, mutasi) => sum + (mutasi.kredit || 0), 0);
            },
        },
        mounted() {
            // Inisialisasi flatpickr untuk tanggal
            flatpickr(this.$refs.startDatePicker, {
                dateFormat: 'Y-m-d',
                onChange: (selectedDates) => {
                    this.startDate = selectedDates[0];
                    this.filterMutasi();
                },
            });
            flatpickr(this.$refs.endDatePicker, {
                dateFormat: 'Y-m-d',
                onChange: (selectedDates) => {
                    this.endDate = selectedDates[0];
                    this.filterMutasi();
                },
            });
        },
        methods: {
            filterNoRekening() {
                if (!this.jenisRekening || this.jenisRekening === 'all') {
                    this.filteredNoRekenings = this.data.map((item) => ({
                        nomorRekening: item.nomorRekening,
                        namaRekening: item.namaRekening,
                    }));
                } else {
                    this.filteredNoRekenings = this.data
                        .filter((item) => item.jenisRekening === this.jenisRekening)
                        .map((item) => ({
                            nomorRekening: item.nomorRekening,
                            namaRekening: item.namaRekening,
                        }));
                }
            },
            filterMutasi() {
                const rekening = this.data.find((item) => item.nomorRekening === this.selectedNoRekening);
                if (rekening) {
                    const start = this.startDate ? new Date(this.startDate) : null;
                    const end = this.endDate ? new Date(this.endDate) : null;

                    // Set waktu ke tengah malam untuk menghindari perbedaan waktu
                    if (start) start.setHours(0, 0, 0, 0);
                    if (end) end.setHours(23, 59, 59, 999); // Set waktu ke akhir hari (23:59:59.999)

                    // Filter mutasi berdasarkan rentang tanggal yang dipilih
                    const mutasiFiltered = rekening.mutasi.filter((mutasi) => {
                        const mutasiDate = new Date(mutasi.tanggalTransaksi);

                        // Pastikan mutasi tanggal berada dalam rentang (>= startDate dan <= endDate)
                        return (
                            (!start || mutasiDate >= start) && // Tanggal mulai (>=)
                            (!end || mutasiDate <= end) // Tanggal akhir (<=)
                        );
                    });

                    this.filteredMutasi = mutasiFiltered;
                } else {
                    this.filteredMutasi = [];
                }
            },
            clearStartDate() {
                this.startDate = '';
                this.filterMutasi();
            },
            clearEndDate() {
                this.endDate = '';
                this.filterMutasi();
            },
            goToPage(page) {
                if (page >= 1 && page <= this.totalPages) this.currentPage = page;
            },
            prevPage() {
                if (this.currentPage > 1) this.currentPage--;
            },
            nextPage() {
                if (this.currentPage < this.totalPages) this.currentPage++;
            },
            goToFirstPage() {
                this.currentPage = 1;
            },
            goToLastPage() {
                this.currentPage = this.totalPages;
            },
            changeEntries() {
                this.currentPage = 1;
            },
        },
    };
</script>
