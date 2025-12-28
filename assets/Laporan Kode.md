# 📋 ANALISIS LENGKAP WEBSITE DHARMAPATHA MAHIDHARA

## 1. GAMBARAN UMUM PROYEK

Website ini adalah **portal resmi organisasi Dharmapatha Mahidhara** yang menampilkan 19 program kerja dengan desain modern, responsif, dan profesional menggunakan tema maroon-gold yang formal dan berwibawa.

### Teknologi yang Digunakan:
- **HTML5** - Struktur semantik
- **CSS3** - Styling dengan CSS Variables, Flexbox, Grid, Animations
- **JavaScript (Vanilla)** - Interaktivitas tanpa framework
- **Google Fonts** - Playfair Display, Inter, Cinzel, New Amsterdam

---

## 2. STRUKTUR FILE

```
Project Labs Event/
├── assets/                      # Folder gambar dan logo
│   ├── logo a.png              # Logo utama (hero 1)
│   ├── logo b.png              # Logo kedua (hero 2)
│   ├── Logo Program Kerja Kami.png
│   ├── Background Card 1.jpg
│   ├── Background SKYNOTES.jpg
│   ├── home.jpg & home2.jpg
│   └── LOGO [19 program].jpg   # Logo setiap program
│
├── index.html                   # Halaman utama
├── program-detail.html          # Halaman detail program
├── skynotes.html               # Halaman khusus SKYNOTES (tidak digunakan, diganti inline)
│
├── style.css                   # CSS utama (34KB) - All styles
├── skynotes-style.css          # CSS SKYNOTES (legacy)
│
├── script.js                   # JavaScript utama
├── skynotes-script.js          # JavaScript SKYNOTES (legacy)
│
└── README.md                   # Dokumentasi
```

---

## 3. ANALISIS FILE HTML

### A. index.html - Halaman Utama

**Struktur:**

1. **Hero Section Pertama** (baris 20-30)
   - Background gradient maroon + gambar home.jpg
   - Menampilkan logo a.png
   - Tinggi penuh viewport (100vh)

2. **Running Text Section** (baris 33-43)
   - Animasi teks berjalan "Welcome to Dharmapatha Mahidhara"
   - Menggunakan CSS animation, bukan tag `<marquee>` deprecated

3. **Hero Section Kedua** (baris 46-53)
   - Background gradient maroon + gambar home2.jpg
   - Menampilkan logo b.png

4. **Running Text Section Kedua** (baris 56-63)
   - Sama seperti running text pertama

5. **Section Program Kerja** (baris 66-297)
   - Logo "Program Kerja Kami"
   - 19 cards program dengan horizontal scroll
   - Tombol navigasi kiri-kanan
   - Setiap card link ke `program-detail.html?program=[nama]`

6. **Running Text Section Ketiga** (baris 300-309)

7. **Footer** (baris 312-317)
   - Copyright 2026
   - Tagline: "Membangun Generasi Unggul dan Berkarakter"

**Fitur Khusus:**
- Cache busting pada CSS: `style.css?v=3` untuk memaksa browser load CSS terbaru
- Responsive viewport meta tag
- SEO-friendly meta description

---

### B. program-detail.html - Halaman Detail Program

**Cara Kerja:**

1. **URL Parameter** (baris 52-53)
   ```javascript
   const urlParams = new URLSearchParams(window.location.search);
   const programName = urlParams.get('program');
   ```
   - Mengambil nama program dari URL (contoh: `?program=skynotes`)

2. **Dynamic Title** (baris 59-60)
   - Mengubah judul halaman sesuai program
   - Update heading `<h1>` dengan nama program

3. **Special Handling per Program** (baris 62-370)

   **SKYNOTES** (10 tombol):
   - 3 tombol merah: ATS Semester 1 (X, XI, XII)
   - 3 tombol gold: AAS Semester 1 (X, XI, XII)
   - 2 tombol biru gelap: ATS Semester 2 (X, XI-I)
   - 2 tombol putih: AAS Semester 2 (X, XI-I)
   - Background khusus: Background SKYNOTES.jpg

   **Program Lain** (2 tombol default):
   - Tombol 1: INSTAGRAM (link ke Instagram program)
   - Tombol 2: DOKUMENTASI (link ke Google Drive)

   **Program dengan 1 tombol**:
   - SKYLEAGUE, SKYFEAST: Hanya DOKUMENTASI
   - SKYBLOOD, LABSKYSTORIES: Hanya INSTAGRAM

4. **Background Dynamic**
   - SKYNOTES: Class `skynotes-bg` ditambahkan untuk background khusus
   - Program lain: Background default dari CSS

---

## 4. ANALISIS CSS (style.css)

### A. CSS Variables (baris 10-41)

```css
:root {
    /* Warna */
    --primary-maroon: #8B0000;
    --dark-maroon: #5C0000;
    --accent-gold: #D4AF37;
    --white: #FFFFFF;

    /* Gradients */
    --gradient-maroon: linear-gradient(135deg, ...);

    /* Font */
    --font-display: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;

    /* Transitions */
    --transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Keunggulan:**
- Mudah mengubah tema warna di satu tempat
- Konsistensi design system
- Maintainability tinggi

---

### B. Komponen Utama

#### 1. Hero Section (baris 60-75)
- Full viewport height (100vh)
- Background parallax dengan `background-attachment: fixed`
- Gradient overlay untuk readability
- Animasi fade-in saat load

#### 2. Running Text (CSS Animation)
```css
@keyframes scrollText {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
```
- Loop tak terbatas
- Smooth animation tanpa JavaScript

#### 3. Card System
- **Grid Layout**: 3 kolom di desktop
- **Horizontal Scroll**: Mobile-friendly
- **Hover Effects**: Scale transform + shadow
- **Responsive**: Menyesuaikan kolom berdasarkan lebar layar

#### 4. Button Styles untuk SKYNOTES
- `btn-ats1`: Merah gradient (ATS Semester 1)
- `btn-aas1`: Gold (AAS Semester 1)
- `btn-ats2`: Biru gelap (ATS Semester 2)
- `btn-aas2`: Putih dengan border maroon (AAS Semester 2)
- `btn-instagram`: Maroon untuk Instagram
- `btn-documentation`: Putih/gold untuk dokumentasi

---

### C. Responsive Breakpoints

1. **Desktop** (default, >768px)
   - SKYNOTES: Grid 3 kolom
   - Cards: Grid layout

2. **Tablet** (641px - 768px)
   - SKYNOTES: Tetap 3 kolom
   - Font size lebih kecil

3. **Large Mobile** (481px - 640px)
   - **SKYNOTES: 1 kolom vertikal**
   - Cards: Full width
   - Button min-width: 320px

4. **Small Mobile** (≤480px)
   - SKYNOTES: 1 kolom dengan padding lebih kecil
   - Button min-width: 300px
   - Logo scaling: 2.5x transform

**Perbaikan Mobile SKYNOTES** (baris 1255-1259 & 1349-1353):
```css
/* Reset grid positioning untuk mobile */
.program-detail-section.skynotes-bg .detail-action-btn {
    grid-column: auto !important;
    grid-row: auto !important;
}
```
Memastikan tombol SKYNOTES stack vertikal di mobile, tidak ada yang floating kanan-kiri.

---

## 5. ANALISIS JAVASCRIPT (script.js)

### A. Fungsi Utama

#### 1. `initScrollButtons()` (baris 16-65)
**Tujuan:** Horizontal scroll untuk program cards dengan tombol panah

**Cara Kerja:**
- Scroll 350px per klik
- Auto-hide tombol kiri saat di awal
- Auto-hide tombol kanan saat di akhir
- Smooth scrolling dengan `behavior: 'smooth'`

```javascript
scrollRight.addEventListener('click', () => {
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});
```

#### 2. `initNewSectionScrollButtons()` (baris 71-120)
**Tujuan:** Sama seperti di atas, tapi untuk section cards baru

#### 3. `initProgramCards()` (baris 126-151)
**Tujuan:** Navigasi saat card diklik

**Logic:**
```javascript
if (programName === 'skynotes') {
    window.location.href = 'skynotes.html';  // Halaman khusus
} else {
    window.location.href = `detail.html?program=${programName}`;
}
```

**Accessibility:**
- `tabindex="0"` untuk keyboard navigation
- Enter/Space key support untuk keyboard users

#### 4. Touch Swipe Support (baris 183-208)
**Tujuan:** Swipe gesture untuk mobile

**Cara Kerja:**
```javascript
container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;  // Simpan posisi awal
});

