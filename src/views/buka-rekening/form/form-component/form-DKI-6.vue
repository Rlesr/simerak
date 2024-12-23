<template>
    <div class="p-6">
        <!-- Dropdown 1 -->
        <div class="mb-4">
            <p class="text-center font-bold text-3xl">Data Keuangan</p>
            <label for="sumber-dana" class="block font-medium"> Sumber Dana <span class="text-red-500">*</span> </label>
            <div class="relative">
                <select
                    id="sumber-dana"
                    v-model="selectedSource"
                    class="block w-full pl-3 pr-10 py-2  border-gray-30  border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200;"
                >
                    <option value="" class="text" disabled>Pilih Sumber Dana</option>
                    <option v-for="option in fundingSources" :key="option.value" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>
            </div>
        </div>

        <!-- Dropdown 2 -->
        <div class="mb-4 space-y-[10px]">
            
            <div class="relative">
                <label for="total-pendapatan" class="block font-medium"> Total Pendapatan/Tahun <span class="text-red-500">*</span> </label>
                <select
                    id="total-pendapatan"
                    v-model="selectedIncome"
                    class="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200;"
                >
                    <option value="" disabled>Pilih Total Pendapatan/Tahun</option>
                    <option v-for="option in annualIncome" :key="option.value" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>
            </div>
            <p class="text-center font-bold text-3xl mt-[30px]">Data Pengurus Kepala</p>
            <div>
                <label class="block font-medium">Nama Kepala</label>
                <input type="text" v-model="form.namaKepala" class="w-full border rounded px-3 py-2 form-input" />
            </div>

            <div>
                <label class="block font-medium">NIK</label>
                <input type="text" v-model="form.NIK" class="w-full border rounded px-3 py-2 form-input" />
            </div>

            <div>
                <label class="block font-medium">Jabatan</label>
                <input type="text" v-model="form.Jabatan" class="w-full border rounded px-3 py-2 form-input" />
            </div>

            <div>
                <label class="block font-medium">Nomor Telp/HP</label>
                <input type="text" v-model="form.NoHP" class="w-full border rounded px-3 py-2 form-input" />
            </div>

            <div>
                <label class="block font-medium">No.SK Kepala</label>
                <input type="text" v-model="form.NoSK" class="w-full border rounded px-3 py-2 form-input" />
            </div>

            <div class="w-full mt-1">
                <label class="block font-medium">Tanggal SK Kepala</label>
                <input
                    id="tanggal-sk"
                    type="text"
                    ref="flatpickrTanggalSK"
                    class="border rounded p-2 w-full form-input"
                    placeholder="Pilih Tanggal SK"
                />
            </div>

            <div>
                <label class="block font-medium">Tempat</label>
                <input type="text" v-model="form.Tempat" class="w-full border rounded px-3 py-2 form-input" />
            </div>
        </div>
        <div class="text-center mt-6">
            <span :class="isComplete ? 'text-green-500' : 'text-red-500'" class="font-semibold">
                {{ isComplete ? 'Form lengkap dan siap dikirim.' : 'Harap lengkapi semua Form.' }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch, onMounted } from 'vue';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

export default defineComponent({
    name: 'DropdownExample',
    emits: ['completion-change'], // Emit untuk perubahan status kelengkapan
    setup(_, { emit }) {
        const fundingSources = [
            { value: 'hasil usaha', label: 'Hasil usaha' },
            { value: 'lainnya', label: 'Lainnya' },
        ];

        const annualIncome = [
            { value: 'low', label: '< 100 Juta' },
            { value: 'medium', label: '100 Jt <= 500 Jt' },
            { value: 'medium high', label: '500 Jt <= 1 M' },
            { value: 'high', label: '> 1 M' },
        ];

        const selectedSource = ref('');
        const selectedIncome = ref('');
        const flatpickrTanggalSK = ref<HTMLInputElement | null>(null);

        const form = reactive({
            namaKepala: '',
            NIK: '',
            Jabatan: '',
            NoHP: '',
            NoSK: '',
            TanggalSK: '',
            Tempat: '',
        });

        const isComplete = ref(false);

        const checkCompletion = () => {
            isComplete.value =
                selectedSource.value.trim() !== '' &&
                selectedIncome.value.trim() !== '' &&
                form.namaKepala.trim() !== '' &&
                form.NIK.trim() !== '' &&
                form.Jabatan.trim() !== '' &&
                form.NoHP.trim() !== '' &&
                form.NoSK.trim() !== '' &&
                form.TanggalSK.trim() !== '' &&
                form.Tempat.trim() !== '';

            // Emit perubahan kelengkapan
            emit('completion-change', isComplete.value);
        };

        // Watchers untuk memantau perubahan
        watch(
            [
                selectedSource,
                selectedIncome,
                () => form.namaKepala,
                () => form.NIK,
                () => form.Jabatan,
                () => form.NoHP,
                () => form.NoSK,
                () => form.TanggalSK,
                () => form.Tempat,
            ],
            checkCompletion,
            { deep: true }
        );

        onMounted(() => {
            if (flatpickrTanggalSK.value) {
                flatpickr(flatpickrTanggalSK.value, {
                    onChange: (selectedDates) => {
                        form.TanggalSK = selectedDates[0]?.toISOString() || '';
                        checkCompletion();
                    },
                });
            }
        });

        return {
            form,
            fundingSources,
            annualIncome,
            selectedSource,
            selectedIncome,
            flatpickrTanggalSK,
            isComplete,
        };
    },
});
</script>


<style scoped>

</style>
