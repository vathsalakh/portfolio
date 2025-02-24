// Smooth Scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Toggle dark/light mode (Optional)
const themeToggle = document.createElement('button');
themeToggle.innerText = "Toggle Theme";
themeToggle.style.position = "fixed";
themeToggle.style.top = "20px";
themeToggle.style.right = "20px";
themeToggle.style.padding = "10px";
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// Add light-theme styles
const style = document.createElement('style');
style.innerHTML = `
    .light-theme {
        background-color: #ffffff;
        color: #000000;
    }
    .light-theme header, .light-theme footer {
        background: #f0f0f0;
    }
    .light-theme .btn {
        background: #0d1117;
        color: #ffffff;
    }
`;
document.head.appendChild(style);
