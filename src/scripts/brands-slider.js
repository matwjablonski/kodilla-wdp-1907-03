const carouselBox = document.querySelector('#brands-carousel');
const box = document.querySelector('.brands-box');
const items = document.querySelectorAll('.logo-box');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const threshold = 75; // required min distance traveled to be considered swipe
const allowedTime = 200; // maximum time allowed to travel that distance
let startX;
let startY;
let dist;
let elapsedTime;
let startTime;
let valueToTranslate = carouselBox.clientWidth;
let translate = 0;
let maxCounter = Math.ceil((items[0].clientWidth * items.length) / valueToTranslate);
let counter = 1;

window.addEventListener('resize', function () {
  this.setTimeout(function () {
    valueToTranslate = carouselBox.clientWidth;
    maxCounter = Math.ceil((items[0].clientWidth * items.length) / valueToTranslate);
    counter = 1;
    carouselBox.style.transform = `translateX(0)`;
  }, 500);
});

swipeLeft = () => {
  if (counter > 1) {
    counter = counter - 1;
    translate = translate - valueToTranslate;
    carouselBox.style.transform = `translateX(-${translate}px)`;
  } else if (counter === 1) {
    counter = maxCounter;
    translate = valueToTranslate * (counter - 1);
    carouselBox.style.transform = `translateX(-${translate}px)`;
  }
};

swipeRight = () => {
  if (counter < maxCounter) {
    translate = valueToTranslate * counter;
    carouselBox.style.transform = `translateX(-${translate}px)`;
    counter += 1;
  } else {
    counter = 1;
    carouselBox.style.transform = `translateX(0)`;
  }
};
// click to slide
nextBtn.addEventListener('click', function () {
  swipeRight();
});

prevBtn.addEventListener('click', function () {
  swipeLeft();
});

// touch to slide
window.addEventListener(
  'load',
  function () {
    function handleswipe (right) {
      if (right) swipeRight();
      else {
        swipeLeft();
      }
    }

    box.addEventListener(
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

    box.addEventListener(
      'touchmove',
      function (event) {
        event.preventDefault();
      },
      false
    );

    box.addEventListener(
      'touchend',
      function (event) {
        const touch = event.changedTouches[0];
        dist = touch.pageX - startX;
        elapsedTime = new Date().getTime() - startTime;
        const swipe_right =
          elapsedTime <= allowedTime &&
          dist >= threshold &&
          Math.abs(touch.pageY - startY) <= 50;
        handleswipe(swipe_right);
        event.preventDefault();
      },
      false
    );
  },
  false
);
