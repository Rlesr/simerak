<template>
    <Layout />
    <div class="min-h-screen flex overflow-hidden">
        <!-- Sidebar -->

        <!-- Main Content Area dengan Scroll -->
        <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
            <!-- Breadcrumb -->
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="/"> Home </a></li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a
                            href="/home/user-management/pengguna/list"
                            class="text-gray-500 dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70"
                        >
                            User Management
                        </a>
                    </li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="#" class="text-blue-500 dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70"> Otoritas</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Daftar Otoritas</h2>
                <p class="text-sm mb-[10px]">Menu ini digunakan untuk melihat daftar Otoritas</p>
                <hr class="border-t-2 border-black" />
            </div>

            <!-- Scrollable Content -->
            <div class="flex-1 px-6 py-4 space-y-6">
                <!-- Rekening List -->
                <div class="bg-white p-4 rounded-md shadow max-h-full max-w-full">
                    <!-- Filter Section -->
                    <div class="flex justify-between items-center w-full overflow-x-auto">
                        <!-- Left side: Search/Filter Controls -->
                        <div class="flex items-center space-x-4">
                            <div class="relative flex items-center border border-gray-300 rounded-md h-10 w-[150px] px-2">
                                <!-- Input Pencarian -->
                                <input
                                    type="text"
                                    v-model="searchkodeOtoritas"
                                    class="h-full w-full bg-transparent border-none outline-none text-sm placeholder-gray-400 text-gray-700"
                                    placeholder="kodeOtoritas"
                                />
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="relative flex items-center border border-gray-300 rounded-md h-10 w-[150px] px-2">
                                    <input
                                        type="text"
                                        v-model="searchnamaOtoritas"
                                        class="h-full w-full bg-transparent border-none outline-none text-sm placeholder-gray-400 text-gray-700"
                                        placeholder="Nama Otoritas"
                                    />
                                </div>
                            </div>
                            <!-- Pilih Status -->
                            <div class="relative flex items-center border border-gray-300 rounded-md h-10 w-[150px] px-2">
                                <select
                                    class="h-full w-full bg-transparent border-none outline-none text-sm placeholder-gray-400 text-gray-700"
                                    name="pilihStatus"
                                    id="status"
                                    v-model="selectedStatus"
                                >
                                    <option value="">Semua Status</option>
                                    <option value="Aktif">Aktif</option>
                                    <option value="Tidak Aktif">Tidak Aktif</option>
                                </select>
                            </div>

                            <button class="btn-primary h-8 w-[150px] flex items-center justify-center">
                                <p class="text-[#054083] font-semibold">Tambah</p>
                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px] ml-2" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M12 4V20" stroke="#054083" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>

                            <button
                                :class="[
                                    'h-8 w-[150px] flex items-center justify-center rounded-md border font-semibold',
                                    selectedRows.length > 0
                                        ? 'bg-[#7EA5EC] text-[#054083] border-[#7EA5EC] hover:bg-white hover:text-[#7EA5EC]'
                                        : 'bg-gray-200 text-gray-500 border-gray-200 cursor-not-allowed',
                                ]"
                                @click="selectedRows.length > 0 ? (showModal = true) : null"
                            >
                                <svg class="w-[20px] h-[20px] ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                                        <path
                                            d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"
                                        />
                                        <path stroke-linecap="round" d="M6 10V8a6 6 0 1 1 12 0v2" />
                                    </g>
                                </svg>
                                <p>Nonaktifkan</p>
                            </button>

                            <button
                                :class="[
                                    'h-8 w-[150px] flex items-center justify-center rounded-md border font-semibold',
                                    selectedRows.length > 0
                                        ? 'bg-red-500 text-white border-red-500 hover:bg-white hover:text-red-500'
                                        : 'bg-gray-200 text-gray-500 border-gray-200 cursor-not-allowed',
                                ]"
                                @click="selectedRows.length > 0 ? openDeleteModal() : null"
                            >
                                <svg class="w-[20px] h-[20px] ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                                        <path
                                            d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"
                                        />
                                        <path stroke-linecap="round" d="M6 10V8a6 6 0 1 1 12 0v2" />
                                    </g>
                                </svg>
                                <p>Hapus</p>
                            </button>

                            <!-- Modal -->
                            <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                <div class="bg-white rounded-lg p-6 w-[400px] shadow-lg">
                                    <h2 class="text-lg font-semibold mb-4">Konfirmasi Penonaktifan</h2>
                                    <p class="mb-4">Apakah Anda yakin ingin menonaktifkan item yang dipilih?</p>
                                    <div class="flex justify-end space-x-4">
                                        <button class="btn-secondary px-4 py-2" @click="showModal = false">Batal</button>
                                        <button class="btn-primary px-4 py-2" @click="confirmLock">Kunci</button>
                                    </div>
                                </div>
                            </div>
                            <div v-if="showDeleteModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                                <div class="bg-white rounded-lg p-6 w-96 shadow-lg">
                                    <h2 class="text-lg font-bold text-gray-800 mb-4">Konfirmasi Penghapusan</h2>
                                    <p class="text-gray-600 mb-6">Apakah Anda yakin ingin menghapus item yang dipilih?</p>
                                    <div class="flex justify-end space-x-4">
                                        <button @click="cancelDelete" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">Tidak</button>
                                        <button @click="confirmDelete" class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Ya</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full max-w-full border-collapse bg-white text-left text-sm text-gray-700">
                            <thead>
                                <tr>
                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">
                                        <input type="checkbox" @change="toggleSelectAll($event)" />
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">
                                        Kode Otoritas
                                        <button @click="toggleSort('kodeOtoritas')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'kodeOtoritas' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'kodeOtoritas' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">
                                        Nama Otoritas
                                        <button @click="toggleSort('namaOtoritas')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'namaOtoritas' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'namaOtoritas' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">
                                        <div class="flex items-center space-x-2">
                                            Keterangan
                                            <button @click="toggleSort('Keterangan')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'Keterangan' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'Keterangan' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">
                                        Username/NRK
                                        <button @click="toggleSort('username')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'username' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'username' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </th>

                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">Status</th>
                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in paginatedData" :key="index" class="border-b">
                                    <td class="border-b p-4 text-center align-middle">
                                        <input type="checkbox" :value="item" v-model="selectedRows" />
                                    </td>
                                    <td class="border-b p-4 text-center align-middle">{{ item.kodeOtoritas }}</td>
                                    <td class="border-b p-4 text-center align-middle">{{ item.namaOtoritas }}</td>
                                    <td class="border-b p-4 text-center align-middle">{{ item.Keterangan }}</td>
                                    <td class="border-b p-4 text-center align-middle">{{ item.username }}</td>
                                    <td class="border-b p-4 text-center align-middle">
                                        <span
                                            class="text-white w-auto min-w-[80px] h-8 flex items-center justify-center px-3 py-1 rounded-full text-sm whitespace-nowrap"
                                            :class="getStatusColorClass(item.statusAktif)"
                                        >
                                            {{ item.statusAktif }}
                                        </span>
                                    </td>
                                    <td class="border-b p-4 text-center align-middle">
                                        <!-- Container untuk tombol -->
                                        <div class="flex justify-center space-x-4">
                                            <!-- Tombol Edit -->
                                            <button class="h-8 w-8 flex items-center justify-center hover:text-green-700">
                                                <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                                                    <path
                                                        fill="currentColor"
                                                        d="M28 30H6V8h13.22l2-2H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V15l-2 2Z"
                                                        class="clr-i-outline clr-i-outline-path-1"
                                                    />
                                                    <path
                                                        fill="currentColor"
                                                        d="m33.53 5.84l-3.37-3.37a1.61 1.61 0 0 0-2.28 0L14.17 16.26l-1.11 4.81A1.61 1.61 0 0 0 14.63 23a1.7 1.7 0 0 0 .37 0l4.85-1.07L33.53 8.12a1.61 1.61 0 0 0 0-2.28M18.81 20.08l-3.66.81l.85-3.63L26.32 6.87l2.82 2.82ZM30.27 8.56l-2.82-2.82L29 4.16L31.84 7Z"
                                                        class="clr-i-outline clr-i-outline-path-2"
                                                    />
                                                    <path fill="none" d="M0 0h36v36H0z" />
                                                </svg>
                                            </button>
                                            <!-- Tombol Delete -->
                                            <button class="h-8 w-8 flex items-center justify-cente hover:text-red-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5">
                                                    <path
                                                        fill="currentColor"
                                                        d="M5 6H4V5h5V3h6v2h5v1h-1v13.5c0 1.12-.88 2-2 2H7c-1.12 0-2-.88-2-2V6zm9-1V4H9v1h5zM7 19h10V7H7v12z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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

