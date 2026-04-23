console.log("Wishlink listo ✨");
document.addEventListener("DOMContentLoaded", () => {
    const scrollDown = document.getElementById("scrollDown");
    const secondSection = document.getElementById("segunda-parte");

    window.addEventListener("scroll", () => {
        const secondSectionTop = secondSection.getBoundingClientRect().top;

        // Si la segunda sección ya está cerca de mostrarse → ocultar flecha
        if (secondSectionTop < window.innerHeight * 0.7) {
            scrollDown.style.opacity = "0";
            scrollDown.style.pointerEvents = "none";
        } else {
            scrollDown.style.opacity = "1";
            scrollDown.style.pointerEvents = "auto";
        }
    });
});
// Lógica del Modal de Login
const openLoginButtons = document.querySelectorAll('.open-login-modal');
const loginModal = document.getElementById('login-modal');
const closeLogin = document.querySelector('.close-modal');

openLoginButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar el salto del enlace #
        loginModal.style.display = 'flex';
    });
});

if (closeLogin) {
    closeLogin.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});