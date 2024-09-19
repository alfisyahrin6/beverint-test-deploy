// script.js

// Toggle mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Toggle dropdown menus on mobile with animation
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.style.opacity = '0';
            dropdownContent.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                dropdownContent.classList.remove('show');
            }, 300); // Match the transition duration
        } else {
            dropdownContent.classList.add('show');
            setTimeout(() => {
                dropdownContent.style.opacity = '1';
                dropdownContent.style.transform = 'translateY(0)';
            }, 0);
        }
    });
});

let scrollPos = window.scrollY;
const nav = document.querySelector('nav');

function addClass() {
    nav.classList.add('black')
}
function removeClass() {
    nav.classList.remove('black')
}
window.addEventListener('scroll', function () {
    scrollPos = this.window.scrollY;
    if (scrollPos > 10) {
        addClass();
    }
    else {
        removeClass()
    }
})
// window.onscroll = function () {
//     if (window.top) {
//         nav.classList.add('black')
//     }
//     else {
//         nav.classList.remove('black')
//     }
// }
const logo = document.querySelector('.partner-logo').cloneNode(true);
document.querySelector('.logo-container').appendChild(logo);



document.addEventListener("DOMContentLoaded", function () {
    const scrollImages = document.querySelector('.project-gallery');
    const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
    const leftButton = document.querySelector('.left');
    const rightButton = document.querySelector('.right');
    function checkScroll() {
        const currentScroll = scrollImages.scrollLeft;
        if (currentScroll === 0) {
            leftButton.setAttribute('disabled', 'true');
            rightButton.removeAttribute('disabled')
        }
        else if (currentScroll === scrollLength) {
            rightButton.setAttribute('disabled', 'true')
            leftButton.removeAttribute('disabled')
        }
        else {
            leftButton.removeAttribute('disabled')
            rightButton.removeAttribute('disabled')
        }
    }


    scrollImages.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    checkScroll();

    function leftScroll() {
        scrollImages.scrollBy({
            left: -200,
            behavior: "smooth"
        })
    }
    function rightScroll() {
        scrollImages.scrollBy({
            left: 200,
            behavior: "smooth"
        })
    }
    leftButton.addEventListener('click', leftScroll)
    rightButton.addEventListener('click', rightScroll)
});
