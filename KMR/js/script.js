const header = document.querySelector(".header_area");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 100) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});

const lgWindow = 992;
let navItem = document.getElementById('navbarCollapse');
navItem.addEventListener('click', () => {
    if (window.innerWidth < lgWindow) {
        document.getElementById('navbarButton').click();
    }
});


