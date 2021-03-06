const carouselBox = document.querySelector('#gallery-carousel-topseller');
const items = document.querySelectorAll('.gallery-slide-box-topseller');
const nextBtn = document.querySelector('#gallery-topseller-next');
const prevBtn = document.querySelector('#gallery-topseller-prev');

let valueToTranslate = carouselBox.clientWidth;
let translate = 0;

let maxCounter = Math.ceil(
  ((items[0].clientWidth - 2) * items.length) / valueToTranslate
);
let counter = 1;

window.addEventListener('resize', function () {
  this.setTimeout(function () {
    valueToTranslate = carouselBox.clientWidth;
    maxCounter = Math.ceil((items[0].clientWidth * items.length) / valueToTranslate);
    counter = 1;
    carouselBox.style.transform = `translateX(0)`;
  }, 500);
});

nextBtn.addEventListener('click', function () {
  if (counter < maxCounter) {
    translate = valueToTranslate * counter;
    carouselBox.style.transform = `translateX(-${translate}px)`;
    counter += 1;
  } else {
    counter = 1;
    carouselBox.style.transform = `translateX(0)`;
  }
});

prevBtn.addEventListener('click', function () {
  if (counter > 1) {
    counter = counter - 1;
    translate = translate - valueToTranslate;
    carouselBox.style.transform = `translateX(-${translate}px)`;
  } else if (counter === 1) {
    counter = maxCounter;
    translate = valueToTranslate * (counter - 1);
    carouselBox.style.transform = `translateX(-${translate}px)`;
  }
});