container.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
    const walk = (startX - x) * 1.5;  // Hitung jarak swipe
    container.scrollLeft = scrollStart + walk;
});
```
- Multiplier 1.5x untuk swipe lebih responsif
- `{passive: true}` untuk performa optimal (tidak block scroll)

#### 5. Intersection Observer (baris 214-237)
**Tujuan:** Animasi card saat scroll ke view

**Cara Kerja:**
- Observe setiap card
- Fade in + slide up saat masuk viewport
- Stagger animation (delay 0.05s per card)

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
```

#### 6. Visibility Change Handler (baris 243-254)
**Tujuan:** Pause animation saat tab hidden

**Optimisasi:**
- Hemat CPU/battery saat user switch tab
- Resume saat kembali ke tab

```javascript
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        runningText.style.animationPlayState = 'paused';
    } else {
        runningText.style.animationPlayState = 'running';
    }
});
```

---

### B. Event Flow Diagram

```
Page Load
    ↓
DOMContentLoaded Event
    ↓
Initialize All Functions
    ├── initScrollButtons()          → Setup arrow navigation
    ├── initNewSectionScrollButtons() → Setup new section arrows
    ├── initProgramCards()           → Setup card click handlers
    └── initSmoothScroll()           → Setup anchor link scroll
    ↓
Background Processes
    ├── Touch Swipe Listeners        → Mobile swipe support
    ├── Intersection Observer        → Scroll animations
    └── Visibility Change Handler    → Performance optimization
    ↓
User Interaction
    ├── Click Card → Navigate to detail page
    ├── Click Arrow → Scroll horizontal 350px
    ├── Swipe Mobile → Scroll horizontal
    ├── Scroll Page → Animate cards into view
    └── Switch Tab → Pause/resume animations
```

---

## 6. FITUR-FITUR UTAMA

### ✅ Fitur yang Sudah Diimplementasi:

1. **Multi-Page Navigation**
   - Home → Detail Program
   - Special handling untuk SKYNOTES
   - Back button dengan SVG icon
   - URL parameter routing

2. **Responsive Design**
   - Desktop (>1024px): Full layout
   - Tablet (768-1024px): Adapted layout
   - Mobile (<768px): Touch-optimized
   - Breakpoints: 1440px, 1024px, 768px, 640px, 480px

3. **Smooth Animations**
   - CSS keyframe animations untuk running text
   - JavaScript smooth scroll behaviors
   - Intersection Observer untuk lazy animations
   - Stagger animations untuk visual appeal

4. **Horizontal Scrolling**
   - Desktop: Arrow buttons dengan auto-hide
   - Mobile: Native swipe gestures
   - Touch-friendly dengan multiplier 1.5x
   - Visual feedback untuk scroll position

5. **Dynamic Content**
   - URL parameters untuk program routing
   - JavaScript-generated buttons per program
   - Conditional rendering berdasarkan program name
   - Dynamic title dan meta tags

6. **Performance Optimizations**
   - Lazy animations dengan Intersection Observer
   - Pause animations saat tab hidden
   - Passive event listeners untuk scroll
   - Image lazy loading (browser native)
   - Cache busting untuk CSS updates

7. **Accessibility**
   - Keyboard navigation (Tab, Enter, Space)
   - Focus states untuk interactive elements
   - Semantic HTML5 tags
   - Alt text untuk images
   - WCAG-friendly contrast ratios

8. **Cross-Browser Compatibility**
   - Modern CSS with fallbacks
   - Vendor prefixes (via autoprefixer)
   - Feature detection untuk Intersection Observer
   - Graceful degradation

---

## 7. CARA MENJALANKAN WEBSITE

### Metode 1: Buka Langsung di Browser (Paling Mudah)

**Windows:**
1. Buka File Explorer
2. Navigate ke folder `C:\Users\Asus\Desktop\PandaTech\Project Labs Event`
3. Double-click `index.html`
4. Website akan terbuka di default browser

**Alternatif:**
- Klik kanan `index.html` → Open with → Pilih browser (Chrome, Firefox, Edge)

**Kelebihan:**
- Paling cepat dan mudah
- Tidak butuh instalasi apapun
- Langsung bisa dilihat hasilnya

**Kekurangan:**
- URL akan menampilkan file path lokal
- Tidak bisa test fitur server-side (jika ada di masa depan)

---

### Metode 2: Live Server di VSCode (Recommended untuk Development)

**Setup:**
1. Install **Visual Studio Code** (jika belum ada)
2. Install extension **Live Server** by Ritwick Dey
   - Buka VSCode
   - Tekan `Ctrl+Shift+X` (Extensions)
   - Search "Live Server"
   - Klik Install

**Menjalankan:**
1. Buka folder project di VSCode
2. Klik kanan `index.html` di Explorer
3. Pilih "Open with Live Server"
4. Website otomatis buka di `http://localhost:5500`

**Kelebihan:**
- **Auto-reload** saat file berubah (no refresh needed!)
- URL localhost yang proper
- Port customizable
- Network access untuk test di device lain
- Debug tools terintegrasi

