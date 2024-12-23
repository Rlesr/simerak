<template>
  <div class="p-6">
    <!-- Data Darurat -->
    <div class="mb-4">
      <label for="namaPasangan" class="block font-medium">Nama Suami/Istri</label>
      <input
        id="namaPasangan"
        type="text"
        v-model="formData.namaPasangan"
        class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        placeholder=""
      />
      <span v-if="errors.namaPasangan" class="text-red-500 text-sm">{{ errors.namaPasangan }}</span>
    </div>

    <div class="mb-4">
      <label for="teleponPasangan" class="block font-medium">No. Telepon</label>
      <input
        id="teleponPasangan"
        type="text"
        v-model="formData.teleponPasangan"
        class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        placeholder=""
      />
      <span v-if="errors.teleponPasangan" class="text-red-500 text-sm">{{ errors.teleponPasangan }}</span>
    </div>

    <div class="mb-4">
      <label for="namaPihakLain" class="block font-medium">Nama Pihak Lain</label>
      <input
        id="namaPihakLain"
        type="text"
        v-model="formData.namaPihakLain"
        class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        placeholder=""
      />
      <span v-if="errors.namaPihakLain" class="text-red-500 text-sm">{{ errors.namaPihakLain }}</span>
    </div>

    <div class="mb-4">
      <label for="statusHubungan" class="block font-medium">Status Hubungan</label>
      <input
        id="statusHubungan"
        type="text"
        v-model="formData.statusHubungan"
        class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        placeholder=""
      />
      <span v-if="errors.statusHubungan" class="text-red-500 text-sm">{{ errors.statusHubungan }}</span>
    </div>

    <div class="mb-4">
      <label for="alamat" class="block font-medium">Alamat</label>
      <input
        id="alamat"
        type="text"
        v-model="formData.alamat"
        class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        placeholder=""
      />
    </div>

    <div class="mb-4">
      <label for="kota" class="block font-medium">Kota</label>
      <input
        id="kota"
        type="text"
        v-model="formData.kota"
        class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        placeholder=""
      />
    </div>

    <div class="mb-4">
      <label for="kodePos" class="block font-medium">Kode Pos</label>
      <input
        id="kodePos"
        type="text"
        v-model="formData.kodePos"
        class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        placeholder=""
      />
    </div>

    <div class="mb-4">
      <label for="noHp" class="block font-medium">No. Hp</label>
      <input
        id="noHp"
        type="text"
        v-model="formData.noHp"
        class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        placeholder=""
      />
    </div>
    <div class="text-center mt-4">
            <span :class="isFormComplete ? 'text-green-500' : 'text-red-500'" class="font-semibold">
                {{ isFormComplete ? 'Semua data telah terisi.' : 'Harap lengkapi data yang diperlukan.' }}
            </span>
        </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch } from "vue";

export default defineComponent({
  name: "FormHubungan",
  emits: ["completion-change"], // Emit untuk perubahan status kelengkapan form
  setup(_, { emit }) {
    const formData = reactive({
      namaPasangan: "",
      teleponPasangan: "",
      namaPihakLain: "",
      statusHubungan: "",
      alamat: "",
      kota: "",
      kodePos: "",
      noHp: "",
    });

    const errors = reactive({
      namaPasangan: "",
      teleponPasangan: "",
      namaPihakLain: "",
      statusHubungan: "",
      alamat: "",
      kota: "",
      kodePos: "",
      noHp: "",
    });

    const validateForm = () => {
      errors.namaPasangan = formData.namaPasangan ? "" : "Nama suami/istri harus diisi.";
      errors.teleponPasangan = formData.teleponPasangan ? "" : "No. telepon harus diisi.";
      errors.namaPihakLain = formData.namaPihakLain ? "" : "Nama pihak lain harus diisi.";
      errors.statusHubungan = formData.statusHubungan ? "" : "Status hubungan harus diisi.";
      errors.alamat = formData.alamat ? "" : "Alamat harus diisi.";
      errors.kota = formData.kota ? "" : "Kota harus diisi.";
      errors.kodePos = formData.kodePos ? "" : "Kode Pos harus diisi.";
      errors.noHp = formData.noHp ? "" : "No. Hp harus diisi.";
    };

    const isFormComplete = computed(() => {
        return Object.values(formData).every(value => value) && 
        Object.values(errors).every(error => !error);
    });

    // Watch untuk memantau perubahan kelengkapan form
    watch(isFormComplete, (newStatus) => {
      emit("completion-change", newStatus); // Emit perubahan status kelengkapan form
    });

    return {
      formData,
      errors,
      validateForm,
      isFormComplete,
    };
  },
});
</script>


<style scoped>
/* Tambahkan styling jika diperlukan */
</style>
