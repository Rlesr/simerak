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
                <select v-model="form.statusBadanUsaha" class="w-full border rounded px-3 py-2">
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
                <select
                    v-model="form.provinsi"
                    class="w-full border rounded px-3 py-2"
                    @change="
                        () => {
                            loadKota();
                            resetDependentFields('provinsi');
                        }
                    "
                >
                    <option value="" disabled>Pilih Provinsi</option>
                    <option v-for="prov in provinsi" :key="prov.id" :value="prov.id">{{ prov.nama }}</option>
                </select>
            </div>
            <div>
                <label class="block font-medium">Kota/Kabupaten</label>
                <select
                    v-model="form.kota"
                    class="w-full border rounded px-3 py-2"
                    :disabled="!form.provinsi"
                    @change="
                        () => {
                            loadKecamatan();
                            resetDependentFields('kota');
                        }
                    "
                >
                    <option value="" disabled>Pilih Kota/Kabupaten</option>
                    <option v-for="kotaItem in kota" :key="kotaItem.id" :value="kotaItem.id">{{ kotaItem.nama }}</option>
                </select>
            </div>
            <div>
                <label class="block font-medium">Kecamatan</label>
                <select
                    v-model="form.kecamatan"
                    class="w-full border rounded px-3 py-2"
                    :disabled="!form.kota"
                    @change="
                        () => {
                            loadKelurahan();
                            resetDependentFields('kecamatan');
                        }
                    "
                >
                    <option value="" disabled>Pilih Kecamatan</option>
                    <option v-for="kec in kecamatan" :key="kec.id" :value="kec.id">{{ kec.nama }}</option>
                </select>
            </div>
            <div>
                <label class="block font-medium">Kelurahan</label>
                <select v-model="form.kelurahan" class="w-full border rounded px-3 py-2" :disabled="!form.kecamatan">
                    <option value="" disabled>Pilih Kelurahan</option>
                    <option v-for="kel in kelurahan" :key="kel.id" :value="kel.id">{{ kel.nama }}</option>
                </select>
            </div>
        </div>

        <!-- RT/RW -->
        <div class="mt-4">
            <label class="font-semibold">RT/RW <span class="text-red-500">*</span></label>
            <div class="flex space-x-2">
                <input v-model="rt" type="text" class="w-1/2 border rounded px-3 py-2 form-input" />
                <input v-model="rw" type="text" class="w-1/2 border rounded px-3 py-2 form-input" />
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

    export default defineComponent({
        name: 'DynamicForm',
        emits: ['completion-change'],
        setup(_, { emit }) {
            const form = reactive<{
                namaSekolah: string;
                statusBadanUsaha: string;
                sektorUsaha: string;
                alamat: string;
                provinsi: string;
                kota: string;
                kecamatan: string;
                kelurahan: string;
            }>({
                namaSekolah: '',
                statusBadanUsaha: '',
                sektorUsaha: '',
                alamat: '',
                provinsi: '',
                kota: '',
                kecamatan: '',
                kelurahan: '',
            });

            interface DropdownItem {
                id: string;
                nama: string;
            }
            const customerType = ref(''); // Properti untuk validasi
            const actingFor = ref('');
            const rt = ref('');
            const rw = ref('');
            const isComplete = ref(false);

            // Dropdown Dinamis
            const provinsi = ref([
                { id: 'aceh', nama: 'Aceh' },
                { id: 'bali', nama: 'Bali' },
            ]);
            const kota = ref<DropdownItem[]>([]);
            const kecamatan = ref<DropdownItem[]>([]);
            const kelurahan = ref<DropdownItem[]>([]);

            const loadKota = () => {
                kota.value =
                    form.provinsi === 'aceh'
                        ? [{ id: 'kab-aceh-tengah', nama: 'Kabupaten Aceh Tengah' }]
                        : form.provinsi === 'bali'
                        ? [{ id: 'denpasar', nama: 'Denpasar' }]
                        : [];
            };

            const loadKecamatan = () => {
                kecamatan.value = form.kota === 'kab-aceh-tengah' ? [{ id: 'kebayakan', nama: 'Kebayakan' }] : []; // Pastikan selalu array
            };

            const loadKelurahan = () => {
                kelurahan.value = form.kecamatan === 'kebayakan' ? [{ id: 'bukit-sama', nama: 'Bukit Sama' }] : []; // Pastikan selalu array
            };

            const resetDependentFields = (field: string) => {
                if (field === 'provinsi') {
                    form.kota = '';
                    form.kecamatan = '';
                    form.kelurahan = '';
                } else if (field === 'kota') {
                    form.kecamatan = '';
                    form.kelurahan = '';
                } else if (field === 'kecamatan') {
                    form.kelurahan = '';
                }
            };

            const requiredFields = ['namaSekolah', 'statusBadanUsaha', 'sektorUsaha', 'alamat', 'provinsi', 'kota', 'kecamatan', 'kelurahan'];

            const checkCompletion = () => {
                isComplete.value =
                    requiredFields.every((field) => form[field].trim() !== '') &&
                    customerType.value.trim() !== '' &&
                    actingFor.value.trim() !== '' &&
                    rt.value.trim() !== '' &&
                    rw.value.trim() !== '';
                emit('completion-change', isComplete.value);
            };

            watch(() => form, checkCompletion, { deep: true });
            watch(rt, checkCompletion);
            watch(rw, checkCompletion);
            watch(customerType, checkCompletion);
            watch(actingFor, checkCompletion);

            return {
                form,
                customerType,
                actingFor,
                rt,
                rw,
                isComplete,
                provinsi,
                kota,
                kecamatan,
                kelurahan,
                loadKota,
                loadKecamatan,
                loadKelurahan,
                resetDependentFields,
            };
        },
    });
</script>
