// ============================================================
// HOME PAGE JAVASCRIPT
// ============================================================

// Navigation for separate HTML pages
   // Single-Page Tab Switching Navigation Engine
        function navigateTo(sectionId) {
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(sec => sec.classList.remove('active'));

            const targetSection = document.getElementById('page-' + sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.classList.remove('active'));
            
            const targetedLink = document.getElementById('nav-' + sectionId);
            if (targetedLink) {
                targetedLink.classList.add('active');
            }

            // Collapse mobile drawer system if active
            const mobileMenu = document.getElementById('mobile-menu');
            const openIcon = document.getElementById('menu-icon-open');
            const closeIcon = document.getElementById('menu-icon-close');
            
            mobileMenu.classList.add('hidden');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }

        // Mobile Menu Drawer Handler
       /* =========================================================
   PROFESSIONAL MOBILE NAVIGATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const mobileButton =
        document.getElementById("mobile-menu-btn");

    const mobileMenu =
        document.getElementById("mobile-menu");

    const openIcon =
        document.getElementById("menu-icon-open");

    const closeIcon =
        document.getElementById("menu-icon-close");


    /* -----------------------------------------
       Open / Close Mobile Menu
    ----------------------------------------- */

    if (mobileButton) {

        mobileButton.addEventListener("click", function () {

            const isHidden =
                mobileMenu.classList.contains("hidden");

            if (isHidden) {

                mobileMenu.classList.remove("hidden");

                openIcon.classList.add("hidden");
                closeIcon.classList.remove("hidden");

                mobileButton.setAttribute(
                    "aria-expanded",
                    "true"
                );

            } else {

                mobileMenu.classList.add("hidden");

                openIcon.classList.remove("hidden");
                closeIcon.classList.add("hidden");

                mobileButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* -----------------------------------------
       Mobile Dropdown Accordions
    ----------------------------------------- */

    const mobileDropdowns =
        document.querySelectorAll(".mobile-dropdown");


    mobileDropdowns.forEach(function (dropdown) {

        const button =
            dropdown.querySelector(".mobile-dropdown-btn");


        button.addEventListener("click", function () {

            /*
             * Close other dropdowns
             * for cleaner mobile UX
             */

            mobileDropdowns.forEach(function (other) {

                if (other !== dropdown) {
                    other.classList.remove("open");
                }

            });


            dropdown.classList.toggle("open");

        });

    });


    /* -----------------------------------------
       Close Mobile Menu After Link Click
    ----------------------------------------- */

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-menu a"
        );


    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.add("hidden");

            openIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");

            mobileButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

});

        // Faculty Filter Optimization Routine
        function filterFaculty(category) {
            const cards = document.querySelectorAll('.faculty-card');
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-dept') === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });

            // Restyle active button layout states visually
            const filterContainer = document.getElementById('faculty-filters-container');
            const buttons = filterContainer.querySelectorAll('button');
            buttons.forEach(btn => {
                btn.className = "bg-white border border-gray-200 text-gray-700 text-xs font-bold px-4 py-2 rounded shadow-sm transition hover:bg-gray-50";
            });

            const activeBtn = document.getElementById('btn-filter-' + category);
            if (activeBtn) {
                activeBtn.className = "bg-college-navy text-white text-xs font-bold px-4 py-2 rounded shadow transition hover:opacity-90";
            }
        }

        // Custom Safe Form Submissions Handling Logic
        function processFormSubmission(event) {
            event.preventDefault();
            const box = document.getElementById('contact-feedback');
            
            box.className = "mb-4 p-4 rounded text-sm font-medium bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-sm";
            box.innerText = "✓ Electronic inquiry packet logged seamlessly! The admissions or corresponding department desk will dispatch a routing reply inside 48 business hours.";
            box.classList.remove('hidden');
            
            document.getElementById('contact-form-element').reset();
            
            setTimeout(() => {
                box.classList.add('hidden');
            }, 6000);
        }



let currentHeroSlide = 0;
const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dot");

function showHeroSlide(index) {

    if (index >= heroSlides.length) {
        currentHeroSlide = 0;
    } 
    else if (index < 0) {
        currentHeroSlide = heroSlides.length - 1;
    } 
    else {
        currentHeroSlide = index;
    }

    heroSlides.forEach((slide, i) => {

        if (i === currentHeroSlide) {
            slide.classList.remove("opacity-0");
            slide.classList.add("opacity-100");
        } 
        else {
            slide.classList.remove("opacity-100");
            slide.classList.add("opacity-0");
        }

    });

    heroDots.forEach((dot, i) => {

        if (i === currentHeroSlide) {
            dot.classList.remove("bg-white/50");
            dot.classList.add("bg-college-gold");
        } 
        else {
            dot.classList.remove("bg-college-gold");
            dot.classList.add("bg-white/50");
        }

    });
}


function changeHeroSlide(direction) {
    showHeroSlide(currentHeroSlide + direction);
}


// Automatic slider
setInterval(() => {
    showHeroSlide(currentHeroSlide + 1);
}, 3000);


// Initialize
showHeroSlide(0);

let galleryIndex = 0;
let galleryTimer;

const gallery = document.getElementById("college-gallery");
const gallerySlides = document.querySelectorAll(".gallery-slide");
const galleryDots = document.getElementById("gallery-dots");


function getSlidesPerView() {

    if (window.innerWidth <= 640) {
        return 1;
    }

    if (window.innerWidth <= 1024) {
        return 2;
    }

    return 3;
}


function updateGallery() {

    const slidesPerView = getSlidesPerView();

    const maxIndex = Math.max(
        0,
        gallerySlides.length - slidesPerView
    );

    if (galleryIndex > maxIndex) {
        galleryIndex = 0;
    }

    const percentage = galleryIndex * (100 / slidesPerView);

    gallery.style.transform =
        `translateX(-${percentage}%)`;

    updateGalleryDots();

}


function moveGallery(direction) {

    const slidesPerView = getSlidesPerView();

    const maxIndex =
        Math.max(0, gallerySlides.length - slidesPerView);

    galleryIndex += direction;

    if (galleryIndex > maxIndex) {
        galleryIndex = 0;
    }

    if (galleryIndex < 0) {
        galleryIndex = maxIndex;
    }

    updateGallery();

    restartGalleryAutoPlay();

}


function updateGalleryDots() {

    galleryDots.innerHTML = "";

    const slidesPerView = getSlidesPerView();

    const totalDots =
        Math.max(1, gallerySlides.length - slidesPerView + 1);

    for (let i = 0; i < totalDots; i++) {

        const dot = document.createElement("button");

        dot.className =
            "w-2.5 h-2.5 rounded-full transition-all duration-300";

        if (i === galleryIndex) {

            dot.classList.add(
                "bg-college-blue",
                "w-7"
            );

        } else {

            dot.classList.add(
                "bg-gray-300"
            );

        }

        dot.onclick = () => {

            galleryIndex = i;

            updateGallery();

            restartGalleryAutoPlay();

        };

        galleryDots.appendChild(dot);

    }

}


/* Automatic movement */
function startGalleryAutoPlay() {

    galleryTimer = setInterval(() => {

        moveGallery(1);

    }, 4000);

}


function restartGalleryAutoPlay() {

    clearInterval(galleryTimer);

    startGalleryAutoPlay();

}


/* Initialize */
window.addEventListener("load", () => {

    updateGallery();

    startGalleryAutoPlay();

});


/* Fix responsive resizing */
window.addEventListener("resize", () => {

    updateGallery();

});

//Event slider

const sliders = {

    august: {
        current: 0,
        total: 6
    },

    sports: {
        current: 0,
        total: 4
    },

    plantation: {
        current: 0,
        total: 3
    }

};


/* Get number of visible cards */

function getVisibleCards() {

    if (window.innerWidth <= 640) {
        return 1;
    }

    if (window.innerWidth <= 900) {
        return 2;
    }

    return 3;
}


/* Move slider */

function moveSlider(name, direction) {

    const slider =
        document.getElementById(name + "-slider");

    const state = sliders[name];

    const cards =
        slider.querySelectorAll(".event-card");

    const visible =
        getVisibleCards();

    const maxIndex =
        Math.max(0, cards.length - visible);

    state.current += direction;

    if (state.current > maxIndex) {
        state.current = 0;
    }

    if (state.current < 0) {
        state.current = maxIndex;
    }

    const cardWidth =
        cards[0].offsetWidth;

    const gap = 20;

    slider.style.transform =
        `translateX(-${state.current * (cardWidth + gap)}px)`;

    updateDots(name);
}


/* Create dots */

function createDots(name) {

    const slider =
        document.getElementById(name + "-slider");

    const dotsContainer =
        document.getElementById(name + "-dots");

    const visible =
        getVisibleCards();

    const cards =
        slider.querySelectorAll(".event-card");

    const pages =
        Math.max(1, cards.length - visible + 1);

    dotsContainer.innerHTML = "";

    for (let i = 0; i < pages; i++) {

        const dot =
            document.createElement("span");

        dot.className = "slider-dot";

        if (i === 0) {
            dot.classList.add("active");
        }

        dot.onclick = function () {

            sliders[name].current = i;

            const cardWidth =
                cards[0].offsetWidth;

            slider.style.transform =
                `translateX(-${i * (cardWidth + 20)}px)`;

            updateDots(name);

        };

        dotsContainer.appendChild(dot);
    }

}


/* Update active dot */

function updateDots(name) {

    const dots =
        document.querySelectorAll(
            "#" + name + "-dots .slider-dot"
        );

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === sliders[name].current
        );

    });

}


