<template>
    <Layout />
    <div class="min-h-screen flex flex-auto">
        <!-- Gunakan ml-64 untuk desktop, ml-0 untuk mobile -->
        <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
            <!-- Breadcrumb -->
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="javascript:;">Home</a></li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Deposito</a>
                    </li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">List Deposit</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">List Deposito</h2>
                <p class="text-sm mb-[10px]">Menu ini digunakan untuk melihat list Deposito</p>
                <hr class="border-t-2 border-black" />

                <div class="bg-white p-6 rounded-md shadow-md mx-auto">
                    <h3 class="text-2xl font-bold mb-4">Daftar Deposito Rekening</h3>
                    <div class="space-y-4">
                        <div class="flex flex-col sm:flex-row sm:items-center sm:gap-x-4">
                            <label for="kode-skpd" class="mr-[200px] text-sm font-medium text-gray-700">Kode SKPD</label>
                            <input
                                id="kode-skpd"
                                type="text"
                                class="block w-full sm:w-[400px] px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="P908763"
                            />
                        </div>
                        <div class="flex flex-col sm:flex-row sm:items-center sm:gap-x-4">
                            <label for="nama-skpd" class="mr-[195px] text-sm font-medium text-gray-700">Nama SKPD</label>
                            <input
                                id="nama-skpd"
                                type="text"
                                class="block w-full sm:w-[400px] px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="PJKM (Perguruan Tinggi)"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <!-- Scrollable Content -->
            <div class="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                <!-- Rekening List -->
                <div class="bg-white p-4 rounded-md shadow max-h-full max-w-full">
                    <!-- Filter Section -->
                    <div class="flex justify-between items-center w-full overflow-x-auto">
                        <!-- Left side: Search/Filter Controls -->
                        <div class="flex items-center space-x-4">
                            <input
                                type="text"
                                v-model="searchQuery"
                                class="input-field h-10 w-[200px] border border-gray-300 rounded px-2"
                                placeholder="Cari Nama Bank"
                            />

                            <select class="input-field h-10 w-[200px]">
                                <option disabled selected value="" class="text-gray-500">Nama Bank</option>
                                <option>1</option>
                                <option>a</option>
                                -
                                <option>sad</option>
                                <option>lla</option>
                                <option>sada</option>
                            </select>
                            <div class="flex gap-2">
                                <div class="relative flex items-center border border-gray-300 rounded-md h-10 w-[225px] px-2">
                                    <input
                                        ref="dateRangePicker"
                                        type="text"
                                        class="w-full outline-none text-sm bg-transparent"
                                        placeholder="Pilih rentang tanggal"
                                    />
                                    <!-- Tombol Kalender -->
                                    <button
                                        type="button"
                                        @click="openCalendar"
                                        class="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                        aria-label="Buka Kalender"
                                    >
                                        <i class="fa fa-calendar"></i>
                                    </button>

                                    <!-- Tombol Clear -->
                                    <button
                                        type="button"
                                        @click="clearDateFilter"
                                        class="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                        aria-label="Hapus Tanggal"
                                    >
                                        <i class="fa fa-times border-red-400"
                                            ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,255.99431,255.99431">
                                                <g
                                                    fill="#ff0000"
                                                    fill-rule="nonzero"
                                                    stroke="none"
                                                    stroke-width="1"
                                                    stroke-linecap="butt"
                                                    stroke-linejoin="miter"
                                                    stroke-miterlimit="10"
                                                    stroke-dasharray=""
                                                    stroke-dashoffset="0"
                                                    font-family="none"
                                                    font-weight="none"
                                                    font-size="none"
                                                    text-anchor="none"
                                                    style="mix-blend-mode: normal"
                                                >
                                                    <g transform="scale(8.53333,8.53333)">
                                                        <path
                                                            d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"
                                                        ></path>
                                                    </g>
                                                </g></svg
                                        ></i>
                                    </button>
                                </div>
                            </div>
                            <div class="flex gap-2">
                                <select v-model="selectedStatus" class="border border-gray-300 rounded-md px-2 py-1">
                                    <option disabled value="">Pilih Jenis Deposito</option>
                                    <option
                                        v-for="option in statusOptions"
                                        :key="option.value"
                                        :value="option.value"
                                        class="hover:bg-blue-500 hover:text-white"
                                    >
                                        {{ option.label }}
                                    </option>
                                </select>
                            </div>

                            <button class="btn-primary h-10 w-[200px] flex items-center justify-center text-[#054083]">
                                <p class="text-[#054083] font-semibold">Cari</p>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-[20px] h-[20px] ml-2" viewBox="0,0,255.99431,255.99431">
                                    <g
                                        fill="#054083"
                                        fill-rule="nonzero"
                                        stroke="none"
                                        stroke-width="1"
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        stroke-miterlimit="10"
                                        stroke-dasharray=""
                                        stroke-dashoffset="0"
                                        font-family="none"
                                        font-weight="none"
                                        font-size="none"
                                        text-anchor="none"
                                        style="mix-blend-mode: normal"
                                    >
                                        <g transform="scale(5.12,5.12)">
                                            <path
                                                d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </button>

                            <button class="btn-primary h-10 w-[200px] flex items-center justify-center">
                                <p class="text-[#054083] font-semibold">Tambah</p>
                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px] ml-2" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M12 4V20" stroke="#054083" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>

                        <!-- Right side: Action Buttons with proper spacing -->
                        <div class="flex items-center ml-8">
                            <div class="flex border border-[#7EA5EC] h-[40px] rounded-md overflow-hidden">
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm">Copy</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-4 py-2 text-sm border-[#7EA5EC]">CSV</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">PDF</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">Excel</button>
                                <button class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">Print</button>
                            </div>
                        </div>
                    </div>

                    <!-- Table Section -->
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse bg-white text-left text-sm text-gray-700">
                            <thead>
                                <tr>
                                    <th class="border-b p-4 font-medium text-gray-900">No.</th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Tanggal Buka
                                            <button @click="toggleSort('tanggalBuka')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'tanggalBuka' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'tanggalBuka' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Nama Bank
                                            <button @click="toggleSort('namaBank')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'namaBank' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'namaBank' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Tanggal Deposito
                                            <button @click="toggleSort('tanggalDeposito')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'tanggalDeposito' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'tanggalDeposito' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Bunga
                                            <button @click="toggleSort('bunga')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'bunga' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'bunga' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Tanggal Jatuh Tempo
                                            <button @click="toggleSort('TanggalJatuhTempo')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'TanggalJatuhTempo' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'TanggalJatuhTempo' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900">
                                        <div class="flex items-center space-x-2">
                                            Jenis Deposito
                                            <button @click="toggleSort('jenisDeposito')">
                                                <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                                    <!-- Panah Ascending -->
                                                    <path
                                                        :fill="sortColumn === 'jenisDeposito' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                                    ></path>
                                                    <!-- Panah Descending -->
                                                    <path
                                                        :fill="sortColumn === 'jenisDeposito' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                                        d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </th>
                                    <th class="border-b p-4 font-medium text-gray-900">Jumlah Deposito</th>
                                    <th class="border-b p-4 font-medium text-gray-900">Keterangan</th>
                                    <th class="border-b p-4 font-medium text-gray-900">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in paginatedData" :key="index" class="border-b">
                                    <td class="border-b p-4">{{ (currentPage - 1) * entriesPerPage + index + 1 }}</td>
                                    <td class="border-b p-4">{{ item.tanggalBuka }}</td>
                                    <td class="border-b p-4">{{ item.namaBank }}</td>
                                    <td class="border-b p-4">{{ item.tanggalDeposito }}</td>
                                    <td class="border-b p-4">{{ item.bunga }}</td>
                                    <td class="border-b p-4">{{ item.TanggalJatuhTempo }}</td>
                                    <td class="border-b p-4">{{ item.jenisDeposito }}</td>
                                    <td class="border-b p-4">{{ item.jumlahDeposito }}</td>
                                    <td class="border-b p-4">
                                        <span
                                            class="text-white w-32 h-8 flex items-center justify-center px-3 py-1 rounded-full"
                                            :class="getKeteranganColorClass(item.keterangan)"
                                        >
                                            {{ item.keterangan }}
                                        </span>
                                    </td>

                                    <td class="border-b p-4">
                                        <button class="text-blue-500">⋮</button>
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
    import { defineComponent, ref, onMounted, computed } from 'vue';

    import flatpickr from 'flatpickr';
    import Layout from '@/components/layout/Layout.vue';

    interface DataItem {
        tanggalBuka: string;
        namaBank: string;
        tanggalDeposito: string;
        bunga: string;
        TanggalJatuhTempo: string;
        jenisDeposito: string;
        jumlahDeposito: string;
        keterangan: string;
    }

    export default defineComponent({
        name: 'BukaRekening',
        components: {
            Layout,
        },
        data() {
            return {
                data: [
                    {
                        tanggalBuka: '2024-11-01',
                        namaBank: 'Bank BCD',
                        tanggalDeposito: '2024-11-05',
                        bunga: '5%',
                        TanggalJatuhTempo: '2025-11-05',
                        jenisDeposito: 'Manual',
                        jumlahDeposito: 'Rp 17.000.000',
                        keterangan: 'Sudah Dicairkan',
                    },
                    {
                        tanggalBuka: '2024-12-01',
                        namaBank: 'Bank EFG',
                        tanggalDeposito: '2024-12-05',
                        bunga: '6%',
                        TanggalJatuhTempo: '2025-12-05',
                        jenisDeposito: 'Aro',
                        jumlahDeposito: 'Rp 23.000.000',
                        keterangan: 'Pending',
                    },
                ] as DataItem[],
                sortColumn: null as keyof DataItem | null,
                sortDirection: 'asc' as 'asc' | 'desc',
                entriesPerPage: 5,
                currentPage: 1,
                selectedStatus: '',
                searchQuery: '',
                statusOptions: [
                    // Define the dropdown options here
                    { value: 'all', label: 'All' },
                    { value: 'aro', label: 'Aro' },
                    { value: 'manual', label: 'Manual' },
                ],

                // Tambahan untuk filtering
                filterCriteria: {
                    startDate: '',
                    endDate: '',
                },
            };
        },
        setup() {
            const dateRangePicker = ref(null);
            const calendarInstance = ref<any>(null);

            const openCalendar = () => {
                if (calendarInstance.value) {
                    calendarInstance.value.open();
                }
            };

            const clearDate = () => {
                if (calendarInstance.value) {
                    calendarInstance.value.clear();
                }
            };

            return {
                dateRangePicker,
                openCalendar,
                clearDate,
            };
        },
        computed: {
            // Modifikasi computed properties untuk mendukung filtering
            filteredData() {
                let result = this.data;

                // Filter berdasarkan rentang tanggal
                if (this.filterCriteria.startDate && this.filterCriteria.endDate) {
                    result = result.filter((item) => {
                        const itemDate = new Date(item.tanggalBuka);
                        const startDate = new Date(this.filterCriteria.startDate);
                        const endDate = new Date(this.filterCriteria.endDate);

                        // Set jam ke awal dan akhir hari untuk perbandingan akurat
                        startDate.setHours(0, 0, 0, 0);
                        endDate.setHours(23, 59, 59, 999);

                        return itemDate >= startDate && itemDate <= endDate;
                    });
                }
                if (this.selectedStatus && this.selectedStatus !== 'all') {
                    result = result.filter((item) => item.jenisDeposito.toLowerCase().includes(this.selectedStatus.toLowerCase()));
                }
                if (this.searchQuery) {
                    result = result.filter((item) => item.namaBank.toLowerCase().includes(this.searchQuery.toLowerCase()));
                }

                // Sorting
                if (this.sortColumn) {
                    result.sort((a, b) => {
                        const aValue = a[this.sortColumn!];
                        const bValue = b[this.sortColumn!];

                        if (aValue === bValue) return 0;
                        if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
                        if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
                        return 0;
                    });
                }

                return result;
            },
            sortedData() {
                if (!this.sortColumn) return this.data;

                return [...this.data].sort((a, b) => {
                    const aValue = a[this.sortColumn!];
                    const bValue = b[this.sortColumn!];

                    if (aValue === bValue) {
                        const statusOrder = ['aro', 'manual'];

                        const aStatusIndex = statusOrder.indexOf(a.jenisDeposito.toLowerCase());
                        const bStatusIndex = statusOrder.indexOf(b.jenisDeposito.toLowerCase());

                        if (aStatusIndex === bStatusIndex) return 0;
                        return aStatusIndex < bStatusIndex ? -1 : 1;
                    }

                    return aValue < bValue ? (this.sortDirection === 'asc' ? -1 : 1) : this.sortDirection === 'asc' ? 1 : -1;
                });
            },
            totalPages() {
                return Math.ceil(this.filteredData.length / this.entriesPerPage);
            },
            paginatedData() {
                const start = (this.currentPage - 1) * this.entriesPerPage;
                const end = start + this.entriesPerPage;
                return this.filteredData.slice(start, end);
            },
        },
        methods: {
            // Metode existing tetap sama
            toggleSort(column: keyof DataItem) {
                if (this.sortColumn === column) {
                    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
                } else {
                    this.sortColumn = column;
                    this.sortDirection = 'asc';
                }
            },
            getKeteranganColorClass(Keterangan) {
                switch (Keterangan) {
                    case 'Sudah Dicairkan':
                        return 'bg-green-500 text-white';
                    case 'Pending':
                        return 'bg-blue-500 text-white';
                    default:
                        return 'bg-gray-500 text-white';
                }
            },
            changeEntries() {
                this.currentPage = 1;
            },
            clearStatus() {
                this.selectedStatus = ''; // Clear the status filter
                this.goToFirstPage(); // Optional: go back to the first page
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

            // Tambahan metode untuk date range picker
            setupDateRangePicker() {
                if (this.$refs.dateRangePicker) {
                    flatpickr(this.$refs.dateRangePicker as HTMLElement, {
                        mode: 'range',
                        dateFormat: 'Y-m-d',
                        onChange: (selectedDates, dateStr) => {
                            if (selectedDates.length === 2) {
                                // Format tanggal ke 'YYYY-MM-DD'
                                this.filterCriteria.startDate = this.formatDate(selectedDates[0]);
                                this.filterCriteria.endDate = this.formatDate(selectedDates[1]);

                                // Reset ke halaman pertama saat filtering
                                this.currentPage = 1;
                            }
                        },
                    });
                }
            },
            formatDate(date: Date): string {
                return date.toISOString().split('T')[0];
            },
            clearDateFilter() {
                // Pembersihan dengan validasi tambahan
                try {
                    if (this.$refs.dateRangePicker) {
                        const picker = (this.$refs.dateRangePicker as any)._flatpickr;
                        if (picker) {
                            picker.clear();
                        }
                    }

                    // Reset filter dan state terkait
                    this.filterCriteria = {
                        startDate: '',
                        endDate: '',
                    };

                    // Opsional: Tambahkan notifikasi atau logging
                    this.$nextTick(() => {
                        // Contoh: Tampilkan pesan atau lakukan sesuatu setelah clear
                        console.log('Filter tanggal telah dibersihkan');
                    });

                    // Reset halaman
                    this.currentPage = 1;
                } catch (error) {
                    console.error('Gagal membersihkan filter tanggal:', error);
                    // Tangani error jika diperlukan
                }
            },
        },
        mounted() {
            // Inisialisasi date range picker saat komponen dimuat
            this.setupDateRangePicker();
        },
    });
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
        width: 250px; /* Adjust width as needed */
        background-color: #1e3a8a; /* Adjust color as needed */
    }
    .content-area {
        margin-left: 250px; /* Matches sidebar width */
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
</style>
