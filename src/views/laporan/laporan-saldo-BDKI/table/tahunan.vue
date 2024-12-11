<template>
    <button @click="exportToCSV" id="csv-btn" class="bg-[#7EA5EC] text-[#054083] px-4 py-2 text-sm border-[#7EA5EC]">CSV</button>
    <button @click="exportToPDF" id="pdf-btn" class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">PDF</button>
    <button @click="exportToExcel" id="excel-btn" class="bg-[#7EA5EC] text-[#054083] px-3 py-2 text-sm border-[#7EA5EC]">Excel</button>
    <div class="overflow-x-auto">
        <table class="w-full max-w-full border-collapse bg-white text-center text-sm text-gray-700">
            <thead>
                <tr>
                    <th class="border-b p-4 font-medium text-gray-900">No</th>
                    <th class="border-b p-4 font-medium text-gray-900">
                        Nomor Rekening
                        <button @click="toggleSort('nomorRekening')">
                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    :fill="sortColumn === 'nomorRekening' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                ></path>
                                <path
                                    :fill="sortColumn === 'nomorRekening' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                ></path>
                            </svg>
                        </button>
                    </th>
                    <th class="border-b p-4 font-medium text-gray-900">
                        Nama Rekening
                        <button @click="toggleSort('namaRekening')">
                            <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    :fill="sortColumn === 'namaRekening' && sortDirection === 'asc' ? '#0000FF' : '#0F0F0F'"
                                    d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"
                                ></path>
                                <path
                                    :fill="sortColumn === 'namaRekening' && sortDirection === 'desc' ? '#0000FF' : '#0F0F0F'"
                                    d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"
                                ></path>
                            </svg>
                        </button>
                    </th>
                    <th class="border-b p-4 font-medium text-gray-900">Januari Awal</th>
                    <th class="border-b p-4 font-medium text-gray-900">Januari Akhir</th>
                    <th class="border-b p-4 font-medium text-gray-900">Februari Awal</th>
                    <th class="border-b p-4 font-medium text-gray-900">Februari Akhir</th>
                    <th class="border-b p-4 font-medium text-gray-900">Maret Awal</th>
                    <th class="border-b p-4 font-medium text-gray-900">Maret Akhir</th>
                    <th class="border-b p-4 font-medium text-gray-900">April Awal</th>
                    <th class="border-b p-4 font-medium text-gray-900">April Akhir</th>
                    <th class="border-b p-4 font-medium text-gray-900">Mei Awal</th>
                    <th class="border-b p-4 font-medium text-gray-900">Mei Akhir</th>
                    <th class="border-b p-4 font-medium text-gray-900">Juni Awal</th>
                    <th class="border-b p-4 font-medium text-gray-900">Juni Akhir</th>
                    <th class="border-b p-4 font-medium text-gray-900">Juli Awal</th>
                    <th class="border-b p-4 font-medium text-gray-900">Juli Akhir</th>
                    <th class="border-b p-4 font-medium text-gray-900">Agustus Awal</th>
                    <th class="border-b p-4 font-medium text-gray-900">Agustus Akhir</th>
                    <th class="border-b p-4 font-medium text-gray-900">September Awal</th>
                    <th class="border-b p-4 font-medium text-gray-900">September Akhir</th>
                    <th class="border-b p-4 font-medium text-gray-900">Oktober Awal</th>
                    <th class="border-b p-4 font-medium text-gray-900">Oktober Akhir</th>
                    <th class="border-b p-4 font-medium text-gray-900">November Awal</th>
                    <th class="border-b p-4 font-medium text-gray-900">November Akhir</th>
                    <th class="border-b p-4 font-medium text-gray-900">Desember Awal</th>
                    <th class="border-b p-4 font-medium text-gray-900">Desember Akhir</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in paginatedData" :key="index">
                    <td class="border-b p-4">{{ index + 1 }}</td>
                    <td class="border-b p-4">{{ row.nomorRekening }}</td>
                    <td class="border-b p-4">{{ row.namaRekening }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.januariAwal) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.januariAkhir) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.februariAwal) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.februariAkhir) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.maretAwal) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.maretAkhir) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.aprilAwal) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.aprilAkhir) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.meiAwal) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.meiAkhir) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.juniAwal) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.juniAkhir) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.juliAwal) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.juliAkhir) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.agustusAwal) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.agustusAkhir) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.septemberAwal) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.septemberAkhir) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.oktoberAwal) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.oktoberAkhir) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.novemberAwal) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.novemberAkhir) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.desemberAwal) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.desemberAkhir) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import * as XLSX from 'xlsx';
    import jsPDF from 'jspdf';
    import { saveAs } from 'file-saver';

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
        data() {
            return {
                sortColumn: '', // Kolom yang sedang diurutkan
                sortDirection: '', // 'asc' atau 'desc'
            };
        },

        computed: {
            totalPages() {
                return Math.ceil(this.flattenedData.length / this.entriesPerPage);
            },
            flattenedData() {
                // Flattening the laporan data into a new format
                return this.data.map((item) => {
                    let months = {
                        januariAwal: 0,
                        januariAkhir: 0,
                        februariAwal: 0,
                        februariAkhir: 0,
                        maretAwal: 0,
                        maretAkhir: 0,
                        aprilAwal: 0,
                        aprilAkhir: 0,
                        meiAwal: 0,
                        meiAkhir: 0,
                        juniAwal: 0,
                        juniAkhir: 0,
                        juliAwal: 0,
                        juliAkhir: 0,
                        agustusAwal: 0,
                        agustusAkhir: 0,
                        septemberAwal: 0,
                        septemberAkhir: 0,
                        oktoberAwal: 0,
                        oktoberAkhir: 0,
                        novemberAwal: 0,
                        novemberAkhir: 0,
                        desemberAwal: 0,
                        desemberAkhir: 0,
                    };

                    item.laporan.forEach((laporan) => {
                        const bulan = laporan.bulan.toLowerCase();
                        months[`${bulan}Awal`] = laporan.jumlahAwal;
                        months[`${bulan}Akhir`] = laporan.jumlahAkhir;
                    });

                    return {
                        nomorRekening: item.nomorRekening,
                        namaRekening: item.namaRekening,
                        ...months,
                    };
                });
            },
            paginatedData() {
                const start = (this.currentPage - 1) * this.entriesPerPage;
                const end = start + this.entriesPerPage;
                return this.sortedData.slice(start, end); // Menggunakan sortedData
            },
            sortedData() {
                // Tentukan arah pengurutan
                const direction = this.sortDirection === 'asc' ? 1 : -1;

                // Pastikan sortColumn valid
                if (!this.sortColumn) return this.flattenedData;

                // Sort data berdasarkan kolom yang dipilih
                return [...this.flattenedData].sort((a, b) => {
                    const valueA = a[this.sortColumn];
                    const valueB = b[this.sortColumn];

                    if (valueA < valueB) return -1 * direction;
                    if (valueA > valueB) return 1 * direction;
                    return 0;
                });
            },
        },

        methods: {
            formatCurrency(amount) {
                return new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                }).format(amount);
            },
            toggleSort(column) {
                if (this.sortColumn === column) {
                    // Jika kolom sama, toggle arah
                    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
                } else {
                    // Jika kolom berbeda, atur default asc
                    this.sortColumn = column;
                    this.sortDirection = 'asc';
                }
            },
            exportToCSV() {
                const headers = [
                    'No',
                    'Nomor Rekening',
                    'Nama Rekening',
                    'Januari Awal',
                    'Januari Akhir',
                    'Februari Awal',
                    'Februari Akhir',
                    'Maret Awal',
                    'Maret Akhir',
                    'April Awal',
                    'April Akhir',
                    'Mei Awal',
                    'Mei Akhir',
                    'Juni Awal',
                    'Juni Akhir',
                    'Juli Awal',
                    'Juli Akhir',
                    'Agustus Awal',
                    'Agustus Akhir',
                    'September Awal',
                    'September Akhir',
                    'Oktober Awal',
                    'Oktober Akhir',
                    'November Awal',
                    'November Akhir',
                    'Desember Awal',
                    'Desember Akhir',
                ];

                const rows = this.flattenedData.map((row, index) => [
                    index + 1,
                    row.nomorRekening,
                    row.namaRekening,
                    row.januariAwal,
                    row.januariAkhir,
                    row.februariAwal,
                    row.februariAkhir,
                    row.maretAwal,
                    row.maretAkhir,
                    row.aprilAwal,
                    row.aprilAkhir,
                    row.meiAwal,
                    row.meiAkhir,
                    row.juniAwal,
                    row.juniAkhir,
                    row.juliAwal,
                    row.juliAkhir,
                    row.agustusAwal,
                    row.agustusAkhir,
                    row.septemberAwal,
                    row.septemberAkhir,
                    row.oktoberAwal,
                    row.oktoberAkhir,
                    row.novemberAwal,
                    row.novemberAkhir,
                    row.desemberAwal,
                    row.desemberAkhir,
                ]);

                const ws = XLSX.utils.aoa_to_sheet([headers, ...rows]);
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, 'Laporan');
                XLSX.writeFile(wb, 'laporan.csv');
            },
            exportToPDF() {
                const doc = new jsPDF('l', 'mm', 'a4'); // 'l' for landscape orientation, 'mm' for millimeter units, 'a4' for A4 size paper

                const columns = [
                    'No',
                    'Nomor Rekening',
                    'Nama Rekening',
                    'Januari Awal',
                    'Januari Akhir',
                    'Februari Awal',
                    'Februari Akhir',
                    'Maret Awal',
                    'Maret Akhir',
                    'April Awal',
                    'April Akhir',
                    'Mei Awal',
                    'Mei Akhir',
                    'Juni Awal',
                    'Juni Akhir',
                    'Juli Awal',
                    'Juli Akhir',
                    'Agustus Awal',
                    'Agustus Akhir',
                    'September Awal',
                    'September Akhir',
                    'Oktober Awal',
                    'Oktober Akhir',
                    'November Awal',
                    'November Akhir',
                    'Desember Awal',
                    'Desember Akhir',
                ];

                const rows = this.paginatedData.map((row, index) => [
                    index + 1,
                    row.nomorRekening,
                    row.namaRekening,
                    row.januariAwal,
                    row.januariAkhir,
                    row.februariAwal,
                    row.februariAkhir,
                    row.maretAwal,
                    row.maretAkhir,
                    row.aprilAwal,
                    row.aprilAkhir,
                    row.meiAwal,
                    row.meiAkhir,
                    row.juniAwal,
                    row.juniAkhir,
                    row.juliAwal,
                    row.juliAkhir,
                    row.agustusAwal,
                    row.agustusAkhir,
                    row.septemberAwal,
                    row.septemberAkhir,
                    row.oktoberAwal,
                    row.oktoberAkhir,
                    row.novemberAwal,
                    row.novemberAkhir,
                    row.desemberAwal,
                    row.desemberAkhir,
                ]);

                doc.setFont('Helvetica');
                doc.setFontSize(10);

                // Add title
                doc.text('Laporan Keuangan', 14, 10);
                doc.setFontSize(8);

                // Auto table settings
                doc.autoTable({
                    head: [columns],
                    body: rows,
                    startY: 20, // Start below title
                    theme: 'grid',
                    headStyles: {
                        fillColor: [30, 30, 30],
                        textColor: [255, 255, 255],
                        fontStyle: 'bold',
                        halign: 'center',
                    },
                    bodyStyles: {
                        fontSize: 8,
                        valign: 'middle',
                        halign: 'center',
                        cellPadding: 2,
                    },
                    columnStyles: {
                        0: { cellWidth: 10 },
                        1: { cellWidth: 20 },
                        2: { cellWidth: 30 },
                        3: { cellWidth: 15 },
                        4: { cellWidth: 15 },
                        // Add more column styles if necessary
                    },
                    margin: { top: 10, left: 10, right: 10, bottom: 10 },
                    didDrawPage: (data) => {
                        // Page number at the bottom right
                        const pageCount = doc.internal.getNumberOfPages();
                        doc.setFontSize(8);
                        doc.text(`Page ${data.pageNumber} of ${pageCount}`, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 10);
                    },
                    didParseCell: (data) => {
                        if (data.row.index === 0) {
                            data.cell.styles.fillColor = [30, 30, 30]; // Dark header background
                        }
                    },
                });

                // Save PDF
                doc.save('laporan.pdf');
            },

            exportToExcel() {
                const headers = [
                    'No',
                    'Nomor Rekening',
                    'Nama Rekening',
                    'Januari Awal',
                    'Januari Akhir',
                    'Februari Awal',
                    'Februari Akhir',
                    'Maret Awal',
                    'Maret Akhir',
                    'April Awal',
                    'April Akhir',
                    'Mei Awal',
                    'Mei Akhir',
                    'Juni Awal',
                    'Juni Akhir',
                    'Juli Awal',
                    'Juli Akhir',
                    'Agustus Awal',
                    'Agustus Akhir',
                    'September Awal',
                    'September Akhir',
                    'Oktober Awal',
                    'Oktober Akhir',
                    'November Awal',
                    'November Akhir',
                    'Desember Awal',
                    'Desember Akhir',
                ];

                const rows = this.flattenedData.map((row, index) => [
                    index + 1,
                    row.nomorRekening,
                    row.namaRekening,
                    row.januariAwal,
                    row.januariAkhir,
                    row.februariAwal,
                    row.februariAkhir,
                    row.maretAwal,
                    row.maretAkhir,
                    row.aprilAwal,
                    row.aprilAkhir,
                    row.meiAwal,
                    row.meiAkhir,
                    row.juniAwal,
                    row.juniAkhir,
                    row.juliAwal,
                    row.juliAkhir,
                    row.agustusAwal,
                    row.agustusAkhir,
                    row.septemberAwal,
                    row.septemberAkhir,
                    row.oktoberAwal,
                    row.oktoberAkhir,
                    row.novemberAwal,
                    row.novemberAkhir,
                    row.desemberAwal,
                    row.desemberAkhir,
                ]);

                const ws = XLSX.utils.aoa_to_sheet([headers, ...rows]);
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, 'Laporan');
                XLSX.writeFile(wb, 'laporan.xlsx');
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
    }
</style>
