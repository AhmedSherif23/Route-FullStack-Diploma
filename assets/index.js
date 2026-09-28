// ?=============== HTML ELEMENTS ===============
const projectsContainer = document.querySelector('#projectsContainer');

// ^=============== DATA ===============

// --- Projects (featured / real-world) ---
let projectsList = [
    {
        title: 'Apartinvestments Hub',
        desc: 'A real estate investment management platform built on Base44 with dark/light mode, liquid glass UI, and custom dashboards.',
        img: 'https://media.base44.com/images/public/6abaa245f0f2163c0736f2e7/61f7f02e8_image.png',
        featured: false,
        tags: ['Base44', 'Full Stack', 'Dashboard', 'Liquid Glass'],
        demo: '#',
        codeURL: '#',
    },
];

// --- Assignments ---
let assignmentsList = [
    {
        title: 'Start Framework',
        desc: 'A React portfolio template built with Bootstrap and smooth animations.',
        img: './AhmedSherif C43 React Assignment 1 [Start FrameWork]/output.png',
        tags: ['React', 'Bootstrap'],
        demo: 'https://start-framework-seven-tau.vercel.app/',
        codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/e3c5bf3ea56fa53e6525215c26f451b27d332431/AhmedSherif%20C43%20React%20Assignment%201%20%5BStart%20FrameWork%5D',
    },
    {
        title: 'Fresh Cart',
        desc: 'A full e-commerce platform built with React — product catalog, cart, checkout, and auth.',
        img: './AhmedSherif C43 React Exam - Fresh Cart/output.png',
        tags: ['React', 'E-commerce', 'API'],
        demo: 'https://fresh-cart-gamma-five.vercel.app/',
        codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/main/AhmedSherif%20C43%20React%20Exam%20-%20Fresh%20Cart',
    },
    { title: 'First HTML', desc: 'My first HTML page', demo: './AhmedSherif C43 Assignment 1 [First HTML]/index.html', img: './AhmedSherif C43 Assignment 1 [First HTML]/output.png', tags: ['HTML'], codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/main/AhmedSherif%20C43%20Assignment%201%20%5BFirst%20HTML%5D' },
    { title: 'User Form', desc: 'HTML user form exercise', demo: './AhmedSherif C43 Assignment 2 [UserForm]/index.html', img: './AhmedSherif C43 Assignment 2 [UserForm]/output.png', tags: ['HTML', 'Forms'], codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/main/AhmedSherif%20C43%20Assignment%202%20%5BUserForm%5D' },
    { title: 'Bakery Template', desc: 'A bakery landing page', demo: './AhmedSherif C43 Assignment 3 [Bakery Template]/index.html', img: './AhmedSherif C43 Assignment 3 [Bakery Template]/output.png', tags: ['HTML', 'CSS'], codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/main/AhmedSherif%20C43%20Assignment%203%20%5BBakery%20Template%5D' },
    { title: 'Fokir Template', desc: 'A personal portfolio template', demo: './AhmedSherif C43 Assignment 4 [Fokir]/index.html', img: './AhmedSherif C43 Assignment 4 [Fokir]/output.png', tags: ['HTML', 'CSS'], codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/main/AhmedSherif%20C43%20Assignment%204%20%5BFokir%5D' },
    { title: 'Mealify Template', desc: 'A restaurant landing page', demo: './AhmedSherif C43 Assignment 5 [Mealify]/index.html', img: './AhmedSherif C43 Assignment 5 [Mealify]/output.png', tags: ['HTML', 'CSS'], codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/main/AhmedSherif%20C43%20Assignment%205%20%5BMealify%5D' },
    { title: 'DevFolio Template', desc: 'A developer portfolio template', demo: './AhmedSherif C43 Assignment 6 [DevFolio]/index.html', img: './AhmedSherif C43 Assignment 6 [DevFolio]/output.png', tags: ['HTML', 'CSS'], codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/main/AhmedSherif%20C43%20Assignment%206%20%5BDevFolio%5D' },
    { title: 'First JS', desc: 'Intro to JavaScript', demo: './AhmedSherif C43 Assignment 7 [First JS]/index.html', img: './AhmedSherif C43 Assignment 7 [First JS]/output.png', tags: ['JavaScript'], codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/main/AhmedSherif%20C43%20Assignment%207%20%5BFirst%20JS%5D' },
    { title: 'Random Quote', desc: 'Quote generator with JS & JSON', demo: './AhmedSherif C43 Assignment 8 [Quote JS&JSON]/index.html', img: './AhmedSherif C43 Assignment 8 [Quote JS&JSON]/output.png', tags: ['JavaScript', 'JSON'], codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/main/AhmedSherif%20C43%20Assignment%208%20%5BQuote%20JS%26JSON%5D' },
    { title: 'Bookmarker', desc: 'Bookmark manager with LocalStorage', demo: './AhmedSherif C43 Assignment 9 [BookMarker JS&LocalStorage]/index.html', img: './AhmedSherif C43 Assignment 9 [BookMarker JS&LocalStorage]/output.png', tags: ['JavaScript', 'LocalStorage'], codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/main/AhmedSherif%20C43%20Assignment%209%20%5BBookMarker%20JS%26LocalStorage%5D' },
    { title: 'Login System', desc: 'Login with JS & LocalStorage', demo: './AhmedSherif C43 Assignment 10 [Login JS & LocalStorage]/index.html', img: './AhmedSherif C43 Assignment 10 [Login JS & LocalStorage]/output.png', tags: ['JavaScript', 'Auth'], codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/main/AhmedSherif%20C43%20Assignment%2010%20%5BLogin%20JS%20%26%20LocalStorage%5D' },
    { title: 'Weather App', desc: 'Weather app using a public API', demo: './AhmedSherif C43 Assignment 11 [Weather App JS]/index.html', img: './AhmedSherif C43 Assignment 11 [Weather App JS]/output.png', tags: ['JavaScript', 'API'], codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/main/AhmedSherif%20C43%20Assignment%2011%20%5BWeather%20App%20JS%5D' },
    { title: 'Party Event', desc: 'Event page with jQuery', demo: './AhmedSherif C43 Assignment 12 [Party Event jQuery]/index.html', img: './AhmedSherif C43 Assignment 12 [Party Event jQuery]/output.png', tags: ['jQuery'], codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/main/AhmedSherif%20C43%20Assignment%2012%20%5BParty%20Event%20jQuery%5D' },
    { title: 'Daniels Template', desc: 'Bootstrap exam — Daniels portfolio', demo: './AhmedSherif C43 Exam 1 [Daniels]/index.html', img: './AhmedSherif C43 Exam 1 [Daniels]/output.png', tags: ['Bootstrap', 'Exam'], codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/main/AhmedSherif%20C43%20Exam%201%20%5BDaniels%5D' },
    { title: 'Yummy', desc: 'JS & jQuery exam — Yummy restaurant', demo: './AhmedSherif C43 Exam 2 [Yummy]/index.html', img: './AhmedSherif C43 Exam 2 [Yummy]/output.png', tags: ['JavaScript', 'jQuery', 'Exam'], codeURL: 'https://github.com/AhmedSherif23/Route-FullStack-Diploma/tree/main/AhmedSherif%20C43%20Exam%202%20%5BYummy%5D' },
];

// ^=============== RENDER CARDS ===============
function renderCards(container, list) {
    let html = '';
    list.forEach((item, i) => {
        const delay = (i % 4) * 0.1;
        if (item.featured) {
            html += `
            <div class="project-card featured reveal" style="animation-delay:${delay}s">
                <div class="project-img-wrap">
                    <i class="fa-solid ${item.icon || 'fa-star'} featured-icon"></i>
                    <div class="project-overlay">
                        <a href="${item.demo}" target="_blank"><i class="fa-solid fa-link"></i> Demo</a>
                        ${item.codeURL && item.codeURL !== '#' ? `<a href="${item.codeURL}" target="_blank"><i class="fa-solid fa-laptop-code"></i> Code</a>` : ''}
                    </div>
                </div>
                <div class="project-info">
                    <h5>${item.title}</h5>
                    <p>${item.desc}</p>
                    <div class="project-tags">
                        ${(item.tags || []).map(t => `<span>${t}</span>`).join('')}
                    </div>
                </div>
            </div>`;
        } else {
            html += `
            <div class="project-card reveal" style="animation-delay:${delay}s">
                <div class="project-img-wrap">
                    <img class="project-img" src="${item.img}" alt="${item.title}" loading="lazy">
                    <div class="project-overlay">
                        <a href="${item.demo}" target="_blank"><i class="fa-solid fa-link"></i> Demo</a>
                        ${item.codeURL && item.codeURL !== '#' ? `<a href="${item.codeURL}" target="_blank"><i class="fa-solid fa-laptop-code"></i> Code</a>` : ''}
                    </div>
                </div>
                <div class="project-info">
                    <h5>${item.title}</h5>
                    <p>${item.desc || ''}</p>
                    <div class="project-tags">
                        ${(item.tags || []).map(t => `<span>${t}</span>`).join('')}
                    </div>
                </div>
            </div>`;
        }
    });
    container.innerHTML = html;
}

renderCards(projectsContainer, projectsList);

// ^=============== SMALL PROJECTS GALLERY (cards) ===============
const galleryContainer = document.querySelector('#galleryContainer');
renderCards(galleryContainer, assignmentsList);

// ^=============== THEME TOGGLE ===============
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function getStoredTheme() {
    return localStorage.getItem('portfolio-theme') || 'dark';
}

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    localStorage.setItem('portfolio-theme', theme);
}

applyTheme(getStoredTheme());

themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ^=============== MOBILE MENU ===============
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// ^=============== NAVBAR SCROLL EFFECT ===============
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ^=============== ACTIVE NAV LINK ON SCROLL ===============
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link-custom');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + current) {
            item.classList.add('active');
        }
    });
});

// ^=============== SCROLL REVEAL ===============
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// ^=============== FOOTER YEAR ===============
document.getElementById('year').textContent = new Date().getFullYear();
