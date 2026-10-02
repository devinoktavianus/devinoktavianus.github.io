const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navWrap = document.querySelector(".nav-wrap");


// MOBILE MENU

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuBtn.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );

  });


  document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuBtn.setAttribute(
        "aria-label",
        "Open menu"
      );

    });

  });

}


// SCROLL REVEAL

const revealObserver = new IntersectionObserver(
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


document.querySelectorAll(".reveal").forEach((element) => {

  revealObserver.observe(element);

});


// NAVBAR SHADOW

window.addEventListener("scroll", () => {

  if (!navWrap) return;

  navWrap.classList.toggle(
    "scrolled",
    window.scrollY > 30
  );

});


// ACTIVE NAVIGATION

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");


const sectionObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) return;

      const id = entry.target.getAttribute("id");

      navItems.forEach((item) => {

        item.classList.toggle(
          "active",
          item.getAttribute("href") === `#${id}`
        );

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


// CURSOR GLOW

const glow = document.querySelector(".cursor-glow");


if (
  glow &&
  window.matchMedia("(pointer: fine)").matches
) {

  window.addEventListener("pointermove", (event) => {

    glow.style.left = `${event.clientX}px`;

    glow.style.top = `${event.clientY}px`;

  });

}
