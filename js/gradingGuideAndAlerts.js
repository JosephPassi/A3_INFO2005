document.addEventListener("DOMContentLoaded", () => {
  const alertBox = document.getElementById("alert-message");

  function showAlert(message) {
    if (!alertBox) return;
    alertBox.textContent = message;
    alertBox.classList.remove("hidden");
    setTimeout(() => alertBox.classList.add("hidden"), 2000);
  }

  // Variables for grading modal
  const gradingModal = document.getElementById("grading-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");

  // Close grading modal function
  function closeGradingModal() {
    gradingModal?.classList.add("hidden");
    modalBackdrop?.classList.add("hidden");
  }

  // Add event listeners to all wishlist buttons
  document.querySelectorAll(".wishlist-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      showAlert("Item added to wishlist");
    });
  });

  // Add event listeners to all cart buttons (e.g. product page Add to Cart)
  document.querySelectorAll(".cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      // On product page, save product to localStorage cart
      const title = document.querySelector(".product-title")?.textContent || "Unknown";
      const subtitle = "[From the Vault: Relics]";
      const priceText = document.querySelector(".product-price")?.textContent || "$0.00";
      const price = parseFloat(priceText.replace(/[^0-9.]/g, "")) || 0;
      const quantityInput = document.getElementById("quantity");
      const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;
      const conditionSelect = document.querySelector(".condition-dropdown");
      const condition = conditionSelect ? conditionSelect.value : "Near Mint";
      const image = document.querySelector(".zoom-image")?.getAttribute("src") || "";

      let cart = JSON.parse(localStorage.getItem("cartItems") || "[]");

      cart.push({ title, subtitle, price, quantity, condition, image });

      localStorage.setItem("cartItems", JSON.stringify(cart));

      showAlert("Item added to cart");
    });
  });

  // Add event listeners to all grading buttons (open modal)
  document.querySelectorAll(".grading-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (gradingModal && modalBackdrop) {
        gradingModal.classList.remove("hidden");
        modalBackdrop.classList.remove("hidden");
      }
    });
  });

  // Close modal when backdrop clicked or Escape pressed
  if (gradingModal && modalBackdrop) {
    modalBackdrop.addEventListener("click", closeGradingModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeGradingModal();
    });
  }

  // If on shopping cart page (check for cart table)
  const cartTableBody = document.querySelector(".cart-table tbody");
  if (cartTableBody) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

    cartTableBody.innerHTML = "";

    if (cartItems.length === 0) {
      cartTableBody.innerHTML = "<tr><td colspan='3'>Your cart is empty.</td></tr>";
      return;
    }

    cartItems.forEach(item => {
      const totalPrice = (item.price * item.quantity).toFixed(2);
      const row = document.createElement("tr");
      row.classList.add("cart-item");
      row.innerHTML = `
        <td>
          <img src="${item.image}" alt="${item.title}" class="cart-img" />
          <div class="cart-details">
            <strong>${item.title}</strong>
            <p class="cart-subtitle">${item.subtitle}</p>
            <div class="quantity-controls">
              <button class="qty-button">-</button>
              <span class="qty">${item.quantity}</span>
              <button class="qty-button">+</button>
            </div>
            <select class="condition-dropdown">
              <option ${item.condition === "Near Mint" ? "selected" : ""}>Near Mint</option>
              <option ${item.condition === "Lightly Played" ? "selected" : ""}>Lightly Played</option>
              <option ${item.condition === "Moderately Played" ? "selected" : ""}>Moderately Played</option>
              <option ${item.condition === "Heavily Played" ? "selected" : ""}>Heavily Played</option>
              <option ${item.condition === "Damaged" ? "selected" : ""}>Damaged</option>
            </select>
            <div class="cart-icons">
              <button class="wishlist-btn"><img src="/images/icons/wishlist-add.png" alt=""></button>
              <button class="grading-btn"><img src="/images/icons/grading.png" alt=""></button>
              <button class="remove-btn"><img src="/images/icons/trash.png" alt=""></button>
            </div>
          </div>
        </td>
        <td class="cart-price">$${item.price.toFixed(2)}</td>
        <td class="cart-total">$${totalPrice}</td>
      `;
      cartTableBody.appendChild(row);
    });

    // You can now add logic here for quantity changes, remove buttons, and total recalculation...
  }
});
