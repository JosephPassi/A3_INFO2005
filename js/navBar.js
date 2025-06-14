// Responsible for how the navBar appears on smaller screens
const burger = document.querySelector('.burger-menu');  // Identifies stacked menu icon
const navLinks = document.querySelector('.nav-links');  // Identifies navigation links


// Conceals nav links by deafult and only showing them once clicked 
burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});