// Initialize Cart
let cart = JSON.parse(localStorage.getItem('AJMERA_CART')) || [];

function updateCartCount() {
    const countElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    countElements.forEach(el => el.innerText = totalItems);
}

function addToCart(id, name, price, img) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, img, quantity: 1 });
    }
    localStorage.setItem('AJMERA_CART', JSON.stringify(cart));
    updateCartCount();
    alert(`${name} added to cart!`);
}

// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Search Logic
function handleSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    alert("Searching for: " + query + ". This would typically filter the product grid.");
}

// Run on Load
document.addEventListener('DOMContentLoaded', updateCartCount);
