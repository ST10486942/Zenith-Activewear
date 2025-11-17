document.getElementById("search").addEventListener("keyup", function () {
    const searchValue = this.value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const name = product.getAttribute("data-name").toLowerCase();
        const price = product.getAttribute("data-price");

        if (name.includes(searchValue) || price.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
