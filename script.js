// Simple image slider
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000); // Change every 3 seconds

// Form validation
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();
  let formMessage = document.getElementById('formMessage');

  if (name && email && message) {
    formMessage.textContent = "Thank you, " + name + "! Your message has been sent.";
    formMessage.style.color = "green";
    this.reset();
  } else {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
  }
});
