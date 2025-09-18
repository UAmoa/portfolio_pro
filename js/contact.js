/* ===== MENU BURGER ===== */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/* ===== FORMULAIRE DE CONTACT ===== */
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Veuillez remplir tous les champs avant d’envoyer.");
      return;
    }

    // Simulation d’envoi
    alert("Merci " + name + " ! Votre message a été envoyé avec succès.");
    
    // Réinitialiser le formulaire
    contactForm.reset();
  });
}

/* ===== LIEN WHATSAPP ===== */
// Si tu as un bouton/lien WhatsApp dans ton HTML avec la classe .whatsapp-link
const whatsappLink = document.querySelector('.whatsapp-link');

// Remplace le numéro ci-dessous par ton vrai numéro WhatsApp au format international
const phoneNumber = "2250700000000";  // Exemple : Côte d’Ivoire
if (whatsappLink) {
  whatsappLink.href = `https://wa.me/${phoneNumber}`;
}
import emailjs from 'https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js';

emailjs.init("Amoa"); // fourni par EmailJS

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('service_1km1tkw', 'template_q8ptxor', this)
    .then(function() {
      alert('Message envoyé !');
    }, function(error) {
      alert('Erreur : ' + JSON.stringify(error));
    });
});
