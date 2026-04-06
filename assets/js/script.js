lucide.createIcons();

function copyToClipboard(text, btnId) {
    navigator.clipboard.writeText(text).then(function () {
        var btn = document.getElementById(btnId);
        var icon = btn.querySelector('i, svg');
        btn.classList.add('copied');
        if (icon) {
            icon.setAttribute('data-lucide', 'check');
            lucide.createIcons();
        }
        setTimeout(function () {
            btn.classList.remove('copied');
            if (icon) {
                icon.setAttribute('data-lucide', 'copy');
                lucide.createIcons();
            }
        }, 2000);
    });
}

function copyInstallCommand() {
    copyToClipboard('npm install -g omni-context-cli && omx', 'copyBtn');
}

function copyInstallCommand2() {
    copyToClipboard('npm install -g omni-context-cli && omx', 'copyBtn2');
}

function handleNavbarScroll() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavbarScroll);

var mobileMenuBtn = document.getElementById('mobileMenuBtn');
var mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('open');
        });
    });
}

var slideshowImages = document.querySelectorAll('.slideshow-track img');
var slideshowDots = document.querySelectorAll('.slideshow-dot');
var slideshowIndex = 0;
var slideshowTimer = null;

function showSlide(index) {
    slideshowImages.forEach(function (img) { img.classList.remove('active'); });
    slideshowDots.forEach(function (dot) { dot.classList.remove('active'); });
    slideshowIndex = index;
    if (slideshowImages[index]) slideshowImages[index].classList.add('active');
    if (slideshowDots[index]) slideshowDots[index].classList.add('active');
}

function startSlideshow() {
    if (slideshowImages.length < 2) return;
    slideshowTimer = setInterval(function () {
        showSlide((slideshowIndex + 1) % slideshowImages.length);
    }, 4000);
}

slideshowDots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
        showSlide(i);
        clearInterval(slideshowTimer);
        startSlideshow();
    });
});

startSlideshow();

var revealElements = document.querySelectorAll('.section-header, .tools-grid, .workflow-grid, .split-layout, .extend-grid, .protocols-grid, .integration-grid, .details-grid, .cta-section, .cost-explainer, .slideshow-track');

var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(function (el) {
    el.classList.add('reveal');
    revealObserver.observe(el);
});
