# Dharmapatha Mahidara - Website Organisasi

Website resmi organisasi Dharmapatha Mahidara dengan tampilan modern, responsif, dan profesional.

## 📁 Struktur Folder

```
Project Labs Event/
├── assets/
│   ├── logo.png                 # Logo organisasi
│   └── background.png           # Background hero section
├── index.html                   # Halaman utama
├── detail.html                  # Template halaman detail program
├── skynotes.html               # Halaman portal SKYNOTES
├── style.css                   # CSS utama
├── detail-style.css            # CSS halaman detail
├── skynotes-style.css          # CSS halaman SKYNOTES
├── script.js                   # JavaScript utama
├── detail-script.js            # JavaScript halaman detail
├── skynotes-script.js          # JavaScript SKYNOTES
└── README.md                   # Dokumentasi ini
```

## 🎨 Fitur Website

### Halaman Utama (index.html)
- **Hero Section**: Logo organisasi, nama, dan tagline dengan background gradient maroon
- **Running Text**: Animasi teks berjalan tanpa tag `<marquee>` (menggunakan CSS animation)
- **Program Kerja**: 19 card program dengan horizontal scroll
  - SKYNATION, BULBAS, SKYBATTLE, KIITCHEN OF KINDNESS, IMF
  - SKYNOTES (special card), SKYAVENUE, SKYRUN, SPEAK UP!, SKYMUN
  - SKYLITE, SKYSALE, SKYFEAST, SKYMEDxCARE, SKYBLOOD
  - SKYREUNION, SKYLEAGUE, SKYWALK, LABSKY STORIES

### Halaman Detail Program (detail.html)
- Navigasi kembali ke beranda
- Hero section dengan icon program
- Info cards: Tujuan, Jadwal, Sasaran
- Gallery dokumentasi kegiatan
- Footer konsisten

### Halaman SKYNOTES (skynotes.html)
Portal layanan akademik dengan 4 tombol asesmen:
1. **Asesmen Tengah Semester 1** (ATS 1)
2. **Asesmen Akhir Semester 1** (AAS 1)
3. **Asesmen Tengah Semester 2** (ATS 2)
4. **Asesmen Akhir Semester 2** (AAS 2)

## 🎨 Desain & Branding

### Warna
- **Primary**: `#8B0000` (Dark Red/Maroon)
- **Dark Maroon**: `#5C0000`
- **Accent Gold**: `#D4AF37`
- **White**: `#FFFFFF`

### Tipografi
- **Display Font**: Playfair Display (untuk heading)
- **Body Font**: Inter (untuk konten)

### Gaya Desain
- Formal dan berwibawa
- Modern dengan gradient maroon
- Animasi smooth dan profesional
- Responsive untuk mobile dan desktop

## 🚀 Cara Menggunakan

### 1. Buka Website
Buka file `index.html` di browser Anda:
- Double-click file `index.html`, atau
- Klik kanan > Open with > Browser pilihan Anda

### 2. Navigasi
- **Card Program**: Click untuk melihat detail
- **Card SKYNOTES**: Click untuk akses portal akademik
- **Horizontal Scroll**: 
  - Desktop: Gunakan tombol panah atau scroll mouse
  - Mobile: Swipe ke kanan/kiri

### 3. Kustomisasi Konten

#### Mengubah Logo atau Background
Ganti file di folder `assets/`:
```
assets/logo.png        → Logo organisasi Anda
assets/background.png  → Background hero section
```

#### Mengubah Nama Organisasi
Edit di `index.html` line 28:
```html
<h1 class="hero-title">NAMA ORGANISASI ANDA</h1>
```

#### Mengubah Running Text
Edit di `index.html` line 40-41:
```html
<span class="text-item">Teks Anda • Welcome to • Teks Anda • Welcome to • </span>
```

#### Menambah/Mengubah Program
Edit section program di `index.html` dan data program di `detail-script.js`

#### Update Link SKYNOTES
Edit URL di `skynotes-script.js` line 46-57:
```javascript
'ats1': {
    url: 'LINK_ANDA_DISINI'
},
```

## 📱 Responsivitas

Website sudah dioptimasi untuk:
- **Desktop** (1920px+): Full layout dengan semua fitur
- **Tablet** (768px - 1024px): Layout menyesuaikan
- **Mobile** (320px - 768px): Stacked layout, touch-friendly

## 🔧 Teknologi

- **HTML5**: Struktur semantik
- **CSS3**: 
  - CSS Variables untuk theme
  - Flexbox & Grid layout
  - CSS Animations
  - Media Queries
- **JavaScript (Vanilla)**:
  - DOM manipulation
  - Event handling
  - Smooth scrolling
  - Touch swipe support

## 🎯 Browser Support

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## 📝 Catatan Pengembangan

### Placeholder Content
Beberapa bagian menggunakan placeholder:
- **Dokumentasi program**: Gambar placeholder (gunakan foto real saat tersedia)
- **Link SKYNOTES**: Dummy link (update dengan URL aktual)

### Pengembangan Lanjut
Fitur yang bisa ditambahkan:
- Database untuk program kerja
- Login system untuk SKYNOTES
- Upload dokumentasi foto/video
- Search functionality
- Multi-language support

## 👨‍💻 Developer Notes

### Menambah Program Baru
1. Tambah card di `index.html` section `.program-container`
2. Tambah data di `detail-script.js` object `programData`
3. Gunakan format slug: `nama-program` (lowercase, dash-separated)

### Mengubah Tema Warna
Edit CSS variables di `style.css` line 12-32:
```css
:root {
    --primary-maroon: #8B0000;
    --accent-gold: #D4AF37;
    /* ... */
}
```

## 📞 Support

Untuk pertanyaan atau bantuan pengembangan lebih lanjut, hubungi developer.

---

**© 2025 Dharmapatha Mahidara. All Rights Reserved.**

*Membangun Generasi Unggul dan Berkarakter*
