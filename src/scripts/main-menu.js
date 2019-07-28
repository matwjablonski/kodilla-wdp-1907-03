// FUNCTION TRIGGERING MAIN MENU on phone screens

function openMenu () {
  document.querySelector('#main-menu').classList.toggle('show');
  document.querySelector('#main-menu-btn').classList.toggle('active');
}

// CLICK LISTENER
document.querySelector('#main-menu-btn').addEventListener('click', function () {
  openMenu();
});
