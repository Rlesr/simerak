<template>
    <Layout />
    <div class="min-h-screen flex flex-auto">
      <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
        <div class="px-6 py-4 flex-shrink-0">
          <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
            <li><a href="/">Home</a></li>
            <li class="before:content-['/'] before:px-0.5">
              <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Aplikasi</a>
            </li>
            <li class="before:content-['/'] before:px-0.5">
              <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Edit Aplikasi</a>
            </li>
          </ol>
          <h2 class="text-2xl font-bold mb-[10px]">Form Edit Aplikasi</h2>
          <hr class="border-t-2 border-black" />
        </div>
  
        <main class="p-4 flex-grow mb-4">
          <div class="p-6 rounded-lg">
            <form class="space-y-4">
              <!-- Kode Aplikasi -->
              <div class="flex items-center">
                <label for="kodeAplikasi" class="w-48 text-gray-700 dark:text-white-dark">Kode Aplikasi</label>
                <input
                  id="kodeAplikasi"
                  type="text"
                  class="border rounded p-2 w-full"
                  v-model="formData.kodeAplikasi"
                 
                />
              </div>
  
              <!-- Nama Aplikasi -->
              <div class="flex items-center">
                <label for="namaAplikasi" class="w-48 text-gray-700 dark:text-white-dark">Nama Aplikasi</label>
                <input
                  id="namaAplikasi"
                  type="text"
                  class="border rounded p-2 w-full"
                  v-model="formData.namaAplikasi"
                />
              </div>
  
              <!-- Path / Link -->
              <div class="flex items-center">
                <label for="pathLink" class="w-48 text-gray-700 dark:text-white-dark">Path / Link</label>
                <input
                  id="pathLink"
                  type="text"
                  class="border rounded p-2 w-full"
                  v-model="formData.pathLink"
                />
              </div>
  
              <!-- Keterangan Aplikasi -->
              <div class="flex items-center">
                <label for="keteranganAplikasi" class="w-48 text-gray-700 dark:text-white-dark">Keterangan Aplikasi</label>
                <textarea
                  id="keteranganAplikasi"
                  class="border rounded p-2 w-full"
                  v-model="formData.keteranganAplikasi"
                  rows="3"
                ></textarea>
              </div>
  
              <!-- Status Aktif -->
              <div class="flex items-center">
                <label for="statusAktif" class="w-48 text-gray-700 dark:text-white-dark">Status Aktif</label>
                <select
                  id="statusAktif"
                  class="border rounded p-2 w-full"
                  v-model="formData.statusAktif"
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
      // Data dummy
      const aplikasiDummy = [
        {
          kodeAplikasi: "UM",
          namaAplikasi: "User Management",
          pathLink: "/user-management",
          keteranganAplikasi: "aplikasi untuk kelola pengguna, otoritas, aplikasi dan menu",
          statusAktif: "aktif",
        },
        {
          kodeAplikasi: "FM",
          namaAplikasi: "File Management",
          pathLink: "/file-management",
          keteranganAplikasi: "aplikasi untuk kelola file dan dokumen",
          statusAktif: "tidak-aktif",
        },
      ];
  
      // Reactive form data
      const formData = reactive({
        kodeAplikasi: "",
        namaAplikasi: "",
        pathLink: "",
        keteranganAplikasi: "",
        statusAktif: "",
      });
  
      // Fungsi untuk mengambil data berdasarkan kode aplikasi
      function loadData(kodeAplikasi: string) {
        const aplikasi = aplikasiDummy.find(
          (item) => item.kodeAplikasi === kodeAplikasi
        );
        if (aplikasi) {
          formData.kodeAplikasi = aplikasi.kodeAplikasi;
          formData.namaAplikasi = aplikasi.namaAplikasi;
          formData.pathLink = aplikasi.pathLink;
          formData.keteranganAplikasi = aplikasi.keteranganAplikasi;
          formData.statusAktif = aplikasi.statusAktif;
        }
      }
  
      // Simulasi pemanggilan data dari tabel sebelumnya
      loadData("UM"); // Ganti "UM" dengan kode aplikasi yang dipilih dari tabel
  
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
  