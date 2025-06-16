// Responsible for controlling the arrows that enable users to scroll left/right
  const scrollContainer = document.getElementById('relatedScroll');
  const leftArrow = document.querySelector('.related-arrow.left');
  const rightArrow = document.querySelector('.related-arrow.right');

  leftArrow.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
  });

