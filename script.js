// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
}


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");

        navItems.forEach((item) => {
          item.classList.remove("active");

          if (item.getAttribute("href") === `#${currentId}`) {
            item.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.35,
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});


// ===============================
// CURSOR GLOW
// ===============================

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && window.innerWidth > 768) {
  document.addEventListener("mousemove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});


// ===============================
// CURRENT YEAR
// ===============================

const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ===============================
// PAGE LOAD
// ===============================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
