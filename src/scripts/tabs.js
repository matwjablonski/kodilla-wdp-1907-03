let filterValue = 'table';

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
  setTimeout(function () {
    cat.style.display = 'block';
    setTimeout(function () {
      cat.classList.add('show');
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