<script lang="ts">
    import { defineComponent, ref, computed, onMounted } from 'vue';
    import Layout from '@/components/layout/Layout.vue';

    interface DataItem {
        kodeOtoritas: string;
        namaOtoritas: string;
        Keterangan: string;
        username: string;
        statusAktif: string;
    }

    export default defineComponent({
        name: 'pengguna',
        components: {
            Layout,
        },
        data() {
            return {
                data: [
                    {
                        kodeOtoritas: 'ijonk',
                        namaOtoritas: 'zain@gmail.com',
                        Keterangan: 'i',
                        username: 'ijonk',
                        statusAktif: 'Aktif',
                    },
                    {
                        kodeOtoritas: 'nda',
                        namaOtoritas: 'nda@gmail.com',
                        Keterangan: 'm',
                        username: 'maman',
                        statusAktif: 'Tidak Aktif',
                    },
                    {
                        kodeOtoritas: 'nana',
                        namaOtoritas: 'nana@gmail.com',
                        Keterangan: 'q',
                        username: 'dwsq',
                        statusAktif: 'Aktif',
                    },
                    {
                        kodeOtoritas: 'mantap',
                        namaOtoritas: 'suryana@gmail.com',
                        Keterangan: 'a',
                        username: 'saas',
                        statusAktif: 'Tidak Aktif',
                    },
                ],
                selectedRows: [] as DataItem[],
                sortColumn: null as keyof DataItem | null,
                sortDirection: 'asc' as 'asc' | 'desc',
                entriesPerPage: 5,
                currentPage: 1,
                searchkodeOtoritas: '',
                searchnamaOtoritas: '',
                searchKeterangan: '',
                showModal: false,
                showDeleteModal: false,
                searchUsername: '',
                selectedStatus: '', // Tambahan untuk filter status
            };
        },

        computed: {
            totalPages() {
                return Math.ceil(this.filteredData.length / this.entriesPerPage);
            },
            filteredData() {
                let sortedData = [
                    ...this.data.filter((item) => {
                        const matcheskodeOtoritas = item.kodeOtoritas.toLowerCase().includes(this.searchkodeOtoritas.toLowerCase());
                        const matchesnamaOtoritas = item.namaOtoritas.toLowerCase().includes(this.searchnamaOtoritas.toLowerCase());
                        const matchesKeterangan = item.Keterangan.toLowerCase().includes(this.searchKeterangan.toLowerCase());
                        const matchesUsername = item.username.toLowerCase().includes(this.searchUsername.toLowerCase());
                        const matchesStatus = this.selectedStatus === '' || item.statusAktif === this.selectedStatus;

                        return matcheskodeOtoritas && matchesnamaOtoritas && matchesKeterangan && matchesUsername && matchesStatus;
                    }),
                ];

                if (this.sortColumn) {
                    sortedData.sort((a, b) => {
                        const aValue = a[this.sortColumn!] as string;
                        const bValue = b[this.sortColumn!] as string;

                        if (this.sortDirection === 'asc') {
                            return aValue.localeCompare(bValue, undefined, { numeric: true, sensitivity: 'base' });
                        } else {
                            return bValue.localeCompare(aValue, undefined, { numeric: true, sensitivity: 'base' });
                        }
                    });
                }

                return sortedData;
            },

            paginatedData() {
                const start = (this.currentPage - 1) * this.entriesPerPage;
                const end = start + this.entriesPerPage;
                return this.filteredData.slice(start, end);
            },
        },

        methods: {
            toggleSelectAll(event: Event) {
                const target = event.target as HTMLInputElement;
                if (target.checked) {
                    // Pilih semua data pada halaman saat ini
                    this.selectedRows = [...this.paginatedData];
                } else {
                    // Hapus semua data yang dipilih
                    this.selectedRows = [];
                }
            },
            deleteSelected() {
                if (this.selectedRows.length === 0) {
                    alert('Tidak ada item yang dipilih!');
                    return;
                }

                if (confirm('Apakah Anda yakin ingin menghapus item yang dipilih?')) {
                    // Filter data asli
                    this.data = this.data.filter((item) => !this.selectedRows.some((selected) => selected.kodeOtoritas === item.kodeOtoritas));

                    // Reset pilihan
                    this.selectedRows = [];
                }
            },
            lockSelectedItems() {
                this.showModal = true;
            },
            confirmLock() {
                this.selectedRows.forEach((item) => {
                    const targetItem = this.data.find((dataItem) => dataItem.kodeOtoritas === item.kodeOtoritas);
                    if (targetItem) {
                        targetItem.statusAktif = 'Tidak Aktif';
                    }
                });
                this.selectedRows = []; // Reset pilihan setelah mengunci
                this.showModal = false; // Tutup modal setelah konfirmasi
            },
            openDeleteModal() {
                if (this.selectedRows.length === 0) {
                    alert('Tidak ada item yang dipilih!');
                    return;
                }
                this.showDeleteModal = true; // Buka modal penghapusan
            },
            confirmDelete() {
                // Filter data asli
                this.data = this.data.filter((item) => !this.selectedRows.some((selected) => selected.kodeOtoritas === item.kodeOtoritas));
                this.selectedRows = []; // Reset pilihan
                this.showDeleteModal = false; // Tutup modal
            },
            cancelDelete() {
                this.showDeleteModal = false; // Tutup modal tanpa menghapus
            },
            isAllSelected() {
                // Periksa apakah semua baris di halaman saat ini dipilih
                return this.paginatedData.every((item) => this.selectedRows.includes(item));
            },
            toggleSort(column: keyof DataItem) {
                if (this.sortColumn === column) {
                    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
                } else {
                    this.sortColumn = column;
                    this.sortDirection = 'asc';
                }
            },
            getStatusColorClass(status: string): string {
                switch (status) {
                    case 'Aktif':
                        return 'bg-green-500';
                    case 'Tidak Aktif':
                        return 'bg-red-500';
                    default:
                        return 'bg-gray-500';
                }
            },
            statusAktifClass(status: string): string {
                return status === 'Tidak Aktif' ? 'bg-red-200 text-red-600' : 'bg-green-200 text-green-600';
            },

            changeEntries() {
                this.currentPage = 1;
            },
            goToFirstPage() {
                this.currentPage = 1;
            },
            goToLastPage() {
                this.currentPage = this.totalPages;
            },
            nextPage() {
                if (this.currentPage < this.totalPages) {
                    this.currentPage++;
                }
            },
            prevPage() {
                if (this.currentPage > 1) {
                    this.currentPage--;
                }
            },
            goToPage(page: number) {
                if (page > 0 && page <= this.totalPages) {
                    this.currentPage = page;
                }
            },
        },
        watch: {
            // Reset selectedRows saat data difilter
            filteredData() {
                this.selectedRows = [];
            },
        },
    });
</script>

<style scoped>
    :table {
        width: 100%; /* Buat tabel memenuhi lebar kontainer */
        border-collapse: collapse; /* Hilangkan jarak antar border */
        word-wrap: break-word; /* Agar teks panjang tidak meluber */
    }

    .input-field {
        @apply w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm;
    }
    .btn-primary {
        @apply bg-[#7EA5EC] border-b p-4 rounded-md;
    }
    .btn-secondary {
        @apply bg-blue-100 text-blue-700 border-b p-4 rounded-md;
    }
    * {
        box-sizing: border-box;
    }
</style>
