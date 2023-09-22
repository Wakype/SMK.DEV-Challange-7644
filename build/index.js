"use strict";
// Mendefinisikan sebuah fungsi yang menghitung jumlah dari suatu deret
const sumOfSeries = (angka, jumlahPengulangan) => {
    // Inisialisasi variable hasil awal ke 0
    let hasil = 0;
    // Inisialisasi variable nilai saat ini ke 0
    let nilaiSaatIni = 0;
    // Inisialisasi sebuah variable string kosong untuk menyimpan deret
    let series = '';
    // Melakukan perulangan dari 1 hingga jumlah Pengulangan
    for (let i = 1; i <= jumlahPengulangan; i++) {
        // Membangun suku saat ini dengan mengalikan suku sebelumnya dengan 10 dan menambahkan angka
        nilaiSaatIni = nilaiSaatIni * 10 + angka;
        hasil += nilaiSaatIni;
        series += nilaiSaatIni;
        // Jika ini bukan suku terakhir, tambahkan ' + ' ke deret
        if (i < jumlahPengulangan) {
            series += ' + ';
        }
    }
    // console cara kerja
    console.log(`Cara Kerja: ${series}`);
    // Meng-return dari penjumlahan
    return hasil;
};
// ========================= COOBA DISINI ========================= //
// Memanggil function sumOfSeries pada sebuah variable
const nilai_N = sumOfSeries(2, 5);
// ini hasilnya
console.log(`Hasil: ${nilai_N}`);
// @im.waky
// Muhammad Hilmi
// SMK MADINATULQURAN
