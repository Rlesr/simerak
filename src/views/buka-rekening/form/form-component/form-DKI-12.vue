<template>
  <div class="p-4">
    <div class="space-y-4 w-full">
      <!-- Jenis Kelamin -->
      <div class="flex flex-col">
        <label for="jenis-kelamin" class="font-medium">
          Jenis Kelamin <span class="text-red-500">*</span>
        </label>
        
        <select
          id="jenis-kelamin"
          v-model="formData.jenisKelamin"
          class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Laki-Laki">Laki-Laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        
      </div>

      <!-- Kewarganegaraan -->
      <div class="flex flex-col">
        <label for="kewarganegaraan" class="font-medium">
          Status Kewarganegaraan <span class="text-red-500">*</span>
        </label>
       
        <select
          id="kewarganegaraan"
          v-model="formData.kewarganegaraan"
          class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="">Pilih Status Kewarganegaraan</option>
          <option value="1">WNA</option>
          <option value="2">WNI</option>
        </select>
      </div>

      <!-- Tempat Lahir -->
      <div class="flex flex-col">
        <label for="tempat-lahir" class="font-medium">
          Tempat Lahir <span class="text-red-500">*</span>
        </label>
          <input
            id="tempat-lahir"
            type="text"
            v-model="formData.tempatLahir"
            placeholder=""
            class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
          />
      </div>

      <!-- Tanggal Lahir -->
      <div class="flex flex-col">
        <label for="tanggal-lahir" class="font-medium">
          Tanggal Lahir <span class="text-red-500">*</span>
        </label>
       
          <input
            id="tanggal-lahir"
            type="text"
            ref="flatpickrTanggalLahir"
            class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Pilih Tanggal Lahir"
          />
      </div>

      <!-- Tanda Pengenal -->
      <div class="flex flex-col">
        <label for="tanda-pengenal" class="font-medium">
          Tanda Pengenal <span class="text-red-500">*</span>
        </label>
        
          <select
            id="tanda-pengenal"
            v-model="formData.tandaPengenal"
            class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Pilih Tanda Pengenal</option>
            <option value="KTP">KTP</option>
            <option value="SIM">SIM</option>
            <option value="Paspor">Paspor</option>
          </select>
        
      </div>

      <!-- Nomor Identitas -->
      <div class="flex flex-col">
        <label for="nomor-identitas" class="font-medium">
          Nomor Identitas <span class="text-red-500">*</span>
        </label>
        
          <input
            id="nomor-identitas"
            type="text"
            v-model="formData.nomorIdentitas"
            class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
          />
        
      </div>

      <!-- Berlaku Sampai -->
      <div class="flex flex-col">
        <label for="berlaku-sampai" class="font-medium">
          Berlaku Sampai <span class="text-red-500">*</span>
        </label>
        
        <!-- Input Berlaku Sampai, hanya tampil jika checkbox Seumur Hidup tidak aktif -->
        <input
          v-if="!formData.seumurHidup"
          id="berlaku-sampai"
          type="text"
          ref="flatpickrBerlakuSampai"
          v-model="formData.berlakuSampai"
          class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
        />
        
        <!-- Checkbox Seumur Hidup -->
        <div class="flex items-center mt-2">
          <input
            id="seumur-hidup"
            type="checkbox"
            v-model="formData.seumurHidup"
            class="mr-2 h-[15px] w-[15px] cursor-pointer focus:outline-none focus:ring focus:ring-blue-200"
          />
          <label for="seumur-hidup" class="cursor-pointer">Seumur Hidup</label>
        </div>
      </div>

      <!-- NPWP -->
      <div class="flex flex-col">
        <label for="npwp" class="font-medium">NPWP <span class="text-red-500">*</span></label>
       
          <input
            id="npwp"
            type="text"
            v-model="formData.npwp"
            class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
          />
        
      </div>

      <!-- Nama Gadis Ibu Kandung -->
      <div class="flex flex-col">
        <label for="nama-ibu-kandung" class="font-medium">
          Nama Gadis Ibu Kandung <span class="text-red-500">*</span>
        </label>
       
          <input
            id="nama-ibu-kandung"
            type="text"
            v-model="formData.namaIbuKandung"
            placeholder=""
            class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
          />
        
      </div>

      <!-- Status Kelengkapan -->
      <div class="text-center mt-4">
        <span :class="isComplete ? 'text-green-500' : 'text-red-500'" class="font-semibold">
          {{ isComplete ? 'Semua data telah terisi.' : 'Harap lengkapi data yang diperlukan.' }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, onMounted, nextTick } from "vue";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export default defineComponent({
  name: "FormNasabah",
  emits: ["completion-change"], // Emit event untuk perubahan kelengkapan form
  setup(_, { emit }) {
    const formData = reactive({
      jenisKelamin: "",
      kewarganegaraan: "",
      tempatLahir: "",
      tanggalLahir: "",
      tandaPengenal: "",
      nomorIdentitas: "",
      berlakuSampai: "",
      seumurHidup: false,
      npwp: "",
      namaIbuKandung: "",
    });

    const isComplete = ref(false);

    const flatpickrTanggalLahir = ref<HTMLInputElement | null>(null);
    const flatpickrBerlakuSampai = ref<HTMLInputElement | null>(null);

    // Fungsi untuk mengecek kelengkapan form
    const checkCompletion = () => {
      isComplete.value =
        !!formData.jenisKelamin &&
        !!formData.kewarganegaraan &&
        !!formData.tempatLahir &&
        !!formData.tandaPengenal &&
        !!formData.nomorIdentitas &&
        (!!formData.berlakuSampai || formData.seumurHidup) &&
        !!formData.npwp &&
        !!formData.namaIbuKandung;

      // Emit perubahan kelengkapan form
      emit("completion-change", isComplete.value);
    };

    // Watcher untuk memantau perubahan formData
    watch(formData, checkCompletion, { deep: true });

    // Inisialisasi Flatpickr saat mounted
    onMounted(() => {
      if (flatpickrTanggalLahir.value) {
        flatpickr(flatpickrTanggalLahir.value, {
          dateFormat: "d/m/Y",
          onChange: (selectedDates) => {
            formData.tanggalLahir = selectedDates[0]?.toISOString() || "";
            checkCompletion(); // Perbarui status kelengkapan
          },
        });
      }

      // Flatpickr untuk Berlaku Sampai hanya jika Seumur Hidup tidak aktif
      if (!formData.seumurHidup && flatpickrBerlakuSampai.value) {
        flatpickr(flatpickrBerlakuSampai.value, {
          dateFormat: "d/m/Y",
          onChange: (selectedDates) => {
            formData.berlakuSampai = selectedDates[0]?.toISOString() || "";
            checkCompletion();
          },
        });
      }
    });

    // Mengatasi perubahan pada checkbox Seumur Hidup
    watch(() => formData.seumurHidup, (newValue) => {
      if (!newValue) {
        nextTick(() => {
          // Inisialisasi ulang flatpickr ketika checkbox dinonaktifkan
          if (flatpickrBerlakuSampai.value) {
            flatpickr(flatpickrBerlakuSampai.value, {
              dateFormat: "d/m/Y",
              onChange: (selectedDates) => {
                formData.berlakuSampai = selectedDates[0]?.toISOString() || "";
                checkCompletion();
              },
            });
          }
        });
      }
    });

    return {
      formData,
      isComplete,
      flatpickrTanggalLahir,
      flatpickrBerlakuSampai,
    };
  },
});
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
