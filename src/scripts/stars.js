const rates = document.querySelectorAll('.stars'); // take all ratings
rates.forEach(elem => {
  elem.addEventListener('mouseenter', event => {
    event.preventDefault();
    // control for star-rating class
    if (!elem.classList.contains('clicked')) {
      // check for active class
      elem.classList.add('stars-high');
    }
    elem.addEventListener('click', () => {
      // add active class on click
      elem.classList.add('stars-high', 'clicked');
    });
    elem.addEventListener('mouseleave', () => {
      // remove active class
      if (!elem.classList.contains('clicked')) {
        elem.classList.remove('stars-high');
      }
    });

    // actions for stars
    let full = Array.from(event.target.querySelectorAll('.full')); // take amount of full stars from rating
    const stars = Array.from(event.target.querySelectorAll('span')); // take each star from rating

    stars.forEach(elem => {
      elem.addEventListener('click', () => {
        // add or remove star on click
        starControl(elem);
        full = Array.from(event.target.querySelectorAll('.full')); // update amount of full stars from rating
      });
      elem.addEventListener('mouseenter', () => {
        // add stars on hover
        starControl(elem);
      });
      elem.addEventListener('mouseleave', () => {
        // remove stars after hover
        const sibs = getPreviousSiblings(elem);
        elem.classList.remove('full');
        sibs.forEach(elem => {
          elem.classList.remove('full');
        });
        full.forEach(elem => {
          // return amount of full stars before hover
          elem.classList.add('full');
        });
      });
    });
  });
});

// function for add/remove stars
const starControl = elem => {
  const sibs = getPreviousSiblings(elem);
  const nextSibling = getNextSiblings(elem);
  elem.classList.add('full');
  sibs.forEach(elem => {
    elem.classList.add('full');
  });
  nextSibling.forEach(elem => {
    elem.classList.remove('full');
  });
};

// check for previus siblings
const getPreviousSiblings = (elem, filter) => {
  const sibs = [];
  while ((elem = elem.previousSibling)) {
    if (elem.nodeType === 3) continue; // ignore text nodes
    if (!filter || filter(elem)) sibs.push(elem);
  }
  return sibs;
};

// check for next siblings
const getNextSiblings = (elem, filter) => {
  const sibs = [];
  let nextElem = elem.parentNode.firstChild;
  do {
    if (nextElem.nodeType === 3 || nextElem === elem) continue; // ignore text nodes, ignore elem of target
    if (nextElem === elem.nextElementSibling) {
      if (!filter || filter(elem)) {
        sibs.push(nextElem);
        elem = nextElem;
      }
    }
  } while ((nextElem = nextElem.nextSibling));
  return sibs;
};
