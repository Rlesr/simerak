<template>
  <div class="w-full p-4">
    <form class="w-full space-y-4">
      <div class="w-full">
        <label
          for="nominalSetoranTertinggi"
          class="block font-medium"
        >
          Perkiraan Nominal Transaksi Setoran Tertinggi per Bulan (Rp) <span class="text-red-500">*</span>
        </label>
        <select
          id="nominalSetoranTertinggi"
          class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring focus:ring-blue-200 "
          v-model="formData.nominalSetoranTertinggi"
        >
          <option value="" disabled>Perkiraan Nominal Transaksi Setoran Tertinggi per Bulan (Rp)</option>
          <option value="1">&lt; 5 Juta</option>
          <option value="2">5 Juta &lt;= 10 Juta</option>
          <option value="3">10 Juta &lt;= 50 Juta</option>
          <option value="4">50 Juta &lt;= 200 Juta</option>
          <option value="5">200 Juta &lt;= 500 Juta</option>
          <option value="6">&gt; 500 Juta</option>
        </select>
      </div>

      <div class="w-full">
        <label
          for="jumlahSetoran"
          class="block font-medium"
        >
          Perkiraan Jumlah Transaksi Setoran per Bulan <span class="text-red-500">*</span>
        </label>
        <select
          id="jumlahSetoran"
          class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          v-model="formData.jumlahSetoran"
        >
          <option value="" disabled>Perkiraan Jumlah Transaksi Setoran per Bulan</option>
          <option value="1">&lt; 5 kali</option>
          <option value="2">6-10 kali</option>
          <option value="3">11-20 kali</option>
          <option value="4">21-30 kali</option>
          <option value="5">&gt; 30 kali</option>
        </select>
      </div>

      <div class="w-full">
        <label
          for="nominalTarikanTertinggi"
          class="block font-medium"
        >
          Perkiraan Nominal Transaksi Tarikan Tertinggi per Bulan (Rp) <span class="text-red-500">*</span>
        </label>
        <select
          id="nominalTarikanTertinggi"
          class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          v-model="formData.nominalTarikanTertinggi"
        >
          <option value="" disabled>Perkiraan Nominal Transaksi Tarikan Tertinggi per Bulan (Rp)</option>
          <option value="1">&lt; 5 Juta</option>
          <option value="2">5 Juta &lt;= 10 Juta</option>
          <option value="3">10 Juta &lt;= 50 Juta</option>
          <option value="4">50 Juta &lt;= 200 Juta</option>
          <option value="5">200 Juta &lt;= 500 Juta</option>
          <option value="6">&gt; 500 Juta</option>
        </select>
      </div>

      <div class="w-full">
        <label
          for="jumlahTarikan"
          class="block font-medium"
        >
          Perkiraan Jumlah Transaksi Tarikan per Bulan <span class="text-red-500">*</span>
        </label>
        <select
          id="jumlahTarikan"
          class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          v-model="formData.jumlahTarikan"
        >
          <option value="" disabled>Perkiraan Jumlah Transaksi Tarikan per Bulan</option>
          <option value="1">&lt; 5 kali</option>
          <option value="2">6-10 kali</option>
          <option value="3">11-20 kali</option>
          <option value="4">21-30 kali</option>
          <option value="5">&gt; 30 kali</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "FormComponent",
  setup() {
    const formData = reactive({
      nominalSetoranTertinggi: "",
      jumlahSetoran: "",
      nominalTarikanTertinggi: "",
      jumlahTarikan: "",
    });

    return {
      formData,
    };
  },
});
</script>

<style scoped>

</style>
