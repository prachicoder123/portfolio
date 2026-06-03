// ===============================
// MOBILE MENU TOGGLE
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.right = "20px";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "10px";
        navLinks.style.background = "#0f172a";
        navLinks.style.gap = "15px";
    }

});

// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 768) {
            navLinks.style.display = "none";
        }

    });

});

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "#020617";
        navbar.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.4)";

    } else {

        navbar.style.background =
            "rgba(15,23,42,0.95)";
        navbar.style.boxShadow = "none";

    }

});

// ===============================
// ACTIVE NAV LINK
// ===============================

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements =
document.querySelectorAll(
    ".project-card, .skill-card, .achievement-card, .about-card, .education-card, .experience-card, .contact-card"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (
            revealTop <
            windowHeight - revealPoint
        ) {

            element.style.opacity = "1";
            element.style.transform =
                "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform =
        "translateY(40px)";
    element.style.transition =
        "all 0.8s ease";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// ===============================
// TYPING EFFECT FOR HERO
// ===============================

const roleText = [
    "Cybersecurity Enthusiast",
    "Python Developer",
    "Ethical Hacking Learner",
    "Network Security Explorer"
];

let roleIndex = 0;
let charIndex = 0;

const heroHeading =
document.querySelector(".hero-content h2");

function typeEffect() {

    if (!heroHeading) return;

    heroHeading.textContent =
        roleText[roleIndex].substring(
            0,
            charIndex + 1
        );

    charIndex++;

    if (
        charIndex ===
        roleText[roleIndex].length
    ) {

        setTimeout(() => {

            charIndex = 0;

            roleIndex++;

            if (
                roleIndex ===
                roleText.length
            ) {
                roleIndex = 0;
            }

        }, 1500);

    }

}

setInterval(typeEffect, 120);

// ===============================
// CURRENT YEAR IN FOOTER
// ===============================

const footer =
document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Prachi Khutarkar. All Rights Reserved.`;

}

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "Prachi Khutarkar Portfolio Loaded Successfully 🚀"
);