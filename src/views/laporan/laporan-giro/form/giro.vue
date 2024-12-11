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
                <h2 class="text-2xl font-bold mb-[10px]">Form Bunga</h2>
                <p class="text-sm mb-[10px]"></p>
                <hr class="border-t-2 border-black" />
            </div>

            <!-- Form Section -->
            <div class="mt-8 bg-white shadow rounded-lg p-6">
                <form class="space-y-5">
                    <!-- Kode SKPD -->
                    <div class="flex items-center">
                        <label for="tanggalAwalBunga" class="w-1/4 font-normal text-gray-800 text-sm">Tanggal Awal Bunga</label>
                        <input id="tanggalAwalBunga" type="text" ref="tanggalAwalBunga" class="p-2 border border-gray-300 rounded w-3/4" />
                    </div>

                    <div class="flex items-center">
                        <label for="tanggalAkhirBunga" class="w-1/4 font-normal text-gray-800 text-sm">Tanggal Akhir Bunga</label>
                        <input id="tanggalAkhirBunga" type="text" ref="tanggalAkhirBunga" class="p-2 border border-gray-300 rounded w-3/4" />
                    </div>
                    <div class="flex items-center">
                        <label for="nominalBatasPertama" class="w-1/4 font-normal text-gray-800 text-sm">Nominal Batas Pertama</label>
                        <div class="flex items-center space-x-1 w-3/4">
                            <input
                                type="text"
                                id="nominalBatasPertamaDari"
                                class="p-1 border border-gray-300 rounded-md bg-gray-200 text-sm w-1/4"
                                placeholder="0"
                                readonly
                                v-model="nominalBatasPertamaDari"
                            />
                            <span class="text-sm font-normal text-gray-800">S</span>
                            <span class="text-sm font-normal text-gray-800">/</span>
                            <span class="text-sm font-normal text-gray-800">D</span>
                            <input
                                type="text"
                                id="nominalBatasPertamaSampai"
                                class="p-1 border border-gray-300 rounded-md text-sm w-1/4"
                                v-model="nominalBatasPertamaSampai"
                            />
                        </div>
                    </div>

                    <!-- Bunga Pertama -->
                    <div class="flex items-center">
                        <label for="bungaPertama" class="w-1/4 font-normal text-gray-800 text-sm">Bunga Pertama</label>
                        <div class="flex items-center border border-gray-300 bg-gray-200 rounded-md text-sm w-1/4">
                            <input type="text" id="bungaPertama" class="p-1 w-full bg-gray-200 focus:outline-none" readonly v-model="bungaPertama" />
                            <span class="p-1 text-gray-600">%</span>
                        </div>
                    </div>

                    <!-- Nominal Batas Kedua -->
                    <div class="flex items-center">
                        <label for="nominalBatasKedua" class="w-1/4 font-normal text-gray-800 text-sm">Nominal Batas Kedua</label>
                        <div class="flex items-center space-x-1 w-3/4">
                            <input
                                type="text"
                                id="nominalBatasKeduaDari"
                                class="p-1 border border-gray-300 rounded-md bg-gray-200 text-sm w-1/4"
                                placeholder="0"
                                readonly
                                :value="nominalBatasPertamaSampai"
                            />
                            <span class="text-sm font-normal text-gray-800">S</span>
                            <span class="text-sm font-normal text-gray-800">/</span>
                            <span class="text-sm font-normal text-gray-800">D</span>
                            <input
                                type="text"
                                id="nominalBatasKeduaSampai"
                                class="p-1 border border-gray-300 rounded-md text-sm w-1/4"
                                v-model="nominalBatasKeduaSampai"
                            />
                        </div>
                    </div>

                    <!-- Bunga Kedua -->
                    <div class="flex items-center">
                        <label for="bungaKedua" class="w-1/4 font-normal text-gray-800 text-sm">Bunga Kedua</label>
                        <div class="flex items-center border border-gray-300 rounded-md text-sm w-1/4">
                            <input type="text" id="bungaKedua" class="p-1 w-full focus:outline-none" v-model="bungaKedua" />
                            <span class="p-1 text-gray-600">%</span>
                        </div>
                    </div>

                    <!-- Nominal Batas Ketiga -->
                    <div class="flex items-center">
                        <label for="nominalBatasKetiga" class="w-1/4 font-normal text-gray-800 text-sm">Nominal Batas Ketiga</label>
                        <div class="flex items-center space-x-1 w-3/4">
                            <input
                                type="text"
                                id="nominalBatasKetigaDari"
                                class="p-1 border border-gray-300 rounded-md bg-gray-200 text-sm w-1/4"
                                placeholder="0"
                                readonly
                                :value="nominalBatasKeduaSampai"
                            />
                            <span class="text-sm font-normal text-gray-800">S</span>
                            <span class="text-sm font-normal text-gray-800">/</span>
                            <span class="text-sm font-normal text-gray-800">D</span>
                            <input
                                type="text"
                                id="nominalBatasKetigaSampai"
                                class="p-1 border border-gray-300 rounded-md text-sm w-1/4"
                                v-model="nominalBatasKetigaSampai"
                            />
                        </div>
                    </div>

                    <!-- Bunga Ketiga -->
                    <div class="flex items-center">
                        <label for="bungaKetiga" class="w-1/4 font-normal text-gray-800 text-sm">Bunga Ketiga</label>
                        <div class="flex items-center border border-gray-300 rounded-md text-sm w-1/4">
                            <input type="text" id="bungaKetiga" class="p-1 w-full focus:outline-none" v-model="bungaKetiga" />
                            <span class="p-1 text-gray-600">%</span>
                        </div>
                    </div>

                    <!-- Nominal Batas Keempat -->
                    <div class="flex items-center">
                        <label for="nominalBatasKeempat" class="w-1/4 font-normal text-gray-800 text-sm">Nominal Batas Keempat</label>
                        <div class="flex items-center space-x-1 w-3/4">
                            <input
                                type="text"
                                id="nominalBatasKeempatDari"
                                class="p-1 border border-gray-300 rounded-md bg-gray-200 text-sm w-1/4"
                                placeholder="0"
                                readonly
                                :value="nominalBatasKetigaSampai"
                            />
                            <span class="text-sm font-normal text-gray-800">S</span>
                            <span class="text-sm font-normal text-gray-800">/</span>
                            <span class="text-sm font-normal text-gray-800">D</span>
                            <input
                                type="text"
                                id="nominalBatasKeempatSampai"
                                class="p-1 border border-gray-300 rounded-md text-sm w-1/4"
                                v-model="nominalBatasKeempatSampai"
                            />
                        </div>
                    </div>

                    <!-- Bunga Keempat -->
                    <div class="flex items-center">
                        <label for="bungaKeempat" class="w-1/4 font-normal text-gray-800 text-sm">Bunga Keempat</label>
                        <div class="flex items-center border border-gray-300 rounded-md text-sm w-1/4">
                            <input type="text" id="bungaKeempat" class="p-1 w-full focus:outline-none" v-model="bungaKeempat" />
                            <span class="p-1 text-gray-600">%</span>
                        </div>
                    </div>

                    <!-- Nominal Batas Kelima -->
                    <div class="flex items-center">
                        <label for="nominalBatasKelima" class="w-1/4 font-normal text-gray-800 text-sm">Nominal Batas Kelima</label>
                        <div class="flex items-center space-x-1 w-3/4">
                            <input
                                type="text"
                                id="nominalBatasKelimaDari"
                                class="p-1 border border-gray-300 rounded-md bg-gray-200 text-sm w-1/4"
                                placeholder="0"
                                readonly
                                :value="nominalBatasKeempatSampai"
                            />
                        </div>
                    </div>

                    <!-- Bunga Kelima -->
                    <div class="flex items-center">
                        <label for="bungaKelima" class="w-1/4 font-normal text-gray-800 text-sm">Bunga Kelima</label>
                        <div class="flex items-center border border-gray-300 rounded-md text-sm w-1/4">
                            <input type="text" id="bungaKelima" class="p-1 w-full focus:outline-none" v-model="bungaKelima" />
                            <span class="p-1 text-gray-600">%</span>
                        </div>
                    </div>

                    <!-- Button Actions -->
                    <div class="flex justify-between mt-6">
                        <a href="/home/laporan/giro-bdki/list" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"> Kembali </a>
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
    import flatpickr from 'flatpickr';
    import 'flatpickr/dist/themes/airbnb.css'; // Tema Flatpickr

    export default defineComponent({
        name: 'formGiroBunga',
        components: {
            Layout,
        },
        data() {
            return {
                tanggalAwal: null,
                tanggalAkhir: null,
                nominalBatasPertamaSampai: '',
                nominalBatasKeduaSampai: '',
                nominalBatasKetigaSampai: '',
                bungaPertama: '',
                bungaKedua: '',
                bungaKetiga: '',
                bungaKeempat: '',
            };
        },
        mounted() {
            // Inisialisasi Flatpickr untuk Tanggal Awal
            flatpickr(this.$refs.tanggalAwalBunga, {
                enableTime: false, // Nonaktifkan pilihan waktu (jika hanya tanggal)
                dateFormat: 'Y-m-d', // Format tanggal
                onChange: (selectedDates) => {
                    this.tanggalAwal = selectedDates[0]; // Simpan tanggal yang dipilih
                },
            });

            // Inisialisasi Flatpickr untuk Tanggal Akhir
            flatpickr(this.$refs.tanggalAkhirBunga, {
                enableTime: false,
                dateFormat: 'Y-m-d',
                onChange: (selectedDates) => {
                    this.tanggalAkhir = selectedDates[0];
                },
            });
        },
    });
</script>

<style scoped></style>
