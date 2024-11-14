    <template>
        <Header class="fixed-header border-1"/>
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
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Buku Rekening</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Buka Rekening</h2>
                <p class="text-sm mb-[10px]">Menu ini digunakan untuk melihat daftar pembukaan rekening Bank DKI</p>
                <hr class="border-t-2 border-black" />
            </div>

            <!-- Search and Table -->
            <div class="mt-8 bg-white shadow rounded-lg p-6">
            <!-- Search Bar and Buttons -->
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-semibold">Daftar SKPD Buka Rekening</h2>
                </div>
                <div>
                <div class="flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Nama SKPD"
                    class="border-[1px] w-[400px] h-[40px] rounded-md  py-2 px-4 text-sm "
                />
                <button class="bg-[#7EA5EC] text-[#054083] px-2 py-3 gap-2 w-[82px] h-[40px] mr-[271px] rounded-md flex items-center">
                    Cari
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,255.99431,255.99431">
                        <g fill="#054083" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path></g></g>
                    </svg>
                </button>

                <div class="flex border ml-[300px] border-[#7EA5EC] h-[40px] rounded-md overflow-hidden">
                    <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm">Copy</button>
                    <button class="bg-[#7EA5EC] text-[#054083] px-4 py-2 text-sm  border-[#7EA5EC]">CSV</button>
                    <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm  border-[#7EA5EC]">PDF</button>
                    <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm  border-[#7EA5EC]">Excel</button>
                    <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm  border-[#7EA5EC]">Print</button>
                </div>
            </div>
            </div>

            <!-- Table -->
            <div class="overflow-auto">
                <table class="w-full border-collapse bg-white text-left text-sm text-gray-700">
                <thead>
                    <tr>
                    <th class="border-b p-4 font-medium text-gray-900">No.</th>
                    <th class="border-b p-4 font-medium text-gray-900">Kode</th>
                    <th class="border-b p-4 font-medium text-gray-900">Nama</th>
                    <th class="border-b p-4 font-medium text-gray-900">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in paginatedData" :key="index" class="hover:bg-gray-50">
                    <td class="border-b p-4">{{ index + 1 + (currentPage - 1) * entriesPerPage }}</td>
                    <td class="border-b p-4">{{ item.kode }}</td>
                    <td class="border-b p-4">{{ item.nama }}</td>
                    <td class="border-b p-4">
                        <button class="p-2">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 15.0479H18" stroke="#151515" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 10.8813H18" stroke="#151515" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 6.71463H18" stroke="#151515" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>

            <!-- Pagination -->
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
                <button @click="goToFirstPage" :disabled="currentPage === 1" class="px-2 py-1 rounded-md text-sm text-gray-500" :class="{ 'text-gray-300': currentPage === 1 }">
                    First
                </button>
                <button @click="prevPage" :disabled="currentPage === 1" class="px-2 py-1 rounded-md text-sm text-gray-500" :class="{ 'text-gray-300': currentPage === 1 }">
                    Previous
                </button>
                <button v-for="page in totalPages" :key="page" @click="goToPage(page)" class="px-3 py-1 rounded-md text-sm" :class="{ 'bg-blue-600 text-white': currentPage === page, 'text-gray-500': currentPage !== page }">
                    {{ page }}
                </button>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="px-2 py-1 rounded-md text-sm text-gray-500" :class="{ 'text-gray-300': currentPage === totalPages }">
                    Next
                </button>
                <button @click="goToLastPage" :disabled="currentPage === totalPages" class="px-2 py-1 rounded-md text-sm text-gray-500" :class="{ 'text-gray-300': currentPage === totalPages }">
                    Last
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </template>

    <script>
    import Header from '@/components/layout/Header.vue';
    import Sidebar from '@/components/layout/Sidebar.vue';
    export default {
        components: {
        Sidebar,
        Header
        },
        data() {
        return {
            entriesPerPage: 5,
            currentPage: 1,
            data: [
            { kode: "P97665469", nama: "Lorem Ipsum" },
            { kode: "P97665470", nama: "Dolor Sit" },
            { kode: "P97665471", nama: "Amet Consectetur" },
            { kode: "P97665472", nama: "Adipiscing Elit" },
            { kode: "P97665473", nama: "Sed Do" },
            { kode: "P97665474", nama: "Eiusmod Tempor" },
            { kode: "P97665475", nama: "Incididunt Ut" },
            { kode: "P97665476", nama: "Labore Et" },
            { kode: "P97665477", nama: "Dolore Magna" },
            { kode: "P97665478", nama: "Aliqua Ut" },
            ],
        };
        },
        computed: {
        totalPages() {
            return Math.ceil(this.data.length / this.entriesPerPage);
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.entriesPerPage;
            const end = start + this.entriesPerPage;
            return this.data.slice(start, end);
        },
        },
        methods: {
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
        goToPage(page) {
            this.currentPage = page;
        },
        },
    };
    </script>

    <style scoped>
    button[disabled] {
        cursor: not-allowed;
        color: #d1d5db;
    }
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
        background-color: #1E3A8A;
    }
    .content-area {
        margin-left: 250px; /* Matches sidebar width */
    }
    </style>
