let filterValue = 'table';

// FUNCTIONS:
// clearing active classes from tabs
function clearTabs () {
  document.querySelectorAll('.tab-trigger').forEach(tab => {
    tab.classList.remove('active');
  });
}

// Initial filter accoring to the filterValue value
function initFilter () {
  document.querySelectorAll('.tab-trigger').forEach(tab => {
    tab.dataset.category === filterValue && tab.classList.add('active');
  });
}

// SHOW list that matches the filterValue
function showList (cat) {
  setTimeout(function () {
    cat.style.display = 'block';
    setTimeout(function () {
      cat.classList.add('show');
    }, 10);
  }, 301);
}

// HIDE all the remaining lists (see function showList())
function hideList (cat) {
  setTimeout(function () {
    cat.classList.remove('show');
  }, 10);
  setTimeout(function () {
    cat.style.display = 'none';
  }, 300);
}

// Toggling active lists
function listToggle () {
  document.querySelectorAll('.new-furniture-list').forEach(cat => {
    cat.dataset.category === filterValue ? showList(cat) : hideList(cat);
  });
  document.querySelector('.dots').style.opacity = 0;
  setTimeout(function () {
    document.querySelector('.dots').style.opacity = 1;
  }, 300);
}

// Adding active class to the selected tab
function activeTab (item) {
  document.querySelector(`[data-category=${item}]`).classList.add('active');
  filterValue = item.toString();
  listToggle();
}

// ---------------------------------------------------------------------------------------------------------

// MAIN SCRIPT -> adding active class to the given tab accoring to the filterValue
// and filtering through the lists
initFilter();
listToggle();

// CLICK LISTENER on tab btns
document.querySelectorAll('.tab-trigger').forEach(tab => {
  tab.addEventListener('click', function (e) {
    e.preventDefault();
    clearTabs();
    activeTab(tab.dataset.category);
  });
});
