<template>
    <Header class="fixed-header border-1" />
    <div class="flex">
        <!-- Sidebar Component -->
        <Sidebar class="fixed-sidebar" />

        <!-- Main Content -->
        <div class="content-area p-8 py-16 bg-gray-50 min-h-screen w-full ml-[250px]">
            <!-- Header and Breadcrumb -->
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="javascript:;">Home</a></li>
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
                        <label for="ctnFile" class="w-1/4 font-bold text-gray-800 text-sm">Unggah Permohonan</label>
                        <input id="ctnFile" type="file" class="p-2 border border-gray-300 rounded w-3/4" required />
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
    interface DataItem {
        Kode: string;
        nama: string;
    }
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
    .fixed-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        background-color: rgb(249 250 251);
        z-index: 50;
    }
    .fixed-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 250px;
        background-color: #1e3a8a;
    }
    .content-area {
        margin-left: 250px; /* Matches sidebar width */
    }
</style>
