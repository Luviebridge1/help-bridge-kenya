// Basic client-side script for Help Bridge

document.addEventListener("DOMContentLoaded", () => {
    console.log("Help Bridge site loaded successfully.");

    // Simple smooth scroll for navigation links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
