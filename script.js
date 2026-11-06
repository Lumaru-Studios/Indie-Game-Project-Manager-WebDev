const logoIcon = document.getElementById('logoIcon');
const logoModal = document.getElementById('logoModal');

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