// Updated version (will only run animations when a certain % of element is visible to the user, along with buffers to ensure it won't play too quickly)
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('carousel-show');
        observer.unobserve(entry.target); // Remove for animations always playing when scrolling
      }
    });
  }, {
    rootMargin: '0px 0px -40% 0px', // Top 60% of viewport won't trigger animation
    threshold: 0.3                  // Trigger only when 40% of element is visible
  });

  // Observes all hidden elements
  const hiddenElements = document.querySelectorAll('.carousel-hidden');
  hiddenElements.forEach(el => observer.observe(el));
});


// Subtle, yet Beautiful Scroll Animations - https://www.youtube.com/watch?v=T33NN_pPeNI


// Previous Versions:
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// Altered version so that elements stay on screen permanently after they appear (no repeating)
// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//       observer.unobserve(entry.target); // only animate once
//     }
//   });
// });

