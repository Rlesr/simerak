<template>
    <div class="p-4">

      <form @submit.prevent="handleSubmit" class="space-y-4 w-full">
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
          <label for="nama-alias" class="font-medium">Nama Alias</label>
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
            Nama Yang Diwakili (apabila ada)
          </label>
          <input
            id="nama-yang-diwakili"
            type="text"
            v-model="formData.namaYangDiwakili"
            class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
  
        <!-- Submit Button -->
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from "vue";
  
  export default defineComponent({
    name: "FormNasabah",
    setup() {
      // Data untuk form
      const formData = reactive({
        namaLengkap: "",
        namaAlias: "",
        namaYangDiwakili: "",
      });
  
      const handleSubmit = () => {
        console.log("Form Data:", formData);
        alert("Data submitted!");
      };
  
      return {
        formData,
        handleSubmit,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Tambahan styling jika diperlukan */
  </style>
  