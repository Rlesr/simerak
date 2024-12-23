<template>
    <div>
        <table class="min-w-full border border-gray-300">
            <thead>
                <tr>
                    <th class="border-b p-4 font-medium text-gray-900">No</th>
                    <th class="border-b p-4 font-medium text-gray-900">Tanggal Transaksi</th>
                    <th class="border-b p-4 font-medium text-gray-900">Jam Transaksi</th>
                    <th class="border-b p-4 font-medium text-gray-900">Kode Transaksi</th>
                    <th class="border-b p-4 font-medium text-gray-900">Nama Rekening Tujuan</th>
                    <th class="border-b p-4 font-medium text-gray-900">No Rekening Tujuan</th>
                    <th class="border-b p-4 font-medium text-gray-900">Deskripsi 1</th>
                    <th class="border-b p-4 font-medium text-gray-900">Deskripsi 2</th>
                    <th class="border-b p-4 font-medium text-gray-900">Kredit</th>
                    <th class="border-b p-4 font-medium text-gray-900">Debit</th>
                    <th class="border-b p-4 font-medium text-gray-900">Saldo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in data" :key="index">
                    <td class="border-b p-4">{{ (currentPage - 1) * entriesPerPage + index + 1 }}</td>
                    <td class="border-b p-4">{{ row.tanggalTransaksi }}</td>
                    <td class="border-b p-4">{{ row.jamTransaksi }}</td>
                    <td class="border-b p-4">{{ row.kodeTransaksi }}</td>
                    <td class="border-b p-4">{{ row.namaRekeningTujuan }}</td>
                    <td class="border-b p-4">{{ row.nomorRekeningTujuan }}</td>
                    <td class="border-b p-4">{{ row.deskripsi1 }}</td>
                    <td class="border-b p-4">{{ row.deskripsi2 }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.kredit) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.debit) }}</td>
                    <td class="border-b p-4">{{ formatCurrency(row.saldo) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            data: Array, // Data mutasi
            paginatedData: Array, // Tambahkan ini
            currentPage: Number,
            entriesPerPage: Number,
        },
        methods: {
            formatCurrency(amount) {
                return new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                }).format(amount || 0); // Pastikan nilai default adalah 0 jika tidak ada data
            },
            goToPage(page) {
                this.currentPage = page;
            },
            prevPage() {
                if (this.currentPage > 1) this.currentPage--;
            },
            nextPage() {
                if (this.currentPage < this.totalPages) this.currentPage++;
            },
            goToFirstPage() {
                this.currentPage = 1;
            },
            goToLastPage() {
                this.currentPage = this.totalPages;
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
    .pagination {
        margin-top: 10px;
        text-align: center;
    }
    .pagination button {
        padding: 8px 16px;
        margin: 0 5px;
        cursor: pointer;
    }
</style>
