// Smooth scrolling effect
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Removed JavaScript form submission handling
