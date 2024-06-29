// Sidebar functionality
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".fa-xmark");
const blackOverlay = document.querySelector(".black");
const allButton = document.querySelector(".second-1");

allButton.addEventListener("click", () => {
    sidebar.classList.add("active");
    closeSidebar.classList.add("active");
    blackOverlay.classList.add("active");
    document.body.classList.add("stop-scroll");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");
    closeSidebar.classList.remove("active");
    blackOverlay.classList.remove("active");
    document.body.classList.remove("stop-scroll");
});

// horizontal slider 1
// Function to handle horizontal scrolling
function handleScroll(selector, distance, event) {
    document.querySelector(selector).scrollLeft += distance;
    event.preventDefault();
}

// Adding event listeners for all horizontal sliders
const sliders = [
    { left: '.l-btn', right: '.r-btn', slide: '.product-slide' },
    { left: '.l-btn2', right: '.r-btn2', slide: '.product-slide2' },
    { left: '.l-btn3', right: '.r-btn3', slide: '.product-slide3' },
    { left: '.l-btn4', right: '.r-btn4', slide: '.product-slide4' }
];

sliders.forEach(slider => {
    document.querySelector(slider.left).addEventListener('click', (event) => {
        handleScroll(slider.slide, -1100, event);
    });

    document.querySelector(slider.right).addEventListener('click', (event) => {
        handleScroll(slider.slide, 1100, event);
    });
});

// Back to top button functionality
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

document.getElementById("back-to-top").addEventListener("click", function() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
