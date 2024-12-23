<template>
  <div class="bg-white p-4 rounded-md shadow max-h-full max-w-full">
    <table class="min-w-full table-auto">
      <thead>
        <tr>
          <th class="border-b p-4 font-medium text-gray-900">No Rekening</th>
          <th class="border-b p-4 font-medium text-gray-900">Nama Rekening</th>
          <th class="border-b p-4 font-medium text-gray-900">Januari</th>
          <th class="border-b p-4 font-medium text-gray-900">Februari</th>
          <th class="border-b p-4 font-medium text-gray-900">Maret</th>
          <th class="border-b p-4 font-medium text-gray-900">April</th>
          <th class="border-b p-4 font-medium text-gray-900">Mei</th>
          <th class="border-b p-4 font-medium text-gray-900">Juni</th>
          <th class="border-b p-4 font-medium text-gray-900">Juli</th>
          <th class="border-b p-4 font-medium text-gray-900">Agustus</th>
          <th class="border-b p-4 font-medium text-gray-900">September</th>
          <th class="border-b p-4 font-medium text-gray-900">Oktober</th>
          <th class="border-b p-4 font-medium text-gray-900">November</th>
          <th class="border-b p-4 font-medium text-gray-900">Desember</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td class="border-b p-4">{{ item.noRekening }}</td>
          <td class="border-b p-4">{{ item.namaRekening }}</td>
          <td class="border-b p-4">{{ item.januari }}</td>
          <td class="border-b p-4">{{ item.februari }}</td>
          <td class="border-b p-4">{{ item.maret }}</td>
          <td class="border-b p-4">{{ item.april }}</td>
          <td class="border-b p-4">{{ item.mei }}</td>
          <td class="border-b p-4">{{ item.juni }}</td>
          <td class="border-b p-4">{{ item.juli }}</td>
          <td class="border-b p-4">{{ item.agustus }}</td>
          <td class="border-b p-4">{{ item.september }}</td>
          <td class="border-b p-4">{{ item.oktober }}</td>
          <td class="border-b p-4">{{ item.november }}</td>
          <td class="border-b p-4">{{ item.desember }}</td>
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
