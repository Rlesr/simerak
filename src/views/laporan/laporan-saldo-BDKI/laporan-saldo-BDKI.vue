<template>
    <Layout />
    <div class="min-h-screen flex overflow-hidden">
        <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="/"> Home </a></li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a
                            href="/home/user-management/pengguna/list"
                            class="text-gray-500 dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70"
                        >
                            Laporan
                        </a>
                    </li>
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
                        <div class="flex gap-2">
                            <select v-model="selectedJenisRekening" class="border border-gray-300 rounded-md px-2 py-1">
                                <option disabled value="">Pilih Jenis Rekening</option>
                                <option
                                    v-for="option in jenisRekeningOptions"
                                    :key="option.value"
                                    :value="option.value"
                                    class="hover:bg-blue-500 hover:text-white"
                                >
                                    {{ option.label }}
                                </option>
                            </select>
                            <select
                                v-model="selectedTable"
                                id="tableSelector"
                                class="relative flex items-center border border-gray-300 rounded-md h-10 w-[150px] px-2"
                            >
                                <option disabled value="">Tipe</option>
                                <option value="tahun">Tabel Tahunan</option>
                                <option value="bulan">Tabel Bulanan</option>
                            </select>

                            <!-- Filter Bulan dan Tahun berdasarkan pilihan Tipe -->
                            <div v-if="selectedTable === 'bulan'" class="flex gap-2">
                                <!-- Tahun Filter for Bulanan -->
                                <select v-model="selectedBulanTahun" class="relative flex items-center border border-gray-300 rounded-md h-10 w-[150px] px-2">
                                    <option disabled value="null">Pilih Tahun</option>
                                    <option v-for="tahun in tahunOption" :key="tahun.value" :value="tahun.value">
                                        {{ tahun.label }}
                                    </option>
                                </select>

                                <!-- Bulan Filter -->
                                <select v-model="selectedBulan" class="relative flex items-center border border-gray-300 rounded-md h-10 w-[150px] px-2">
                                    <option disabled value="null">Pilih Bulan</option>
                                    <option v-for="bulan in bulanOption" :key="bulan.value" :value="bulan.value">
                                        {{ bulan.label }}
                                    </option>
                                </select>
                            </div>

                            <!-- Filter Tahun for Tahunan -->
                            <select
                                v-if="selectedTable === 'tahun'"
                                v-model="selectedTahun"
                                class="relative flex items-center border border-gray-300 rounded-md h-10 w-[150px] px-2"
                            >
                                <option disabled value="null">Pilih Tahun</option>
                                <option v-for="tahun in tahunOption" :key="tahun.value" :value="tahun.value">
                                    {{ tahun.label }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <!-- Table Section -->
                    <div class="overflow-x-auto mt-4">
                        <!-- Tampilkan Tabel -->
                        <TableTahun v-if="selectedTable === 'tahun'" :data="filteredDataTahunan" :entriesPerPage="entriesPerPage" :currentPage="currentPage" />
                        <TableBulan v-if="selectedTable === 'bulan'" :data="filteredDataBulanan" :entriesPerPage="entriesPerPage" :currentPage="currentPage" />
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

<script>
    import TableBulan from './table/bulanan.vue';
    import TableTahun from './table/tahunan.vue';
    import dummyData from './table/dummyData';

    export default {
        components: {
            TableBulan,
            TableTahun,
        },
        data() {
            return {
                data: dummyData,
                selectedJenisRekening: '',
                selectedTable: '',
                sortColumn: '',
                sortDirection: '',
                selectedBulan: null,
                selectedTahun: null,
                selectedBulanTahun: null,
                entriesPerPage: 5,
                currentPage: 1,
                bulanOption: [
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
                tahunOption: [
                    { value: 2020, label: 2020 },
                    { value: 2021, label: 2021 },
                ],
                jenisRekeningOptions: [
                    { value: 'all', label: 'All' },
                    { value: 'Rekening Pengeluaran', label: 'Rekening Pengeluaran' },
                    { value: 'Rekening Pengeluaran SKPD', label: 'Rekening Pengeluaran SKPD' },
                    { value: 'Rekening Pengeluaran BLUD', label: 'Rekening Pengeluaran BLUD' },
                    { value: 'Rekening Penerimaan', label: 'Rekening Penerimaan' },
                    { value: 'Rekening Penerimaan SKPD', label: 'Rekening Penerimaan SKPD' },
                    { value: 'Rekening Penerimaan BLUD', label: 'Rekening Penerimaan BLUD' },
                    { value: 'Rekening BOS Negeri', label: 'Rekening BOS Negeri' },
                    { value: 'Rekening BOS Swasta', label: 'Rekening BOS Swasta' },
                    { value: 'Rekening BOP Negeri', label: 'Rekening BOP Negeri' },
                    { value: 'Rekening BOP Swasta', label: 'Rekening BOP Swasta' },
                    { value: 'Rekening Khusus Pengeluaran SKPD', label: 'Rekening Khusus Pengeluaran SKPD' },
                    { value: 'Rekening Khusus Pengeluaran BLUD', label: 'Rekening Khusus Pengeluaran BLUD' },
                    { value: 'Rekening Khusus Penerimaan SKPD', label: 'Rekening Khusus Penerimaan SKPD' },
                    { value: 'Rekening Khusus Penerimaan BLUD', label: 'Rekening Khusus Penerimaan BLUD' },
                ],
            };
        },
        computed: {
            filteredDataBulanan() {
                if (!this.selectedBulan || !this.selectedBulanTahun) {
                    return [];
                }

                const selectedYear = parseInt(this.selectedBulanTahun);
                const selectedMonth = this.selectedBulan;

                return this.data.filter((item) => {
                    // Filter berdasarkan jenis rekening
                    if (this.selectedJenisRekening && this.selectedJenisRekening !== 'all' && item.jenisRekening !== this.selectedJenisRekening) {
                        return false;
                    }

                    // Filter laporan berdasarkan bulan dan tahun
                    const filteredLaporan = item.laporan.filter((laporan) => laporan.tahun === selectedYear && laporan.bulan === selectedMonth);

                    if (filteredLaporan.length > 0) {
                        item.laporan = filteredLaporan;
                        return true;
                    }

                    return false;
                });
            },
            filteredDataTahunan() {
                if (!this.selectedTahun) {
                    return [];
                }

                const selectedYear = parseInt(this.selectedTahun);

                return this.data.filter((item) => {
                    // Filter berdasarkan jenis rekening
                    if (this.selectedJenisRekening && this.selectedJenisRekening !== 'all' && item.jenisRekening !== this.selectedJenisRekening) {
                        return false;
                    }

                    // Filter laporan berdasarkan tahun
                    const filteredLaporan = item.laporan.filter((laporan) => laporan.tahun === selectedYear);

                    if (filteredLaporan.length > 0) {
                        item.laporan = filteredLaporan;
                        return true;
                    }

                    return false;
                });
            },
            filteredDataByJenisRekening() {
                if (this.selectedJenisRekening === 'all' || !this.selectedJenisRekening) {
                    return this.data;
                }
                return this.data.filter((item) => item.jenisRekening === this.selectedJenisRekening);
            },

            totalPages() {
                const filteredData = this.selectedTable === 'bulan' ? this.filteredDataBulanan : this.filteredDataTahunan;
                return Math.ceil(filteredData.length / this.entriesPerPage);
            },
        },
        methods: {
            filterData() {
                this.currentPage = 1; // Reset pagination when filters change
            },
            filteredDataBulanan() {
                this.currentPage = 1;
            },
            filteredDataTahunan() {
                this.currentPage = 1;
            },
            goToPage(page) {
                this.currentPage = page;
            },
            prevPage() {
                if (this.currentPage > 1) this.currentPage--;
            },
            nextPage() {
                if (this.currentPage < this.totalPages) this.currentPage++;
            },
        },
        watch: {
            selectedJenisRekening() {
                this.filterData();
            },
            selectedTable() {
                this.filterData();
            },
            selectedBulan() {
                this.filterData();
            },
            selectedBulanTahun() {
                this.filterData();
            },
            selectedTahun() {
                this.filterData();
            },
        },
    };
</script>
