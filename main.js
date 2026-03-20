// Get elements
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

// 1. Toggle the menu when the menu button is clicked
menuBtn.addEventListener('click', (event) => {
    // Prevent this click from reaching the "window" listener immediately
    event.stopPropagation(); 
    dropdownMenu.classList.toggle('show');
});

// 2. Close the menu if user clicks anywhere else on the screen
window.addEventListener('click', (event) => {
    // If the click is NOT on the menu button and NOT inside the dropdown
    if (!menuBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

// Navigation Functions
function projectspage() {
    window.location.href = "projects.html";
}

function eventspage() {
    window.location.href = "events.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.2 // Triggers when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once the animation is done
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const target = document.querySelector('.info-section');
    if (target) observer.observe(target);
});

window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    
    // Hard-coded 1s delay
    setTimeout(() => {
        loader.classList.add("loader-hidden");
        // Re-enable scrolling (fixes the 'overflow: hidden' in your body CSS)
        document.body.style.overflow = "auto";
    }, 1000); 
});
const trigger = document.getElementById('profileTrigger');
const overlay = document.getElementById('profileOverlay');
const card = document.querySelector('.profile-card');

// Show when content is clicked
trigger.addEventListener('click', (e) => {
  e.stopPropagation();
  overlay.style.display = 'flex';
});

// Hide when clicking anywhere (including outside the card)
window.addEventListener('click', (e) => {
  if (overlay.style.display === 'flex') {
    overlay.style.display = 'none';
  }
});

// Prevent closing if the user clicks inside the card/links
card.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the show class
                entry.target.classList.add("show");
            }
        });
    }, observerOptions);

    const perkElements = document.querySelectorAll(".perks p");
    perkElements.forEach((el, index) => {
        // Stagger the animation delay (0.1s, 0.2s, 0.3s...)
        el.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(el);
    });
});