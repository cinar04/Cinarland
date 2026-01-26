setTimeout(() => {
    document.querySelector(".glitch-screen").style.display = "none";
    document.querySelector(".top-bar").classList.remove("hidden");
    document.querySelector(".content").classList.remove("hidden");
    document.body.style.overflow = "auto";
}, 1800);
