<template>
    <div class="p-6">
        <!-- Data Pekerjaan -->
        <h2 class="text-lg font-bold mb-4">Detail Pekerjaan</h2>
        <div class="mb-4">
            <label for="jenisPekerjaan" class="block font-medium">Jenis Pekerjaan</label>
            <select id="jenisPekerjaan" v-model="formData.jenisPekerjaan" class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200">
                <option value="" disabled>Pilih Jenis Pekerjaan</option>
                <option value="Karyawan">Pegawai Swasta</option>
                <option value="Freelancer">TNI/Polri</option>
                <option value="Karyawan">Pegawai Negeri</option>
                <option value="Karyawan">Ibu Rumah Tangga</option>
                <option value="Karyawan">Wiraswasta</option>
                <option value="Karyawan">Pensiunan</option>
                <option value="Karyawan">BUMD</option>
                <option value="Karyawan">BUMN</option>
                <option value="Karyawan">Tidak Kerja</option>
            </select>
            <span v-if="errors.jenisPekerjaan" class="text-red-500 text-sm">{{ errors.jenisPekerjaan }}</span>
        </div>

        <div class="mb-4">
            <label for="statusPekerjaan" class="block font-medium">Status Pekerjaan</label>
            <select id="statusPekerjaan" v-model="formData.statusPekerjaan" class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200">
                <option value="" disabled>Pilih Status Pekerjaan</option>
                <option value="1">Tetap</option>
                <option value="2">Kontrak</option>
                <option value="3">Honorer</option>
            </select>
            <span v-if="errors.statusPekerjaan" class="text-red-500 text-sm">{{ errors.statusPekerjaan }}</span>
        </div>

        <div class="mb-4">
            <label for="jabatan" class="block font-medium">Jabatan/Golongan</label>
            <input
                id="jabatan"
                type="text"
                v-model="formData.jabatan"
                class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                placeholder=""
            />
            <span v-if="errors.jabatan" class="text-red-500 text-sm">{{ errors.jabatan }}</span>
        </div>

        <div class="flex gap-4 mb-4">
            <div class="flex-1">
                <label for="lamaBekerjaTahun" class="block font-medium">Lama Bekerja (Tahun)</label>
                <input
                    id="lamaBekerjaTahun"
                    type="number"
                    v-model="formData.lamaBekerja.tahun"
                    class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder=""
                />
            </div>
            <div class="flex-1">
                <label for="lamaBekerjaBulan" class="block font-medium">Lama Bekerja (Bulan)</label>
                <input
                    id="lamaBekerjaBulan"
                    type="number"
                    v-model="formData.lamaBekerja.bulan"
                    class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder=""
                />
            </div>
        </div>

        <!-- Data Perusahaan -->
        <h2 class="text-lg font-bold mb-4">Data Perusahaan/Instansi Tempat Bekerja</h2>
        <div class="mb-4">
            <label for="namaInstansi" class="block font-medium">Nama Instansi</label>
            <input
                id="namaInstansi"
                type="text"
                v-model="formData.namaInstansi"
                class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                placeholder=""
            />
        </div>
        <div class="mb-4">
            <label for="alamatInstansi" class="block font-medium">Alamat Instansi</label>
            <input
                id="alamatInstansi"
                type="text"
                v-model="formData.alamatInstansi"
                class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                placeholder=""
            />
        </div>
        <div class="mb-4">
            <label for="kota" class="block font-medium">Kota</label>
            <input
                id="kota"
                type="text"
                v-model="formData.kota"
                class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                placeholder=""
            />
        </div>
        <div class="mb-4">
            <label for="kodePos" class="block font-medium">Kode Pos</label>
            <input
                id="kodePos"
                type="text"
                v-model="formData.kodePos"
                class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                placeholder=""
            />
        </div>
        <div class="mb-4">
            <label for="noTelepon" class="block font-medium">No. Telepon</label>
            <input
                id="noTelepon"
                type="text"
                v-model="formData.noTelepon"
                class="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                placeholder=""
            />
        </div>
        <div class="text-center mt-4">
            <span :class="isFormComplete ? 'text-green-500' : 'text-red-500'" class="font-semibold">
                {{ isFormComplete ? 'Semua data telah terisi.' : 'Harap lengkapi data yang diperlukan.' }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, computed, watch } from 'vue';

    export default defineComponent({
        name: 'FormPekerjaan',
        emits: ['completion-change'], // Emit untuk perubahan status kelengkapan form
        setup(_, { emit }) {
            const formData = reactive({
                jenisPekerjaan: '',
                statusPekerjaan: '',
                jabatan: '',
                lamaBekerja: {
                    tahun: '',
                    bulan: '',
                },
                namaInstansi: '',
                alamatInstansi: '',
                kota: '',
                kodePos: '',
                noTelepon: '',
            });

            const errors = reactive({
                jenisPekerjaan: '',
                statusPekerjaan: '',
                jabatan: '',
                namaInstansi: '',
                alamatInstansi: '',
                kota: '',
                kodePos: '',
                noTelepon: '',
                lamaBekerjaTahun: '',
                lamaBekerjaBulan: '',
            });

            const validateForm = () => {
                errors.jenisPekerjaan = formData.jenisPekerjaan ? '' : 'Jenis pekerjaan harus diisi.';
                errors.statusPekerjaan = formData.statusPekerjaan ? '' : 'Status pekerjaan harus dipilih.';
                errors.jabatan = formData.jabatan ? '' : 'Jabatan harus diisi.';
                errors.namaInstansi = formData.namaInstansi ? '' : 'Nama instansi harus diisi.';
                errors.alamatInstansi = formData.alamatInstansi ? '' : 'Alamat instansi harus diisi.';
                errors.kota = formData.kota ? '' : 'Kota harus diisi.';
                errors.kodePos = formData.kodePos ? '' : 'Kode pos harus diisi.';
                errors.noTelepon = formData.noTelepon ? '' : 'Nomor telepon harus diisi.';
                errors.lamaBekerjaTahun = formData.lamaBekerja.tahun ? '' : 'Lama bekerja (tahun) harus diisi.';
                errors.lamaBekerjaBulan = formData.lamaBekerja.bulan ? '' : 'Lama bekerja (bulan) harus diisi.';
            };

            const isFormComplete = computed(() => {
                return (
                    !!formData.jenisPekerjaan &&
                    !!formData.statusPekerjaan &&
                    !!formData.jabatan &&
                    !!formData.lamaBekerja.tahun &&
                    !!formData.lamaBekerja.bulan &&
                    !!formData.namaInstansi &&
                    !!formData.alamatInstansi &&
                    !!formData.kota &&
                    !!formData.kodePos &&
                    !!formData.noTelepon
                );
            });

            // Watch untuk memantau perubahan kelengkapan form
            watch(isFormComplete, (newStatus) => {
                emit('completion-change', newStatus); // Emit perubahan status kelengkapan form
            });

            return {
                formData,
                errors,
                validateForm,
                isFormComplete,
            };
        },
    });
</script>

<style scoped>
    /* Tambahkan styling jika diperlukan */
</style>
