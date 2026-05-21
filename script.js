const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);

  feedback.textContent = "Sending...";

  fetch(contactForm.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      feedback.textContent = "Thanks! Your message has been sent.";
      contactForm.reset();
    })
    .catch(() => {
      feedback.textContent = "Sorry, something went wrong. Please email me directly.";
    });
});
