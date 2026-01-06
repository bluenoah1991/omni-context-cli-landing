// Initialize Lucide icons
lucide.createIcons();

// Copy install command
function copyInstallCommand() {
    const command = 'npm install -g omni-context-cli && omx';
    navigator.clipboard.writeText(command).then(() => {
        const btn = document.getElementById('copyBtn');
        const originalContent = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check"></i><span>Copied!</span>';
        btn.classList.add('copied');
        lucide.createIcons();

        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.classList.remove('copied');
            lucide.createIcons();
        }, 2000);
    });
}

// Scroll reveal animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Terminal line animations with Intersection Observer
function setupTerminalAnimations() {
    const terminalLines = document.querySelectorAll('.term-line, .term-loading');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            } else {
                entry.target.style.animationPlayState = 'paused';
            }
        });
    }, { threshold: 0.5 });

    terminalLines.forEach(line => {
        line.style.animationPlayState = 'paused';
        observer.observe(line);
    });
}

// Smooth scroll snap implementation
let isScrolling = false;
let scrollTimeout;

function handleWheel(e) {
    // If already scrolling, ignore
    if (isScrolling) {
        e.preventDefault();
        return;
    }

    const sections = Array.from(document.querySelectorAll('section'));
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Find current section
    let currentIndex = sections.findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= -window.innerHeight / 3 && rect.top <= window.innerHeight / 3;
    });

    // If no section found, use the closest one
    if (currentIndex === -1) {
        let minDistance = Infinity;
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            if (distance < minDistance) {
                minDistance = distance;
                currentIndex = index;
            }
        });
    }

    // Determine direction and scroll
    if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        e.preventDefault();
        isScrolling = true;
        sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });

        // Reset after animation completes
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 1000);
    } else if (e.deltaY < 0 && currentIndex > 0) {
        e.preventDefault();
        isScrolling = true;
        sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }
}

// Handle keyboard navigation
function handleKeydown(e) {
    const sections = Array.from(document.querySelectorAll('section'));

    if ((e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown')) {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        let currentIndex = sections.findIndex(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= -window.innerHeight / 2 && rect.top < window.innerHeight / 2;
        });

        if (currentIndex < sections.length - 1) {
            e.preventDefault();
            sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
        }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        let currentIndex = sections.findIndex(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= -window.innerHeight / 2 && rect.top < window.innerHeight / 2;
        });

        if (currentIndex > 0) {
            e.preventDefault();
            sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
        }
    } else if (e.key === 'Home') {
        e.preventDefault();
        sections[0].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'End') {
        e.preventDefault();
        sections[sections.length - 1].scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listeners
window.addEventListener('wheel', handleWheel, { passive: false });
window.addEventListener('keydown', handleKeydown);
window.addEventListener('scroll', () => {
    revealOnScroll();
    handleNavbarScroll();
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    setupTerminalAnimations();
});
