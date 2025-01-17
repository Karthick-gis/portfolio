// Smooth scrolling functionality
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button, .back-button");

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const targetPage = button.getAttribute("href");
            window.location.href = targetPage;
        });
    });

    // Extra: Highlight active link in navbar
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.style.textDecoration = "underline";
        }
    });
});
