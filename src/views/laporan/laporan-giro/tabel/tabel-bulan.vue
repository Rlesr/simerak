<template>
    <div class="bg-white p-4 rounded-md shadow max-h-full max-w-full">
      <table class="min-w-full table-auto">
        <thead>
          <tr>
            <th class="border-b p-4 font-medium text-gray-900">No Rekening</th>
            <th class="border-b p-4 font-medium text-gray-900">Nama Rekening</th>
            <th class="border-b p-4 font-medium text-gray-900">Bank DKI</th>
            <th class="border-b p-4 font-medium text-gray-900">Sistem</th>
            <th class="border-b p-4 font-medium text-gray-900">Selisih</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td class="border-b p-4">{{ item.noRekening }}</td>
            <td class="border-b p-4">{{ item.namaRekening }}</td>
            <td class="border-b p-4">{{ item.bankDKi }}</td>
            <td class="border-b p-4">{{ item.sistem }}</td>
            <td class="border-b p-4">{{ item.selisih }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

  <script lang="ts">
  export default {
    props: {
      data: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
