// Element selectors
const hamburgerMenu = document.querySelector('.menu');
const closeIcon = document.querySelector('.menu__close');
const openIcon = document.querySelector('.menu__open');

console.log(hamburgerMenu);

// Toggle menu function
openIcon.addEventListener("click", () => {
    hamburgerMenu.classList.toggle('hidden');
});