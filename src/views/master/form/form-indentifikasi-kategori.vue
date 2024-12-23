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
              <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Identifikasi Kategori</a>
            </li>
          </ol>
          <h2 class="text-2xl font-bold mb-[10px]">Form Identifikasi Kategori</h2>
          <hr class="border-t-2 border-black" />
        </div>
  
        <main class="p-4 flex-grow mb-4">
          <div class="p-6 rounded-lg">
            <form class="space-y-4">
              <!-- Jenis Kategori -->
              <div class="flex items-center">
                <label for="jenisKategori" class="w-48 text-gray-700 dark:text-white-dark">Jenis Kategori</label>
                <select
                  id="jenisKategori"
                  class="border rounded p-2 w-full"
                  v-model="formData.jenisKategori"
                >
                  <option value="" disabled selected>Jenis Kategori</option>
                  <option value="kategori1">Sekolah</option>
                  <option value="kategori2">Non Sekolah</option>
                </select>
              </div>
  
              <!-- Nama Kategori -->
              <div class="flex items-center">
                <label for="namaKategori" class="w-48 text-gray-700 dark:text-white-dark">Nama Kategori</label>
                <input
                  id="namaKategori"
                  type="text"
                  class="border rounded p-2 w-full"
                  placeholder="Nama Kategori"
                  v-model="formData.namaKategori"
                />
              </div>
  
              <!-- Kode Kategori -->
              <div class="flex items-center">
                <label for="kodeKategori" class="w-48 text-gray-700 dark:text-white-dark">Kode Kategori</label>
                <input
                  id="kodeKategori"
                  type="text"
                  class="border rounded p-2 w-full"
                  placeholder="Kode Kategori"
                  v-model="formData.kodeKategori"
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
        jenisKategori: "",
        namaKategori: "",
        kodeKategori: "",
        keterangan: "",
      });

      const router = useRouter();

            const handleBack = () => {
                router.push('/home/Master/IdentifikasiKategori');
            };

            const handleSave = () => {
                // Logic untuk menyimpan data (jika ada)
                console.log('Data disimpan:', formData);
                router.push('/home/Master/IdentifikasiKategori'); // Navigasi setelah menyimpan
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