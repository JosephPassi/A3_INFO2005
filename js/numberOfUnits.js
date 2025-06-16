// Responsible for controlling the amount of product being ordered
function changeQty(amount) {
  const input = document.getElementById('quantity');
  let value = parseInt(input.value) || 1;
  value = Math.max(1, value + amount); // Min quantity = 1
  input.value = value;
}