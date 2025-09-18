// ===== MENU BURGER =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== ANIMATION ABOUT =====
window.addEventListener("DOMContentLoaded", () => {
  const profilePic = document.querySelector(".profile-pic");
  const aboutText = document.querySelector(".about-text");

  // Ajoute une animation douce à l’image
  if (profilePic) {
    profilePic.style.opacity = "0";
    profilePic.style.transform = "translateY(30px)";
    setTimeout(() => {
      profilePic.style.transition = "all 1s ease";
      profilePic.style.opacity = "1";
      profilePic.style.transform = "translateY(0)";
    }, 200);
  }

  // Animation du texte
  if (aboutText) {
    aboutText.style.opacity = "0";
    aboutText.style.transform = "translateY(30px)";
    setTimeout(() => {
      aboutText.style.transition = "all 1s ease";
      aboutText.style.opacity = "1";
      aboutText.style.transform = "translateY(0)";
    }, 600);
  }
});
