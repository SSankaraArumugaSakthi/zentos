document.addEventListener("DOMContentLoaded", () => {
    // Dropdown toggle
    const logoBtn = document.getElementById("logoBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");

    logoBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle("show");
    });

    document.addEventListener("click", () => {
        dropdownMenu.classList.remove("show");
    });

    // Flip logic for all cards
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        const flipBtn = card.querySelector(".flip-btn");
        const backBtn = card.querySelector(".back-btn");

        flipBtn.addEventListener("click", () => {
            card.classList.add("flip");
        });

        backBtn.addEventListener("click", () => {
            card.classList.remove("flip");
        });
    });
});

window.onscroll = function() {
    const indicator = document.querySelector('.scroll-indicator');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        indicator.style.opacity = "0";
    } else {
        indicator.style.opacity = "1";
    }
};


window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    
    // Hard-coded 1s delay
    setTimeout(() => {
        loader.classList.add("loader-hidden");
        // Re-enable scrolling (fixes the 'overflow: hidden' in your body CSS)
        document.body.style.overflow = "auto";
    }, 1000); 
});