document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle")
    const navMenu = document.getElementById("nav-menu")

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active")
        navToggle.classList.toggle("active")
    })

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active")
            navToggle.classList.remove("active")
        })
    })

    // Animate progress bars when skills section comes into view
    const observerOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll(".progress-fill")
                progressBars.forEach((bar) => {
                    bar.style.width = bar.style.width || "0%"
                })
            }
        })
    }, observerOptions)

    const skillsSection = document.getElementById("skills")
    if (skillsSection) {
        observer.observe(skillsSection)
    }
})

document.getElementById("year").textContent = new Date().getFullYear();
