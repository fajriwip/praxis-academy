# Studi kasus
## mendeteksi plat nomor
arti regular expression pada kode <code>let plat = /\D{1,2}\s\d{1,4}\s\D{2,3}/i;</code>

- \D = mencocokkan seluruh string yang bukan angka, sama seperti [^0-9];
- {n,m} = <b>n</b> adalah limit minimal dan <b>m</b> adalah limit maximal;
- \s = memberikan white space atau jarak seperti <code>tab</code>/<code>spasi</code>;
- \d = mencocokkan seluruh string yang hanya berupa angka, sama seperti [0-9];

lalu arti <b>plat.exec</b> pada kode <code>let result = plat.exec(input);</code> adalah variable yang menyimpan sebuah perintah dimana <b>plat</b> adalah regular expression yang sudah kita buat dan <b>exex</b> adalah metode yang mengeksekusi sebuah input untuk di simpan ke dalam variable apabila cocok dengan regular expression yang telah kita buat.