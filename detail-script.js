// ==========================================
// DETAIL PAGE SCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    loadProgramDetails();
    initGallery();
});

// ==========================================
// LOAD PROGRAM DETAILS FROM URL
// ==========================================

function loadProgramDetails() {
    // Get program name from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const programSlug = urlParams.get('program');

    if (!programSlug) {
        window.location.href = 'index.html';
        return;
    }

    // Program data
    const programData = {
        'skynation': {
            title: 'SKYNATION',
            icon: '🌟',
            subtitle: 'Program Pembinaan Karakter dan Kepemimpinan',
            goal: 'Membentuk karakter kepemimpinan yang kuat dan berintegritas tinggi melalui serangkaian pelatihan dan kegiatan pengembangan diri.',
            schedule: 'Dilaksanakan setiap bulan dengan berbagai sesi workshop dan mentoring yang terstruktur.',
            target: 'Seluruh anggota organisasi yang ingin mengembangkan jiwa kepemimpinan dan karakter positif.'
        },
        'bulbas': {
            title: 'BULBAS',
            icon: '📚',
            subtitle: 'Belajar Lingkungan Bersama Asyik',
            goal: 'Menciptakan lingkungan belajar yang menyenangkan dan produktif untuk meningkatkan prestasi akademik.',
            schedule: 'Program dilaksanakan setiap semester dengan sesi belajar bersama rutin.',
            target: 'Mahasiswa yang ingin meningkatkan pemahaman akademik melalui metode belajar kolaboratif.'
        },
        'skybattle': {
            title: 'SKYBATTLE',
            icon: '⚔️',
            subtitle: 'Kompetisi dan Turnamen Akademik',
            goal: 'Mengasah kemampuan akademik dan kompetitif melalui berbagai turnamen dan lomba.',
            schedule: 'Kompetisi diadakan setiap semester dengan berbagai kategori dan tingkatan.',
            target: 'Peserta dari berbagai jurusan yang ingin menguji kemampuan akademik mereka.'
        },
        'kiitchen-of-kindness': {
            title: 'KIITCHEN OF KINDNESS',
            icon: '🍳',
            subtitle: 'Program Berbagi dan Kepedulian Sosial',
            goal: 'Menumbuhkan rasa empati dan kepedulian sosial melalui kegiatan berbagi dengan masyarakat.',
            schedule: 'Kegiatan berbagi dilaksanakan secara berkala sesuai dengan kebutuhan masyarakat.',
            target: 'Masyarakat yang membutuhkan serta anggota organisasi yang peduli sosial.'
        },
        'imf': {
            title: 'IMF',
            icon: '🎯',
            subtitle: 'Inspirasi Mahasiswa Fest',
            goal: 'Festival mahasiswa yang menampilkan berbagai talenta dan inspirasi untuk generasi muda.',
            schedule: 'Festival tahunan dengan berbagai rangkaian acara dan pertunjukan.',
            target: 'Seluruh mahasiswa dan masyarakat umum yang ingin mendapatkan inspirasi.'
        },
        'skyavenue': {
            title: 'SKYAVENUE',
            icon: '🛍️',
            subtitle: 'Bazar dan Kegiatan Kewirausahaan',
            goal: 'Mengembangkan jiwa entrepreneurship melalui bazar dan kegiatan kewirausahaan.',
            schedule: 'Bazar diadakan secara periodik dengan berbagai tenant dan produk.',
            target: 'Mahasiswa entrepreneur dan masyarakat umum yang ingin berbelanja produk kreatif.'
        },
        'skyrun': {
            title: 'SKYRUN',
            icon: '🏃',
            subtitle: 'Kegiatan Olahraga dan Kebugaran',
            goal: 'Meningkatkan kesehatan dan kebugaran melalui aktivitas lari dan olahraga bersama.',
            schedule: 'Acara lari diadakan setiap bulan dengan rute dan jarak yang bervariasi.',
            target: 'Seluruh anggota dan masyarakat yang peduli dengan kesehatan dan kebugaran.'
        },
        'speak-up': {
            title: 'SPEAK UP!',
            icon: '🎤',
            subtitle: 'Forum Diskusi dan Public Speaking',
            goal: 'Mengembangkan kemampuan berbicara di depan umum dan berpikir kritis.',
            schedule: 'Forum diskusi diadakan setiap minggu dengan tema yang berbeda-beda.',
            target: 'Mahasiswa yang ingin meningkatkan kemampuan komunikasi dan critical thinking.'
        },
        'skymun': {
            title: 'SKYMUN',
            icon: '🌍',
            subtitle: 'Model United Nations Conference',
            goal: 'Simulasi sidang PBB untuk meningkatkan pemahaman tentang isu global dan diplomasi.',
            schedule: 'Konferensi tahunan dengan berbagai komite dan agenda internasional.',
            target: 'Mahasiswa yang tertarik dengan hubungan internasional dan diplomasi.'
        },
        'skylite': {
            title: 'SKYLITE',
            icon: '💡',
            subtitle: 'Workshop dan Seminar Inspiratif',
            goal: 'Memberikan pencerahan dan pengetahuan baru melalui workshop dan seminar.',
            schedule: 'Workshop diadakan setiap bulan dengan topik yang relevan dan inspiratif.',
            target: 'Seluruh mahasiswa yang ingin menambah wawasan dan keterampilan baru.'
        },
        'skysale': {
            title: 'SKYSALE',
            icon: '🏷️',
            subtitle: 'Program Penjualan dan Fundraising',
            goal: 'Menggalang dana untuk mendukung program-program organisasi melalui penjualan produk.',
            schedule: 'Penjualan dilakukan secara berkala dengan berbagai produk menarik.',
            target: 'Seluruh anggota organisasi dan masyarakat yang ingin mendukung kegiatan.'
        },
        'skyfeast': {
            title: 'SKYFEAST',
            icon: '🍽️',
            subtitle: 'Kegiatan Kuliner dan Komunitas',
            goal: 'Mempererat hubungan antar anggota melalui kegiatan kuliner bersama.',
            schedule: 'Acara kuliner diadakan setiap semester dengan menu dan tema berbeda.',
            target: 'Seluruh anggota organisasi dan pecinta kuliner.'
        },
        'skymedxcare': {
            title: 'SKYMEDxCARE',
            icon: '⚕️',
            subtitle: 'Program Kesehatan dan Kepedulian',
            goal: 'Meningkatkan kesadaran kesehatan dan memberikan layanan kesehatan dasar.',
            schedule: 'Program kesehatan dilaksanakan rutin dengan berbagai layanan gratis.',
            target: 'Masyarakat umum yang membutuhkan layanan kesehatan dasar.'
        },
        'skyblood': {
            title: 'SKYBLOOD',
            icon: '🩸',
            subtitle: 'Donor Darah dan Aksi Kemanusiaan',
            goal: 'Menyelamatkan nyawa melalui donor darah dan kegiatan kemanusiaan.',
            schedule: 'Donor darah diadakan setiap 3 bulan bekerjasama dengan PMI.',
            target: 'Masyarakat sehat yang ingin berkontribusi menyelamatkan nyawa.'
        },
        'skyreunion': {
            title: 'SKYREUNION',
            icon: '🤝',
            subtitle: 'Reuni dan Temu Alumni',
            goal: 'Mempererat tali silaturahmi antara alumni dan anggota aktif organisasi.',
            schedule: 'Reuni tahunan dengan berbagai agenda dan kegiatan nostalgia.',
            target: 'Alumni dan anggota aktif organisasi dari berbagai angkatan.'
        },
        'skyleague': {
            title: 'SKYLEAGUE',
            icon: '🏆',
            subtitle: 'Liga Olahraga Antar Angkatan',
            goal: 'Membangun sportivitas dan kekompakan melalui kompetisi olahraga.',
            schedule: 'Liga diadakan setiap semester dengan berbagai cabang olahraga.',
            target: 'Seluruh anggota organisasi dari berbagai angkatan.'
        },
        'skywalk': {
            title: 'SKYWALK',
            icon: '🚶',
            subtitle: 'Jalan Sehat dan Kegiatan Outdoor',
            goal: 'Meningkatkan kesehatan dan kebersamaan melalui aktivitas outdoor.',
            schedule: 'Jalan sehat dilaksanakan setiap bulan dengan rute yang menarik.',
            target: 'Seluruh anggota dan keluarga yang peduli kesehatan.'
        },
        'labsky-stories': {
            title: 'LABSKY STORIES',
            icon: '📖',
            subtitle: 'Dokumentasi Kisah dan Pengalaman',
            goal: 'Mengabadikan dan berbagi cerita inspiratif dari perjalanan organisasi.',
            schedule: 'Publikasi cerita dilakukan secara berkala melalui berbagai media.',
            target: 'Seluruh anggota yang ingin berbagi pengalaman dan inspirasi.'
        }
    };

    const program = programData[programSlug];

    if (!program) {
        window.location.href = 'index.html';
        return;
    }

    // Update page content
    document.getElementById('pageTitle').textContent = `${program.title} - Dharmapatha Mahidara`;
    document.getElementById('programIcon').textContent = program.icon;
    document.getElementById('programTitle').textContent = program.title;
    document.getElementById('programSubtitle').textContent = program.subtitle;
    document.getElementById('programGoal').textContent = program.goal;
    document.getElementById('programSchedule').textContent = program.schedule;
    document.getElementById('programTarget').textContent = program.target;
}

// ==========================================
// GALLERY INTERACTIONS
// ==========================================

function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach((item, index) => {
        // Stagger animation
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';

        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
