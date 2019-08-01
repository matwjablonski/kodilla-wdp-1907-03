import { carouselNewFurniture } from './carousel-new-furniture';

let filterValue = 'bed';
const filteredOutput = document.getElementById('filtered-list-output');

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
  let catCopy = cat.cloneNode(true);
  filteredOutput.insertAdjacentElement('afterbegin', catCopy);
  let newCat = filteredOutput.children[0];
  newCat.style.display = 'block';
  let carouselTiles = Array.from(newCat.children[0].children[0].children[0].children);
  let newClassList = carouselTiles[0].className + ' carousel-tile';
  carouselTiles.forEach(tile => {
    tile.className = newClassList;
  });

  setTimeout(function () {
    setTimeout(function () {
      newCat.classList.add('show');
      setTimeout(function () {
        carouselNewFurniture();
      }, 20);
    }, 10);
  }, 301);
}

function hideList (cat) {
  setTimeout(function () {
    cat.classList.remove('show');
  }, 10);
  setTimeout(function () {
    cat.style.display = 'none';
  }, 300);
}

function listToggle () {
  document.querySelectorAll('.new-furniture-list').forEach(cat => {
    cat.dataset.category === filterValue ? showList(cat) : hideList(cat);
  });
  document.querySelector('.dots').style.opacity = 0;
  setTimeout(function () {
    document.querySelector('.dots').style.opacity = 1;
  }, 300);
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
