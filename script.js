const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  feedback.textContent = "Thanks! Your message has been prepared and is ready to send.";
  contactForm.reset();
});
