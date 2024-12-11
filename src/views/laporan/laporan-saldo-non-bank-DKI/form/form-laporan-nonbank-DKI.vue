<template>
    <Layout />
    <div class="min-h-screen flex flex-auto">
        <!-- Gunakan ml-64 untuk desktop, ml-0 untuk mobile -->
        <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
            <!-- Header and Breadcrumb -->
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="/"> Home </a></li>

                    <li class="before:content-['/'] before:px-0.5">
                        <a href="#" class="text-blue-500 dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70"> Laporan Saldo</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Form Tambah</h2>
                <p class="text-sm mb-[10px]"></p>
                <hr class="border-t-2 border-black" />
            </div>

            <!-- Form Section -->
            <div class="mt-8 bg-white shadow rounded-lg p-6">
                <form class="space-y-5">
                    <!-- Kode SKPD -->
                    <div class="flex items-center">
                        <label for="readonlyInputkodeskpd" class="w-1/4 font-B text-gray-800 text-sm">Kode SKPD</label>
                        <input
                            id="readonlyInputkodeskpd"
                            type="text"
                            class="bg-gray-100 text-gray-600 p-2 border border-gray-300 rounded w-3/4 cursor-not-allowed pointer-events-none"
                            readonly
                        />
                    </div>
                    <!-- Nama SKPD -->
                    <div class="flex items-center">
                        <label for="readonlyInputnama" class="w-1/4 font-normal text-gray-800 text-sm">Nama SKPD</label>
                        <input
                            id="readonlyInputnama"
                            type="text"
                            class="bg-gray-100 text-gray-600 p-2 border border-gray-300 rounded w-3/4 cursor-not-allowed pointer-events-none"
                            readonly
                        />
                    </div>
                    <!-- Nomor rekening -->
                    <div class="flex items-center">
                        <label for="nomorRekening" class="w-1/4 font-normal text-gray-800 text-sm"> Nomor rekening </label>
                        <div class="relative w-3/4">
                            <!-- Input -->
                            <input id="nomorRekening" type="text" class="p-2 pr-16 border bg-gray-100 border-gray-300 rounded w-full" readonly />
                            <!-- Tombol Search -->
                            <button
                                class="absolute top-0 right-0 h-full px-4 bg-gray-100 text-red-600 border-2 border-red-600 rounded transition duration-300 hover:bg-red-600 hover:text-white"
                            >
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
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Bulan -->
                    <div class="flex items-center">
                        <label for="bulan" class="w-1/4 font-normal text-gray-800 text-sm">Bulan</label>
                        <select id="bulan" v-model="selectedBulan" class="p-2 border border-gray-300 rounded w-3/4">
                            <option disabled value="">Pilih Bulan</option>
                            <option value="">All</option>
                            <option v-for="bulan in bulanOption" :key="bulan.value" :value="bulan.value">
                                {{ bulan.label }}
                            </option>
                        </select>
                    </div>
                    <!-- Tahun -->
                    <div class="flex items-center">
                        <label for="Tahun" class="w-1/4 font-normal text-gray-800 text-sm">Tahun</label>
                        <select id="Tahun" v-model="selectedTahun" class="p-2 border border-gray-300 rounded w-3/4">
                            <option disabled value="">Pilih Tahun</option>
                            <option value="">All</option>
                            <option v-for="Tahun in TahunOption" :key="Tahun.value" :value="Tahun.value">
                                {{ Tahun.label }}
                            </option>
                        </select>
                    </div>
                    <!-- Nama Rekening -->
                    <div class="flex items-center">
                        <label for="namaRekening" class="w-1/4 font-normal text-gray-800 text-sm">Nama Rekening</label>
                        <input
                            id="namaRekening"
                            type="text"
                            class="bg-gray-100 text-gray-600 p-2 border border-gray-300 rounded w-3/4 cursor-not-allowed pointer-events-none"
                            readonly
                        />
                    </div>

                    <!-- Saldo Awal-->
                    <div class="flex items-center">
                        <label for="saldoAwal" class="w-1/4 font-normal text-gray-800 text-sm">Saldo Awal</label>
                        <div class="relative w-3/4 flex">
                            <div class="bg-[#eee] flex justify-center items-center px-3 font-seminormal border border-2-0 border-gray-300 rounded-l-md">Rp</div>
                            <input id="saldoAwal" type="text" placeholder="" class="form-input p-2 border border-gray-300 w-full" />
                        </div>
                    </div>

                    <!-- Saldo Akhir -->
                    <div class="flex items-center">
                        <label for="saldoAkhir" class="w-1/4 font-normal text-gray-800 text-sm">Saldo Akhir</label>
                        <div class="relative w-3/4 flex">
                            <div class="bg-[#eee] flex justify-center items-center px-3 font-seminormal border border-2-0 border-gray-300 rounded-l-md">Rp</div>
                            <input id="saldoAkhir" type="text" placeholder="" class="form-input p-2 border border-gray-300 w-full" />
                        </div>
                    </div>

                    <!-- Unggah Rekeening Koran -->
                    <div class="flex items-center">
                        <label for="unggahRekeningKoran" class="w-1/4 font-normal text-gray-800 text-sm">Unggah Rekening Koran</label>
                        <div class="w-3/4">
                            <input
                                id="unggahRekeningKoran"
                                type="file"
                                class="form-input file:py-2 file:px-4 file:border-0 file:font-seminormal p-2 border border-gray-300 rounded w-full file:w-auto file:bg-primary/90 file:text-white file:hover:bg-primary file:rounded file:cursor-pointer"
                                required
                            />
                        </div>
                    </div>

                    <!-- Button Actions -->
                    <div class="flex justify-between mt-6">
                        <a href="/home/laporan/saldo/list" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"> Kembali </a>
                        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import Layout from '@/components/layout/Layout.vue';

    export default defineComponent({
        name: 'formLaporanSaldoNonDKI',
        components: {
            Layout,
        },
        data() {
            return {
                selectedBulan: '',
                selectedTahun: '',
                searchNamaRekening: '',
                bulanOption: [
                    { value: 'januari', label: 'Januari' },
                    { value: 'februari', label: 'Februari' },
                    { value: 'maret', label: 'Maret' },
                    { value: 'april', label: 'April' },
                    { value: 'mei', label: 'Mei' },
                    { value: 'juni', label: 'Juni' },
                    { value: 'juli', label: 'Juli' },
                    { value: 'agustus', label: 'Agustus' },
                    { value: 'september', label: 'September' },
                    { value: 'oktober', label: 'Oktober' },
                    { value: 'november', label: 'November' },
                    { value: 'desember', label: 'Desember' },
                ],
                TahunOption: [
                    { value: 2020, label: 2020 },
                    { value: 2021, label: 2021 },
                    { value: 2022, label: 2022 },
                    { value: 2023, label: 2023 },
                    { value: 2024, label: 2024 },
                ],
            };
        },
    });
</script>

<style scoped></style>
