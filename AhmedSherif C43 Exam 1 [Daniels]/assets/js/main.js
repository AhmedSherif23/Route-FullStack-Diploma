const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sectionCounter = document.querySelector('section.numbers');
const counters = document.querySelectorAll('.item .counter');
const sectionProgress = document.querySelector('#about .content');
const progs = document.querySelectorAll('.skills .progress-bar');

let startCounter = false;

const modalSwiperObj = {
    zoom: true,
    loop: true,
    zoomCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
}

const clientSwiperObj = {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
}

//Pre-Loader Display TimeOut
setTimeout(function() {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  }, 1000);

//Function Helper 
function toggleClass(element, className, condition) {
    if (condition) {
        element.classList.add(className)
    }
    else {
        element.classList.remove(className)
    }
}

//HANDLE WINDOW SCROLL
window.onscroll = () => {
    if (window.scrollY >= sectionProgress.offsetTop) {
        progs.forEach(prog => {
            prog.style.width = prog.dataset.width;
        })
    }

    if (window.scrollY >= sectionCounter.offsetTop) {
        if (!startCounter) {
            counters.forEach(count => startCount(count));
        }
        startCounter = true;
    }
}

//HANDLE NAVBAR SCROLL 
function navScroll() {
    if (navbar) {
        toggleClass(navbar, 'nav-srcoll', window.scrollY > 400)
    }
}
window.addEventListener('scroll', navScroll);


//Function COUNTER SECTION
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal)
}

//SWIPER SLIDER
const swiper1 = new Swiper(".mySwiper", modalSwiperObj);  // works modal slider 
const swiper2 = new Swiper(".clientSwiper", clientSwiperObj);  // clients slider
