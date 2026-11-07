const logoIcon = document.getElementById('logoIcon');
const logoModal = document.getElementById('logoModal');
const today = document.getElementById('today');

if (today) {
    today.textContent = new Intl.DateTimeFormat(document.documentElement.lang, {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    }).format(new Date());
}

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

document.querySelector(".notification-dot").classList.add("active");

document.querySelector(".notification-dot").classList.remove("active");