<template>
    <Layout />
    <div class="min-h-screen flex flex-auto">
        <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="/">Home</a></li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Pengusulan PLT</a>
                    </li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Form Pengusulan PLT</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Form Pengusulan PLT</h2>
                <hr class="border-t-2 border-black" />
            </div>

            <main class="p-4 flex-grow mb-4">
                <div class="p-6 rounded-lg">
                    <div class="grid grid-cols-1 gap-6">
                        <!-- Tahun Anggaran -->
                        <div class="flex items-center">
                            <label for="tahun-anggaran" class="w-1/4 text-sm font-medium text-gray-700">Tahun Anggaran</label>
                            <select
                                id="tahun-anggaran"
                                class="w-3/4 block rounded-lg border-gray-300 bg-white p-2 shadow-sm focus:ring focus:ring-blue-300"
                            >
                                <option value="" disable>Pilih Tahun Anggaran</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                            </select>
                        </div>

                        <!-- SKPD (readonly) -->
                        <div class="flex items-center">
                            <label for="skpd" class="w-1/4 text-sm font-medium text-gray-700">SKPD</label>
                            <input
                                id="skpd"
                                type="text"
                                class="w-3/4 block rounded-lg border-gray-300 bg-gray-200 p-2 shadow-sm cursor-not-allowed"
                                value="PKBM PERGURUAN ADVENT"
                                readonly
                            />
                        </div>

                        <!-- Tanggal Pengusulan -->
                        <div class="flex items-center">
                            <label for="TanggalPengusulan" class="w-1/4 text-sm font-medium text-gray-700">Tanggal Pengusulan</label>
                            <input
                                id="TanggalPengusulan"
                                type="text"
                                ref="flatpickrTanggalPengusulan"
                                class="w-3/4 block rounded-lg border-gray-300 bg-white p-2 shadow-sm focus:ring focus:ring-blue-300"
                                placeholder="Pilih Tanggal SK"
                            />
                        </div>

                        <!-- Jenis Pelaksana -->
                        <div class="flex items-center">
                            <label for="jenis-pelaksana" class="w-1/4 text-sm font-medium text-gray-700">Jenis Pelaksana</label>
                            <select
                                id="jenis-pelaksana"
                                class="w-3/4 block rounded-lg border-gray-300 bg-white p-2 shadow-sm focus:ring focus:ring-blue-300"
                            >
                                <option value="" disable>Pilih Jenis Pelaksana</option>
                                <option value="PLT">PLT</option>
                                <option value="PLH">PLH</option>
                            </select>
                        </div>

                        <!-- Jenis Pengganti -->
                        <div class="flex items-center">
                            <label for="jenis-pengganti" class="w-1/4 text-sm font-medium text-gray-700">Jenis Pengganti</label>
                            <select
                                id="jenis-pengganti"
                                class="w-3/4 block rounded-lg border-gray-300 bg-white p-2 shadow-sm focus:ring focus:ring-blue-300"
                            >
                                <option value="" disable>Pilih Jenis Pengganti</option>
                                <option value="">KPA</option>
                                <option value="">Bendahara</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex justify-between mt-6">
                        <button class="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800">Kembali</button>
                        <button class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Simpan</button>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, reactive } from 'vue';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import Layout from '@/components/layout/Layout.vue';

export default {
    components: { Layout },
    setup() {
        const flatpickrTanggalPengusulan = ref<HTMLInputElement | null>(null);
        const form = reactive({
            TahunAnggaran: '',
            TanggalPengusulan: '',
            JenisPelaksana: '',
            JenisPengganti: '',
        });

        onMounted(() => {
            if (flatpickrTanggalPengusulan.value) {
                flatpickr(flatpickrTanggalPengusulan.value, {
                    onChange: (selectedDates) => {
                        form.TanggalPengusulan = selectedDates[0]?.toISOString() || '';
                    },
                });
            }
        });

        return { flatpickrTanggalPengusulan };
    },
};
</script>

<style scoped>
label {
    padding-right: 1rem;
}

select,
input {
    transition: all 0.2s ease-in-out;
}

select:hover,
input:hover {
    border-color: #2563eb;
    background-color: #f3f4f6;
}

button {
    transition: transform 0.2s ease-in-out, background-color 0.2s;
}

button:hover {
    transform: scale(1.05);
}
</style>
 