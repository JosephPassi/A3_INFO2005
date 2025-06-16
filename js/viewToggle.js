  
  const gridBtn = document.querySelector('.grid-view');
  const listBtn = document.querySelector('.list-view');
  const productGrid = document.querySelector('.product-grid');

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