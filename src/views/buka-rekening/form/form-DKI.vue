<template>
    <div>
        <!-- Header -->
        <Header class="fixed-header border-1" />

        <div class="main-content">
            <!-- Sidebar -->
            <Sidebar class="fixed-sidebar" />

            <!-- Form Wizard Content -->
            <div class="form-wizard-container">
                <form-wizard shape="square" color="#4361ee" class="square" :stagger="100">
                    <!-- Tabs di bagian atas -->
                    <tab-content title="Umum">
                        <template #icon>
                            <i class="fas fa-user"></i>
                        </template>
                        <div class="form-1">
                            <!-- Tombol Dropdown -->
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(1)">Form Input Umum</button>

                            <!-- Konten Dropdown -->
                            <div v-show="dropdownStates[1]" class="p-4 border border-gray-300 rounded shadow">
                                <div class="Form1">
                                    <div class="mb-4">
                                        <label for="kodeSekolah" class="block font-medium">Kode Sekolah</label>
                                        <input v-model="kodeSekolah" type="text" id="kodeSekolah" class="w-full border-gray-300 rounded p-2" readonly />
                                    </div>

                                    <!-- Nama Sekolah -->
                                    <div class="mb-4">
                                        <label for="namaSekolah" class="block font-medium">Nama Sekolah</label>
                                        <input v-model="namaSekolah" type="text" id="namaSekolah" class="w-full border-gray-300 rounded p-2" readonly />
                                    </div>

                                    <!-- Jenis Rekening -->
                                    <div class="mb-4">
                                        <label for="jenisRekening" class="block font-medium">Jenis Rekening</label>
                                        <select
                                            v-model="jenisRekening"
                                            id="jenisRekening"
                                            class="w-full border border-gray-300 rounded p-2"
                                            @change="onJenisRekeningChange"
                                        >
                                            <option value="">Pilih Jenis Rekening</option>
                                            <option value="Sekolah">Sekolah</option>
                                        </select>
                                    </div>

                                    <!-- Jenis Kategori -->
                                    <div class="mb-4">
                                        <label for="jenisKategori" class="block font-medium">Jenis Kategori</label>
                                        <select
                                            v-model="jenisKategori"
                                            id="jenisKategori"
                                            class="w-full border border-gray-300 rounded p-2"
                                            :disabled="jenisRekening === ''"
                                        >
                                            <option value="">Pilih Jenis Kategori</option>
                                            <option value="BOS Swasta">BOS Swasta</option>
                                            <option value="BOP Kesetaraan Swasta">BOP Kesetaraan Swasta</option>
                                            <option value="BOP PAUD Swasta">BOP PAUD Swasta</option>
                                        </select>
                                    </div>

                                    <!-- Cabang -->
                                    <div class="mb-4">
                                        <label for="cabang" class="block font-medium">Cabang</label>
                                        <select
                                            id="cabang"
                                            class="w-full border border-gray-300 rounded p-2"
                                            v-model="selectedCabang"
                                            @change="updateNomorRekening"
                                        >
                                            <option value="">Pilih Cabang</option>
                                            <option v-for="cabang in cabangList" :key="cabang.kode" :value="cabang.kode">
                                                {{ cabang.nama }}
                                            </option>
                                        </select>
                                    </div>

                                    <!-- Nama Rekening -->
                                    <div class="mb-4">
                                        <label for="namaRekening" class="block font-medium">Nama Rekening</label>
                                        <input v-model="namaRekening" type="text" id="namaRekening" class="w-full border border-gray-300 rounded p-2" />
                                    </div>

                                    <!-- Nomor Rekening -->
                                    <div class="mb-4">
                                        <label for="nomorRekening" class="block font-medium">Nomor Rekening</label>
                                        <input
                                            v-model="nomorRekening"
                                            type="text"
                                            id="nomorRekening"
                                            class="w-full border-gray-300 bg-gray-100 rounded p-2"
                                            readonly
                                        />
                                    </div>

                                    <!-- Tujuan Pembuatan Rekening -->
                                    <div class="mb-4">
                                        <label for="tujuanPembuatanRekening" class="block font-medium">Tujuan Pembuatan Rekening</label>
                                        <textarea
                                            v-model="tujuanPembuatanRekening"
                                            id="tujuanPembuatanRekening"
                                            rows="4"
                                            class="w-full border border-gray-300 rounded p-2"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-2">
                            <!-- Tombol Dropdown -->
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(2)">
                                Unggah Dokumen Kepala Sekolah
                            </button>

                            <!-- Konten Dropdown -->
                            <div v-show="dropdownStates[2]" class="p-4 border border-gray-300 rounded shadow">
                                <div class="space-y-4">
                                    <!-- Input KTP -->
                                    <div class="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            :value="files.KTPKS || 'Kartu Tanda Penduduk(KTP) Kepala Sekolah'"
                                            readonly
                                            class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
                                        />
                                        <label
                                            for="ktp-upload"
                                            class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-full cursor-pointer transition"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M8 9a3 3 0 116 0 3 3 0 01-6 0z" />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4 8a6 6 0 1112 0 6 6 0 01-12 0zM10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </label>
                                        <input id="ktp-upload"  accept=".pdf" type="file" class="hidden" @change="handleFileChange('KTPKS', $event)" />
                                    </div>

                                    <!-- Input SK -->
                                    <div class="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            :value="files.SKKS || 'SK Pengangkatan Kepala Sekolah'"
                                            readonly
                                            class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
                                        />
                                        <label
                                            for="sk-upload"
                                            class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-full cursor-pointer transition"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M8 9a3 3 0 116 0 3 3 0 01-6 0z" />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4 8a6 6 0 1112 0 6 6 0 01-12 0zM10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </label>
                                        <input id="sk-upload" type="file"  accept=".pdf" class="hidden" @change="handleFileChange('SKKS', $event)" />
                                    </div>

                                    <!-- Input NPWP -->
                                    <div class="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            :value="files.NPWPKS || 'Kartu NPWP Kepala Sekolah'"
                                            readonly
                                            class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
                                        />
                                        <label
                                            for="npwp-upload"
                                            class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-full cursor-pointer transition"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M8 9a3 3 0 116 0 3 3 0 01-6 0z" />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4 8a6 6 0 1112 0 6 6 0 01-12 0zM10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </label>
                                        <input id="npwp-upload" type="file"  accept=".pdf" class="hidden" @change="handleFileChange('NPWPKS', $event)" />
                                    </div>

                                    <!-- Input Foto -->
                                    <div class="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            :value="files.FotoKS || 'Foto 3x4 Kepala Sekolah'"
                                            readonly
                                            class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
                                        />
                                        <label
                                            for="foto-upload"
                                            class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-full cursor-pointer transition"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M8 9a3 3 0 116 0 3 3 0 01-6 0z" />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4 8a6 6 0 1112 0 6 6 0 01-12 0zM10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </label>
                                        <input id="foto-upload" type="file"  accept=".pdf" class="hidden" @change="handleFileChange('FotoKS', $event)" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-3">
                            <!-- Tombol Dropdown -->
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(3)">
                                Unggah Dokumen Bendahara Sekolah
                            </button>

                            <!-- Konten Dropdown -->
                            <div v-show="dropdownStates[3]" class="p-4 border border-gray-300 rounded shadow">
                                <div class="space-y-4">
                                    <!-- Input KTP -->
                                    <div class="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            :value="files.KTPB || 'Kartu Tanda Penduduk(KTP) Bendahara'"
                                            readonly
                                            class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
                                        />
                                        <label
                                            for="ktp-bendahara-upload"
                                            class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-full cursor-pointer transition"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M8 9a3 3 0 116 0 3 3 0 01-6 0z" />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4 8a6 6 0 1112 0 6 6 0 01-12 0zM10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </label>
                                        <input id="ktp-bendahara-upload" type="file"  accept=".pdf" class="hidden" @change="handleFileChange('KTPB', $event)" />
                                    </div>

                                    <!-- Input SK -->
                                    <div class="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            :value="files.SKB || 'SK Pengangkatan Bendahara'"
                                            readonly
                                            class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
                                        />
                                        <label
                                            for="sk-bendahara-upload"
                                            class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-full cursor-pointer transition"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M8 9a3 3 0 116 0 3 3 0 01-6 0z" />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4 8a6 6 0 1112 0 6 6 0 01-12 0zM10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </label>
                                        <input id="sk-bendahara-upload" type="file"  accept=".pdf" class="hidden" @change="handleFileChange('SKB', $event)" />
                                    </div>

                                    <!-- Input NPWP -->
                                    <div class="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            :value="files.NPWPB || 'Kartu NPWP Bendahara'"
                                            readonly
                                            class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
                                        />
                                        <label
                                            for="npwp-bendahara-upload"
                                            class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-full cursor-pointer transition"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M8 9a3 3 0 116 0 3 3 0 01-6 0z" />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4 8a6 6 0 1112 0 6 6 0 01-12 0zM10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </label>
                                        <input id="npwp-bendahara-upload" type="file"  accept=".pdf" class="hidden" @change="handleFileChange('NPWPB', $event)" />
                                    </div>

                                    <!-- Input Foto -->
                                    <div class="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            :value="files.FotoB || 'Foto 3x4 Bendahara '"
                                            readonly
                                            class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
                                        />
                                        <label
                                            for="foto-bendahara-upload"
                                            class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-full cursor-pointer transition"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M8 9a3 3 0 116 0 3 3 0 01-6 0z" />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4 8a6 6 0 1112 0 6 6 0 01-12 0zM10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </label>
                                        <input id="foto-bendahara-upload" type="file"  accept=".pdf" class="hidden" @change="handleFileChange('FotoB', $event)" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-4">
                            <!-- Tombol Dropdown -->
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(4)">
                                Unggah Dokumen Sekolah
                            </button>

                            <!-- Konten Dropdown -->
                            <div v-show="dropdownStates[4]" class="p-4 border border-gray-300 rounded shadow">
                                <div class="space-y-4">
                                    <!-- Input KTP -->
                                    <div class="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            :value="files.SP || 'Surat Pengajuan'"
                                            readonly
                                            class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
                                        />
                                        <label
                                            for="sp-upload"
                                            class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-full cursor-pointer transition"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M8 9a3 3 0 116 0 3 3 0 01-6 0z" />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4 8a6 6 0 1112 0 6 6 0 01-12 0zM10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </label>
                                        <input id="sp-upload" type="file" class="hidden"  accept=".pdf" @change="handleFileChange('SP', $event)" />
                                    </div>

                                    <!-- Input SK -->
                                    <div class="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            :value="files.AP || 'Akta Pendirian'"
                                            readonly
                                            class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
                                        />
                                        <label
                                            for="ap-upload"
                                            class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-full cursor-pointer transition"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M8 9a3 3 0 116 0 3 3 0 01-6 0z" />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4 8a6 6 0 1112 0 6 6 0 01-12 0zM10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </label>
                                        <input id="ap-upload" type="file" class="hidden"  accept=".pdf" @change="handleFileChange('AP', $event)" />
                                    </div>

                                    <!-- Input NPWP -->
                                    <div class="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            :value="files.NPWPS || 'Kartu NPWP Badan'"
                                            readonly
                                            class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
                                        />
                                        <label
                                            for="npwp-badan-upload"
                                            class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-full cursor-pointer transition"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M8 9a3 3 0 116 0 3 3 0 01-6 0z" />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4 8a6 6 0 1112 0 6 6 0 01-12 0zM10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </label>
                                        <input id="npwp-badan-upload" type="file" class="hidden"  accept=".pdf" @change="handleFileChange('NPWPS', $event)" />
                                    </div>

                                    <!-- Input Foto -->
                                    <div class="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            :value="files.SIO || 'Surat Izin Operasional '"
                                            readonly
                                            class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
                                        />
                                        <label
                                            for="sio-upload"
                                            class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-full cursor-pointer transition"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M8 9a3 3 0 116 0 3 3 0 01-6 0z" />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4 8a6 6 0 1112 0 6 6 0 01-12 0zM10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </label>
                                        <input id="sio-upload" type="file" class="hidden"  accept=".pdf" @change="handleFileChange('SIO', $event)" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tab-content>

                    <tab-content title="Kepala Sekolah">
                        <template #icon>
                            <i class="fas fa-user-tie"></i>
                        </template>
                        <p>Isi detail Kepala Sekolah di sini.</p>
                    </tab-content>

                    <tab-content title="Bendahara">
                        <template #icon>
                            <i class="fas fa-user-shield"></i>
                        </template>
                        <p>Isi detail Bendahara di sini.</p>
                    </tab-content>

                    <tab-content title="Tanda Tangan">
                        <template #icon>
                            <i class="fas fa-pen"></i>
                        </template>
                        <p>Tambahkan tanda tangan di sini.</p>
                    </tab-content>
                </form-wizard>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Sidebar from '@/components/layout/Sidebar.vue';
    import Header from '@/components/layout/Header.vue';
    import { FormWizard, TabContent } from 'vue3-form-wizard';
    import 'vue3-form-wizard/dist/style.css';
    import { reactive, ref } from 'vue';

    export default {
        components: { Sidebar, Header, FormWizard, TabContent },
        name: 'CombinedLayout',
        props: {
            kodeSekolahProp: {
                type: String,
                required: true,
            },
            namaSekolahProp: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                kodeSekolah: this.kodeSekolahProp,
                namaSekolah: this.namaSekolahProp,
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
            };
        },
        setup() {
            const dropdownStates = ref<boolean[]>([false, false, false, false, false]);
            // State untuk kontrol dropdown
            const toggleDropdown = (index: number) => {
                // Tutup semua dropdown lainnya sebelum membuka yang dipilih
                if (dropdownStates.value[index]) {
                    dropdownStates.value[index] = false;
                } else {
                    // Tutup semua dropdown lainnya dan buka yang dipilih
                    dropdownStates.value = dropdownStates.value.map((_, i) => i === index);
                }
            };
            const closeAllDropdowns = () => {
                dropdownStates.value = dropdownStates.value.map(() => false);
            };

            const files = reactive<{ [key: string]: string | null }>({
                KTPKS: null,
                SKKS: null,
                NPWPKS: null,
                FotoKS: null,
                KTPB: null,
                SKB: null,
                NPWPB: null,
                FotoB: null,
                SP: null,
                AP: null,
                NPWPS: null,
                SIO: null,
            });

            const handleFileChange = (type: string, event: Event) => {
                const input = event.target as HTMLInputElement;
                const file = input.files?.[0];

                if (file) {
                    if (file.size > 100 * 1024 * 1024) {
                        alert('File tidak boleh lebih dari 100 MB!');
                    } else {
                        files[type] = file.name;
                    }
                }
            };

            return {
                dropdownStates,
                toggleDropdown,
                closeAllDropdowns,
                files,
                handleFileChange,
            };
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
                // Cari cabang berdasarkan kode yang dipilih
                const selected = this.cabangList.find((cabang) => cabang.kode === this.selectedCabang);
                if (selected) {
                    this.nomorRekening = `${selected.kodeCabang}001`;
                } else {
                    this.nomorRekening = '';
                }
            },
        },
    };
</script>

<style scoped>
    .fixed-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        background-color: rgb(249 250 251);
        z-index: 50;
    }
    .fixed-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 250px; /* Adjust width as needed */
        background-color: #1e3a8a; /* Adjust color as needed */
    }

    .main-content {
        display: flex;
        margin-top: 60px;
    }

    .form-wizard-container {
        margin-left: 250px;
        padding: 20px;
        width: 100%;
    }

    .form-section1 {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    input[readonly] {
        background-color: #f5f5f5;
    }
</style>
