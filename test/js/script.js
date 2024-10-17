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
const partner = document.getElementsByClassName("partner-logo");
if (partner.length !== 0) {
    const logo = document.querySelector('.partner-logo').cloneNode(true);
    document.querySelector('.logo-container').appendChild(logo);
}
const modal_img = document.getElementsByClassName("myImg");
if (modal_img.length !== 0) {
    let modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let images = document.getElementsByClassName("myImg");
    let modalImg = document.getElementById("img-modal");
    let captionText = document.getElementById("caption");

    for (let i = 0; i < images.length; i++) {
        let img = images[i];
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
}









