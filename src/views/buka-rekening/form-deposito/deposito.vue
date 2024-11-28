<template>
    <Layout />
    <div class="min-h-screen flex flex-auto">
        <!-- Gunakan ml-64 untuk desktop, ml-0 untuk mobile -->
        <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
            <!-- Header and Breadcrumb -->
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="/">Home</a></li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Deposito</a>
                    </li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Tambah</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Deposito</h2>
                <p class="text-sm mb-[10px]"></p>
                <hr class="border-t-2 border-black" />
            </div>

            <!-- Form Section -->
            <div class="mt-8 bg-white shadow rounded-lg p-6">
                <form class="space-y-5">
                    <!-- Kode SKPD -->
                    <div class="flex items-center">
                        <label for="readonlyInputkodeskpd" class="w-1/4 font-bold text-gray-800 text-sm">Kode SKPD</label>
                        <input
                            id="readonlyInputkodeskpd"
                            type="text"
                            value="40302702"
                            class="bg-gray-100 text-gray-600 p-2 border border-gray-300 rounded w-3/4 cursor-not-allowed pointer-events-none"
                            readonly
                        />
                    </div>

                    <!-- Nama SKPD -->
                    <div class="flex items-center">
                        <label for="readonlyInputnama" class="w-1/4 font-bold text-gray-800 text-sm">Nama SKPD</label>
                        <input
                            id="readonlyInputnama"
                            type="text"
                            value="PUSAT PENGEMBANGAN KOMPETENSI DAN KEBIJAKAN PUBLIK"
                            class="bg-gray-100 text-gray-600 p-2 border border-gray-300 rounded w-3/4 cursor-not-allowed pointer-events-none"
                            readonly
                        />
                    </div>

                    <!-- Nama Bank -->
                    <div class="flex items-center">
                        <label for="optionbank" class="w-1/4 font-bold text-gray-800 text-sm">Nama Bank</label>
                        <select id="optionbank" class="p-2 border border-gray-300 rounded w-3/4">
                            <option>Pilih Bank</option>
                            <option>Bank1</option>
                            <option>Bank2</option>
                        </select>
                    </div>

                    <!-- Nomor Deposito -->
                    <div class="flex items-center">
                        <label for="nomorDeposito" class="w-1/4 font-bold text-gray-800 text-sm">Nomor Deposito</label>
                        <input id="nomorDeposito" type="text" placeholder="Masukkan Nomor Deposito" class="p-2 border border-gray-300 rounded w-3/4" />
                    </div>

                    <!-- Rekening Sumber -->
                    <div class="flex items-center">
                        <label for="rekeningSumber" class="w-1/4 font-bold text-gray-800 text-sm">Rekening Sumber</label>
                        <input id="rekeningSumber" type="text" class="p-2 border border-gray-300 rounded w-3/4" />
                    </div>

                    <!-- Tanggal Deposito -->
                    <div class="flex items-center relative">
                        <label for="tanggalDeposito" class="w-1/4 font-bold text-gray-800 text-sm">Tanggal Deposito</label>
                        <input id="tanggalDeposito" ref="tanggalDeposito" class="p-2 border border-gray-300 rounded w-3/4" placeholder="Pilih tanggal" />
                        <span class="absolute right-4 text-gray-500">
                            <i class="fas fa-calendar-alt"></i>
                        </span>
                    </div>

                    <!-- Jangka Waktu Deposito -->
                    <div class="flex items-center">
                        <label for="jangkaWaktuDeposito" class="w-1/4 font-bold text-gray-800 text-sm">Jangka Waktu Deposito</label>
                        <select id="jangkaWaktuDeposito" v-model="selectedjangkaWaktu" class="p-2 border border-gray-300 rounded w-3/4">
                            <option disabled value="">Pilih Jangka Waktu</option>
                            <option v-for="option in jangkaWaktuOptions" :key="option.value" :value="option.value">
                                {{ option.label }}
                            </option>
                        </select>
                    </div>

                    <!-- Bunga -->
                    <div class="flex items-center">
                        <label for="bunga" class="w-1/4 font-bold text-gray-800 text-sm">Bunga</label>
                        <div class="relative w-3/4 flex">
                            <input id="bunga" type="number" placeholder="" class="form-input p-2 border border-gray-300 rounded-l-md w-full" />
                            <div class="bg-[#eee] flex justify-center items-center px-3 font-semibold border border-l-0 border-gray-300 rounded-r-md">%</div>
                        </div>
                    </div>

                    <!-- Tanggal Jatuh Tempo -->
                    <div class="flex items-center relative">
                        <label for="jatuhTempo" class="w-1/4 font-bold text-gray-800 text-sm">Tanggal Jatuh Tempo</label>
                        <input id="jatuhTempo" ref="tanggalJatuhTempo" class="p-2 border border-gray-300 rounded w-3/4" placeholder="Pilih tanggal" />
                        <span class="absolute right-4 text-gray-500">
                            <i class="fas fa-calendar-alt"></i>
                        </span>
                    </div>

                    <!-- Jenis Deposito -->
                    <div class="flex items-center">
                        <label for="jenisDeposito" class="w-1/4 font-bold text-gray-800 text-sm">Jenis Deposito</label>
                        <select id="jenisDeposito" v-model="selectedjenisDeposito" class="p-2 border border-gray-300 rounded w-3/4">
                            <option disabled value="">Pilih Jenis</option>
                            <option v-for="option in jenisDepositoOptions" :key="option.value" :value="option.value">
                                {{ option.label }}
                            </option>
                        </select>
                    </div>

                    <!-- Jumlah Deposito -->
                    <div class="flex items-center">
                        <label for="jumlahDeposito" class="w-1/4 font-bold text-gray-800 text-sm">Jumlah Deposito</label>
                        <div class="relative w-3/4 flex">
                            <div class="bg-[#eee] flex justify-center items-center px-3 font-semibold border border-2-0 border-gray-300 rounded-l-md">Rp</div>
                            <input id="jumlahDeposito" type="number" placeholder="" class="form-input p-2 border border-gray-300  w-full" />
                            <!-- <div class="bg-[#eee] flex justify-center items-center px-3 font-semibold border border-l-0 border-gray-300 rounded-r-md">%</div> -->
                        </div>
                    </div>

                    <!-- Unggah Bilyet -->
                    <div class="flex items-center">
                        <label for="unggahBilyet" class="w-1/4 font-bold text-gray-800 text-sm">Unggah Bilyet</label>
                        <div class="w-3/4">
                            <input
                                id="unggahBilyet"
                                type="file"
                                class="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-2 border border-gray-300 rounded w-full file:w-auto file:bg-primary/90 file:text-white file:hover:bg-primary file:rounded file:cursor-pointer"
                                required
                            />
                        </div>
                    </div>

                    <!-- Button Actions -->
                    <div class="flex justify-between mt-6">
                        <button type="button" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">Kembali</button>
                        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue';
    import flatpickr from 'flatpickr';
