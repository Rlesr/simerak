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
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Kelurahan</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Form Kelurahan</h2>
                <hr class="border-t-2 border-black" />
            </div>

            <main class="p-4 flex-grow mb-4">
                <div class="p-6 rounded-lg">
                    <form class="space-y-4">
                        <div class="flex items-center">
                            <label for="namaKota" class="w-48 text-gray-700 dark:text-white-dark">Nama Kecamatan</label>
                            <select id="namaKota" class="border rounded p-2 w-full" v-model="formData.namaKecamatan">
                                <option value="" disabled selected>Nama Kecamatan</option>
                                <option v-for="kecamatan in kecamatanList" :key="kecamatan.value" :value="kecamatan.value">
                                    {{ kecamatan.text }}
                                </option>
                            </select>
                        </div>

                        <!-- Nama Kategori -->
                        <div class="flex items-center">
                            <label for="namaKelurahan" class="w-48 text-gray-700 dark:text-white-dark">Nama Kelurahan</label>
                            <input
                                id="namaKelurahan"
                                type="text"
                                class="border rounded p-2 w-full"
                                placeholder="Nama Kelurahan"
                                v-model="formData.namaKelurahan"
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
                namaKecamatan: '',
                namaKelurahan: '',
            });

            const kecamatanList = [
                { value: 'gambir', text: 'Gambir' },
                { value: 'menteng', text: 'Menteng' },
                { value: 'tanah_abang', text: 'Tanah Abang' },
                { value: 'setiabudi', text: 'Setiabudi' },
                { value: 'tebet', text: 'Tebet' },
                { value: 'kemayoran', text: 'Kemayoran' },
                { value: 'cilandak', text: 'Cilandak' },
                { value: 'pasar_minggu', text: 'Pasar Minggu' },
                { value: 'kebayoran_baru', text: 'Kebayoran Baru' },
                { value: 'kebayoran_lama', text: 'Kebayoran Lama' },
            ];
            const router = useRouter();

            const handleBack = () => {
                router.push('/home/Master/Kelurahan');
            };

            const handleSave = () => {
                // Logic untuk menyimpan data (jika ada)
                console.log('Data disimpan:', formData);
                router.push('/home/Master/Kelurahan'); // Navigasi setelah menyimpan
            };

            return { formData, handleBack, handleSave, kecamatanList };
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
