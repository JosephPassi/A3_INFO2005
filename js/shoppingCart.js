// Enables the price of items to automatically respond according to the quantity being ordered
// Also removes products from the cart if the delete/remove button is clicked

document.addEventListener('DOMContentLoaded', function () {
  function updateItemTotal(row) {
    const unitPrice = parseFloat(row.querySelector('.cart-item__price').dataset.price);
    const quantity = parseInt(row.querySelector('.quantity-value').textContent);
    const total = (unitPrice * quantity).toFixed(2);
    row.querySelector('.cart-item__total').textContent = `$${total}`;
  }

  function updateCartTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(row => {
      const itemTotalText = row.querySelector('.cart-item__total').textContent;
      const itemTotal = parseFloat(itemTotalText.replace('$', '')) || 0;
      total += itemTotal;
    });
    document.querySelector('.cart-total-price').textContent = `$${total.toFixed(2)}`;
  }

  // Quantity increase
  document.querySelectorAll('.quantity-increase').forEach(button => {
    button.addEventListener('click', () => {
      const row = button.closest('.cart-item');
      const quantitySpan = row.querySelector('.quantity-value');
      let quantity = parseInt(quantitySpan.textContent);
      quantity++;
      quantitySpan.textContent = quantity;
      updateItemTotal(row);
      updateCartTotal();
    });
  });

  // Quantity decrease
  document.querySelectorAll('.quantity-decrease').forEach(button => {
    button.addEventListener('click', () => {
      const row = button.closest('.cart-item');
      const quantitySpan = row.querySelector('.quantity-value');
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 1) {
        quantity--;
        quantitySpan.textContent = quantity;
        updateItemTotal(row);
        updateCartTotal();
      }
    });
  });

  // Delete item
  document.querySelectorAll('.delete-item').forEach(button => {
    button.addEventListener('click', () => {
      const row = button.closest('.cart-item');
      row.remove();
      updateCartTotal();
    });
  });

  // Initial calc (in case you load from saved data)
  document.querySelectorAll('.cart-item').forEach(row => {
    updateItemTotal(row);
  });
  updateCartTotal();
});