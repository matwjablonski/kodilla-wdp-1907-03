import { carouselNewFurniture } from './carousel-new-furniture';

let filterValue = 'bed';
const filteredOutput = document.getElementById('filtered-list-output');
const animationOffset = 300;

function clearTabs () {
  document.querySelectorAll('.tab-trigger').forEach(tab => {
    tab.classList.remove('active');
  });
}

function initFilter () {
  document.querySelectorAll('.tab-trigger').forEach(tab => {
    tab.dataset.category === filterValue && tab.classList.add('active');
  });
}

function showList (cat) {
  filteredOutput.innerHTML = '';
  const catCopy = cat.cloneNode(true);
  filteredOutput.insertAdjacentElement('afterbegin', catCopy);
  const newCat = filteredOutput.children[0];
  newCat.style.display = 'block';
  newCat.classList.add('active-furniture-list');
  const carouselTiles = document.querySelectorAll(
    '.active-furniture-list .new-furniture-item'
  );
  carouselTiles.forEach(tile => {
    tile.classList.add('carousel-tile');
  });
  setTimeout(function () {
    newCat.classList.add('show');
  }, animationOffset);
  carouselNewFurniture();
}

function hideList (cat) {
  setTimeout(function () {
    cat.classList.remove('show');
  }, 10);
  setTimeout(function () {
    cat.style.display = 'none';
  }, animationOffset);
}

function listToggle () {
  document.querySelectorAll('.new-furniture-list').forEach(cat => {
    cat.dataset.category === filterValue ? showList(cat) : hideList(cat);
  });
  document.querySelector('.dots').style.opacity = 0;
  setTimeout(function () {
    document.querySelector('.dots').style.opacity = 1;
  }, animationOffset);
}

function activeTab (item) {
  document.querySelector(`[data-category=${item}]`).classList.add('active');
  filterValue = item.toString();
  listToggle();
}

initFilter();
listToggle();

document.querySelectorAll('.tab-trigger').forEach(tab => {
  tab.addEventListener('click', function (e) {
    e.preventDefault();
    clearTabs();
    activeTab(tab.dataset.category);
  });
});