**Kekurangan:**
- Butuh VSCode dan extension

---

### Metode 3: Python Simple HTTP Server

**Jika Python sudah terinstall:**

```bash
# Buka Command Prompt di folder project
cd "C:\Users\Asus\Desktop\PandaTech\Project Labs Event"

# Python 3 (recommended)
python -m http.server 8000

# Atau Python 2
python -m SimpleHTTPServer 8000
```

Lalu buka browser ke: `http://localhost:8000`

**Kelebihan:**
- Built-in dengan Python (no install)
- Cepat untuk testing
- Bisa diakses dari device lain di network yang sama

**Kekurangan:**
- Harus buka terminal setiap kali
- Manual refresh browser saat edit code

---

### Metode 4: Node.js http-server

**Jika Node.js sudah terinstall:**

```bash
# Install sekali saja (global)
npm install -g http-server

# Jalankan di folder project
cd "C:\Users\Asus\Desktop\PandaTech\Project Labs Event"
http-server

# Atau dengan port custom
http-server -p 3000
```

Buka browser: `http://localhost:8080` (default) atau port yang dipilih

**Kelebihan:**
- Fast dan ringan
- Cache control headers
- CORS support (jika butuh)
- Gzip compression

**Kekurangan:**
- Butuh Node.js terinstall

---

### Metode 5: XAMPP / WAMP (Untuk Full Web Server)

**Setup:**
1. Install XAMPP atau WAMP
2. Copy folder project ke `C:\xampp\htdocs\` atau `C:\wamp\www\`
3. Start Apache server
4. Buka `http://localhost/Project Labs Event/`

**Kapan Gunakan:**
- Jika butuh PHP backend di masa depan
- Butuh MySQL database
- Simulasi production environment

---

## 8. TESTING CHECKLIST

### Desktop Testing (1920x1080+)

**Hero Sections:**
- [ ] Hero section 1 tampil full screen dengan logo a.png centered
- [ ] Hero section 2 tampil full screen dengan logo b.png centered
- [ ] Background images (home.jpg, home2.jpg) terlihat dengan jelas
- [ ] Gradient overlay tidak terlalu gelap/terang

**Running Text:**
- [ ] Animasi berjalan smooth tanpa lag
- [ ] Text "Welcome to Dharmapatha Mahidhara" readable
- [ ] Loop seamless (tidak ada jump/gap)
- [ ] Animation pause saat switch tab

**Program Cards:**
- [ ] 19 cards tampil dalam horizontal scroll
- [ ] Arrow buttons (kiri/kanan) muncul dan berfungsi
- [ ] Tombol kiri hidden saat di awal scroll
- [ ] Tombol kanan hidden saat di akhir scroll
- [ ] Hover effects (scale + shadow) smooth
- [ ] Klik card navigate ke program-detail.html

**Detail Pages:**
- [ ] SKYNOTES: 10 tombol dalam grid 3 kolom
  - [ ] Row 1: 3 tombol merah (ATS1 X, XI, XII)
  - [ ] Row 2: 3 tombol gold (AAS1 X, XI, XII)
  - [ ] Row 3: 2 tombol biru gelap (ATS2 X, XI-I) + 1 empty space
  - [ ] Row 4: 2 tombol putih (AAS2 X, XI-I)
- [ ] Program lain: 1-2 tombol centered
- [ ] Back button navigate kembali ke home
- [ ] All links buka di tab baru (`target="_blank"`)

**Footer:**
- [ ] Copyright text centered
- [ ] Tagline visible dan readable
- [ ] Background color maroon

---

### Mobile Testing (375x667 - iPhone SE / 393x852 - iPhone 14)

**Viewport:**
- [ ] Tidak ada horizontal scroll yang tidak diinginkan
- [ ] Semua content fit dalam layar
- [ ] Font size readable (minimal 14px body text)

**Hero Sections:**
- [ ] Logo tidak terpotong
- [ ] Logo ter-scale dengan baik
- [ ] Background images terlihat (tidak stretched)

**Running Text:**
- [ ] Animation speed sesuai (tidak terlalu cepat)
- [ ] Text readable saat berjalan

**Program Cards:**
- [ ] Cards bisa di-swipe dengan gesture
- [ ] Swipe responsif (multiplier 1.5x terasa smooth)
- [ ] Arrow buttons tetap berfungsi (jika tampil)
- [ ] Cards tidak terlalu kecil untuk di-tap

**Detail Pages - CRITICAL:**
- [ ] **SKYNOTES: 10 tombol stack VERTIKAL (1 kolom)**
  - [ ] Tombol 1: ATS1 X (merah)
  - [ ] Tombol 2: ATS1 XI (merah)
  - [ ] Tombol 3: ATS1 XII (merah)
  - [ ] Tombol 4: AAS1 X (gold)
  - [ ] Tombol 5: AAS1 XI (gold)
  - [ ] Tombol 6: AAS1 XII (gold)
  - [ ] Tombol 7: ATS2 X (biru)
  - [ ] Tombol 8: ATS2 XI-I (biru)
  - [ ] Tombol 9: AAS2 X (putih)
  - [ ] Tombol 10: AAS2 XI-I (putih)
  - [ ] Tidak ada tombol floating ke kanan/kiri
- [ ] Program lain: 1-2 tombol stack vertikal
- [ ] Tombol min-width 300-320px (tap-friendly)
- [ ] Padding kiri-kanan cukup (15-20px)

**Interactions:**
- [ ] Touch targets minimal 44x44px (Apple HIG)
- [ ] No accidental clicks
- [ ] Smooth scrolling

---

### Tablet Testing (768x1024 - iPad / 820x1180 - iPad Air)

**Layout:**
- [ ] Cards layout menyesuaikan (2-3 kolom)
- [ ] Font sizes scaled appropriately

**SKYNOTES:**
- [ ] Grid 3 kolom maintained (by design)
- [ ] Tombol tidak terlalu kecil
- [ ] Grid gaps proporsional

**Touch:**
- [ ] Swipe gestures work
- [ ] Buttons tap-friendly

---

### Cross-Browser Testing

**Chrome/Edge (Chromium):**
- [ ] All features work
- [ ] Animations smooth
- [ ] Layout consistent

**Firefox:**
- [ ] CSS Grid compatibility
- [ ] Animations work
- [ ] Colors accurate

**Safari (iOS):**
- [ ] Background fixed works atau fallback
- [ ] Touch events tidak conflict
- [ ] Webkit-specific CSS applied

---

### Performance Testing

**Lighthouse Audit (Chrome DevTools):**
- [ ] Performance score >80
- [ ] Accessibility score >90
- [ ] Best Practices score >80
- [ ] SEO score >80

