# Deskripsi

coding challange mingguan SMK.DEV, kalau mau dicoba bisa ganti angkanya di variabel `nilai_N` & ` nya dipaling bawah
contoh:
```js
const nilai_N = sumOfSeries(2, 5);
```

## Tech Stack

**Language:** Typescript, Node.js

## Full Code Preview

```ts
// Mendefinisikan sebuah fungsi yang menghitung jumlah dari suatu deret
const sumOfSeries = (angka: number, jumlahPengulangan: number): number => {
  // Inisialisasi variable hasil awal ke 0
  let hasil: number = 0;

  // Inisialisasi variable nilai saat ini ke 0
  let nilaiSaatIni: number = 0;

  // Inisialisasi sebuah variable string kosong untuk menyimpan deret
  let series: string = '';

  // Melakukan perulangan dari 1 hingga jumlah Pengulangan
  for (let i: number = 1; i <= jumlahPengulangan; i++) {
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
```

## Cara Jalanin

Clone projectnya kalau mau

```bash
  git clone https://github.com/Wakype/SMK.DEV-Challange-7644.git
```

terus masuk ke foldernya

```bash
  cd SMK.DEV-Challange-7644
```

Kalau mau di coba di install dulu packagenya

```bash
  npm install
```

Abis itu tinggal jalanin deh :)

```bash
  npm run build
  npm run dev
```

## Contoh
<img width="673" alt="Screenshot 2023-09-23 at 04 56 16" src="https://github.com/Wakype/SMK.DEV-Challange-7644/assets/94674924/dbf4d598-c097-4944-8853-90858b421e07">
