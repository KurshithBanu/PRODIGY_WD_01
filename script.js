window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
const contactForm = document.getElementById('contactForm');

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission
            alert('Your message has been sent!');
            contactForm.reset(); 
        });