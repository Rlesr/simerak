<template>
    <button @click="exportToCSV" id="csv-btn" class="bg-[#7EA5EC] text-[#054083] px-4 py-2 text-sm border-[#7EA5EC]">CSV</button>
    <button @click="exportToPDF" id="pdf-btn" class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">PDF</button>
    <button @click="exportToExcel" id="excel-btn" class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">Excel</button>
    <table id="myTable" class="min-w-full border border-gray-300">
        <thead>
            <tr>
                <th class="border-b p-4 font-medium text-gray-900">No</th>
                <th class="border-b p-4 font-medium text-gray-900">Nomor Rekening</th>
                <th class="border-b p-4 font-medium text-gray-900">Nama Rekening</th>
                <th class="border-b p-4 font-medium text-gray-900">Bulan</th>
                <th class="border-b p-4 font-medium text-gray-900">Tahun</th>
                <th class="border-b p-4 font-medium text-gray-900">Jumlah Awal</th>
                <th class="border-b p-4 font-medium text-gray-900">Jumlah Akhir</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) in paginatedData" :key="index">
                <td class="border-b p-4">{{ index + 1 }}</td>
                <td class="border-b p-4">{{ row.nomorRekening }}</td>
                <td class="border-b p-4">{{ row.namaRekening }}</td>
                <td class="border-b p-4">{{ row.bulan }}</td>
                <td class="border-b p-4">{{ row.tahun }}</td>
                <td class="border-b p-4">{{ formatCurrency(row.jumlahAwal) }}</td>
                <td class="border-b p-4">{{ formatCurrency(row.jumlahAkhir) }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import * as XLSX from 'xlsx';
    import jsPDF from 'jspdf';
    import 'jspdf-autotable';
    import { saveAs } from 'file-saver';
    import Papa from 'papaparse';

    export default {
        props: {
            data: {
                type: Array,
                required: true,
            },
            entriesPerPage: {
                type: Number,
                required: true,
            },
            currentPage: {
                type: Number,
                required: true,
            },
        },
        computed: {
            totalPages() {
                return Math.ceil(this.flattenedData.length / this.entriesPerPage);
            },
            flattenedData() {
                return this.data.flatMap((item) =>
                    item.laporan.map((laporan) => ({
                        nomorRekening: item.nomorRekening,
                        namaRekening: item.namaRekening,
                        bulan: laporan.bulan,
                        tahun: laporan.tahun,
                        jumlahAwal: laporan.jumlahAwal,
                        jumlahAkhir: laporan.jumlahAkhir,
                    }))
                );
            },
            paginatedData() {
                const start = (this.currentPage - 1) * this.entriesPerPage;
                const end = start + this.entriesPerPage;
                return this.flattenedData.slice(start, end);
            },
        },
        methods: {
            exportToCSV() {
                // Flatten the data and prepare it for CSV export
                const csvData = this.flattenedData.map((row) => ({
                    'Nomor Rekening': row.nomorRekening,
                    'Nama Rekening': row.namaRekening,
                    Bulan: row.bulan,
                    Tahun: row.tahun,
                    'Jumlah Awal': row.jumlahAwal,
                    'Jumlah Akhir': row.jumlahAkhir,
                }));
                const csv = Papa.unparse(csvData);
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                saveAs(blob, 'laporan_saldo_non_dki.csv');
            },

            exportToExcel() {
                // Flatten the data and prepare it for Excel export
                const excelData = this.flattenedData.map((row) => ({
                    'Nomor Rekening': row.nomorRekening,
                    'Nama Rekening': row.namaRekening,
                    Bulan: row.bulan,
                    Tahun: row.tahun,
                    'Jumlah Awal': row.jumlahAwal,
                    'Jumlah Akhir': row.jumlahAkhir,
                }));
                const ws = XLSX.utils.json_to_sheet(excelData);
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, 'Data');
                const excelFile = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
                const blob = new Blob([excelFile], { type: 'application/octet-stream' });
                saveAs(blob, 'laporan_saldo_dki_bulanan.xlsx');
            },

            exportToPDF() {
                const doc = new jsPDF();

                // Prepare the table headers and data body
                const headers = [['Nomor Rekening', 'Nama Rekening', 'Bulan', 'Tahun', 'Saldo Awal', 'Saldo Akhir']];

                // Map the data to the format that autoTable expects
                const body = this.flattenedData.map((item) => [
                    item.nomorRekening,
                    item.namaRekening,
                    item.bulan,
                    item.tahun,
                    this.formatCurrency(item.jumlahAwal),
                    this.formatCurrency(item.jumlahAkhir),
                ]);

                // Generate the table in the PDF
                doc.autoTable({
                    head: headers,
                    body: body,
                });

                // Save the PDF
                doc.save('laporan.pdf');
            },

            formatCurrency(amount) {
                return new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                }).format(amount);
            },
        },
    };
</script>

<style scoped>
    table {
        border-collapse: collapse;
    }
    th,
    td {
        text-align: left;
        padding: 8px;
    }
</style>
