# DOKUMEN LAPORAN JAWABAN TUGAS PRAKTIK DEMONSTRASI (FR.IA.02. TPD)
## SKEMA SERTIFIKASI: JUNIOR WEB DEVELOPER
**Nomor Skema**: 02/SKM/DID/VII/2024  
**Nama Asesor**: YOSEP KURNIAWAN, ST  
**No. Reg Asesor**: 000.002992.2021  
**Nama Asesi**: PARID IHSAN (FARIDZZ292)  
**Tanggal**: 08 September 2026  
**TUK**: Mandiri / Sewaktu  
**Repository GitHub**: [https://github.com/FARIDZZ292/website-sekolah](https://github.com/FARIDZZ292/website-sekolah)  

---

## I. PENYELESAIAN LANGKAH KERJA (SKENARIO PRAKTIK)

### 1. Instruksi Kerja 1:
> *"Buatlah sebuah Website sekolah dengan user interface yang interaktif pada menu-menu di halaman utama."*

* **Implementasi Proyek**:
  - **Menu Navigasi Interaktif**: Header navigasi dibuat menggunakan efek modern *Glassmorphism* (`class="glass-navbar"` pada `style.css`). Dilengkapi indikator menu aktif (`class="nav-item aktif"`), efek hover transisi warna emas/emerald, serta tombol CTA *"Daftar Sekarang"*.
  - **Dark / Light Theme Toggle Switcher**: Terdapat tombol pengubah tema dinamis (`id="btn-mode"`, fungsi `gantiMode()` pada `script.js:30-43`) dengan penyimpanan status ke `localStorage`.
  - **Responsive Mobile Hamburger Menu**: Diimplementasikan tombol menu hamburger (`id="hamburger"`, fungsi `toggleMenu()` pada `script.js:48-66`) yang mulus bertransformasi menjadi tanda 'X' saat dibuka di perangkat layar kecil (mobile/tablet).
  - **Animasi Counter Angka Statistik**: Angka santri, guru, jenjang, dan tahun bergerak naik secara dinamis saat halaman di-scroll (`jalankanAnimasiStatistik()` pada `script.js:94-135`).
* **Bukti Berkas**: `index.html` (Baris 40–93), `style.css` (Baris 60–250), `script.js` (Baris 15–90).

---

### 2. Instruksi Kerja 2:
> *"Pada halaman utama terdapat menu utama seperti: Beranda, Profil Sekolah, Ekstrakurikuler, Galeri dll."*

* **Implementasi Proyek**:
  - Struktur menu utama yang lengkap dan konsisten pada bilah navigasi (`<ul class="nav-menu" id="nav-menu">`):
    1. **Beranda**: Mengarah ke `index.html`
    2. **Profil Sekolah**: Mengarah ke `profil.html`
    3. **Ekstrakurikuler**: Mengarah ke `ekstrakurikuler.html`
    4. **Galeri**: Mengarah ke `galeri.html`
    5. **Kontak & Pendaftaran**: Mengarah ke `kontak.html`
* **Bukti Berkas**: `index.html` (Baris 65–71), `profil.html` (Baris 65–71), `ekstrakurikuler.html` (Baris 65–71), `galeri.html` (Baris 65–71), `kontak.html` (Baris 65–71).

---

### 3. Instruksi Kerja 3:
> *"Pada halaman utama terdapat berita kegiatan sekolah, galeri dan informasi jumlah guru dan siswa."*

* **Implementasi Proyek**:
  - **A. Berita Kegiatan Sekolah**:
    - Bagian `<section id="berita" class="section-wrapper">` memuat kartu berita terkini (Prestasi Santri Lolos PTN Favorit, Daurah Tahfidz 30 Juz, Juara Umum Pencak Silat Tapak Suci, Pelatihan Robotika Santri). Dilengkapi kategori tag, tanggal publikasi, ringkasan berita, dan tombol *Baca Selengkapnya*.
    - Lokasi: `index.html` (Baris 628–735).
  - **B. Galeri Kegiatan & Dokumentasi**:
    - Bagian `<section id="galeri" class="section-wrapper bg-subtle">` menyajikan kompilasi foto kegiatan santri, upacara, pembelajaran tahfidz, dan sarana prasarana sekolah lengkap dengan overlay informasi saat disentuh/di-hover.
    - Lokasi: `index.html` (Baris 737–817).
  - **C. Informasi Jumlah Guru dan Siswa**:
    - Bagian Panel Counter Statistik Hero (`class="hero-stats-panel"`):
      - **Jumlah Siswa / Santri**: Ditampilkan `500+` Santri Aktif (`data-angka="500"`).
      - **Jumlah Guru / Tenaga Pendidik**: Ditampilkan `40+` Tenaga Pendidik (`data-angka="40"`).
      - **Jumlah Jenjang**: Ditampilkan `4` Jenjang (PAUD, MI, MTs, MA).
      - **Masa Pengabdian**: Ditampilkan `25+` Tahun.
    - Bagian Profil Guru / Tenaga Pendidik Terperinci: Bagian `<section id="guru">` menampilkan kartu dewan asatidz dan pimpinan (Mudirur-Shuffah, Kepala Madrasah Aliyah, Kepala MTs, Kepala MI).
    - Lokasi: `index.html` (Baris 137–170 dan Baris 819–875).

---

### 4. Instruksi Kerja 4:
> *"Setiap Menu utama memiliki halaman tersendiri."*

* **Implementasi Proyek**:
  - Seluruh menu utama telah dipecah ke dalam berkas HTML terpisah (Multi-Page Architecture), bukan sekadar anchor link:
    1. [index.html](file:///c:/Users/USER/Documents/Proyek%20mandiri/sekolah/index.html): Halaman Beranda utama lengkap dengan hero banner, ringkasan profil, program pendidikan, berita, mini galeri, statistik, testimoni, dan FAQ.
    2. [profil.html](file:///c:/Users/USER/Documents/Proyek%20mandiri/sekolah/profil.html): Halaman khusus Profil Sekolah (Sejarah Lembaga, Visi Misi Strategis, Dewan Asatidz, dan Tabel Legalitas/Identitas).
    3. [ekstrakurikuler.html](file:///c:/Users/USER/Documents/Proyek%20mandiri/sekolah/ekstrakurikuler.html): Halaman khusus kegiatan santri (Tapak Suci, Pramuka, Panahan, Kaligrafi, Robotik & Coding, Jurnalistik, Hadroh).
    4. [galeri.html](file:///c:/Users/USER/Documents/Proyek%20mandiri/sekolah/galeri.html): Halaman khusus galeri foto & video dengan sistem tab filter multimedia (Semua, Akademik, Asrama, Prestasi).
    5. [kontak.html](file:///c:/Users/USER/Documents/Proyek%20mandiri/sekolah/kontak.html): Halaman narahubung resmi, lokasi peta Google Maps, serta formulir pendaftaran santri baru (PSB).

---

### 5. Instruksi Kerja 5:
> *"Terdapat Tabel Informasi Profil Sekolah pada menu utama Profil Sekolah."*

* **Implementasi Proyek**:
  - Di dalam file `profil.html` baris 171–280, terdapat elemen tabel semantik resmi `<table class="futuristic-table" id="profil-table">` dengan data identitas lembaga yang rapi, responsif, dan terverifikasi:
    - **Nama Pesantren**: Pondok Pesantren Islam Shuffah Hizbullah
    - **Nama Madrasah**: Madrasah Al-Fatah
    - **Bentuk Lembaga**: Pendidikan Islam Terpadu & Pesantren Modern
    - **Pimpinan (Mudir)**: Mohammad Iqbal, M.Pd.I.
    - **Komplek / Wilayah**: Komplek Muhajirun (Al-Muhajirun)
    - **Desa / Kelurahan**: Negara Ratu
    - **Kecamatan**: Natar
    - **Kabupaten**: Lampung Selatan
    - **Provinsi**: Lampung
    - **Akreditasi MI**: Akreditasi B (BAN-S/M)
    - **Akreditasi MTs**: Akreditasi B (BAN-S/M)
    - **Jurusan MA**: MIPA (Ilmu Alam) & IPS (Ilmu Sosial)
    - **Kurikulum**: Integrasi Kemenag & Pondok Pesantren Salaf-Modern
    - **Legalitas Kemenag**: Terdaftar Resmi Kemenag RI
* **Bukti Berkas**: `profil.html` (Baris 171–280), `style.css` (Styling `.futuristic-table`, `.td-label`, `.td-value`, `.badge-green`).

---

## II. PEMETAAN UNIT KOMPETENSI SKEMA JUNIOR WEB DEVELOPER

### 1. Kode Unit: J.620100.005.02 — Mengimplementasikan User Interface
* **Penjelasan & Bukti**:
  - Menyusun antarmuka berbasis standar W3C menggunakan elemen semantik HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
  - Mengimplementasikan CSS3 modern dengan sistem variabel warna (Design Tokens), flexbox, CSS Grid, media query responsif untuk smartphone, tablet, dan layar desktop besar.
  - Memperhatikan aspek keramahan pengguna (UX): Kontras warna yang jelas, touch-friendly target pada tombol navigasi, dan indikator status visual.

### 2. Kode Unit: J.620100.010.01 — Menerapkan Perintah Eksekusi Bahasa Pemrograman Berbasis Teks, Grafik, dan Multimedia
* **Penjelasan & Bukti**:
  - **Teks**: Manipulasi DOM teks secara dinamis pada counter statistik `data-angka` dan penanganan form kontak/pendaftaran.
  - **Grafik**: Penggunaan format grafik vektor berbasis XML yaitu Scalable Vector Graphics (SVG) inline untuk logo, ikon antarmuka, dan badge yang tajam di semua resolusi tanpa pecah.
  - **Multimedia**: Penanganan aset gambar multimedia beresolusi tinggi pada direktori `assets/` (`hero_campus.jpg`, `program_ma.jpg`, `program_mi.jpg`, `program_mts.jpg`, `program_paud.jpg`) dengan optimasi rasio aspek visual.

### 3. Kode Unit: J.620100.015.01 — Menyusun Fungsi, File atau Sumber Daya Pemrograman yang Lain dalam Organisasi yang Rapi
* **Penjelasan & Bukti**:
  - Struktur folder proyek disusun secara modular dan teratur:
    ```
    sekolah/
    ├── assets/                  # Sumber daya multimedia & gambar
    │   ├── hero_campus.jpg
    │   ├── program_ma.jpg
    │   ├── program_mi.jpg
    │   ├── program_mts.jpg
    │   └── program_paud.jpg
    ├── .gitignore               # Konfigurasi pengabaian file Git
    ├── index.html               # Halaman Beranda
    ├── profil.html              # Halaman Profil Sekolah & Tabel Identitas
    ├── ekstrakurikuler.html     # Halaman Kegiatan Ekstrakurikuler
    ├── galeri.html              # Halaman Dokumentasi & Galeri
    ├── kontak.html              # Halaman Kontak & Formulir Pendaftaran
    ├── style.css                # Berkas terpusat untuk tata letak & gaya visual
    └── script.js                # Berkas logika pemrograman & interaktivitas
    ```
  - Setiap file memiliki penamaan yang baku, bersih (*kebab-case* / *snake-case*), dan tidak ada file sampah.

### 4. Kode Unit: J.620100.016.01 — Menulis Kode dengan Prinsip Sesuai Guidelines dan Best Practices
* **Penjelasan & Bukti**:
  - Menggunakan indentasi standar 4 spasi konsisten di seluruh berkas.
  - Mengisi atribut meta esensial untuk standar SEO dan aksesibilitas: `<meta charset="UTF-8">`, `<meta name="viewport">`, `<meta name="description">`, `alt` pada tag `<img>`, serta `aria-label` pada elemen interaktif.
  - Menghindari inline styles berlebihan dengan memusatkan seluruh desain pada `style.css`.
  - Memberikan komentar penjelasan fungsi (*docstrings*) di setiap blok kode JavaScript (`script.js`).

### 5. Kode Unit: J.620100.017.02 — Mengimplementasikan Pemrograman Terstruktur
* **Penjelasan & Bukti**:
  - Di dalam `script.js`, kode diorganisasikan ke dalam fungsi-fungsi modular yang memiliki tugas tunggal (*single responsibility*):
    - `inisialisasiTema()`: Mengecek preferensi tema di `localStorage`.
    - `gantiMode()`: Logika pengalihan tema gelap/terang.
    - `toggleMenu()`: Penanganan logika buka-tutup menu responsive hamburger.
    - `pasangNavClickListener()`: Event listener klik menu.
    - `jalankanAnimasiStatistik()` & `animateValue()`: Logika iterasi matematika untuk penghitungan angka statistik secara terstruktur.
  - Menggunakan percabangan (*conditional statement*) `if/else`, perulangan (*loops*), dan penanganan event listeners secara teratur.

### 6. Kode Unit: J.620100.019.02 — Menggunakan Library atau Komponen Pre-Existing
* **Penjelasan & Bukti**:
  - Integrasi Typography Font API eksternal resmi dari Google Fonts: **Plus Jakarta Sans** (sans-serif modern untuk UI) dan **Amiri** (font serif bernuansa islami untuk aksen dan judul).
  - Pemanfaatan preconnect resource hints (`fonts.googleapis.com` dan `fonts.gstatic.com`) untuk percepatan unduhan font.
  - Pemanfaatan komponen ikon SVG pre-existing berbasis standar industri feather/lucide icons.

---

## III. DATA ASESI DAN PENGESAHAN

| Data | Keterangan |
|---|---|
| **Nama Asesi** | PARID IHSAN (FARIDZZ292) |
| **Skema Sertifikasi** | Junior Web Developer (02/SKM/DID/VII/2024) |
| **Nama Asesor** | YOSEP KURNIAWAN, ST (No. Reg: 000.002992.2021) |
| **Status Tugas** | Lengkap 100% Memenuhi Skenario dan Standar Unit Kompetensi |
| **Repositori Kode** | [https://github.com/FARIDZZ292/website-sekolah](https://github.com/FARIDZZ292/website-sekolah) |
