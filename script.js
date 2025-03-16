let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x'); // Toggle the "X" icon
  navbar.classList.toggle('active'); // Toggle the navbar visibility
};

