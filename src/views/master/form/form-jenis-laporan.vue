<template>
    <Layout />
    <div class="min-h-screen flex flex-auto">
      <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
        <div class="px-6 py-4 flex-shrink-0">
          <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
            <li><a href="/">Home</a></li>
            <li class="before:content-['/'] before:px-0.5">
              <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Master</a>
            </li>
            <li class="before:content-['/'] before:px-0.5">
              <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Jenis Laporan</a>
            </li>
          </ol>
          <h2 class="text-2xl font-bold mb-[10px]">Form Jenis Laporan</h2>
          <hr class="border-t-2 border-black" />
        </div>
  
        <main class="p-4 flex-grow mb-4">
          <div class="p-6 rounded-lg">
            <form class="space-y-4">
  
              <!-- Nama Kategori -->
              <div class="flex items-center">
                <label for="namaFormat" class="w-48 text-gray-700 dark:text-white-dark">Nama Format</label>
                <input
                  id="namaFormat"
                  type="text"
                  class="border rounded p-2 w-full"
                  placeholder="Nama Format"
                  v-model="formData.namaFormat"
                />
              </div>
  
              <!-- Kode Kategori -->
              <div class="flex items-center">
                <label for="kodeFormat" class="w-48 text-gray-700 dark:text-white-dark">Kode Format</label>
                <input
                  id="kodeFormat"
                  type="text"
                  class="border rounded p-2 w-full"
                  placeholder="Kode Format"
                  v-model="formData.kodeFormat"
                />
              </div>

              <div class="flex items-center">
                <label for="nomorFormat" class="w-48 text-gray-700 dark:text-white-dark">Nomor Format</label>
                <input
                  id="nomor Format"
                  type="text"
                  class="border rounded p-2 w-full"
                  placeholder="Nomor Format"
                  v-model="formData.nomorFormat"
                />
              </div>
              <!-- Keterangan -->
              <div class="flex items-center">
                <label for="keterangan" class="w-48 text-gray-700 dark:text-white-dark">Keterangan</label>
                <input
                  id="keterangan"
                  type="text"
                  class="border rounded p-2 w-full"
                  placeholder="Keterangan"
                  v-model="formData.keterangan"
                />
              </div>
  
              <div class="flex justify-between mt-6">
                            <button type="button" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700" @click="handleBack">Kembali</button>
                            <button type="button" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" @click="handleSave">Simpan</button>
                        </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from "vue";
  import { useRouter } from 'vue-router';
  import Layout from "@/components/layout/Layout.vue";
  
  export default defineComponent({
    components: { Layout },
    setup() {
      const formData = reactive({
        namaFormat: "",
        kodeFormat: "",
        nomorFormat: "",
        keterangan: "",
      });
      const router = useRouter();

const handleBack = () => {
    router.push('/home/Master/JenisLaporan');
};

const handleSave = () => {
    // Logic untuk menyimpan data (jika ada)
    console.log('Data disimpan:', formData);
    router.push('/home/Master/JenisLaporan'); // Navigasi setelah menyimpan
};

return { formData, handleBack, handleSave };
    },
  });
  </script>
  
  <style scoped>
  label {
    padding-right: 1rem;
  }
  
  select,
  input {
    transition: all 0.2s ease-in-out;
  }
  
  select:hover,
  input:hover {
    border-color: #2563eb;
    background-color: #f3f4f6;
  }
  </style>