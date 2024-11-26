<template>
    <div class="p-6 mx-auto">
        <!-- Jenis Nasabah -->
        <div>
            <label class="font-semibold">Jenis Nasabah <span class="text-red-500">*</span></label>
            <div class="flex space-x-4">
                <label class="flex items-center cursor-pointer space-x-2">
                    <input type="radio" name="customerType" v-model="customerType" value="Nasabah Baru" class="form-radio" />
                    <span class="text-white-dark">Nasabah Baru</span>
                </label>
                <label class="flex items-center cursor-pointer space-x-2">
                    <input type="radio" name="customerType" v-model="customerType" value="Sudah pernah menjadi nasabah" class="form-radio" />
                    <span class="text-white-dark">Sudah pernah menjadi nasabah</span>
                </label>
            </div>
        </div>

        <!-- Bertindak Untuk -->
        <div class="mt-4">
            <label class="font-semibold">Digunakan Untuk <span class="text-red-500">*</span></label>
            <div class="flex space-x-4">
                <label class="flex items-center cursor-pointer space-x-2">
                    <input type="radio" name="actingFor" v-model="actingFor" value="Diri sendiri" class="form-radio" />
                    <span class="text-white-dark">Diri sendiri</span>
                </label>
                <label class="flex items-center cursor-pointer space-x-2">
                    <input type="radio" name="actingFor" v-model="actingFor" value="Pihak yang diwakili" class="form-radio" />
                    <span class="text-white-dark">Pihak yang diwakili</span>
                </label>
            </div>
        </div>

        <!-- Input Fields -->
        <div class="mt-4 space-y-4">
            <div>
                <label class="block font-medium">Nama Sekolah</label>
                <input type="text" v-model="form.namaSekolah" class="w-full border rounded px-3 py-2 form-input" />
            </div>
            <div>
                <label class="block font-medium">Status Badan Usaha</label>
                <select
                    v-model="form.statusBadanUsaha"
                    id="StatusBadanUsaha"
                    class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200">
                    <option value="" disabled>Pilih Status Badan Usaha</option>
                    <option value="PT">PT</option>
                    <option value="CV">CV</option>
                    <option value="Yayasan">Yayasan</option>
                    <option value="Instansi Pemerintah">Instansi Pemerintah</option>
                    <option value="BUMN">BUMN</option>
                    <option value="BUMD">BUMD</option>
                    <option value="FA">FA</option>
                </select>
            </div>
            <div>
                <label class="block font-medium">Sektor Usaha</label>
                <input type="text" v-model="form.sektorUsaha" class="w-full border rounded px-3 py-2 form-input" />
            </div>
            <div>
                <label class="block font-medium">Alamat</label>
                <textarea v-model="form.alamat" class="w-full border rounded px-3 py-2 form-input"></textarea>
            </div>
        </div>

        <!-- Dropdown Dinamis -->
        <div class="mt-4 space-y-4">
            <div>
                <label class="block font-medium">Provinsi</label>
                <select v-model="form.provinsi" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200" @change="loadKota">
                    <option value="" disabled>Pilih Provinsi</option>
                    <option v-for="prov in provinsi" :key="prov.id" :value="prov.id">{{ prov.nama }}</option>
                </select>
            </div>
            <div>
                <label class="block font-medium">Kota/Kabupaten</label>
                <select v-model="form.kota" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200" :disabled="!form.provinsi" @change="loadKecamatan">
                    <option value="" disabled>Pilih Kota/Kabupaten</option>
                    <option v-for="kotaItem in kota" :key="kotaItem.id" :value="kotaItem.id">{{ kotaItem.nama }}</option>
                </select>
            </div>
            <div>
                <label class="block font-medium">Kecamatan</label>
                <select v-model="form.kecamatan" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200" :disabled="!form.kota" @change="loadKelurahan">
                    <option value="" disabled>Pilih Kecamatan</option>
                    <option v-for="kec in kecamatan" :key="kec.id" :value="kec.id">{{ kec.nama }}</option>
                </select>
            </div>
            <div>
                <label class="block font-medium">Kelurahan</label>
                <select v-model="form.kelurahan" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200" :disabled="!form.kecamatan">
                    <option value="" disabled>Pilih Kelurahan</option>
                    <option v-for="kel in kelurahan" :key="kel.id" :value="kel.id">{{ kel.nama }}</option>
                </select>
            </div>
        </div>

        <!-- RT/RW -->
        <div class="mt-4">
            <label class="font-semibold">RT/RW <span class="text-red-500">*</span></label>
            <div class="flex space-x-2">
                <input v-model="rt" type="text" class="border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200 w-1/2" />
                <input v-model="rw" type="text" class=" border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200 w-1/2" />
            </div>
        </div>

        <!-- Status Kelengkapan -->
        <div class="text-center mt-6">
            <span :class="isComplete ? 'text-green-500' : 'text-red-500'" class="font-semibold">
                {{ isComplete ? 'Form lengkap dan siap dikirim.' : 'Harap lengkapi semua Form.' }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, ref, watch } from 'vue';

    interface DropdownItem {
        id: string;
        nama: string;
    }

    export default defineComponent({
        name: 'DynamicForm',
        setup() {
            const form = reactive({
                namaSekolah: '',
                statusBadanUsaha: '',
                sektorUsaha: '',
                alamat: '',
                provinsi: '',
                kota: '',
                kecamatan: '',
                kelurahan: '',
            });

            const provinsi: DropdownItem[] = [
                { id: 'aceh', nama: 'Aceh' },
                { id: 'bali', nama: 'Bali' },
            ];

            const kota: DropdownItem[] = reactive([]);
            const kecamatan: DropdownItem[] = reactive([]);
            const kelurahan: DropdownItem[] = reactive([]);

            const loadKota = () => {
                kota.splice(0, kota.length);
                if (form.provinsi === 'aceh') kota.push({ id: 'kab-aceh-tengah', nama: 'Kabupaten Aceh Tengah' });
                if (form.provinsi === 'bali') kota.push({ id: 'denpasar', nama: 'Denpasar' });
            };

            const loadKecamatan = () => {
                kecamatan.splice(0, kecamatan.length);
                if (form.kota === 'kab-aceh-tengah') kecamatan.push({ id: 'kebayakan', nama: 'Kebayakan' });
            };

            const loadKelurahan = () => {
                kelurahan.splice(0, kelurahan.length);
                if (form.kecamatan === 'kebayakan') kelurahan.push({ id: 'bukit-sama', nama: 'Bukit Sama' });
            };

            const customerType = ref('');
            const actingFor = ref('');
            const rt = ref('');
            const rw = ref('');
            const isComplete = ref(false);

            const checkCompletion = () => {
                isComplete.value =
                    form.namaSekolah.trim() !== '' &&
                    form.statusBadanUsaha.trim() !== '' &&
                    form.sektorUsaha.trim() !== '' &&
                    form.alamat.trim() !== '' &&
                    form.provinsi !== '' &&
                    form.kota !== '' &&
                    form.kecamatan !== '' &&
                    form.kelurahan !== '' &&
                    rt.value.trim() !== '' &&
                    rw.value.trim() !== '';
            };

            watch(() => [form, rt.value, rw.value], checkCompletion, { deep: true });

            return {
                form,
                provinsi,
                kota,
                kecamatan,
                kelurahan,
                loadKota,
                loadKecamatan,
                loadKelurahan,
                customerType,
                actingFor,
                rt,
                rw,
                isComplete,
            };
        },
    });
</script>

<style scoped>
    .form-radio {
        @apply border-gray-300 text-blue-500 focus:ring focus:ring-blue-200;
    }
</style>
