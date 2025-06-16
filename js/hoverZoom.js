// Responsible letting the zoom in effect (on products) follow the mouse whilst also keeping it within its section
  const zoomContainer = document.querySelector('.zoom-container');
  const zoomImage = zoomContainer.querySelector('.zoom-image');

  zoomContainer.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = zoomContainer.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    zoomImage.style.transformOrigin = `${x}% ${y}%`;
  });

  zoomContainer.addEventListener('mouseleave', () => {
    zoomImage.style.transformOrigin = 'center center';
  });