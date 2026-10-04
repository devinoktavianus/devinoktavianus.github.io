/* ================= MOBILE MENU ================= */

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


/* ================= NAVBAR ================= */

const navWrap = document.querySelector(".nav-wrap");

window.addEventListener("scroll", () => {

  if (!navWrap) return;

  if (window.scrollY > 30) {
    navWrap.classList.add("scrolled");
  } else {
    navWrap.classList.remove("scrolled");
  }

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) return;

      const currentId = entry.target.getAttribute("id");

      navItems.forEach((item) => {

        item.classList.remove("active");

        if (
          item.getAttribute("href") === `#${currentId}`
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


/* ================= CURSOR GLOW ================= */

const cursorGlow = document.querySelector(".cursor-glow");

if (
  cursorGlow &&
  window.matchMedia("(pointer: fine)").matches
) {

  document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left =
      `${event.clientX}px`;

    cursorGlow.style.top =
      `${event.clientY}px`;

  });

}


/* ================= SMALL PARALLAX ================= */

const decorativeElements = document.querySelectorAll(
  ".sparkle, .bubble, .floating-word"
);

window.addEventListener("mousemove", (event) => {

  if (
    !window.matchMedia("(pointer: fine)").matches
  ) {
    return;
  }

  const x =
    (event.clientX / window.innerWidth - 0.5);

  const y =
    (event.clientY / window.innerHeight - 0.5);

  decorativeElements.forEach((element, index) => {

    const amount = (index + 1) * 2;

    element.style.transform =
      `translate(${x * amount}px, ${y * amount}px)`;

  });

});


/* ================= SMOOTH INTERNAL LINKS ================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId =
      link.getAttribute("href");

    const target =
      document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});
