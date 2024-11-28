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
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70"
                            >Buka Rekening Bank Lain Tambah</a
                        >
                    </li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Tambah</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Buka Rekening</h2>
                <p class="text-sm mb-[10px]">Menu ini digunakan untuk menambah buka rekening bank lain</p>
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
                            placeholder="P9984389"
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
                            placeholder="PENGAJUAN"
                            class="bg-gray-100 text-gray-600 p-2 border border-gray-300 rounded w-3/4 cursor-not-allowed pointer-events-none"
                            readonly
                        />
                    </div>

                    <!-- Bank -->
                    <div class="flex items-center">
                        <label for="optionbank" class="w-1/4 font-bold text-gray-800 text-sm">Bank</label>
                        <select id="optionbank" class="p-2 border border-gray-300 rounded w-3/4">
                            <option>Pilih Bank</option>
                            <option>Bank1</option>
                            <option>Bank2</option>
                            <option>BB</option>
                        </select>
                    </div>

                    <!-- Jenis Rekening -->
                    <div class="flex items-center">
                        <label for="jenisRekening" class="w-1/4 font-bold text-gray-800 text-sm">Jenis Rekening</label>
                        <select id="jenisRekening" class="p-2 border border-gray-300 rounded w-3/4">
                            <option>Pilih Jenis Rekening</option>
                            <option>Rekening non Bank DKI Sekolah</option>
                            <option>Bank1</option>
                            <option>Bank2</option>
                        </select>
                    </div>

                    <!-- Jenis Kategori -->
                    <div class="flex items-center">
                        <label for="kategori" class="w-1/4 font-bold text-gray-800 text-sm">Jenis Kategori</label>
                        <select id="kategori" class="p-2 border border-gray-300 rounded w-3/4">
                            <option>Pilih Jenis Kategori</option>
                            <option>Kategori1</option>
                            <option>Kategori2</option>
                            <option>Kategori3</option>
                        </select>
                    </div>

                    <!-- Tujuan Rekening -->
                    <div class="flex items-start">
                        <label for="ctnTextarea" class="w-1/4 font-bold text-gray-800 text-sm">Tujuan Rekening</label>
                        <textarea id="ctnTextarea" rows="3" class="p-2 border border-gray-300 rounded w-3/4" placeholder="Enter Textarea" required></textarea>
                    </div>

                    <!-- Unggah Permohonan -->

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
                        <button type="submit" class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Header from '@/components/layout/Header.vue';
    import Sidebar from '@/components/layout/Sidebar.vue';
    export default {
        components: {
            Sidebar,
            Header,
        },
        data() {
            return {
                id: 'SKPD-12345',
                namaskpd: '',
            };
        },
    };
</script>

<style scoped>
    
</style>
