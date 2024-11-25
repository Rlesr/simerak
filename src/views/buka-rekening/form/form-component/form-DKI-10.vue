<template>

      <div class="font-medium space-y-2 mb-6">
        <p>Dengan menandatangani Aplikasi ini, saya/kami menyatakan bahwa:</p>
        <ol class="list-decimal pl-6 space-y-2">
          <li>Data Nasabah Perorangan/Non Perorangan yang diisikan dalam Formulir Pembukaan Rekening ini adalah yang sebenar-benarnya.</li>
          <li>Menjamin bahwa semua dokumen dan keterangan yang diberikan kepada Bank, baik pada Aplikasi Pembukaan Rekening maupun pada Aplikasi Customer Information File (CIF) adalah benar, lengkap, asli, sah dan telah memenuhi seluruh persyaratan yang berlaku, baik pada Aplikasi Pembukaan Rekening maupun pada Informasi Data Nasabah.</li>
          <li>Bank dapat melakukan pemeriksaan terhadap kebenaran data yang saya/kami berikan dalam Formulir Pembukaan Rekening ini.</li>
          <li>
            Bank telah memberikan penjelasan yang cukup mengenai karakteristik produk/fasilitas/jasa Bank yang akan dimengerti serta memahami segala konsekuensi pemanfaatan produk/fasilitas/jasa Bank,
            termasuk manfaat, risiko dan biaya-biaya yang melekat pada produk/fasilitas/jasa Bank tersebut.
          </li>
          <li>
            Telah menerima, membaca, mengerti dan menyetujui ketentuan Umum dan Persyaratan Pembukaan Rekening (terlampir pada lembar tersendiri). Untuk itu dengan ini menyatakan tunduk dan terikat dengan ketentuan-ketentuan tersebut,
            serta ketentuan lain terkait produk/fasilitas/jasa yang dipilih yang berlaku di Bank beserta segala bentuk perubahannya yang akan diberitahukan dengan bentuk dan sarana apapun yang ditetapkan Bank.
          </li>
          <li>
            Mengetahui dan menyetujui segala bentuk pernyataan dan/atau dokumen tertulis lainnya dan/atau ketentuan-ketentuan sebagaimana butir 4 dan 5 di atas dan formulir-formulir lainnya yang merupakan satu kesatuan
            yang tidak terpisahkan dengan Formulir Pembukaan Rekening ini.
          </li>
          <li>
            <strong>Persetujuan atau Tidak Memberikan Persetujuan</strong> kepada Bank untuk memberikan identitas kepada pihak lain yang bekerjasama dengan Bank di dalam pengembangan produk/fasilitas/jasa Bank untuk tujuan komersial
            dan telah memahami penjelasan Bank mengenai tujuan dan konsekuensi dari pemberian identitas tersebut.
          </li>
          <li>Memberi hak dan wewenang kepada Bank untuk melakukan penolakan transaksi, pembatalan transaksi, pemblokiran dan atau penutupan rekening apabila diduga:</li>
          <ol class="list-decimal pl-6">
            <li>Tidak memenuhi ketentuan Prinsip Mengenal Nasabah (Know Your Customer).</li>
            <li>Diduga dan/atau ada indikasi menggunakan dokumen palsu.</li>
            <li>Menyampaikan informasi yang diragukan kebenarannya.</li>
            <li>Memiliki sumber dana transaksi yang diketahui dan/atau patut diduga berasal dari hasil tindak pidana.</li>
            <li>Memenuhi syarat ketentuan tentang pembekuan dan penutupan rekening.</li>
          </ol>
          <li>
            Menjaga keberhasilan Nomor Kode Pribadi (PIN) dan oleh karenanya saya/kami tidak akan meminjamkan kartu ATM dan memberitahukan PIN kepada orang lain termasuk petugas Bank.
          </li>
          <li>
            Perjanjian ini telah disesuaikan dengan ketentuan peraturan perundang-undangan termasuk ketentuan peraturan Otoritas Jasa Keuangan.
          </li>
        </ol>
      </div>
      <div class="mb-6 flex">
        <input
          id="agree"
          type="checkbox"
          v-model="formData.isAgreed"
          class="w-[20px] h-[20px] mt-[3px] text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label for="agree" class="ml-2 font-medium ">
          Saya setuju dengan pernyataan di atas.
        </label>
      </div>

  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from "vue";
  
  export default defineComponent({
    name: "PernyataanNasabah",
    setup() {
      const formData = reactive({
        isAgreed: false, // Checkbox untuk persetujuan
      });
  
      const handleSubmit = () => {
        if (formData.isAgreed) {
          console.log("Persetujuan diterima");
        }
      };
  
      return {
        formData,
        handleSubmit,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Tambahkan style tambahan jika diperlukan */
  </style>
  