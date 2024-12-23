<template>
  <div>
    <h2 class="text-lg font-bold mb-4">Pernyataan dan Persetujuan Nasabah</h2>
    <div class="space-y-4">
      <p class="text-justify">
        Dengan menandatangani Aplikasi ini, saya/kami menyatakan bahwa:
      </p>
      <ol class="list-decimal pl-6 space-y-2 text-justify">
        <li>
          Data Nasabah Perorangan/Non Perorangan yang diisikan dalam Formulir Pembukaan Rekening ini adalah yang sebenar-benarnya.
        </li>
        <li>
          Menjamin bahwa semua dokumen dan keterangan yang diberikan kepada Bank, baik pada Aplikasi Pembukaan Rekening maupun pada Aplikasi Customer
          Information File (CIF) adalah benar, lengkap, asli, sah dan telah memenuhi seluruh persyaratan yang berlaku.
        </li>
        <li>
          Bank dapat melakukan pemeriksaan atas data yang saya/kami berikan dalam Formulir Pembukaan Rekening ini.
        </li>
        <li>
          Bank telah memberikan penjelasan yang cukup mengenai karakteristik produk/fasilitas/jasa yang akan dimanfaatkan dan telah dimengerti serta
          memahami segala konsekuensi pemanfaatan produk/fasilitas/jasa Bank, termasuk manfaat, risiko dan biaya-biaya yang melekat pada produk/fasilitas/jasa
          Bank tersebut.
        </li>
        <li>
          Telah menerima, membaca, mengerti dan menyetujui ketentuan Umum dan Persyaratan Pembukaan Rekening (terlampir pada lembar tersendiri). Untuk
          itu dengan ini menyatakan tunduk dan terkait dengan ketentuan-ketentuan tersebut, serta ketentuan lain terkait produk/fasilitas/jasa yang
          dipilih yang berlaku di Bank beserta segala bentuk perubahannya yang akan diberitahukan dengan bentuk dan sarana apapun yang ditetapkan Bank.
        </li>
        <li>
          Mengetahui dan menyetujui segala bentuk pernyataan dan/atau dokumen tertulis lainnya dan/atau ketentuan-ketentuan sebagaimana butir 4 dan 5 di atas
          dan formulir-formulir lainnya yang merupakan satu kesatuan yang tidak terpisahkan dengan Formulir Pembukaan Rekening ini.
        </li>
        <li>
          Memberi hak dan wewenang kepada Bank untuk melakukan penolakan transaksi, pembatalan transaksi, pemblokiran dan atau penutupan rekening apabila
          diduga:
          <ul class="list-disc pl-6 space-y-1">
            <li>Tidak memenuhi ketentuan Prinsip Mengenal Nasabah (Know Your Customer).</li>
            <li>Diduga dan/atau patut diduga menggunakan dokumen palsu.</li>
            <li>Menggunakan informasi yang diragukan kebenarannya.</li>
            <li>Memiliki sumber dana transaksi yang diketahui dan/atau patut diduga berasal dari hasil tindak pidana.</li>
            <li>Memenuhi syarat ketentuan pembekuan dan penutupan rekening.</li>
          </ul>
        </li>
        <li>
          Menjaga kerahasiaan Nomor Kode Pribadi (PIN) dan oleh karenanya saya/kami tidak akan meminjamkan kartu ATM dan memberitahukan PIN kepada orang lain
          termasuk petugas Bank.
        </li>
        <li>
          Perjanjian ini telah disesuaikan dengan ketentuan peraturan perundang-undangan termasuk ketentuan peraturan Otoritas Jasa Keuangan.
        </li>
      </ol>
      <div>
        <label class="block font-medium mb-2">Persetujuan</label>
        <div class="flex items-center gap-4">
          <div class="flex items-center">
            <input
              id="persetujuan"
              type="radio"
              value="ya"
              v-model="formData.persetujuan"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label for="persetujuan" class="ml-2 text-gray-700">Saya setuju dengan pernyataan di atas.</label>
          </div>
        </div>
      </div>
    </div>
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
  name: "CustomerAgreement",
  emits: ["completion-change"], // Deklarasi emit untuk event `completion-change`
  setup(_, { emit }) {
    const formData = reactive({
      persetujuan: "",
    });

    const errors = reactive({
      persetujuan: "",
    });

    const validateForm = () => {
      errors.persetujuan = formData.persetujuan
        ? ""
        : "Anda harus memilih salah satu opsi persetujuan.";
    };

    const isFormValid = computed(() => formData.persetujuan === "ya");

    // Watcher untuk memantau perubahan validitas form
    watch(isFormValid, (newStatus) => {
      emit("completion-change", newStatus); // Emit event `completion-change` dengan status validitas
    });

    return {
      formData,
      errors,
      validateForm,
      isFormValid,
    };
  },
});
</script>


<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
</style>
