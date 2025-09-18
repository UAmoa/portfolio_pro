/* ===== MENU BURGER ===== */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/* ===== ANIMATION DES BARRES DE PROGRESSION ===== */
const progressBars = document.querySelectorAll('.progress-bar span');
const skillCards = document.querySelectorAll('.skill-card');

function animateProgressBars() {
  progressBars.forEach(bar => {
    const value = bar.getAttribute('data-progress');
    bar.style.width = value + '%';
  });

  skillCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('show');
    }, index * 200); // effet décalé
  });
}

/* Quand la section compétences est visible */
const skillsSection = document.querySelector('.skills-container');

window.addEventListener('scroll', () => {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if(sectionTop < windowHeight - 100) {
    animateProgressBars();
  }

});