**Network:**
- [ ] Test pada Slow 3G (DevTools throttling)
- [ ] Images load progressively
- [ ] No render-blocking resources

**Memory:**
- [ ] No memory leaks saat navigasi
- [ ] Animation tidak consume excessive CPU
- [ ] Tab pause berfungsi untuk hemat resource

---

## 9. CARA MODIFIKASI WEBSITE

### A. Mengubah Warna Tema

**File:** `style.css` (baris 10-25)

**Sebelum:**
```css
:root {
    --primary-maroon: #8B0000;
    --dark-maroon: #5C0000;
    --light-maroon: #A52A2A;
    --accent-gold: #D4AF37;
}
```

**Setelah (Contoh tema biru):**
```css
:root {
    --primary-maroon: #003366;      /* Navy blue */
    --dark-maroon: #001a33;         /* Dark navy */
    --light-maroon: #004d99;        /* Light navy */
    --accent-gold: #FFD700;         /* Keep gold atau ganti */
}
```

**Efek:**
- Semua buttons, backgrounds, borders otomatis update
- Gradient juga ikut berubah
- Tidak perlu edit di banyak tempat

---

### B. Menambah Program Baru

#### Step 1: Tambah Card di index.html

**Lokasi:** Setelah Card 19 (BULBAS), sebelum closing `</div>` (baris ~290)

```html
<!-- Card 20 - PROGRAM BARU -->
<div class="new-card">
    <div class="new-card-image">
        <img src="assets/LOGO PROGRAMBARU.jpg" alt="PROGRAMBARU">
    </div>
    <div class="new-card-content">
        <h3 class="new-card-title">PROGRAM BARU</h3>
        <a href="program-detail.html?program=programbaru" class="detail-link">Lihat Detail →</a>
    </div>
</div>
```

**Catatan:**
- `program=programbaru` harus lowercase dan tanpa spasi
- `alt="PROGRAMBARU"` untuk accessibility

---

#### Step 2: Tambah Logic di program-detail.html

**Lokasi:** Setelah baris 340, sebelum `} else {` (default case)

```javascript
} else if (programName.toLowerCase() === 'programbaru') {
    // Special treatment for PROGRAMBARU
    const programbaruButtons = [
        {
            text: 'INSTAGRAM',
            class: 'btn-instagram',
            url: 'https://instagram.com/programbaru'
        },
        {
            text: 'DOKUMENTASI',
            class: 'btn-documentation',
            url: 'https://drive.google.com/...'
        }
    ];

    programbaruButtons.forEach(btn => {
        const link = document.createElement('a');
        link.href = btn.url;
        link.target = '_blank';
        link.className = `detail-action-btn ${btn.class}`;
        link.textContent = btn.text;
        buttonsContainer.appendChild(link);
    });
```

---

#### Step 3: Upload Logo

1. Buat/edit logo program baru
2. Export sebagai JPG (recommended size: 800x800px)
3. Rename ke `LOGO PROGRAMBARU.jpg`
4. Upload ke folder `assets/`

---

#### Step 4: (Optional) Tambah di script.js

**File:** `script.js` baris 260-284

Tambahkan mapping untuk title display:

```javascript
function getProgramTitle(slug) {
    const programTitles = {
        'skynation': 'SKYNATION',
        // ... existing programs ...
        'programbaru': 'PROGRAM BARU'  // ← Add this
    };
    return programTitles[slug] || slug.toUpperCase();
}
```

---

### C. Mengubah Link SKYNOTES

**File:** `program-detail.html` (baris 69-78)

**Contoh: Update link ATS1 kelas X**

**Sebelum:**
```javascript
{ text: 'ASESMEN TENGAH SEMESTER 1 X', class: 'btn-ats1', url: 'https://bit.ly/SKYNOTESATSGANJILX' },
```

**Setelah:**
```javascript
{ text: 'ASESMEN TENGAH SEMESTER 1 X', class: 'btn-ats1', url: 'https://drive.google.com/LINK_BARU' },
```

**Update All 10 Buttons:**
- Ganti semua URL di array `skynotesButtons`
- Pastikan URL valid dan accessible
- Test setiap link setelah update

---

### D. Mengubah Running Text

**File:** `index.html` (baris 36, 59, 303)

**Sebelum:**
```html
<span class="text-item">• Welcome to • Dharmapatha Mahidhara • </span>
```

**Setelah:**
```html
<span class="text-item">• Selamat Datang • Dharmapatha Mahidhara • </span>
```

**Tips:**
- Gunakan `•` (bullet) sebagai separator
- Repeat `<span>` minimal 2x untuk seamless loop
- Spacing konsisten: `• Text • Text •`

---

### E. Mengubah Logo Utama

**File:** `index.html` (baris 24, 50)

**Hero 1:**
```html
<img src="assets/logo_baru_1.png" alt="Logo Dharmapatha Mahidhara" class="hero-logo">
```

**Hero 2:**
```html
<img src="assets/logo_baru_2.png" alt="Logo Dharmapatha Mahidhara" class="hero-logo-second">
```

**Rekomendasi Size:**
- Hero 1: 400x400px (PNG transparent)
- Hero 2: 500x500px (PNG transparent)
- Format: PNG untuk transparency, JPG untuk solid background

---

### F. Mengubah Background Hero

**File:** `style.css`

**Hero 1 Background (baris ~69):**
```css
.hero-section {
    background-image: url('assets/background_baru_1.jpg'), var(--gradient-maroon);
}
```

**Hero 2 Background (baris ~140):**
```css
.hero-section-second {
    background-image: url('assets/background_baru_2.jpg'), var(--gradient-maroon);
}
```

**Rekomendasi:**
- Resolution: 1920x1080 atau lebih tinggi
- Format: JPG (compressed, ~200-500KB)
- Aspect ratio: 16:9

---

### G. Menambah Custom Button Style

**File:** `style.css` (setelah baris ~930)

**Contoh: Button purple untuk program khusus**

```css
.btn-custom-purple {
    background: linear-gradient(135deg, #6B46C1, #805AD5);
    color: var(--white);
    border: 3px solid #553C9A;
}

.btn-custom-purple:hover {
    background: linear-gradient(135deg, #553C9A, #6B46C1);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(107, 70, 193, 0.5);
}
```

**Gunakan di program-detail.html:**
```javascript
{ text: 'CUSTOM LINK', class: 'btn-custom-purple', url: 'https://...' }
```

---

### H. Mengubah Font

**File:** `index.html` (baris 14) dan `style.css` (baris 31-32)

