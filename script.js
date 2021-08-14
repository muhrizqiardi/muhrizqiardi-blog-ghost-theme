const nav = document.getElementById('nav');
const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');

const toggleNav = () => {
  nav.classList.toggle("-translate-y-full")
  console.log('toggled');
}

navOpen.addEventListener("click", toggleNav)
navClose.addEventListener("click", toggleNav)
