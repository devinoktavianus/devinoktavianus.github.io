/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });

    });

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 160;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(item => {

        item.classList.remove("active");

        if (item.getAttribute("href") === `#${currentSection}`) {
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   PROJECT ACCORDION
   Only one project opens at a time
========================================================= */

const projectItems = document.querySelectorAll(".project-item");

projectItems.forEach(item => {

    item.addEventListener("toggle", () => {

        if (!item.open) return;

        projectItems.forEach(otherItem => {

            if (otherItem !== item) {
                otherItem.removeAttribute("open");
            }

        });

    });

});


/* =========================================================
   CLOSE PROJECT WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", event => {

    const clickedInsideProject =
        event.target.closest(".project-item");

    if (clickedInsideProject) return;

});


/* =========================================================
   PREVENT HASH JUMP ON PAGE LOAD
========================================================= */

window.addEventListener("load", () => {

    if (window.location.hash) {

        setTimeout(() => {

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }, 50);

    }

});
