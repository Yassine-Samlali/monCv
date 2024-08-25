// JavaScript functionality for additional interactive elements can be added here
document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scroll effect
    const links = document.querySelectorAll('nav a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    }
});