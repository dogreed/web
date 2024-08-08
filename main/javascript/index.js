document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        // Toggle between hamburger and cross
        if (nav.classList.contains('active')) {
            navToggle.textContent = '✖';
        } else {
            navToggle.textContent = '☰';
        }
    });
});
