<template>
    <div class="flex flex-col items-start p-6">
      <!-- Search and Action Buttons -->
      <div class="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search..."
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Cari</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Tambah</button>
      </div>

      <!-- Table -->
      <div class="table-responsive w-full">
        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead class="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th class="py-3 px-6 text-center">No.</th>
              <th class="py-3 px-6 text-left">Nama SKPD</th>
              <th class="py-3 px-6 text-left">Tanggal Buka Rekening</th>
              <th class="py-3 px-6 text-left">Kode SKPD</th>
              <th class="py-3 px-6 text-left">Nama Cabang</th>
              <th class="py-3 px-6 text-center">Status Pengajuan</th>
              <th class="py-3 px-6 text-center">Catatan</th>
              <th class="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm font-light">
            <template v-for="(data, index) in tableData" :key="data.id">
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 text-center">{{ index + 1 }}</td>
                <td class="py-3 px-6 whitespace-nowrap">{{ data.name }}</td>
                <td class="py-3 px-6">{{ data.date }}</td>
                <td class="py-3 px-6">{{ data.code }}</td>
                <td class="py-3 px-6">{{ data.branch }}</td>
                <td class="py-3 px-6 text-center">
                  <span class="bg-orange-200 text-orange-700 px-2 py-1 rounded-full text-xs">
                    {{ data.status }}
                  </span>
                </td>
                <td class="py-3 px-6 text-center">{{ data.note }}</td>
                <td class="py-3 px-6 text-center">
                  <div class="relative inline-block text-left">
                    <button @click="toggleDropdown(data.id)" class="focus:outline-none">
                      <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"></path>
                      </svg>
                    </button>
                    <div
                      v-if="dropdownOpenId === data.id"
                      class="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg"
                    >
                      <ul>
                        <li>
                          <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Download</a>
                        </li>
                        <li>
                          <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Share</a>
                        </li>
                        <li>
                          <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Edit</a>
                        </li>
                        <li>
                          <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">Delete</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="flex justify-between items-center mt-4">
        <p>Show <select class="border rounded px-2 py-1"><option>5</option><option>10</option></select> entries</p>
        <div class="flex space-x-1">
          <button class="px-3 py-1 bg-gray-200 rounded">First</button>
          <button class="px-3 py-1 bg-gray-200 rounded">Previous</button>
          <button class="px-3 py-1 bg-blue-500 text-white rounded">1</button>
          <button class="px-3 py-1 bg-gray-200 rounded">2</button>
          <button class="px-3 py-1 bg-gray-200 rounded">Next</button>
          <button class="px-3 py-1 bg-gray-200 rounded">Last</button>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  const tableData = ref([
    { id: 1, name: 'John Doe', date: '10/08/2020', code: '09876', branch: 'Lorem Ipsum', status: 'Rekening Aktif', note: 'Lorem Ipsum' },
    { id: 2, name: 'Jane Smith', date: '11/09/2020', code: '09876', branch: 'Lorem Ipsum', status: 'Rekening Aktif', note: 'Lorem Ipsum' },
    { id: 3, name: 'David Johnson', date: '01/15/2021', code: '09876', branch: 'Lorem Ipsum', status: 'Rekening Aktif', note: 'Lorem Ipsum' },
    { id: 4, name: 'Sarah Brown', date: '03/12/2021', code: '09876', branch: 'Lorem Ipsum', status: 'Rekening Aktif', note: 'Lorem Ipsum' },
  ]);

  const dropdownOpenId = ref<number | null>(null);

  function toggleDropdown(id: number) {
    dropdownOpenId.value = dropdownOpenId.value === id ? null : id;
  }

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      dropdownOpenId.value = null;
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
  });
  </script>

  <style scoped>
  .table-responsive {
    overflow-x: auto;
  }
  </style>
