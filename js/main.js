document.addEventListener("DOMContentLoaded", function() {
    // Load the header
    fetch('templates/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // Get the current page's path (e.g., "index.html")
            const currentPage = window.location.pathname.split("/").pop() || "index.html";

            // Find the corresponding link in the navigation and add the 'active' class
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        });
});
