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
const openLogin = document.getElementById('openLogin');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');

openLogin.onclick = () => {
    loginModal.style.display = 'flex';
};

closeLogin.onclick = () => {
    loginModal.style.display = 'none';
};

loginModal.onclick = (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
};