<template>
  <div class="p-6 mx-auto ">
    <h2 class="text-lg font-bold mb-4">Formulir Data Kepala dan Bendahara</h2>
    <div class="space-y-6">
      <!-- Nama Kepala -->
      <div class="mb-4">
        <label for="namaKepala" class="block font-medium">Nama Kepala</label>
        <input
          id="namaKepala"
          v-model="formData.namaKepala"
          type="text"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan Nama Kepala"
        />
      </div>

      <!-- Jabatan Kepala -->
      <div class="mb-4">
        <label for="jabatanKepala" class="block font-medium">Jabatan Kepala</label>
        <input
          id="jabatanKepala"
          v-model="formData.jabatanKepala"
          type="text"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan Jabatan Kepala"
        />
      </div>

      <!-- Kelas Kepala -->
      <div class="mb-4">
        <label for="kelasKepala" class="block font-medium">Kelas Kepala</label>
        <select
          id="kelasKepala"
          v-model="formData.kelasKepala"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="" disabled>Pilih Jenis Kelas</option>
          <option value="kelas1">
            A - Tak terbatas tanda tangan sendiri tanpa counter sign
          </option>
          <option value="kelas2">
            B - Umum, tanda tangan berdua dengan counter sign salah seorang
            pemegang hak tanda tangan lainnya
          </option>
        </select>
      </div>

      <!-- Nama Bendahara -->
      <div class="mb-4">
        <label for="namaBendahara" class="block font-medium">Nama Bendahara</label>
        <input
          id="namaBendahara"
          v-model="formData.namaBendahara"
          type="text"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan Nama Bendahara"
        />
        
      </div>

      <!-- Jabatan Bendahara -->
      <div class="mb-4">
        <label for="jabatanBendahara" class="block font-medium">Jabatan Bendahara</label>
        <input
          id="jabatanBendahara"
          v-model="formData.jabatanBendahara"
          type="text"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Masukkan Jabatan Bendahara"
        />
      </div>

      <!-- Kelas Bendahara -->
      <div class="mb-4">
        <label for="kelasBendahara" class="block font-medium">Kelas Bendahara</label>
        <select
          id="kelasBendahara"
          v-model="formData.kelasBendahara"
          class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="" disabled>Pilih Jenis Kelas</option>
          <option value="kelas1">
            A - Tak terbatas tanda tangan sendiri tanpa counter sign
          </option>
          <option value="kelas2">
            B - Umum, tanda tangan berdua dengan counter sign salah seorang
            pemegang hak tanda tangan lainnya
          </option>
        </select>
      </div>
    </div>

    <!-- Status Validasi -->
    <div class="text-center mt-4">
      <span :class="isFormValid ? 'text-green-500' : 'text-red-500'" class="font-semibold">
        {{ isFormValid ? 'Semua data telah terisi.' : 'Harap lengkapi data yang diperlukan.' }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch } from "vue";

export default defineComponent({
  name: "FormRepresentatives",
  emits: ["completion-change"],
  setup(_, { emit }) {
    const formData = reactive({
      namaKepala: "",
      jabatanKepala: "",
      kelasKepala: "",
      namaBendahara: "",
      jabatanBendahara: "",
      kelasBendahara: "",
    });

    const errors = reactive({
      namaKepala: "",
      jabatanKepala: "",
      kelasKepala: "",
      namaBendahara: "",
      jabatanBendahara: "",
      kelasBendahara: "",
    });

    const validateForm = () => {
      errors.namaKepala = formData.namaKepala ? "" : "Nama Kepala harus diisi.";
      errors.jabatanKepala = formData.jabatanKepala ? "" : "Jabatan Kepala harus diisi.";
      errors.kelasKepala = formData.kelasKepala ? "" : "Kelas Kepala harus dipilih.";
      errors.namaBendahara = formData.namaBendahara ? "" : "Nama Bendahara harus diisi.";
      errors.jabatanBendahara = formData.jabatanBendahara ? "" : "Jabatan Bendahara harus diisi.";
      errors.kelasBendahara = formData.kelasBendahara ? "" : "Kelas Bendahara harus dipilih.";
    };

    const isFormValid = computed(() =>
      Object.values(errors).every((error) => !error)
    );

    watch(
      formData,
      () => {
        validateForm();
        emit("completion-change", isFormValid.value);
      },
      { deep: true }
    );

    return { formData, errors, isFormValid, validateForm };
  },
});
</script>

<style scoped>
.form-input, .form-select {
  @apply border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200;
}
</style>
