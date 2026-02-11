lucide.createIcons();

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

function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', () => {
    revealOnScroll();
    handleNavbarScroll();
});

document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
});
