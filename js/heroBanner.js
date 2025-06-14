// The concept of this .js file is to essentially create a working slideshow gallery for the Hero Banner. 
// Rather than reloading pages or modifying the files directly, this script opts to conceal/reveal elements dynamically ensuring for a better experience for users. 
// (Everything is loaded once the user enters the site, there's no need for further pressure on the user)


// VARIABLES AND CONSTANTS
let slideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


// Removes ".active" from all slides and dots, only adding ".active" to the slide and dot at the specified index
// Responsible for allocating the "active" class to the currently selected/displayed slide ONLY
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
  slideIndex = index;
}

// Updates slide index to display the proceeding slide
function nextSlide() {
  let next = (slideIndex + 1) % slides.length;
  showSlide(next);
}

// Updates slide index to display the preceeding slide
function prevSlide() {
  let prevIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

// Establishes each dot within the Hero Banner as an event listener, meaning if a user interacts with it the slide will change accordingly 
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Responsible for the slideshow progressing through itself automatically
//setInterval(nextSlide, 15000); // every 1000 == 1s
