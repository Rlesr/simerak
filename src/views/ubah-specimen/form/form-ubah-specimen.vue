<template>
    <Layout />
    <div class="min-h-screen flex flex-auto">
      <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
        <!-- Breadcrumb dan Header -->
        <div class="px-6 py-4 flex-shrink-0">
          <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
            <li><a href="/">Home</a></li>
            <li class="before:content-['/'] before:px-0.5">
              <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70"> Ubah Specimen</a>
            </li>
            <li class="before:content-['/'] before:px-0.5">
              <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Form Tambah Ubah Specimen</a>
            </li>
          </ol>
          <h2 class="text-2xl font-bold mb-[10px]">Form Tambah Ubah Specimen</h2>
          <hr class="border-t-2 border-black" />
        </div>
  
        <!-- Main Content -->
        <main class="p-2 flex-grow">
          <div class="p-4 rounded-lg">
            <div class="grid grid-cols-6 gap-4 mb-4">
              <!-- Nama SKPD -->
              <label class="col-span-2">Nama SKPD</label>
              <input
                class="col-span-4 bg-gray-200 rounded px-4 py-2"
                type="text"
                readonly
                :value="namaSkpd"
              />
  
              <!-- Alasan Perubahan -->
              <label class="col-span-2">Alasan Perubahan</label>
              <select
                v-model="alasanPerubahan"
                class="col-span-4 border rounded px-4 py-2"
              >
                <option disabled value="">Alasan Perubahan</option>
                <option value="kepala">Perubahan Kepala Sekolah</option>
                <option value="bendahara">Perubahan Bendahara Sekolah</option>
              </select>
  
              <!-- Kepala Sekolah Baru -->
              <template v-if="alasanPerubahan === 'kepala'">
                <label class="col-span-2">Kepala Sekolah Baru</label>
                <input
                  class="col-span-4 border rounded px-4 py-2"
                  type="text"
                  placeholder="Masukkan nama Kepala Sekolah baru"
                  v-model="kepalaSekolahBaru"
                />
              </template>
  
              <!-- Bendahara Baru -->
              <template v-if="alasanPerubahan === 'bendahara'">
                <label class="col-span-2">Bendahara Baru</label>
                <input
                  class="col-span-4 border rounded px-4 py-2"
                  type="text"
                  placeholder="Masukkan nama Bendahara baru"
                  v-model="bendaharaBaru"
                />
              </template>
  
              <!-- Upload Permohonan -->
              <label class="col-span-2">Upload Permohonan</label>
              <div class="col-span-4 flex items-center gap-2">
                <input
                  class="flex-grow bg-gray-200 rounded px-4 py-2"
                  type="text"
                  readonly
                  :value="fileName"
                  placeholder="Belum ada file"
                />
                <button @click="openFileDialog" class="bg-[#7EA5EC] px-4 py-2 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.5em" viewBox="0 0 1664 1600">
                    <path
                        fill="currentColor"
                        d="M1280 1408q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m256 0q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m128-224v320q0 40-28 68t-68 28H96q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68m-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19H704q-26 0-45-19t-19-45V576H384q-42 0-59-40q-17-39 14-69L787 19q18-19 45-19t45 19l448 448q31 30 14 69"
                    />
                </svg>
                </button>
                <input
                  ref="fileInput"
                  type="file"
                  class="hidden"
                  accept=".pdf"
                  @change="handleFileUpload"
                />
              </div>
  
              <!-- Informasi Rekening -->
              <label class="col-span-2">Nomor Rekening</label>
              <div class="col-span-4 flex items-center gap-2">
                <input
                  class="bg-gray-200 rounded px-4 py-2 flex-grow"
                  type="text"
                  readonly
                  :value="selectedRekening.nomor"
                />
                <button
                  @click="toggleModal"
                  class="bg-[#7EA5EC] text-[#054083] rounded p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" d="m20 20l-6-6" />
                      <path d="M15 9.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0Z" />
                    </g>
                  </svg>
                </button>
              </div>
  
              <label class="col-span-2">Nama Rekening</label>
              <input
                class="col-span-4 bg-gray-200 rounded px-4 py-2"
                type="text"
                readonly
                :value="selectedRekening.nama"
              />

              <label class="col-span-2">Alamat</label>
              <input
                class="col-span-4 bg-gray-200 rounded px-4 py-2"
                type="text"
                readonly
                :value="selectedRekening.alamat"
              />
            </div>
  
            <!-- Tombol Simpan -->
            <div class="flex justify-between">
              <button class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                Kembali
              </button>
              <button
                class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                @click="simpanForm"
              >
                Simpan
              </button>
            </div>
          </div>
  
          <!-- Modal -->
          <div v-if="isModalOpen" class="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center ml-[200px] items-center">
            <div class="bg-white rounded shadow-lg w-3/4 p-4">
              <div class="flex justify-between items-center border-b pb-2 mb-4">
                <h3 class="text-lg font-semibold">List Rekening</h3>
                <button @click="toggleModal" class="text-gray-500 hover:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <table class="table-auto w-full border-collapse border border-gray-300">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="border border-gray-300 px-4 py-2">Nama Rekening</th>
                    <th class="border border-gray-300 px-4 py-2">Nomor Rekening</th>
                    <th class="border border-gray-300 px-4 py-2">Alamat</th>
                    <th class="border border-gray-300 px-4 py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(rekening, index) in data" :key="index">
                    <td class="border border-gray-300 px-4 py-2">{{ rekening.nama }}</td>
                    <td class="border border-gray-300 px-4 py-2">{{ rekening.nomor }}</td>
                    <td class="border border-gray-300 px-4 py-2">{{ rekening.alamat }}</td>
                    <td class="border border-gray-300 px-4 py-2 text-center">
                      <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded" @click="selectRekening(rekening)">
                        Pilih
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from "vue";
  import Layout from "@/components/layout/Layout.vue";
  
  export default {
    components: { Layout },
    setup() {
      const namaSkpd = "PKBM Negeri 39 Cakung";
      const alasanPerubahan = ref("");
      const kepalaSekolahBaru = ref("");
      const bendaharaBaru = ref("");
      const fileName = ref("");
      const selectedRekening = ref({
        nama: "",
        nomor: "",
        alamat: "",
      });
      const isModalOpen = ref(false);
  
      const data = [
        { nama: "Rekening A", nomor: "123456", alamat: "Jl. Mawar No.1" },
        { nama: "Rekening B", nomor: "654321", alamat: "Jl. Melati No.2" },
      ];
  
      const fileInput = ref(null);
  
      const toggleModal = () => {
        isModalOpen.value = !isModalOpen.value;
      };
  
      const selectRekening = (rekening) => {
        selectedRekening.value = rekening;
        toggleModal();
      };
  
      const openFileDialog = () => {
        fileInput.value?.click();
      };
  
      const handleFileUpload = (event: Event) => {
        const file = (event.target as HTMLInputElement)?.files?.[0];
        if (file && file.type === "application/pdf") {
          fileName.value = file.name;
        } else {
          alert("Harap unggah file dengan format PDF!");
        }
      };
  
      const simpanForm = () => {
        alert("Form berhasil disimpan!");
      };
  
      return {
        namaSkpd,
        alasanPerubahan,
        kepalaSekolahBaru,
        bendaharaBaru,
        fileName,
        selectedRekening,
        isModalOpen,
        data,
        fileInput,
        toggleModal,
        selectRekening,
        openFileDialog,
        handleFileUpload,
        simpanForm,
      };
    },
  };
  </script>
  