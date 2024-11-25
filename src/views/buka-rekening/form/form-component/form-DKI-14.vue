<template>
    <div class="p-6">
      <!-- Data Pekerjaan -->
      <h2 class="text-lg font-bold mb-4">Detail Pekerjaan</h2>
      <div class="mb-4">
        <label for="jenisPekerjaan" class="block font-medium">Jenis Pekerjaan</label>
        <select
          id="jenisPekerjaan"
          v-model="formData.jenisPekerjaan"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="" disabled>Pilih Jenis Pekerjaan</option>
          <option value="Karyawan">Pegawai Swasta</option>
          <option value="Freelancer">TNI/Polri</option>
          <option value="Karyawan">Pegawai Negeri</option>
          <option value="Karyawan">Ibu Rumah Tangga</option>
          <option value="Karyawan">Wiraswasta</option>
          <option value="Karyawan">Pensiunan</option>
          <option value="Karyawan">BUMD</option>
          <option value="Karyawan">BUMN</option>
          <option value="Karyawan">Tidak Kerja</option>

        </select>
      </div>
      <div class="mb-4">
        <label for="statusPekerjaan" class="block font-medium">Status Pekerjaan</label>
        <select
          id="statusPekerjaan"
          v-model="formData.statusPekerjaan"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="" disabled>Pilih Status Pekerjaan</option>
          <option value="1">Tetap</option>
          <option value="2">Kontrak</option>
          <option value="3">Honorer</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="jabatan" class="block font-medium">Jabatan/Golongan</label>
        <input
          id="jabatan"
          type="text"
          v-model="formData.jabatan"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan Jabatan/Golongan"
        />
      </div>
      <div class="flex gap-4 mb-4">
        <div class="flex-1">
          <label for="lamaBekerjaTahun" class="block font-medium">Lama Bekerja (Tahun)</label>
          <input
            id="lamaBekerjaTahun"
            type="number"
            v-model="formData.lamaBekerja.tahun"
            class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Tahun"
          />
        </div>
        <div class="flex-1">
          <label for="lamaBekerjaBulan" class="block font-medium">Lama Bekerja (Bulan)</label>
          <input
            id="lamaBekerjaBulan"
            type="number"
            v-model="formData.lamaBekerja.bulan"
            class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Bulan"
          />
        </div>
      </div>
  
      <!-- Data Perusahaan -->
      <h2 class="text-lg font-bold mb-4">Data Perusahaan/Instansi Tempat Bekerja</h2>
      <div class="mb-4">
        <label for="namaInstansi" class="block font-medium">Nama Instansi</label>
        <input
          id="namaInstansi"
          type="text"
          v-model="formData.namaInstansi"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan Nama Instansi"
        />
      </div>
      <div class="mb-4">
        <label for="alamatInstansi" class="block font-medium">Alamat Instansi</label>
        <input
          id="alamatInstansi"
          type="text"
          v-model="formData.alamatInstansi"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan Alamat Instansi"
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
        <label for="kodePos" class="block font-medium focus:outline-none focus:ring focus:ring-blue-200">Kode Pos</label>
        <input
          id="kodePos"
          type="text"
          v-model="formData.kodePos"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan Kode Pos"
        />
      </div>
      <div class="mb-4">
        <label for="noTelepon" class="block font-medium">No. Telepon</label>
        <input
          id="noTelepon"
          type="text"
          v-model="formData.noTelepon"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan No. Telepon"
        />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from "vue";
  
  export default defineComponent({
    setup() {
      const formData = reactive({
        jenisPekerjaan: "",
        statusPekerjaan: "",
        jabatan: "",
        lamaBekerja: {
          tahun: "",
          bulan: "",
        },
        namaInstansi: "",
        alamatInstansi: "",
        kota: "",
        kodePos: "",
        noTelepon: "",
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
  