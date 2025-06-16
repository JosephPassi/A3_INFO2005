document.addEventListener("DOMContentLoaded", () => {
  const alertBox = document.getElementById("alert-message");

  function showAlert(message) {
    if (!alertBox) return;
    alertBox.textContent = message;
    alertBox.classList.remove("hidden");
    setTimeout(() => alertBox.classList.add("hidden"), 2000);
  }

  // Wishlist & Cart (product spotlight page)
  const wishlistBtn = document.querySelector(".wishlist-btn");
  if (wishlistBtn) {
    wishlistBtn.addEventListener("click", () => {
      showAlert("Item added to wishlist");
    });
  }

  const cartBtn = document.querySelector(".cart-btn");
  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      showAlert("Item added to cart");
    });
  }

  // Search Page — All Add to Cart buttons
  const cartButtons = document.querySelectorAll(".add-to-cart-button");
  cartButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Optional: prevent link navigation if inside an <a>
      showAlert("Item added to cart");
    });
  });

  // Grading Guide Logic (Product page only)
  const gradingBtn = document.querySelector(".grading-btn");
  const gradingModal = document.getElementById("grading-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");

  function closeGradingModal() {
    gradingModal?.classList.add("hidden");
    modalBackdrop?.classList.add("hidden");
  }

  if (gradingBtn && gradingModal && modalBackdrop) {
    gradingBtn.addEventListener("click", () => {
      gradingModal.classList.remove("hidden");
      modalBackdrop.classList.remove("hidden");
    });

    modalBackdrop.addEventListener("click", closeGradingModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeGradingModal();
    });
  }
});
