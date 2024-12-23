<template>
    <Layout />
    <div class="min-h-screen flex flex-auto">
      <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
        <div class="px-6 py-4 flex-shrink-0">
          <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
            <li><a href="/">Home</a></li>
            <li class="before:content-['/'] before:px-0.5">
              <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">User</a>
            </li>
            <li class="before:content-['/'] before:px-0.5">
              <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Add User</a>
            </li>
          </ol>
          <h2 class="text-2xl font-bold mb-[10px]">Form Add User</h2>
          <hr class="border-t-2 border-black" />
        </div>
  
        <main class="p-4 flex-grow mb-4">
          <div class="p-6 rounded-lg">
            <form class="space-y-4">
              <div class="flex items-center">
                <label for="username" class="w-48 text-gray-700 dark:text-white-dark">Username / NRK</label>
                <input
                  id="username"
                  type="text"
                  class="border rounded p-2 w-full"
                  v-model="formData.username"
                />
              </div>
              <div class="flex items-center">
                <label for="email" class="w-48 text-gray-700 dark:text-white-dark">Email</label>
                <input
                  id="email"
                  type="email"
                  class="border rounded p-2 w-full"
                  v-model="formData.email"
                />
              </div>
              <div class="flex items-center">
                <label for="nip" class="w-48 text-gray-700 dark:text-white-dark">NIP Pengguna</label>
                <input
                  id="nip"
                  type="text"
                  class="border rounded p-2 w-full"
                  v-model="formData.nip"
                />
              </div>
              <div class="flex items-center">
                <label for="nama" class="w-48 text-gray-700 dark:text-white-dark">Nama Pengguna</label>
                <input
                  id="nama"
                  type="text"
                  class="border rounded p-2 w-full"
                  v-model="formData.nama"
                />
              </div>
              <div class="flex items-center">
                <label for="jabatan" class="w-48 text-gray-700 dark:text-white-dark">Jabatan Pengguna</label>
                <input
                  id="jabatan"
                  type="text"
                  class="border rounded p-2 w-full"
                  v-model="formData.jabatan"
                />
              </div>
              <div class="flex items-center">
                <label for="nomorHp" class="w-48 text-gray-700 dark:text-white-dark">Nomor HP</label>
                <input
                  id="nomorHp"
                  type="text"
                  class="border rounded p-2 w-full"
                  v-model="formData.nomorHp"
                />
              </div>
              <div class="flex items-center">
                <label for="statusAktif" class="w-48 text-gray-700 dark:text-white-dark">Status Aktif</label>
                <select
                  id="statusAktif"
                  class="border rounded p-2 w-full"
                  v-model="formData.statusAktif"
                >
                  <option value="aktif">Aktif</option>
                  <option value="tidak aktif">Tidak Aktif</option>
                </select>
              </div>
              <div class="flex items-center">
                <label for="statusTerkunci" class="w-48 text-gray-700 dark:text-white-dark">Status Terkunci</label>
                <select
                  id="statusTerkunci"
                  class="border rounded p-2 w-full"
                  v-model="formData.statusTerkunci"
                >
                  <option value="terkunci">Terkunci</option>
                  <option value="terbuka">Terbuka</option>
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
        username: "",
        email: "",
        nip: "",
        nama: "",
        jabatan: "",
        nomorHp: "",
        statusAktif: "aktif",
        statusTerkunci: "terkunci",
      });
  
      return { formData };
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
  