const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const btnTop = document.getElementById('btn-top');
const sections = document.querySelectorAll('section[id]')

function toggleClass(element, className, condition) {
    if (condition) {
        element.classList.add(className);
    } else {
        element.classList.remove(className);
    }
}

function scrollHeader() {
    toggleClass(navbar, 'nav-scrolled', this.scrollY >= 50)
}
window.addEventListener('scroll', scrollHeader);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        arrayRemoveclass(navLinks, 'active')
        toggleClass(link, 'active', true);
        toggleClass(document.querySelector('.navbar-collapse'), 'show', false);
        document.querySelector('.navbar-toggler').setAttribute('aria-expanded', 'false');
    });
})