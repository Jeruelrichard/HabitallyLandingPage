document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const input = form.querySelector('input');
            const btn = form.querySelector('.btn-primary');
            
            if (input && input.value) {
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Added! 🎉';
                btn.style.background = 'var(--success)';
                btn.style.color = '#fff';
                
                setTimeout(() => {
                    input.value = '';
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                }, 3000);
            }
        });
    });

    // Add gentle floating animation to the mockup
    const mockup = document.querySelector('.mockup-frame');
    let startY = 0;
    
    function animate(time) {
        // Move up and down by 10px over a 6 second period
        const offset = Math.sin(time / 1000) * 8;
        mockup.style.transform = `translateY(${offset}px)`;
        requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.features, .target-audience, .final-cta, footer');
    
    // Set initial state
    revealElements.forEach(el => el.classList.add('reveal'));

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});