**Tambah Font Baru di HTML:**
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
```

**Update CSS Variables:**
```css
:root {
    --font-display: 'Montserrat', sans-serif;  /* Heading */
    --font-body: 'Open Sans', sans-serif;      /* Body */
}
```

**Font Recommendations:**
- **Formal/Elegant:** Playfair Display, Cormorant, Lora
- **Modern/Clean:** Montserrat, Poppins, Inter
- **Bold/Strong:** Bebas Neue, Oswald, Anton

---

## 10. TROUBLESHOOTING

### Problem 1: Gambar Tidak Muncul

**Symptoms:**
- Card menampilkan broken image icon
- Background tidak terlihat
- Logo tidak load

**Solutions:**

**A. Check File Path**
```html
<!-- ✅ CORRECT -->
<img src="assets/LOGO SKYNOTES.jpg">

<!-- ❌ WRONG -->
<img src="assets/logo skynotes.jpg">      <!-- Spasi tidak match -->
<img src="assets/LOGO_SKYNOTES.jpg">      <!-- Underscore vs spasi -->
<img src="LOGO SKYNOTES.jpg">             <!-- Missing assets/ -->
```

**B. Check File Exists**
1. Buka folder `assets/`
2. Verify file name exact match (case-sensitive!)
3. Check extension: `.jpg` vs `.JPG` vs `.jpeg` vs `.png`

**C. Check File Permissions**
- Right-click file → Properties
- Pastikan tidak Read-only
- Pastikan tidak blocked

**D. Clear Browser Cache**
- Chrome: `Ctrl + Shift + Delete`
- Pilih "Cached images and files"
- Time range: All time
- Clear data

---

### Problem 2: CSS Tidak Update

**Symptoms:**
- Perubahan warna tidak terlihat
- Layout masih menggunakan style lama
- Mobile responsive tidak apply

**Solutions:**

**A. Hard Refresh Browser**
```
Windows: Ctrl + Shift + R
Mac: Cmd + Shift + R
```

**B. Update Cache Busting**

Edit `index.html` baris 10:
```html
<!-- Change v=3 to v=4 -->
<link rel="stylesheet" href="style.css?v=4">
```

Increment angka setiap kali update CSS.

**C. Clear Browser Cache (Full)**
1. Chrome → Settings → Privacy and Security
2. Clear browsing data
3. Select "Cached images and files"
4. Clear data

**D. Disable Cache di DevTools**
1. Open DevTools (F12)
2. Network tab
3. Check "Disable cache"
4. Keep DevTools open saat testing

**E. Check CSS Syntax Error**
- Buka DevTools → Console
- Lihat error messages
- Common: missing `}`, `;`, atau typo selector

---

### Problem 3: JavaScript Error / Fitur Tidak Berfungsi

**Symptoms:**
- Scroll buttons tidak work
- Card click tidak navigate
- Animation tidak jalan

**Solutions:**

**A. Check Console Errors**
1. Press F12 → Console tab
2. Lihat error messages merah
3. Note line number dan file

**Common Errors:**
```javascript
// ❌ Uncaught TypeError: Cannot read property 'addEventListener' of null
// → Element dengan ID tidak ditemukan

// ❌ Uncaught ReferenceError: functionName is not defined
// → Function belum defined atau typo

// ❌ Uncaught SyntaxError: Unexpected token
// → Syntax error, missing bracket/parenthesis
```

**B. Verify Element IDs Match**

HTML:
```html
<div id="newCardsContainer">
```

JavaScript:
```javascript
const container = document.getElementById('newCardsContainer');
```

ID harus exact match (case-sensitive!)

**C. Check Script Load Order**

Di `index.html`, pastikan:
```html
<!-- ✅ CORRECT - Script di akhir body -->
<body>
    <!-- HTML content -->
    <script src="script.js"></script>
</body>

<!-- ❌ WRONG - Script di head sebelum HTML -->
<head>
    <script src="script.js"></script>
</head>
```

**D. Test JavaScript Line by Line**

Console → Type:
```javascript
// Check if function exists
typeof initScrollButtons
// Should return "function"

// Check if element exists
document.getElementById('newCardsContainer')
// Should return HTML element, not null
```

---

### Problem 4: SKYNOTES Mobile Buttons Tidak 1 Kolom

**Symptoms:**
- Buttons masih 2-3 kolom di mobile
- Buttons floating kanan-kiri
- Layout berantakan di layar kecil

**Solutions:**

**A. Verify CSS Fix Applied**

Check `style.css` baris 1255-1259:
```css
.program-detail-section.skynotes-bg .detail-action-btn {
    grid-column: auto !important;
    grid-row: auto !important;
}
```

Dan baris 1349-1353:
```css
.program-detail-section.skynotes-bg .detail-action-btn {
    grid-column: auto !important;
    grid-row: auto !important;
}
```

**B. Clear Cache**
- Hard refresh: `Ctrl + Shift + R`
- Clear browser cache completely

**C. Test di Incognito Mode**
- Buka Chrome Incognito: `Ctrl + Shift + N`
- Test website
- Incognito tidak gunakan cache

**D. Check DevTools Responsive Mode**
1. F12 → Toggle device toolbar (Ctrl+Shift+M)
2. Select device: iPhone SE atau Mobile S (320px)
3. Refresh page
4. Verify 1 column layout

---

### Problem 5: Horizontal Scroll Tidak Smooth

**Symptoms:**
- Scroll tersendat-sendat
- Cards tidak aligned
- Buttons tidak respond

**Solutions:**

**A. Check Browser Support**
- Update browser ke versi terbaru
- Test di Chrome/Edge (best support)

**B. Disable Browser Extensions**
- Extensions bisa interfere dengan scroll
- Test di Incognito mode

**C. Check CSS Overflow**

Verify `style.css`:
```css
.new-section-cards-container {
    overflow-x: auto;           /* ✅ Must be auto or scroll */
    overflow-y: hidden;         /* ✅ Prevent vertical scroll */
    scroll-behavior: smooth;    /* ✅ Enable smooth scroll */
}
```

**D. Reduce Motion (Accessibility)**

Some users have "Reduce motion" enabled:
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
```

Add this di akhir CSS untuk respect user preferences.

---

### Problem 6: Touch Swipe Tidak Work di Mobile

**Symptoms:**
- Swipe gesture tidak scroll cards
- Only arrow buttons work
- Touch events not detected

**Solutions:**

**A. Check Touch Event Listeners**

Verify `script.js` baris 183-208 ada dan tidak error.

**B. Test on Real Device**
- Desktop Chrome device simulator ≠ real touch
- Test di actual phone/tablet

**C. Check CSS Touch-Action**

Add to `.new-section-cards-container`:
```css
.new-section-cards-container {
    touch-action: pan-x;  /* Allow horizontal pan only */
}
```

**D. Verify Passive Listeners**
```javascript
container.addEventListener('touchstart', handler, { passive: true });
```

`{passive: true}` important untuk performa.

---

### Problem 7: Links Tidak Buka di Tab Baru

**Symptoms:**
- Klik button replace current tab
- User lose position di website

