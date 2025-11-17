// Product data
const products = [
    { name: "White Activewear Shirt", price: "R299", image: "Pictures/ShirtWhite.png" },
    { name: "Black Activewear Shirt", price: "R299", image: "Pictures/BlackShirt.jpeg" },
    { name: "White Activewear Shorts", price: "R199", image: "Pictures/WhiteShorts.jpg" },
    { name: "Black Activewear Shorts", price: "R199", image: "Pictures/Blackshorts.jpg" }
];

const container = document.getElementById("product-container");

// Load products dynamically
function loadProducts(filter = "") {
    container.innerHTML = "";
    products
        .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach((p, index) => {
            const product = document.createElement("div");
            product.classList.add("product", "fade-in");
            product.innerHTML = `
                <img src="${p.image}" alt="${p.name}" data-index="${index}">
                <p>${p.name}</p>
                <p>${p.price}</p>
            `;
            container.appendChild(product);
        });
    fadeInElements();
}

// Search Filter
document.getElementById("search").addEventListener("input", (e) => {
    loadProducts(e.target.value);
});

// Fade-in animation
function fadeInElements() {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
}

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

container.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        lightboxImg.src = e.target.src;
        lightbox.style.display = "flex";
    }
});
lightbox.addEventListener("click", () => lightbox.style.display = "none");

// Modal popup
window.onload = function() {
    const modal = document.getElementById("promoModal");
    modal.style.display = "block";
};
function closeModal() {
    document.getElementById("promoModal").style.display = "none";
}

// Initial load
loadProducts();