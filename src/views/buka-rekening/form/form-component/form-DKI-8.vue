<template>
  <form>
    <!-- Produk -->
    <div class="mb-4">
      <label for="produk" class="block font-medium">Produk yang dipilih <span class="text-red-500">*</span></label>
      <select
        id="produk"
        v-model="formData.produk"
        class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
      >
        <option value="" disabled>Produk</option>
        <option value="1">Tabunganku</option>
        <option value="2">Giro</option>
        <option value="3">Tabungan Monas Pelajar</option>
        <option value="4">Tabungan Simpeda Monas</option>
        <option value="5">Simpanan Pelajar</option>
        <option value="6">Deposito</option>
        <option value="7">Monas Rencana/Pajak</option>
        <option value="8">Tabungan Monas Bisnis</option>
      </select>
    </div>

    <!-- Jenis Valuta -->
    <div class="mb-4">
      <label for="valuta" class="block font-medium">Jenis Valuta <span class="text-red-500">*</span></label>
      <select
        id="valuta"
        v-model="formData.valuta"
        class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
      >
        <option value="" disabled>Jenis Valuta</option>
        <option value="1">IDR</option>
        <option value="2">USD</option>
        <option value="3">EUR</option>
        <option value="4">JPY</option>
        <option value="5">Lainnya</option>
      </select>
    </div>

    <!-- Tujuan Pembukaan Rekening -->
    <div class="mb-4">
      <label for="tujuanRekening" class="block font-medium">Tujuan Pembukaan Rekening <span class="text-red-500">*</span></label>
      <select
        id="tujuanRekening"
        v-model="formData.tujuanRekening"
        class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
      >
        <option value="" disabled>Tujuan Pembukaan Rekening</option>
        <option value="1">Simpanan</option>
        <option value="2">Investasi</option>
        <option value="3">Penerimaan Gaji</option>
        <option value="4">Usaha</option>
        <option value="5">Lainnya</option>
      </select>
    </div>

    <!-- Tujuan Penggunaan Dana -->
    <div class="mb-4">
      <label for="tujuanDana" class="block font-medium">Tujuan Penggunaan Dana <span class="text-red-500">*</span></label>
      <select
        id="tujuanDana"
        v-model="formData.tujuanDana"
        class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
      >
        <option value="" disabled>Tujuan Penggunaan Dana </option>
        <option value="1">Pengeluaran Rutin</option>
        <option value="2">Biaya Pendidikan</option>
        <option value="3">Transaksi Usaha</option>
        <option value="4">Lainnya</option>
      </select>
    </div>

    <!-- Status Kelengkapan -->
    <div class="text-center mt-4">
      <span :class="isComplete ? 'text-green-500' : 'text-red-500'" class="font-semibold">
        {{ isComplete ? 'Semua form telah terisi.' : 'Harap lengkapi semua form.' }}
      </span>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from "vue";

export default defineComponent({
  name: "FormPembukaanRekening",
  emits: ["completion-change"], // Emit untuk perubahan status kelengkapan
  setup(_, { emit }) {
    const formData = reactive({
      produk: "",
      valuta: "",
      tujuanRekening: "",
      tujuanDana: "",
    });

    const isComplete = ref(false);

    const checkCompletion = () => {
      isComplete.value =
        !!formData.produk &&
        !!formData.valuta &&
        !!formData.tujuanRekening &&
        !!formData.tujuanDana;

      // Emit perubahan kelengkapan
      emit("completion-change", isComplete.value);
    };

    // Watcher untuk memeriksa perubahan di formData
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