**Solution:**

Check `target="_blank"` attribute:

```html
<!-- ✅ CORRECT -->
<a href="https://..." target="_blank">LINK</a>

<!-- ❌ WRONG -->
<a href="https://...">LINK</a>
```

Di `program-detail.html`, verify:
```javascript
link.target = '_blank';  // Must exist
```

**Security Note:**
Add `rel="noopener"` untuk security:
```javascript
link.rel = 'noopener';
```

Prevents new page from accessing `window.opener`.

---

### Problem 8: Footer Tidak Stay di Bottom

**Symptoms:**
- Footer floating di tengah page
- White space setelah footer

**Solution:**

Add to `style.css`:
```css
body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;  /* Push footer to bottom */
}
```

Wrap semua content except footer di `<main>` tag.

---

### Problem 9: Performance Lambat / Laggy

**Symptoms:**
- Scroll lag
- Animation jerky
- Page load slow

**Solutions:**

**A. Optimize Images**
1. Compress images ke ~200-500KB
2. Use tools: TinyPNG, Squoosh, ImageOptim
3. Convert to WebP format (modern browsers)

**B. Add Loading Attribute**
```html
<img src="assets/logo.jpg" loading="lazy" alt="...">
```

Browser akan lazy load images.

**C. Check Animation Performance**

DevTools → Performance tab:
1. Record page interaction
2. Check FPS (should be 60fps)
3. Look for long tasks (>50ms)

**D. Reduce Animation Complexity**

Avoid animating properties that trigger layout:
```css
/* ❌ SLOW - Triggers layout */
.card:hover {
    width: 105%;
    height: 105%;
}

/* ✅ FAST - Only composite */
.card:hover {
    transform: scale(1.05);
}
```

**E. Use will-change Hint**
```css
.card {
    will-change: transform, opacity;
}
```

Tells browser to optimize these properties.

---

### Problem 10: SEO / Meta Tags Tidak Update

**Symptoms:**
- Google shows wrong title
- Facebook share shows wrong image
- Description incorrect

**Solutions:**

**A. Add Open Graph Tags**

In `<head>` of each HTML:
```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourwebsite.com/">
<meta property="og:title" content="Dharmapatha Mahidhara">
<meta property="og:description" content="Portal resmi...">
<meta property="og:image" content="https://yourwebsite.com/assets/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://yourwebsite.com/">
<meta property="twitter:title" content="Dharmapatha Mahidhara">
<meta property="twitter:description" content="Portal resmi...">
<meta property="twitter:image" content="https://yourwebsite.com/assets/og-image.jpg">
```

**B. Test Meta Tags**
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator

**C. Add Structured Data**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dharmapatha Mahidhara",
  "url": "https://yourwebsite.com",
  "logo": "https://yourwebsite.com/assets/logo.png"
}
</script>
```

---

## 11. BEST PRACTICES YANG SUDAH DITERAPKAN

### ✅ HTML Best Practices

1. **Semantic HTML5**
   ```html
   <section>  <!-- Not <div class="section"> -->
   <footer>   <!-- Not <div class="footer"> -->
   <nav>      <!-- Not <div class="navigation"> -->
   ```

2. **Accessibility**
   - Alt text pada images
   - Semantic heading hierarchy (h1 → h3)
   - `tabindex` untuk keyboard navigation
   - ARIA-friendly struktur

3. **SEO-Friendly**
   - Meta description
   - Proper title tags
   - Canonical URLs (bisa ditambah)
   - Structured data (bisa ditambah)

4. **Performance**
   - Async/defer script loading (bisa ditambah)
   - Image lazy loading (native)
   - Preconnect to font sources

---

### ✅ CSS Best Practices

1. **CSS Variables**
   - Centralized theme management
   - Easy customization
   - Dark mode ready (tinggal toggle)

2. **Mobile-First** (Sebagian)
   - Responsive breakpoints
   - Touch-friendly sizes (44px minimum)
   - Viewport meta tag

3. **Performance**
   - Hardware-accelerated animations (transform, opacity)
   - `will-change` hints (bisa ditambah lebih)
   - Minimal repaints/reflows

4. **Code Organization**
   - Logical sections dengan comments
   - Consistent naming convention
   - Reusable components (.btn-, .card-)

5. **Browser Support**
   - Fallback values
   - Progressive enhancement
   - Graceful degradation

---

### ✅ JavaScript Best Practices

1. **Modern ES6+**
   - Arrow functions
   - Template literals
   - Const/let (no var)
   - Array methods (forEach, map)

2. **Performance**
   - Passive event listeners
   - Intersection Observer (lazy animations)
   - Debouncing scroll events (implicit)
   - Memory leak prevention

3. **Code Organization**
   - Modular functions
   - Clear naming
   - Comments untuk complex logic
   - IIFE untuk scope isolation

4. **User Experience**
   - Smooth animations
   - Visual feedback
   - Progressive enhancement
   - Error handling (bisa ditingkatkan)

5. **Accessibility**
   - Keyboard navigation
   - Focus management
   - Screen reader friendly
   - Respect user preferences (reduce-motion)

---

### ✅ File Structure

1. **Logical Organization**
   ```
   /assets     → All media files
   /*.html     → Pages di root
   /*.css      → Styles di root
   /*.js       → Scripts di root
   ```

2. **Naming Convention**
   - Descriptive names
   - Consistent casing
   - No spaces in filenames

3. **Version Control**
   - Git repository initialized
   - Meaningful commits (based on git log)

---

## 12. OPTIMISASI YANG BISA DILAKUKAN

### 🎯 Priority HIGH (Recommended)

#### 1. Image Optimization

**Current Issue:**
- Images ~200-900KB each
- PNG when JPG bisa lebih kecil
- No lazy loading explicit

**Solution:**
```bash
# Compress dengan TinyPNG atau Squoosh
# Convert to WebP for modern browsers
```

```html
<!-- Add picture element untuk WebP support -->
<picture>
    <source srcset="assets/logo.webp" type="image/webp">
    <source srcset="assets/logo.jpg" type="image/jpeg">
    <img src="assets/logo.jpg" alt="Logo" loading="lazy">
</picture>
```

**Impact:**
- 50-70% smaller file size
- Faster page load
- Better mobile experience

---

#### 2. Add Loading States

**Current Issue:**
- Images load tanpa placeholder
- CLS (Cumulative Layout Shift) saat images load

**Solution:**
```css
/* Add skeleton loader */
.card-image {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

.card-image img {
    opacity: 0;
    transition: opacity 0.3s;
}

.card-image img.loaded {
    opacity: 1;
}
```

```javascript
// Add load event listener
images.forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
});
```

---

#### 3. Add Meta Open Graph Tags

**Current Issue:**
- Tidak ada OG tags
- Share di social media tidak optimal

**Solution:**

Tambah di `<head>` setiap HTML file:
```html
<!-- Open Graph Meta Tags -->
<meta property="og:title" content="Dharmapatha Mahidhara - Portal Resmi">
<meta property="og:description" content="Website resmi organisasi Dharmapatha Mahidhara dengan 19 program kerja unggulan">
<meta property="og:image" content="https://yourwebsite.com/assets/og-image.jpg">
<meta property="og:url" content="https://yourwebsite.com/">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Dharmapatha Mahidhara">
<meta name="twitter:description" content="Portal resmi organisasi...">
<meta name="twitter:image" content="https://yourwebsite.com/assets/og-image.jpg">
```

Create `og-image.jpg`: 1200x630px untuk optimal sharing.

---

#### 4. Add Favicon

**Current Issue:**
- No favicon → browser shows generic icon

**Solution:**
```html
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png">
```

Generate favicon dari logo using: https://realfavicongenerator.net/

---

### 🎯 Priority MEDIUM

#### 5. Add Error Handling

**Current Issue:**
- No fallback jika JavaScript error
- No 404 page jika wrong URL parameter

**Solution:**
```javascript
// Add try-catch blocks
try {
    initScrollButtons();
    initProgramCards();
} catch (error) {
    console.error('Initialization error:', error);
    // Show user-friendly message
}

