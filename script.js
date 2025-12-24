// ==========================================
// SMOOTH SCROLL & NAVIGATION
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    initScrollButtons();
    initNewSectionScrollButtons();
    initProgramCards();
    initSmoothScroll();
});

// ==========================================
// HORIZONTAL SCROLL BUTTONS
// ==========================================

function initScrollButtons() {
    const container = document.getElementById('programContainer');
    const scrollLeft = document.getElementById('scrollLeft');
    const scrollRight = document.getElementById('scrollRight');

    if (!container || !scrollLeft || !scrollRight) return;

    const scrollAmount = 350; // Amount to scroll per click

    scrollLeft.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollRight.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Update button visibility based on scroll position
    function updateButtonVisibility() {
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;

        // Hide left button at start
        if (scrollLeft <= 10) {
            document.getElementById('scrollLeft').style.opacity = '0.3';
            document.getElementById('scrollLeft').style.pointerEvents = 'none';
        } else {
            document.getElementById('scrollLeft').style.opacity = '1';
            document.getElementById('scrollLeft').style.pointerEvents = 'auto';
        }

        // Hide right button at end
        if (scrollLeft >= maxScroll - 10) {
            document.getElementById('scrollRight').style.opacity = '0.3';
            document.getElementById('scrollRight').style.pointerEvents = 'none';
        } else {
            document.getElementById('scrollRight').style.opacity = '1';
            document.getElementById('scrollRight').style.pointerEvents = 'auto';
        }
    }

    container.addEventListener('scroll', updateButtonVisibility);
    updateButtonVisibility(); // Initial check
}

// ==========================================
// NEW SECTION SCROLL BUTTONS
// ==========================================

function initNewSectionScrollButtons() {
    const container = document.getElementById('newCardsContainer');
    const scrollLeft = document.getElementById('newScrollLeft');
    const scrollRight = document.getElementById('newScrollRight');

    if (!container || !scrollLeft || !scrollRight) return;

    const scrollAmount = 350; // Amount to scroll per click

    scrollLeft.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollRight.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Update button visibility based on scroll position
    function updateButtonVisibility() {
        const scrollLeftPos = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;

        // Hide left button at start
        if (scrollLeftPos <= 10) {
            scrollLeft.style.opacity = '0.3';
            scrollLeft.style.pointerEvents = 'none';
        } else {
            scrollLeft.style.opacity = '1';
            scrollLeft.style.pointerEvents = 'auto';
        }

        // Hide right button at end
        if (scrollLeftPos >= maxScroll - 10) {
            scrollRight.style.opacity = '0.3';
            scrollRight.style.pointerEvents = 'none';
        } else {
            scrollRight.style.opacity = '1';
            scrollRight.style.pointerEvents = 'auto';
        }
    }

    container.addEventListener('scroll', updateButtonVisibility);
    updateButtonVisibility(); // Initial check
}

// ==========================================
// PROGRAM CARD NAVIGATION
// ==========================================

function initProgramCards() {
    const cards = document.querySelectorAll('.program-card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            const programName = this.getAttribute('data-program');

            // Special handling for SKYNOTES
            if (programName === 'skynotes') {
                window.location.href = 'skynotes.html';
            } else {
                // Navigate to detail page with program name as query parameter
                window.location.href = `detail.html?program=${programName}`;
            }
        });

        // Add keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
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
}

// ==========================================
// TOUCH SWIPE SUPPORT FOR MOBILE
// ==========================================

(function initTouchSwipe() {
    const container = document.getElementById('programContainer');
    if (!container) return;

    let startX = 0;
    let scrollStart = 0;
    let isDragging = false;

    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
        scrollStart = container.scrollLeft;
        isDragging = true;
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
        if (!isDragging) return;

        const x = e.touches[0].pageX;
        const walk = (startX - x) * 1.5; // Multiply for faster swipe
        container.scrollLeft = scrollStart + walk;
    }, { passive: true });

    container.addEventListener('touchend', () => {
        isDragging = false;
    }, { passive: true });
})();

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================

(function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
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

    // Observe program cards
    const cards = document.querySelectorAll('.program-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        observer.observe(card);
    });
})();

// ==========================================
// PERFORMANCE: PAUSE ANIMATIONS WHEN NOT VISIBLE
// ==========================================

(function handleVisibilityChange() {
    const runningText = document.querySelector('.running-text');
    if (!runningText) return;

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            runningText.style.animationPlayState = 'paused';
        } else {
            runningText.style.animationPlayState = 'running';
        }
    });
})();

// ==========================================
// UTILITY: GET PROGRAM NAME FROM SLUG
// ==========================================

function getProgramTitle(slug) {
    const programTitles = {
        'skynation': 'SKYNATION',
        'bulbas': 'BULBAS',
        'skybattle': 'SKYBATTLE',
        'kiitchen-of-kindness': 'KIITCHEN OF KINDNESS',
        'imf': 'IMF',
        'skynotes': 'SKYNOTES',
        'skyavenue': 'SKYAVENUE',
        'skyrun': 'SKYRUN',
        'speak-up': 'SPEAK UP!',
        'skymun': 'SKYMUN',
        'skylite': 'SKYLITE',
        'skysale': 'SKYSALE',
        'skyfeast': 'SKYFEAST',
        'skymedxcare': 'SKYMEDxCARE',
        'skyblood': 'SKYBLOOD',
        'skyreunion': 'SKYREUNION',
        'skyleague': 'SKYLEAGUE',
        'skywalk': 'SKYWALK',
        'labsky-stories': 'LABSKY STORIES'
    };

    return programTitles[slug] || slug.toUpperCase();
}

// ==========================================
// EXPORT FOR OTHER PAGES
// ==========================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getProgramTitle };
}
