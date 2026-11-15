function initIGPM() {
    const logoIcon = document.getElementById('logoIcon');
    const logoModal = document.getElementById('logoModal');
    const today = document.getElementById('today');
    const notificationDot = document.querySelector('.notification-dot');

    if (today) {
        today.textContent = new Intl.DateTimeFormat(document.documentElement.lang || 'en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        }).format(new Date());
    }

    if (logoIcon && logoModal) {
        logoIcon.addEventListener('click', () => {
            logoModal.style.display = 'block';
        });

        logoModal.addEventListener('click', () => {
            logoModal.style.display = 'none';
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                logoModal.style.display = 'none';
            }
        });
    }

    if (notificationDot) {
        notificationDot.classList.add('active');
        notificationDot.classList.remove('active');
    }
}

window.initIGPM = initIGPM;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIGPM);
} else {
    initIGPM();
}