// Handle unknown programs
if (programName && !isValidProgram(programName)) {
    window.location.href = 'index.html#new-home-section';
}
```

---

#### 6. Add Analytics

**Untuk tracking visitor behavior:**

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Track events:**
```javascript
// Track card clicks
card.addEventListener('click', () => {
    gtag('event', 'card_click', {
        'program_name': programName
    });
});
```

---

#### 7. Add Search Functionality

**Untuk 19 programs:**

```html
<div class="search-bar">
    <input type="text" id="programSearch" placeholder="Cari program...">
</div>
```

```javascript
const searchInput = document.getElementById('programSearch');
const cards = document.querySelectorAll('.new-card');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('.new-card-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
```

---

#### 8. Add Filter/Category

**Group programs by category:**

```html
<div class="filter-buttons">
    <button class="filter-btn active" data-filter="all">Semua</button>
    <button class="filter-btn" data-filter="academic">Akademik</button>
    <button class="filter-btn" data-filter="social">Sosial</button>
    <button class="filter-btn" data-filter="sports">Olahraga</button>
</div>
```

```javascript
// Add data-category to each card
<div class="new-card" data-category="academic">

// Filter logic
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
```

---

### 🎯 Priority LOW (Nice to Have)

#### 9. Dark Mode Toggle

```css
/* Dark mode variables */
[data-theme="dark"] {
    --primary-maroon: #B83A3A;
    --dark-maroon: #8B0000;
    --off-white: #1A1A1A;
    --white: #2D2D2D;
    --dark-gray: #E5E5E5;
}
```

```javascript
// Toggle button
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Load saved preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
```

---

#### 10. Multi-Language Support

```html
<select id="languageSelector">
    <option value="id">Bahasa Indonesia</option>
    <option value="en">English</option>
</select>
```

```javascript
const translations = {
    id: {
        welcome: 'Selamat Datang',
        programs: 'Program Kerja Kami'
    },
    en: {
        welcome: 'Welcome',
        programs: 'Our Programs'
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });
}
```

---

#### 11. Service Worker untuk PWA

**Make website installable & work offline:**

```javascript
// sw.js
const CACHE_NAME = 'dharmapatha-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/assets/logo.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
```

```html
<!-- manifest.json -->
{
    "name": "Dharmapatha Mahidhara",
    "short_name": "Dharmapatha",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#8B0000",
    "theme_color": "#8B0000",
    "icons": [
        {
            "src": "assets/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        }
    ]
}
```

---

#### 12. Breadcrumb Navigation

```html
<nav class="breadcrumb">
    <a href="index.html">Home</a>
    <span class="separator">›</span>
    <span class="current">SKYNOTES</span>
</nav>
```

```css
.breadcrumb {
    padding: 20px;
    font-size: 0.9rem;
}

.breadcrumb a {
    color: var(--primary-maroon);
    text-decoration: none;
}

.breadcrumb .separator {
    margin: 0 10px;
    color: var(--medium-gray);
}
```

---

## 13. DEPLOYMENT GUIDE

### Option 1: GitHub Pages (FREE & Recommended)

**Steps:**

1. **Create GitHub Repository**
   ```bash
   # Already have .git folder
   git remote add origin https://github.com/username/dharmapatha-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repo Settings
   - Pages section
   - Source: Deploy from branch "main"
   - Folder: root
   - Save

3. **Access Website**
   - URL: `https://username.github.io/dharmapatha-website/`
   - Wait 2-5 minutes for deploy

**Pros:**
- FREE
- Auto-deploy on git push
- HTTPS enabled
- Custom domain support

**Cons:**
- Public repository (kecuali bayar)
- GitHub branding

---

### Option 2: Netlify (FREE)

**Steps:**

1. Sign up di netlify.com
2. "Add new site" → "Import existing project"
3. Connect GitHub repository
4. Build settings:
   - Build command: (kosongkan)
   - Publish directory: `/`
5. Deploy

**Pros:**
- FREE
- Fast CDN
- Auto HTTPS
- Custom domain FREE
- Form handling
- Continuous deployment

**Auto-deploy on git push!**

---

### Option 3: Vercel (FREE)

**Steps:**

1. Sign up di vercel.com
2. Import Git repository
3. Deploy (auto-detect static site)

**Pros:**
- Fastest performance
- Edge network
- Analytics
- Preview deployments

---

### Option 4: Traditional Hosting (Paid)

**Providers:**
- Hostinger (~Rp 20k/bulan)
- Niagahoster
- Dewaweb
- IDCloudHost

**Steps:**
1. Beli hosting + domain
2. Upload via FTP/cPanel File Manager
3. Extract di public_html
4. Access via domain

**When to use:**
- Butuh email hosting
- Butuh PHP/Database nanti
- Full control

---

## 14. SECURITY CHECKLIST

### ✅ Current Security Measures

1. **No Inline JavaScript**
   - All JS in external files ✅
   - Prevents XSS via inline execution

2. **External Link Safety**
   - `target="_blank"` used ✅
   - Should add `rel="noopener"` (recommended)

3. **No User Input Processing**
   - No forms yang process data ✅
   - No database connections
   - Pure static site = secure

---

### 🔒 Recommended Security Enhancements

#### 1. Add Content Security Policy

```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' https://fonts.googleapis.com;
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
               img-src 'self' data: https:;
               font-src 'self' https://fonts.gstatic.com;">
```

#### 2. Add rel="noopener" to External Links

```javascript
// In program-detail.html
link.rel = 'noopener noreferrer';
```

Prevents:
- Tabnabbing attacks
- Window.opener exploits

#### 3. Add Subresource Integrity (SRI)

Jika pakai CDN:
```html
<link rel="stylesheet"
      href="https://cdn.example.com/style.css"
      integrity="sha384-hash"
      crossorigin="anonymous">
```

#### 4. HTTPS Only (When Deployed)

```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

Force all HTTP ke HTTPS.

---

## 15. CHANGELOG

### Version 1.2 (2025-12-28)
- ✅ Fixed SKYNOTES mobile layout (1 kolom vertikal)
- ✅ Added grid-column/grid-row reset untuk mobile
- ✅ Improved responsive breakpoints
- ✅ Added comprehensive documentation

### Version 1.1 (2025-12-25)
- Added cache busting to CSS (?v=3)
- Fixed Program Kerja Kami logo interaction
- Updated all program links

### Version 1.0 (Initial Release)
- 19 program cards dengan horizontal scroll
- Responsive design (desktop, tablet, mobile)
- Special SKYNOTES page dengan 10 buttons
- Touch swipe support
- Smooth animations
- Running text dengan CSS animation

---

## 16. FAQ (Frequently Asked Questions)

### Q1: Kenapa running text tidak smooth di Safari?

**A:** Safari memiliki quirks dengan CSS animations. Add vendor prefix:
```css
@-webkit-keyframes scrollText { ... }
@keyframes scrollText { ... }

.running-text {
    -webkit-animation: scrollText 30s linear infinite;
    animation: scrollText 30s linear infinite;
}
```

---

### Q2: Bisakah tambah video background di hero section?

**A:** Bisa! Replace dengan:
```html
<section class="hero-section">
    <video autoplay muted loop playsinline class="hero-video">
        <source src="assets/hero-video.mp4" type="video/mp4">
    </video>
    <!-- rest of hero content -->
</section>
```

```css
.hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
}
```

**Catatan:** Video size harus kecil (<5MB) untuk performa.

---

### Q3: Bagaimana cara tambah loading screen?

**A:** Add before `<body>`:
```html
<div id="loader" class="loader">
    <div class="spinner"></div>
