document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible if you want it to happen only once
                // observer.unobserve(entry.target);
            } else {
                // If you want it to disappear and animate again on scroll up
                // entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
        '.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-delayed'
    );
    
    animatedElements.forEach(el => observer.observe(el));

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Make the hero section visible immediately
    const heroContent = document.querySelector('.hero-content.fade-in-up');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('visible');
        }, 100);
    }

    // Scroll progress bar + header lift
    const progressBar = document.querySelector('.scroll-progress');
    const topper = document.querySelector('.topper');
    const onScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        if (progressBar) progressBar.style.width = pct + '%';
        if (topper) topper.classList.toggle('scrolled', scrollTop > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Table-of-contents dropdown: toggle, outside-click close, active section label
    const toc = document.querySelector('.toc');
    const tocBtn = document.querySelector('.toc-btn');
    const tocLabel = document.querySelector('.toc-label');
    const tocDefaultLabel = tocLabel ? tocLabel.textContent : '';
    const navLinks = document.querySelectorAll('.toc-menu a[href^="#"]');
    if (toc && tocBtn) {
        tocBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const willOpen = !toc.classList.contains('open');
            toc.classList.toggle('open', willOpen);
            tocBtn.setAttribute('aria-expanded', String(willOpen));
        });
        document.addEventListener('click', (e) => {
            if (!toc.contains(e.target)) toc.classList.remove('open');
        });
        navLinks.forEach(a => a.addEventListener('click', () => toc.classList.remove('open')));
    }

    // Scrollspy: highlight the active section in the dropdown + button label
    const navSections = Array.from(navLinks)
        .map(a => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);
    if (navSections.length) {
        const spy = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const link = document.querySelector(`.toc-menu a[href="#${entry.target.id}"]`);
                if (!link) return;
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                if (tocLabel) tocLabel.textContent = link.textContent;
            });
        }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
        navSections.forEach(s => spy.observe(s));
    }
});
