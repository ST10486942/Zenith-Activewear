// ----------------------
// About Page Script
// ----------------------

document.addEventListener("DOMContentLoaded", () => {

  // -------- Volunteer Form Handling --------
  const volunteerForm = document.getElementById("volunteerForm");
  const vSuccessMsg = document.getElementById("vSuccessMsg");

  if (volunteerForm) {
    volunteerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("vName").value.trim();
      const email = document.getElementById("vEmail").value.trim();
      const interest = document.getElementById("vInterest").value.trim();

      if (!name || !email || !interest) {
        showMessage("Please fill in all fields.", "error");
        return;
      }

      if (!validateEmail(email)) {
        showMessage("Please enter a valid email address.", "error");
        return;
      }

      showMessage("✅ Thank you for your interest! We'll get back to you soon.", "success");
      volunteerForm.reset();
    });
  }

  // -------- Map Initialization --------
  const mapElement = document.getElementById("map");
if (mapElement) {
  const map = L.map("map").setView([-26.192987607906964, 28.017042951716668], 13); // Updated coordinates
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  L.marker([-26.192987607906964, 28.017042951716668])
    .addTo(map)
    .bindPopup("Our Location")
    .openPopup();
}

  // -------- Optional Product Search --------
  const searchInput = document.getElementById("searchInput");
  const priceInput = document.getElementById("priceInput");
  const productList = document.getElementById("productList");

  if (searchInput && priceInput && productList) {
    function filterProducts() {
      const searchTerm = searchInput.value.toLowerCase();
      const maxPrice = parseFloat(priceInput.value) || Infinity;

      const products = productList.querySelectorAll(".product");
      products.forEach(product => {
        const name = product.dataset.name.toLowerCase();
        const price = parseFloat(product.dataset.price);
        product.style.display = (name.includes(searchTerm) && price <= maxPrice) ? "" : "none";
      });
    }

    searchInput.addEventListener("input", filterProducts);
    priceInput.addEventListener("input", filterProducts);
  }

  // ---------------------- Helper Functions ----------------------
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function showMessage(text, type) {
    vSuccessMsg.textContent = text;
    vSuccessMsg.style.color = type === "success" ? "green" : "red";
    vSuccessMsg.style.opacity = "1";
    vSuccessMsg.style.transition = "opacity 0.6s ease";

    setTimeout(() => {
      vSuccessMsg.style.opacity = "0";
    }, 3000);
  }

});
