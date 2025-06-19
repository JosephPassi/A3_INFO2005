// Enables the price of items to automatically respond according to the quantity being ordered
// Also removes products from the cart if the delete/remove button is clicked

document.addEventListener('DOMContentLoaded', function () {
  function updateItemTotal(row) {
    const priceText = row.querySelector('.cart-price').textContent;
    const unitPrice = parseFloat(priceText.replace(/[^0-9.]/g, '')) || 0;
    const quantity = parseInt(row.querySelector('.qty').textContent);
    const total = (unitPrice * quantity).toFixed(2);
    row.querySelector('.cart-total').textContent = `$${total}`;
  }

  function updateCartTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(row => {
      const itemTotalText = row.querySelector('.cart-total').textContent;
      const itemTotal = parseFloat(itemTotalText.replace(/[^0-9.]/g, '')) || 0;
      total += itemTotal;
    });
    document.getElementById('cart-grand-total').textContent = `$${total.toFixed(2)}`;
  }

  // Quantity increase
  document.querySelectorAll('.qty-button:nth-of-type(2)').forEach(button => {
    button.addEventListener('click', () => {
      const row = button.closest('.cart-item');
      const qtySpan = row.querySelector('.qty');
      let quantity = parseInt(qtySpan.textContent);
      qtySpan.textContent = ++quantity;
      updateItemTotal(row);
      updateCartTotal();
    });
  });

  // Quantity decrease
  document.querySelectorAll('.qty-button:nth-of-type(1)').forEach(button => {
    button.addEventListener('click', () => {
      const row = button.closest('.cart-item');
      const qtySpan = row.querySelector('.qty');
      let quantity = parseInt(qtySpan.textContent);
      if (quantity > 1) {
        qtySpan.textContent = --quantity;
        updateItemTotal(row);
        updateCartTotal();
      }
    });
  });

  // Remove item
  document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', () => {
      const row = button.closest('.cart-item');
      row.remove();
      updateCartTotal();
    });
  });

  // Initial calculation
  document.querySelectorAll('.cart-item').forEach(row => {
    updateItemTotal(row);
  });
  updateCartTotal();
});