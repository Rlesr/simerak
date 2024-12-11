<template>
    <div v-if="isModalVisible" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-md shadow-lg p-6 w-[80%] max-w-4xl">
            <!-- Header -->
            <div class="flex justify-between items-center border-b pb-4">
                <h2 class="text-xl font-semibold">Master Bunga Giro</h2>
                <button @click="closeModal" class="text-gray-600 hover:text-gray-800">&times;</button>
            </div>

            <!-- Content -->
            <div class="overflow-x-auto my-4">
                <div class="mb-3 flex justify-center items-center">
                    <a href="/home/laporan/giro-bdki/add/" class="bg-[#7EA5EC] text-[#054083] w-full px-3 py-2 text-sm text-center transform scale-125 border border-[#7EA5EC] rounded-md">
                        Tambah
                    </a>
                </div>

                <table class="table-auto w-full border-collapse border border-gray-300">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left">No</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Nominal Batas 1</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Bunga 1(%)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Nominal Batas 2</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Bunga 2(%)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Nominal Batas 3</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Bunga 3(%)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Nominal Batas 4</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Bunga 4(%)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Nominal Batas 5</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Bunga 5(%)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Tanggal Awal</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Tanggal Akhir</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in bungaGiroData" :key="index" class="odd:bg-white even:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-2">{{ index + 1 }}</td>
                            <td class="border border-gray-300 px-4 py-2">{{ item.nominalBatas1 }}</td>
                            <td class="border border-gray-300 px-4 py-2">{{ item.bunga1 }}</td>
                            <td class="border border-gray-300 px-4 py-2">{{ item.nominalBatas2 }}</td>
                            <td class="border border-gray-300 px-4 py-2">{{ item.bunga2 }}</td>
                            <td class="border border-gray-300 px-4 py-2">{{ item.nominalBatas3 }}</td>
                            <td class="border border-gray-300 px-4 py-2">{{ item.bunga3 }}</td>
                            <td class="border border-gray-300 px-4 py-2">{{ item.nominalBatas4 }}</td>
                            <td class="border border-gray-300 px-4 py-2">{{ item.bunga4 }}</td>
                            <td class="border border-gray-300 px-4 py-2">{{ item.nominalBatas5 }}</td>
                            <td class="border border-gray-300 px-4 py-2">{{ item.bunga5 }}</td>
                            <td class="border border-gray-300 px-4 py-2">{{ item.tanggalAwal }}</td>
                            <td class="border border-gray-300 px-4 py-2">{{ item.tanggalAkhir }}</td>
                            <td class="border border-gray-300 px-4 py-2">{{ item.status }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Footer -->
            <div class="flex justify-end mt-4">
                <button @click="closeModal" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Tutup</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isModalVisible: {
                type: Boolean,
                required: true,
            },
        },
        data() {
            return {
                bungaGiroData: [
                    {
                        nominalBatas1: '0 s/d 100000000',
                        bunga1: '0',
                        nominalBatas2: '100000000 s/d 1000000000',
                        bunga2: '0.5',
                        nominalBatas3: '1000000000 s/d 2500000000',
                        bunga3: '0.75',
                        nominalBatas4: '2500000000 s/d 5000000000',
                        bunga4: '1',
                        nominalBatas5: 'Lebih Besar Dari 5000000000',
                        bunga5: '2',
                        tanggalAwal: '',
                        tanggalAkhir: '',
                        status: 'Default',
                    },
                ],
            };
        },
        methods: {
            closeModal() {
                this.$emit('close');
            },
        },
    };
</script>

<style scoped>
    /* Tambahkan gaya jika diperlukan */
</style>
