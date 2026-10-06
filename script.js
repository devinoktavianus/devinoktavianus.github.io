/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });


  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });

  });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

if (sections.length && navigationLinks.length) {

  const observerOptions = {
    root: null,
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  };


  const sectionObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) {
          return;
        }

        const currentId = entry.target.getAttribute("id");

        navigationLinks.forEach((link) => {

          link.classList.remove("active");

          const href = link.getAttribute("href");

          if (href === `#${currentId}`) {
            link.classList.add("active");
          }

        });

      });

    },
    observerOptions
  );


  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

}


/* =========================================================
   PROJECT ACCORDION
   Only one project opens at a time.
========================================================= */

const projectItems = document.querySelectorAll(".project-item");

if (projectItems.length) {

  projectItems.forEach((item) => {

    item.addEventListener("toggle", () => {

      if (!item.open) {
        return;
      }

      projectItems.forEach((otherItem) => {

        if (otherItem !== item) {
          otherItem.removeAttribute("open");
        }

      });

    });

  });

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* =========================================================
   PROJECT SUMMARY ACCESSIBILITY
========================================================= */

const projectSummaries = document.querySelectorAll(".project-item summary");

projectSummaries.forEach((summary) => {

  summary.addEventListener("keydown", (event) => {

    if (event.key === "Enter" || event.key === " ") {

      event.preventDefault();

      const parent = summary.parentElement;

      parent.open = !parent.open;

    }

  });

});


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", (event) => {

  if (!menuToggle || !navMenu) {
    return;
  }

  const clickedInsideMenu =
    navMenu.contains(event.target);

  const clickedToggle =
    menuToggle.contains(event.target);

  if (
    navMenu.classList.contains("open") &&
    !clickedInsideMenu &&
    !clickedToggle
  ) {
    navMenu.classList.remove("open");
  }

});


/* =========================================================
   INITIAL STATE
========================================================= */

window.addEventListener("load", () => {

  /*
    Intentionally no reveal animation here.

    The portfolio content is already visible by default.
    This prevents the entire website from becoming blank
    if JavaScript fails.
  */

  document.body.classList.add("loaded");

});
