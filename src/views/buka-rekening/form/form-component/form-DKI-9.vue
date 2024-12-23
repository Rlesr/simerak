<template>
  <!-- Tujuan Pembukaan Rekening -->
  <div class="mb-4">
    <label for="tujuanRekening" class="block font-medium mb-1">Tujuan Pembukaan Rekening <span class="text-red-500">*</span></label>
    <select
      id="tujuanRekening"
      v-model="formData.tujuanRekening"
      class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
    >
      <option value="" disabled>Tujuan Pembukaan Rekening</option>
      <option value="1">Usaha</option>
      <option value="2">Lainnya</option>
    </select>
  </div>

  <!-- Tujuan Penggunaan Dana Giro -->
  <div class="mb-4">
    <label for="tujuanDanaGiro" class="block font-medium mb-1">Tujuan Penggunaan Dana Giro <span class="text-red-500">*</span></label>
    <select
      id="tujuanDanaGiro"
      v-model="formData.tujuanDanaGiro"
      class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
    >
      <option value="" disabled>Tujuan Penggunaan Dana Giro</option>
      <option value="kebutuhanPribadi">Transaksi Pribadi</option>
      <option value="bisnis">Transaksi Usaha</option>
      <option value="lainnya">Lainnya</option>
    </select>
  </div>

  <!-- Alamat Pengiriman Rekening Koran -->
  <div class="mb-4">
    <label for="alamatRekeningKoran" class="block font-medium mb-1">Alamat Pengiriman Rekening Koran</label>
    <select
      id="alamatRekeningKoran"
      v-model="formData.alamatRekeningKoran"
      class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
    >
      <option value="" disabled>Alamat Pengiriman Rekening Koran</option>
      <option value="email">Email</option>
      <option value="posKantor">Alamat Kantor</option>
      <option value="posTandaPengenal">Alamat Sesuai Tanda Pengenal</option>
      <option value="posTempatTinggal">Alamat Tempat Tinggal Terkini</option>
      <option value="lainnya">Lainnya</option>
    </select>
  </div>

  <!-- Media Informasi Bank -->
  <div class="mb-4">
    <label class="block font-medium">Media Informasi Bank Dengan Nasabah</label>
    <div class="flex items-center">
      <input
        id="mediaInformasi"
        type="checkbox"
        v-model="formData.mediaInformasi"
        class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
      />
      <label for="mediaInformasi" class="ml-2">
        Bersedia menerima informasi mengenai program promosi, produk, dan layanan Bank melalui email, SMS, dan media lainnya
      </label>
    </div>
  </div>

  <!-- Status Kelengkapan -->
  <div class="text-center mt-4">
    <span :class="isComplete ? 'text-green-500' : 'text-red-500'" class="font-semibold">
      {{ isComplete ? 'Semua form telah terisi.' : 'Harap lengkapi semua form.' }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from "vue";

export default defineComponent({
  name: "FormGiroDeposito",
  emits: ["completion-change"], // Deklarasi emits
  setup(_, { emit }) {
    const formData = reactive({
      tujuanRekening: "",
      tujuanDanaGiro: "",
      alamatRekeningKoran: "",
      mediaInformasi: false, // Checkbox defaultnya tidak dicentang
    });

    const isComplete = ref(false);

    const checkCompletion = () => {
      const previousStatus = isComplete.value;
      isComplete.value =
        !!formData.tujuanRekening &&
        !!formData.tujuanDanaGiro &&
        !!formData.alamatRekeningKoran;

      // Emit event jika status kelengkapan berubah
      if (previousStatus !== isComplete.value) {
        emit("completion-change", isComplete.value);
      }
    };

    // Watcher untuk memantau perubahan di formData
    watch(formData, checkCompletion, { deep: true });

    return {
      formData,
      isComplete,
    };
  },
});
</script>

<style scoped>
/* Tambahkan style tambahan di sini jika diperlukan */
</style>
