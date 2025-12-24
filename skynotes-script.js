// ==========================================
// SKYNOTES PAGE SCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    initAssessmentButtons();
    initAnimations();
});

// ==========================================
// ASSESSMENT BUTTON HANDLERS
// ==========================================

function initAssessmentButtons() {
    const assessmentButtons = document.querySelectorAll('.assessment-btn');

    assessmentButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            const assessmentType = this.getAttribute('data-assessment');
            handleAssessmentAccess(assessmentType);
        });

        // Keyboard accessibility
        button.setAttribute('role', 'button');
        button.setAttribute('tabindex', '0');

        button.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// ==========================================
// HANDLE ASSESSMENT ACCESS
// ==========================================

function handleAssessmentAccess(assessmentType) {
    // Assessment type mapping
    const assessmentData = {
        'ats1': {
            title: 'Asesmen Tengah Semester 1',
            period: 'September - Oktober',
            url: '#ats1' // Replace with actual URL
        },
        'aas1': {
            title: 'Asesmen Akhir Semester 1',
            period: 'November - Desember',
            url: '#aas1' // Replace with actual URL
        },
        'ats2': {
            title: 'Asesmen Tengah Semester 2',
            period: 'Februari - Maret',
            url: '#ats2' // Replace with actual URL
        },
        'aas2': {
            title: 'Asesmen Akhir Semester 2',
            period: 'Mei - Juni',
            url: '#aas2' // Replace with actual URL
        }
    };

    const assessment = assessmentData[assessmentType];

    if (assessment) {
        // Show loading state
        showLoadingMessage(assessment.title);

        // Simulate loading delay (replace with actual navigation)
        setTimeout(() => {
            // For now, show alert (replace with actual navigation to assessment content)
            showAccessMessage(assessment);

            // Uncomment this when you have actual URLs:
            // window.location.href = assessment.url;
        }, 800);
    }
}

// ==========================================
// SHOW LOADING MESSAGE
// ==========================================

function showLoadingMessage(title) {
    // Create loading overlay
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay';
    overlay.innerHTML = `
        <div class="loading-content">
            <div class="loading-spinner"></div>
            <p>Memuat ${title}...</p>
        </div>
    `;

    document.body.appendChild(overlay);

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .loading-content {
            text-align: center;
            color: white;
        }
        
        .loading-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top-color: var(--accent-gold);
            border-radius: 50%;
            margin: 0 auto 20px;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// ==========================================
// SHOW ACCESS MESSAGE
// ==========================================

function showAccessMessage(assessment) {
    // Remove loading overlay
    const overlay = document.querySelector('.loading-overlay');
    if (overlay) {
        overlay.remove();
    }

    // Show access message (temporary, replace with actual navigation)
    const message = `
        Mengakses: ${assessment.title}
        Periode: ${assessment.period}
        
        Fitur ini akan mengarahkan ke halaman konten asesmen.
        Silakan hubungi admin untuk URL yang sesuai.
    `;

    alert(message);
}

// ==========================================
// ANIMATIONS
// ==========================================

function initAnimations() {
    // Animate semester groups
    const semesterGroups = document.querySelectorAll('.semester-group');

    semesterGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(30px)';

        setTimeout(() => {
            group.style.transition = 'all 0.8s ease';
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Animate feature cards
    const featureCards = document.querySelectorAll('.feature-card');

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.startsWith('#ats') || href.startsWith('#aas')) return;

        e.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
