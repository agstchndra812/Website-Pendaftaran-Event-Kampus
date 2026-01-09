# 🎓 Website Pendaftaran Event Kampus

## 📖 Deskripsi Project
Project ini merupakan **website pendaftaran event kampus sederhana** yang digunakan untuk mendaftarkan peserta pada acara seminar teknologi.  
Website bersifat statis dan interaktif, dikembangkan menggunakan **HTML, CSS, dan JavaScript murni (Vanilla JS)** tanpa backend atau database.

---

## 🎯 Fitur Utama
- Landing page event (judul, deskripsi, tanggal, dan lokasi)
- Form pendaftaran peserta:
  - Nama lengkap
  - Email
  - Nomor HP
  - Kategori peserta (Mahasiswa / Umum)
- Validasi form menggunakan JavaScript
- Logika kuota maksimal peserta (50 orang)
- Pesan konfirmasi pendaftaran
- Menampilkan daftar peserta secara dinamis
- Menampilkan jumlah peserta yang sudah mendaftar

---

## 🧠 Alur Logika / Algoritma
1. Pengguna mengisi form pendaftaran.
2. Sistem memvalidasi input:
   - Semua input wajib diisi.
   - Email harus mengandung karakter `@`.
   - Nomor HP hanya boleh angka.
3. Sistem mengecek kuota peserta.
4. Jika kuota tersedia:
   - Data peserta ditampilkan ke halaman menggunakan DOM.
   - Jumlah peserta diperbarui secara dinamis.
5. Jika kuota penuh:
   - Sistem menampilkan pesan pendaftaran ditutup.

---

## 🛠 Teknologi yang Digunakan
- HTML
- CSS
- JavaScript (Vanilla JS)
