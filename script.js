const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.nav-links li a');

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
    document.body.style.overflow = nav.classList.contains("active") ? "hidden" : "auto"; // ✅ lock scroll
});

// Close menu on nav link click
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        document.body.style.overflow = "auto";
    });
});



/*/////////////////
//Slider JS START//
/////////////////*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slideToClickedSlide: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',

    },
});
/*/////////////////
//Slider JS END//
/////////////////*/

// function goToPage() {
//     window.location.href = "https://www.w3schools.com"; // This will redirect to the specified URL
// }
// All animations will take twice the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '2s');

// All animations will take half the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '.5s');
