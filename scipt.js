window.addEventListener("scroll", () => {
    const elementos = document.querySelectorAll(".fade");

    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add("active");
        }
    });
});
