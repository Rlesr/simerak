<template>
    <Layout />
    <div class="min-h-screen flex flex-auto">
        <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="/">Home</a></li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Master</a>
                    </li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Kota</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Form Kota</h2>
                <hr class="border-t-2 border-black" />
            </div>

            <main class="p-4 flex-grow mb-4">
                <div class="p-6 rounded-lg">
                    <form class="space-y-4">
                        <div class="flex items-center">
                            <label for="NamaProvinsi" class="w-48 text-gray-700 dark:text-white-dark">Nama Provinsi</label>
                            <select id="NamaProvinsi" class="border rounded p-2 w-full" v-model="formData.namaProvinsi">
                                <option value="" disabled selected>Nama Provinsi</option>
                                <option v-for="provinsi in provinsiList" :key="provinsi.value" :value="provinsi.value">
                                    {{ provinsi.text }}
                                </option>
                            </select>
                        </div>

                        <!-- Nama Kategori -->
                        <div class="flex items-center">
                            <label for="NamaKota" class="w-48 text-gray-700 dark:text-white-dark">Nama Kota</label>
                            <input
                                id="NamaKota"
                                type="text"
                                class="border rounded p-2 w-full"
                                placeholder="Nama Kota"
                                v-model="formData.namaKota"
                            />
                        </div>

                        <div class="flex justify-between mt-6">
                            <button type="button" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700" @click="handleBack">Kembali</button>
                            <button type="button" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" @click="handleSave">Simpan</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import Layout from '@/components/layout/Layout.vue';

    export default defineComponent({
        components: { Layout },
        setup() {
            const formData = reactive({
                namaKota: '',
                namaProvinsi: '',
            });

            const provinsiList = [
                { value: 'aceh', text: 'Aceh' },
                { value: 'sumatera_utara', text: 'Sumatera Utara' },
                { value: 'sumatera_barat', text: 'Sumatera Barat' },
                { value: 'riau', text: 'Riau' },
                { value: 'jawa_barat', text: 'Jawa Barat' },
                { value: 'jawa_tengah', text: 'Jawa Tengah' },
                { value: 'jawa_timur', text: 'Jawa Timur' },
                { value: 'kalimantan_timur', text: 'Kalimantan Timur' },
                { value: 'sulawesi_selatan', text: 'Sulawesi Selatan' },
                { value: 'papua', text: 'Papua' },
            ];

            const router = useRouter();

const handleBack = () => {
    router.push('/home/Master/Kota');
};

const handleSave = () => {
    // Logic untuk menyimpan data (jika ada)
    console.log('Data disimpan:', formData);
    router.push('/home/Master/Kota'); // Navigasi setelah menyimpan
};


            return { formData, provinsiList, handleSave, handleBack };
        },
    });
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
</style>
