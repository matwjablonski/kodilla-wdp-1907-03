const sessionStorage = window.sessionStorage;

document.addEventListener('DOMContentLoaded', function () {
  if (sessionStorage.getItem('cart') === null) {
    sessionStorage.setItem('cart', JSON.stringify([])); // Setting an empty shopping cart (empty array)
    updateCartCount();
  } else {
    updateCartCount();
  }
});

const cartCounter = document.getElementById('cart-counter');
const btns = document.querySelectorAll('[add-to-cart]');
let counter = 0;

btns.forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    addToCart({ name: 'furniture' });
  });
});

function updateCartCount () {
  const cartItems = JSON.parse(sessionStorage.getItem('cart'));
  counter = cartItems.length;
  cartCounter.innerText = counter;
}

function addToCart (itemToAddToCart) {
  const cartItems = JSON.parse(sessionStorage.getItem('cart'));
  const newItem = itemToAddToCart;
  cartItems.push(newItem);
  sessionStorage.setItem('cart', JSON.stringify(cartItems));
  updateCartCount();
}

// Only for carousel items / called inside tabs.js
export function getCartBtns () {
  let btns = document.querySelectorAll('#filtered-list-output [add-to-cart]');

  btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      addToCart({ name: 'furniture' });
    });
  });
}
