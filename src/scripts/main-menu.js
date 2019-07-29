const menuBtn = document.getElementById('main-menu-btn');

function openMenu () {
  document.querySelector('#main-menu').classList.toggle('show');
  document.querySelector('#main-menu-btn').classList.toggle('active');
}

menuBtn && menuBtn.addEventListener('click', openMenu);
