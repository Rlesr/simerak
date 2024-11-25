<template>
    <div class="Form">
        <!-- Kode Sekolah -->
        <div class="mb-4">
            <label for="kodeSekolah" class="block font-medium">Kode Sekolah</label>
            <input v-model="kodeSekolah" type="text" id="kodeSekolah" class="w-full border-gray-300 bg-gray-100 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200" readonly />
        </div>

        <!-- Nama Sekolah -->
        <div class="mb-4">
            <label for="namaSekolah" class="block font-medium">Nama Sekolah</label>
            <input v-model="namaSekolah" type="text" id="namaSekolah" class="w-full border-gray-300 bg-gray-100 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200" readonly />
        </div>

        <!-- Jenis Rekening -->
        <div class="mb-4">
            <label for="jenisRekening" class="block font-medium">Jenis Rekening</label>
            <select v-model="jenisRekening" id="jenisRekening" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200" @change="onJenisRekeningChange">
                <option value="">Pilih Jenis Rekening</option>
                <option value="Sekolah">Sekolah</option>
            </select>
        </div>

        <!-- Jenis Kategori -->
        <div class="mb-4">
            <label for="jenisKategori" class="block font-medium">Jenis Kategori</label>
            <select v-model="jenisKategori" id="jenisKategori" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200" :disabled="jenisRekening === ''">
                <option value="">Pilih Jenis Kategori</option>
                <option value="BOS Swasta">BOS Swasta</option>
                <option value="BOP Kesetaraan Swasta">BOP Kesetaraan Swasta</option>
                <option value="BOP PAUD Swasta">BOP PAUD Swasta</option>
            </select>
        </div>

        <!-- Cabang -->
        <div class="mb-4">
            <label for="cabang" class="block font-medium">Cabang</label>
            <select id="cabang" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200" v-model="selectedCabang" @change="updateNomorRekening">
                <option value="">Pilih Cabang</option>
                <option v-for="cabang in cabangList" :key="cabang.kode" :value="cabang.kode">
                    {{ cabang.nama }}
                </option>
            </select>
        </div>

        <!-- Nama Rekening -->
        <div class="mb-4">
            <label for="namaRekening" class="block font-medium">Nama Rekening</label>
            <input v-model="namaRekening" type="text" id="namaRekening" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200" />
        </div>

        <!-- Nomor Rekening -->
        <div class="mb-4">
            <label for="nomorRekening" class="block font-medium">Nomor Rekening</label>
            <input v-model="nomorRekening" type="text" id="nomorRekening" class="w-full border-gray-300 bg-gray-100 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200" readonly />
        </div>

        <!-- Tujuan Pembuatan Rekening -->
        <div class="mb-4">
            <label for="tujuanPembuatanRekening" class="block font-medium">Tujuan Pembuatan Rekening</label>
            <textarea v-model="tujuanPembuatanRekening" id="tujuanPembuatanRekening" rows="4" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        kodeSekolahProp: {
            type: String,
            required: true,
        },
        namaSekolahProp: {
            type: String,
            required: true,
        },
        onCompletionChange: {
            type: Function,
            required: false,
        },
    },
    data() {
        return {
            jenisRekening: '',
            jenisKategori: '',
            selectedCabang: '',
            namaRekening: 'P9998376PKBM PERGURUAN ADVENT',
            nomorRekening: '',
            tujuanPembuatanRekening: '',
            cabangList: [
                { kode: '1', nama: 'Cabang 1', kodeCabang: 'CAB1' },
                { kode: '2', nama: 'Cabang 2', kodeCabang: 'CAB2' },
                { kode: '3', nama: 'Cabang 3', kodeCabang: 'CAB3' },
                { kode: '4', nama: 'Cabang 4', kodeCabang: 'CAB4' },
                { kode: '5', nama: 'Cabang 5', kodeCabang: 'CAB5' },
            ],
            isComplete: false, // Status kelengkapan formulir
        };
    },
    computed: {
        kodeSekolah() {
            return this.kodeSekolahProp;
        },
        namaSekolah() {
            return this.namaSekolahProp;
        },
    },
    watch: {
        // Pantau perubahan pada beberapa bidang formulir
        jenisRekening: 'checkCompletion',
        jenisKategori: 'checkCompletion',
        selectedCabang: 'checkCompletion',
        namaRekening: 'checkCompletion',
        tujuanPembuatanRekening: 'checkCompletion',
    },
    methods: {
        onJenisRekeningChange() {
            if (this.jenisRekening === '') {
                this.jenisKategori = '';
            }
        },
        validateRekening() {
            if (this.nomorRekening.length > 8) {
                this.nomorRekening = this.nomorRekening.slice(0, 8);
            }
        },
        updateNomorRekening() {
            const selected = this.cabangList.find((cabang) => cabang.kode === this.selectedCabang);
            if (selected) {
                this.nomorRekening = `${selected.kodeCabang}001`;
            } else {
                this.nomorRekening = '';
            }
        },
        checkCompletion() {
            // Periksa apakah semua bidang yang diperlukan sudah terisi
            const isComplete =
                this.jenisRekening &&
                this.jenisKategori &&
                this.selectedCabang &&
                this.namaRekening &&
                this.tujuanPembuatanRekening;

            this.isComplete = !!isComplete;

            // Panggil fungsi prop jika disediakan
            if (this.onCompletionChange) {
                this.onCompletionChange(this.isComplete);
            }
        },
    },
};
</script>
