function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop,
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
