// ==============================
//  GUNDAM E-SHOP CART SYSTEM
//  Basic Add-to-Cart Logic
// ==============================

let cart = [];

// Add item to cart
function addToCart(productName, productPrice) {
    const item = { name: productName, price: productPrice };
    cart.push(item);
    saveCart();
    alert(productName + " has been added to your cart!");
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem("gundamCart", JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const storedCart = localStorage.getItem("gundamCart");
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

// Display cart items on cart page
function displayCart() {
    loadCart();

    const cartContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        const row = document.createElement("div");
        row.classList.add("cart-row");

        row.innerHTML = `
            <span>${item.name}</span>
            <span>₱${item.price}</span>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartContainer.appendChild(row);
        total += item.price;
    });

    totalPriceElement.textContent = "₱" + total;
}

// Remove item from cart
function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    displayCart();
}

// Initialize cart on page load
window.onload = loadCart;
