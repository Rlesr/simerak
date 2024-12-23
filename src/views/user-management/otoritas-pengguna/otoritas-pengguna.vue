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
                        <a href="#" class="text-blue-500 dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70"> Otoritas Pengguna</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Daftar Otoritas Pengguna</h2>
                <p class="text-sm mb-[10px]">Menu ini digunakan untuk melihat daftar Otoritas Pengguna</p>
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
                                    v-model="namaPengguna"
                                    class="h-full w-full bg-transparent border-none outline-none text-sm placeholder-gray-400 text-gray-700"
                                    placeholder="Nama Pengguna"
                                />
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="relative flex items-center border border-gray-300 rounded-md h-10 w-[150px] px-2">
                                    <input
                                        type="text"
                                        v-model="searchOtoritas"
                                        class="h-full w-full bg-transparent border-none outline-none text-sm placeholder-gray-400 text-gray-700"
                                        placeholder="Otoritas"
                                    />
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="relative flex items-center border border-gray-300 rounded-md h-10 w-[150px] px-2">
                                    <input
                                        type="text"
                                        v-model="searchMenu"
                                        class="h-full w-full bg-transparent border-none outline-none text-sm placeholder-gray-400 text-gray-700"
                                        placeholder="Menu"
                                    />
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
                                        Nama Pengguna
                                        <button @click="toggleSort('namaPengguna')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'namaPengguna' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'namaPengguna' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">
                                        List Otoritas Terpasang
                                        <button @click="toggleSort('listOtoritasTerpasang')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'listOtoritasTerpasang' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'listOtoritasTerpasang' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900 text-center align-middle">
                                        List Menu Terpasang
                                        <button @click="toggleSort('listMenuTerpasang')">
                                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Panah Ascending -->
                                                <path
                                                    :fill="sortColumn === 'listMenuTerpasang' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                ></path>
                                                <!-- Panah Descending -->
                                                <path
                                                    :fill="sortColumn === 'listMenuTerpasang' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in paginatedData" :key="index" class="border-b">
                                    <td class="border-b p-4 text-center align-middle">
                                        <input type="checkbox" :value="item" v-model="selectedRows" />
                                    </td>
                                    <td class="border-b p-4 text-center align-middle">{{ item.namaPengguna }}</td>
                                    <td class="border-b p-4 text-center align-middle">
                                        <!-- Loop untuk listMenuTerpasang -->
                                        <ul>
                                            <li v-for="otoritas in item.listOtoritasTerpasang.split(',')" :key="otoritas">-{{ otoritas }}</li>
                                        </ul>
                                    </td>
                                    <td class="border-b p-4 text-center align-middle">
                                        <!-- Loop untuk listMenuTerpasang -->
                                        <ul>
                                            <li v-for="menu in item.listMenuTerpasang.split(',')" :key="menu">-{{ menu }}</li>
                                        </ul>
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

<script>
    export default {
        data() {
            return {
                // Data utama
                data: [
                    {
                        namaPengguna: 'John Doe',
                        listOtoritasTerpasang: 'Admin,kepala,bendahara,yang lain',
                        listMenuTerpasang: 'Dashboard,Settings,Reports',
                    },
                    {
                        namaPengguna: 'Zain Ijonk',
                        listOtoritasTerpasang: 'Admin,kepala,bendahara,yang lain',
                        listMenuTerpasang: 'Dashboard,Settings,Reports',
                    },
                ],

                // Filter inputs
                namaPengguna: '',
                searchOtoritas: '',
                searchMenu: '',

                // Pagination
                currentPage: 1,
                entriesPerPage: 5,

                // Sorting
                sortColumn: '',
                sortDirection: '',

                // Selected rows
                selectedRows: [],
            };
        },
        computed: {
            filteredData() {
                // Filter data berdasarkan input pencarian
                return this.data.filter((item) => {
                    return (
                        item.namaPengguna.toLowerCase().includes(this.namaPengguna.toLowerCase()) &&
                        item.listOtoritasTerpasang.toLowerCase().includes(this.searchOtoritas.toLowerCase()) &&
                        item.listMenuTerpasang.toLowerCase().includes(this.searchMenu.toLowerCase())
                    );
                });
            },
            totalPages() {
                // Hitung total halaman
                return Math.ceil(this.filteredData.length / this.entriesPerPage);
            },
            paginatedData() {
                // Ambil data sesuai dengan halaman saat ini
                const start = (this.currentPage - 1) * this.entriesPerPage;
                const end = start + this.entriesPerPage;
                return this.filteredData.slice(start, end);
            },
        },
        methods: {
            // Sorting data
            toggleSort(column) {
                if (this.sortColumn === column) {
                    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
                } else {
                    this.sortColumn = column;
                    this.sortDirection = 'asc';
                }

                this.data.sort((a, b) => {
                    const valA = a[column].toLowerCase();
                    const valB = b[column].toLowerCase();

                    if (this.sortDirection === 'asc') {
                        return valA > valB ? 1 : -1;
                    } else {
                        return valA < valB ? 1 : -1;
                    }
                });
            },

            // Pagination
            goToPage(page) {
                if (page >= 1 && page <= this.totalPages) {
                    this.currentPage = page;
                }
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
            goToFirstPage() {
                this.currentPage = 1;
            },
            goToLastPage() {
                this.currentPage = this.totalPages;
            },
            changeEntries() {
                this.currentPage = 1;
            },

            // Checkbox actions
            toggleSelectAll(event) {
                if (event.target.checked) {
                    this.selectedRows = [...this.paginatedData];
                } else {
                    this.selectedRows = [];
                }
            },
        },
    };
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
