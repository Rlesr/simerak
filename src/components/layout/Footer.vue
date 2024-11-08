<template>
    <footer class="bg-cover bg-center" style="background-image: url('/src/assets/brand/image4.png');">
      <div class="bg-gradient-to-b from-[#054083] to-[#6BA5EA00] py-10">
        <div class="container mx-auto flex justify-between px-6 text-white">

          <!-- Bagian Kiri: Informasi BPKD -->
          <div class="w-1/3 space-y-2">
            <img src="./assets/brand/logo-DKI.svg" alt="Logo DKI Jakarta" class="w-24 mb-4">
            <p>BPKD (Badan Pengelola Keuangan Daerah)</p>
            <p>Gedung Balai Kota Grha Ali Sadikin</p>
            <p>Jl. Medan Merdeka Selatan No. 8 - 9 Blok G Lt. 7, 14 dan 15 RT.11/RW.2 Gambir, Jakarta Pusat, Daerah Khusus Ibukota Jakarta, 10110</p>
            <p>Phone: 021-382-2137 / 021-382-2537</p>
            <p>Instagram: @bpkdkejprovdkij</p>
            <p>Youtube: @bpkddkijakarta190</p>
          </div>

          <!-- Bagian Tengah: Ikon Media Sosial -->
          <div class="flex space-x-4 items-center text-white">
            <!-- Tambahkan link di atribut href sesuai kebutuhan -->
            <a href="#" class="hover:text-[#F57900]">
              <!-- Ikon Google -->
              <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.6 10h-9.6v4h5.5c-.7 2-2.6 3.3-5.5 3.3-3.2 0-5.9-2.7-5.9-6s2.7-6 5.9-6c1.4 0 2.7.5 3.7 1.3l2.8-2.8c-1.8-1.6-4.1-2.5-6.5-2.5-5.5 0-10 4.5-10 10s4.5 10 10 10c5 0 9.4-3.6 9.4-10 0-.7-.1-1.3-.2-1.9z"/></svg>
            </a>
            <a href="#" class="hover:text-[#F57900]">
              <!-- Ikon Facebook -->
              <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.5 0h-21c-.8 0-1.5.7-1.5 1.5v21c0 .8.7 1.5 1.5 1.5h21c.8 0 1.5-.7 1.5-1.5v-21c0-.8-.7-1.5-1.5-1.5zm-5 12h-3v10h-5v-10h-2v-4h2v-2c0-1.1.9-2 2-2h3v4h-2c-.3 0-.5.2-.5.5v1.5h3.5l-.5 4z"/></svg>
            </a>
            <a href="#" class="hover:text-[#F57900]">
              <!-- Ikon Twitter -->
              <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.6c-.9.4-1.8.6-2.8.7 1-.6 1.7-1.6 2-2.7-.9.5-1.9.9-3 1.1-.9-.9-2.2-1.5-3.6-1.5-2.8 0-5 2.2-5 5 0 .4 0 .7.1 1-4.1-.2-7.7-2.2-10.1-5.3-.4.7-.6 1.6-.6 2.4 0 1.6.8 3 2.1 3.8-.8 0-1.6-.2-2.2-.6v.1c0 2.3 1.6 4.2 3.8 4.6-.4.1-.8.1-1.2.1-.3 0-.6 0-.8-.1.6 1.9 2.3 3.3 4.4 3.4-1.6 1.3-3.6 2-5.7 2-.4 0-.8 0-1.1-.1 2 1.3 4.4 2 6.9 2 8.3 0 12.9-6.9 12.9-12.9v-.6c.9-.6 1.7-1.5 2.3-2.4z"/></svg>
            </a>
            <a href="#" class="hover:text-[#F57900]">
              <!-- Ikon YouTube -->
              <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.6 3h-15.2c-1.9 0-3.4 1.5-3.4 3.4v11.3c0 1.9 1.5 3.4 3.4 3.4h15.2c1.9 0 3.4-1.5 3.4-3.4v-11.3c0-1.9-1.5-3.4-3.4-3.4zm-8.6 13.5v-8l6.5 4-6.5 4z"/></svg>
            </a>
          </div>

          <!-- Bagian Kanan: Layanan SIMERA -->
          <div class="w-1/3 text-right">
            <h3 class="text-[#F57900] font-semibold">Layanan SIMERA</h3>
            <ul class="space-y-1">
              <li><a href="#" class="hover:text-[#F57900]">Buka Rekening</a></li>
              <li><a href="#" class="hover:text-[#F57900]">Tutup Rekening</a></li>
              <li><a href="#" class="hover:text-[#F57900]">Ubah Spesimen</a></li>
              <li><a href="#" class="hover:text-[#F57900]">Pengusulan</a></li>
              <li><a href="#" class="hover:text-[#F57900]">Laporan</a></li>
            </ul>
          </div>
        </div>

        <!-- Footer Bottom Text -->
        <div class="text-center mt-6 text-sm text-white">
          Badan Pengelola Keuangan Daerah © 2024
        </div>
      </div>
    </footer>
  </template>

  <script>
  export default {
    name: 'FooterComponent',
  };
  </script>

  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
