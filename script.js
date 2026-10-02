// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


if (menuBtn && navLinks) {


  menuBtn.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");


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



// =========================
// SCROLL REVEAL
// =========================

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(

    (entries, observer) => {

      entries.forEach((entry) => {

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


revealElements.forEach((element) => {

  revealObserver.observe(element);

});



// =========================
// NAVBAR SHADOW
// =========================

const navWrap =
  document.querySelector(".nav-wrap");


window.addEventListener("scroll", () => {

  if (!navWrap) return;


  if (window.scrollY > 30) {

    navWrap.classList.add("scrolled");

  } else {

    navWrap.classList.remove("scrolled");

  }

});



// =========================
// ACTIVE NAVIGATION
// =========================

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



// =========================
// CURRENT YEAR
// =========================

const yearElement =
  document.getElementById("current-year");


if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}



// =========================
// PAGE LOAD
// =========================

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});
