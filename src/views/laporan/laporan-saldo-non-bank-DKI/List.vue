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
                            Laporan
                        </a>
                    </li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="#" class="text-blue-500 dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70"> Daftar</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Daftar Laporan Saldo</h2>
                <p class="text-sm mb-[10px]">Menu ini digunakan untuk melihat daftar Laporan Saldo Non Bank DKi</p>
                <hr class="border-t-2 border-black" />

                <!-- Info Skpd Bank Lain -->
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
                                    v-model="searchNamaRekening"
                                    class="h-full w-full bg-transparent border-none outline-none text-sm placeholder-gray-400 text-gray-700"
                                    placeholder="Nama"
                                />
                            </div>
                            <div class="flex gap-2">
                                <select v-model="selectedBulan" class="relative flex items-center border border-gray-300 rounded-md h-10 w-[150px] px-2">
                                    <option disabled value="">Pilih Bulan</option>
                                    <option value="">All</option>
                                    <option v-for="bulan in bulanOption" :key="bulan.value" :value="bulan.value">
                                        {{ bulan.label }}
                                    </option>
                                </select>
                            </div>
                            <div class="flex gap-2">
                                <select v-model="selectedTahun" class="relative flex items-center border border-gray-300 rounded-md h-10 w-[150px] px-2">
                                    <option disabled value="">Pilih Tahun</option>
                                    <option value="">All</option>
                                    <option v-for="Tahun in TahunOption" :key="Tahun.value" :value="Tahun.value">
                                        {{ Tahun.label }}
                                    </option>
                                </select>
                            </div>
                            <a href="/home/laporan/saldo/add/" class="btn-primary h-8 w-[150px] flex items-center justify-center">
                                <p class="text-[#054083] font-semibold">Tambah</p>
                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px] ml-2" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M12 4V20" stroke="#054083" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </div>

                        <div class="flex items-center ml-8">
                            <div class="flex border border-[#7EA5EC] h-[40px] rounded-md overflow-hidden">
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm">Copy</button>
                                <button @click="exportToCSV" id="csv-btn" class="bg-[#7EA5EC] text-[#054083] px-4 py-2 text-sm border-[#7EA5EC]">CSV</button>
                                <button @click="exportToPDF" id="pdf-btn" class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">PDF</button>
                                <button @click="exportToExcel" id="excel-btn" class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">
                                    Excel
                                </button>
                                <button id="print-btn" class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">Print</button>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table id="myTable" class="w-full max-w-full border-collapse bg-white text-left text-sm text-gray-700">
                            <thead>
                                <tr>
                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">No.</th>
                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">
                                        Bulan
                                        <button @click="toggleSort('bulan')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'bulan' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'bulan' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">
                                        Tahun
                                        <button @click="toggleSort('Tahun')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'Tahun' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'Tahun' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">
                                        <div class="flex items-center space-x-2">
                                            No Rekening
                                            <button @click="toggleSort('noRekening')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'noRekening' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'noRekening' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">
                                        Nama Rekening
                                        <button @click="toggleSort('namaRekening')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'namaRekening' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'namaRekening' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">
                                        Saldo Awal
                                        <button @click="toggleSort('saldoAwal')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'saldoAwal' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'saldoAwal' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">
                                        Saldo Akhir
                                        <button @click="toggleSort('saldoAkhir')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'saldoAkhir' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'saldoAkhir' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </th>

                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in paginatedData" :key="index" class="border-b">
                                    <td class="border-b p-4 text-center align-middle">{{ (currentPage - 1) * entriesPerPage + index + 1 }}</td>
                                    <td class="border-b p-4 text-center align-middle">{{ item.bulan }}</td>
                                    <td class="border-b p-4 text-center align-middle">{{ item.Tahun }}</td>
                                    <td class="border-b p-4 text-center align-middle">{{ item.noRekening }}</td>
                                    <td class="border-b p-4 text-center align-middle">{{ item.namaRekening }}</td>
                                    <td class="border-b p-4 text-center align-middle">{{ formatRupiah(item.saldoAwal) }}</td>
                                    <td class="border-b p-4 text-center align-middle">{{ formatRupiah(item.saldoAkhir) }}</td>

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
                                            <!-- Button Detail -->
                                            <button class="h-8 w-8 flex items-center justify-center hover:text-green-700">
                                                <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7zm-4 6h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"
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
    import * as XLSX from 'xlsx';
    import jsPDF from 'jspdf';
    import 'jspdf-autotable';
    import { saveAs } from 'file-saver';
    import Papa from 'papaparse';

    interface DataItem {
        bulan: string;
        Tahun: number;
        noRekening: string;
        namaRekening: string;
        saldoAwal: number;
        saldoAkhir: number;
    }

    export default defineComponent({
        name: 'laporanSaldoNonDKI',
        components: {
            Layout,
        },
        data() {
            return {
                data: [
                    {
                        bulan: 'Januari',
                        Tahun: 2024,
                        noRekening: '123456789',
                        namaRekening: 'Rendra Ramadhan',
                        saldoAwal: 1000000,
                        saldoAkhir: 1200000,
                    },
                    {
                        bulan: 'Februari',
                        Tahun: 2023,
                        noRekening: '987654321',
                        namaRekening: 'Andi Santoso',
                        saldoAwal: 2000000,
                        saldoAkhir: 1800000,
                    },
                    {
                        bulan: 'Maret',
                        Tahun: 2020,
                        noRekening: '135792468',
                        namaRekening: 'Siti Aminah',
                        saldoAwal: 1500000,
                        saldoAkhir: 1700000,
                    },
                    {
                        bulan: 'April',
                        Tahun: 2021,
                        noRekening: '246813579',
                        namaRekening: 'Budi Setiawan',
                        saldoAwal: 3000000,
                        saldoAkhir: 3200000,
                    },
                    {
                        bulan: 'Mei',
                        Tahun: 2022,
                        noRekening: '112233445',
                        namaRekening: 'Citra Lestari',
                        saldoAwal: 500000,
                        saldoAkhir: 700000,
                    },
                    {
                        bulan: 'Juni',
                        Tahun: 2024,
                        noRekening: '556677889',
                        namaRekening: 'Dedi Saputra',
                        saldoAwal: 2500000,
                        saldoAkhir: 2300000,
                    },
                ] as DataItem[],
                sortColumn: null as keyof DataItem | null,
                sortDirection: 'asc' as 'asc' | 'desc',
                entriesPerPage: 5,
                currentPage: 1,
                selectedBulan: '',
                selectedTahun: '',
                searchNamaRekening: '',
                bulanOption: [
                    // Define the dropdown options here
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
                    // Define the dropdown options here
                    { value: 2020, label: 2020 },
                    { value: 2021, label: 2021 },
                    { value: 2022, label: 2022 },
                    { value: 2023, label: 2023 },
                    { value: 2024, label: 2024 },
                ],
            };
        },

        computed: {
            totalPages() {
                return Math.ceil(this.filteredData.length / this.entriesPerPage);
            },
            filteredData() {
                let filtered = this.data.filter((item) => {
                    const matchesNamaRekening = item.namaRekening.toLowerCase().includes(this.searchNamaRekening.toLowerCase());
                    const matchesBulan = this.selectedBulan ? item.bulan?.toLowerCase() === this.selectedBulan.toLowerCase() : true;
                    const matchesTahun = this.selectedTahun ? String(item.Tahun).toLowerCase() === String(this.selectedTahun).toLowerCase() : true;
                    return matchesNamaRekening && matchesBulan && matchesTahun;
                });

                // Sorting logic
                if (this.sortColumn) {
                    filtered = filtered.sort((a, b) => {
                        const aValue = a[this.sortColumn] || '';
                        const bValue = b[this.sortColumn] || '';

                        if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
                        if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
                        return 0;
                    });
                }

                return filtered;
            },

            paginatedData() {
                const start = (this.currentPage - 1) * this.entriesPerPage;
                const end = start + this.entriesPerPage;
                return this.filteredData.slice(start, end);
            },
        },

        methods: {
            exportToCSV() {
                const csv = Papa.unparse(this.data);
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                saveAs(blob, 'laporan_saldo_non_dki.csv');
            },

            // Fungsi untuk ekspor ke Excel
            exportToExcel() {
                const ws = XLSX.utils.json_to_sheet(this.data);
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, 'Data');
                const excelFile = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
                const blob = new Blob([excelFile], { type: 'application/octet-stream' });
                saveAs(blob, 'laporan_saldo_non_dki.xlsx');
            },
            exportToPDF() {
                const doc = new jsPDF();

                // Prepare the table headers and data body dynamically
                const headers = [['Bulan', 'Tahun', 'No Rekening', 'Nama Rekening', 'Saldo Awal', 'Saldo Akhir']];

                // Map the data to the format that autoTable expects
                const body = this.data.map((item) => [item.bulan, item.Tahun, item.noRekening, item.namaRekening, item.saldoAwal, item.saldoAkhir]);

                // Generate the table
                doc.autoTable({
                    head: headers,
                    body: body,
                });

                // Save the PDF
                doc.save('laporan.pdf');
            },

            // Fungsi format Rupiah (seperti sebelumnya)
            formatRupiah(amount: number): string {
                return new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                }).format(amount);
            },
            toggleSort(column: keyof DataItem) {
                if (this.sortColumn === column) {
                    // Toggle antara 'asc' dan 'desc'
                    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
                } else {
                    // Tetapkan kolom baru untuk pengurutan
                    this.sortColumn = column;
                    this.sortDirection = 'asc';
                }

                // Lakukan pengurutan
                const direction = this.sortDirection === 'asc' ? 1 : -1;
                this.data.sort((a, b) => {
                    if (a[column] < b[column]) return -1 * direction;
                    if (a[column] > b[column]) return 1 * direction;
                    return 0;
                });
            },
            formatRupiah(amount: number): string {
                return new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                }).format(amount);
            },
            clearBulan() {
                this.selectedBulan = ''; // Reset filter bulan
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
