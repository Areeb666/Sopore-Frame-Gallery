// Sample cart data (replace with actual data from your application or backend)
let cartItems = [
    { id: 1, name: "Frame A", price: 100 },
    { id: 2, name: "Frame B", price: 150 },
    { id: 3, name: "Frame C", price: 200 },
];

// Retrieve cart items from localStorage
function loadCart() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartContainer.innerHTML = ''; // Clear existing items
    let totalPrice = 0;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty!</p>';
    } else {
        cartItems.forEach((item, index) => {
            totalPrice += item.price;

            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');

            itemDiv.innerHTML = `
                <p>${item.name} - ₹${item.price.toFixed(2)}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;

            cartContainer.appendChild(itemDiv);
        });
    }

    totalPriceElement.textContent = `₹${totalPrice.toFixed(2)}`;
}

// Remove item from cart
function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1); // Remove item at the specified index
    localStorage.setItem('cart', JSON.stringify(cartItems));
    loadCart(); // Re-render cart
}

