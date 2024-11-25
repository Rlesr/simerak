<template>
    <div class="p-6">
      <!-- Data Darurat -->

      
      <div class="mb-4">
        <label for="namaPasangan" class="block font-medium">Nama Suami/Istri</label>
        <input
          id="namaPasangan"
          type="text"
          v-model="formData.namaPasangan"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan Nama Suami/Istri"
        />
      </div>
      <div class="mb-4">
        <label for="teleponPasangan" class="block font-medium">No. Telepon</label>
        <input
          id="teleponPasangan"
          type="text"
          v-model="formData.teleponPasangan"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan No. Telepon"
        />
      </div>
      <div class="mb-4">
        <label for="namaPihakLain" class="block font-medium">Nama Pihak Lain</label>
        <input
          id="namaPihakLain"
          type="text"
          v-model="formData.namaPihakLain"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan Nama Pihak Lain"
        />
      </div>
      <div class="mb-4">
        <label for="statusHubungan" class="block font-medium">Status Hubungan</label>
        <input
          id="statusHubungan"
          type="text"
          v-model="formData.statusHubungan"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan Status Hubungan"
        />
      </div>
      <div class="mb-4">
        <label for="alamat" class="block font-medium">Alamat</label>
        <input
          id="alamat"
          type="text"
          v-model="formData.alamat"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan Alamat"
        />
      </div>
      <div class="mb-4">
        <label for="kota" class="block font-medium">Kota</label>
        <input
          id="kota"
          type="text"
          v-model="formData.kota"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan Kota"
        />
      </div>
      <div class="mb-4">
        <label for="kodePos" class="block font-medium">Kode Pos</label>
        <input
          id="kodePos"
          type="text"
          v-model="formData.kodePos"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan Kode Pos"
        />
      </div>
      <div class="mb-4">
        <label for="noHp" class="block font-medium">No. Hp</label>
        <input
          id="noHp"
          type="text"
          v-model="formData.noHp"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan No. Hp"
        />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from "vue";
  
  export default defineComponent({
    setup() {
      const formData = reactive({
        namaPasangan: "",
        teleponPasangan: "",
        namaPihakLain: "",
        statusHubungan: "",
        alamat: "",
        kota: "",
        kodePos: "",
        noHp: "",
      });
  
      return {
        formData,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Tambahkan styling jika diperlukan */
  </style>
  