function smoothScroll(target) {
    const element = document.querySelector(target);
    const windowHeight = window.innerHeight; 
    const scrollToPosition = element.offsetTop - (windowHeight / 2) + (element.offsetHeight / 2);
    window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
    });
}

function handleNavigation() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    handleNavigation();
});
