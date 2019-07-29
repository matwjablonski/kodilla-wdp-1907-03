const menuBtn = document.getElementById('main-menu-btn');

// FUNCTION TRIGGERING MAIN MENU on phone screens
function openMenu () {
  document.querySelector('#main-menu').classList.toggle('show');
  document.querySelector('#main-menu-btn').classList.toggle('active');
}

module.exports = menuBtn && menuBtn.addEventListener('click', openMenu);
