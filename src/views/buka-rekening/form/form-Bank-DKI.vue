<template>
    <div>
        <!-- Header -->
        <Header class="fixed-header border-1" />

        <div class="main-content">
            <!-- Sidebar -->
            <Sidebar class="fixed-sidebar" />

            <!-- Form Wizard Content -->
            <div class="form-wizard-container">
                <form-wizard shape="square" color="#4361ee" class="square" :stagger="100" @on-complete="onFinish">
                    <!-- Tabs di bagian atas -->
                    <tab-content title="umum" :before-change="() => validateFormsInTab('umum')">
                        <template #icon>
                            <i class="fas fa-user"></i>
                        </template>
                        <div class="form-1">
                            <!-- Tombol Dropdown -->
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(1)">Form Input Umum</button>

                            <!-- Konten Dropdown -->
                            <div v-show="dropdownStates[1]" class="p-4 border border-gray-300 rounded shadow">
                                <Form1
                                    :kodeSekolahProp="kodeSekolah"
                                    :namaSekolahProp="namaSekolah"
                                    @completion-change="(isComplete) => (formCompletionStates.umum.Form1 = isComplete)"
                                />
                            </div>
                        </div>

                        <div class="form-2">
                            <!-- Tombol Dropdown -->
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(2)">
                                Unggah Dokumen Kepala Sekolah
                            </button>

                            <!-- Konten Dropdown -->
                            <div v-show="dropdownStates[2]" class="p-4 border border-gray-300 rounded shadow">
                                <Form2 @completion-change="(isComplete) => (formCompletionStates.umum.Form2 = isComplete)" />
                            </div>
                        </div>

                        <div class="form-3">
                            <!-- Tombol Dropdown -->
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(3)">
                                Unggah Dokumen Bendahara Sekolah
                            </button>

                            <!-- Konten Dropdown -->
                            <div v-show="dropdownStates[3]" class="p-4 border border-gray-300 rounded shadow">
                                <Form3 @completion-change="(isComplete) => (formCompletionStates.umum.Form3 = isComplete)" />
                            </div>
                        </div>

                        <div class="form-4">
                            <!-- Tombol Dropdown -->
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(4)">
                                Unggah Dokumen Sekolah
                            </button>

                            <!-- Konten Dropdown -->
                            <div v-show="dropdownStates[4]" class="p-4 border border-gray-300 rounded shadow">
                                <Form4 @completion-change="(isComplete) => (formCompletionStates.umum.Form4 = isComplete)" />
                            </div>
                        </div>
                    </tab-content>

                    <tab-content title="kepalaSekolah" :before-change="() => validateFormsInTab('kepalaSekolah')">
                        <template #icon>
                            <i class="fas fa-user-tie"></i>
                        </template>
                        <div class="form-5">
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(0)">
                                Data Nasabah (CIF) Non Perorangan / Badan
                            </button>

                            <div v-show="dropdownStates[0]" class="p-4 border border-gray-300 rounded shadow">
                                <Form5 @completion-change="(isComplete) => (formCompletionStates.kepalaSekolah.Form1 = isComplete)" />
                            </div>
                        </div>

                        <div class="form-6">
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(5)">
                                Data Keuangan & Pengurus - Kepala
                            </button>

                            <div v-show="dropdownStates[5]" class="p-4 border border-gray-300 rounded shadow">
                                <Form6 @completion-change="(isComplete) => (formCompletionStates.kepalaSekolah.Form2 = isComplete)" />
                            </div>
                        </div>

                        <div class="form-7">
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(6)">
                                Data Keuangan rekening
                            </button>

                            <div v-show="dropdownStates[6]" class="p-4 border border-gray-300 rounded shadow">
                                <Form7 @completion-change="(isComplete) => (formCompletionStates.kepalaSekolah.Form3 = isComplete)" />
                            </div>
                        </div>
                        <div class="form-8">
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(7)">
                                Data Pembukaan Rekening Baru
                            </button>

                            <div v-show="dropdownStates[7]" class="p-4 border border-gray-300 rounded shadow">
                                <Form8 @completion-change="(isComplete) => (formCompletionStates.kepalaSekolah.Form4 = isComplete)" />
                            </div>
                        </div>

                        <div class="form-9">
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(8)">
                                Pembukaan Rekening GIRO Dan Deposito - Khusus GIRO
                            </button>

                            <div v-show="dropdownStates[8]" class="p-4 border border-gray-300 rounded shadow">
                                <Form9 @completion-change="(isComplete) => (formCompletionStates.kepalaSekolah.Form5 = isComplete)" />
                            </div>
                        </div>

                        <div class="form-10">
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(9)">
                                Pernyataan dan Persetujuan Nasabah
                            </button>

                            <div v-show="dropdownStates[9]" class="p-4 border border-gray-300 rounded shadow">
                                <Form10 @completion-change="(isComplete) => (formCompletionStates.kepalaSekolah.Form6 = isComplete)" />
                            </div>
                        </div>
                    </tab-content>

                    <tab-content title="bendahara" :before-change="() => validateFormsInTab('bendahara')">
                        <template #icon>
                            <i class="fas fa-user-shield"></i>
                        </template>
                        <div class="form-11">
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(10)">
                                Data Nasabah (CIF) Perorangan
                            </button>

                            <div v-show="dropdownStates[10]" class="p-4 border border-gray-300 rounded shadow">
                                <Form11 @completion-change="(isComplete) => (formCompletionStates.bendahara.Form1 = isComplete)" />
                            </div>
                        </div>

                        <div class="form-12">
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(11)">Data Pribadi</button>

                            <div v-show="dropdownStates[11]" class="p-4 border border-gray-300 rounded shadow">
                                <Form12 @completion-change="(isComplete) => (formCompletionStates.bendahara.Form2 = isComplete)" />
                            </div>
                        </div>

                        <div class="form-13">
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(12)">
                                Data Alamat Tempat Tinggal
                            </button>

                            <div v-show="dropdownStates[12]" class="p-4 border border-gray-300 rounded shadow">
                                <Form13 @completion-change="(isComplete) => (formCompletionStates.bendahara.Form3 = isComplete)" />
                            </div>
                        </div>
                        <div class="form-14">
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(13)">Data pekerjaan</button>

                            <div v-show="dropdownStates[13]" class="p-4 border border-gray-300 rounded shadow">
                                <Form14 @completion-change="(isComplete) => (formCompletionStates.bendahara.Form4 = isComplete)" />
                            </div>
                        </div>
                        <div class="form-15">
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(14)">
                                Pihak yang Dapat Dihubungi dalam Keadaan Darurat
                            </button>

                            <div v-show="dropdownStates[14]" class="p-4 border border-gray-300 rounded shadow">
                                <Form15 @completion-change="(isComplete) => (formCompletionStates.bendahara.Form5 = isComplete)" />
                            </div>
                        </div>
                        <div class="form-16">
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(15)">Data Keuangan</button>

                            <div v-show="dropdownStates[15]" class="p-4 border border-gray-300 rounded shadow">
                                <Form16 @completion-change="(isComplete) => (formCompletionStates.bendahara.Form6 = isComplete)" />
                            </div>
                        </div>
                        <div class="form-17">
                            <button class="w-full bg-[#054083] text-white font-bold py-3 rounded mb-4" @click="toggleDropdown(16)">
                                Pernyataan dan Persetujuan Nasabah
                            </button>

                            <div v-show="dropdownStates[16]" class="p-4 border border-gray-300 rounded shadow">
                                <Form17 @completion-change="(isComplete) => (formCompletionStates.bendahara.Form7 = isComplete)" />
                            </div>
                        </div>
                    </tab-content>

                    <tab-content title="tandaTangan" :before-change="() => validateFormsInTab('tandaTangan')">
                        <template #icon>
                            <i class="fas fa-pen"></i>
                        </template>
                        <div class="form-18">
                            <Form18 @completion-change="(isComplete) => (formCompletionStates.tandaTangan.Form1 = isComplete)" />
                        </div>
                    </tab-content>
                    <div
                        v-if="showConfirmationCard"
                        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 p-8 rounded-xl shadow-xl w-96 opacity-0 scale-90 transition-all duration-300"
                        :class="{ 'opacity-100 scale-100': showConfirmationCard }"
                    >
                        <div class="text-center">
                            <p class="mb-6 text-lg font-semibold">Apakah Anda yakin data yang diisi sudah benar?</p>
                            <div class="flex gap-4 justify-center">
                                <button class="bg-green-500 text-white py-2 px-5 rounded-lg hover:bg-green-600 transition" @click="confirmFinish">
                                    Ya, Lanjutkan
                                </button>
                                <button class="bg-red-500 text-white py-2 px-5 rounded-lg hover:bg-red-600 transition" @click="closeConfirmationCard">
                                    Tidak, Periksa Lagi
                                </button>
                            </div>
                        </div>
                    </div>
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
    import { reactive, ref, computed } from 'vue';
    import Form1 from '@/views/buka-rekening/form/form-component/form-DKI-1.vue';
    import Form2 from '@/views/buka-rekening/form/form-component/form-DKI-2.vue';
    import Form3 from '@/views/buka-rekening/form/form-component/form-DKI-3.vue';
    import Form4 from '@/views/buka-rekening/form/form-component/form-DKI-4.vue';
    import Form5 from '@/views/buka-rekening/form/form-component/form-DKI-5.vue';
    import Form6 from '@/views/buka-rekening/form/form-component/form-DKI-6.vue';
    import Form7 from '@/views/buka-rekening/form/form-component/form-DKI-7.vue';
    import Form8 from '@/views/buka-rekening/form/form-component/form-DKI-8.vue';
    import Form9 from '@/views/buka-rekening/form/form-component/form-DKI-9.vue';
    import Form10 from '@/views/buka-rekening/form/form-component/form-DKI-10.vue';
    import Form11 from '@/views/buka-rekening/form/form-component/form-DKI-11.vue';
    import Form12 from '@/views/buka-rekening/form/form-component/form-DKI-12.vue';
    import Form13 from '@/views/buka-rekening/form/form-component/form-DKI-13.vue';
    import Form14 from '@/views/buka-rekening/form/form-component/form-DKI-14.vue';
    import Form15 from '@/views/buka-rekening/form/form-component/form-DKI-15.vue';
    import Form16 from '@/views/buka-rekening/form/form-component/form-DKI-16.vue';
    import Form17 from '@/views/buka-rekening/form/form-component/form-DKI-17.vue';
    import Form18 from '@/views/buka-rekening/form/form-component/form-DKI-18.vue';

    export default {
        components: {
            Sidebar,
            Header,
            Form1,
            Form2,
            Form3,
            Form4,
            Form5,
            Form6,
            Form7,
            Form8,
            Form9,
            Form10,
            Form11,
            Form12,
            Form13,
            Form14,
            Form15,
            Form16,
            Form17,
            Form18,
            FormWizard,
            TabContent,
        },
        name: 'CombinedLayout',

        setup() {
            const showConfirmationCard = ref(false); // Kontrol visibilitas kartu konfirmasi

            const onFinish = () => {
                // Ketika tombol Finish ditekan, tampilkan kartu konfirmasi
                if (formCompletionStates.tandaTangan) {
                    showConfirmationCard.value = true;
                } else {
                    alert('Kolom belum terisi semua!');
                }
            };

            const confirmFinish = () => {
                // Tutup kartu konfirmasi dan arahkan ke route /buka
                showConfirmationCard.value = false;
                window.location.href = '/buka';
            };

            const closeConfirmationCard = () => {
                // Tutup kartu konfirmasi
                showConfirmationCard.value = false;
            };

            const dropdownStates = ref<boolean[]>(Array(18).fill(false));
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
            const formCompletionStates = reactive({
                umum: { Form1: false, Form2: false, Form3: false, Form4: false },
                kepalaSekolah: { Form1: false, Form2: false, Form3: false, Form4: false, Form5: false, Form6: false },
                bendahara: { Form1: false, Form2: false, Form3: false, Form4: false, Form5: false, Form6: false, Form7: false },
                tandaTangan: { Form1: false },
            });
            const validateFormsInTab = (tab: string) => {
                const forms = formCompletionStates[tab];
                const incompleteForms = Object.entries(forms)
                    .map(([formName, isComplete], index) => ({ name: `Form ${index + 1}`, isComplete }))
                    .filter(({ isComplete }) => !isComplete);

                if (incompleteForms.length > 0) {
                    const formNames = incompleteForms.map(({ name }) => name).join('\n- ');
                    alert(`Harap lengkapi form berikut di tab "${tab}":\n- ${formNames}`);
                    return false;
                }
                return true;
            };

            const nextTab = (tab: string, moveNext: Function) => {
                if (validateFormsInTab(tab)) {
                    moveNext();
                } else {
                    alert('Kolom belum terisi semua!');
                }
            };

            const closeAllDropdowns = () => {
                dropdownStates.value = dropdownStates.value.map(() => false);
            };
            const kodeSekolah = '12345';
            const namaSekolah = 'Sekolah Contoh';

            return {
                dropdownStates,
                toggleDropdown,
                closeAllDropdowns,
                kodeSekolah,
                namaSekolah,
                formCompletionStates,
                validateFormsInTab,
                nextTab,
                showConfirmationCard,
                onFinish,
                confirmFinish,
                closeConfirmationCard,
            };
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