import Layout from '@/components/layout/Layout.vue';

    export default {
        components: {
           Layout
        },
        setup() {
            const tanggalDeposito = ref(null);
            const tanggalJatuhTempo = ref(null);
            const selectedjangkaWaktu = ref('');
            const selectedjenisDeposito = ref('');
            const jangkaWaktuOptions = [
                { value: '1Bulan', label: '1 Bulan' },
                { value: '2Bulan', label: '2 Bulan' },
                { value: '3Bulan', label: '3 Bulan' },
                { value: '4Bulan', label: '4 Bulan' },
                { value: '5Bulan', label: '5 Bulan' },
                { value: '6Bulan', label: '6 Bulan' },
                { value: '7Bulan', label: '7 Bulan' },
                { value: '8Bulan', label: '8 Bulan' },
                { value: '9Bulan', label: '9 Bulan' },
                { value: '10Bulan', label: '10 Bulan' },
                { value: '11Bulan', label: '11 Bulan' },
                { value: '12Bulan', label: '12 Bulan' },
            ];
            const jenisDepositoOptions = [
                { value: 'aro', label: 'Aro' },
                { value: 'manual', label: 'Manual' },
            ];

            onMounted(() => {
                flatpickr(tanggalDeposito.value, {
                    dateFormat: 'Y-m-d',
                    locale: 'id',
                });

                flatpickr(tanggalJatuhTempo.value, {
                    dateFormat: 'Y-m-d',
                    locale: 'id',
                });
            });

            return {
                tanggalDeposito,
                tanggalJatuhTempo,
                selectedjangkaWaktu,
                jangkaWaktuOptions,
                selectedjenisDeposito,
                jenisDepositoOptions,
            };
        },
    };
</script>

<style scoped>
    
</style>
