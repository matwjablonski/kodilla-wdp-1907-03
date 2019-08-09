const productBox = document.querySelectorAll('.hot-deals-box');
const productBoxLen = productBox.length;
const dots = document.querySelectorAll('.hot-dot');

function isActive () {
  for (let i = 0; i < productBoxLen; i++) {
    if (productBox[i].classList.contains('active-hot-deal')) {
      return i;
    }
  }
}

function autoChange () {
  let i = isActive();
  for (let j = 0; j < productBoxLen; j++) {
    productBox[j].classList.remove('active-hot-deal');
    dots[j].classList.remove('active');
  }
  i += 1;
  if (i >= productBoxLen) {
    i = 0;
  }
  productBox[i].classList.add('active-hot-deal');
  dots[i].classList.add('active');
}

let time = setInterval(autoChange, 3000);

const showHotDeal = function () {
  clearInterval(time);
  setTimeout(autoChange, 6000);
  setTimeout(startInterval, 6000);
  for (let i = 0; i < productBoxLen; i++) {
    if (this === dots[i]) {
      productBox[i].classList.add('active-hot-deal');
      dots[i].classList.add('active');
    } else {
      productBox[i].classList.remove('active-hot-deal');
      dots[i].classList.remove('active');
    }
  }
};

function startInterval () {
  time = setInterval(autoChange, 3000);
}

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', showHotDeal);
}
