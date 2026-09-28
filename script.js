const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });

  navLinks.forEach(link => {
    link.style.opacity = link.getAttribute('href') === `#${current}` ? '1' : '.55';
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();
