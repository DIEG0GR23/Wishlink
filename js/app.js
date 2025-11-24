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