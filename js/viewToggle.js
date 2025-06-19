// No longer runs immediately after script loads, now script must WAIT for entire DOM to be ready ensuring that it can still function and nothing breaks (hopefully)
document.addEventListener('DOMContentLoaded', () => {
  const gridBtn = document.querySelector('.grid-view');
  const listBtn = document.querySelector('.list-view');
  const productGrid = document.querySelector('.product-grid');

  if (!gridBtn || !listBtn || !productGrid) {
    console.error('Toggle buttons or product grid not found!');
    return;
  }

  gridBtn.addEventListener('click', () => {
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
    productGrid.classList.remove('list');
  });

  listBtn.addEventListener('click', () => {
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
    productGrid.classList.add('list');
  });
});
