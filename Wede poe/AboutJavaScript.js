// ----------------------
// About Page Script
// ----------------------

document.addEventListener("DOMContentLoaded", () => {
  const volunteerForm = document.getElementById("volunteerForm");
  const vSuccessMsg = document.getElementById("vSuccessMsg");

  if (volunteerForm) {
    volunteerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // Get values and trim extra spaces
      const name = document.getElementById("vName").value.trim();
      const email = document.getElementById("vEmail").value.trim();
      const interest = document.getElementById("vInterest").value.trim();

      // Simple validation
      if (!name || !email || !interest) {
        showMessage("Please fill in all fields.", "error");
        return;
      }

      if (!validateEmail(email)) {
        showMessage("Please enter a valid email address.", "error");
        return;
      }

      // Success message
      showMessage("✅ Thank you for your interest! We'll get back to you soon.", "success");

      // Reset form
      volunteerForm.reset();
    });
  }

  // ----------------------
  // Helper Functions
  // ----------------------

  function validateEmail(email) {
    // Basic regex for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function showMessage(text, type) {
    vSuccessMsg.textContent = text;
    vSuccessMsg.style.color = type === "success" ? "green" : "red";
    vSuccessMsg.style.opacity = "1";
    vSuccessMsg.style.transition = "opacity 0.6s ease";

    // Fade out message after 3 seconds (for cleaner UX)
    setTimeout(() => {
      vSuccessMsg.style.opacity = "0";
    }, 3000);
  }
});
