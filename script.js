```javascript
// form.js
// Simple form validation script

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop page reload for demo

    // Basic validation
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
      feedback.textContent = "⚠️ Please fill in all fields.";
      feedback.style.color = "red";
      return;
    }

    if (!validateEmail(emailInput.value)) {
      feedback.textContent = "⚠️ Please enter a valid email address.";
      feedback.style.color = "red";
      return;
    }

    // Success
    feedback.textContent = "✅ Form submitted successfully!";
    feedback.style.color = "green";

    // Reset form
    form.reset();
  });

  function validateEmail(email) {
    // Simple regex for email validation
    return /\S+@\S+\.\S+/.test(email);
  }
});
```