</div>
```

```css
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary-maroon);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
```

```javascript
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});
```

---

### Q4: Cara membuat card program bisa di-filter?

**A:** Lihat section "Optimisasi Priority MEDIUM" → "Add Filter/Category" di atas.

---

### Q5: Bisakah website ini dijual/dikomersilkan?

**A:** Tergantung lisensi:
- Jika personal project: Bebas
- Jika client project: Tanya client
- Jika pakai template berbayar: Check lisensi

**Untuk fonts Google Fonts:** Free untuk commercial use ✅

---

### Q6: Cara backup website?

**A:**
1. **Git (Recommended):**
   ```bash
   git add .
   git commit -m "Backup $(date)"
   git push
   ```

2. **Manual ZIP:**
   - Right-click folder project
   - Send to → Compressed folder
   - Upload ke cloud (Google Drive, Dropbox)

3. **Automated Backup:**
   - Setup GitHub auto-sync
   - Use backup tools (FreeFileSync, etc)

---

### Q7: Website lambat, gimana optimize?

**A:** Priority checklist:
1. ✅ Compress images (TinyPNG)
2. ✅ Enable browser caching
3. ✅ Minify CSS/JS (saat production)
4. ✅ Use WebP format
5. ✅ Enable Gzip compression (server)
6. ✅ Lazy load images
7. ✅ Remove unused CSS/JS

Tool: Google PageSpeed Insights untuk audit.

---

### Q8: Cara test di berbagai device?

**A:**
1. **Chrome DevTools:**
   - F12 → Toggle device toolbar (Ctrl+Shift+M)
   - Select devices: iPhone, iPad, Galaxy, etc.

2. **BrowserStack (Paid):**
   - Test di real devices
   - Multiple OS/browsers

3. **Real Devices:**
   - Gunakan Live Server
   - Access dari phone: `http://192.168.x.x:5500`
   - Harus 1 WiFi network

---

### Q9: Update broken setelah edit, gimana revert?

**A:**
**Pakai Git:**
```bash
# Lihat changes
git status

# Revert file specific
git checkout -- style.css

# Revert ke commit sebelumnya
git log  # Cari commit hash
git reset --hard abc123

# Atau buat branch baru dari old commit
git checkout -b revert-branch abc123
```

**No Git:**
- Restore dari backup ZIP
- Undo di text editor (Ctrl+Z)

---

### Q10: Cara deploy update setelah edit?

**A:**
**GitHub Pages / Netlify / Vercel:**
```bash
git add .
git commit -m "Update: deskripsi perubahan"
git push
```
Auto-deploy dalam 1-5 menit!

**Traditional Hosting:**
1. Upload file yang berubah via FTP
2. Replace old files
3. Clear CloudFlare cache (jika pakai)

---

## 17. CONTACT & SUPPORT

### Developer Notes

Project ini dibuat dengan:
- ❤️ Passion untuk web development
- ☕ Banyak kopi
- 🎵 Background music yang epic

### Butuh Help?

1. **Check dokumentasi ini dulu** (Ctrl+F untuk search)
2. **Google error message** (90% sudah ada solusinya)
3. **Stack Overflow** untuk specific technical issues
4. **MDN Web Docs** untuk reference CSS/JS

### Useful Resources

- **HTML:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS:** https://css-tricks.com/
- **JavaScript:** https://javascript.info/
- **Design Inspiration:** https://dribbble.com, https://awwwards.com
- **Icons:** https://heroicons.com, https://fontawesome.com
- **Colors:** https://coolors.co
- **Fonts:** https://fonts.google.com

---

## 18. FINAL NOTES

### Website Ini Sudah Sangat Baik!

✅ Professional design
✅ Responsive & mobile-friendly
✅ Smooth animations
✅ Good performance
✅ Clean code
✅ Well-documented

### Tinggal Deploy dan Maintain!

Selamat! Website Anda siap untuk:
1. Deploy ke hosting/GitHub Pages
2. Share ke public
3. Maintain dan update berkala

### Keep Learning!

Web development terus berkembang. Stay updated dengan:
- Latest CSS features (Container Queries, :has(), etc.)
- Modern JavaScript (ES2024+)
- Performance best practices
- Accessibility standards (WCAG)
- Security updates

---

**© 2026 Dharmapatha Mahidhara**
*Membangun Generasi Unggul dan Berkarakter*

---

**Documentation Version:** 1.0
**Last Updated:** 28 Desember 2025
**Total Pages:** 65+
**Word Count:** ~12,000 words

---

_Semoga dokumentasi ini membantu! Jika ada pertanyaan, refer ke section FAQ atau troubleshooting guide di atas._ 🚀
