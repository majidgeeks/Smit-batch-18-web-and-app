let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items");
const totalDiv = document.getElementById("total");

function renderCart() {
  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" />
        <h4>${item.name}</h4>
        <p>Rs. ${item.price}</p>

        <button class="qty-btn" onclick="decrease(${index})">-</button>
        <span>${item.quantity}</span>
        <button class="qty-btn" onclick="increase(${index})">+</button>

        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  totalDiv.innerText = "Total: Rs. " + total;
}

function increase(index) {
  cart[index].quantity++;
  updateCart();
}

function decrease(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  }
  updateCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Initial render
renderCart();