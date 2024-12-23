<template>
    <Layout />
    <div class="min-h-screen flex flex-auto">
      <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
        <div class="px-6 py-4 flex-shrink-0">
          <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
            <li><a href="/">Home</a></li>
            <li class="before:content-['/'] before:px-0.5">
              <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Otoritas</a>
            </li>
            <li class="before:content-['/'] before:px-0.5">
              <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Add Otoritas</a>
            </li>
          </ol>
          <h2 class="text-2xl font-bold mb-[10px]">Form Add Otoritas</h2>
          <hr class="border-t-2 border-black" />
        </div>
  
        <main class="p-4 flex-grow mb-4">
          <div class="p-6 rounded-lg">
            <form class="space-y-4">
              <!-- Kode Otoritas -->
              <div class="flex items-center">
                <label for="kodeOtoritas" class="w-48 text-gray-700 dark:text-white-dark">Kode Otoritas</label>
                <input
                  id="kodeOtoritas"
                  type="text"
                  class="border rounded p-2 w-full"
                  v-model="formData.kodeOtoritas"
                />
              </div>
              
              <!-- Nama Otoritas -->
              <div class="flex items-center">
                <label for="namaOtoritas" class="w-48 text-gray-700 dark:text-white-dark">Nama Otoritas</label>
                <input
                  id="namaOtoritas"
                  type="text"
                  class="border rounded p-2 w-full"
                  v-model="formData.namaOtoritas"
                />
              </div>
              
              <!-- Kode Otoritas Group -->
              <div class="flex items-center">
                <label for="kodeOtoritasGroup" class="w-48 text-gray-700 dark:text-white-dark">Kode Otoritas Group</label>
                <select
                  id="kodeOtoritasGroup"
                  class="border rounded p-2 w-full"
                  v-model="formData.kodeOtoritasGroup"
                >
                  <option value="tanpa-grup" disabled>Pilih Kode Otoritas Group</option>
                  <option value="tanpa-otoritas">Tanpa Otoritas Grup</option>
                  <option value="bpkd">BPKD</option>
                  <option value="dinas-pendidikan">Dinas Pendidikan</option>
                  <option value="bank-dki">Bank DKI</option>
                </select>
              </div>
              
              <!-- Keterangan Otoritas -->
              <div class="flex items-center">
                <label for="keteranganOtoritas" class="w-48 text-gray-700 dark:text-white-dark">Keterangan Otoritas</label>
                <textarea
                  id="keteranganOtoritas"
                  class="border rounded p-2 w-full"
                  v-model="formData.keteranganOtoritas"
                  rows="3"
                ></textarea>
              </div>
              
              <!-- Status Otoritas -->
              <div class="flex items-center">
                <label for="statusOtoritas" class="w-48 text-gray-700 dark:text-white-dark">Status Otoritas</label>
                <select
                  id="statusOtoritas"
                  class="border rounded p-2 w-full"
                  v-model="formData.statusOtoritas"
                >
                  <option value="aktif">Aktif</option>
                  <option value="tidak-aktif">Tidak Aktif</option>
                </select>
              </div>
              <div class="flex justify-between mt-6">
                        <button type="button" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">Kembali</button>
                        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Simpan</button>
                    </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from "vue";
  import Layout from "@/components/layout/Layout.vue";
  
  export default defineComponent({
    components: { Layout },
    setup() {
      const formData = reactive({
        kodeOtoritas: "",
        namaOtoritas: "",
        kodeOtoritasGroup: "tanpa-grup",
        keteranganOtoritas: "",
        statusOtoritas: "aktif",
      });
  
      return { formData };
    },
  });
  </script>
  
  <style scoped>
  /* Styling untuk form */
  label {
    padding-right: 1rem;
  }
  
  input,
  select,
  textarea {
    transition: all 0.2s ease-in-out;
  }
  
  input:hover,
  select:hover,
  textarea:hover {
    border-color: #2563eb;
    background-color: #f3f4f6;
  }
  </style>
  