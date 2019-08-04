const rates = document.querySelectorAll('.stars'); // take all ratings
rates.forEach(ele => {
  ele.addEventListener('mouseenter', event => {
    event.preventDefault();
    // control for star-rating class
    if (!ele.classList.contains('clicked')) {
      // check for active class
      ele.classList.add('stars-high');
    }
    ele.addEventListener('click', () => {
      // add active class on click
      ele.classList.add('stars-high', 'clicked');
    });
    ele.addEventListener('mouseleave', () => {
      // remove active class
      if (!ele.classList.contains('clicked')) {
        ele.classList.remove('stars-high');
      }
    });

    // actions for stars
    let full = Array.from(event.target.querySelectorAll('.full')); // take amount of full stars from rating
    const stars = Array.from(event.target.querySelectorAll('span')); // take each star from rating

    stars.forEach(ele => {
      ele.addEventListener('click', () => {
        // add or remove star on click
        starControl(ele);
        full = Array.from(event.target.querySelectorAll('.full')); // update amount of full stars from rating
      });
      ele.addEventListener('mouseenter', () => {
        // add stars on hover
        starControl(ele);
      });
      ele.addEventListener('mouseleave', () => {
        // remove stars after hover
        const sibs = getPreviousSiblings(ele);
        ele.classList.remove('full');
        sibs.forEach(ele => {
          ele.classList.remove('full');
        });
        full.forEach(ele => {
          // return amount of full stars before hover
          ele.classList.add('full');
        });
      });
    });
  });
});

// function for add/remove stars
const starControl = ele => {
  const sibs = getPreviousSiblings(ele);
  const nextSibling = getNextSiblings(ele);
  ele.classList.add('full');
  sibs.forEach(ele => {
    ele.classList.add('full');
  });
  nextSibling.forEach(ele => {
    ele.classList.remove('full');
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
    if (nextElem.nodeType === 3) continue; // ignore text nodes
    if (nextElem === elem) continue; // ignore elem of target
    if (nextElem === elem.nextElementSibling) {
      if (!filter || filter(elem)) {
        sibs.push(nextElem);
        elem = nextElem;
      }
    }
  } while ((nextElem = nextElem.nextSibling));
  return sibs;
};
