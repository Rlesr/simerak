<template>
  <div class="p-4">
    <div class="space-y-4 w-full">
      <!-- Nama Lengkap -->
      <div class="flex flex-col">
        <label for="nama-lengkap" class="font-medium">
          Nama Lengkap <span class="text-red-500">*</span>
        </label>
        <input
          id="nama-lengkap"
          type="text"
          v-model="formData.namaLengkap"
          class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <!-- Nama Alias -->
      <div class="flex flex-col">
        <label for="nama-alias" class="font-medium">Nama Alias <span class="text-red-500">*</span></label>
        <input
          id="nama-alias"
          type="text"
          v-model="formData.namaAlias"
          class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <!-- Nama Yang Diwakili -->
      <div class="flex flex-col">
        <label for="nama-yang-diwakili" class="font-medium">
          Nama Yang Diwakili (apabila ada) <span class="text-red-500">*</span>
        </label>
        <input
          id="nama-yang-diwakili"
          type="text"
          v-model="formData.namaYangDiwakili"
          class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
    </div>

    <!-- Status Kelengkapan -->
    <div class="text-center mt-4">
      <span :class="isComplete ? 'text-green-500' : 'text-red-500'" class="font-semibold">
        {{ isComplete ? 'Form lengkap.' : 'Harap lengkapi semua kolom.' }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from "vue";

export default defineComponent({
  name: "FormNasabah",
  emits: ["completion-change"], // Emit untuk status kelengkapan form
  setup(_, { emit }) {
    // Data untuk form
    const formData = reactive({
      namaLengkap: "",
      namaAlias: "",
      namaYangDiwakili: "",
    });

    // Ref untuk status kelengkapan form
    const isComplete = ref(false);

    // Fungsi untuk mengecek kelengkapan form
    const checkCompletion = () => {
      isComplete.value = Object.values(formData).every((value) => value.trim() !== ""); // Semua kolom harus terisi
      emit("completion-change", isComplete.value); // Emit status kelengkapan
    };

    // Watcher untuk memantau perubahan formData
    watch(formData, checkCompletion, { deep: true });

    return {
      formData,
      isComplete,
    };
  },
});
</script>

<style scoped>
/* Tambahan styling jika diperlukan */
</style>
