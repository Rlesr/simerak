<template>
    <Layout />
    <div class="min-h-screen flex flex-auto">
        <!-- Gunakan ml-64 untuk desktop, ml-0 untuk mobile -->
        <div class="ml-0 md:ml-64 py-16 flex-1 flex flex-col overflow-hidden">
            <!-- Header and Breadcrumb -->
            <div class="px-6 py-4 flex-shrink-0">
                <ol class="flex text-xs mt-[20px] mb-[10px] text-gray-500 font-semibold dark:text-white-dark">
                    <li><a href="/">Home</a></li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Deposito</a>
                    </li>
                    <li class="before:content-['/'] before:px-0.5">
                        <a href="javascript:;" class="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Tambah</a>
                    </li>
                </ol>
                <h2 class="text-2xl font-bold mb-[10px]">Form Tutup Rekening</h2>
                <hr class="border-t-2 border-black" />
            </div>

            <!-- Form Section -->
            <div class="mt-3 bg-white shadow rounded-lg p-6">
                <form class="space-y-5">
                    <!-- Input Tanggal -->
                    <div class="flex items-center">
                        <label for="tanggal" class="w-1/4 font-bold text-gray-800 text-sm">Tanggal</label>
                        <div class="flex items-center border border-gray-300 rounded-md h-10 w-1/4 px-2">
                            <input type="text" ref="tanggalDeposito" id="tanggal" class="w-full outline-none" readonly />
                            <button @click="clearDate('tanggalDeposito')" class="ml-2 text-gray-500 hover:text-red-500">Clear</button>
                        </div>
                    </div>

                    <!-- NO CIF -->
                    <div class="flex items-center">
                        <label for="noCIF" class="w-1/4 font-normal text-gray-800 text-sm">No CIF</label>
                        <input type="text" id="noCIF" class="p-2 border border-gray-300 rounded w-3/4 bg-gray-200" readonly />
                    </div>
                    <!-- No Rekening -->
                    <div class="flex items-center">
                        <label for="noRekening" class="w-1/4 font-normal text-gray-800 text-sm">No Rekening</label>
                        <div class="flex w-3/4">
                            <input type="text" id="noRekening" class="p-2 border border-gray-300 rounded-l-md w-full bg-gray-200" readonly />
                            <button
                                class="bg-gray-200 text-gray-800 flex justify-center items-center px-3 font-semibold border border-l-0 border-gray-300 rounded-r-md"
                            >
                                Pilih
                            </button>
                        </div>
                    </div>

                    <!-- Cabang  -->
                    <div class="flex items-center">
                        <label for="cabangCapem" class="w-1/4 font-normal text-gray-800 text-sm">Cabang/Capem</label>
                        <input type="text" id="cabangCapem" class="p-2 border border-gray-300 rounded w-3/4 bg-gray-200" readonly/>
                    </div>

                    <!-- Nasabah Non Perorangan -->
                    <h2 class="text-lg font-semibold mb-4">Nasabah Non Perorangan</h2>
                    <!-- Nama perusahaan/instansi -->
                    <div class="flex items-center">
                        <label for="perusahaan" class="w-1/4 font-normal text-gray-800 text-sm">Nama Perusahaan/Instansi</label>
                        <div class="w-3/4 flex">
                            <input type="text" id="perusahaan" class="p-2 border border-gray-300 rounded-l-md w-full bg-gray-200" readonly />
                        </div>
                    </div>
                    <!-- Status Badan Usaha -->
                    <div class="flex items-center">
                        <label for="statususaha" class="w-1/4 font-normal text-gray-800 text-sm">Status Badan Usaha</label>
                        <div class="w-3/4 flex">
                            <input type="text" id="statususaha" class="p-2 border border-gray-300 rounded-l-md w-full bg-gray-200" readonly />
                        </div>
                    </div>
                    <!-- NPWP -->
                    <div class="flex items-center">
                        <label for="npwp" class="w-1/4 font-normal text-gray-800 text-sm">NPWP</label>
                        <div class="w-3/4 flex">
                            <input type="text" id="npwp" class="p-2 border border-gray-300 rounded-l-md w-full bg-gray-200" readonly />
                        </div>
                    </div>
                    <!-- Jenis Usaha/Aktivitas -->
                    <div class="flex items-center">
                        <label for="jenisUsaha" class="w-1/4 font-normal text-gray-800 text-sm">Jenis Usaha/Aktivitas</label>
                        <div class="w-3/4 flex">
                            <textarea type="text" id="jenisUsaha" class="p-2 border border-gray-300 rounded-l-md w-full bg-gray-200" readonly />
                        </div>
                    </div>
                    <!-- Alamat -->
                    <div class="flex items-center">
                        <label for="alamat" class="w-1/4 font-normal text-gray-800 text-sm">Alamat</label>
                        <div class="w-3/4 flex">
                            <textarea type="text" id="alamat" class="p-2 border border-gray-300 rounded-l-md w-full bg-gray-200" readonly />
                        </div>
                    </div>
                    <!-- Provinsi -->
                    <div class="flex items-center">
                        <label for="provinsi" class="w-1/4 font-normal text-gray-800 text-sm">Provinsi</label>
                        <div class="w-3/4 flex">
                            <input type="text" id="provinsi" class="p-2 border border-gray-300 rounded-l-md w-full bg-gray-200" readonly />
                        </div>
                    </div>
                    <!-- Kota / Kabupaten -->
                    <div class="flex items-center">
                        <label for="kota" class="w-1/4 font-normal text-gray-800 text-sm">Kota / Kabupaten</label>
                        <div class="w-3/4 flex">
                            <input type="text" id="kota" class="p-2 border border-gray-300 rounded-l-md w-full bg-gray-200" readonly />
                        </div>
                    </div>
                    <!-- Kecamatan -->
                    <div class="flex items-center">
                        <label for="kecamatan" class="w-1/4 font-normal text-gray-800 text-sm">Kecamatan</label>
                        <div class="w-3/4 flex">
                            <input type="text" id="kecamatan" class="p-2 border border-gray-300 rounded-l-md w-full " readonly />
                        </div>
                    </div>
                    <!-- RT/RW -->
                    <div class="flex items-center">
                        <label for="rt" class="w-1/4 font-normal text-sm text-gray-800">RT / RW</label>
                        <div class="flex items-center space-x-1 w-3/4">
                            <input type="text" id="rt" class="p-1 border border-gray-300 rounded-md text-sm w-1/4 bg-gray-200" placeholder="RT"  readonly />
                            <span class="text-sm font-normal text-gray-800">/</span>
                            <input type="text" id="rw" class="p-1 border border-gray-300 rounded-md text-sm w-1/4 bg-gray-200" placeholder="RW"  readonly />
                        </div>
                    </div>
                    <!-- Kode Pos -->
                    <div class="flex items-center">
                        <label for="Kodepos" class="w-1/4 font-normal text-gray-800 text-sm">Kode Pos</label>
                        <div class="w-1/4 flex">
                            <input type="text" id="kodepos" class="p-2 border border-gray-300 rounded-l-md w-full bg-gray-200" readonly />
                        </div>
                    </div>
                    <!-- No Telp(HP) / Faks / Email -->
                    <div class="flex items-center">
                        <label for="noTelp" class="w-1/4 font-normal text-gray-800 text-sm">No Telp(HP) / Faks / Email</label>
                        <div class="w-3/4 flex">
                            <input type="text" id="noTelp" class="p-2 border border-gray-300 rounded-l-md w-full bg-gray-200" readonly />
                        </div>
                    </div>
                    <!-- No. Akta Pendirian Terakhir -->
                    <div class="flex items-center">
                        <label for="noAkta" class="w-1/4 font-normal text-gray-800 text-sm">No. Akta Pendirian Terakhir</label>
                        <div class="w-3/4 flex">
                            <input type="text" id="noAkta" class="p-2 border border-gray-300 rounded-l-md w-full"  />
                        </div>
                    </div>
                    <!-- Tanggal Akta Pendirian -->
                    <div class="flex items-center">
                        <label for="tanggalAktaPendirian" class="w-1/4 font-bold text-gray-800 text-sm">Tanggal Akta Pendirian</label>
                        <div class="flex items-center border border-gray-300 rounded-md h-10 w-1/4 px-2 bg-gray-200">
                            <input type="text" ref="tanggalAktaPendirian" id="AktaPendirian" class="w-full outline-none bg-gray-200" readonly />
                            <button @click="clearDate('tanggalAktaPendirian')" class="ml-2 text-gray-500 hover:text-red-500">Clear</button>
                        </div>
                    </div>
                    <!-- Notaris Akta -->
                    <div class="flex items-center">
                        <label for="notarisAkta" class="w-1/4 font-normal text-gray-800 text-sm">Notaris Akta</label>
                        <div class="w-3/4 flex">
                            <input type="text" id="notarisAkta" class="p-2 border border-gray-300 rounded-l-md w-full" />
                        </div>
                    </div>
                    <!-- No. SIUP -->
                    <div class="flex items-center">
                        <label for="noSiup" class="w-1/4 font-normal text-gray-800 text-sm">No. SIUP</label>
                        <div class="w-1/4 flex">
                            <input type="text" id="noSiup" class="p-2 border border-gray-300 rounded-l-md w-full" />
                        </div>
                    </div>
                    <!-- Tanggal SIUP -->
                    <div class="flex items-center">
                        <label for="tanggalSiup" class="w-1/4 font-normal text-gray-800 text-sm">Tanggal SIUP</label>
                        <div class="flex items-center border border-gray-300 rounded-md h-10 w-1/4 px-2 bg-gray-200">
                            <input type="text" ref="tanggalSiup" id="tanggalSiup" class="w-full outline-none bg-gray-200" readonly />
                            <button @click="clearDate('tanggalSiup')" class="ml-2 text-gray-500 hover:text-red-500">Clear</button>
                        </div>
                    </div>
                    <!-- No. TDP -->
                    <div class="flex items-center">
                        <label for="noTdp" class="w-1/4 font-normal text-gray-800 text-sm">No. TDP</label>
                        <div class="w-3/4 flex">
                            <input type="text" id="noTdp" class="p-2 border border-gray-300 rounded-l-md w-full" />
                        </div>
                    </div>
                    <!-- Tanggal Tdp -->
                    <div class="flex items-center">
                        <label for="tanggalTdp" class="w-1/4 font-normal text-gray-800 text-sm">Tanggal TDP</label>
                        <div class="flex items-center border border-gray-300 rounded-md h-10 w-1/4 px-2 bg-gray-200">
                            <input type="text" ref="tanggalTdp" id="tanggalTdp" class="w-full outline-none bg-gray-200" readonly />
                            <button @click="clearDate('tanggalTdp')" class="ml-2 text-gray-500 hover:text-red-500">Clear</button>
                        </div>
                    </div>
                    <!-- Data Rekening Yang Akan Ditutup -->
                    <h2 class="text-lg font-semibold mb-4">Data Rekening Yang Akan Ditutup</h2>
                    <!-- Jenis Rekening  -->
                    <div class="flex items-center">
                        <label for="jenisRekening" class="w-1/4 font-normal text-gray-800 text-sm ">Jenis Rekening</label>
                        <div class="w-3/4 flex">
                            <input type="text" id="jenisRekening" class="p-2 border border-gray-300 rounded-l-md w-full bg-gray-200" readonly />
                        </div>
                    </div>
                    <!-- No Rekening  -->
                    <div class="flex items-center">
                        <label for="noRekening" class="w-1/4 font-normal text-gray-800 text-sm">No Rekening</label>
                        <div class="w-3/4 flex">
                            <input type="text" id="noRekening" class="p-2 border border-gray-300 rounded-l-md w-full bg-gray-200" readonly />
                        </div>
                    </div>
                    <!-- Saldo Rekening Terakhir  -->
                    <div class="flex items-center">
                        <label for="saldoTerakhir" class="w-1/4 font-normal text-gray-800 text-sm">Saldo Rekening Terakhir</label>
                        <div class="w-3/4 flex">
                            <input type="text" id="saldoTerakhir" class="p-2 border border-gray-300 rounded-l-md w-full" />
                        </div>
                    </div>
                    <h5 class="text-lg font-normal mb-4">Sisa Blanko cek dan bilyet giro :</h5>
                    <!-- 1. Yang belum terpakai  -->
                    <div class="flex items-center">
                        <label class="w-1/4 font-normal text-sm text-gray-800">1. Yang Belum Terpakai</label>
                        <div class="flex items-center space-x-1 w-3/4">
                            <span class="text-sm font-normal px-3 text-gray-800">CEK</span>
                            <input type="text" id="cek" class="p-1 border border-gray-300 rounded-md text-sm w-1/4"  />
                            <span class="text-sm font-normal px-3 text-gray-800">Lembar</span>
                            <span class="text-sm font-normal text-gray-800">/</span>
                            <span class="text-sm font-normal px-3 text-gray-800">BG</span>
                            <input type="text" id="bg" class="p-1 border border-gray-300 rounded-md text-sm w-1/4"  />
                            <span class="text-sm font-normal px-3 text-gray-800">Lembar</span>
                        </div>
                    </div>
                    <!-- 1. Yang masih beredar  -->
                    <div class="flex items-center">
                        <label class="w-1/4 font-normal text-sm text-gray-800">2. Yang masih beredar</label>
                        <div class="flex items-center space-x-1 w-3/4">
                            <span class="text-sm font-normal px-3 text-gray-800">CEK</span>
                            <input type="text" id="cek" class="p-1 border border-gray-300 rounded-md text-sm w-1/4"  />
                            <span class="text-sm font-normal px-3 text-gray-800">Lembar</span>
                            <span class="text-sm font-normal text-gray-800">/</span>
                            <span class="text-sm font-normal px-3 text-gray-800">BG</span>
                            <input type="text" id="bg" class="p-1 border border-gray-300 rounded-md text-sm w-1/4"  />
                            <span class="text-sm font-normal px-3 text-gray-800">Lembar</span>
                        </div>
                    </div>
                    <!-- alasan tutup rekening -->
                    <div class="flex items-center">
                        <label for="alasan" class="w-1/4 font-normal text-gray-800 text-sm">alasan Tutup Rekening</label>
                        <div class="w-3/4 flex">
                            <textarea
                                type="text"
                                id="alasan"
                                class="p-2 border border-gray-300 rounded-l-md w-full"
                                placeholder="Alasan Tutup Rekening"
                                readonly
                            />
                        </div>
                    </div>
                    <!-- unggah permohonan  -->
                    <div class="flex items-center">
                        <label for="permohonan" class="w-1/4 font-bold text-gray-800 text-sm">Unggah Bilyet</label>
                        <div class="w-3/4">
                            <input
                                id="permohonan"
                                type="file"
                                class="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-2 bg-gray-200 border  border-gray-300 rounded w-full file:w-auto file:bg-primary/90 file:text-white file:hover:bg-primary file:rounded file:cursor-pointer"
                            />
                        </div>
                    </div>
                    <!-- button  -->
                    <div class="flex justify-between mt-6">
                        <button type="button" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">Kembali</button>
                        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue';
    import flatpickr from 'flatpickr';
    import 'flatpickr/dist/flatpickr.css';
    import Layout from '@/components/layout/Layout.vue';

    export default {
        components: { Layout },
        setup() {
            // References untuk setiap input
            const tanggalDeposito = ref(null);
            const tanggalAktaPendirian = ref(null);
            const tanggalSiup = ref(null);
            const tanggalTdp = ref(null);

            // Fungsi untuk membersihkan tanggal
            const clearDate = (inputName) => {
                const inputRef = {
                    tanggalDeposito,
                    tanggalAktaPendirian,
                    tanggalSiup,
                    tanggalTdp,
                }[inputName];

                if (inputRef.value && inputRef.value._flatpickr) {
                    inputRef.value._flatpickr.clear();
                }
            };

            // Inisialisasi Flatpickr pada elemen input
            onMounted(() => {
                const options = { dateFormat: 'Y-m-d', locale: 'id' };
                flatpickr(tanggalDeposito.value, options);
                flatpickr(tanggalAktaPendirian.value, options);
                flatpickr(tanggalSiup.value, options);
                flatpickr(tanggalTdp.value, options);
            });

            return {
                tanggalDeposito,
                tanggalAktaPendirian,
                tanggalSiup,
                tanggalTdp,
                clearDate,
            };
        },
    };
</script>

<style>
    .form-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 500px;
        margin: auto;
    }

    .form-field {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .input-group {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .input {
        flex: 1;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .clear-button {
        padding: 6px 12px;
        background-color: #f44336;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.2s;
    }

    .clear-button:hover {
        background-color: #d32f2f;
    }
</style>
