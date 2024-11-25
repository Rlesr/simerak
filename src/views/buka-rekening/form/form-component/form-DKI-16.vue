<template>
    
      <form class="space-y-4">
        <!-- Sumber Dana -->
        <div class="mb-4">
          <label for="sumberDana" class="block font-medium">Sumber Dana *</label>
          <select
            id="sumberDana"
            v-model="formData.sumberDana"
            class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="" disabled>Pilih Sumber Dana</option>
            <option value="gaji">Gaji</option>
            <option value="usaha">Usaha</option>
            <option value="investasi">Investasi</option>
            <option value="hibah">Hibah</option>
          </select>
        </div>
  
        <!-- Penghasilan per Bulan -->
        <div class="mb-4">
          <label for="penghasilanPerBulan" class="block font-medium">Penghasilan per Bulan *</label>
          <select
            id="penghasilanPerBulan"
            v-model="formData.penghasilanPerBulan"
            class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="" disabled>Pilih Penghasilan</option>
            <option value="<5jt">&lt; 5 Juta</option>
            <option value="5-10jt">5-10 Juta</option>
            <option value=">10jt">&gt; 10 Juta</option>
          </select>
        </div>
  
        <!-- Penghasilan Lainnya per Bulan -->
        <div class="mb-4">
          <label for="penghasilanLainnya" class="block font-medium">Penghasilan Lainnya per Bulan *</label>
          <select
            id="penghasilanLainnya"
            v-model="formData.penghasilanLainnya"
            class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="" disabled>Pilih Penghasilan Lainnya</option>
            <option value="<5jt">&lt; 5 Juta</option>
            <option value="5-10jt">5-10 Juta</option>
            <option value=">10jt">&gt; 10 Juta</option>
          </select>
        </div>
  
        <!-- Perkiraan Nominal Transaksi Setoran Tertinggi -->
        <div class="mb-4">
          <label for="perkiraanSetoranTertinggi" class="block font-medium">
            Perkiraan Nominal Transaksi Setoran Tertinggi per Bulan (Rp) *
          </label>
          <select
            id="perkiraanSetoranTertinggi"
            v-model="formData.perkiraanSetoranTertinggi"
            class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="" disabled>Pilih Nominal</option>
            <option value="<10jt">&lt; 10 Juta</option>
            <option value="10-20jt">10-20 Juta</option>
            <option value=">20jt">&gt; 20 Juta</option>
          </select>
        </div>
  
        <!-- Perkiraan Jumlah Transaksi Setoran -->
        <div class="mb-4">
          <label for="perkiraanJumlahSetoran" class="block font-medium">Perkiraan Jumlah Transaksi Setoran per Bulan *</label>
          <select
            id="perkiraanJumlahSetoran"
            v-model="formData.perkiraanJumlahSetoran"
            class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="" disabled>Pilih Jumlah Transaksi</option>
            <option value="1-5">1-5 Transaksi</option>
            <option value="6-10">6-10 Transaksi</option>
            <option value=">10">&gt; 10 Transaksi</option>
          </select>
        </div>
  
        <!-- Media Informasi Bank -->
        <div class="mb-4">
          <label class="block font-medium">Media Informasi Bank Dengan Nasabah</label>
          <div class="flex items-center mt-1">
            <input
              id="mediaInformasi"
              type="checkbox"
              v-model="formData.mediaInformasi"
              class="w-4 h-4 focus:outline-none focus:ring focus:ring-blue-200"
            />
            <label for="mediaInformasi" class="ml-2 text-sm text-gray-700">
              Bersedia menerima informasi mengenai program promosi, produk dan layanan Bank melalui email, SMS dan media lainnya
            </label>
          </div>
        </div>
      </form>
    
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "FinancialForm",
    setup() {
      // Form data
      const formData = ref({
        sumberDana: "",
        penghasilanPerBulan: "",
        penghasilanLainnya: "",
        perkiraanSetoranTertinggi: "",
        perkiraanJumlahSetoran: "",
        mediaInformasi: false,
      });
  
      return {
        formData,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  