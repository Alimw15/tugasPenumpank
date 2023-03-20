var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    // untuk menghitung isi panjangnya data
    penumpang.push(namaPenumpang); // untuk menambahkan data dalam array
    return penumpang; // untuk mengulang isi function
  } else {
    for (i = 0; i < penumpang.length; i++) {
      // untuk mencari ulang isi panjang data yang sudah diisi
      if (penumpang[i] == undefined) {
        // jika isi penumpang kosong atau undefined
        penumpang[i] = namaPenumpang; // untuk menambahkan isi kursi yang kosong
        return penumpang; // mengembalikan isi array dan keluar dari function
      } else if (namaPenumpang == penumpang[i]) {
        // untuk mencari data yang sama yang telah diinput datanya
        console.log(namaPenumpang + " sudah ada didalam angkot"); // memberikan informasi data yang sama atau sudah ada
        return; // keluar dari function
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang); // penumpang.push untuk menambah isi data data dalam array
        return penumpang; // mengembalikan isi array dan keluar dari function
      }
      if (tambahPenumpang.length == 3) {
        penumpang.push(namaPenumpang); // untuk menambah isi data dalam array
        console.log("penumpang sudah penuh");
        return; // keluar dari array
      }
    }
  }
};
