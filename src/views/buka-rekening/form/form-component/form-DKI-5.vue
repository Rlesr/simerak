<template>
    <div class="p-6 mx-auto">
        <form @submit.prevent="handleSubmit" class="space-y-4">
            <form class="">
                <label class="font-semibold">Jenis Nasabah <span class="text-red-500">*</span></label>
                <div class="flex space-x-4">
                    <label class="flex items-center cursor-pointer space-x-2">
                        <input type="radio" name="custom_radio2" class="form-radio" checked />
                        <span class="text-white-dark">Nasabah Baru</span>
                    </label>
                    <label class="flex items-center cursor-pointer space-x-2">
                        <input type="radio" name="custom_radio2" class="form-radio" />
                        <span class="text-white-dark">Sudah pernah menjadi nasabah</span>
                    </label>
                </div>
            </form>

            <!-- Bertindak Untuk -->
            <form class="">
                <label class="font-semibold">Digunakan Untuk <span class="text-red-500">*</span></label>
                <div class="flex space-x-4">
                    <label class="flex items-center cursor-pointer space-x-2">
                        <input type="radio" name="custom_radio2" class="form-radio" checked />
                        <span class="text-white-dark">Diri sendiri</span>
                    </label>
                    <label class="flex items-center cursor-pointer space-x-2">
                        <input type="radio" name="custom_radio2" class="form-radio" />
                        <span class="text-white-dark">Pihak yang diwakili</span>
                    </label>
                </div>
            </form>

            <div>
                <label class="block font-medium">Nama Sekolah</label>
                <input type="text" v-model="form.namaSekolah" class="w-full border rounded px-3 py-2 form-input" />
            </div>

            <div>
                <label class="block font-medium">Status Badan Usaha</label>
                <select v-model="form.statusBadanUsaha" class="w-full border rounded px-3 py-2 form-input">
                    <option value="" disabled>Pilih Status Badan Usaha</option>
                    <option value="PT">PT</option>
                    <option value="CV">CV</option>
                    <option value="Koperasi">Yayasan</option>
                    <option value="Koperasi">Instansi Pemerintah</option>
                    <option value="Koperasi">BUMN</option>
                    <option value="Koperasi">BUMD</option>
                    <option value="Koperasi">CV</option>
                    <option value="Koperasi">FA</option>
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

            <!-- Dropdown Dinamis -->
            <div>
                <label class="block font-medium">Provinsi</label>
                <select v-model="form.provinsi" class="w-full border rounded px-3 py-2 form-input" @change="loadKota">
                    <option value="" disabled>Pilih Provinsi</option>
                    <option v-for="prov in provinsi" :key="prov.id" :value="prov.id">{{ prov.nama }}</option>
                </select>
            </div>

            <div>
                <label class="block font-medium">Kota/Kabupaten</label>
                <select v-model="form.kota" class="w-full border rounded px-3 py-2 form-input" :disabled="!form.provinsi" @change="loadKecamatan">
                    <option value="" disabled>Pilih Kota/Kabupaten</option>
                    <option v-for="kotaItem in kota" :key="kotaItem.id" :value="kotaItem.id">{{ kotaItem.nama }}</option>
                </select>
            </div>

            <div>
                <label class="block font-medium">Kecamatan</label>
                <select v-model="form.kecamatan" class="w-full border rounded px-3 py-2 form-input" :disabled="!form.kota" @change="loadKelurahan">
                    <option value="" disabled>Pilih Kecamatan</option>
                    <option v-for="kec in kecamatan" :key="kec.id" :value="kec.id">{{ kec.nama }}</option>
                </select>
            </div>

            <div>
                <label class="block font-medium">Kelurahan</label>
                <select v-model="form.kelurahan" class="w-full border rounded px-3 py-2 form-input" :disabled="!form.kecamatan">
                    <option value="" disabled >Pilih Kelurahan</option>
                    <option v-for="kel in kelurahan" :key="kel.id" :value="kel.id">{{ kel.nama }}</option>
                </select>
            </div>

            <div>
                <label class="font-semibold">RT/RW <span class="text-red-500">*</span></label>
                <div class="flex space-x-2 mt-2">
                    <input v-model="rt" type="text" placeholder="" class="form-input w-1/2 mr-[5px]" />
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[20px]" viewBox="0 0 15 15">
                        <path fill="currentColor" fill-rule="evenodd" d="M4.109 14L9.466 1h1.352L5.46 14z" clip-rule="evenodd" />
                    </svg>
                    <input v-model="rw" type="text" placeholder="" class="form-input w-1/2 ml-[5px]" />
                </div>
            </div>

            <div v-for="(field, index) in fields" :key="index" class="space-y-1">
                <label class="font-semibold"> {{ field.label }} <span class="text-red-500">*</span> </label>
                <input v-model="field.value" :type="field.type"  class="form-input w-full mt-2" />
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, watch, ref } from 'vue';

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
                form.kota = '';
                form.kecamatan = '';
                form.kelurahan = '';
                kota.splice(0, kota.length); // Reset data
                if (form.provinsi === 'aceh') {
                    kota.push({ id: 'kab-aceh-tengah', nama: 'Kabupaten Aceh Tengah' });
                } else if (form.provinsi === 'bali') {
                    kota.push({ id: 'denpasar', nama: 'Denpasar' });
                }
            };

            const loadKecamatan = () => {
                form.kecamatan = '';
                form.kelurahan = '';
                kecamatan.splice(0, kecamatan.length); // Reset data
                if (form.kota === 'kab-aceh-tengah') {
                    kecamatan.push({ id: 'kebayakan', nama: 'Kebayakan' });
                }
            };

            const loadKelurahan = () => {
                form.kelurahan = '';
                kelurahan.splice(0, kelurahan.length); // Reset data
                if (form.kecamatan === 'kebayakan') {
                    kelurahan.push({ id: 'bukit-sama', nama: 'Bukit Sama' });
                }
            };

            const handleSubmit = () => {
                console.log('Form Submitted:', form);
            };

            const customerType = ref<string>('Nasabah Baru');
            const actingFor = ref<string>('Diri Sendiri');

            const rt = ref<string>('');
            const rw = ref<string>('');

            watch(customerType, () => {
                actingFor.value = ''; // Reset actingFor jika customerType berubah
            });

            watch(actingFor, () => {
                customerType.value = ''; // Reset customerType jika actingFor berubah
            });

            // Data field lainnya
            const fields = reactive([
                { label: 'Kode Pos', value: '', type: 'text' },
                { label: 'Email', value: '', type: 'email' },
                { label: 'No. Telp', value: '', type: 'text' },
                { label: 'No. Fax', value: '', type: 'text' },
                { label: 'NPWP', value: '', type: 'text' },
            ]);

            const isComplete = ref<boolean>(false);

            // Fungsi untuk mengecek kelengkapan form
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

                // Pastikan juga semua field dinamis terisi
                fields.forEach((field) => {
                    if (!field.value.trim()) {
                        isComplete.value = false;
                    }
                });
            };

            // Pantau perubahan pada form dan fields
            watch(form, checkCompletion, { deep: true });
            watch(rt, checkCompletion);
            watch(rw, checkCompletion);
            fields.forEach((field, index) => {
                watch(() => field.value, checkCompletion);
            });

            return {
                form,
                provinsi,
                kota,
                kecamatan,
                kelurahan,
                loadKota,
                loadKecamatan,
                loadKelurahan,
                handleSubmit,
                customerType,
                actingFor,
                rt,
                rw,
                fields,
                isComplete,
            };
        },
    });
</script>


<style scoped>
    .form-radio {
        @apply border-gray-300 text-blue-500 focus:ring focus:ring-blue-200;
    }

    .form-input {
        @apply border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200;
    }
</style>
