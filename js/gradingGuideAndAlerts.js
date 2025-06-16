  const alertBox = document.getElementById("alert-message");

  function showAlert(message) {
    alertBox.textContent = message;
    alertBox.classList.remove("hidden");
    setTimeout(() => alertBox.classList.add("hidden"), 2000);
  }

  // Wishlist & Cart Icons
  document.querySelector('button[title="Wishlist"]').addEventListener("click", () => {
    showAlert("Item added to wishlist");
  });

  document.querySelector('button[title="Add to Cart"]').addEventListener("click", () => {
    showAlert("Item added to cart");
  });

  // Grading Guide Modal
  const gradingModal = document.getElementById("grading-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");

  document.querySelector('button[title="Compare"]').addEventListener("click", () => {
    gradingModal.classList.remove("hidden");
    modalBackdrop.classList.remove("hidden");
  });

  document.getElementById("close-grading").addEventListener("click", () => {
    gradingModal.classList.add("hidden");
    modalBackdrop.classList.add("hidden");
  });

  modalBackdrop.addEventListener("click", () => {
    gradingModal.classList.add("hidden");
    modalBackdrop.classList.add("hidden");
  });