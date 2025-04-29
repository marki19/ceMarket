const cart = [];

function addToCart(title, price) {
  cart.push({ title, price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  const cartTotal = document.getElementById('cart-total');
  cartList.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.title} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}

function goToCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty. Add some items to your cart before checking out.");
    return;
  }
  alert("Thank you for your purchase! Total: $" + document.getElementById('cart-total').textContent);
  cart.length = 0; // Clear the cart after checkout
  updateCart(); // Update the cart display
}
