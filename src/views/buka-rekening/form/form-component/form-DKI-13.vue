<template>
    <div class="p-6">
        <!-- Radio Buttons -->
        <div class="mb-4">
            <label class="block">
                <input type="radio" v-model="formData.alamatType" value="copy" class="mr-2" />
                Alamat sesuai tanda pengenal (copy tanda pengenal terlampir)
            </label>
            <label class="block">
                <input type="radio" v-model="formData.alamatType" value="current" class="mr-2" />
                Alamat Tempat Tinggal Saat Ini (hanya diisi apabila berbeda dengan tanda pengenal)
            </label>
        </div>

        <!-- Form Inputs -->
        <div v-if="formData.alamatType === 'current'">
            <!-- RT/RW -->
            <div class="mb-4">
                <!-- Label untuk RT/RW -->
                <label for="rt" class="block font-medium">RT/RW</label>
                <!-- Input RT dan RW -->
                <div class="flex gap-4">
                    <div class="flex-1">
                        <input id="rt" type="text" v-model="formData.rt" class="border rounded p-2 w-full" placeholder="RT" />
                    </div>
                    <div class="flex-1">
                        <input id="rw" type="text" v-model="formData.rw" class="border rounded p-2 w-full" placeholder="RW" />
                    </div>
                </div>
            </div>

            <!-- Provinsi -->
            <div class="mb-4">
                <label for="provinsi" class="block font-medium">Provinsi</label>
                <select id="provinsi" v-model="formData.provinsi" @change="fetchKota" class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200">
                    <option value="">Pilih Provinsi</option>
                    <option v-for="prov in provinsiList" :key="prov.id" :value="prov.id">
                        {{ prov.name }}
                    </option>
                </select>
            </div>

            <!-- Kota/Kabupaten -->
            <div class="mb-4">
                <label for="kota" class="block font-medium">Kota/Kabupaten</label>
                <select id="kota" v-model="formData.kota" @change="fetchKecamatan" :disabled="!formData.provinsi" class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200">
                    <option value="">Pilih Kota/Kabupaten</option>
                    <option v-for="kota in kotaList" :key="kota.id" :value="kota.id">
                        {{ kota.name }}
                    </option>
                </select>
            </div>

            <!-- Kecamatan -->
            <div class="mb-4">
                <label for="kecamatan" class="block font-medium">Kecamatan</label>
                <select id="kecamatan" v-model="formData.kecamatan" @change="fetchKelurahan" :disabled="!formData.kota" class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200">
                    <option value="">Pilih Kecamatan</option>
                    <option v-for="kec in kecamatanList" :key="kec.id" :value="kec.id">
                        {{ kec.name }}
                    </option>
                </select>
            </div>

            <!-- Kelurahan -->
            <div class="mb-4">
                <label for="kelurahan" class="block font-medium">Kelurahan</label>
                <select id="kelurahan" v-model="formData.kelurahan" :disabled="!formData.kecamatan" class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200">
                    <option value="">Pilih Kelurahan</option>
                    <option v-for="kel in kelurahanList" :key="kel.id" :value="kel.id">
                        {{ kel.name }}
                    </option>
                </select>
            </div>

            <!-- Data Lain -->
            <div class="mb-4">
                <label for="kodePos" class="block font-medium">Kode Pos</label>
                <input id="kodePos" type="text" v-model="formData.kodePos" class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"  />
            </div>

            <!-- Kontak -->
            <div class="mb-4">
                <label for="noHp" class="block font-medium">No. HP</label>
                <input id="noHp" type="text" v-model="formData.noHp" class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200" placeholder="No. HP" />
            </div>
            <div class="mb-4">
                <label for="email" class="block font-medium">Email</label>
                <input id="email" type="email" v-model="formData.email" class="border rounded p-2 w-full focus:outline-none focus:ring focus:ring-blue-200" placeholder="Email" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';

    interface Option {
        id: string | number;
        name: string;
    }

    export default defineComponent({
        setup() {
            // Dropdown Lists
            const provinsiList = ref<Option[]>([
                { id: '1', name: 'SUMATERA UTARA' },
                { id: '2', name: 'JAWA BARAT' },
            ]);
            const kotaList = ref<Option[]>([]);
            const kecamatanList = ref<Option[]>([]);
            const kelurahanList = ref<Option[]>([]);

            // Form Data
            const formData = ref({
                alamatType: 'current',
                rt: '',
                rw: '',
                provinsi: '',
                kota: '',
                kecamatan: '',
                kelurahan: '',
                kodePos: '',
                noHp: '',
                email: '',
                alamatKoresponden: '',
            });

            // Fetch Kota/Kabupaten
            const fetchKota = () => {
                formData.value.kota = '';
                formData.value.kecamatan = '';
                formData.value.kelurahan = '';
                kecamatanList.value = [];
                kelurahanList.value = [];

                if (formData.value.provinsi === '1') {
                    kotaList.value = [
                        { id: '101', name: 'KABUPATEN MANDAILING NATAL' },
                        { id: '102', name: 'KOTA MEDAN' },
                    ];
                } else if (formData.value.provinsi === '2') {
                    kotaList.value = [
                        { id: '201', name: 'KOTA BANDUNG' },
                        { id: '202', name: 'KOTA BEKASI' },
                    ];
                } else {
                    kotaList.value = [];
                }
            };

            // Fetch Kecamatan
            const fetchKecamatan = () => {
                formData.value.kecamatan = '';
                formData.value.kelurahan = '';
                kelurahanList.value = [];

                if (formData.value.kota === '101') {
                    kecamatanList.value = [{ id: '10101', name: 'TAMBANGAN' }];
                } else if (formData.value.kota === '102') {
                    kecamatanList.value = [{ id: '10201', name: 'MEDAN SELATAN' }];
                } else {
                    kecamatanList.value = [];
                }
            };

            // Fetch Kelurahan
            const fetchKelurahan = () => {
                formData.value.kelurahan = '';

                if (formData.value.kecamatan === '10101') {
                    kelurahanList.value = [{ id: '1010101', name: 'DESA TAMBANGAN' }];
                } else {
                    kelurahanList.value = [];
                }
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
            };
        },
    });
</script>

<style scoped></style>
