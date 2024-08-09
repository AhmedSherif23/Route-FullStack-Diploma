const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');

let prevScrollPos = 0;
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos === 0) {
        header.style.backgroundColor = 'transparent';
        header.classList.remove('scroll-down');
    } else if (prevScrollPos > currentScrollPos) {
        header.style.top = '0';
        header.style.backgroundColor = '#333';
    } else {
        header.style.top = `-${headerHeight}px`;
        header.classList.add('scroll-down');
        navbar.style.backgroundColor = 'transparent';
    }

    prevScrollPos = currentScrollPos;
});



document.addEventListener("DOMContentLoaded", function() {
    function updateCounter(target, limit) {
        var counter = document.querySelector("." + target + " .counter");
        var currentNumber = parseInt(counter.textContent);

        if (currentNumber < limit) {
            counter.textContent = currentNumber + 1;
            setTimeout(function() { updateCounter(target, limit); }, .5); // adjust speed here
        }
    }

    updateCounter("stat-item:nth-child(1)", 200);
    updateCounter("stat-item:nth-child(2)", 345);
    updateCounter("stat-item:nth-child(3)", 1800);
    updateCounter("stat-item:nth-child(4)", 1200);
});



