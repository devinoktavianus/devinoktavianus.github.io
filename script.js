/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    const isOpen =
      navLinks.classList.toggle("open");

    menuBtn.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );

  });


  document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuBtn.setAttribute(
          "aria-label",
          "Open menu"
        );

      });

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================================
   NAVBAR BACKGROUND
========================================================= */

const navWrap =
  document.querySelector(".nav-wrap");

function updateNavbar() {

  if (!navWrap) return;

  if (window.scrollY > 30) {
    navWrap.classList.add("scrolled");
  } else {
    navWrap.classList.remove("scrolled");
  }

}

window.addEventListener(
  "scroll",
  updateNavbar
);

updateNavbar();


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
  document.querySelectorAll("section[id]");

const navItems =
  document.querySelectorAll(".nav-links a");

const sectionObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        const currentId =
          entry.target.getAttribute("id");

        navItems.forEach((item) => {

          item.classList.remove("active");

          if (
            item.getAttribute("href") ===
            `#${currentId}`
          ) {

            item.classList.add("active");

          }

        });

      });

    },
    {
      threshold: 0.35
    }
  );


sections.forEach((section) => {
  sectionObserver.observe(section);
});


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
  document.querySelector(".cursor-glow");

if (
  cursorGlow &&
  window.matchMedia("(pointer: fine)").matches
) {

  document.addEventListener(
    "mousemove",
    (event) => {

      cursorGlow.style.left =
        `${event.clientX}px`;

      cursorGlow.style.top =
        `${event.clientY}px`;

    }
  );

}


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
  "click",
  (event) => {

    if (!navLinks || !menuBtn) return;

    const clickedInsideMenu =
      navLinks.contains(event.target);

    const clickedButton =
      menuBtn.contains(event.target);

    if (
      navLinks.classList.contains("open") &&
      !clickedInsideMenu &&
      !clickedButton
    ) {

      navLinks.classList.remove("open");

      menuBtn.setAttribute(
        "aria-label",
        "Open menu"
      );

    }

  }
);


/* =========================================================
   ESCAPE KEY FOR MOBILE MENU
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key !== "Escape") return;

    if (!navLinks) return;

    navLinks.classList.remove("open");

    if (menuBtn) {
      menuBtn.setAttribute(
        "aria-label",
        "Open menu"
      );
    }

  }
);
