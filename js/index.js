// Sélection des éléments
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');

// Quand on clique sur le bouton hamburger
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');

  // Animation en douceur
  if (nav.classList.contains('active')) {
    nav.style.display = 'flex';
    setTimeout(() => {
      nav.style.opacity = "1";
      nav.style.transform = "translateY(0)";
    }, 10);
  } else {
    nav.style.opacity = "0";
    nav.style.transform = "translateY(-20px)";
    setTimeout(() => {
      nav.style.display = 'none';
    }, 300); // temps = durée transition CSS
  }
});

// Quand on clique sur un lien -> fermer le menu
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      nav.classList.remove('active');
      nav.style.opacity = "0";
      nav.style.transform = "translateY(-20px)";
      setTimeout(() => {
        nav.style.display = 'none';
      }, 300);
    }
  });
});