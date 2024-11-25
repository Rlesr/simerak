<template>
  <div class="p-4">
    <h1 class="text-lg font-bold mb-4">Data Alamat Tempat Tinggal</h1>
    <form @submit.prevent="handleSubmit" class="space-y-4 w-full">
      <!-- Radio Buttons -->
      <div class="flex flex-col">
        <label class="font-medium mb-2">Pilih Opsi Alamat</label>
        <div class="flex items-center">
          <input
            type="radio"
            id="alamat-sesuai"
            value="sesuai"
            v-model="formData.tipeAlamat"
            class="mr-2"
          />
          <label for="alamat-sesuai">
            Alamat sesuai tanda pengenal (copy tanda pengenal terlampir)
          </label>
        </div>
        <div class="flex items-center mt-2">
          <input
            type="radio"
            id="alamat-berbeda"
            value="berbeda"
            v-model="formData.tipeAlamat"
            class="mr-2"
          />
          <label for="alamat-berbeda">
            Alamat Tempat Tinggal Saat Ini (hanya diisi apabila berbeda dengan tanda pengenal)
          </label>
        </div>
      </div>

      <!-- RT/RW -->
      <div class="flex flex-col">
        <label for="rt-rw" class="font-medium">
          RT/RW <span class="text-red-500">*</span>
        </label>
        <div class="flex space-x-2">
          <input
            id="rt"
            type="text"
            v-model="formData.rt"
            placeholder="RT"
            class="border rounded p-2 w-full"
          />
          <input
            id="rw"
            type="text"
            v-model="formData.rw"
            placeholder="RW"
            class="border rounded p-2 w-full"
          />
        </div>
      </div>

      <!-- Provinsi -->
      <div class="flex flex-col">
        <label for="provinsi" class="font-medium">
          Provinsi <span class="text-red-500">*</span>
        </label>
        <select
          id="provinsi"
          v-model="formData.provinsi"
          @change="fetchKota"
          class="border rounded p-2 w-full"
        >
          <option value="">Pilih Provinsi</option>
          <option v-for="prov in provinsiList" :key="prov.id" :value="prov.id">
            {{ prov.name }}
          </option>
        </select>
      </div>

      <!-- Kota/Kabupaten -->
      <div class="flex flex-col">
        <label for="kota" class="font-medium">
          Kota/Kabupaten <span class="text-red-500">*</span>
        </label>
        <select
          id="kota"
          v-model="formData.kota"
          @change="fetchKecamatan"
          :disabled="!formData.provinsi"
          class="border rounded p-2 w-full"
        >
          <option value="">Pilih Kota/Kabupaten</option>
          <option
            v-for="kota in kotaList"
            :key="kota.id"
            :value="kota.id"
          >
            {{ kota.name }}
          </option>
        </select>
      </div>

      <!-- Kecamatan -->
      <div class="flex flex-col">
        <label for="kecamatan" class="font-medium">
          Kecamatan <span class="text-red-500">*</span>
        </label>
        <select
          id="kecamatan"
          v-model="formData.kecamatan"
          @change="fetchKelurahan"
          :disabled="!formData.kota"
          class="border rounded p-2 w-full"
        >
          <option value="">Pilih Kecamatan</option>
          <option
            v-for="kecamatan in kecamatanList"
            :key="kecamatan.id"
            :value="kecamatan.id"
          >
            {{ kecamatan.name }}
          </option>
        </select>
      </div>

      <!-- Kelurahan -->
      <div class="flex flex-col">
        <label for="kelurahan" class="font-medium">
          Kelurahan <span class="text-red-500">*</span>
        </label>
        <select
          id="kelurahan"
          v-model="formData.kelurahan"
          :disabled="!formData.kecamatan"
          class="border rounded p-2 w-full"
        >
          <option value="">Pilih Kelurahan</option>
          <option
            v-for="kelurahan in kelurahanList"
            :key="kelurahan.id"
            :value="kelurahan.id"
          >
            {{ kelurahan.name }}
          </option>
        </select>
      </div>

      <!-- Kode Pos -->
      <div class="flex flex-col">
        <label for="kode-pos" class="font-medium">
          Kode Pos
        </label>
        <input
          id="kode-pos"
          type="text"
          v-model="formData.kodePos"
          placeholder="Masukkan Kode Pos"
          class="border rounded p-2 w-full"
        />
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

interface Option {
  id: string | number;
  name: string;
}

export default defineComponent({
  name: "FormAlamat",
  setup() {
    const formData = reactive({
      tipeAlamat: "",
      rt: "",
      rw: "",
      provinsi: "",
      kota: "",
      kecamatan: "",
      kelurahan: "",
      kodePos: "",
    });

    // Options for dropdowns
    const provinsiList = ref<Option[]>([
      { id: 1, name: "SUMATERA UTARA" },
      { id: 2, name: "JAWA BARAT" },
    ]);
    const kotaList = ref<Option[]>([]);
    const kecamatanList = ref<Option[]>([]);
    const kelurahanList = ref<Option[]>([]);

    // Fetch kota based on provinsi
    const fetchKota = () => {
      formData.kota = "";
      formData.kecamatan = "";
      formData.kelurahan = "";
      kecamatanList.value = [];
      kelurahanList.value = [];
      if (formData.provinsi === "1") {
        kotaList.value = [
          { id: 101, name: "KABUPATEN MANDAILING NATAL" },
          { id: 102, name: "KOTA MEDAN" },
        ];
      } else if (formData.provinsi === "2") {
        kotaList.value = [
          { id: 201, name: "KOTA BANDUNG" },
          { id: 202, name: "KOTA BEKASI" },
        ];
      }
    };

    // Fetch kecamatan based on kota
    const fetchKecamatan = () => {
      formData.kecamatan = "";
      formData.kelurahan = "";
      kelurahanList.value = [];
      if (formData.kota === "101") {
        kecamatanList.value = [
          { id: 1001, name: "TAMBANGAN" },
          { id: 1002, name: "PANYABUNGAN" },
        ];
      } else if (formData.kota === "102") {
        kecamatanList.value = [
          { id: 2001, name: "MEDAN SELAYANG" },
          { id: 2002, name: "MEDAN TIMUR" },
        ];
      }
    };

    // Fetch kelurahan based on kecamatan
    const fetchKelurahan = () => {
      formData.kelurahan = "";
      if (formData.kecamatan === "1001") {
        kelurahanList.value = [
          { id: 10001, name: "KELURAHAN A" },
          { id: 10002, name: "KELURAHAN B" },
        ];
      }
    };

    const handleSubmit = () => {
      console.log("Submitted Data:", formData);
    };

    return {
      formData,
      provinsiList,
      kotaList,
      kecamatanList,
      kelurahanList,
      fetchKota,
      fetchKecamatan,
      fetchKelurahan,
      handleSubmit,
    };
  },
});
</script>

