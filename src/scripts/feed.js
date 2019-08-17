const feed_item = document.querySelectorAll('.feed-item');
const pagination = document.querySelector('#pagination');
const feed = document.querySelector('.feed');
const threshold = 150;
const allowedTime = 200;
const valueToTranslate = feed.clientWidth;
let startX;
let startY;
let dist;
let elapsedTime;
let startTime;
let counter1 = 1;
let nOfSlides;
let translate1 = 0;

pagination.innerHTML = '';
feed_item.forEach((elem, index) => {
  const dot = document.createElement('li');
  const dotLink = document.createElement('a');
  dot.setAttribute('class', 'dot');
  dot.appendChild(dotLink);
  nOfSlides = index + 1;
  pagination.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');
dots.forEach((elem, index) => {
  elem.addEventListener('click', function (event) {
    remove();
    elem.firstChild.classList.add('active');
    counter = index;
    translate = valueToTranslate * counter;
    feed_item.forEach(elem => {
      elem.style.transform = `translateX(-${translate}px)`;
      
    });
  });
});

//first-dot
dots[0].firstChild.classList.add('active') 

//remove/clear all dots
remove = () => {
  dots.forEach(elem => {
    elem.firstChild.classList.remove('active');
  });
};

swipeR = () => {
  remove();
  if (counter1 < nOfSlides) {
    translate1 = valueToTranslate * counter1;
    feed_item.forEach(elem => {
      elem.style.transform = `translateX(-${translate1}px)`;
      console.log(counter1);
      dots[counter1].firstChild.classList.add('active');
      
    });
    counter1 += 1;
  }
};

swipeL = () => {
  remove();
  if (counter1 > 1) {
    counter1 = counter1 - 1;
    translate1 = translate1 - valueToTranslate;
    feed_item.forEach(elem => {
      elem.style.transform = `translateX(-${translate1}px)`;
      dots[counter1-1].firstChild.classList.add('active')
    });
  } else if (counter1 === 1) {
    counter1 = nOfSlides;
    translate1 = valueToTranslate * (counter1 - 1);
    feed_item.forEach(elem => {
      elem.style.transform = `translateX(-${translate1}px)`;
      dots[counter1-1].firstChild.classList.add('active')
    });
  }
};

// touch
function swipe(right) {
  if (right) swipeR();
  else {
    swipeL();
  }
}

feed.addEventListener(
  'touchstart',
  function (event) {
    const touch = event.changedTouches[0];
    dist = 0;
    startX = touch.pageX;
    startY = touch.pageY;
    startTime = new Date().getTime();
    event.preventDefault();
  },
  false
);

feed.addEventListener(
  'touchmove',
  function (event) {
    event.preventDefault();
  },
  false
);

feed.addEventListener(
  'touchend',
  function (event) {
    const touch = event.changedTouches[0];
    dist = touch.pageX - startX;
    elapsedTime = new Date().getTime() - startTime;
    const swipe_r =
      elapsedTime <= allowedTime &&
      dist >= threshold &&
      Math.abs(touch.pageY - startY) <= 150;
    swipe(swipe_r);
    event.preventDefault();
  },
  false
);
