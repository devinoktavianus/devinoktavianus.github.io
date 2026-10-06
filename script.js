/* =========================================================
   NAVIGATION
========================================================= */

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
  ".section-heading, .about-story, .about-orb, .info-card, .skill-card, .timeline-item, .project-item, .connect-link"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.08
  }
);


revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================================
   CERTIFICATE MODAL
========================================================= */

const certificateLinks = document.querySelectorAll(".certificate-link");
const modal = document.getElementById("certificateModal");
const modalTitle = document.getElementById("certificateTitle");
const modalClose = document.querySelector(".modal-close");

certificateLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    const certificateName =
      link.getAttribute("data-certificate");

    if (modalTitle) {
      modalTitle.textContent = certificateName;
    }

    if (modal) {
      modal.classList.add("active");
    }

  });

});


if (modalClose) {

  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

}


if (modal) {

  modal.addEventListener("click", (event) => {

    if (event.target === modal) {
      modal.classList.remove("active");
    }

  });

}


document.addEventListener("keydown", (event) => {

  if (event.key === "Escape" && modal) {
    modal.classList.remove("active");
  }

});


/* =========================================================
   SMOOTH NAVIGATION OFFSET
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    const navbarHeight =
      document.querySelector(".navbar")?.offsetHeight || 0;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });

  });

});