/* Automatic movement */

function autoSlide(name) {

    moveSlider(name, 1);

}


/* Initialize */

function initializeSliders() {

    Object.keys(sliders).forEach(name => {

        sliders[name].current = 0;

        const slider =
            document.getElementById(name + "-slider");

        slider.style.transform = "translateX(0)";

        createDots(name);

    });

}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeSliders();

        /* Auto movement every 4 seconds */

        setInterval(() => {
            autoSlide("august");
        }, 4000);


        setInterval(() => {
            autoSlide("sports");
        }, 4500);


        setInterval(() => {
            autoSlide("plantation");
        }, 5000);

    }
);


/* Recalculate after screen resize */

window.addEventListener(
    "resize",
    initializeSliders
);

/* =========================================================
   XI PROGRAM PAGE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       FAQ ACCORDION
       ===================================================== */

    const faqItems = document.querySelectorAll(".xi-faq-item");

    faqItems.forEach(function (item) {

        const question = item.querySelector(".xi-faq-question");

        question.addEventListener("click", function () {

            const isActive = item.classList.contains("active");

            // Close all FAQ items
            faqItems.forEach(function (faq) {
                faq.classList.remove("active");

                const button = faq.querySelector(".xi-faq-question");

                if (button) {
                    button.setAttribute("aria-expanded", "false");
                }
            });

            // Open selected item
            if (!isActive) {
                item.classList.add("active");
                question.setAttribute("aria-expanded", "true");
            }

        });

        question.setAttribute("aria-expanded", "false");
    });


    /* =====================================================
       SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    }


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       PROGRAM CARD HOVER ACCESSIBILITY
       ===================================================== */

    const programCards = document.querySelectorAll(".xi-program-card");

    programCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            this.classList.add("card-hover");
        });

        card.addEventListener("mouseleave", function () {
            this.classList.remove("card-hover");
        });

    });


    /* =====================================================
       IMAGE FALLBACK
       ===================================================== */

    const pageImages = document.querySelectorAll(".xi-page img");

    pageImages.forEach(function (image) {

        image.addEventListener("error", function () {

            this.style.display = "none";

            const parent = this.closest(".xi-about-image");

            if (parent) {
                parent.classList.add("image-placeholder");
            }

        });

    });


    /* =====================================================
       ACTIVE SECTION HIGHLIGHT
       ===================================================== */

    const sections = document.querySelectorAll(
        ".xi-section[id]"
    );

    const sectionObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("section-visible");

                }

            });

        },
        {
            threshold: 0.1
        }
    );

    sections.forEach(function (section) {
        sectionObserver.observe(section);
    });


    /* =====================================================
       BUTTON RIPPLE EFFECT
       ===================================================== */

    const buttons = document.querySelectorAll(".xi-btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const ripple = document.createElement("span");

            const rect = button.getBoundingClientRect();

            const size = Math.max(
                rect.width,
                rect.height
            );

            ripple.style.width = size + "px";
            ripple.style.height = size + "px";

            ripple.style.left =
                event.clientX - rect.left - size / 2 + "px";

            ripple.style.top =
                event.clientY - rect.top - size / 2 + "px";

            ripple.classList.add("xi-ripple");

            button.appendChild(ripple);

            setTimeout(function () {
                ripple.remove();
            }, 600);

        });

    });


    /* =====================================================
       ADD RIPPLE STYLES
       ===================================================== */

    const rippleStyle = document.createElement("style");

    rippleStyle.textContent = `
        .xi-btn {
            position: relative;
            overflow: hidden;
        }

        .xi-ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.35);
            transform: scale(0);
            animation: xiRippleAnimation 0.6s linear;
            pointer-events: none;
        }

        @keyframes xiRippleAnimation {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;

    document.head.appendChild(rippleStyle);


    /* =====================================================
       PREVENT BROKEN HASH LINKS
       ===================================================== */

    window.addEventListener("hashchange", function () {

        const target = document.querySelector(
            window.location.hash
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});