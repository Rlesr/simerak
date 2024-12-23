<template>
    <div class="bg-white p-4 rounded-md shadow max-h-full max-w-full overflow-x-auto">
        <table class="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
                <!-- Header -->
                <tr>
                    <th rowspan="2" class="border p-4 font-medium text-gray-900">No Rekening</th>
                    <th rowspan="2" class="border p-4 font-medium text-gray-900">Nama Rekening</th>
                    <th colspan="2" v-for="date in filteredDates" :key="date" class="border p-4 font-medium text-gray-900">
                        {{ date }}
                    </th>
                </tr>
                <tr>
                    <th v-for="date in filteredDates" :key="'saldo-' + date" class="border p-4 font-medium text-gray-900">Saldo</th>
                    <th v-for="date in filteredDates" :key="'giro-' + date" class="border p-4 font-medium text-gray-900">Giro</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in filteredData" :key="index">
                    <td class="border p-4">{{ item.noRekening }}</td>
                    <td class="border p-4">{{ item.namaRekening }}</td>
                    <template v-for="date in filteredDates" :key="`data-${date}`">
                        <td class="border p-4">
                            {{ formatCurrency(item[`saldo${date.replace(/ /g, '')}`]) }}
                        </td>
                        <td class="border p-4">
                            {{ formatCurrency(item[`giro${date.replace(/ /g, '')}`]) }}
                        </td>
                    </template>
                </tr>
                <tr v-if="filteredData.length === 0">
                    <td colspan="2" class="border p-4 text-center">No Data Available</td>
                    <td class="border p-4 text-center" v-for="date in filteredDates" :key="'empty-saldo-' + date">-</td>
                    <td class="border p-4 text-center" v-for="date in filteredDates" :key="'empty-giro-' + date">-</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import dummyData from '../data/dummyData.json';

    export default defineComponent({
        name: 'TabelHarian',
        props: {
            filterTahun: { type: String, required: true },
            filterBulan: { type: String, required: true },
            selectedJenisRekening: { type: String, required: false, default: '' },
        },
        data() {
            return {
                data: dummyData,
            };
        },
        computed: {
            filteredDates() {
                const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
                const currentIndex = monthNames.findIndex((month) => month.toLowerCase() === this.filterBulan.toLowerCase());
                if (currentIndex === -1) return [];

                const previousMonthIndex = (currentIndex + 11) % 12; // Mundur 1 bulan
                const previousYear = currentIndex === 0 ? parseInt(this.filterTahun, 10) - 1 : parseInt(this.filterTahun, 10);

                return [
                    `27 ${monthNames[previousMonthIndex]} ${previousYear}`,
                    ...Array.from({ length: 26 }, (_, i) => `${i + 1} ${monthNames[currentIndex]} ${this.filterTahun}`),
                ];
            },
            filteredData() {
                return this.data
                    .filter((item) => {
                        if (this.selectedJenisRekening && this.selectedJenisRekening !== 'all') {
                            return item.jenisRekening === this.selectedJenisRekening;
                        }
                        return true;
                    })
                    .map((item) => {
                        const result: Record<string, any> = { noRekening: item.noRekening, namaRekening: item.namaRekening };
                        this.filteredDates.forEach((date) => {
                            const key = date.replace(/ /g, '');
                            result[`saldo${key}`] = item[`saldo${key}`] || '-';
                            result[`giro${key}`] = item[`giro${key}`] || '-';
                        });
                        return result;
                    });
            },
        },
        methods: {
            formatCurrency(value: number | string): string {
                if (value === '-' || value === null || value === undefined) {
                    return '-';
                }
                return new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                }).format(Number(value));
            },
        },
    });
</script>

<style></style>
