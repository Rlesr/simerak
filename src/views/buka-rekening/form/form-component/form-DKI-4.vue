<template>
    <div class="space-y-4">
        <!-- Input SP -->
        <div class="flex items-center space-x-2">
            <input
                type="text"
                :value="files.SP || 'Surat Pengajuan'"
                readonly
                class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
            />
            <label
                for="sp-upload"
                class="w-[40px] h-[40px] flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-md cursor-pointer transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600">
                    <path
                        fill="currentColor"
                        d="M1280 1408q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m256 0q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m128-224v320q0 40-28 68t-68 28H96q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68m-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19H704q-26 0-45-19t-19-45V576H384q-42 0-59-40q-17-39 14-69L787 19q18-19 45-19t45 19l448 448q31 30 14 69"
                    />
                </svg>
            </label>
            <input id="sp-upload" type="file" class="hidden" accept=".pdf" @change="handleFileChange('SP', $event)" />
        </div>

        <!-- Input AP -->
        <div class="flex items-center space-x-2">
            <input
                type="text"
                :value="files.AP || 'Akta Pendirian'"
                readonly
                class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
            />
            <label
                for="ap-upload"
                class="w-[40px] h-[40px] flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-md cursor-pointer transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600">
                    <path
                        fill="currentColor"
                        d="M1280 1408q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m256 0q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m128-224v320q0 40-28 68t-68 28H96q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68m-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19H704q-26 0-45-19t-19-45V576H384q-42 0-59-40q-17-39 14-69L787 19q18-19 45-19t45 19l448 448q31 30 14 69"
                    />
                </svg>
            </label>
            <input id="ap-upload" type="file" class="hidden" accept=".pdf" @change="handleFileChange('AP', $event)" />
        </div>

        <!-- Input NPWPS -->
        <div class="flex items-center space-x-2">
            <input
                type="text"
                :value="files.NPWPS || 'Kartu NPWP Badan'"
                readonly
                class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
            />
            <label
                for="npwp-badan-upload"
                class="w-[40px] h-[40px] flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-md cursor-pointer transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600">
                    <path
                        fill="currentColor"
                        d="M1280 1408q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m256 0q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m128-224v320q0 40-28 68t-68 28H96q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68m-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19H704q-26 0-45-19t-19-45V576H384q-42 0-59-40q-17-39 14-69L787 19q18-19 45-19t45 19l448 448q31 30 14 69"
                    />
                </svg>
            </label>
            <input id="npwp-badan-upload" type="file" class="hidden" accept=".pdf" @change="handleFileChange('NPWPS', $event)" />
        </div>

        <!-- Input SIO -->
        <div class="flex items-center space-x-2">
            <input
                type="text"
                :value="files.SIO || 'Surat Izin Operasional'"
                readonly
                class="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-not-allowed"
            />
            <label
                for="sio-upload"
                class="w-[40px] h-[40px] flex items-center justify-center bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white rounded-md cursor-pointer transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600">
                    <path
                        fill="currentColor"
                        d="M1280 1408q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m256 0q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m128-224v320q0 40-28 68t-68 28H96q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68m-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19H704q-26 0-45-19t-19-45V576H384q-42 0-59-40q-17-39 14-69L787 19q18-19 45-19t45 19l448 448q31 30 14 69"
                    />
                </svg>
            </label>
            <input id="sio-upload" type="file" class="hidden" accept=".pdf" @change="handleFileChange('SIO', $event)" />
        </div>
    </div>
</template>

<script lang="ts">
import { reactive, computed } from 'vue';

export default {
    setup() {
        const files = reactive<{ [key: string]: string | null }>({
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

        const allFilesUploaded = computed(() => {
            return Object.values(files).every(file => file !== null);
        });

        return {
            files,
            handleFileChange,
            allFilesUploaded,
        };
    },
};
</script>
