<template>
  <div class="p-6 mx-auto bg-gray-100">
      <h2 class="text-lg font-bold mb-4">Formulir Data Kepala dan Bendahara</h2>
      <form class="space-y-4">
          <!-- Nama Kepala -->
          <div>
              <label class="block font-semibold">Nama Kepala <span class="text-red-500">*</span></label>
              <input 
                  v-model="formData.namaKepala" 
                  type="text" 
                  class="form-input w-full"
              />
          </div>

          <!-- Jabatan Kepala -->
          <div>
              <label class="block font-semibold">Jabatan Kepala <span class="text-red-500">*</span></label>
              <input 
                  v-model="formData.jabatanKepala" 
                  type="text" 
                  class="form-input w-full"
              />
          </div>

          <!-- Kelas Kepala -->
          <div>
              <label class="block font-semibold">Kelas Kepala <span class="text-red-500">*</span></label>
              <select 
                  v-model="formData.kelasKepala" 
                  class="form-select w-full"
              >
                  <option value="" disabled>Pilih Jenis Kelas</option>
                  <option value="kelas1">A - Tak terbatas tanda tangan sendiri tanpa counter sign</option>
                  <option value="kelas2">B - Umum, tanda tangan berdua dengan counter sign salah seorang pemegang hak tanda tangan lainnya</option>
                  
              </select>
          </div>

          <!-- Nama Bendahara -->
          <div>
              <label class="block font-semibold">Nama Bendahara <span class="text-red-500">*</span></label>
              <input 
                  v-model="formData.namaBendahara" 
                  type="text" 
                  class="form-input w-full"
              />
          </div>

          <!-- Jabatan Bendahara -->
          <div>
              <label class="block font-semibold">Jabatan Bendahara <span class="text-red-500">*</span></label>
              <input 
                  v-model="formData.jabatanBendahara" 
                  type="text" 
                  class="form-input w-full"
              />
          </div>

          <!-- Kelas Bendahara -->
          <div>
              <label class="block font-semibold">Kelas Bendahara <span class="text-red-500">*</span></label>
              <select 
                  v-model="formData.kelasBendahara" 
                  class="form-select w-full"
              >
                  <option value="" disabled>Pilih Jenis Kelas</option>
                  <option value="kelas1">A - Tak terbatas tanda tangan sendiri tanpa counter sign</option>
                  <option value="kelas2">B - Umum, tanda tangan berdua dengan counter sign salah seorang pemegang hak tanda tangan lainnya</option>
              </select>
          </div>
      </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "FormRepresentatives",
  setup() {
      const formData = reactive({
          namaKepala: "",
          jabatanKepala: "",
          kelasKepala: "",
          namaBendahara: "",
          jabatanBendahara: "",
          kelasBendahara: "",
      });

      return { formData };
  },
});
</script>

<style scoped>
  .form-input {
      @apply border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200;
  }

  .form-select {
      @apply border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200;
  }
</style>
