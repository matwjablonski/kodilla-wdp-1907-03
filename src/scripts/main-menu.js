const menuBtn = document.getElementById('main-menu-btn');
const mainMenu = document.getElementById('main-menu');

function openMenu () {
  mainMenu.classList.toggle('show');
  menuBtn.classList.toggle('active');
}

menuBtn && menuBtn.addEventListener('click', openMenu);
